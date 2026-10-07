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

// lib/locale/ja-Hira/_lib/formatDistance.js
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: "1\u3073\u3087\u3046\u307F\u307E\u3093",
    other: "{{count}}\u3073\u3087\u3046\u307F\u307E\u3093",
    oneWithSuffix: "\u3084\u304F1\u3073\u3087\u3046",
    otherWithSuffix: "\u3084\u304F{{count}}\u3073\u3087\u3046"
  },
  xSeconds: {
    one: "1\u3073\u3087\u3046",
    other: "{{count}}\u3073\u3087\u3046"
  },
  halfAMinute: "30\u3073\u3087\u3046",
  lessThanXMinutes: {
    one: "1\u3077\u3093\u307F\u307E\u3093",
    other: "{{count}}\u3075\u3093\u307F\u307E\u3093",
    oneWithSuffix: "\u3084\u304F1\u3077\u3093",
    otherWithSuffix: "\u3084\u304F{{count}}\u3075\u3093"
  },
  xMinutes: {
    one: "1\u3077\u3093",
    other: "{{count}}\u3075\u3093"
  },
  aboutXHours: {
    one: "\u3084\u304F1\u3058\u304B\u3093",
    other: "\u3084\u304F{{count}}\u3058\u304B\u3093"
  },
  xHours: {
    one: "1\u3058\u304B\u3093",
    other: "{{count}}\u3058\u304B\u3093"
  },
  xDays: {
    one: "1\u306B\u3061",
    other: "{{count}}\u306B\u3061"
  },
  aboutXWeeks: {
    one: "\u3084\u304F1\u3057\u3085\u3046\u304B\u3093",
    other: "\u3084\u304F{{count}}\u3057\u3085\u3046\u304B\u3093"
  },
  xWeeks: {
    one: "1\u3057\u3085\u3046\u304B\u3093",
    other: "{{count}}\u3057\u3085\u3046\u304B\u3093"
  },
  aboutXMonths: {
    one: "\u3084\u304F1\u304B\u3052\u3064",
    other: "\u3084\u304F{{count}}\u304B\u3052\u3064"
  },
  xMonths: {
    one: "1\u304B\u3052\u3064",
    other: "{{count}}\u304B\u3052\u3064"
  },
  aboutXYears: {
    one: "\u3084\u304F1\u306D\u3093",
    other: "\u3084\u304F{{count}}\u306D\u3093"
  },
  xYears: {
    one: "1\u306D\u3093",
    other: "{{count}}\u306D\u3093"
  },
  overXYears: {
    one: "1\u306D\u3093\u3044\u3058\u3087\u3046",
    other: "{{count}}\u306D\u3093\u3044\u3058\u3087\u3046"
  },
  almostXYears: {
    one: "1\u306D\u3093\u3061\u304B\u304F",
    other: "{{count}}\u306D\u3093\u3061\u304B\u304F"
  }
};
var formatDistance = function formatDistance(token, count, options) {
  options = options || {};
  var result;
  var tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === "string") {
    result = tokenValue;
  } else if (count === 1) {
    if (options.addSuffix && tokenValue.oneWithSuffix) {
      result = tokenValue.oneWithSuffix;
    } else {
      result = tokenValue.one;
    }
  } else {
    if (options.addSuffix && tokenValue.otherWithSuffix) {
      result = tokenValue.otherWithSuffix.replace("{{count}}", String(count));
    } else {
      result = tokenValue.other.replace("{{count}}", String(count));
    }
  }
  if (options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return result + "\u3042\u3068";
    } else {
      return result + "\u307E\u3048";
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

// lib/locale/ja-Hira/_lib/formatLong.js
var dateFormats = {
  full: "y\u306D\u3093M\u304C\u3064d\u306B\u3061EEEE",
  long: "y\u306D\u3093M\u304C\u3064d\u306B\u3061",
  medium: "y/MM/dd",
  short: "y/MM/dd"
};
var timeFormats = {
  full: "H\u3058mm\u3075\u3093ss\u3073\u3087\u3046 zzzz",
  long: "H:mm:ss z",
  medium: "H:mm:ss",
  short: "H:mm"
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

// lib/locale/ja-Hira/_lib/formatRelative.js
var formatRelativeLocale = {
  lastWeek: "\u305B\u3093\u3057\u3085\u3046\u306Eeeee\u306Ep",
  yesterday: "\u304D\u306E\u3046\u306Ep",
  today: "\u304D\u3087\u3046\u306Ep",
  tomorrow: "\u3042\u3057\u305F\u306Ep",
  nextWeek: "\u3088\u304F\u3057\u3085\u3046\u306Eeeee\u306Ep",
  other: "P"
};
var formatRelative = function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
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

// lib/locale/ja-Hira/_lib/localize.js
var eraValues = {
  narrow: ["BC", "AC"],
  abbreviated: ["\u304D\u3052\u3093\u305C\u3093", "\u305B\u3044\u308C\u304D"],
  wide: ["\u304D\u3052\u3093\u305C\u3093", "\u305B\u3044\u308C\u304D"]
};
var quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["\u3060\u30441\u3057\u306F\u3093\u304D", "\u3060\u30442\u3057\u306F\u3093\u304D", "\u3060\u30443\u3057\u306F\u3093\u304D", "\u3060\u30444\u3057\u306F\u3093\u304D"]
};
var monthValues = {
  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
  abbreviated: [
  "1\u304C\u3064",
  "2\u304C\u3064",
  "3\u304C\u3064",
  "4\u304C\u3064",
  "5\u304C\u3064",
  "6\u304C\u3064",
  "7\u304C\u3064",
  "8\u304C\u3064",
  "9\u304C\u3064",
  "10\u304C\u3064",
  "11\u304C\u3064",
  "12\u304C\u3064"],

  wide: [
  "1\u304C\u3064",
  "2\u304C\u3064",
  "3\u304C\u3064",
  "4\u304C\u3064",
  "5\u304C\u3064",
  "6\u304C\u3064",
  "7\u304C\u3064",
  "8\u304C\u3064",
  "9\u304C\u3064",
  "10\u304C\u3064",
  "11\u304C\u3064",
  "12\u304C\u3064"]

};
var dayValues = {
  narrow: ["\u306B\u3061", "\u3052\u3064", "\u304B", "\u3059\u3044", "\u3082\u304F", "\u304D\u3093", "\u3069"],
  short: ["\u306B\u3061", "\u3052\u3064", "\u304B", "\u3059\u3044", "\u3082\u304F", "\u304D\u3093", "\u3069"],
  abbreviated: ["\u306B\u3061", "\u3052\u3064", "\u304B", "\u3059\u3044", "\u3082\u304F", "\u304D\u3093", "\u3069"],
  wide: [
  "\u306B\u3061\u3088\u3046\u3073",
  "\u3052\u3064\u3088\u3046\u3073",
  "\u304B\u3088\u3046\u3073",
  "\u3059\u3044\u3088\u3046\u3073",
  "\u3082\u304F\u3088\u3046\u3073",
  "\u304D\u3093\u3088\u3046\u3073",
  "\u3069\u3088\u3046\u3073"]

};
var dayPeriodValues = {
  narrow: {
    am: "\u3054\u305C\u3093",
    pm: "\u3054\u3054",
    midnight: "\u3057\u3093\u3084",
    noon: "\u3057\u3087\u3046\u3054",
    morning: "\u3042\u3055",
    afternoon: "\u3054\u3054",
    evening: "\u3088\u308B",
    night: "\u3057\u3093\u3084"
  },
  abbreviated: {
    am: "\u3054\u305C\u3093",
    pm: "\u3054\u3054",
    midnight: "\u3057\u3093\u3084",
    noon: "\u3057\u3087\u3046\u3054",
    morning: "\u3042\u3055",
    afternoon: "\u3054\u3054",
    evening: "\u3088\u308B",
    night: "\u3057\u3093\u3084"
  },
  wide: {
    am: "\u3054\u305C\u3093",
    pm: "\u3054\u3054",
    midnight: "\u3057\u3093\u3084",
    noon: "\u3057\u3087\u3046\u3054",
    morning: "\u3042\u3055",
    afternoon: "\u3054\u3054",
    evening: "\u3088\u308B",
    night: "\u3057\u3093\u3084"
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: "\u3054\u305C\u3093",
    pm: "\u3054\u3054",
    midnight: "\u3057\u3093\u3084",
    noon: "\u3057\u3087\u3046\u3054",
    morning: "\u3042\u3055",
    afternoon: "\u3054\u3054",
    evening: "\u3088\u308B",
    night: "\u3057\u3093\u3084"
  },
  abbreviated: {
    am: "\u3054\u305C\u3093",
    pm: "\u3054\u3054",
    midnight: "\u3057\u3093\u3084",
    noon: "\u3057\u3087\u3046\u3054",
    morning: "\u3042\u3055",
    afternoon: "\u3054\u3054",
    evening: "\u3088\u308B",
    night: "\u3057\u3093\u3084"
  },
  wide: {
    am: "\u3054\u305C\u3093",
    pm: "\u3054\u3054",
    midnight: "\u3057\u3093\u3084",
    noon: "\u3057\u3087\u3046\u3054",
    morning: "\u3042\u3055",
    afternoon: "\u3054\u3054",
    evening: "\u3088\u308B",
    night: "\u3057\u3093\u3084"
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber, options) {
  var number = Number(dirtyNumber);
  var unit = String(options === null || options === void 0 ? void 0 : options.unit);
  switch (unit) {
    case "year":
      return "".concat(number, "\u306D\u3093");
    case "quarter":
      return "\u3060\u3044".concat(number, "\u3057\u306F\u3093\u304D");
    case "month":
      return "".concat(number, "\u304C\u3064");
    case "week":
      return "\u3060\u3044".concat(number, "\u3057\u3085\u3046");
    case "date":
      return "".concat(number, "\u306B\u3061");
    case "hour":
      return "".concat(number, "\u3058");
    case "minute":
      return "".concat(number, "\u3075\u3093");
    case "second":
      return "".concat(number, "\u3073\u3087\u3046");
    default:
      return "".concat(number);
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
    argumentCallback: function argumentCallback(quarter) {return Number(quarter) - 1;}
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

// lib/locale/ja-Hira/_lib/match.js
var matchOrdinalNumberPattern = /^だ?い?\d+(ねん|しはんき|がつ|しゅう|にち|じ|ふん|びょう)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(B\.?C\.?|A\.?D\.?)/i,
  abbreviated: /^(きげん[前後]|せいれき)/i,
  wide: /^(きげん[前後]|せいれき)/i
};
var parseEraPatterns = {
  narrow: [/^B/i, /^A/i],
  any: [/^(きげんぜん)/i, /^(せいれき|きげんご)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^Q[1234]/i,
  wide: /^だい[1234一二三四１２３４]しはんき/i
};
var parseQuarterPatterns = {
  any: [/(1|一|１)/i, /(2|二|２)/i, /(3|三|３)/i, /(4|四|４)/i]
};
var matchMonthPatterns = {
  narrow: /^([123456789]|1[012])/,
  abbreviated: /^([123456789]|1[012])がつ/i,
  wide: /^([123456789]|1[012])がつ/i
};
var parseMonthPatterns = {
  any: [
  /^1\D/,
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
  narrow: /^(にち|げつ|か|すい|もく|きん|ど)/,
  short: /^(にち|げつ|か|すい|もく|きん|ど)/,
  abbreviated: /^(にち|げつ|か|すい|もく|きん|ど)/,
  wide: /^(にち|げつ|か|すい|もく|きん|ど)ようび/
};
var parseDayPatterns = {
  any: [/^にち/, /^げつ/, /^か/, /^すい/, /^もく/, /^きん/, /^ど/]
};
var matchDayPeriodPatterns = {
  any: /^(AM|PM|ごぜん|ごご|しょうご|しんや|まよなか|よる|あさ)/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^(A|ごぜん)/i,
    pm: /^(P|ごご)/i,
    midnight: /^しんや|まよなか/i,
    noon: /^しょうご/i,
    morning: /^あさ/i,
    afternoon: /^ごご/i,
    evening: /^よる/i,
    night: /^しんや/i
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

// lib/locale/ja-Hira.js
var jaHira = {
  code: "ja-Hira",
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

// lib/locale/ja-Hira/cdn.js
window.dateFns = _objectSpread(_objectSpread({},
window.dateFns), {}, {
  locale: _objectSpread(_objectSpread({}, (_window$dateFns =
  window.dateFns) === null || _window$dateFns === void 0 ? void 0 : _window$dateFns.locale), {}, {
    jaHira: jaHira }) });



//# debugId=B0D84BC091B1BCD964756E2164756E21

//# sourceMappingURL=cdn.js.map
})();