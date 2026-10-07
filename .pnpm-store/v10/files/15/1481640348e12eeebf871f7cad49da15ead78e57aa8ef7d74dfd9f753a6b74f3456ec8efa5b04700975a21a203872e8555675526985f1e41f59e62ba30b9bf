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

// lib/locale/km/_lib/formatDistance.js
var formatDistanceLocale = {
  lessThanXSeconds: "\u178F\u17B7\u1785\u1787\u17B6\u1784 {{count}} \u179C\u17B7\u1793\u17B6\u1791\u17B8",
  xSeconds: "{{count}} \u179C\u17B7\u1793\u17B6\u1791\u17B8",
  halfAMinute: "\u1780\u1793\u17D2\u179B\u17C7\u1793\u17B6\u1791\u17B8",
  lessThanXMinutes: "\u178F\u17B7\u1785\u1787\u17B6\u1784 {{count}} \u1793\u17B6\u1791\u17B8",
  xMinutes: "{{count}} \u1793\u17B6\u1791\u17B8",
  aboutXHours: "\u1794\u17D2\u179A\u17A0\u17C2\u179B {{count}} \u1798\u17C9\u17C4\u1784",
  xHours: "{{count}} \u1798\u17C9\u17C4\u1784",
  xDays: "{{count}} \u1790\u17D2\u1784\u17C3",
  aboutXWeeks: "\u1794\u17D2\u179A\u17A0\u17C2\u179B {{count}} \u179F\u1794\u17D2\u178F\u17B6\u17A0\u17CD",
  xWeeks: "{{count}} \u179F\u1794\u17D2\u178F\u17B6\u17A0\u17CD",
  aboutXMonths: "\u1794\u17D2\u179A\u17A0\u17C2\u179B {{count}} \u1781\u17C2",
  xMonths: "{{count}} \u1781\u17C2",
  aboutXYears: "\u1794\u17D2\u179A\u17A0\u17C2\u179B {{count}} \u1786\u17D2\u1793\u17B6\u17C6",
  xYears: "{{count}} \u1786\u17D2\u1793\u17B6\u17C6",
  overXYears: "\u1787\u17B6\u1784 {{count}} \u1786\u17D2\u1793\u17B6\u17C6",
  almostXYears: "\u1787\u17B7\u178F {{count}} \u1786\u17D2\u1793\u17B6\u17C6"
};
var formatDistance = function formatDistance(token, count, options) {
  var tokenValue = formatDistanceLocale[token];
  var result = tokenValue;
  if (typeof count === "number") {
    result = result.replace("{{count}}", count.toString());
  }
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return "\u1780\u17D2\u1793\u17BB\u1784\u179A\u1799\u17C8\u1796\u17C1\u179B " + result;
    } else {
      return result + "\u1798\u17BB\u1793";
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

// lib/locale/km/_lib/formatLong.js
var dateFormats = {
  full: "EEEE do MMMM y",
  long: "do MMMM y",
  medium: "d MMM y",
  short: "dd/MM/yyyy"
};
var timeFormats = {
  full: "h:mm:ss a",
  long: "h:mm:ss a",
  medium: "h:mm:ss a",
  short: "h:mm a"
};
var dateTimeFormats = {
  full: "{{date}} '\u1798\u17C9\u17C4\u1784' {{time}}",
  long: "{{date}} '\u1798\u17C9\u17C4\u1784' {{time}}",
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

// lib/locale/km/_lib/formatRelative.js
var formatRelativeLocale = {
  lastWeek: "'\u1790\u17D2\u1784\u17C3'eeee'\u179F\u200B\u1794\u17D2\u178F\u17B6\u200B\u17A0\u17CD\u200B\u1798\u17BB\u1793\u1798\u17C9\u17C4\u1784' p",
  yesterday: "'\u1798\u17D2\u179F\u17B7\u179B\u1798\u17B7\u1789\u1793\u17C5\u1798\u17C9\u17C4\u1784' p",
  today: "'\u1790\u17D2\u1784\u17C3\u1793\u17C1\u17C7\u1798\u17C9\u17C4\u1784' p",
  tomorrow: "'\u1790\u17D2\u1784\u17C3\u179F\u17D2\u17A2\u17C2\u1780\u1798\u17C9\u17C4\u1784' p",
  nextWeek: "'\u1790\u17D2\u1784\u17C3'eeee'\u179F\u200B\u1794\u17D2\u178F\u17B6\u200B\u17A0\u17CD\u200B\u1780\u17D2\u179A\u17C4\u1799\u1798\u17C9\u17C4\u1784' p",
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

// lib/locale/km/_lib/localize.js
var eraValues = {
  narrow: ["\u1798.\u1782\u179F", "\u1782\u179F"],
  abbreviated: ["\u1798\u17BB\u1793\u1782.\u179F", "\u1782.\u179F"],
  wide: ["\u1798\u17BB\u1793\u1782\u17D2\u179A\u17B7\u179F\u17D2\u178F\u179F\u1780\u179A\u17B6\u1787", "\u1793\u17C3\u1782\u17D2\u179A\u17B7\u179F\u17D2\u178F\u179F\u1780\u179A\u17B6\u1787"]
};
var quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["\u178F\u17D2\u179A\u17B8\u1798\u17B6\u179F\u1791\u17B8 1", "\u178F\u17D2\u179A\u17B8\u1798\u17B6\u179F\u1791\u17B8 2", "\u178F\u17D2\u179A\u17B8\u1798\u17B6\u179F\u1791\u17B8 3", "\u178F\u17D2\u179A\u17B8\u1798\u17B6\u179F\u1791\u17B8 4"]
};
var monthValues = {
  narrow: [
  "\u1798.\u1780",
  "\u1780.\u1798",
  "\u1798\u17B7",
  "\u1798.\u179F",
  "\u17A7.\u179F",
  "\u1798.\u1790",
  "\u1780.\u178A",
  "\u179F\u17B8",
  "\u1780\u1789",
  "\u178F\u17BB",
  "\u179C\u17B7",
  "\u1792"],

  abbreviated: [
  "\u1798\u1780\u179A\u17B6",
  "\u1780\u17BB\u1798\u17D2\u1797\u17C8",
  "\u1798\u17B8\u1793\u17B6",
  "\u1798\u17C1\u179F\u17B6",
  "\u17A7\u179F\u1797\u17B6",
  "\u1798\u17B7\u1790\u17BB\u1793\u17B6",
  "\u1780\u1780\u17D2\u1780\u178A\u17B6",
  "\u179F\u17B8\u17A0\u17B6",
  "\u1780\u1789\u17D2\u1789\u17B6",
  "\u178F\u17BB\u179B\u17B6",
  "\u179C\u17B7\u1785\u17D2\u1786\u17B7\u1780\u17B6",
  "\u1792\u17D2\u1793\u17BC"],

  wide: [
  "\u1798\u1780\u179A\u17B6",
  "\u1780\u17BB\u1798\u17D2\u1797\u17C8",
  "\u1798\u17B8\u1793\u17B6",
  "\u1798\u17C1\u179F\u17B6",
  "\u17A7\u179F\u1797\u17B6",
  "\u1798\u17B7\u1790\u17BB\u1793\u17B6",
  "\u1780\u1780\u17D2\u1780\u178A\u17B6",
  "\u179F\u17B8\u17A0\u17B6",
  "\u1780\u1789\u17D2\u1789\u17B6",
  "\u178F\u17BB\u179B\u17B6",
  "\u179C\u17B7\u1785\u17D2\u1786\u17B7\u1780\u17B6",
  "\u1792\u17D2\u1793\u17BC"]

};
var dayValues = {
  narrow: ["\u17A2\u17B6", "\u1785", "\u17A2", "\u1796", "\u1796\u17D2\u179A", "\u179F\u17BB", "\u179F"],
  short: ["\u17A2\u17B6", "\u1785", "\u17A2", "\u1796", "\u1796\u17D2\u179A", "\u179F\u17BB", "\u179F"],
  abbreviated: ["\u17A2\u17B6", "\u1785", "\u17A2", "\u1796", "\u1796\u17D2\u179A", "\u179F\u17BB", "\u179F"],
  wide: ["\u17A2\u17B6\u1791\u17B7\u178F\u17D2\u1799", "\u1785\u1793\u17D2\u1791", "\u17A2\u1784\u17D2\u1782\u17B6\u179A", "\u1796\u17BB\u1792", "\u1796\u17D2\u179A\u17A0\u179F\u17D2\u1794\u178F\u17B7\u17CD", "\u179F\u17BB\u1780\u17D2\u179A", "\u179F\u17C5\u179A\u17CD"]
};
var dayPeriodValues = {
  narrow: {
    am: "\u1796\u17D2\u179A\u17B9\u1780",
    pm: "\u179B\u17D2\u1784\u17B6\u1785",
    midnight: "\u200B\u1796\u17C1\u179B\u1780\u178E\u17D2\u178A\u17B6\u179B\u17A2\u1792\u17D2\u179A\u17B6\u178F\u17D2\u179A",
    noon: "\u1796\u17C1\u179B\u1790\u17D2\u1784\u17C3\u178F\u17D2\u179A\u1784\u17CB",
    morning: "\u1796\u17C1\u179B\u1796\u17D2\u179A\u17B9\u1780",
    afternoon: "\u1796\u17C1\u179B\u179A\u179F\u17C0\u179B",
    evening: "\u1796\u17C1\u179B\u179B\u17D2\u1784\u17B6\u1785",
    night: "\u1796\u17C1\u179B\u1799\u1794\u17CB"
  },
  abbreviated: {
    am: "\u1796\u17D2\u179A\u17B9\u1780",
    pm: "\u179B\u17D2\u1784\u17B6\u1785",
    midnight: "\u200B\u1796\u17C1\u179B\u1780\u178E\u17D2\u178A\u17B6\u179B\u17A2\u1792\u17D2\u179A\u17B6\u178F\u17D2\u179A",
    noon: "\u1796\u17C1\u179B\u1790\u17D2\u1784\u17C3\u178F\u17D2\u179A\u1784\u17CB",
    morning: "\u1796\u17C1\u179B\u1796\u17D2\u179A\u17B9\u1780",
    afternoon: "\u1796\u17C1\u179B\u179A\u179F\u17C0\u179B",
    evening: "\u1796\u17C1\u179B\u179B\u17D2\u1784\u17B6\u1785",
    night: "\u1796\u17C1\u179B\u1799\u1794\u17CB"
  },
  wide: {
    am: "\u1796\u17D2\u179A\u17B9\u1780",
    pm: "\u179B\u17D2\u1784\u17B6\u1785",
    midnight: "\u200B\u1796\u17C1\u179B\u1780\u178E\u17D2\u178A\u17B6\u179B\u17A2\u1792\u17D2\u179A\u17B6\u178F\u17D2\u179A",
    noon: "\u1796\u17C1\u179B\u1790\u17D2\u1784\u17C3\u178F\u17D2\u179A\u1784\u17CB",
    morning: "\u1796\u17C1\u179B\u1796\u17D2\u179A\u17B9\u1780",
    afternoon: "\u1796\u17C1\u179B\u179A\u179F\u17C0\u179B",
    evening: "\u1796\u17C1\u179B\u179B\u17D2\u1784\u17B6\u1785",
    night: "\u1796\u17C1\u179B\u1799\u1794\u17CB"
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: "\u1796\u17D2\u179A\u17B9\u1780",
    pm: "\u179B\u17D2\u1784\u17B6\u1785",
    midnight: "\u200B\u1796\u17C1\u179B\u1780\u178E\u17D2\u178A\u17B6\u179B\u17A2\u1792\u17D2\u179A\u17B6\u178F\u17D2\u179A",
    noon: "\u1796\u17C1\u179B\u1790\u17D2\u1784\u17C3\u178F\u17D2\u179A\u1784\u17CB",
    morning: "\u1796\u17C1\u179B\u1796\u17D2\u179A\u17B9\u1780",
    afternoon: "\u1796\u17C1\u179B\u179A\u179F\u17C0\u179B",
    evening: "\u1796\u17C1\u179B\u179B\u17D2\u1784\u17B6\u1785",
    night: "\u1796\u17C1\u179B\u1799\u1794\u17CB"
  },
  abbreviated: {
    am: "\u1796\u17D2\u179A\u17B9\u1780",
    pm: "\u179B\u17D2\u1784\u17B6\u1785",
    midnight: "\u200B\u1796\u17C1\u179B\u1780\u178E\u17D2\u178A\u17B6\u179B\u17A2\u1792\u17D2\u179A\u17B6\u178F\u17D2\u179A",
    noon: "\u1796\u17C1\u179B\u1790\u17D2\u1784\u17C3\u178F\u17D2\u179A\u1784\u17CB",
    morning: "\u1796\u17C1\u179B\u1796\u17D2\u179A\u17B9\u1780",
    afternoon: "\u1796\u17C1\u179B\u179A\u179F\u17C0\u179B",
    evening: "\u1796\u17C1\u179B\u179B\u17D2\u1784\u17B6\u1785",
    night: "\u1796\u17C1\u179B\u1799\u1794\u17CB"
  },
  wide: {
    am: "\u1796\u17D2\u179A\u17B9\u1780",
    pm: "\u179B\u17D2\u1784\u17B6\u1785",
    midnight: "\u200B\u1796\u17C1\u179B\u1780\u178E\u17D2\u178A\u17B6\u179B\u17A2\u1792\u17D2\u179A\u17B6\u178F\u17D2\u179A",
    noon: "\u1796\u17C1\u179B\u1790\u17D2\u1784\u17C3\u178F\u17D2\u179A\u1784\u17CB",
    morning: "\u1796\u17C1\u179B\u1796\u17D2\u179A\u17B9\u1780",
    afternoon: "\u1796\u17C1\u179B\u179A\u179F\u17C0\u179B",
    evening: "\u1796\u17C1\u179B\u179B\u17D2\u1784\u17B6\u1785",
    night: "\u1796\u17C1\u179B\u1799\u1794\u17CB"
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber, _) {
  var number = Number(dirtyNumber);
  return number.toString();
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

// lib/locale/km/_lib/match.js
var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(ម\.)?គស/i,
  abbreviated: /^(មុន)?គ\.ស/i,
  wide: /^(មុន|នៃ)គ្រិស្តសករាជ/i
};
var parseEraPatterns = {
  any: [/^(ម|មុន)គ\.?ស/i, /^(នៃ)?គ\.?ស/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^(ត្រីមាស)(ទី)?\s?[1234]/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^(ម\.ក|ក\.ម|មិ|ម\.ស|ឧ\.ស|ម\.ថ|ក\.ដ|សី|កញ|តុ|វិ|ធ)/i,
  abbreviated: /^(មករា|កុម្ភៈ|មីនា|មេសា|ឧសភា|មិថុនា|កក្កដា|សីហា|កញ្ញា|តុលា|វិច្ឆិកា|ធ្នូ)/i,
  wide: /^(មករា|កុម្ភៈ|មីនា|មេសា|ឧសភា|មិថុនា|កក្កដា|សីហា|កញ្ញា|តុលា|វិច្ឆិកា|ធ្នូ)/i
};
var parseMonthPatterns = {
  narrow: [
  /^ម\.ក/i,
  /^ក\.ម/i,
  /^មិ/i,
  /^ម\.ស/i,
  /^ឧ\.ស/i,
  /^ម\.ថ/i,
  /^ក\.ដ/i,
  /^សី/i,
  /^កញ/i,
  /^តុ/i,
  /^វិ/i,
  /^ធ/i],

  any: [
  /^មក/i,
  /^កុ/i,
  /^មីន/i,
  /^មេ/i,
  /^ឧស/i,
  /^មិថ/i,
  /^កក/i,
  /^សី/i,
  /^កញ/i,
  /^តុ/i,
  /^វិច/i,
  /^ធ/i]

};
var matchDayPatterns = {
  narrow: /^(អា|ច|អ|ព|ព្រ|សុ|ស)/i,
  short: /^(អា|ច|អ|ព|ព្រ|សុ|ស)/i,
  abbreviated: /^(អា|ច|អ|ព|ព្រ|សុ|ស)/i,
  wide: /^(អាទិត្យ|ចន្ទ|អង្គារ|ពុធ|ព្រហស្បតិ៍|សុក្រ|សៅរ៍)/i
};
var parseDayPatterns = {
  narrow: [/^អា/i, /^ច/i, /^អ/i, /^ព/i, /^ព្រ/i, /^សុ/i, /^ស/i],
  any: [/^អា/i, /^ច/i, /^អ/i, /^ព/i, /^ព្រ/i, /^សុ/i, /^សៅ/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(ព្រឹក|ល្ងាច|ពេលព្រឹក|ពេលថ្ងៃត្រង់|ពេលល្ងាច|ពេលរសៀល|ពេលយប់|ពេលកណ្ដាលអធ្រាត្រ)/i,
  any: /^(ព្រឹក|ល្ងាច|ពេលព្រឹក|ពេលថ្ងៃត្រង់|ពេលល្ងាច|ពេលរសៀល|ពេលយប់|ពេលកណ្ដាលអធ្រាត្រ)/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^ព្រឹក/i,
    pm: /^ល្ងាច/i,
    midnight: /^ពេលកណ្ដាលអធ្រាត្រ/i,
    noon: /^ពេលថ្ងៃត្រង់/i,
    morning: /ពេលព្រឹក/i,
    afternoon: /ពេលរសៀល/i,
    evening: /ពេលល្ងាច/i,
    night: /ពេលយប់/i
  }
};
var match = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function valueCallback(value) {
      return parseInt(value, 10);
    }
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

// lib/locale/km.js
var km = {
  code: "km",
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

// lib/locale/km/cdn.js
window.dateFns = _objectSpread(_objectSpread({},
window.dateFns), {}, {
  locale: _objectSpread(_objectSpread({}, (_window$dateFns =
  window.dateFns) === null || _window$dateFns === void 0 ? void 0 : _window$dateFns.locale), {}, {
    km: km }) });



//# debugId=C28236232615704264756E2164756E21

//# sourceMappingURL=cdn.js.map
})();