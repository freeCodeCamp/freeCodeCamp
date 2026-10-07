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

// lib/locale/hu/_lib/formatDistance.js
var translations = {
  about: "k\xF6r\xFClbel\xFCl",
  over: "t\xF6bb mint",
  almost: "majdnem",
  lessthan: "kevesebb mint"
};
var withoutSuffixes = {
  xseconds: " m\xE1sodperc",
  halfaminute: "f\xE9l perc",
  xminutes: " perc",
  xhours: " \xF3ra",
  xdays: " nap",
  xweeks: " h\xE9t",
  xmonths: " h\xF3nap",
  xyears: " \xE9v"
};
var withSuffixes = {
  xseconds: {
    "-1": " m\xE1sodperccel ezel\u0151tt",
    1: " m\xE1sodperc m\xFAlva",
    0: " m\xE1sodperce"
  },
  halfaminute: {
    "-1": "f\xE9l perccel ezel\u0151tt",
    1: "f\xE9l perc m\xFAlva",
    0: "f\xE9l perce"
  },
  xminutes: {
    "-1": " perccel ezel\u0151tt",
    1: " perc m\xFAlva",
    0: " perce"
  },
  xhours: {
    "-1": " \xF3r\xE1val ezel\u0151tt",
    1: " \xF3ra m\xFAlva",
    0: " \xF3r\xE1ja"
  },
  xdays: {
    "-1": " nappal ezel\u0151tt",
    1: " nap m\xFAlva",
    0: " napja"
  },
  xweeks: {
    "-1": " h\xE9ttel ezel\u0151tt",
    1: " h\xE9t m\xFAlva",
    0: " hete"
  },
  xmonths: {
    "-1": " h\xF3nappal ezel\u0151tt",
    1: " h\xF3nap m\xFAlva",
    0: " h\xF3napja"
  },
  xyears: {
    "-1": " \xE9vvel ezel\u0151tt",
    1: " \xE9v m\xFAlva",
    0: " \xE9ve"
  }
};
var formatDistance = function formatDistance(token, count, options) {
  var adverb = token.match(/about|over|almost|lessthan/i);
  var unit = adverb ? token.replace(adverb[0], "") : token;
  var addSuffix = (options === null || options === void 0 ? void 0 : options.addSuffix) === true;
  var key = unit.toLowerCase();
  var comparison = (options === null || options === void 0 ? void 0 : options.comparison) || 0;
  var translated = addSuffix ? withSuffixes[key][comparison] : withoutSuffixes[key];
  var result = key === "halfaminute" ? translated : count + translated;
  if (adverb) {
    var adv = adverb[0].toLowerCase();
    result = translations[adv] + " " + result;
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

// lib/locale/hu/_lib/formatLong.js
var dateFormats = {
  full: "y. MMMM d., EEEE",
  long: "y. MMMM d.",
  medium: "y. MMM d.",
  short: "y. MM. dd."
};
var timeFormats = {
  full: "H:mm:ss zzzz",
  long: "H:mm:ss z",
  medium: "H:mm:ss",
  short: "H:mm"
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

// lib/locale/hu/_lib/formatRelative.js
function week(isFuture) {
  return function (date) {
    var weekday = accusativeWeekdays[date.getDay()];
    var prefix = isFuture ? "" : "'m\xFAlt' ";
    return "".concat(prefix, "'").concat(weekday, "' p'-kor'");
  };
}
var accusativeWeekdays = [
"vas\xE1rnap",
"h\xE9tf\u0151n",
"kedden",
"szerd\xE1n",
"cs\xFCt\xF6rt\xF6k\xF6n",
"p\xE9nteken",
"szombaton"];

var formatRelativeLocale = {
  lastWeek: week(false),
  yesterday: "'tegnap' p'-kor'",
  today: "'ma' p'-kor'",
  tomorrow: "'holnap' p'-kor'",
  nextWeek: week(true),
  other: "P"
};
var formatRelative = function formatRelative(token, date) {
  var format = formatRelativeLocale[token];
  if (typeof format === "function") {
    return format(date);
  }
  return format;
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

// lib/locale/hu/_lib/localize.js
var eraValues = {
  narrow: ["ie.", "isz."],
  abbreviated: ["i. e.", "i. sz."],
  wide: ["Krisztus el\u0151tt", "id\u0151sz\xE1m\xEDt\xE1sunk szerint"]
};
var quarterValues = {
  narrow: ["1.", "2.", "3.", "4."],
  abbreviated: ["1. n.\xE9v", "2. n.\xE9v", "3. n.\xE9v", "4. n.\xE9v"],
  wide: ["1. negyed\xE9v", "2. negyed\xE9v", "3. negyed\xE9v", "4. negyed\xE9v"]
};
var formattingQuarterValues = {
  narrow: ["I.", "II.", "III.", "IV."],
  abbreviated: ["I. n.\xE9v", "II. n.\xE9v", "III. n.\xE9v", "IV. n.\xE9v"],
  wide: ["I. negyed\xE9v", "II. negyed\xE9v", "III. negyed\xE9v", "IV. negyed\xE9v"]
};
var monthValues = {
  narrow: ["J", "F", "M", "\xC1", "M", "J", "J", "A", "Sz", "O", "N", "D"],
  abbreviated: [
  "jan.",
  "febr.",
  "m\xE1rc.",
  "\xE1pr.",
  "m\xE1j.",
  "j\xFAn.",
  "j\xFAl.",
  "aug.",
  "szept.",
  "okt.",
  "nov.",
  "dec."],

  wide: [
  "janu\xE1r",
  "febru\xE1r",
  "m\xE1rcius",
  "\xE1prilis",
  "m\xE1jus",
  "j\xFAnius",
  "j\xFAlius",
  "augusztus",
  "szeptember",
  "okt\xF3ber",
  "november",
  "december"]

};
var dayValues = {
  narrow: ["V", "H", "K", "Sz", "Cs", "P", "Sz"],
  short: ["V", "H", "K", "Sze", "Cs", "P", "Szo"],
  abbreviated: ["V", "H", "K", "Sze", "Cs", "P", "Szo"],
  wide: [
  "vas\xE1rnap",
  "h\xE9tf\u0151",
  "kedd",
  "szerda",
  "cs\xFCt\xF6rt\xF6k",
  "p\xE9ntek",
  "szombat"]

};
var dayPeriodValues = {
  narrow: {
    am: "de.",
    pm: "du.",
    midnight: "\xE9jf\xE9l",
    noon: "d\xE9l",
    morning: "reggel",
    afternoon: "du.",
    evening: "este",
    night: "\xE9jjel"
  },
  abbreviated: {
    am: "de.",
    pm: "du.",
    midnight: "\xE9jf\xE9l",
    noon: "d\xE9l",
    morning: "reggel",
    afternoon: "du.",
    evening: "este",
    night: "\xE9jjel"
  },
  wide: {
    am: "de.",
    pm: "du.",
    midnight: "\xE9jf\xE9l",
    noon: "d\xE9l",
    morning: "reggel",
    afternoon: "d\xE9lut\xE1n",
    evening: "este",
    night: "\xE9jjel"
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
    argumentCallback: function argumentCallback(quarter) {return quarter - 1;},
    formattingValues: formattingQuarterValues,
    defaultFormattingWidth: "wide"
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

// lib/locale/hu/_lib/match.js
var matchOrdinalNumberPattern = /^(\d+)\.?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(ie\.|isz\.)/i,
  abbreviated: /^(i\.\s?e\.?|b?\s?c\s?e|i\.\s?sz\.?)/i,
  wide: /^(Krisztus előtt|időszámításunk előtt|időszámításunk szerint|i\. sz\.)/i
};
var parseEraPatterns = {
  narrow: [/ie/i, /isz/i],
  abbreviated: [/^(i\.?\s?e\.?|b\s?ce)/i, /^(i\.?\s?sz\.?|c\s?e)/i],
  any: [/előtt/i, /(szerint|i. sz.)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]\.?/i,
  abbreviated: /^[1234]?\.?\s?n\.év/i,
  wide: /^([1234]|I|II|III|IV)?\.?\s?negyedév/i
};
var parseQuarterPatterns = {
  any: [/1|I$/i, /2|II$/i, /3|III/i, /4|IV/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmaásond]|sz/i,
  abbreviated: /^(jan\.?|febr\.?|márc\.?|ápr\.?|máj\.?|jún\.?|júl\.?|aug\.?|szept\.?|okt\.?|nov\.?|dec\.?)/i,
  wide: /^(január|február|március|április|május|június|július|augusztus|szeptember|október|november|december)/i
};
var parseMonthPatterns = {
  narrow: [
  /^j/i,
  /^f/i,
  /^m/i,
  /^a|á/i,
  /^m/i,
  /^j/i,
  /^j/i,
  /^a/i,
  /^s|sz/i,
  /^o/i,
  /^n/i,
  /^d/i],

  any: [
  /^ja/i,
  /^f/i,
  /^már/i,
  /^áp/i,
  /^máj/i,
  /^jún/i,
  /^júl/i,
  /^au/i,
  /^s/i,
  /^o/i,
  /^n/i,
  /^d/i]

};
var matchDayPatterns = {
  narrow: /^([vhkpc]|sz|cs|sz)/i,
  short: /^([vhkp]|sze|cs|szo)/i,
  abbreviated: /^([vhkp]|sze|cs|szo)/i,
  wide: /^(vasárnap|hétfő|kedd|szerda|csütörtök|péntek|szombat)/i
};
var parseDayPatterns = {
  narrow: [/^v/i, /^h/i, /^k/i, /^sz/i, /^c/i, /^p/i, /^sz/i],
  any: [/^v/i, /^h/i, /^k/i, /^sze/i, /^c/i, /^p/i, /^szo/i]
};
var matchDayPeriodPatterns = {
  any: /^((de|du)\.?|éjfél|délután|dél|reggel|este|éjjel)/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^de\.?/i,
    pm: /^du\.?/i,
    midnight: /^éjf/i,
    noon: /^dé/i,
    morning: /reg/i,
    afternoon: /^délu\.?/i,
    evening: /es/i,
    night: /éjj/i
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

// lib/locale/hu.js
var hu = {
  code: "hu",
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

// lib/locale/hu/cdn.js
window.dateFns = _objectSpread(_objectSpread({},
window.dateFns), {}, {
  locale: _objectSpread(_objectSpread({}, (_window$dateFns =
  window.dateFns) === null || _window$dateFns === void 0 ? void 0 : _window$dateFns.locale), {}, {
    hu: hu }) });



//# debugId=4DF4A4C01C8322E364756E2164756E21

//# sourceMappingURL=cdn.js.map
})();