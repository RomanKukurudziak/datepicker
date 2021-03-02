const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

//Forming array with dates to pass into table
export function getMonthData(year, month) {
  const table = [];
  const date = new Date(year, month);
  const daysInMonth = getDaysInMonth(date);
  const monthStartOn = getDayOfWeek(date);
  let day = 1;

  for (let i = 0; i < daysInMonth + monthStartOn / 7; i++) {
    table[i] = [];
    for (let j = 0; j < 7; j++) {
      if ((i === 0 && j < monthStartOn) || day > daysInMonth) {
        table[i][j] = undefined;
      } else {
        table[i][j] = new Date(year, month, day++);
      }
    }
  }
  return table;
}

//Date comparison
export function areEqual(a, b, name) {
  if (!a || !b) return '';

  if (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  ) {
    return name;
  } else {
    return '';
  }
}

//Getting num of days in month including leap year January
export function getDaysInMonth(date) {
  const month = date.getMonth();
  if (isLeapYear(date.getFullYear()) && month === 1) {
    return DAYS_IN_MONTH[month] + 1;
  } else {
    return DAYS_IN_MONTH[month];
  }
}

//Day on which month starts
export function getDayOfWeek(date) {
  const dayOfWeek = date.getDay();
  if (dayOfWeek === 0) return 6;
  return dayOfWeek - 1;
}

//Вирахування високосного року
export function isLeapYear(year) {
  return !(year % 4 || (!(year % 100) && year % 400));
}

export function inRange(start, end, current, type) {
  if (current > start && current < end && type === 'range') {
    return type;
  } else {
    return '';
  }
}

//Display selected date
export function renderSelected(date) {
  if (date) {
    console.log(date);
    return `${date.getDate().toString().padStart(2, 0)} ${
      date.months[date.getMonth()]
    } ${date.getFullYear()}`;
  } else {
    return '';
  }
}
