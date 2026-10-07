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

// lib/locale/mt/_lib/formatDistance.js
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: "inqas minn sekonda",
    other: "inqas minn {{count}} sekondi"
  },
  xSeconds: {
    one: "sekonda",
    other: "{{count}} sekondi"
  },
  halfAMinute: "nofs minuta",
  lessThanXMinutes: {
    one: "inqas minn minuta",
    other: "inqas minn {{count}} minuti"
  },
  xMinutes: {
    one: "minuta",
    other: "{{count}} minuti"
  },
  aboutXHours: {
    one: "madwar sieg\u0127a",
    other: "madwar {{count}} sieg\u0127at"
  },
  xHours: {
    one: "sieg\u0127a",
    other: "{{count}} sieg\u0127at"
  },
  xDays: {
    one: "\u0121urnata",
    other: "{{count}} \u0121ranet"
  },
  aboutXWeeks: {
    one: "madwar \u0121img\u0127a",
    other: "madwar {{count}} \u0121img\u0127at"
  },
  xWeeks: {
    one: "\u0121img\u0127a",
    other: "{{count}} \u0121img\u0127at"
  },
  aboutXMonths: {
    one: "madwar xahar",
    other: "madwar {{count}} xhur"
  },
  xMonths: {
    one: "xahar",
    other: "{{count}} xhur"
  },
  aboutXYears: {
    one: "madwar sena",
    two: "madwar sentejn",
    other: "madwar {{count}} snin"
  },
  xYears: {
    one: "sena",
    two: "sentejn",
    other: "{{count}} snin"
  },
  overXYears: {
    one: "aktar minn sena",
    two: "aktar minn sentejn",
    other: "aktar minn {{count}} snin"
  },
  almostXYears: {
    one: "kwa\u017Ci sena",
    two: "kwa\u017Ci sentejn",
    other: "kwa\u017Ci {{count}} snin"
  }
};
var formatDistance = function formatDistance(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === "string") {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else if (count === 2 && tokenValue.two) {
    result = tokenValue.two;
  } else {
    result = tokenValue.other.replace("{{count}}", String(count));
  }
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return "f'" + result;
    } else {
      return result + " ilu";
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

// lib/locale/mt/_lib/formatLong.js
var dateFormats = {
  full: "EEEE, d MMMM yyyy",
  long: "d MMMM yyyy",
  medium: "d MMM yyyy",
  short: "dd/MM/yyyy"
};
var timeFormats = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
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

// lib/locale/mt/_lib/formatRelative.js
var formatRelativeLocale = {
  lastWeek: "eeee 'li g\u0127adda' 'fil-'p",
  yesterday: "'Il-biera\u0127 fil-'p",
  today: "'Illum fil-'p",
  tomorrow: "'G\u0127ada fil-'p",
  nextWeek: "eeee 'fil-'p",
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

// lib/locale/mt/_lib/localize.js
var eraValues = {
  narrow: ["Q", "W"],
  abbreviated: ["QK", "WK"],
  wide: ["qabel Kristu", "wara Kristu"]
};
var quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["K1", "K2", "K3", "K4"],
  wide: ["1. kwart", "2. kwart", "3. kwart", "4. kwart"]
};
var monthValues = {
  narrow: ["J", "F", "M", "A", "M", "\u0120", "L", "A", "S", "O", "N", "D"],
  abbreviated: [
  "Jan",
  "Fra",
  "Mar",
  "Apr",
  "Mej",
  "\u0120un",
  "Lul",
  "Aww",
  "Set",
  "Ott",
  "Nov",
  "Di\u010B"],

  wide: [
  "Jannar",
  "Frar",
  "Marzu",
  "April",
  "Mejju",
  "\u0120unju",
  "Lulju",
  "Awwissu",
  "Settembru",
  "Ottubru",
  "Novembru",
  "Di\u010Bembru"]

};
var dayValues = {
  narrow: ["\u0126", "T", "T", "E", "\u0126", "\u0120", "S"],
  short: ["\u0126a", "Tn", "Tl", "Er", "\u0126a", "\u0120i", "Si"],
  abbreviated: ["\u0126ad", "Tne", "Tli", "Erb", "\u0126am", "\u0120im", "Sib"],
  wide: [
  "Il-\u0126add",
  "It-Tnejn",
  "It-Tlieta",
  "L-Erbg\u0127a",
  "Il-\u0126amis",
  "Il-\u0120img\u0127a",
  "Is-Sibt"]

};
var dayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "nofsillejl",
    noon: "nofsinhar",
    morning: "g\u0127odwa",
    afternoon: "wara nofsinhar",
    evening: "filg\u0127axija",
    night: "lejl"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "nofsillejl",
    noon: "nofsinhar",
    morning: "g\u0127odwa",
    afternoon: "wara nofsinhar",
    evening: "filg\u0127axija",
    night: "lejl"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "nofsillejl",
    noon: "nofsinhar",
    morning: "g\u0127odwa",
    afternoon: "wara nofsinhar",
    evening: "filg\u0127axija",
    night: "lejl"
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "f'nofsillejl",
    noon: "f'nofsinhar",
    morning: "filg\u0127odu",
    afternoon: "wara nofsinhar",
    evening: "filg\u0127axija",
    night: "billejl"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "f'nofsillejl",
    noon: "f'nofsinhar",
    morning: "filg\u0127odu",
    afternoon: "wara nofsinhar",
    evening: "filg\u0127axija",
    night: "billejl"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "f'nofsillejl",
    noon: "f'nofsinhar",
    morning: "filg\u0127odu",
    afternoon: "wara nofsinhar",
    evening: "filg\u0127axija",
    night: "billejl"
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
  var number = Number(dirtyNumber);
  return number + "\xBA";
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

// lib/locale/mt/_lib/match.js
var matchOrdinalNumberPattern = /^(\d+)(º)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(q|w)/i,
  abbreviated: /^(q\.?\s?k\.?|b\.?\s?c\.?\s?e\.?|w\.?\s?k\.?)/i,
  wide: /^(qabel kristu|before common era|wara kristu|common era)/i
};
var parseEraPatterns = {
  any: [/^(q|b)/i, /^(w|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^k[1234]/i,
  wide: /^[1234](\.)? kwart/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmaglsond]/i,
  abbreviated: /^(jan|fra|mar|apr|mej|ġun|lul|aww|set|ott|nov|diċ)/i,
  wide: /^(jannar|frar|marzu|april|mejju|ġunju|lulju|awwissu|settembru|ottubru|novembru|diċembru)/i
};
var parseMonthPatterns = {
  narrow: [
  /^j/i,
  /^f/i,
  /^m/i,
  /^a/i,
  /^m/i,
  /^ġ/i,
  /^l/i,
  /^a/i,
  /^s/i,
  /^o/i,
  /^n/i,
  /^d/i],

  any: [
  /^ja/i,
  /^f/i,
  /^mar/i,
  /^ap/i,
  /^mej/i,
  /^ġ/i,
  /^l/i,
  /^aw/i,
  /^s/i,
  /^o/i,
  /^n/i,
  /^d/i]

};
var matchDayPatterns = {
  narrow: /^[ħteġs]/i,
  short: /^(ħa|tn|tl|er|ħa|ġi|si)/i,
  abbreviated: /^(ħad|tne|tli|erb|ħam|ġim|sib)/i,
  wide: /^(il-ħadd|it-tnejn|it-tlieta|l-erbgħa|il-ħamis|il-ġimgħa|is-sibt)/i
};
var parseDayPatterns = {
  narrow: [/^ħ/i, /^t/i, /^t/i, /^e/i, /^ħ/i, /^ġ/i, /^s/i],
  any: [
  /^(il-)?ħad/i,
  /^(it-)?tn/i,
  /^(it-)?tl/i,
  /^(l-)?er/i,
  /^(il-)?ham/i,
  /^(il-)?ġi/i,
  /^(is-)?si/i]

};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|f'nofsillejl|f'nofsinhar|(ta') (għodwa|wara nofsinhar|filgħaxija|lejl))/i,
  any: /^([ap]\.?\s?m\.?|f'nofsillejl|f'nofsinhar|(ta') (għodwa|wara nofsinhar|filgħaxija|lejl))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^f'nofsillejl/i,
    noon: /^f'nofsinhar/i,
    morning: /għodwa/i,
    afternoon: /wara(\s.*)nofsinhar/i,
    evening: /filgħaxija/i,
    night: /lejl/i
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

// lib/locale/mt.js
var mt = {
  code: "mt",
  formatDistance: formatDistance,
  formatLong: formatLong,
  formatRelative: formatRelative,
  localize: localize,
  match: match,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 4
  }
};

// lib/locale/mt/cdn.js
window.dateFns = _objectSpread(_objectSpread({},
window.dateFns), {}, {
  locale: _objectSpread(_objectSpread({}, (_window$dateFns =
  window.dateFns) === null || _window$dateFns === void 0 ? void 0 : _window$dateFns.locale), {}, {
    mt: mt }) });



//# debugId=D18F4D9FEEDC720C64756E2164756E21

//# sourceMappingURL=cdn.js.map
})();