"use strict";
const { parseFloatingPointNumber } = require("./strings");
const {
  parseDateString,
  parseLocalDateAndTimeString,
  parseMonthString,
  parseTimeString,
  parseWeekString,

  serializeDate,
  serializeMonth,
  serializeNormalizedDateAndTime,
  serializeTime,
  serializeWeek,
  parseDateAsWeek
} = require("./dates-and-times");

// Necessary because Date.UTC() treats year within [0, 99] as [1900, 1999].
function getUTCMs(year, month = 1, day = 1, hour = 0, minute = 0, second = 0, millisecond = 0) {
  if (year > 99 || year < 0) {
    return Date.UTC(year, month - 1, day, hour, minute, second, millisecond);
  }
  const d = new Date(0);
  d.setUTCFullYear(year);
  d.setUTCMonth(month - 1);
  d.setUTCDate(day);
  d.setUTCHours(hour);
  d.setUTCMinutes(minute);
  d.setUTCSeconds(second, millisecond);
  return d.valueOf();
}

const dayOfWeekRelMondayLUT = [-1, 0, 1, 2, 3, -3, -2];

exports.convertStringToNumberByType = {
  // https://html.spec.whatwg.org/multipage/input.html#date-state-(type=date):concept-input-value-string-number
  date(input) {
    const date = parseDateString(input);
    if (date === null) {
      return null;
    }
    return getUTCMs(date.year, date.month, date.day);
  },
  // https://html.spec.whatwg.org/multipage/input.html#month-state-(type=month):concept-input-value-string-number
  month(input) {
    const date = parseMonthString(input);
    if (date === null) {
      return null;
    }
    return (date.year - 1970) * 12 + (date.month - 1);
  },
  // https://html.spec.whatwg.org/multipage/input.html#week-state-(type=week):concept-input-value-string-number
  week(input) {
    const date = parseWeekString(input);
    if (date === null) {
      return null;
    }
    const dateObj = new Date(getUTCMs(date.year));
    // An HTML week starts on Monday, while 0 represents Sunday. Account for such.
    const dayOfWeekRelMonday = dayOfWeekRelMondayLUT[dateObj.getUTCDay()];
    return dateObj.setUTCDate(1 + 7 * (date.week - 1) - dayOfWeekRelMonday);
  },
  // https://html.spec.whatwg.org/multipage/input.html#time-state-(type=time):concept-input-value-string-number
  time(input) {
    const time = parseTimeString(input);
    if (time === null) {
      return null;
    }
    return ((time.hour * 60 + time.minute) * 60 + time.second) * 1000 + time.millisecond;
  },
  // https://html.spec.whatwg.org/multipage/input.html#local-date-and-time-state-(type=datetime-local):concept-input-value-string-number
  "datetime-local"(input) {
    const dateAndTime = parseLocalDateAndTimeString(input);
    if (dateAndTime === null) {
      return null;
    }
    const { date: { year, month, day }, time: { hour, minute, second, millisecond } } = dateAndTime;
    // Doesn't quite matter whether or not UTC is used, since the offset from 1970-01-01 local time is returned.
    return getUTCMs(year, month, day, hour, minute, second, millisecond);
  },
  // https://html.spec.whatwg.org/multipage/input.html#number-state-(type=number):concept-input-value-string-number
  number: parseFloatingPointNumber,
  // https://html.spec.whatwg.org/multipage/input.html#range-state-(type=range):concept-input-value-string-number
  range: parseFloatingPointNumber
};

exports.convertStringToDateByType = {
  date(input) {
    const parsedInput = exports.convertStringToNumberByType.date(input);
    return parsedInput === null ? null : new Date(parsedInput);
  },
  // https://html.spec.whatwg.org/multipage/input.html#month-state-(type=month):concept-input-value-string-number
  month(input) {
    const parsedMonthString = parseMonthString(input);
    if (parsedMonthString === null) {
      return null;
    }

    const date = new Date(0);
    date.setUTCFullYear(parsedMonthString.year);
    date.setUTCMonth(parsedMonthString.month - 1);
    return date;
  },
  week(input) {
    const parsedInput = exports.convertStringToNumberByType.week(input);
    return parsedInput === null ? null : new Date(parsedInput);
  },
  time(input) {
    const parsedInput = exports.convertStringToNumberByType.time(input);
    return parsedInput === null ? null : new Date(parsedInput);
  },
  "datetime-local"(input) {
    const parsedInput = exports.convertStringToNumberByType["datetime-local"](input);
    return parsedInput === null ? null : new Date(parsedInput);
  }
};

exports.serializeDateByType = {
  date(input) {
    return serializeDate({
      year: input.getUTCFullYear(),
      month: input.getUTCMonth() + 1,
      day: input.getUTCDate()
    });
  },
  month(input) {
    return serializeMonth({
      year: input.getUTCFullYear(),
      month: input.getUTCMonth() + 1
    });
  },
  week(input) {
    return serializeWeek(parseDateAsWeek(input));
  },
  time(input) {
    return serializeTime({
      hour: input.getUTCHours(),
      minute: input.getUTCMinutes(),
      second: input.getUTCSeconds(),
      millisecond: input.getUTCMilliseconds()
    });
  },
  "datetime-local"(input) {
    return serializeNormalizedDateAndTime({
      date: {
        year: input.getUTCFullYear(),
        month: input.getUTCMonth() + 1,
        day: input.getUTCDate()
      },
      time: {
        hour: input.getUTCHours(),
        minute: input.getUTCMinutes(),
        second: input.getUTCSeconds(),
        millisecond: input.getUTCMilliseconds()
      }
    });
  }
};

exports.convertNumberToStringByType = {
  // https://html.spec.whatwg.org/multipage/input.html#date-state-(type=date):concept-input-value-string-number
  date(input) {
    return exports.serializeDateByType.date(new Date(input));
  },
  // https://html.spec.whatwg.org/multipage/input.html#month-state-(type=month):concept-input-value-string-date
  month(input) {
    const year = 1970 + Math.floor(input / 12);
    const month = input % 12;
    const date = new Date(0);
    date.setUTCFullYear(year);
    date.setUTCMonth(month);

    return exports.serializeDateByType.month(date);
  },
  // https://html.spec.whatwg.org/multipage/input.html#week-state-(type=week):concept-input-value-string-date
  week(input) {
    return exports.serializeDateByType.week(new Date(input));
  },
  // https://html.spec.whatwg.org/multipage/input.html#time-state-(type=time):concept-input-value-string-date
  time(input) {
    return exports.serializeDateByType.time(new Date(input));
  },
  // https://html.spec.whatwg.org/multipage/input.html#local-date-and-time-state-(type=datetime-local):concept-input-value-number-string
  "datetime-local"(input) {
    return exports.serializeDateByType["datetime-local"](new Date(input));
  },
  // https://html.spec.whatwg.org/multipage/input.html#number-state-(type=number):concept-input-value-number-string
  number(input) {
    return input.toString();
  },
  // https://html.spec.whatwg.org/multipage/input.html#range-state-(type=range):concept-input-value-number-string
  range(input) {
    return input.toString();
  }
};
