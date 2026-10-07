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

// lib/locale/ko/_lib/formatDistance.js
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: "1\uCD08 \uBBF8\uB9CC",
    other: "{{count}}\uCD08 \uBBF8\uB9CC"
  },
  xSeconds: {
    one: "1\uCD08",
    other: "{{count}}\uCD08"
  },
  halfAMinute: "30\uCD08",
  lessThanXMinutes: {
    one: "1\uBD84 \uBBF8\uB9CC",
    other: "{{count}}\uBD84 \uBBF8\uB9CC"
  },
  xMinutes: {
    one: "1\uBD84",
    other: "{{count}}\uBD84"
  },
  aboutXHours: {
    one: "\uC57D 1\uC2DC\uAC04",
    other: "\uC57D {{count}}\uC2DC\uAC04"
  },
  xHours: {
    one: "1\uC2DC\uAC04",
    other: "{{count}}\uC2DC\uAC04"
  },
  xDays: {
    one: "1\uC77C",
    other: "{{count}}\uC77C"
  },
  aboutXWeeks: {
    one: "\uC57D 1\uC8FC",
    other: "\uC57D {{count}}\uC8FC"
  },
  xWeeks: {
    one: "1\uC8FC",
    other: "{{count}}\uC8FC"
  },
  aboutXMonths: {
    one: "\uC57D 1\uAC1C\uC6D4",
    other: "\uC57D {{count}}\uAC1C\uC6D4"
  },
  xMonths: {
    one: "1\uAC1C\uC6D4",
    other: "{{count}}\uAC1C\uC6D4"
  },
  aboutXYears: {
    one: "\uC57D 1\uB144",
    other: "\uC57D {{count}}\uB144"
  },
  xYears: {
    one: "1\uB144",
    other: "{{count}}\uB144"
  },
  overXYears: {
    one: "1\uB144 \uC774\uC0C1",
    other: "{{count}}\uB144 \uC774\uC0C1"
  },
  almostXYears: {
    one: "\uAC70\uC758 1\uB144",
    other: "\uAC70\uC758 {{count}}\uB144"
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
    result = tokenValue.other.replace("{{count}}", count.toString());
  }
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return result + " \uD6C4";
    } else {
      return result + " \uC804";
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

// lib/locale/ko/_lib/formatLong.js
var dateFormats = {
  full: "y\uB144 M\uC6D4 d\uC77C EEEE",
  long: "y\uB144 M\uC6D4 d\uC77C",
  medium: "y.MM.dd",
  short: "y.MM.dd"
};
var timeFormats = {
  full: "a H\uC2DC mm\uBD84 ss\uCD08 zzzz",
  long: "a H:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
};
var dateTimeFormats = {
  full: "{{date}} {{time}}",
  long: "{{date}} {{time}}",
  medium: "{{date}} {{time}}",
  short: "{{date}} {{time}}"
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

// lib/locale/ko/_lib/formatRelative.js
var formatRelativeLocale = {
  lastWeek: "'\uC9C0\uB09C' eeee p",
  yesterday: "'\uC5B4\uC81C' p",
  today: "'\uC624\uB298' p",
  tomorrow: "'\uB0B4\uC77C' p",
  nextWeek: "'\uB2E4\uC74C' eeee p",
  other: "P"
};
var formatRelative = function formatRelative(token, _date, _baseDate, _options) {return formatRelativeLocale[token];};

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

// lib/locale/ko/_lib/localize.js
var eraValues = {
  narrow: ["BC", "AD"],
  abbreviated: ["BC", "AD"],
  wide: ["\uAE30\uC6D0\uC804", "\uC11C\uAE30"]
};
var quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1\uBD84\uAE30", "2\uBD84\uAE30", "3\uBD84\uAE30", "4\uBD84\uAE30"]
};
var monthValues = {
  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
  abbreviated: [
  "1\uC6D4",
  "2\uC6D4",
  "3\uC6D4",
  "4\uC6D4",
  "5\uC6D4",
  "6\uC6D4",
  "7\uC6D4",
  "8\uC6D4",
  "9\uC6D4",
  "10\uC6D4",
  "11\uC6D4",
  "12\uC6D4"],

  wide: [
  "1\uC6D4",
  "2\uC6D4",
  "3\uC6D4",
  "4\uC6D4",
  "5\uC6D4",
  "6\uC6D4",
  "7\uC6D4",
  "8\uC6D4",
  "9\uC6D4",
  "10\uC6D4",
  "11\uC6D4",
  "12\uC6D4"]

};
var dayValues = {
  narrow: ["\uC77C", "\uC6D4", "\uD654", "\uC218", "\uBAA9", "\uAE08", "\uD1A0"],
  short: ["\uC77C", "\uC6D4", "\uD654", "\uC218", "\uBAA9", "\uAE08", "\uD1A0"],
  abbreviated: ["\uC77C", "\uC6D4", "\uD654", "\uC218", "\uBAA9", "\uAE08", "\uD1A0"],
  wide: ["\uC77C\uC694\uC77C", "\uC6D4\uC694\uC77C", "\uD654\uC694\uC77C", "\uC218\uC694\uC77C", "\uBAA9\uC694\uC77C", "\uAE08\uC694\uC77C", "\uD1A0\uC694\uC77C"]
};
var dayPeriodValues = {
  narrow: {
    am: "\uC624\uC804",
    pm: "\uC624\uD6C4",
    midnight: "\uC790\uC815",
    noon: "\uC815\uC624",
    morning: "\uC544\uCE68",
    afternoon: "\uC624\uD6C4",
    evening: "\uC800\uB141",
    night: "\uBC24"
  },
  abbreviated: {
    am: "\uC624\uC804",
    pm: "\uC624\uD6C4",
    midnight: "\uC790\uC815",
    noon: "\uC815\uC624",
    morning: "\uC544\uCE68",
    afternoon: "\uC624\uD6C4",
    evening: "\uC800\uB141",
    night: "\uBC24"
  },
  wide: {
    am: "\uC624\uC804",
    pm: "\uC624\uD6C4",
    midnight: "\uC790\uC815",
    noon: "\uC815\uC624",
    morning: "\uC544\uCE68",
    afternoon: "\uC624\uD6C4",
    evening: "\uC800\uB141",
    night: "\uBC24"
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: "\uC624\uC804",
    pm: "\uC624\uD6C4",
    midnight: "\uC790\uC815",
    noon: "\uC815\uC624",
    morning: "\uC544\uCE68",
    afternoon: "\uC624\uD6C4",
    evening: "\uC800\uB141",
    night: "\uBC24"
  },
  abbreviated: {
    am: "\uC624\uC804",
    pm: "\uC624\uD6C4",
    midnight: "\uC790\uC815",
    noon: "\uC815\uC624",
    morning: "\uC544\uCE68",
    afternoon: "\uC624\uD6C4",
    evening: "\uC800\uB141",
    night: "\uBC24"
  },
  wide: {
    am: "\uC624\uC804",
    pm: "\uC624\uD6C4",
    midnight: "\uC790\uC815",
    noon: "\uC815\uC624",
    morning: "\uC544\uCE68",
    afternoon: "\uC624\uD6C4",
    evening: "\uC800\uB141",
    night: "\uBC24"
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber, options) {
  var number = Number(dirtyNumber);
  var unit = String(options === null || options === void 0 ? void 0 : options.unit);
  switch (unit) {
    case "minute":
    case "second":
      return String(number);
    case "date":
      return number + "\uC77C";
    default:
      return number + "\uBC88\uC9F8";
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

// lib/locale/ko/_lib/match.js
var matchOrdinalNumberPattern = /^(\d+)(일|번째)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(기원전|서기)/i
};
var parseEraPatterns = {
  any: [/^(bc|기원전)/i, /^(ad|서기)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234]사?분기/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^(1[012]|[123456789])/,
  abbreviated: /^(1[012]|[123456789])월/i,
  wide: /^(1[012]|[123456789])월/i
};
var parseMonthPatterns = {
  any: [
  /^1월?$/,
  /^2/,
  /^3/,
  /^4/,
  /^5/,
  /^6/,
  /^7/,
  /^8/,
  /^9/,
  /^10/,
  /^11/,
  /^12/]

};
var matchDayPatterns = {
  narrow: /^[일월화수목금토]/,
  short: /^[일월화수목금토]/,
  abbreviated: /^[일월화수목금토]/,
  wide: /^[일월화수목금토]요일/
};
var parseDayPatterns = {
  any: [/^일/, /^월/, /^화/, /^수/, /^목/, /^금/, /^토/]
};
var matchDayPeriodPatterns = {
  any: /^(am|pm|오전|오후|자정|정오|아침|저녁|밤)/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^(am|오전)/i,
    pm: /^(pm|오후)/i,
    midnight: /^자정/i,
    noon: /^정오/i,
    morning: /^아침/i,
    afternoon: /^오후/i,
    evening: /^저녁/i,
    night: /^밤/i
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
    defaultParseWidth: "any"
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
    defaultParseWidth: "any"
  }),
  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: "any",
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: "any"
  })
};

// lib/locale/ko.js
var ko = {
  code: "ko",
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

// lib/locale/ko/cdn.js
window.dateFns = _objectSpread(_objectSpread({},
window.dateFns), {}, {
  locale: _objectSpread(_objectSpread({}, (_window$dateFns =
  window.dateFns) === null || _window$dateFns === void 0 ? void 0 : _window$dateFns.locale), {}, {
    ko: ko }) });



//# debugId=6A07962C81B4D75B64756E2164756E21

//# sourceMappingURL=cdn.js.map
})();