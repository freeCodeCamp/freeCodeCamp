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

// lib/locale/da/_lib/formatDistance.js
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: "mindre end \xE9t sekund",
    other: "mindre end {{count}} sekunder"
  },
  xSeconds: {
    one: "1 sekund",
    other: "{{count}} sekunder"
  },
  halfAMinute: "\xE9t halvt minut",
  lessThanXMinutes: {
    one: "mindre end \xE9t minut",
    other: "mindre end {{count}} minutter"
  },
  xMinutes: {
    one: "1 minut",
    other: "{{count}} minutter"
  },
  aboutXHours: {
    one: "cirka 1 time",
    other: "cirka {{count}} timer"
  },
  xHours: {
    one: "1 time",
    other: "{{count}} timer"
  },
  xDays: {
    one: "1 dag",
    other: "{{count}} dage"
  },
  aboutXWeeks: {
    one: "cirka 1 uge",
    other: "cirka {{count}} uger"
  },
  xWeeks: {
    one: "1 uge",
    other: "{{count}} uger"
  },
  aboutXMonths: {
    one: "cirka 1 m\xE5ned",
    other: "cirka {{count}} m\xE5neder"
  },
  xMonths: {
    one: "1 m\xE5ned",
    other: "{{count}} m\xE5neder"
  },
  aboutXYears: {
    one: "cirka 1 \xE5r",
    other: "cirka {{count}} \xE5r"
  },
  xYears: {
    one: "1 \xE5r",
    other: "{{count}} \xE5r"
  },
  overXYears: {
    one: "over 1 \xE5r",
    other: "over {{count}} \xE5r"
  },
  almostXYears: {
    one: "n\xE6sten 1 \xE5r",
    other: "n\xE6sten {{count}} \xE5r"
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
      return "om " + result;
    } else {
      return result + " siden";
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

// lib/locale/da/_lib/formatLong.js
var dateFormats = {
  full: "EEEE 'den' d. MMMM y",
  long: "d. MMMM y",
  medium: "d. MMM y",
  short: "dd/MM/y"
};
var timeFormats = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
};
var dateTimeFormats = {
  full: "{{date}} 'kl'. {{time}}",
  long: "{{date}} 'kl'. {{time}}",
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

// lib/locale/da/_lib/formatRelative.js
var formatRelativeLocale = {
  lastWeek: "'sidste' eeee 'kl.' p",
  yesterday: "'i g\xE5r kl.' p",
  today: "'i dag kl.' p",
  tomorrow: "'i morgen kl.' p",
  nextWeek: "'p\xE5' eeee 'kl.' p",
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

// lib/locale/da/_lib/localize.js
var eraValues = {
  narrow: ["fvt", "vt"],
  abbreviated: ["f.v.t.", "v.t."],
  wide: ["f\xF8r vesterlandsk tidsregning", "vesterlandsk tidsregning"]
};
var quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["1. kvt.", "2. kvt.", "3. kvt.", "4. kvt."],
  wide: ["1. kvartal", "2. kvartal", "3. kvartal", "4. kvartal"]
};
var monthValues = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
  "jan.",
  "feb.",
  "mar.",
  "apr.",
  "maj",
  "jun.",
  "jul.",
  "aug.",
  "sep.",
  "okt.",
  "nov.",
  "dec."],

  wide: [
  "januar",
  "februar",
  "marts",
  "april",
  "maj",
  "juni",
  "juli",
  "august",
  "september",
  "oktober",
  "november",
  "december"]

};
var dayValues = {
  narrow: ["S", "M", "T", "O", "T", "F", "L"],
  short: ["s\xF8", "ma", "ti", "on", "to", "fr", "l\xF8"],
  abbreviated: ["s\xF8n.", "man.", "tir.", "ons.", "tor.", "fre.", "l\xF8r."],
  wide: [
  "s\xF8ndag",
  "mandag",
  "tirsdag",
  "onsdag",
  "torsdag",
  "fredag",
  "l\xF8rdag"]

};
var dayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "midnat",
    noon: "middag",
    morning: "morgen",
    afternoon: "eftermiddag",
    evening: "aften",
    night: "nat"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnat",
    noon: "middag",
    morning: "morgen",
    afternoon: "eftermiddag",
    evening: "aften",
    night: "nat"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnat",
    noon: "middag",
    morning: "morgen",
    afternoon: "eftermiddag",
    evening: "aften",
    night: "nat"
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "midnat",
    noon: "middag",
    morning: "om morgenen",
    afternoon: "om eftermiddagen",
    evening: "om aftenen",
    night: "om natten"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnat",
    noon: "middag",
    morning: "om morgenen",
    afternoon: "om eftermiddagen",
    evening: "om aftenen",
    night: "om natten"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnat",
    noon: "middag",
    morning: "om morgenen",
    afternoon: "om eftermiddagen",
    evening: "om aftenen",
    night: "om natten"
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

// lib/locale/da/_lib/match.js
var matchOrdinalNumberPattern = /^(\d+)(\.)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(fKr|fvt|eKr|vt)/i,
  abbreviated: /^(f\.Kr\.?|f\.v\.t\.?|e\.Kr\.?|v\.t\.)/i,
  wide: /^(f.Kr.|før vesterlandsk tidsregning|e.Kr.|vesterlandsk tidsregning)/i
};
var parseEraPatterns = {
  any: [/^f/i, /^(v|e)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^[1234]. kvt\./i,
  wide: /^[1234]\.? kvartal/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan.|feb.|mar.|apr.|maj|jun.|jul.|aug.|sep.|okt.|nov.|dec.)/i,
  wide: /^(januar|februar|marts|april|maj|juni|juli|august|september|oktober|november|december)/i
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
  short: /^(søn.|man.|tir.|ons.|tor.|fre.|lør.)/i,
  abbreviated: /^(søn|man|tir|ons|tor|fre|lør)/i,
  wide: /^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^o/i, /^t/i, /^f/i, /^l/i],
  any: [/^s/i, /^m/i, /^ti/i, /^o/i, /^to/i, /^f/i, /^l/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|midnat|middag|(om) (morgenen|eftermiddagen|aftenen|natten))/i,
  any: /^([ap]\.?\s?m\.?|midnat|middag|(om) (morgenen|eftermiddagen|aftenen|natten))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /midnat/i,
    noon: /middag/i,
    morning: /morgen/i,
    afternoon: /eftermiddag/i,
    evening: /aften/i,
    night: /nat/i
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

// lib/locale/da.js
var da = {
  code: "da",
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

// lib/locale/da/cdn.js
window.dateFns = _objectSpread(_objectSpread({},
window.dateFns), {}, {
  locale: _objectSpread(_objectSpread({}, (_window$dateFns =
  window.dateFns) === null || _window$dateFns === void 0 ? void 0 : _window$dateFns.locale), {}, {
    da: da }) });



//# debugId=B204AF8890ECF53D64756E2164756E21

//# sourceMappingURL=cdn.js.map
})();