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

// lib/locale/ar-DZ/_lib/formatDistance.js
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: "\u0623\u0642\u0644 \u0645\u0646 \u062B\u0627\u0646\u064A\u0629 \u0648\u0627\u062D\u062F\u0629",
    two: "\u0623\u0642\u0644 \u0645\u0646 \u062B\u0627\u0646\u062A\u064A\u0646",
    threeToTen: "\u0623\u0642\u0644 \u0645\u0646 {{count}} \u062B\u0648\u0627\u0646\u064A",
    other: "\u0623\u0642\u0644 \u0645\u0646 {{count}} \u062B\u0627\u0646\u064A\u0629"
  },
  xSeconds: {
    one: "\u062B\u0627\u0646\u064A\u0629 \u0648\u0627\u062D\u062F\u0629",
    two: "\u062B\u0627\u0646\u062A\u064A\u0646",
    threeToTen: "{{count}} \u062B\u0648\u0627\u0646\u064A",
    other: "{{count}} \u062B\u0627\u0646\u064A\u0629"
  },
  halfAMinute: "\u0646\u0635\u0641 \u062F\u0642\u064A\u0642\u0629",
  lessThanXMinutes: {
    one: "\u0623\u0642\u0644 \u0645\u0646 \u062F\u0642\u064A\u0642\u0629",
    two: "\u0623\u0642\u0644 \u0645\u0646 \u062F\u0642\u064A\u0642\u062A\u064A\u0646",
    threeToTen: "\u0623\u0642\u0644 \u0645\u0646 {{count}} \u062F\u0642\u0627\u0626\u0642",
    other: "\u0623\u0642\u0644 \u0645\u0646 {{count}} \u062F\u0642\u064A\u0642\u0629"
  },
  xMinutes: {
    one: "\u062F\u0642\u064A\u0642\u0629 \u0648\u0627\u062D\u062F\u0629",
    two: "\u062F\u0642\u064A\u0642\u062A\u064A\u0646",
    threeToTen: "{{count}} \u062F\u0642\u0627\u0626\u0642",
    other: "{{count}} \u062F\u0642\u064A\u0642\u0629"
  },
  aboutXHours: {
    one: "\u0633\u0627\u0639\u0629 \u0648\u0627\u062D\u062F\u0629 \u062A\u0642\u0631\u064A\u0628\u0627\u064B",
    two: "\u0633\u0627\u0639\u062A\u064A\u0646 \u062A\u0642\u0631\u064A\u0628\u0627\u064B",
    threeToTen: "{{count}} \u0633\u0627\u0639\u0627\u062A \u062A\u0642\u0631\u064A\u0628\u0627\u064B",
    other: "{{count}} \u0633\u0627\u0639\u0629 \u062A\u0642\u0631\u064A\u0628\u0627\u064B"
  },
  xHours: {
    one: "\u0633\u0627\u0639\u0629 \u0648\u0627\u062D\u062F\u0629",
    two: "\u0633\u0627\u0639\u062A\u064A\u0646",
    threeToTen: "{{count}} \u0633\u0627\u0639\u0627\u062A",
    other: "{{count}} \u0633\u0627\u0639\u0629"
  },
  xDays: {
    one: "\u064A\u0648\u0645 \u0648\u0627\u062D\u062F",
    two: "\u064A\u0648\u0645\u064A\u0646",
    threeToTen: "{{count}} \u0623\u064A\u0627\u0645",
    other: "{{count}} \u064A\u0648\u0645"
  },
  aboutXWeeks: {
    one: "\u0623\u0633\u0628\u0648\u0639 \u0648\u0627\u062D\u062F \u062A\u0642\u0631\u064A\u0628\u0627\u064B",
    two: "\u0623\u0633\u0628\u0648\u0639\u064A\u0646 \u062A\u0642\u0631\u064A\u0628\u0627\u064B",
    threeToTen: "{{count}} \u0623\u0633\u0627\u0628\u064A\u0639 \u062A\u0642\u0631\u064A\u0628\u0627\u064B",
    other: "{{count}} \u0623\u0633\u0628\u0648\u0639 \u062A\u0642\u0631\u064A\u0628\u0627\u064B"
  },
  xWeeks: {
    one: "\u0623\u0633\u0628\u0648\u0639 \u0648\u0627\u062D\u062F",
    two: "\u0623\u0633\u0628\u0648\u0639\u064A\u0646",
    threeToTen: "{{count}} \u0623\u0633\u0627\u0628\u064A\u0639",
    other: "{{count}} \u0623\u0633\u0628\u0648\u0639"
  },
  aboutXMonths: {
    one: "\u0634\u0647\u0631 \u0648\u0627\u062D\u062F \u062A\u0642\u0631\u064A\u0628\u0627\u064B",
    two: "\u0634\u0647\u0631\u064A\u0646 \u062A\u0642\u0631\u064A\u0628\u0627\u064B",
    threeToTen: "{{count}} \u0623\u0634\u0647\u0631 \u062A\u0642\u0631\u064A\u0628\u0627\u064B",
    other: "{{count}} \u0634\u0647\u0631 \u062A\u0642\u0631\u064A\u0628\u0627\u064B"
  },
  xMonths: {
    one: "\u0634\u0647\u0631 \u0648\u0627\u062D\u062F",
    two: "\u0634\u0647\u0631\u064A\u0646",
    threeToTen: "{{count}} \u0623\u0634\u0647\u0631",
    other: "{{count}} \u0634\u0647\u0631"
  },
  aboutXYears: {
    one: "\u0639\u0627\u0645 \u0648\u0627\u062D\u062F \u062A\u0642\u0631\u064A\u0628\u0627\u064B",
    two: "\u0639\u0627\u0645\u064A\u0646 \u062A\u0642\u0631\u064A\u0628\u0627\u064B",
    threeToTen: "{{count}} \u0623\u0639\u0648\u0627\u0645 \u062A\u0642\u0631\u064A\u0628\u0627\u064B",
    other: "{{count}} \u0639\u0627\u0645 \u062A\u0642\u0631\u064A\u0628\u0627\u064B"
  },
  xYears: {
    one: "\u0639\u0627\u0645 \u0648\u0627\u062D\u062F",
    two: "\u0639\u0627\u0645\u064A\u0646",
    threeToTen: "{{count}} \u0623\u0639\u0648\u0627\u0645",
    other: "{{count}} \u0639\u0627\u0645"
  },
  overXYears: {
    one: "\u0623\u0643\u062B\u0631 \u0645\u0646 \u0639\u0627\u0645",
    two: "\u0623\u0643\u062B\u0631 \u0645\u0646 \u0639\u0627\u0645\u064A\u0646",
    threeToTen: "\u0623\u0643\u062B\u0631 \u0645\u0646 {{count}} \u0623\u0639\u0648\u0627\u0645",
    other: "\u0623\u0643\u062B\u0631 \u0645\u0646 {{count}} \u0639\u0627\u0645"
  },
  almostXYears: {
    one: "\u0639\u0627\u0645 \u0648\u0627\u062D\u062F \u062A\u0642\u0631\u064A\u0628\u0627\u064B",
    two: "\u0639\u0627\u0645\u064A\u0646 \u062A\u0642\u0631\u064A\u0628\u0627\u064B",
    threeToTen: "{{count}} \u0623\u0639\u0648\u0627\u0645 \u062A\u0642\u0631\u064A\u0628\u0627\u064B",
    other: "{{count}} \u0639\u0627\u0645 \u062A\u0642\u0631\u064A\u0628\u0627\u064B"
  }
};
var formatDistance = function formatDistance(token, count, options) {
  options = options || {};
  var usageGroup = formatDistanceLocale[token];
  var result;
  if (typeof usageGroup === "string") {
    result = usageGroup;
  } else if (count === 1) {
    result = usageGroup.one;
  } else if (count === 2) {
    result = usageGroup.two;
  } else if (count <= 10) {
    result = usageGroup.threeToTen.replace("{{count}}", String(count));
  } else {
    result = usageGroup.other.replace("{{count}}", String(count));
  }
  if (options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return "\u0641\u064A \u062E\u0644\u0627\u0644 " + result;
    } else {
      return "\u0645\u0646\u0630 " + result;
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

// lib/locale/ar-DZ/_lib/formatLong.js
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
  full: "{{date}} '\u0639\u0646\u062F' {{time}}",
  long: "{{date}} '\u0639\u0646\u062F' {{time}}",
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

// lib/locale/ar-DZ/_lib/formatRelative.js
var formatRelativeLocale = {
  lastWeek: "'\u0623\u062E\u0631' eeee '\u0639\u0646\u062F' p",
  yesterday: "'\u0623\u0645\u0633 \u0639\u0646\u062F' p",
  today: "'\u0627\u0644\u064A\u0648\u0645 \u0639\u0646\u062F' p",
  tomorrow: "'\u063A\u062F\u0627\u064B \u0639\u0646\u062F' p",
  nextWeek: "eeee '\u0639\u0646\u062F' p",
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

// lib/locale/ar-DZ/_lib/localize.js
var eraValues = {
  narrow: ["\u0642", "\u0628"],
  abbreviated: ["\u0642.\u0645.", "\u0628.\u0645."],
  wide: ["\u0642\u0628\u0644 \u0627\u0644\u0645\u064A\u0644\u0627\u062F", "\u0628\u0639\u062F \u0627\u0644\u0645\u064A\u0644\u0627\u062F"]
};
var quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["\u06311", "\u06312", "\u06313", "\u06314"],
  wide: ["\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u0623\u0648\u0644", "\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u062B\u0627\u0646\u064A", "\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u062B\u0627\u0644\u062B", "\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u0631\u0627\u0628\u0639"]
};
var monthValues = {
  narrow: ["\u062C", "\u0641", "\u0645", "\u0623", "\u0645", "\u062C", "\u062C", "\u0623", "\u0633", "\u0623", "\u0646", "\u062F"],
  abbreviated: [
  "\u062C\u0627\u0646\u0640",
  "\u0641\u064A\u0641\u0640",
  "\u0645\u0627\u0631\u0633",
  "\u0623\u0641\u0631\u064A\u0644",
  "\u0645\u0627\u064A\u0640",
  "\u062C\u0648\u0627\u0646\u0640",
  "\u062C\u0648\u064A\u0640",
  "\u0623\u0648\u062A",
  "\u0633\u0628\u062A\u0640",
  "\u0623\u0643\u062A\u0640",
  "\u0646\u0648\u0641\u0640",
  "\u062F\u064A\u0633\u0640"],

  wide: [
  "\u062C\u0627\u0646\u0641\u064A",
  "\u0641\u064A\u0641\u0631\u064A",
  "\u0645\u0627\u0631\u0633",
  "\u0623\u0641\u0631\u064A\u0644",
  "\u0645\u0627\u064A",
  "\u062C\u0648\u0627\u0646",
  "\u062C\u0648\u064A\u0644\u064A\u0629",
  "\u0623\u0648\u062A",
  "\u0633\u0628\u062A\u0645\u0628\u0631",
  "\u0623\u0643\u062A\u0648\u0628\u0631",
  "\u0646\u0648\u0641\u0645\u0628\u0631",
  "\u062F\u064A\u0633\u0645\u0628\u0631"]

};
var dayValues = {
  narrow: ["\u062D", "\u0646", "\u062B", "\u0631", "\u062E", "\u062C", "\u0633"],
  short: ["\u0623\u062D\u062F", "\u0627\u062B\u0646\u064A\u0646", "\u062B\u0644\u0627\u062B\u0627\u0621", "\u0623\u0631\u0628\u0639\u0627\u0621", "\u062E\u0645\u064A\u0633", "\u062C\u0645\u0639\u0629", "\u0633\u0628\u062A"],
  abbreviated: ["\u0623\u062D\u062F", "\u0627\u062B\u0646\u0640", "\u062B\u0644\u0627", "\u0623\u0631\u0628\u0640", "\u062E\u0645\u064A\u0640", "\u062C\u0645\u0639\u0629", "\u0633\u0628\u062A"],
  wide: [
  "\u0627\u0644\u0623\u062D\u062F",
  "\u0627\u0644\u0627\u062B\u0646\u064A\u0646",
  "\u0627\u0644\u062B\u0644\u0627\u062B\u0627\u0621",
  "\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621",
  "\u0627\u0644\u062E\u0645\u064A\u0633",
  "\u0627\u0644\u062C\u0645\u0639\u0629",
  "\u0627\u0644\u0633\u0628\u062A"]

};
var dayPeriodValues = {
  narrow: {
    am: "\u0635",
    pm: "\u0645",
    midnight: "\u0646",
    noon: "\u0638",
    morning: "\u0635\u0628\u0627\u062D\u0627\u064B",
    afternoon: "\u0628\u0639\u062F \u0627\u0644\u0638\u0647\u0631",
    evening: "\u0645\u0633\u0627\u0621\u0627\u064B",
    night: "\u0644\u064A\u0644\u0627\u064B"
  },
  abbreviated: {
    am: "\u0635",
    pm: "\u0645",
    midnight: "\u0646\u0635\u0641 \u0627\u0644\u0644\u064A\u0644",
    noon: "\u0638\u0647\u0631",
    morning: "\u0635\u0628\u0627\u062D\u0627\u064B",
    afternoon: "\u0628\u0639\u062F \u0627\u0644\u0638\u0647\u0631",
    evening: "\u0645\u0633\u0627\u0621\u0627\u064B",
    night: "\u0644\u064A\u0644\u0627\u064B"
  },
  wide: {
    am: "\u0635",
    pm: "\u0645",
    midnight: "\u0646\u0635\u0641 \u0627\u0644\u0644\u064A\u0644",
    noon: "\u0638\u0647\u0631",
    morning: "\u0635\u0628\u0627\u062D\u0627\u064B",
    afternoon: "\u0628\u0639\u062F \u0627\u0644\u0638\u0647\u0631",
    evening: "\u0645\u0633\u0627\u0621\u0627\u064B",
    night: "\u0644\u064A\u0644\u0627\u064B"
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: "\u0635",
    pm: "\u0645",
    midnight: "\u0646",
    noon: "\u0638",
    morning: "\u0641\u064A \u0627\u0644\u0635\u0628\u0627\u062D",
    afternoon: "\u0628\u0639\u062F \u0627\u0644\u0638\u0640\u0647\u0631",
    evening: "\u0641\u064A \u0627\u0644\u0645\u0633\u0627\u0621",
    night: "\u0641\u064A \u0627\u0644\u0644\u064A\u0644"
  },
  abbreviated: {
    am: "\u0635",
    pm: "\u0645",
    midnight: "\u0646\u0635\u0641 \u0627\u0644\u0644\u064A\u0644",
    noon: "\u0638\u0647\u0631",
    morning: "\u0641\u064A \u0627\u0644\u0635\u0628\u0627\u062D",
    afternoon: "\u0628\u0639\u062F \u0627\u0644\u0638\u0647\u0631",
    evening: "\u0641\u064A \u0627\u0644\u0645\u0633\u0627\u0621",
    night: "\u0641\u064A \u0627\u0644\u0644\u064A\u0644"
  },
  wide: {
    am: "\u0635",
    pm: "\u0645",
    midnight: "\u0646\u0635\u0641 \u0627\u0644\u0644\u064A\u0644",
    noon: "\u0638\u0647\u0631",
    morning: "\u0635\u0628\u0627\u062D\u0627\u064B",
    afternoon: "\u0628\u0639\u062F \u0627\u0644\u0638\u0640\u0647\u0631",
    evening: "\u0641\u064A \u0627\u0644\u0645\u0633\u0627\u0621",
    night: "\u0641\u064A \u0627\u0644\u0644\u064A\u0644"
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber) {
  return String(dirtyNumber);
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

// lib/locale/ar-DZ/_lib/match.js
var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(ق|ب)/i,
  abbreviated: /^(ق\.?\s?م\.?|ق\.?\s?م\.?\s?|a\.?\s?d\.?|c\.?\s?)/i,
  wide: /^(قبل الميلاد|قبل الميلاد|بعد الميلاد|بعد الميلاد)/i
};
var parseEraPatterns = {
  any: [/^قبل/i, /^بعد/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^ر[1234]/i,
  wide: /^الربع [1234]/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[جفمأسند]/i,
  abbreviated: /^(جان|فيف|مار|أفر|ماي|جوا|جوي|أوت|سبت|أكت|نوف|ديس)/i,
  wide: /^(جانفي|فيفري|مارس|أفريل|ماي|جوان|جويلية|أوت|سبتمبر|أكتوبر|نوفمبر|ديسمبر)/i
};
var parseMonthPatterns = {
  narrow: [
  /^ج/i,
  /^ف/i,
  /^م/i,
  /^أ/i,
  /^م/i,
  /^ج/i,
  /^ج/i,
  /^أ/i,
  /^س/i,
  /^أ/i,
  /^ن/i,
  /^د/i],

  any: [
  /^جان/i,
  /^فيف/i,
  /^مار/i,
  /^أفر/i,
  /^ماي/i,
  /^جوا/i,
  /^جوي/i,
  /^أوت/i,
  /^سبت/i,
  /^أكت/i,
  /^نوف/i,
  /^ديس/i]

};
var matchDayPatterns = {
  narrow: /^[حنثرخجس]/i,
  short: /^(أحد|اثنين|ثلاثاء|أربعاء|خميس|جمعة|سبت)/i,
  abbreviated: /^(أحد|اثن|ثلا|أرب|خمي|جمعة|سبت)/i,
  wide: /^(الأحد|الاثنين|الثلاثاء|الأربعاء|الخميس|الجمعة|السبت)/i
};
var parseDayPatterns = {
  narrow: [/^ح/i, /^ن/i, /^ث/i, /^ر/i, /^خ/i, /^ج/i, /^س/i],
  wide: [
  /^الأحد/i,
  /^الاثنين/i,
  /^الثلاثاء/i,
  /^الأربعاء/i,
  /^الخميس/i,
  /^الجمعة/i,
  /^السبت/i],

  any: [/^أح/i, /^اث/i, /^ث/i, /^أر/i, /^خ/i, /^ج/i, /^س/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
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
    valueCallback: function valueCallback(index) {return Number(index) + 1;}
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

// lib/locale/ar-DZ.js
var arDZ = {
  code: "ar-DZ",
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

// lib/locale/ar-DZ/cdn.js
window.dateFns = _objectSpread(_objectSpread({},
window.dateFns), {}, {
  locale: _objectSpread(_objectSpread({}, (_window$dateFns =
  window.dateFns) === null || _window$dateFns === void 0 ? void 0 : _window$dateFns.locale), {}, {
    arDZ: arDZ }) });



//# debugId=3CD8BDC99FECD03B64756E2164756E21

//# sourceMappingURL=cdn.js.map
})();