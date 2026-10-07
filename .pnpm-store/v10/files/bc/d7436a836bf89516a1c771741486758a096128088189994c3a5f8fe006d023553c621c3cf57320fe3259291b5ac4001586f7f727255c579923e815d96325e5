(() => {
var _window$dateFns;function _typeof(o) {"@babel/helpers - typeof";return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {return typeof o;} : function (o) {return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;}, _typeof(o);}function ownKeys(e, r) {var t = Object.keys(e);if (Object.getOwnPropertySymbols) {var o = Object.getOwnPropertySymbols(e);r && (o = o.filter(function (r) {return Object.getOwnPropertyDescriptor(e, r).enumerable;})), t.push.apply(t, o);}return t;}function _objectSpread(e) {for (var r = 1; r < arguments.length; r++) {var t = null != arguments[r] ? arguments[r] : {};r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {_defineProperty(e, r, t[r]);}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));});}return e;}function _defineProperty(obj, key, value) {key = _toPropertyKey(key);if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _toPropertyKey(t) {var i = _toPrimitive(t, "string");return "symbol" == _typeof(i) ? i : String(i);}function _toPrimitive(t, r) {if ("object" != _typeof(t) || !t) return t;var e = t[Symbol.toPrimitive];if (void 0 !== e) {var i = e.call(t, r || "default");if ("object" != _typeof(i)) return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return ("string" === r ? String : Number)(t);}var __defProp = Object.defineProperty;
var __export = function __export(target, all) {
  for (var name in all)
  __defProp(target, name, {
    get: all[name],
    enumerable: true,
    configurable: true,
    set: function set(newValue) {return all[name] = function () {return newValue;};}
  });
};

// lib/locale/_lib/buildLocalizeFn.js
function buildLocalizeFn(args) {
  return function (value, options) {
    var context = options !== null && options !== void 0 && options.context ? String(options.context) : "standalone";
    var valuesArray;
    if (context === "formatting" && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options !== null && options !== void 0 && options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;
      var _width = options !== null && options !== void 0 && options.width ? String(options.width) : args.defaultWidth;
      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }
    var index = args.argumentCallback ? args.argumentCallback(value) : value;
    return valuesArray[index];
  };
}

// lib/locale/bn/_lib/localize.js
function dateOrdinalNumber(number, localeNumber) {
  if (number > 18 && number <= 31) {
    return localeNumber + "\u09B6\u09C7";
  } else {
    switch (number) {
      case 1:
        return localeNumber + "\u09B2\u09BE";
      case 2:
      case 3:
        return localeNumber + "\u09B0\u09BE";
      case 4:
        return localeNumber + "\u09A0\u09BE";
      default:
        return localeNumber + "\u0987";
    }
  }
}
function numberToLocale(enNumber) {
  return enNumber.toString().replace(/\d/g, function (match) {
    return numberValues.locale[match];
  });
}
var numberValues = {
  locale: {
    1: "\u09E7",
    2: "\u09E8",
    3: "\u09E9",
    4: "\u09EA",
    5: "\u09EB",
    6: "\u09EC",
    7: "\u09ED",
    8: "\u09EE",
    9: "\u09EF",
    0: "\u09E6"
  },
  number: {
    "\u09E7": "1",
    "\u09E8": "2",
    "\u09E9": "3",
    "\u09EA": "4",
    "\u09EB": "5",
    "\u09EC": "6",
    "\u09ED": "7",
    "\u09EE": "8",
    "\u09EF": "9",
    "\u09E6": "0"
  }
};
var eraValues = {
  narrow: ["\u0996\u09CD\u09B0\u09BF\u0983\u09AA\u09C2\u0983", "\u0996\u09CD\u09B0\u09BF\u0983"],
  abbreviated: ["\u0996\u09CD\u09B0\u09BF\u0983\u09AA\u09C2\u09B0\u09CD\u09AC", "\u0996\u09CD\u09B0\u09BF\u0983"],
  wide: ["\u0996\u09CD\u09B0\u09BF\u09B8\u09CD\u099F\u09AA\u09C2\u09B0\u09CD\u09AC", "\u0996\u09CD\u09B0\u09BF\u09B8\u09CD\u099F\u09BE\u09AC\u09CD\u09A6"]
};
var quarterValues = {
  narrow: ["\u09E7", "\u09E8", "\u09E9", "\u09EA"],
  abbreviated: ["\u09E7\u09A4\u09CD\u09B0\u09C8", "\u09E8\u09A4\u09CD\u09B0\u09C8", "\u09E9\u09A4\u09CD\u09B0\u09C8", "\u09EA\u09A4\u09CD\u09B0\u09C8"],
  wide: ["\u09E7\u09AE \u09A4\u09CD\u09B0\u09C8\u09AE\u09BE\u09B8\u09BF\u0995", "\u09E8\u09DF \u09A4\u09CD\u09B0\u09C8\u09AE\u09BE\u09B8\u09BF\u0995", "\u09E9\u09DF \u09A4\u09CD\u09B0\u09C8\u09AE\u09BE\u09B8\u09BF\u0995", "\u09EA\u09B0\u09CD\u09A5 \u09A4\u09CD\u09B0\u09C8\u09AE\u09BE\u09B8\u09BF\u0995"]
};
var monthValues = {
  narrow: [
  "\u099C\u09BE\u09A8\u09C1",
  "\u09AB\u09C7\u09AC\u09CD\u09B0\u09C1",
  "\u09AE\u09BE\u09B0\u09CD\u099A",
  "\u098F\u09AA\u09CD\u09B0\u09BF\u09B2",
  "\u09AE\u09C7",
  "\u099C\u09C1\u09A8",
  "\u099C\u09C1\u09B2\u09BE\u0987",
  "\u0986\u0997\u09B8\u09CD\u099F",
  "\u09B8\u09C7\u09AA\u09CD\u099F",
  "\u0985\u0995\u09CD\u099F\u09CB",
  "\u09A8\u09AD\u09C7",
  "\u09A1\u09BF\u09B8\u09C7"],

  abbreviated: [
  "\u099C\u09BE\u09A8\u09C1",
  "\u09AB\u09C7\u09AC\u09CD\u09B0\u09C1",
  "\u09AE\u09BE\u09B0\u09CD\u099A",
  "\u098F\u09AA\u09CD\u09B0\u09BF\u09B2",
  "\u09AE\u09C7",
  "\u099C\u09C1\u09A8",
  "\u099C\u09C1\u09B2\u09BE\u0987",
  "\u0986\u0997\u09B8\u09CD\u099F",
  "\u09B8\u09C7\u09AA\u09CD\u099F",
  "\u0985\u0995\u09CD\u099F\u09CB",
  "\u09A8\u09AD\u09C7",
  "\u09A1\u09BF\u09B8\u09C7"],

  wide: [
  "\u099C\u09BE\u09A8\u09C1\u09DF\u09BE\u09B0\u09BF",
  "\u09AB\u09C7\u09AC\u09CD\u09B0\u09C1\u09DF\u09BE\u09B0\u09BF",
  "\u09AE\u09BE\u09B0\u09CD\u099A",
  "\u098F\u09AA\u09CD\u09B0\u09BF\u09B2",
  "\u09AE\u09C7",
  "\u099C\u09C1\u09A8",
  "\u099C\u09C1\u09B2\u09BE\u0987",
  "\u0986\u0997\u09B8\u09CD\u099F",
  "\u09B8\u09C7\u09AA\u09CD\u099F\u09C7\u09AE\u09CD\u09AC\u09B0",
  "\u0985\u0995\u09CD\u099F\u09CB\u09AC\u09B0",
  "\u09A8\u09AD\u09C7\u09AE\u09CD\u09AC\u09B0",
  "\u09A1\u09BF\u09B8\u09C7\u09AE\u09CD\u09AC\u09B0"]

};
var dayValues = {
  narrow: ["\u09B0", "\u09B8\u09CB", "\u09AE", "\u09AC\u09C1", "\u09AC\u09C3", "\u09B6\u09C1", "\u09B6"],
  short: ["\u09B0\u09AC\u09BF", "\u09B8\u09CB\u09AE", "\u09AE\u0999\u09CD\u0997\u09B2", "\u09AC\u09C1\u09A7", "\u09AC\u09C3\u09B9", "\u09B6\u09C1\u0995\u09CD\u09B0", "\u09B6\u09A8\u09BF"],
  abbreviated: ["\u09B0\u09AC\u09BF", "\u09B8\u09CB\u09AE", "\u09AE\u0999\u09CD\u0997\u09B2", "\u09AC\u09C1\u09A7", "\u09AC\u09C3\u09B9", "\u09B6\u09C1\u0995\u09CD\u09B0", "\u09B6\u09A8\u09BF"],
  wide: [
  "\u09B0\u09AC\u09BF\u09AC\u09BE\u09B0",
  "\u09B8\u09CB\u09AE\u09AC\u09BE\u09B0",
  "\u09AE\u0999\u09CD\u0997\u09B2\u09AC\u09BE\u09B0",
  "\u09AC\u09C1\u09A7\u09AC\u09BE\u09B0",
  "\u09AC\u09C3\u09B9\u09B8\u09CD\u09AA\u09A4\u09BF\u09AC\u09BE\u09B0 ",
  "\u09B6\u09C1\u0995\u09CD\u09B0\u09AC\u09BE\u09B0",
  "\u09B6\u09A8\u09BF\u09AC\u09BE\u09B0"]

};
var dayPeriodValues = {
  narrow: {
    am: "\u09AA\u09C2",
    pm: "\u0985\u09AA",
    midnight: "\u09AE\u09A7\u09CD\u09AF\u09B0\u09BE\u09A4",
    noon: "\u09AE\u09A7\u09CD\u09AF\u09BE\u09B9\u09CD\u09A8",
    morning: "\u09B8\u0995\u09BE\u09B2",
    afternoon: "\u09AC\u09BF\u0995\u09BE\u09B2",
    evening: "\u09B8\u09A8\u09CD\u09A7\u09CD\u09AF\u09BE",
    night: "\u09B0\u09BE\u09A4"
  },
  abbreviated: {
    am: "\u09AA\u09C2\u09B0\u09CD\u09AC\u09BE\u09B9\u09CD\u09A8",
    pm: "\u0985\u09AA\u09B0\u09BE\u09B9\u09CD\u09A8",
    midnight: "\u09AE\u09A7\u09CD\u09AF\u09B0\u09BE\u09A4",
    noon: "\u09AE\u09A7\u09CD\u09AF\u09BE\u09B9\u09CD\u09A8",
    morning: "\u09B8\u0995\u09BE\u09B2",
    afternoon: "\u09AC\u09BF\u0995\u09BE\u09B2",
    evening: "\u09B8\u09A8\u09CD\u09A7\u09CD\u09AF\u09BE",
    night: "\u09B0\u09BE\u09A4"
  },
  wide: {
    am: "\u09AA\u09C2\u09B0\u09CD\u09AC\u09BE\u09B9\u09CD\u09A8",
    pm: "\u0985\u09AA\u09B0\u09BE\u09B9\u09CD\u09A8",
    midnight: "\u09AE\u09A7\u09CD\u09AF\u09B0\u09BE\u09A4",
    noon: "\u09AE\u09A7\u09CD\u09AF\u09BE\u09B9\u09CD\u09A8",
    morning: "\u09B8\u0995\u09BE\u09B2",
    afternoon: "\u09AC\u09BF\u0995\u09BE\u09B2",
    evening: "\u09B8\u09A8\u09CD\u09A7\u09CD\u09AF\u09BE",
    night: "\u09B0\u09BE\u09A4"
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: "\u09AA\u09C2",
    pm: "\u0985\u09AA",
    midnight: "\u09AE\u09A7\u09CD\u09AF\u09B0\u09BE\u09A4",
    noon: "\u09AE\u09A7\u09CD\u09AF\u09BE\u09B9\u09CD\u09A8",
    morning: "\u09B8\u0995\u09BE\u09B2",
    afternoon: "\u09AC\u09BF\u0995\u09BE\u09B2",
    evening: "\u09B8\u09A8\u09CD\u09A7\u09CD\u09AF\u09BE",
    night: "\u09B0\u09BE\u09A4"
  },
  abbreviated: {
    am: "\u09AA\u09C2\u09B0\u09CD\u09AC\u09BE\u09B9\u09CD\u09A8",
    pm: "\u0985\u09AA\u09B0\u09BE\u09B9\u09CD\u09A8",
    midnight: "\u09AE\u09A7\u09CD\u09AF\u09B0\u09BE\u09A4",
    noon: "\u09AE\u09A7\u09CD\u09AF\u09BE\u09B9\u09CD\u09A8",
    morning: "\u09B8\u0995\u09BE\u09B2",
    afternoon: "\u09AC\u09BF\u0995\u09BE\u09B2",
    evening: "\u09B8\u09A8\u09CD\u09A7\u09CD\u09AF\u09BE",
    night: "\u09B0\u09BE\u09A4"
  },
  wide: {
    am: "\u09AA\u09C2\u09B0\u09CD\u09AC\u09BE\u09B9\u09CD\u09A8",
    pm: "\u0985\u09AA\u09B0\u09BE\u09B9\u09CD\u09A8",
    midnight: "\u09AE\u09A7\u09CD\u09AF\u09B0\u09BE\u09A4",
    noon: "\u09AE\u09A7\u09CD\u09AF\u09BE\u09B9\u09CD\u09A8",
    morning: "\u09B8\u0995\u09BE\u09B2",
    afternoon: "\u09AC\u09BF\u0995\u09BE\u09B2",
    evening: "\u09B8\u09A8\u09CD\u09A7\u09CD\u09AF\u09BE",
    night: "\u09B0\u09BE\u09A4"
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber, options) {
  var number = Number(dirtyNumber);
  var localeNumber = numberToLocale(number);
  var unit = options === null || options === void 0 ? void 0 : options.unit;
  if (unit === "date") {
    return dateOrdinalNumber(number, localeNumber);
  }
  if (number > 10 || number === 0)
  return localeNumber + "\u09A4\u09AE";
  var rem10 = number % 10;
  switch (rem10) {
    case 2:
    case 3:
      return localeNumber + "\u09DF";
    case 4:
      return localeNumber + "\u09B0\u09CD\u09A5";
    case 6:
      return localeNumber + "\u09B7\u09CD\u09A0";
    default:
      return localeNumber + "\u09AE";
  }
};
var localize = {
  ordinalNumber: ordinalNumber,
  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: "wide"
  }),
  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: "wide",
    argumentCallback: function argumentCallback(quarter) {return quarter - 1;}
  }),
  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: "wide"
  }),
  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: "wide"
  }),
  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: "wide",
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: "wide"
  })
};

// lib/locale/bn/_lib/formatDistance.js
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: "\u09AA\u09CD\u09B0\u09BE\u09DF \u09E7 \u09B8\u09C7\u0995\u09C7\u09A8\u09CD\u09A1",
    other: "\u09AA\u09CD\u09B0\u09BE\u09DF {{count}} \u09B8\u09C7\u0995\u09C7\u09A8\u09CD\u09A1"
  },
  xSeconds: {
    one: "\u09E7 \u09B8\u09C7\u0995\u09C7\u09A8\u09CD\u09A1",
    other: "{{count}} \u09B8\u09C7\u0995\u09C7\u09A8\u09CD\u09A1"
  },
  halfAMinute: "\u0986\u09A7 \u09AE\u09BF\u09A8\u09BF\u099F",
  lessThanXMinutes: {
    one: "\u09AA\u09CD\u09B0\u09BE\u09DF \u09E7 \u09AE\u09BF\u09A8\u09BF\u099F",
    other: "\u09AA\u09CD\u09B0\u09BE\u09DF {{count}} \u09AE\u09BF\u09A8\u09BF\u099F"
  },
  xMinutes: {
    one: "\u09E7 \u09AE\u09BF\u09A8\u09BF\u099F",
    other: "{{count}} \u09AE\u09BF\u09A8\u09BF\u099F"
  },
  aboutXHours: {
    one: "\u09AA\u09CD\u09B0\u09BE\u09DF \u09E7 \u0998\u09A8\u09CD\u099F\u09BE",
    other: "\u09AA\u09CD\u09B0\u09BE\u09DF {{count}} \u0998\u09A8\u09CD\u099F\u09BE"
  },
  xHours: {
    one: "\u09E7 \u0998\u09A8\u09CD\u099F\u09BE",
    other: "{{count}} \u0998\u09A8\u09CD\u099F\u09BE"
  },
  xDays: {
    one: "\u09E7 \u09A6\u09BF\u09A8",
    other: "{{count}} \u09A6\u09BF\u09A8"
  },
  aboutXWeeks: {
    one: "\u09AA\u09CD\u09B0\u09BE\u09DF \u09E7 \u09B8\u09AA\u09CD\u09A4\u09BE\u09B9",
    other: "\u09AA\u09CD\u09B0\u09BE\u09DF {{count}} \u09B8\u09AA\u09CD\u09A4\u09BE\u09B9"
  },
  xWeeks: {
    one: "\u09E7 \u09B8\u09AA\u09CD\u09A4\u09BE\u09B9",
    other: "{{count}} \u09B8\u09AA\u09CD\u09A4\u09BE\u09B9"
  },
  aboutXMonths: {
    one: "\u09AA\u09CD\u09B0\u09BE\u09DF \u09E7 \u09AE\u09BE\u09B8",
    other: "\u09AA\u09CD\u09B0\u09BE\u09DF {{count}} \u09AE\u09BE\u09B8"
  },
  xMonths: {
    one: "\u09E7 \u09AE\u09BE\u09B8",
    other: "{{count}} \u09AE\u09BE\u09B8"
  },
  aboutXYears: {
    one: "\u09AA\u09CD\u09B0\u09BE\u09DF \u09E7 \u09AC\u099B\u09B0",
    other: "\u09AA\u09CD\u09B0\u09BE\u09DF {{count}} \u09AC\u099B\u09B0"
  },
  xYears: {
    one: "\u09E7 \u09AC\u099B\u09B0",
    other: "{{count}} \u09AC\u099B\u09B0"
  },
  overXYears: {
    one: "\u09E7 \u09AC\u099B\u09B0\u09C7\u09B0 \u09AC\u09C7\u09B6\u09BF",
    other: "{{count}} \u09AC\u099B\u09B0\u09C7\u09B0 \u09AC\u09C7\u09B6\u09BF"
  },
  almostXYears: {
    one: "\u09AA\u09CD\u09B0\u09BE\u09DF \u09E7 \u09AC\u099B\u09B0",
    other: "\u09AA\u09CD\u09B0\u09BE\u09DF {{count}} \u09AC\u099B\u09B0"
  }
};
var formatDistance = function formatDistance(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === "string") {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace("{{count}}", numberToLocale(count));
  }
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return result + " \u098F\u09B0 \u09AE\u09A7\u09CD\u09AF\u09C7";
    } else {
      return result + " \u0986\u0997\u09C7";
    }
  }
  return result;
};

// lib/locale/_lib/buildFormatLongFn.js
function buildFormatLongFn(args) {
  return function () {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

// lib/locale/bn/_lib/formatLong.js
var dateFormats = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
};
var timeFormats = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
};
var dateTimeFormats = {
  full: "{{date}} {{time}} '\u09B8\u09AE\u09DF'",
  long: "{{date}} {{time}} '\u09B8\u09AE\u09DF'",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
};
var formatLong = {
  date: buildFormatLongFn({
    formats: dateFormats,
    defaultWidth: "full"
  }),
  time: buildFormatLongFn({
    formats: timeFormats,
    defaultWidth: "full"
  }),
  dateTime: buildFormatLongFn({
    formats: dateTimeFormats,
    defaultWidth: "full"
  })
};

// lib/locale/bn/_lib/formatRelative.js
var formatRelativeLocale = {
  lastWeek: "'\u0997\u09A4' eeee '\u09B8\u09AE\u09DF' p",
  yesterday: "'\u0997\u09A4\u0995\u09BE\u09B2' '\u09B8\u09AE\u09DF' p",
  today: "'\u0986\u099C' '\u09B8\u09AE\u09DF' p",
  tomorrow: "'\u0986\u0997\u09BE\u09AE\u09C0\u0995\u09BE\u09B2' '\u09B8\u09AE\u09DF' p",
  nextWeek: "eeee '\u09B8\u09AE\u09DF' p",
  other: "P"
};
var formatRelative = function formatRelative(token, _date, _baseDate, _options) {return formatRelativeLocale[token];};

// lib/locale/_lib/buildMatchFn.js
function buildMatchFn(args) {
  return function (string) {var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);
    if (!matchResult) {
      return null;
    }
    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function (pattern) {return pattern.test(matchedString);}) : findKey(parsePatterns, function (pattern) {return pattern.test(matchedString);});
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return { value: value, rest: rest };
  };
}
function findKey(object, predicate) {
  for (var key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key) && predicate(object[key])) {
      return key;
    }
  }
  return;
}
function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
  return;
}

// lib/locale/_lib/buildMatchPatternFn.js
function buildMatchPatternFn(args) {
  return function (string) {var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult)
    return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult)
    return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return { value: value, rest: rest };
  };
}

// lib/locale/bn/_lib/match.js
var matchOrdinalNumberPattern = /^(\d+)(ম|য়|র্থ|ষ্ঠ|শে|ই|তম)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(খ্রিঃপূঃ|খ্রিঃ)/i,
  abbreviated: /^(খ্রিঃপূর্ব|খ্রিঃ)/i,
  wide: /^(খ্রিস্টপূর্ব|খ্রিস্টাব্দ)/i
};
var parseEraPatterns = {
  narrow: [/^খ্রিঃপূঃ/i, /^খ্রিঃ/i],
  abbreviated: [/^খ্রিঃপূর্ব/i, /^খ্রিঃ/i],
  wide: [/^খ্রিস্টপূর্ব/i, /^খ্রিস্টাব্দ/i]
};
var matchQuarterPatterns = {
  narrow: /^[১২৩৪]/i,
  abbreviated: /^[১২৩৪]ত্রৈ/i,
  wide: /^[১২৩৪](ম|য়|র্থ)? ত্রৈমাসিক/i
};
var parseQuarterPatterns = {
  any: [/১/i, /২/i, /৩/i, /৪/i]
};
var matchMonthPatterns = {
  narrow: /^(জানু|ফেব্রু|মার্চ|এপ্রিল|মে|জুন|জুলাই|আগস্ট|সেপ্ট|অক্টো|নভে|ডিসে)/i,
  abbreviated: /^(জানু|ফেব্রু|মার্চ|এপ্রিল|মে|জুন|জুলাই|আগস্ট|সেপ্ট|অক্টো|নভে|ডিসে)/i,
  wide: /^(জানুয়ারি|ফেব্রুয়ারি|মার্চ|এপ্রিল|মে|জুন|জুলাই|আগস্ট|সেপ্টেম্বর|অক্টোবর|নভেম্বর|ডিসেম্বর)/i
};
var parseMonthPatterns = {
  any: [
  /^জানু/i,
  /^ফেব্রু/i,
  /^মার্চ/i,
  /^এপ্রিল/i,
  /^মে/i,
  /^জুন/i,
  /^জুলাই/i,
  /^আগস্ট/i,
  /^সেপ্ট/i,
  /^অক্টো/i,
  /^নভে/i,
  /^ডিসে/i]

};
var matchDayPatterns = {
  narrow: /^(র|সো|ম|বু|বৃ|শু|শ)+/i,
  short: /^(রবি|সোম|মঙ্গল|বুধ|বৃহ|শুক্র|শনি)+/i,
  abbreviated: /^(রবি|সোম|মঙ্গল|বুধ|বৃহ|শুক্র|শনি)+/i,
  wide: /^(রবিবার|সোমবার|মঙ্গলবার|বুধবার|বৃহস্পতিবার |শুক্রবার|শনিবার)+/i
};
var parseDayPatterns = {
  narrow: [/^র/i, /^সো/i, /^ম/i, /^বু/i, /^বৃ/i, /^শু/i, /^শ/i],
  short: [/^রবি/i, /^সোম/i, /^মঙ্গল/i, /^বুধ/i, /^বৃহ/i, /^শুক্র/i, /^শনি/i],
  abbreviated: [
  /^রবি/i,
  /^সোম/i,
  /^মঙ্গল/i,
  /^বুধ/i,
  /^বৃহ/i,
  /^শুক্র/i,
  /^শনি/i],

  wide: [
  /^রবিবার/i,
  /^সোমবার/i,
  /^মঙ্গলবার/i,
  /^বুধবার/i,
  /^বৃহস্পতিবার /i,
  /^শুক্রবার/i,
  /^শনিবার/i]

};
var matchDayPeriodPatterns = {
  narrow: /^(পূ|অপ|মধ্যরাত|মধ্যাহ্ন|সকাল|বিকাল|সন্ধ্যা|রাত)/i,
  abbreviated: /^(পূর্বাহ্ন|অপরাহ্ন|মধ্যরাত|মধ্যাহ্ন|সকাল|বিকাল|সন্ধ্যা|রাত)/i,
  wide: /^(পূর্বাহ্ন|অপরাহ্ন|মধ্যরাত|মধ্যাহ্ন|সকাল|বিকাল|সন্ধ্যা|রাত)/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^পূ/i,
    pm: /^অপ/i,
    midnight: /^মধ্যরাত/i,
    noon: /^মধ্যাহ্ন/i,
    morning: /সকাল/i,
    afternoon: /বিকাল/i,
    evening: /সন্ধ্যা/i,
    night: /রাত/i
  }
};
var match = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function valueCallback(value) {return parseInt(value, 10);}
  }),
  era: buildMatchFn({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseEraPatterns,
    defaultParseWidth: "wide"
  }),
  quarter: buildMatchFn({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: "any",
    valueCallback: function valueCallback(index) {return index + 1;}
  }),
  month: buildMatchFn({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: "any"
  }),
  day: buildMatchFn({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseDayPatterns,
    defaultParseWidth: "wide"
  }),
  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: "any"
  })
};

// lib/locale/bn.js
var bn = {
  code: "bn",
  formatDistance: formatDistance,
  formatLong: formatLong,
  formatRelative: formatRelative,
  localize: localize,
  match: match,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};

// lib/locale/bn/cdn.js
window.dateFns = _objectSpread(_objectSpread({},
window.dateFns), {}, {
  locale: _objectSpread(_objectSpread({}, (_window$dateFns =
  window.dateFns) === null || _window$dateFns === void 0 ? void 0 : _window$dateFns.locale), {}, {
    bn: bn }) });



//# debugId=BA7595C757C3C41E64756E2164756E21

//# sourceMappingURL=cdn.js.map
})();