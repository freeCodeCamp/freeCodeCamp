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

// lib/locale/se/_lib/formatDistance.js
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: "unnit go ovtta sekundda",
    other: "unnit go {{count}} sekundda"
  },
  xSeconds: {
    one: "sekundda",
    other: "{{count}} sekundda"
  },
  halfAMinute: "bealle minuhta",
  lessThanXMinutes: {
    one: "unnit go bealle minuhta",
    other: "unnit go {{count}} minuhta"
  },
  xMinutes: {
    one: "minuhta",
    other: "{{count}} minuhta"
  },
  aboutXHours: {
    one: "sullii ovtta diimmu",
    other: "sullii {{count}} diimmu"
  },
  xHours: {
    one: "diimmu",
    other: "{{count}} diimmu"
  },
  xDays: {
    one: "beaivvi",
    other: "{{count}} beaivvi"
  },
  aboutXWeeks: {
    one: "sullii ovtta vahku",
    other: "sullii {{count}} vahku"
  },
  xWeeks: {
    one: "vahku",
    other: "{{count}} vahku"
  },
  aboutXMonths: {
    one: "sullii ovtta m\xE1nu",
    other: "sullii {{count}} m\xE1nu"
  },
  xMonths: {
    one: "m\xE1nu",
    other: "{{count}} m\xE1nu"
  },
  aboutXYears: {
    one: "sullii ovtta jagi",
    other: "sullii {{count}} jagi"
  },
  xYears: {
    one: "jagi",
    other: "{{count}} jagi"
  },
  overXYears: {
    one: "guhkit go jagi",
    other: "guhkit go {{count}} jagi"
  },
  almostXYears: {
    one: "measta jagi",
    other: "measta {{count}} jagi"
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
      return "geah\u010Den " + result;
    } else {
      return result + " \xE1igi";
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

// lib/locale/se/_lib/formatLong.js
var dateFormats = {
  full: "EEEE MMMM d. 'b.' y",
  long: "MMMM d. 'b.' y",
  medium: "MMM d. 'b.' y",
  short: "dd.MM.y"
};
var timeFormats = {
  full: "'dii.' HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
};
var dateTimeFormats = {
  full: "{{date}} 'dii.' {{time}}",
  long: "{{date}} 'dii.' {{time}}",
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

// lib/locale/se/_lib/formatRelative.js
var formatRelativeLocale = {
  lastWeek: "'ovddit' eeee 'dii.' p",
  yesterday: "'ikte dii.' p",
  today: "'odne dii.' p",
  tomorrow: "'ihtin dii.' p",
  nextWeek: "EEEE 'dii.' p",
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

// lib/locale/se/_lib/localize.js
var eraValues = {
  narrow: ["o.Kr.", "m.Kr."],
  abbreviated: ["o.Kr.", "m.Kr."],
  wide: ["ovdal Kristusa", "ma\u014B\u014Bel Kristusa"]
};
var quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1. kvart\xE1la", "2. kvart\xE1la", "3. kvart\xE1la", "4. kvart\xE1la"]
};
var monthValues = {
  narrow: ["O", "G", "N", "C", "M", "G", "S", "B", "\u010C", "G", "S", "J"],
  abbreviated: [
  "o\u0111\u0111a",
  "guov",
  "njuk",
  "cuo",
  "mies",
  "geas",
  "suoi",
  "borg",
  "\u010Dak\u010D",
  "golg",
  "sk\xE1b",
  "juov"],

  wide: [
  "o\u0111\u0111ajagem\xE1nnu",
  "guovvam\xE1nnu",
  "njuk\u010Dam\xE1nnu",
  "cuo\u014Bom\xE1nnu",
  "miessem\xE1nnu",
  "geassem\xE1nnu",
  "suoidnem\xE1nnu",
  "borgem\xE1nnu",
  "\u010Dak\u010Dam\xE1nnu",
  "golggotm\xE1nnu",
  "sk\xE1bmam\xE1nnu",
  "juovlam\xE1nnu"]

};
var dayValues = {
  narrow: ["S", "V", "M", "G", "D", "B", "L"],
  short: ["sotn", "vuos", "ma\u014B", "gask", "duor", "bear", "l\xE1v"],
  abbreviated: ["sotn", "vuos", "ma\u014B", "gask", "duor", "bear", "l\xE1v"],
  wide: [
  "sotnabeaivi",
  "vuoss\xE1rga",
  "ma\u014B\u014Beb\xE1rga",
  "gaskavahkku",
  "duorastat",
  "bearjadat",
  "l\xE1vvardat"]

};
var dayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "gaskaidja",
    noon: "gaskabeaivi",
    morning: "i\u0111\u0111es",
    afternoon: "ma\u014B\u014Bel gaska.",
    evening: "eahkes",
    night: "ihkku"
  },
  abbreviated: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "gaskaidja",
    noon: "gaskabeaivvi",
    morning: "i\u0111\u0111es",
    afternoon: "ma\u014B\u014Bel gaskabea.",
    evening: "eahkes",
    night: "ihkku"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "gaskaidja",
    noon: "gaskabeavvi",
    morning: "i\u0111\u0111es",
    afternoon: "ma\u014B\u014Bel gaskabeaivvi",
    evening: "eahkes",
    night: "ihkku"
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
  var number = Number(dirtyNumber);
  return number + ".";
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
    defaultWidth: "wide"
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

// lib/locale/se/_lib/match.js
var matchOrdinalNumberPattern = /^(\d+)\.?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(o\.? ?Kr\.?|m\.? ?Kr\.?)/i,
  abbreviated: /^(o\.? ?Kr\.?|m\.? ?Kr\.?)/i,
  wide: /^(ovdal Kristusa|ovdal min áiggi|maŋŋel Kristusa|min áigi)/i
};
var parseEraPatterns = {
  any: [/^o/i, /^m/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](\.)? kvartála/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[ogncmsbčj]/i,
  abbreviated: /^(ođđa|guov|njuk|cuo|mies|geas|suoi|borg|čakč|golg|skáb|juov)\.?/i,
  wide: /^(ođđajagemánnu|guovvamánnu|njukčamánnu|cuoŋománnu|miessemánnu|geassemánnu|suoidnemánnu|borgemánnu|čakčamánnu|golggotmánnu|skábmamánnu|juovlamánnu)/i
};
var parseMonthPatterns = {
  narrow: [
  /^o/i,
  /^g/i,
  /^n/i,
  /^c/i,
  /^m/i,
  /^g/i,
  /^s/i,
  /^b/i,
  /^č/i,
  /^g/i,
  /^s/i,
  /^j/i],

  any: [
  /^o/i,
  /^gu/i,
  /^n/i,
  /^c/i,
  /^m/i,
  /^ge/i,
  /^su/i,
  /^b/i,
  /^č/i,
  /^go/i,
  /^sk/i,
  /^j/i]

};
var matchDayPatterns = {
  narrow: /^[svmgdbl]/i,
  short: /^(sotn|vuos|maŋ|gask|duor|bear|láv)/i,
  abbreviated: /^(sotn|vuos|maŋ|gask|duor|bear|láv)/i,
  wide: /^(sotnabeaivi|vuossárga|maŋŋebárga|gaskavahkku|duorastat|bearjadat|lávvardat)/i
};
var parseDayPatterns = {
  any: [/^s/i, /^v/i, /^m/i, /^g/i, /^d/i, /^b/i, /^l/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(gaskaidja|gaskabeaivvi|(på) (iđđes|maŋŋel gaskabeaivvi|eahkes|ihkku)|[ap])/i,
  any: /^([ap]\.?\s?m\.?|gaskaidja|gaskabeaivvi|(på) (iđđes|maŋŋel gaskabeaivvi|eahkes|ihkku))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a(\.?\s?m\.?)?$/i,
    pm: /^p(\.?\s?m\.?)?$/i,
    midnight: /^gaskai/i,
    noon: /^gaskab/i,
    morning: /iđđes/i,
    afternoon: /maŋŋel gaskabeaivvi/i,
    evening: /eahkes/i,
    night: /ihkku/i
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

// lib/locale/se.js
var se = {
  code: "se",
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

// lib/locale/se/cdn.js
window.dateFns = _objectSpread(_objectSpread({},
window.dateFns), {}, {
  locale: _objectSpread(_objectSpread({}, (_window$dateFns =
  window.dateFns) === null || _window$dateFns === void 0 ? void 0 : _window$dateFns.locale), {}, {
    se: se }) });



//# debugId=9D6BD8A293D237FA64756E2164756E21

//# sourceMappingURL=cdn.js.map
})();