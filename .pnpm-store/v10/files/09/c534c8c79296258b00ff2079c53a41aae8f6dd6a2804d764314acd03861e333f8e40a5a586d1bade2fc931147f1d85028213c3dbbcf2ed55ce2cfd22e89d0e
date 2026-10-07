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

// lib/locale/is/_lib/formatDistance.js
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: "minna en 1 sek\xFAnda",
    other: "minna en {{count}} sek\xFAndur"
  },
  xSeconds: {
    one: "1 sek\xFAnda",
    other: "{{count}} sek\xFAndur"
  },
  halfAMinute: "h\xE1lf m\xEDn\xFAta",
  lessThanXMinutes: {
    one: "minna en 1 m\xEDn\xFAta",
    other: "minna en {{count}} m\xEDn\xFAtur"
  },
  xMinutes: {
    one: "1 m\xEDn\xFAta",
    other: "{{count}} m\xEDn\xFAtur"
  },
  aboutXHours: {
    one: "u.\xFE.b. 1 klukkustund",
    other: "u.\xFE.b. {{count}} klukkustundir"
  },
  xHours: {
    one: "1 klukkustund",
    other: "{{count}} klukkustundir"
  },
  xDays: {
    one: "1 dagur",
    other: "{{count}} dagar"
  },
  aboutXWeeks: {
    one: "um viku",
    other: "um {{count}} vikur"
  },
  xWeeks: {
    one: "1 viku",
    other: "{{count}} vikur"
  },
  aboutXMonths: {
    one: "u.\xFE.b. 1 m\xE1nu\xF0ur",
    other: "u.\xFE.b. {{count}} m\xE1nu\xF0ir"
  },
  xMonths: {
    one: "1 m\xE1nu\xF0ur",
    other: "{{count}} m\xE1nu\xF0ir"
  },
  aboutXYears: {
    one: "u.\xFE.b. 1 \xE1r",
    other: "u.\xFE.b. {{count}} \xE1r"
  },
  xYears: {
    one: "1 \xE1r",
    other: "{{count}} \xE1r"
  },
  overXYears: {
    one: "meira en 1 \xE1r",
    other: "meira en {{count}} \xE1r"
  },
  almostXYears: {
    one: "n\xE6stum 1 \xE1r",
    other: "n\xE6stum {{count}} \xE1r"
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
      return "\xED " + result;
    } else {
      return result + " s\xED\xF0an";
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

// lib/locale/is/_lib/formatLong.js
var dateFormats = {
  full: "EEEE, do MMMM y",
  long: "do MMMM y",
  medium: "do MMM y",
  short: "d.MM.y"
};
var timeFormats = {
  full: "'kl'. HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
};
var dateTimeFormats = {
  full: "{{date}} 'kl.' {{time}}",
  long: "{{date}} 'kl.' {{time}}",
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

// lib/locale/is/_lib/formatRelative.js
var formatRelativeLocale = {
  lastWeek: "'s\xED\xF0asta' dddd 'kl.' p",
  yesterday: "'\xED g\xE6r kl.' p",
  today: "'\xED dag kl.' p",
  tomorrow: "'\xE1 morgun kl.' p",
  nextWeek: "dddd 'kl.' p",
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

// lib/locale/is/_lib/localize.js
var eraValues = {
  narrow: ["f.Kr.", "e.Kr."],
  abbreviated: ["f.Kr.", "e.Kr."],
  wide: ["fyrir Krist", "eftir Krist"]
};
var quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["1F", "2F", "3F", "4F"],
  wide: ["1. fj\xF3r\xF0ungur", "2. fj\xF3r\xF0ungur", "3. fj\xF3r\xF0ungur", "4. fj\xF3r\xF0ungur"]
};
var monthValues = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "\xC1", "S", "\xD3", "N", "D"],
  abbreviated: [
  "jan.",
  "feb.",
  "mars",
  "apr\xEDl",
  "ma\xED",
  "j\xFAn\xED",
  "j\xFAl\xED",
  "\xE1g\xFAst",
  "sept.",
  "okt.",
  "n\xF3v.",
  "des."],

  wide: [
  "jan\xFAar",
  "febr\xFAar",
  "mars",
  "apr\xEDl",
  "ma\xED",
  "j\xFAn\xED",
  "j\xFAl\xED",
  "\xE1g\xFAst",
  "september",
  "okt\xF3ber",
  "n\xF3vember",
  "desember"]

};
var dayValues = {
  narrow: ["S", "M", "\xDE", "M", "F", "F", "L"],
  short: ["Su", "M\xE1", "\xDEr", "Mi", "Fi", "F\xF6", "La"],
  abbreviated: ["sun.", "m\xE1n.", "\xFEri.", "mi\xF0.", "fim.", "f\xF6s.", "lau."],
  wide: [
  "sunnudagur",
  "m\xE1nudagur",
  "\xFEri\xF0judagur",
  "mi\xF0vikudagur",
  "fimmtudagur",
  "f\xF6studagur",
  "laugardagur"]

};
var dayPeriodValues = {
  narrow: {
    am: "f",
    pm: "e",
    midnight: "mi\xF0n\xE6tti",
    noon: "h\xE1degi",
    morning: "morgunn",
    afternoon: "s\xED\xF0degi",
    evening: "kv\xF6ld",
    night: "n\xF3tt"
  },
  abbreviated: {
    am: "f.h.",
    pm: "e.h.",
    midnight: "mi\xF0n\xE6tti",
    noon: "h\xE1degi",
    morning: "morgunn",
    afternoon: "s\xED\xF0degi",
    evening: "kv\xF6ld",
    night: "n\xF3tt"
  },
  wide: {
    am: "fyrir h\xE1degi",
    pm: "eftir h\xE1degi",
    midnight: "mi\xF0n\xE6tti",
    noon: "h\xE1degi",
    morning: "morgunn",
    afternoon: "s\xED\xF0degi",
    evening: "kv\xF6ld",
    night: "n\xF3tt"
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: "f",
    pm: "e",
    midnight: "\xE1 mi\xF0n\xE6tti",
    noon: "\xE1 h\xE1degi",
    morning: "a\xF0 morgni",
    afternoon: "s\xED\xF0degis",
    evening: "um kv\xF6ld",
    night: "um n\xF3tt"
  },
  abbreviated: {
    am: "f.h.",
    pm: "e.h.",
    midnight: "\xE1 mi\xF0n\xE6tti",
    noon: "\xE1 h\xE1degi",
    morning: "a\xF0 morgni",
    afternoon: "s\xED\xF0degis",
    evening: "um kv\xF6ld",
    night: "um n\xF3tt"
  },
  wide: {
    am: "fyrir h\xE1degi",
    pm: "eftir h\xE1degi",
    midnight: "\xE1 mi\xF0n\xE6tti",
    noon: "\xE1 h\xE1degi",
    morning: "a\xF0 morgni",
    afternoon: "s\xED\xF0degis",
    evening: "um kv\xF6ld",
    night: "um n\xF3tt"
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

// lib/locale/is/_lib/match.js
var matchOrdinalNumberPattern = /^(\d+)(\.)?/i;
var parseOrdinalNumberPattern = /\d+(\.)?/i;
var matchEraPatterns = {
  narrow: /^(f\.Kr\.|e\.Kr\.)/i,
  abbreviated: /^(f\.Kr\.|e\.Kr\.)/i,
  wide: /^(fyrir Krist|eftir Krist)/i
};
var parseEraPatterns = {
  any: [/^(f\.Kr\.)/i, /^(e\.Kr\.)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]\.?/i,
  abbreviated: /^q[1234]\.?/i,
  wide: /^[1234]\.? fjórðungur/i
};
var parseQuarterPatterns = {
  any: [/1\.?/i, /2\.?/i, /3\.?/i, /4\.?/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmásónd]/i,
  abbreviated: /^(jan\.|feb\.|mars\.|apríl\.|maí|júní|júlí|águst|sep\.|oct\.|nov\.|dec\.)/i,
  wide: /^(januar|febrúar|mars|apríl|maí|júní|júlí|águst|september|október|nóvember|desember)/i
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
  /^á/i,
  /^s/i,
  /^ó/i,
  /^n/i,
  /^d/i],

  any: [
  /^ja/i,
  /^f/i,
  /^mar/i,
  /^ap/i,
  /^maí/i,
  /^jún/i,
  /^júl/i,
  /^áu/i,
  /^s/i,
  /^ó/i,
  /^n/i,
  /^d/i]

};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|má|þr|mi|fi|fö|la)/i,
  abbreviated: /^(sun|mán|þri|mið|fim|fös|lau)\.?/i,
  wide: /^(sunnudagur|mánudagur|þriðjudagur|miðvikudagur|fimmtudagur|föstudagur|laugardagur)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^þ/i, /^m/i, /^f/i, /^f/i, /^l/i],
  any: [/^su/i, /^má/i, /^þr/i, /^mi/i, /^fi/i, /^fö/i, /^la/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(f|e|síðdegis|(á|að|um) (morgni|kvöld|nótt|miðnætti))/i,
  any: /^(fyrir hádegi|eftir hádegi|[ef]\.?h\.?|síðdegis|morgunn|(á|að|um) (morgni|kvöld|nótt|miðnætti))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^f/i,
    pm: /^e/i,
    midnight: /^mi/i,
    noon: /^há/i,
    morning: /morgunn/i,
    afternoon: /síðdegi/i,
    evening: /kvöld/i,
    night: /nótt/i
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

// lib/locale/is.js
var is = {
  code: "is",
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

// lib/locale/is/cdn.js
window.dateFns = _objectSpread(_objectSpread({},
window.dateFns), {}, {
  locale: _objectSpread(_objectSpread({}, (_window$dateFns =
  window.dateFns) === null || _window$dateFns === void 0 ? void 0 : _window$dateFns.locale), {}, {
    is: is }) });



//# debugId=223E763435194E8664756E2164756E21

//# sourceMappingURL=cdn.js.map
})();