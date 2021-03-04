import React, { useEffect, useState } from 'react';
import DatePicker from './components/DatePicker.js';
import { RangeButton, OutputWrapper } from './components/styled';

const dates = {
  months: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  days: ['mon', 'tue', 'wen', 'thu', 'fri', 'sat', 'sun'],
  years: [2020, 2021, 2022, 2023, 2024, 2025],
};

const App = () => {
  const [type, setType] = useState('range');

  return (
    <div>
      <DatePicker dates={dates} type={type} />
      <OutputWrapper>
        <RangeButton onClick={() => setType('range')}>Range</RangeButton>
        <RangeButton onClick={() => setType('single')}>Single</RangeButton>
        <RangeButton>Multi Range</RangeButton>
      </OutputWrapper>
    </div>
  );
};

export default App;
