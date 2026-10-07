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

// lib/locale/fa-IR/_lib/formatDistance.js
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: "\u06A9\u0645\u062A\u0631 \u0627\u0632 \u06CC\u06A9 \u062B\u0627\u0646\u06CC\u0647",
    other: "\u06A9\u0645\u062A\u0631 \u0627\u0632 {{count}} \u062B\u0627\u0646\u06CC\u0647"
  },
  xSeconds: {
    one: "1 \u062B\u0627\u0646\u06CC\u0647",
    other: "{{count}} \u062B\u0627\u0646\u06CC\u0647"
  },
  halfAMinute: "\u0646\u06CC\u0645 \u062F\u0642\u06CC\u0642\u0647",
  lessThanXMinutes: {
    one: "\u06A9\u0645\u062A\u0631 \u0627\u0632 \u06CC\u06A9 \u062F\u0642\u06CC\u0642\u0647",
    other: "\u06A9\u0645\u062A\u0631 \u0627\u0632 {{count}} \u062F\u0642\u06CC\u0642\u0647"
  },
  xMinutes: {
    one: "1 \u062F\u0642\u06CC\u0642\u0647",
    other: "{{count}} \u062F\u0642\u06CC\u0642\u0647"
  },
  aboutXHours: {
    one: "\u062D\u062F\u0648\u062F 1 \u0633\u0627\u0639\u062A",
    other: "\u062D\u062F\u0648\u062F {{count}} \u0633\u0627\u0639\u062A"
  },
  xHours: {
    one: "1 \u0633\u0627\u0639\u062A",
    other: "{{count}} \u0633\u0627\u0639\u062A"
  },
  xDays: {
    one: "1 \u0631\u0648\u0632",
    other: "{{count}} \u0631\u0648\u0632"
  },
  aboutXWeeks: {
    one: "\u062D\u062F\u0648\u062F 1 \u0647\u0641\u062A\u0647",
    other: "\u062D\u062F\u0648\u062F {{count}} \u0647\u0641\u062A\u0647"
  },
  xWeeks: {
    one: "1 \u0647\u0641\u062A\u0647",
    other: "{{count}} \u0647\u0641\u062A\u0647"
  },
  aboutXMonths: {
    one: "\u062D\u062F\u0648\u062F 1 \u0645\u0627\u0647",
    other: "\u062D\u062F\u0648\u062F {{count}} \u0645\u0627\u0647"
  },
  xMonths: {
    one: "1 \u0645\u0627\u0647",
    other: "{{count}} \u0645\u0627\u0647"
  },
  aboutXYears: {
    one: "\u062D\u062F\u0648\u062F 1 \u0633\u0627\u0644",
    other: "\u062D\u062F\u0648\u062F {{count}} \u0633\u0627\u0644"
  },
  xYears: {
    one: "1 \u0633\u0627\u0644",
    other: "{{count}} \u0633\u0627\u0644"
  },
  overXYears: {
    one: "\u0628\u06CC\u0634\u062A\u0631 \u0627\u0632 1 \u0633\u0627\u0644",
    other: "\u0628\u06CC\u0634\u062A\u0631 \u0627\u0632 {{count}} \u0633\u0627\u0644"
  },
  almostXYears: {
    one: "\u0646\u0632\u062F\u06CC\u06A9 1 \u0633\u0627\u0644",
    other: "\u0646\u0632\u062F\u06CC\u06A9 {{count}} \u0633\u0627\u0644"
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
    result = tokenValue.other.replace("{{count}}", String(count));
  }
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return "\u062F\u0631 " + result;
    } else {
      return result + " \u0642\u0628\u0644";
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

// lib/locale/fa-IR/_lib/formatLong.js
var dateFormats = {
  full: "EEEE do MMMM y",
  long: "do MMMM y",
  medium: "d MMM y",
  short: "yyyy/MM/dd"
};
var timeFormats = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
};
var dateTimeFormats = {
  full: "{{date}} '\u062F\u0631' {{time}}",
  long: "{{date}} '\u062F\u0631' {{time}}",
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

// lib/locale/fa-IR/_lib/formatRelative.js
var formatRelativeLocale = {
  lastWeek: "eeee '\u06AF\u0630\u0634\u062A\u0647 \u062F\u0631' p",
  yesterday: "'\u062F\u06CC\u0631\u0648\u0632 \u062F\u0631' p",
  today: "'\u0627\u0645\u0631\u0648\u0632 \u062F\u0631' p",
  tomorrow: "'\u0641\u0631\u062F\u0627 \u062F\u0631' p",
  nextWeek: "eeee '\u062F\u0631' p",
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

// lib/locale/fa-IR/_lib/localize.js
var eraValues = {
  narrow: ["\u0642", "\u0628"],
  abbreviated: ["\u0642.\u0645.", "\u0628.\u0645."],
  wide: ["\u0642\u0628\u0644 \u0627\u0632 \u0645\u06CC\u0644\u0627\u062F", "\u0628\u0639\u062F \u0627\u0632 \u0645\u06CC\u0644\u0627\u062F"]
};
var quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["\u0633\u200C\u06451", "\u0633\u200C\u06452", "\u0633\u200C\u06453", "\u0633\u200C\u06454"],
  wide: ["\u0633\u0647\u200C\u0645\u0627\u0647\u0647 1", "\u0633\u0647\u200C\u0645\u0627\u0647\u0647 2", "\u0633\u0647\u200C\u0645\u0627\u0647\u0647 3", "\u0633\u0647\u200C\u0645\u0627\u0647\u0647 4"]
};
var monthValues = {
  narrow: ["\u0698", "\u0641", "\u0645", "\u0622", "\u0645", "\u062C", "\u062C", "\u0622", "\u0633", "\u0627", "\u0646", "\u062F"],
  abbreviated: [
  "\u0698\u0627\u0646\u0640",
  "\u0641\u0648\u0631",
  "\u0645\u0627\u0631\u0633",
  "\u0622\u067E\u0631",
  "\u0645\u06CC",
  "\u062C\u0648\u0646",
  "\u062C\u0648\u0644\u0640",
  "\u0622\u06AF\u0648",
  "\u0633\u067E\u062A\u0640",
  "\u0627\u06A9\u062A\u0640",
  "\u0646\u0648\u0627\u0645\u0640",
  "\u062F\u0633\u0627\u0645\u0640"],

  wide: [
  "\u0698\u0627\u0646\u0648\u06CC\u0647",
  "\u0641\u0648\u0631\u06CC\u0647",
  "\u0645\u0627\u0631\u0633",
  "\u0622\u067E\u0631\u06CC\u0644",
  "\u0645\u06CC",
  "\u062C\u0648\u0646",
  "\u062C\u0648\u0644\u0627\u06CC",
  "\u0622\u06AF\u0648\u0633\u062A",
  "\u0633\u067E\u062A\u0627\u0645\u0628\u0631",
  "\u0627\u06A9\u062A\u0628\u0631",
  "\u0646\u0648\u0627\u0645\u0628\u0631",
  "\u062F\u0633\u0627\u0645\u0628\u0631"]

};
var dayValues = {
  narrow: ["\u06CC", "\u062F", "\u0633", "\u0686", "\u067E", "\u062C", "\u0634"],
  short: ["1\u0634", "2\u0634", "3\u0634", "4\u0634", "5\u0634", "\u062C", "\u0634"],
  abbreviated: [
  "\u06CC\u06A9\u0634\u0646\u0628\u0647",
  "\u062F\u0648\u0634\u0646\u0628\u0647",
  "\u0633\u0647\u200C\u0634\u0646\u0628\u0647",
  "\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647",
  "\u067E\u0646\u062C\u0634\u0646\u0628\u0647",
  "\u062C\u0645\u0639\u0647",
  "\u0634\u0646\u0628\u0647"],

  wide: ["\u06CC\u06A9\u0634\u0646\u0628\u0647", "\u062F\u0648\u0634\u0646\u0628\u0647", "\u0633\u0647\u200C\u0634\u0646\u0628\u0647", "\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647", "\u067E\u0646\u062C\u0634\u0646\u0628\u0647", "\u062C\u0645\u0639\u0647", "\u0634\u0646\u0628\u0647"]
};
var dayPeriodValues = {
  narrow: {
    am: "\u0642",
    pm: "\u0628",
    midnight: "\u0646",
    noon: "\u0638",
    morning: "\u0635",
    afternoon: "\u0628.\u0638.",
    evening: "\u0639",
    night: "\u0634"
  },
  abbreviated: {
    am: "\u0642.\u0638.",
    pm: "\u0628.\u0638.",
    midnight: "\u0646\u06CC\u0645\u0647\u200C\u0634\u0628",
    noon: "\u0638\u0647\u0631",
    morning: "\u0635\u0628\u062D",
    afternoon: "\u0628\u0639\u062F\u0627\u0632\u0638\u0647\u0631",
    evening: "\u0639\u0635\u0631",
    night: "\u0634\u0628"
  },
  wide: {
    am: "\u0642\u0628\u0644\u200C\u0627\u0632\u0638\u0647\u0631",
    pm: "\u0628\u0639\u062F\u0627\u0632\u0638\u0647\u0631",
    midnight: "\u0646\u06CC\u0645\u0647\u200C\u0634\u0628",
    noon: "\u0638\u0647\u0631",
    morning: "\u0635\u0628\u062D",
    afternoon: "\u0628\u0639\u062F\u0627\u0632\u0638\u0647\u0631",
    evening: "\u0639\u0635\u0631",
    night: "\u0634\u0628"
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: "\u0642",
    pm: "\u0628",
    midnight: "\u0646",
    noon: "\u0638",
    morning: "\u0635",
    afternoon: "\u0628.\u0638.",
    evening: "\u0639",
    night: "\u0634"
  },
  abbreviated: {
    am: "\u0642.\u0638.",
    pm: "\u0628.\u0638.",
    midnight: "\u0646\u06CC\u0645\u0647\u200C\u0634\u0628",
    noon: "\u0638\u0647\u0631",
    morning: "\u0635\u0628\u062D",
    afternoon: "\u0628\u0639\u062F\u0627\u0632\u0638\u0647\u0631",
    evening: "\u0639\u0635\u0631",
    night: "\u0634\u0628"
  },
  wide: {
    am: "\u0642\u0628\u0644\u200C\u0627\u0632\u0638\u0647\u0631",
    pm: "\u0628\u0639\u062F\u0627\u0632\u0638\u0647\u0631",
    midnight: "\u0646\u06CC\u0645\u0647\u200C\u0634\u0628",
    noon: "\u0638\u0647\u0631",
    morning: "\u0635\u0628\u062D",
    afternoon: "\u0628\u0639\u062F\u0627\u0632\u0638\u0647\u0631",
    evening: "\u0639\u0635\u0631",
    night: "\u0634\u0628"
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
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

// lib/locale/fa-IR/_lib/match.js
var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(ق|ب)/i,
  abbreviated: /^(ق\.?\s?م\.?|ق\.?\s?د\.?\s?م\.?|م\.?\s?|د\.?\s?م\.?)/i,
  wide: /^(قبل از میلاد|قبل از دوران مشترک|میلادی|دوران مشترک|بعد از میلاد)/i
};
var parseEraPatterns = {
  any: [/^قبل/i, /^بعد/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^س‌م[1234]/i,
  wide: /^سه‌ماهه [1234]/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[جژفمآاماسند]/i,
  abbreviated: /^(جنو|ژانـ|ژانویه|فوریه|فور|مارس|آوریل|آپر|مه|می|ژوئن|جون|جول|جولـ|ژوئیه|اوت|آگو|سپتمبر|سپتامبر|اکتبر|اکتوبر|نوامبر|نوامـ|دسامبر|دسامـ|دسم)/i,
  wide: /^(ژانویه|جنوری|فبروری|فوریه|مارچ|مارس|آپریل|اپریل|ایپریل|آوریل|مه|می|ژوئن|جون|جولای|ژوئیه|آگست|اگست|آگوست|اوت|سپتمبر|سپتامبر|اکتبر|اکتوبر|نوامبر|نومبر|دسامبر|دسمبر)/i
};
var parseMonthPatterns = {
  narrow: [
  /^(ژ|ج)/i,
  /^ف/i,
  /^م/i,
  /^(آ|ا)/i,
  /^م/i,
  /^(ژ|ج)/i,
  /^(ج|ژ)/i,
  /^(آ|ا)/i,
  /^س/i,
  /^ا/i,
  /^ن/i,
  /^د/i],

  any: [
  /^ژا/i,
  /^ف/i,
  /^ما/i,
  /^آپ/i,
  /^(می|مه)/i,
  /^(ژوئن|جون)/i,
  /^(ژوئی|جول)/i,
  /^(اوت|آگ)/i,
  /^س/i,
  /^(اوک|اک)/i,
  /^ن/i,
  /^د/i]

};
var matchDayPatterns = {
  narrow: /^[شیدسچپج]/i,
  short: /^(ش|ج|1ش|2ش|3ش|4ش|5ش)/i,
  abbreviated: /^(یکشنبه|دوشنبه|سه‌شنبه|چهارشنبه|پنج‌شنبه|جمعه|شنبه)/i,
  wide: /^(یکشنبه|دوشنبه|سه‌شنبه|چهارشنبه|پنج‌شنبه|جمعه|شنبه)/i
};
var parseDayPatterns = {
  narrow: [/^ی/i, /^دو/i, /^س/i, /^چ/i, /^پ/i, /^ج/i, /^ش/i],
  any: [
  /^(ی|1ش|یکشنبه)/i,
  /^(د|2ش|دوشنبه)/i,
  /^(س|3ش|سه‌شنبه)/i,
  /^(چ|4ش|چهارشنبه)/i,
  /^(پ|5ش|پنجشنبه)/i,
  /^(ج|جمعه)/i,
  /^(ش|شنبه)/i]

};
var matchDayPeriodPatterns = {
  narrow: /^(ب|ق|ن|ظ|ص|ب.ظ.|ع|ش)/i,
  abbreviated: /^(ق.ظ.|ب.ظ.|نیمه‌شب|ظهر|صبح|بعدازظهر|عصر|شب)/i,
  wide: /^(قبل‌ازظهر|نیمه‌شب|ظهر|صبح|بعدازظهر|عصر|شب)/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^(ق|ق.ظ.|قبل‌ازظهر)/i,
    pm: /^(ب|ب.ظ.|بعدازظهر)/i,
    midnight: /^(‌نیمه‌شب|ن)/i,
    noon: /^(ظ|ظهر)/i,
    morning: /(ص|صبح)/i,
    afternoon: /(ب|ب.ظ.|بعدازظهر)/i,
    evening: /(ع|عصر)/i,
    night: /(ش|شب)/i
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
    defaultMatchWidth: "wide",
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: "any"
  })
};

// lib/locale/fa-IR.js
var faIR = {
  code: "fa-IR",
  formatDistance: formatDistance,
  formatLong: formatLong,
  formatRelative: formatRelative,
  localize: localize,
  match: match,
  options: {
    weekStartsOn: 6,
    firstWeekContainsDate: 1
  }
};

// lib/locale/fa-IR/cdn.js
window.dateFns = _objectSpread(_objectSpread({},
window.dateFns), {}, {
  locale: _objectSpread(_objectSpread({}, (_window$dateFns =
  window.dateFns) === null || _window$dateFns === void 0 ? void 0 : _window$dateFns.locale), {}, {
    faIR: faIR }) });



//# debugId=8CC2EFE877F5B75064756E2164756E21

//# sourceMappingURL=cdn.js.map
})();