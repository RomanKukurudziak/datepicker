import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as calendar from './CalendarLogic';
import {
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
  let monthSelect = '';
  let yearSelect = '';

  let [date, setDate] = useState(new Date());
  let [monthData, setMonthDate] = useState([]);

  let [selectedDate, setSelectedDate] = useState(new Date());
  let [selectedRangeDate, setSelectedRangeDate] = useState(new Date());

  //Rerender date table each time date changes
  useEffect(() => {
    setMonthDate(calendar.getMonthData(date.getFullYear(), date.getMonth()));
  }, [date]);
  console.log(monthData);
  //If type is not range - disable initial range start
  useEffect(() => {
    if (type !== 'range') {
      setSelectedRangeDate('');
    }
  }, [type]);

  const handlePrevMonthButton = () => {
    let prevDate = new Date(date.getFullYear(), date.getMonth() - 1);
    setDate(prevDate);
  };

  const handleNextMonthButton = () => {
    let prevDate = new Date(date.getFullYear(), date.getMonth() + 1);
    setDate(prevDate);
  };

  const handleSelectChange = () => {
    let dateSelect = new Date(yearSelect.value, monthSelect.value);
    setDate(dateSelect);
  };

  const handleDayClick = (day) => {
    setSelectedDate(day);

    if (selectedDate > day && type === 'range') {
      setSelectedRangeDate(day);
    }
  };

  return (
    <Calendar>
      <Header>
        <OutputWrapper>
          <OutputStart
            typeProp={type}
            value={
              selectedRangeDate
                ? `${selectedRangeDate.getDate().toString().padStart(2, 0)}-${(
                    selectedRangeDate.getMonth() + 1
                  )
                    .toString()
                    .padStart(2, 0)}-${selectedRangeDate.getFullYear()}`
                : ''
            }
            onChange={Function.prototype}
          />
          <Output
            value={`${selectedDate.getDate().toString().padStart(2, 0)}-${(
              selectedDate.getMonth() + 1
            )
              .toString()
              .padStart(2, 0)}-${selectedDate.getFullYear()}`}
            onChange={Function.prototype}
          />
        </OutputWrapper>
        <Hr />

        <OutputWrapper>
          <Button onClick={() => handlePrevMonthButton()}>{'<'}</Button>

          <Select
            value={date.getMonth()}
            onChange={() => handleSelectChange()}
            ref={(el) => (monthSelect = el)}
          >
            {months.map((month, index) => {
              return (
                <option key={month} value={index}>
                  {month}
                </option>
              );
            })}
          </Select>

          <Select
            value={date.getFullYear()}
            onChange={() => handleSelectChange()}
            ref={(el) => (yearSelect = el)}
          >
            {years.map((year, index) => {
              return (
                <option key={index} value={year}>
                  {year}
                </option>
              );
            })}
          </Select>

          <Button onClick={() => handleNextMonthButton()}>{'>'}</Button>
        </OutputWrapper>
        <Hr />
      </Header>

      <Table>
        <thead>
          <Weekdays>
            {days.map((day) => {
              return <th key={day}>{day}</th>;
            })}
          </Weekdays>
        </thead>

        <tbody>
          {monthData.map((week, index) => {
            return (
              <tr key={index}>
                {week.map((date, index) => {
                  return date ? (
                    <Day
                      key={index}
                      onClick={() => handleDayClick(date)}
                      className={`${calendar.inRange(
                        selectedRangeDate,
                        selectedDate,
                        date,
                        type
                      )} ${calendar.areEqual(
                        date,
                        new Date(),
                        'today'
                      )} ${calendar.areEqual(
                        date,
                        selectedDate,
                        'selected'
                      )} ${calendar.areEqual(
                        date,
                        selectedRangeDate,
                        'selectedEnd'
                      )}`}
                    >
                      {date.getDate()}
                    </Day>
                  ) : (
                    <td key={index}></td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Calendar>
  );
};

DatePicker.propTypes = {
  dates: PropTypes.object.isRequired,
  type: PropTypes.string,
};

DatePicker.defaultProps = {
  type: 'range',
};

export default DatePicker;
