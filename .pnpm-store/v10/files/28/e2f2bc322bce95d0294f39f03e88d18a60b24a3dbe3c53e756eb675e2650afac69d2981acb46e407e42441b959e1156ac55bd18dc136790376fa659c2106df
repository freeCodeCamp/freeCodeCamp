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

// lib/locale/sv/_lib/formatDistance.js
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: "mindre \xE4n en sekund",
    other: "mindre \xE4n {{count}} sekunder"
  },
  xSeconds: {
    one: "en sekund",
    other: "{{count}} sekunder"
  },
  halfAMinute: "en halv minut",
  lessThanXMinutes: {
    one: "mindre \xE4n en minut",
    other: "mindre \xE4n {{count}} minuter"
  },
  xMinutes: {
    one: "en minut",
    other: "{{count}} minuter"
  },
  aboutXHours: {
    one: "ungef\xE4r en timme",
    other: "ungef\xE4r {{count}} timmar"
  },
  xHours: {
    one: "en timme",
    other: "{{count}} timmar"
  },
  xDays: {
    one: "en dag",
    other: "{{count}} dagar"
  },
  aboutXWeeks: {
    one: "ungef\xE4r en vecka",
    other: "ungef\xE4r {{count}} veckor"
  },
  xWeeks: {
    one: "en vecka",
    other: "{{count}} veckor"
  },
  aboutXMonths: {
    one: "ungef\xE4r en m\xE5nad",
    other: "ungef\xE4r {{count}} m\xE5nader"
  },
  xMonths: {
    one: "en m\xE5nad",
    other: "{{count}} m\xE5nader"
  },
  aboutXYears: {
    one: "ungef\xE4r ett \xE5r",
    other: "ungef\xE4r {{count}} \xE5r"
  },
  xYears: {
    one: "ett \xE5r",
    other: "{{count}} \xE5r"
  },
  overXYears: {
    one: "\xF6ver ett \xE5r",
    other: "\xF6ver {{count}} \xE5r"
  },
  almostXYears: {
    one: "n\xE4stan ett \xE5r",
    other: "n\xE4stan {{count}} \xE5r"
  }
};
var wordMapping = [
"noll",
"en",
"tv\xE5",
"tre",
"fyra",
"fem",
"sex",
"sju",
"\xE5tta",
"nio",
"tio",
"elva",
"tolv"];

var formatDistance = function formatDistance(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === "string") {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace("{{count}}", count < 13 ? wordMapping[count] : String(count));
  }
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return "om " + result;
    } else {
      return result + " sedan";
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

// lib/locale/sv/_lib/formatLong.js
var dateFormats = {
  full: "EEEE d MMMM y",
  long: "d MMMM y",
  medium: "d MMM y",
  short: "y-MM-dd"
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

// lib/locale/sv/_lib/formatRelative.js
var formatRelativeLocale = {
  lastWeek: "'i' EEEE's kl.' p",
  yesterday: "'ig\xE5r kl.' p",
  today: "'idag kl.' p",
  tomorrow: "'imorgon kl.' p",
  nextWeek: "EEEE 'kl.' p",
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

// lib/locale/sv/_lib/localize.js
var eraValues = {
  narrow: ["f.Kr.", "e.Kr."],
  abbreviated: ["f.Kr.", "e.Kr."],
  wide: ["f\xF6re Kristus", "efter Kristus"]
};
var quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1:a kvartalet", "2:a kvartalet", "3:e kvartalet", "4:e kvartalet"]
};
var monthValues = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
  "jan.",
  "feb.",
  "mars",
  "apr.",
  "maj",
  "juni",
  "juli",
  "aug.",
  "sep.",
  "okt.",
  "nov.",
  "dec."],

  wide: [
  "januari",
  "februari",
  "mars",
  "april",
  "maj",
  "juni",
  "juli",
  "augusti",
  "september",
  "oktober",
  "november",
  "december"]

};
var dayValues = {
  narrow: ["S", "M", "T", "O", "T", "F", "L"],
  short: ["s\xF6", "m\xE5", "ti", "on", "to", "fr", "l\xF6"],
  abbreviated: ["s\xF6n", "m\xE5n", "tis", "ons", "tors", "fre", "l\xF6r"],
  wide: ["s\xF6ndag", "m\xE5ndag", "tisdag", "onsdag", "torsdag", "fredag", "l\xF6rdag"]
};
var dayPeriodValues = {
  narrow: {
    am: "fm",
    pm: "em",
    midnight: "midnatt",
    noon: "middag",
    morning: "morg.",
    afternoon: "efterm.",
    evening: "kv\xE4ll",
    night: "natt"
  },
  abbreviated: {
    am: "f.m.",
    pm: "e.m.",
    midnight: "midnatt",
    noon: "middag",
    morning: "morgon",
    afternoon: "efterm.",
    evening: "kv\xE4ll",
    night: "natt"
  },
  wide: {
    am: "f\xF6rmiddag",
    pm: "eftermiddag",
    midnight: "midnatt",
    noon: "middag",
    morning: "morgon",
    afternoon: "eftermiddag",
    evening: "kv\xE4ll",
    night: "natt"
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: "fm",
    pm: "em",
    midnight: "midnatt",
    noon: "middag",
    morning: "p\xE5 morg.",
    afternoon: "p\xE5 efterm.",
    evening: "p\xE5 kv\xE4llen",
    night: "p\xE5 natten"
  },
  abbreviated: {
    am: "fm",
    pm: "em",
    midnight: "midnatt",
    noon: "middag",
    morning: "p\xE5 morg.",
    afternoon: "p\xE5 efterm.",
    evening: "p\xE5 kv\xE4llen",
    night: "p\xE5 natten"
  },
  wide: {
    am: "fm",
    pm: "em",
    midnight: "midnatt",
    noon: "middag",
    morning: "p\xE5 morgonen",
    afternoon: "p\xE5 eftermiddagen",
    evening: "p\xE5 kv\xE4llen",
    night: "p\xE5 natten"
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
  var number = Number(dirtyNumber);
  var rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
      case 2:
        return number + ":a";
    }
  }
  return number + ":e";
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

// lib/locale/sv/_lib/match.js
var matchOrdinalNumberPattern = /^(\d+)(:a|:e)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(f\.? ?Kr\.?|f\.? ?v\.? ?t\.?|e\.? ?Kr\.?|v\.? ?t\.?)/i,
  abbreviated: /^(f\.? ?Kr\.?|f\.? ?v\.? ?t\.?|e\.? ?Kr\.?|v\.? ?t\.?)/i,
  wide: /^(före Kristus|före vår tid|efter Kristus|vår tid)/i
};
var parseEraPatterns = {
  any: [/^f/i, /^[ev]/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](:a|:e)? kvartalet/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar[s]?|apr|maj|jun[i]?|jul[i]?|aug|sep|okt|nov|dec)\.?/i,
  wide: /^(januari|februari|mars|april|maj|juni|juli|augusti|september|oktober|november|december)/i
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
  /^au/i,
  /^s/i,
  /^o/i,
  /^n/i,
  /^d/i]

};
var matchDayPatterns = {
  narrow: /^[smtofl]/i,
  short: /^(sö|må|ti|on|to|fr|lö)/i,
  abbreviated: /^(sön|mån|tis|ons|tors|fre|lör)/i,
  wide: /^(söndag|måndag|tisdag|onsdag|torsdag|fredag|lördag)/i
};
var parseDayPatterns = {
  any: [/^s/i, /^m/i, /^ti/i, /^o/i, /^to/i, /^f/i, /^l/i]
};
var matchDayPeriodPatterns = {
  any: /^([fe]\.?\s?m\.?|midn(att)?|midd(ag)?|(på) (morgonen|eftermiddagen|kvällen|natten))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^f/i,
    pm: /^e/i,
    midnight: /^midn/i,
    noon: /^midd/i,
    morning: /morgon/i,
    afternoon: /eftermiddag/i,
    evening: /kväll/i,
    night: /natt/i
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

// lib/locale/sv.js
var sv = {
  code: "sv",
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

// lib/locale/sv/cdn.js
window.dateFns = _objectSpread(_objectSpread({},
window.dateFns), {}, {
  locale: _objectSpread(_objectSpread({}, (_window$dateFns =
  window.dateFns) === null || _window$dateFns === void 0 ? void 0 : _window$dateFns.locale), {}, {
    sv: sv }) });



//# debugId=51A6696539EAB77064756E2164756E21

//# sourceMappingURL=cdn.js.map
})();