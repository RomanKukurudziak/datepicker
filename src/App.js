import React from 'react';
import DatePicker from './components/DatePicker.js';

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

const type = 'range'; //If range - range is enabled, else single date pick. Multirange not implemented

const App = () => {
  return (
    <div>
      <DatePicker dates={dates} type={type} />
    </div>
  );
};

export default App;
