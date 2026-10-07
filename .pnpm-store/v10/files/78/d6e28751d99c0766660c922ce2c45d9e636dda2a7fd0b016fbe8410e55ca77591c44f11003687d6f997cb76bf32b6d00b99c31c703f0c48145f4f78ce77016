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

// lib/locale/sq/_lib/formatDistance.js
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: "m\xEB pak se nj\xEB sekond\xEB",
    other: "m\xEB pak se {{count}} sekonda"
  },
  xSeconds: {
    one: "1 sekond\xEB",
    other: "{{count}} sekonda"
  },
  halfAMinute: "gjys\xEBm minuti",
  lessThanXMinutes: {
    one: "m\xEB pak se nj\xEB minute",
    other: "m\xEB pak se {{count}} minuta"
  },
  xMinutes: {
    one: "1 minut\xEB",
    other: "{{count}} minuta"
  },
  aboutXHours: {
    one: "rreth 1 or\xEB",
    other: "rreth {{count}} or\xEB"
  },
  xHours: {
    one: "1 or\xEB",
    other: "{{count}} or\xEB"
  },
  xDays: {
    one: "1 dit\xEB",
    other: "{{count}} dit\xEB"
  },
  aboutXWeeks: {
    one: "rreth 1 jav\xEB",
    other: "rreth {{count}} jav\xEB"
  },
  xWeeks: {
    one: "1 jav\xEB",
    other: "{{count}} jav\xEB"
  },
  aboutXMonths: {
    one: "rreth 1 muaj",
    other: "rreth {{count}} muaj"
  },
  xMonths: {
    one: "1 muaj",
    other: "{{count}} muaj"
  },
  aboutXYears: {
    one: "rreth 1 vit",
    other: "rreth {{count}} vite"
  },
  xYears: {
    one: "1 vit",
    other: "{{count}} vite"
  },
  overXYears: {
    one: "mbi 1 vit",
    other: "mbi {{count}} vite"
  },
  almostXYears: {
    one: "pothuajse 1 vit",
    other: "pothuajse {{count}} vite"
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
      return "n\xEB " + result;
    } else {
      return result + " m\xEB par\xEB";
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

// lib/locale/sq/_lib/formatLong.js
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
  full: "{{date}} 'n\xEB' {{time}}",
  long: "{{date}} 'n\xEB' {{time}}",
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

// lib/locale/sq/_lib/formatRelative.js
var formatRelativeLocale = {
  lastWeek: "'t\xEB' eeee 'e shkuar n\xEB' p",
  yesterday: "'dje n\xEB' p",
  today: "'sot n\xEB' p",
  tomorrow: "'nes\xEBr n\xEB' p",
  nextWeek: "eeee 'at' p",
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

// lib/locale/sq/_lib/localize.js
var eraValues = {
  narrow: ["P", "M"],
  abbreviated: ["PK", "MK"],
  wide: ["Para Krishtit", "Mbas Krishtit"]
};
var quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["4-mujori I", "4-mujori II", "4-mujori III", "4-mujori IV"]
};
var monthValues = {
  narrow: ["J", "S", "M", "P", "M", "Q", "K", "G", "S", "T", "N", "D"],
  abbreviated: [
  "Jan",
  "Shk",
  "Mar",
  "Pri",
  "Maj",
  "Qer",
  "Kor",
  "Gus",
  "Sht",
  "Tet",
  "N\xEBn",
  "Dhj"],

  wide: [
  "Janar",
  "Shkurt",
  "Mars",
  "Prill",
  "Maj",
  "Qershor",
  "Korrik",
  "Gusht",
  "Shtator",
  "Tetor",
  "N\xEBntor",
  "Dhjetor"]

};
var dayValues = {
  narrow: ["D", "H", "M", "M", "E", "P", "S"],
  short: ["Di", "H\xEB", "Ma", "M\xEB", "En", "Pr", "Sh"],
  abbreviated: ["Die", "H\xEBn", "Mar", "M\xEBr", "Enj", "Pre", "Sht"],
  wide: ["Diel\xEB", "H\xEBn\xEB", "Mart\xEB", "M\xEBrkur\xEB", "Enjte", "Premte", "Shtun\xEB"]
};
var dayPeriodValues = {
  narrow: {
    am: "p",
    pm: "m",
    midnight: "m",
    noon: "d",
    morning: "m\xEBngjes",
    afternoon: "dite",
    evening: "mbr\xEBmje",
    night: "nat\xEB"
  },
  abbreviated: {
    am: "PD",
    pm: "MD",
    midnight: "mesn\xEBt\xEB",
    noon: "drek",
    morning: "m\xEBngjes",
    afternoon: "mbasdite",
    evening: "mbr\xEBmje",
    night: "nat\xEB"
  },
  wide: {
    am: "p.d.",
    pm: "m.d.",
    midnight: "mesn\xEBt\xEB",
    noon: "drek",
    morning: "m\xEBngjes",
    afternoon: "mbasdite",
    evening: "mbr\xEBmje",
    night: "nat\xEB"
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: "p",
    pm: "m",
    midnight: "m",
    noon: "d",
    morning: "n\xEB m\xEBngjes",
    afternoon: "n\xEB mbasdite",
    evening: "n\xEB mbr\xEBmje",
    night: "n\xEB mesnat\xEB"
  },
  abbreviated: {
    am: "PD",
    pm: "MD",
    midnight: "mesnat\xEB",
    noon: "drek",
    morning: "n\xEB m\xEBngjes",
    afternoon: "n\xEB mbasdite",
    evening: "n\xEB mbr\xEBmje",
    night: "n\xEB mesnat\xEB"
  },
  wide: {
    am: "p.d.",
    pm: "m.d.",
    midnight: "mesnat\xEB",
    noon: "drek",
    morning: "n\xEB m\xEBngjes",
    afternoon: "n\xEB mbasdite",
    evening: "n\xEB mbr\xEBmje",
    night: "n\xEB mesnat\xEB"
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber, options) {
  var number = Number(dirtyNumber);
  if ((options === null || options === void 0 ? void 0 : options.unit) === "hour")
  return String(number);
  if (number === 1)
  return number + "-r\xEB";
  if (number === 4)
  return number + "t";
  return number + "-t\xEB";
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

// lib/locale/sq/_lib/match.js
var matchOrdinalNumberPattern = /^(\d+)(-rë|-të|t|)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(p|m)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(para krishtit|mbas krishtit)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(p|m)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234]-mujori (i{1,3}|iv)/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jsmpqkftnd]/i,
  abbreviated: /^(jan|shk|mar|pri|maj|qer|kor|gus|sht|tet|nën|dhj)/i,
  wide: /^(janar|shkurt|mars|prill|maj|qershor|korrik|gusht|shtator|tetor|nëntor|dhjetor)/i
};
var parseMonthPatterns = {
  narrow: [
  /^j/i,
  /^s/i,
  /^m/i,
  /^p/i,
  /^m/i,
  /^q/i,
  /^k/i,
  /^g/i,
  /^s/i,
  /^t/i,
  /^n/i,
  /^d/i],

  any: [
  /^ja/i,
  /^shk/i,
  /^mar/i,
  /^pri/i,
  /^maj/i,
  /^qer/i,
  /^kor/i,
  /^gu/i,
  /^sht/i,
  /^tet/i,
  /^n/i,
  /^d/i]

};
var matchDayPatterns = {
  narrow: /^[dhmeps]/i,
  short: /^(di|hë|ma|më|en|pr|sh)/i,
  abbreviated: /^(die|hën|mar|mër|enj|pre|sht)/i,
  wide: /^(dielë|hënë|martë|mërkurë|enjte|premte|shtunë)/i
};
var parseDayPatterns = {
  narrow: [/^d/i, /^h/i, /^m/i, /^m/i, /^e/i, /^p/i, /^s/i],
  any: [/^d/i, /^h/i, /^ma/i, /^më/i, /^e/i, /^p/i, /^s/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(p|m|me|në (mëngjes|mbasdite|mbrëmje|mesnatë))/i,
  any: /^([pm]\.?\s?d\.?|drek|në (mëngjes|mbasdite|mbrëmje|mesnatë))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^p/i,
    pm: /^m/i,
    midnight: /^me/i,
    noon: /^dr/i,
    morning: /mëngjes/i,
    afternoon: /mbasdite/i,
    evening: /mbrëmje/i,
    night: /natë/i
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

// lib/locale/sq.js
var sq = {
  code: "sq",
  formatDistance: formatDistance,
  formatLong: formatLong,
  formatRelative: formatRelative,
  localize: localize,
  match: match,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 1
  }
};

// lib/locale/sq/cdn.js
window.dateFns = _objectSpread(_objectSpread({},
window.dateFns), {}, {
  locale: _objectSpread(_objectSpread({}, (_window$dateFns =
  window.dateFns) === null || _window$dateFns === void 0 ? void 0 : _window$dateFns.locale), {}, {
    sq: sq }) });



//# debugId=20226FB7E605365064756E2164756E21

//# sourceMappingURL=cdn.js.map
})();