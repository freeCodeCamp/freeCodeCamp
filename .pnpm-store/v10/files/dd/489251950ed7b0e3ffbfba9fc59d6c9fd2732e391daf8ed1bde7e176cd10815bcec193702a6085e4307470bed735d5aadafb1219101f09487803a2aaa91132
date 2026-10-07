"use strict";

function isLeapYear(year) {
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
}

// https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#number-of-days-in-month-month-of-year-year
const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function numberOfDaysInMonthOfYear(month, year) {
  if (month === 2 && isLeapYear(year)) {
    return 29;
  }
  return daysInMonth[month - 1];
}

const monthRe = /^([0-9]{4,})-([0-9]{2})$/;

// https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#parse-a-month-string
function parseMonthString(str) {
  const matches = monthRe.exec(str);
  if (!matches) {
    return null;
  }
  const year = Number(matches[1]);
  if (year <= 0) {
    return null;
  }
  const month = Number(matches[2]);
  if (month < 1 || month > 12) {
    return null;
  }
  return { year, month };
}

// https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-month-string
function isValidMonthString(str) {
  return parseMonthString(str) !== null;
}
function serializeMonth({ year, month }) {
  const yearStr = `${year}`.padStart(4, "0");
  const monthStr = `${month}`.padStart(2, "0");
  return `${yearStr}-${monthStr}`;
}

const dateRe = /^([0-9]{4,})-([0-9]{2})-([0-9]{2})$/;

// https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#parse-a-date-string
function parseDateString(str) {
  const matches = dateRe.exec(str);
  if (!matches) {
    return null;
  }
  const year = Number(matches[1]);
  if (year <= 0) {
    return null;
  }
  const month = Number(matches[2]);
  if (month < 1 || month > 12) {
    return null;
  }
  const day = Number(matches[3]);
  if (day < 1 || day > numberOfDaysInMonthOfYear(month, year)) {
    return null;
  }
  return { year, month, day };
}

// https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
function isValidDateString(str) {
  return parseDateString(str) !== null;
}
function serializeDate(date) {
  const dayStr = `${date.day}`.padStart(2, "0");
  return `${serializeMonth(date)}-${dayStr}`;
}

const yearlessDateRe = /^(?:--)?([0-9]{2})-([0-9]{2})$/;

// https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#parse-a-yearless-date-string
function parseYearlessDateString(str) {
  const matches = yearlessDateRe.exec(str);
  if (!matches) {
    return null;
  }
  const month = Number(matches[1]);
  if (month < 1 || month > 12) {
    return null;
  }
  const day = Number(matches[2]);
  if (day < 1 || day > numberOfDaysInMonthOfYear(month, 4)) {
    return null;
  }
  return { month, day };
}

// https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-yearless-date-string
function isValidYearlessDateString(str) {
  return parseYearlessDateString(str) !== null;
}
function serializeYearlessDate({ month, day }) {
  const monthStr = `${month}`.padStart(2, "0");
  const dayStr = `${day}`.padStart(2, "0");
  return `${monthStr}-${dayStr}`;
}

const timeRe = /^([0-9]{2}):([0-9]{2})(?::([0-9]{2}(?:\.([0-9]{1,3}))?))?$/;

// https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#parse-a-time-string
function parseTimeString(str) {
  const matches = timeRe.exec(str);
  if (!matches) {
    return null;
  }
  const hour = Number(matches[1]);
  if (hour < 0 || hour > 23) {
    return null;
  }
  const minute = Number(matches[2]);
  if (minute < 0 || minute > 59) {
    return null;
  }
  const second = matches[3] !== undefined ? Math.trunc(Number(matches[3])) : 0;
  if (second < 0 || second >= 60) {
    return null;
  }
  const millisecond = matches[4] !== undefined ? Number(matches[4]) : 0;
  return { hour, minute, second, millisecond };
}

// https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-time-string
function isValidTimeString(str) {
  return parseTimeString(str) !== null;
}

function serializeTime({ hour, minute, second, millisecond }) {
  const hourStr = `${hour}`.padStart(2, "0");
  const minuteStr = `${minute}`.padStart(2, "0");
  if (second === 0 && millisecond === 0) {
    return `${hourStr}:${minuteStr}`;
  }
  const secondStr = `${second}`.padStart(2, "0");
  const millisecondStr = `${millisecond}`.padStart(3, "0");
  return `${hourStr}:${minuteStr}:${secondStr}.${millisecondStr}`;
}

// https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#parse-a-local-date-and-time-string
function parseLocalDateAndTimeString(str, normalized = false) {
  let separatorIdx = str.indexOf("T");
  if (separatorIdx < 0 && !normalized) {
    separatorIdx = str.indexOf(" ");
  }
  if (separatorIdx < 0) {
    return null;
  }
  const date = parseDateString(str.slice(0, separatorIdx));
  if (date === null) {
    return null;
  }
  const time = parseTimeString(str.slice(separatorIdx + 1));
  if (time === null) {
    return null;
  }
  return { date, time };
}

// https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-local-date-and-time-string
function isValidLocalDateAndTimeString(str) {
  return parseLocalDateAndTimeString(str) !== null;
}

// https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-normalised-local-date-and-time-string
function isValidNormalizedLocalDateAndTimeString(str) {
  return parseLocalDateAndTimeString(str, true) !== null;
}
function serializeNormalizedDateAndTime({ date, time }) {
  return `${serializeDate(date)}T${serializeTime(time)}`;
}

// https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#week-number-of-the-last-day
// https://stackoverflow.com/a/18538272/1937836
function weekNumberOfLastDay(year) {
  const jan1 = new Date(year, 0);
  return jan1.getDay() === 4 || (isLeapYear(year) && jan1.getDay() === 3) ? 53 : 52;
}

const weekRe = /^([0-9]{4,5})-W([0-9]{2})$/;

// https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#parse-a-week-string
function parseWeekString(str) {
  const matches = weekRe.exec(str);
  if (!matches) {
    return null;
  }
  const year = Number(matches[1]);
  if (year <= 0) {
    return null;
  }
  const week = Number(matches[2]);
  if (week < 1 || week > weekNumberOfLastDay(year)) {
    return null;
  }
  return { year, week };
}

// https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-week-string
function isValidWeekString(str) {
  return parseWeekString(str) !== null;
}
function serializeWeek({ year, week }) {
  const yearStr = `${year}`.padStart(4, "0");
  const weekStr = `${week}`.padStart(2, "0");
  return `${yearStr}-W${weekStr}`;
}

// https://stackoverflow.com/a/6117889
function parseDateAsWeek(originalDate) {
  const dayInSeconds = 86400000;
  // Copy date so don't modify original
  const date = new Date(Date.UTC(originalDate.getUTCFullYear(), originalDate.getUTCMonth(), originalDate.getUTCDate()));
  // Set to nearest Thursday: current date + 4 - current day number
  // Make Sunday's day number 7
  date.setUTCDate(date.getUTCDate() + 4 - (date.getUTCDay() || 7));
  // Get first day of year
  const yearStart = new Date(Date.UTC(date.getUTCFullYear(), 0, 1));
  // Calculate full weeks to nearest Thursday
  const week = Math.ceil((((date - yearStart) / dayInSeconds) + 1) / 7);

  return { year: date.getUTCFullYear(), week };
}

function isDate(obj) {
  try {
    Date.prototype.valueOf.call(obj);
    return true;
  } catch {
    return false;
  }
}

module.exports = {
  isDate,
  numberOfDaysInMonthOfYear,

  parseMonthString,
  isValidMonthString,
  serializeMonth,

  parseDateString,
  isValidDateString,
  serializeDate,

  parseYearlessDateString,
  isValidYearlessDateString,
  serializeYearlessDate,

  parseTimeString,
  isValidTimeString,
  serializeTime,

  parseLocalDateAndTimeString,
  isValidLocalDateAndTimeString,
  isValidNormalizedLocalDateAndTimeString,
  serializeNormalizedDateAndTime,

  parseDateAsWeek,
  weekNumberOfLastDay,
  parseWeekString,
  isValidWeekString,
  serializeWeek
};
