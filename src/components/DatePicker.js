import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { areEqual, inRange, getMonthData, outputFormating } from './helpers.js';
import {
  Wrapper,
  Output,
  OutputStart,
  OutputWrapper,
  Header,
  Select,
  Table,
  Day,
  Calendar,
  Weekdays,
  Hr,
  Button,
} from './styled';

const DatePicker = ({ dates, type }) => {
  const { months, days, years } = dates;

  const [date, setDate] = useState(new Date());
  const [monthData, setMonthDate] = useState([]);
  const [pickedDate, setPickedDate] = useState({
    year: date.getFullYear(),
    month: date.getMonth(),
  });

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedRangeDate, setSelectedRangeDate] = useState(new Date());

  const pro = { active: '' };

  const handlePrevMonthButton = () =>
    setDate(new Date(date.getFullYear(), date.getMonth() - 1));

  const handleNextMonthButton = () => {
    let prevDate = new Date(date.getFullYear(), date.getMonth() + 1);
    setDate(prevDate);
  };

  const handleSelectChange = (field) => (event) => {
    setPickedDate({ ...pickedDate, [field]: event.target.value });
  };

  const handleDayClick = (day) => {
    setSelectedDate(day);

    if (selectedDate > day && type === 'range') {
      setSelectedRangeDate(day);
    }
  };

  useEffect(() => {
    setMonthDate(getMonthData(date.getFullYear(), date.getMonth()));
  }, [date]);

  useEffect(() => {
    if (type === 'single') {
      setSelectedRangeDate('');
    } else {
      setSelectedRangeDate(selectedDate);
    }
  }, [type]);

  useEffect(() => {
    setDate(new Date(pickedDate.year, pickedDate.month));
  }, [pickedDate]);

  return (
    <Wrapper>
      <Calendar>
        <Header>
          <OutputWrapper>
            <OutputStart
              typeProp={type}
              value={
                selectedRangeDate ? outputFormating(selectedRangeDate) : ''
              }
              onChange={() => {}}
            />
            <Output
              value={selectedDate ? outputFormating(selectedDate) : ''}
              onChange={() => {}}
            />
          </OutputWrapper>
          <Hr />

          <OutputWrapper>
            <Button onClick={() => handlePrevMonthButton()}>{'<'}</Button>

            <Select
              value={date.getMonth()}
              onChange={handleSelectChange('month')}
            >
              {months.map((month, index) => (
                <option key={month} value={index}>
                  {month}
                </option>
              ))}
            </Select>

            <Select
              value={date.getFullYear()}
              onChange={handleSelectChange('year')}
            >
              {years.map((year, index) => (
                <option key={index} value={year}>
                  {year}
                </option>
              ))}
            </Select>

            <Button onClick={() => handleNextMonthButton()}>{'>'}</Button>
          </OutputWrapper>
          <Hr />
        </Header>

        <Table>
          <thead>
            <Weekdays>
              {days.map((day) => (
                <th key={day}>{day}</th>
              ))}
            </Weekdays>
          </thead>

          <tbody {...dates}>
            {monthData.map((week, index) => {
              return (
                <tr key={index}>
                  {week.map((date, index) =>
                    date ? (
                      <Day
                        key={index}
                        {...inRange(
                          selectedRangeDate,
                          selectedDate,
                          date,
                          type
                        )}
                        onClick={() => handleDayClick(date)}
                        className={`${areEqual(
                          date,
                          new Date(),
                          'today'
                        )} ${areEqual(
                          date,
                          selectedDate,
                          'selected'
                        )} ${areEqual(date, selectedRangeDate, 'selectedEnd')}`}
                      >
                        {date.getDate()}
                      </Day>
                    ) : (
                      <td key={index}></td>
                    )
                  )}
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Calendar>
    </Wrapper>
  );
};

DatePicker.propTypes = {
  dates: PropTypes.shape({
    days: PropTypes.arrayOf(PropTypes.string),
    months: PropTypes.arrayOf(PropTypes.string),
    years: PropTypes.arrayOf(PropTypes.number),
  }).isRequired,
  type: PropTypes.string.isRequired,
};

DatePicker.defaultProps = {
  type: 'range',
};

export default DatePicker;
