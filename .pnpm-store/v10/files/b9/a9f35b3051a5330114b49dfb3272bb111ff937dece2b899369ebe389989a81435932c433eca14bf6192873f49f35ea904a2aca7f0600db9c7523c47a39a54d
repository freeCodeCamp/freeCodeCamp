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

// lib/locale/vi/_lib/formatDistance.js
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: "d\u01B0\u1EDBi 1 gi\xE2y",
    other: "d\u01B0\u1EDBi {{count}} gi\xE2y"
  },
  xSeconds: {
    one: "1 gi\xE2y",
    other: "{{count}} gi\xE2y"
  },
  halfAMinute: "n\u1EEDa ph\xFAt",
  lessThanXMinutes: {
    one: "d\u01B0\u1EDBi 1 ph\xFAt",
    other: "d\u01B0\u1EDBi {{count}} ph\xFAt"
  },
  xMinutes: {
    one: "1 ph\xFAt",
    other: "{{count}} ph\xFAt"
  },
  aboutXHours: {
    one: "kho\u1EA3ng 1 gi\u1EDD",
    other: "kho\u1EA3ng {{count}} gi\u1EDD"
  },
  xHours: {
    one: "1 gi\u1EDD",
    other: "{{count}} gi\u1EDD"
  },
  xDays: {
    one: "1 ng\xE0y",
    other: "{{count}} ng\xE0y"
  },
  aboutXWeeks: {
    one: "kho\u1EA3ng 1 tu\u1EA7n",
    other: "kho\u1EA3ng {{count}} tu\u1EA7n"
  },
  xWeeks: {
    one: "1 tu\u1EA7n",
    other: "{{count}} tu\u1EA7n"
  },
  aboutXMonths: {
    one: "kho\u1EA3ng 1 th\xE1ng",
    other: "kho\u1EA3ng {{count}} th\xE1ng"
  },
  xMonths: {
    one: "1 th\xE1ng",
    other: "{{count}} th\xE1ng"
  },
  aboutXYears: {
    one: "kho\u1EA3ng 1 n\u0103m",
    other: "kho\u1EA3ng {{count}} n\u0103m"
  },
  xYears: {
    one: "1 n\u0103m",
    other: "{{count}} n\u0103m"
  },
  overXYears: {
    one: "h\u01A1n 1 n\u0103m",
    other: "h\u01A1n {{count}} n\u0103m"
  },
  almostXYears: {
    one: "g\u1EA7n 1 n\u0103m",
    other: "g\u1EA7n {{count}} n\u0103m"
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
      return result + " n\u1EEFa";
    } else {
      return result + " tr\u01B0\u1EDBc";
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

// lib/locale/vi/_lib/formatLong.js
var dateFormats = {
  full: "EEEE, 'ng\xE0y' d MMMM 'n\u0103m' y",
  long: "'ng\xE0y' d MMMM 'n\u0103m' y",
  medium: "d MMM 'n\u0103m' y",
  short: "dd/MM/y"
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

// lib/locale/vi/_lib/formatRelative.js
var formatRelativeLocale = {
  lastWeek: "eeee 'tu\u1EA7n tr\u01B0\u1EDBc v\xE0o l\xFAc' p",
  yesterday: "'h\xF4m qua v\xE0o l\xFAc' p",
  today: "'h\xF4m nay v\xE0o l\xFAc' p",
  tomorrow: "'ng\xE0y mai v\xE0o l\xFAc' p",
  nextWeek: "eeee 't\u1EDBi v\xE0o l\xFAc' p",
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

// lib/locale/vi/_lib/localize.js
var eraValues = {
  narrow: ["TCN", "SCN"],
  abbreviated: ["tr\u01B0\u1EDBc CN", "sau CN"],
  wide: ["tr\u01B0\u1EDBc C\xF4ng Nguy\xEAn", "sau C\xF4ng Nguy\xEAn"]
};
var quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["Qu\xFD 1", "Qu\xFD 2", "Qu\xFD 3", "Qu\xFD 4"]
};
var formattingQuarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["qu\xFD I", "qu\xFD II", "qu\xFD III", "qu\xFD IV"]
};
var monthValues = {
  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
  abbreviated: [
  "Thg 1",
  "Thg 2",
  "Thg 3",
  "Thg 4",
  "Thg 5",
  "Thg 6",
  "Thg 7",
  "Thg 8",
  "Thg 9",
  "Thg 10",
  "Thg 11",
  "Thg 12"],

  wide: [
  "Th\xE1ng M\u1ED9t",
  "Th\xE1ng Hai",
  "Th\xE1ng Ba",
  "Th\xE1ng T\u01B0",
  "Th\xE1ng N\u0103m",
  "Th\xE1ng S\xE1u",
  "Th\xE1ng B\u1EA3y",
  "Th\xE1ng T\xE1m",
  "Th\xE1ng Ch\xEDn",
  "Th\xE1ng M\u01B0\u1EDDi",
  "Th\xE1ng M\u01B0\u1EDDi M\u1ED9t",
  "Th\xE1ng M\u01B0\u1EDDi Hai"]

};
var formattingMonthValues = {
  narrow: [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12"],

  abbreviated: [
  "thg 1",
  "thg 2",
  "thg 3",
  "thg 4",
  "thg 5",
  "thg 6",
  "thg 7",
  "thg 8",
  "thg 9",
  "thg 10",
  "thg 11",
  "thg 12"],

  wide: [
  "th\xE1ng 01",
  "th\xE1ng 02",
  "th\xE1ng 03",
  "th\xE1ng 04",
  "th\xE1ng 05",
  "th\xE1ng 06",
  "th\xE1ng 07",
  "th\xE1ng 08",
  "th\xE1ng 09",
  "th\xE1ng 10",
  "th\xE1ng 11",
  "th\xE1ng 12"]

};
var dayValues = {
  narrow: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
  short: ["CN", "Th 2", "Th 3", "Th 4", "Th 5", "Th 6", "Th 7"],
  abbreviated: ["CN", "Th\u1EE9 2", "Th\u1EE9 3", "Th\u1EE9 4", "Th\u1EE9 5", "Th\u1EE9 6", "Th\u1EE9 7"],
  wide: [
  "Ch\u1EE7 Nh\u1EADt",
  "Th\u1EE9 Hai",
  "Th\u1EE9 Ba",
  "Th\u1EE9 T\u01B0",
  "Th\u1EE9 N\u0103m",
  "Th\u1EE9 S\xE1u",
  "Th\u1EE9 B\u1EA3y"]

};
var dayPeriodValues = {
  narrow: {
    am: "am",
    pm: "pm",
    midnight: "n\u1EEDa \u0111\xEAm",
    noon: "tr",
    morning: "sg",
    afternoon: "ch",
    evening: "t\u1ED1i",
    night: "\u0111\xEAm"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "n\u1EEDa \u0111\xEAm",
    noon: "tr\u01B0a",
    morning: "s\xE1ng",
    afternoon: "chi\u1EC1u",
    evening: "t\u1ED1i",
    night: "\u0111\xEAm"
  },
  wide: {
    am: "SA",
    pm: "CH",
    midnight: "n\u1EEDa \u0111\xEAm",
    noon: "tr\u01B0a",
    morning: "s\xE1ng",
    afternoon: "chi\u1EC1u",
    evening: "t\u1ED1i",
    night: "\u0111\xEAm"
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: "am",
    pm: "pm",
    midnight: "n\u1EEDa \u0111\xEAm",
    noon: "tr",
    morning: "sg",
    afternoon: "ch",
    evening: "t\u1ED1i",
    night: "\u0111\xEAm"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "n\u1EEDa \u0111\xEAm",
    noon: "tr\u01B0a",
    morning: "s\xE1ng",
    afternoon: "chi\u1EC1u",
    evening: "t\u1ED1i",
    night: "\u0111\xEAm"
  },
  wide: {
    am: "SA",
    pm: "CH",
    midnight: "n\u1EEDa \u0111\xEAm",
    noon: "gi\u1EEFa tr\u01B0a",
    morning: "v\xE0o bu\u1ED5i s\xE1ng",
    afternoon: "v\xE0o bu\u1ED5i chi\u1EC1u",
    evening: "v\xE0o bu\u1ED5i t\u1ED1i",
    night: "v\xE0o ban \u0111\xEAm"
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber, options) {
  var number = Number(dirtyNumber);
  var unit = options === null || options === void 0 ? void 0 : options.unit;
  if (unit === "quarter") {
    switch (number) {
      case 1:
        return "I";
      case 2:
        return "II";
      case 3:
        return "III";
      case 4:
        return "IV";
    }
  } else if (unit === "day") {
    switch (number) {
      case 1:
        return "th\u1EE9 2";
      case 2:
        return "th\u1EE9 3";
      case 3:
        return "th\u1EE9 4";
      case 4:
        return "th\u1EE9 5";
      case 5:
        return "th\u1EE9 6";
      case 6:
        return "th\u1EE9 7";
      case 7:
        return "ch\u1EE7 nh\u1EADt";
    }
  } else if (unit === "week") {
    if (number === 1) {
      return "th\u1EE9 nh\u1EA5t";
    } else {
      return "th\u1EE9 " + number;
    }
  } else if (unit === "dayOfYear") {
    if (number === 1) {
      return "\u0111\u1EA7u ti\xEAn";
    } else {
      return "th\u1EE9 " + number;
    }
  }
  return String(number);
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
    formattingValues: formattingQuarterValues,
    defaultFormattingWidth: "wide",
    argumentCallback: function argumentCallback(quarter) {return quarter - 1;}
  }),
  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: "wide",
    formattingValues: formattingMonthValues,
    defaultFormattingWidth: "wide"
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

// lib/locale/vi/_lib/match.js
var matchOrdinalNumberPattern = /^(\d+)/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(tcn|scn)/i,
  abbreviated: /^(trước CN|sau CN)/i,
  wide: /^(trước Công Nguyên|sau Công Nguyên)/i
};
var parseEraPatterns = {
  any: [/^t/i, /^s/i]
};
var matchQuarterPatterns = {
  narrow: /^([1234]|i{1,3}v?)/i,
  abbreviated: /^q([1234]|i{1,3}v?)/i,
  wide: /^quý ([1234]|i{1,3}v?)/i
};
var parseQuarterPatterns = {
  any: [/(1|i)$/i, /(2|ii)$/i, /(3|iii)$/i, /(4|iv)$/i]
};
var matchMonthPatterns = {
  narrow: /^(0?[2-9]|10|11|12|0?1)/i,
  abbreviated: /^thg[ _]?(0?[1-9](?!\d)|10|11|12)/i,
  wide: /^tháng ?(Một|Hai|Ba|Tư|Năm|Sáu|Bảy|Tám|Chín|Mười|Mười ?Một|Mười ?Hai|0?[1-9](?!\d)|10|11|12)/i
};
var parseMonthPatterns = {
  narrow: [
  /0?1$/i,
  /0?2/i,
  /3/,
  /4/,
  /5/,
  /6/,
  /7/,
  /8/,
  /9/,
  /10/,
  /11/,
  /12/],

  abbreviated: [
  /^thg[ _]?0?1(?!\d)/i,
  /^thg[ _]?0?2/i,
  /^thg[ _]?0?3/i,
  /^thg[ _]?0?4/i,
  /^thg[ _]?0?5/i,
  /^thg[ _]?0?6/i,
  /^thg[ _]?0?7/i,
  /^thg[ _]?0?8/i,
  /^thg[ _]?0?9/i,
  /^thg[ _]?10/i,
  /^thg[ _]?11/i,
  /^thg[ _]?12/i],

  wide: [
  /^tháng ?(Một|0?1(?!\d))/i,
  /^tháng ?(Hai|0?2)/i,
  /^tháng ?(Ba|0?3)/i,
  /^tháng ?(Tư|0?4)/i,
  /^tháng ?(Năm|0?5)/i,
  /^tháng ?(Sáu|0?6)/i,
  /^tháng ?(Bảy|0?7)/i,
  /^tháng ?(Tám|0?8)/i,
  /^tháng ?(Chín|0?9)/i,
  /^tháng ?(Mười|10)/i,
  /^tháng ?(Mười ?Một|11)/i,
  /^tháng ?(Mười ?Hai|12)/i]

};
var matchDayPatterns = {
  narrow: /^(CN|T2|T3|T4|T5|T6|T7)/i,
  short: /^(CN|Th ?2|Th ?3|Th ?4|Th ?5|Th ?6|Th ?7)/i,
  abbreviated: /^(CN|Th ?2|Th ?3|Th ?4|Th ?5|Th ?6|Th ?7)/i,
  wide: /^(Chủ ?Nhật|Chúa ?Nhật|thứ ?Hai|thứ ?Ba|thứ ?Tư|thứ ?Năm|thứ ?Sáu|thứ ?Bảy)/i
};
var parseDayPatterns = {
  narrow: [/CN/i, /2/i, /3/i, /4/i, /5/i, /6/i, /7/i],
  short: [/CN/i, /2/i, /3/i, /4/i, /5/i, /6/i, /7/i],
  abbreviated: [/CN/i, /2/i, /3/i, /4/i, /5/i, /6/i, /7/i],
  wide: [/(Chủ|Chúa) ?Nhật/i, /Hai/i, /Ba/i, /Tư/i, /Năm/i, /Sáu/i, /Bảy/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|nửa đêm|trưa|(giờ) (sáng|chiều|tối|đêm))/i,
  abbreviated: /^(am|pm|nửa đêm|trưa|(giờ) (sáng|chiều|tối|đêm))/i,
  wide: /^(ch[^i]*|sa|nửa đêm|trưa|(giờ) (sáng|chiều|tối|đêm))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^(a|sa)/i,
    pm: /^(p|ch[^i]*)/i,
    midnight: /nửa đêm/i,
    noon: /trưa/i,
    morning: /sáng/i,
    afternoon: /chiều/i,
    evening: /tối/i,
    night: /^đêm/i
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
    defaultParseWidth: "wide"
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

// lib/locale/vi.js
var vi = {
  code: "vi",
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

// lib/locale/vi/cdn.js
window.dateFns = _objectSpread(_objectSpread({},
window.dateFns), {}, {
  locale: _objectSpread(_objectSpread({}, (_window$dateFns =
  window.dateFns) === null || _window$dateFns === void 0 ? void 0 : _window$dateFns.locale), {}, {
    vi: vi }) });



//# debugId=99CB759AEAC8A3D464756E2164756E21

//# sourceMappingURL=cdn.js.map
})();