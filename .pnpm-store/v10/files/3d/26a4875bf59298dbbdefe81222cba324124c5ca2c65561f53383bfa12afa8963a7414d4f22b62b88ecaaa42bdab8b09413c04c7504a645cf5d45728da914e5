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

// lib/locale/eo/_lib/formatDistance.js
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: "malpli ol sekundo",
    other: "malpli ol {{count}} sekundoj"
  },
  xSeconds: {
    one: "1 sekundo",
    other: "{{count}} sekundoj"
  },
  halfAMinute: "duonminuto",
  lessThanXMinutes: {
    one: "malpli ol minuto",
    other: "malpli ol {{count}} minutoj"
  },
  xMinutes: {
    one: "1 minuto",
    other: "{{count}} minutoj"
  },
  aboutXHours: {
    one: "proksimume 1 horo",
    other: "proksimume {{count}} horoj"
  },
  xHours: {
    one: "1 horo",
    other: "{{count}} horoj"
  },
  xDays: {
    one: "1 tago",
    other: "{{count}} tagoj"
  },
  aboutXMonths: {
    one: "proksimume 1 monato",
    other: "proksimume {{count}} monatoj"
  },
  xWeeks: {
    one: "1 semajno",
    other: "{{count}} semajnoj"
  },
  aboutXWeeks: {
    one: "proksimume 1 semajno",
    other: "proksimume {{count}} semajnoj"
  },
  xMonths: {
    one: "1 monato",
    other: "{{count}} monatoj"
  },
  aboutXYears: {
    one: "proksimume 1 jaro",
    other: "proksimume {{count}} jaroj"
  },
  xYears: {
    one: "1 jaro",
    other: "{{count}} jaroj"
  },
  overXYears: {
    one: "pli ol 1 jaro",
    other: "pli ol {{count}} jaroj"
  },
  almostXYears: {
    one: "preska\u016D 1 jaro",
    other: "preska\u016D {{count}} jaroj"
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
    if (options !== null && options !== void 0 && options.comparison && options.comparison > 0) {
      return "post " + result;
    } else {
      return "anta\u016D " + result;
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

// lib/locale/eo/_lib/formatLong.js
var dateFormats = {
  full: "EEEE, do 'de' MMMM y",
  long: "y-MMMM-dd",
  medium: "y-MMM-dd",
  short: "yyyy-MM-dd"
};
var timeFormats = {
  full: "Ho 'horo kaj' m:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
};
var dateTimeFormats = {
  any: "{{date}} {{time}}"
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
    defaultWidth: "any"
  })
};

// lib/locale/eo/_lib/formatRelative.js
var formatRelativeLocale = {
  lastWeek: "'pasinta' eeee 'je' p",
  yesterday: "'hiera\u016D je' p",
  today: "'hodia\u016D je' p",
  tomorrow: "'morga\u016D je' p",
  nextWeek: "eeee 'je' p",
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

// lib/locale/eo/_lib/localize.js
var eraValues = {
  narrow: ["aK", "pK"],
  abbreviated: ["a.K.E.", "p.K.E."],
  wide: ["anta\u016D Komuna Erao", "Komuna Erao"]
};
var quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["K1", "K2", "K3", "K4"],
  wide: [
  "1-a kvaronjaro",
  "2-a kvaronjaro",
  "3-a kvaronjaro",
  "4-a kvaronjaro"]

};
var monthValues = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
  "jan",
  "feb",
  "mar",
  "apr",
  "maj",
  "jun",
  "jul",
  "a\u016Dg",
  "sep",
  "okt",
  "nov",
  "dec"],

  wide: [
  "januaro",
  "februaro",
  "marto",
  "aprilo",
  "majo",
  "junio",
  "julio",
  "a\u016Dgusto",
  "septembro",
  "oktobro",
  "novembro",
  "decembro"]

};
var dayValues = {
  narrow: ["D", "L", "M", "M", "\u0134", "V", "S"],
  short: ["di", "lu", "ma", "me", "\u0135a", "ve", "sa"],
  abbreviated: ["dim", "lun", "mar", "mer", "\u0135a\u016D", "ven", "sab"],
  wide: [
  "diman\u0109o",
  "lundo",
  "mardo",
  "merkredo",
  "\u0135a\u016Ddo",
  "vendredo",
  "sabato"]

};
var dayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "noktomezo",
    noon: "tagmezo",
    morning: "matene",
    afternoon: "posttagmeze",
    evening: "vespere",
    night: "nokte"
  },
  abbreviated: {
    am: "a.t.m.",
    pm: "p.t.m.",
    midnight: "noktomezo",
    noon: "tagmezo",
    morning: "matene",
    afternoon: "posttagmeze",
    evening: "vespere",
    night: "nokte"
  },
  wide: {
    am: "anta\u016Dtagmeze",
    pm: "posttagmeze",
    midnight: "noktomezo",
    noon: "tagmezo",
    morning: "matene",
    afternoon: "posttagmeze",
    evening: "vespere",
    night: "nokte"
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber) {
  var number = Number(dirtyNumber);
  return number + "-a";
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
    argumentCallback: function argumentCallback(quarter) {
      return Number(quarter) - 1;
    }
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
    defaultWidth: "wide"
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

// lib/locale/eo/_lib/match.js
var matchOrdinalNumberPattern = /^(\d+)(-?a)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^([ap]k)/i,
  abbreviated: /^([ap]\.?\s?k\.?\s?e\.?)/i,
  wide: /^((antaǔ |post )?komuna erao)/i
};
var parseEraPatterns = {
  any: [/^a/i, /^[kp]/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^k[1234]/i,
  wide: /^[1234](-?a)? kvaronjaro/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|maj|jun|jul|a(ŭ|ux|uh|u)g|sep|okt|nov|dec)/i,
  wide: /^(januaro|februaro|marto|aprilo|majo|junio|julio|a(ŭ|ux|uh|u)gusto|septembro|oktobro|novembro|decembro)/i
};
var parseMonthPatterns = {
  narrow: [
  /^j/i,
  /^f/i,
  /^m/i,
  /^a/i,
  /^m/i,
  /^j/i,
  /^j/i,
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
  /^maj/i,
  /^jun/i,
  /^jul/i,
  /^a(u|ŭ)/i,
  /^s/i,
  /^o/i,
  /^n/i,
  /^d/i]

};
var matchDayPatterns = {
  narrow: /^[dlmĵjvs]/i,
  short: /^(di|lu|ma|me|(ĵ|jx|jh|j)a|ve|sa)/i,
  abbreviated: /^(dim|lun|mar|mer|(ĵ|jx|jh|j)a(ŭ|ux|uh|u)|ven|sab)/i,
  wide: /^(diman(ĉ|cx|ch|c)o|lundo|mardo|merkredo|(ĵ|jx|jh|j)a(ŭ|ux|uh|u)do|vendredo|sabato)/i
};
var parseDayPatterns = {
  narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^(j|ĵ)/i, /^v/i, /^s/i],
  any: [/^d/i, /^l/i, /^ma/i, /^me/i, /^(j|ĵ)/i, /^v/i, /^s/i]
};
var matchDayPeriodPatterns = {
  narrow: /^([ap]|(posttagmez|noktomez|tagmez|maten|vesper|nokt)[eo])/i,
  abbreviated: /^([ap][.\s]?t[.\s]?m[.\s]?|(posttagmez|noktomez|tagmez|maten|vesper|nokt)[eo])/i,
  wide: /^(anta(ŭ|ux)tagmez|posttagmez|noktomez|tagmez|maten|vesper|nokt)[eo]/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^noktom/i,
    noon: /^t/i,
    morning: /^m/i,
    afternoon: /^posttagmeze/i,
    evening: /^v/i,
    night: /^n/i
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
    valueCallback: function valueCallback(index) {
      return index + 1;
    }
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

// lib/locale/eo.js
var eo = {
  code: "eo",
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

// lib/locale/eo/cdn.js
window.dateFns = _objectSpread(_objectSpread({},
window.dateFns), {}, {
  locale: _objectSpread(_objectSpread({}, (_window$dateFns =
  window.dateFns) === null || _window$dateFns === void 0 ? void 0 : _window$dateFns.locale), {}, {
    eo: eo }) });



//# debugId=9C855B5FFB38286264756E2164756E21

//# sourceMappingURL=cdn.js.map
})();