(() => {
var _window$dateFns;function ownKeys(e, r) {var t = Object.keys(e);if (Object.getOwnPropertySymbols) {var o = Object.getOwnPropertySymbols(e);r && (o = o.filter(function (r) {return Object.getOwnPropertyDescriptor(e, r).enumerable;})), t.push.apply(t, o);}return t;}function _objectSpread(e) {for (var r = 1; r < arguments.length; r++) {var t = null != arguments[r] ? arguments[r] : {};r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {_defineProperty(e, r, t[r]);}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));});}return e;}function _defineProperty(obj, key, value) {key = _toPropertyKey(key);if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _toPropertyKey(t) {var i = _toPrimitive(t, "string");return "symbol" == _typeof(i) ? i : String(i);}function _toPrimitive(t, r) {if ("object" != _typeof(t) || !t) return t;var e = t[Symbol.toPrimitive];if (void 0 !== e) {var i = e.call(t, r || "default");if ("object" != _typeof(i)) return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return ("string" === r ? String : Number)(t);}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];return arr2;}function _iterableToArrayLimit(r, l) {var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];if (null != t) {var e,n,i,u,a = [],f = !0,o = !1;try {if (i = (t = t.call(r)).next, 0 === l) {if (Object(t) !== t) return;f = !1;} else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);} catch (r) {o = !0, n = r;} finally {try {if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;} finally {if (o) throw n;}}return a;}}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _typeof(o) {"@babel/helpers - typeof";return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {return typeof o;} : function (o) {return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;}, _typeof(o);}var __defProp = Object.defineProperty;
var __export = function __export(target, all) {
  for (var name in all)
  __defProp(target, name, {
    get: all[name],
    enumerable: true,
    configurable: true,
    set: function set(newValue) {return all[name] = function () {return newValue;};}
  });
};

// lib/locale/pl/_lib/formatDistance.js
function declensionGroup(scheme, count) {
  if (count === 1) {
    return scheme.one;
  }
  var rem100 = count % 100;
  if (rem100 <= 20 && rem100 > 10) {
    return scheme.other;
  }
  var rem10 = rem100 % 10;
  if (rem10 >= 2 && rem10 <= 4) {
    return scheme.twoFour;
  }
  return scheme.other;
}
function declension(scheme, count, time) {
  var group = declensionGroup(scheme, count);
  var finalText = typeof group === "string" ? group : group[time];
  return finalText.replace("{{count}}", String(count));
}
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: {
      regular: "mniej ni\u017C sekunda",
      past: "mniej ni\u017C sekund\u0119",
      future: "mniej ni\u017C sekund\u0119"
    },
    twoFour: "mniej ni\u017C {{count}} sekundy",
    other: "mniej ni\u017C {{count}} sekund"
  },
  xSeconds: {
    one: {
      regular: "sekunda",
      past: "sekund\u0119",
      future: "sekund\u0119"
    },
    twoFour: "{{count}} sekundy",
    other: "{{count}} sekund"
  },
  halfAMinute: {
    one: "p\xF3\u0142 minuty",
    twoFour: "p\xF3\u0142 minuty",
    other: "p\xF3\u0142 minuty"
  },
  lessThanXMinutes: {
    one: {
      regular: "mniej ni\u017C minuta",
      past: "mniej ni\u017C minut\u0119",
      future: "mniej ni\u017C minut\u0119"
    },
    twoFour: "mniej ni\u017C {{count}} minuty",
    other: "mniej ni\u017C {{count}} minut"
  },
  xMinutes: {
    one: {
      regular: "minuta",
      past: "minut\u0119",
      future: "minut\u0119"
    },
    twoFour: "{{count}} minuty",
    other: "{{count}} minut"
  },
  aboutXHours: {
    one: {
      regular: "oko\u0142o godziny",
      past: "oko\u0142o godziny",
      future: "oko\u0142o godzin\u0119"
    },
    twoFour: "oko\u0142o {{count}} godziny",
    other: "oko\u0142o {{count}} godzin"
  },
  xHours: {
    one: {
      regular: "godzina",
      past: "godzin\u0119",
      future: "godzin\u0119"
    },
    twoFour: "{{count}} godziny",
    other: "{{count}} godzin"
  },
  xDays: {
    one: {
      regular: "dzie\u0144",
      past: "dzie\u0144",
      future: "1 dzie\u0144"
    },
    twoFour: "{{count}} dni",
    other: "{{count}} dni"
  },
  aboutXWeeks: {
    one: "oko\u0142o tygodnia",
    twoFour: "oko\u0142o {{count}} tygodni",
    other: "oko\u0142o {{count}} tygodni"
  },
  xWeeks: {
    one: "tydzie\u0144",
    twoFour: "{{count}} tygodnie",
    other: "{{count}} tygodni"
  },
  aboutXMonths: {
    one: "oko\u0142o miesi\u0105c",
    twoFour: "oko\u0142o {{count}} miesi\u0105ce",
    other: "oko\u0142o {{count}} miesi\u0119cy"
  },
  xMonths: {
    one: "miesi\u0105c",
    twoFour: "{{count}} miesi\u0105ce",
    other: "{{count}} miesi\u0119cy"
  },
  aboutXYears: {
    one: "oko\u0142o rok",
    twoFour: "oko\u0142o {{count}} lata",
    other: "oko\u0142o {{count}} lat"
  },
  xYears: {
    one: "rok",
    twoFour: "{{count}} lata",
    other: "{{count}} lat"
  },
  overXYears: {
    one: "ponad rok",
    twoFour: "ponad {{count}} lata",
    other: "ponad {{count}} lat"
  },
  almostXYears: {
    one: "prawie rok",
    twoFour: "prawie {{count}} lata",
    other: "prawie {{count}} lat"
  }
};
var formatDistance = function formatDistance(token, count, options) {
  var scheme = formatDistanceLocale[token];
  if (!(options !== null && options !== void 0 && options.addSuffix)) {
    return declension(scheme, count, "regular");
  }
  if (options.comparison && options.comparison > 0) {
    return "za " + declension(scheme, count, "future");
  } else {
    return declension(scheme, count, "past") + " temu";
  }
};

// lib/locale/_lib/buildFormatLongFn.js
function buildFormatLongFn(args) {
  return function () {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

// lib/locale/pl/_lib/formatLong.js
var dateFormats = {
  full: "EEEE, do MMMM y",
  long: "do MMMM y",
  medium: "do MMM y",
  short: "dd.MM.y"
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

// lib/constants.js
var daysInWeek = 7;
var daysInYear = 365.2425;
var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;
var minTime = -maxTime;
var millisecondsInWeek = 604800000;
var millisecondsInDay = 86400000;
var millisecondsInMinute = 60000;
var millisecondsInHour = 3600000;
var millisecondsInSecond = 1000;
var minutesInYear = 525600;
var minutesInMonth = 43200;
var minutesInDay = 1440;
var minutesInHour = 60;
var monthsInQuarter = 3;
var monthsInYear = 12;
var quartersInYear = 4;
var secondsInHour = 3600;
var secondsInMinute = 60;
var secondsInDay = secondsInHour * 24;
var secondsInWeek = secondsInDay * 7;
var secondsInYear = secondsInDay * daysInYear;
var secondsInMonth = secondsInYear / 12;
var secondsInQuarter = secondsInMonth * 3;
var constructFromSymbol = Symbol.for("constructDateFrom");

// lib/constructFrom.js
function constructFrom(date, value) {
  if (typeof date === "function")
  return date(value);
  if (date && _typeof(date) === "object" && constructFromSymbol in date)
  return date[constructFromSymbol](value);
  if (date instanceof Date)
  return new date.constructor(value);
  return new Date(value);
}

// lib/_lib/normalizeDates.js
function normalizeDates(context) {for (var _len = arguments.length, dates = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {dates[_key - 1] = arguments[_key];}
  var normalize = constructFrom.bind(null, context || dates.find(function (date) {return _typeof(date) === "object";}));
  return dates.map(normalize);
}

// lib/_lib/defaultOptions.js
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}
var defaultOptions = {};

// lib/toDate.js
function toDate(argument, context) {
  return constructFrom(context || argument, argument);
}

// lib/startOfWeek.js
function startOfWeek(date, options) {var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _defaultOptions3$loca;
  var defaultOptions3 = getDefaultOptions();
  var weekStartsOn = (_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 || (_options$locale = options.locale) === null || _options$locale === void 0 || (_options$locale = _options$locale.options) === null || _options$locale === void 0 ? void 0 : _options$locale.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions3.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions3$loca = defaultOptions3.locale) === null || _defaultOptions3$loca === void 0 || (_defaultOptions3$loca = _defaultOptions3$loca.options) === null || _defaultOptions3$loca === void 0 ? void 0 : _defaultOptions3$loca.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0;
  var _date = toDate(date, options === null || options === void 0 ? void 0 : options.in);
  var day = _date.getDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  _date.setDate(_date.getDate() - diff);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// lib/isSameWeek.js
function isSameWeek(laterDate, earlierDate, options) {
  var _normalizeDates = normalizeDates(options === null || options === void 0 ? void 0 : options.in, laterDate, earlierDate),_normalizeDates2 = _slicedToArray(_normalizeDates, 2),laterDate_ = _normalizeDates2[0],earlierDate_ = _normalizeDates2[1];
  return +startOfWeek(laterDate_, options) === +startOfWeek(earlierDate_, options);
}

// lib/locale/pl/_lib/formatRelative.js
function dayAndTimeWithAdjective(token, date, baseDate, options) {
  var adjectives;
  if (isSameWeek(date, baseDate, options)) {
    adjectives = adjectivesThisWeek;
  } else if (token === "lastWeek") {
    adjectives = adjectivesLastWeek;
  } else if (token === "nextWeek") {
    adjectives = adjectivesNextWeek;
  } else {
    throw new Error("Cannot determine adjectives for token ".concat(token));
  }
  var day = date.getDay();
  var grammaticalGender = dayGrammaticalGender[day];
  var adjective = adjectives[grammaticalGender];
  return "'".concat(adjective, "' eeee 'o' p");
}
var adjectivesLastWeek = {
  masculine: "ostatni",
  feminine: "ostatnia"
};
var adjectivesThisWeek = {
  masculine: "ten",
  feminine: "ta"
};
var adjectivesNextWeek = {
  masculine: "nast\u0119pny",
  feminine: "nast\u0119pna"
};
var dayGrammaticalGender = {
  0: "feminine",
  1: "masculine",
  2: "masculine",
  3: "feminine",
  4: "masculine",
  5: "masculine",
  6: "feminine"
};
var formatRelativeLocale = {
  lastWeek: dayAndTimeWithAdjective,
  yesterday: "'wczoraj o' p",
  today: "'dzisiaj o' p",
  tomorrow: "'jutro o' p",
  nextWeek: dayAndTimeWithAdjective,
  other: "P"
};
var formatRelative = function formatRelative(token, date, baseDate, options) {
  var format = formatRelativeLocale[token];
  if (typeof format === "function") {
    return format(token, date, baseDate, options);
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

// lib/locale/pl/_lib/localize.js
var eraValues = {
  narrow: ["p.n.e.", "n.e."],
  abbreviated: ["p.n.e.", "n.e."],
  wide: ["przed nasz\u0105 er\u0105", "naszej ery"]
};
var quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["I kw.", "II kw.", "III kw.", "IV kw."],
  wide: ["I kwarta\u0142", "II kwarta\u0142", "III kwarta\u0142", "IV kwarta\u0142"]
};
var monthValues = {
  narrow: ["S", "L", "M", "K", "M", "C", "L", "S", "W", "P", "L", "G"],
  abbreviated: [
  "sty",
  "lut",
  "mar",
  "kwi",
  "maj",
  "cze",
  "lip",
  "sie",
  "wrz",
  "pa\u017A",
  "lis",
  "gru"],

  wide: [
  "stycze\u0144",
  "luty",
  "marzec",
  "kwiecie\u0144",
  "maj",
  "czerwiec",
  "lipiec",
  "sierpie\u0144",
  "wrzesie\u0144",
  "pa\u017Adziernik",
  "listopad",
  "grudzie\u0144"]

};
var monthFormattingValues = {
  narrow: ["s", "l", "m", "k", "m", "c", "l", "s", "w", "p", "l", "g"],
  abbreviated: [
  "sty",
  "lut",
  "mar",
  "kwi",
  "maj",
  "cze",
  "lip",
  "sie",
  "wrz",
  "pa\u017A",
  "lis",
  "gru"],

  wide: [
  "stycznia",
  "lutego",
  "marca",
  "kwietnia",
  "maja",
  "czerwca",
  "lipca",
  "sierpnia",
  "wrze\u015Bnia",
  "pa\u017Adziernika",
  "listopada",
  "grudnia"]

};
var dayValues = {
  narrow: ["N", "P", "W", "\u015A", "C", "P", "S"],
  short: ["nie", "pon", "wto", "\u015Bro", "czw", "pi\u0105", "sob"],
  abbreviated: ["niedz.", "pon.", "wt.", "\u015Br.", "czw.", "pt.", "sob."],
  wide: [
  "niedziela",
  "poniedzia\u0142ek",
  "wtorek",
  "\u015Broda",
  "czwartek",
  "pi\u0105tek",
  "sobota"]

};
var dayFormattingValues = {
  narrow: ["n", "p", "w", "\u015B", "c", "p", "s"],
  short: ["nie", "pon", "wto", "\u015Bro", "czw", "pi\u0105", "sob"],
  abbreviated: ["niedz.", "pon.", "wt.", "\u015Br.", "czw.", "pt.", "sob."],
  wide: [
  "niedziela",
  "poniedzia\u0142ek",
  "wtorek",
  "\u015Broda",
  "czwartek",
  "pi\u0105tek",
  "sobota"]

};
var dayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "p\xF3\u0142n.",
    noon: "po\u0142",
    morning: "rano",
    afternoon: "popo\u0142.",
    evening: "wiecz.",
    night: "noc"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "p\xF3\u0142noc",
    noon: "po\u0142udnie",
    morning: "rano",
    afternoon: "popo\u0142udnie",
    evening: "wiecz\xF3r",
    night: "noc"
  },
  wide: {
    am: "AM",
    pm: "PM",
    midnight: "p\xF3\u0142noc",
    noon: "po\u0142udnie",
    morning: "rano",
    afternoon: "popo\u0142udnie",
    evening: "wiecz\xF3r",
    night: "noc"
  }
};
var dayPeriodFormattingValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "o p\xF3\u0142n.",
    noon: "w po\u0142.",
    morning: "rano",
    afternoon: "po po\u0142.",
    evening: "wiecz.",
    night: "w nocy"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "o p\xF3\u0142nocy",
    noon: "w po\u0142udnie",
    morning: "rano",
    afternoon: "po po\u0142udniu",
    evening: "wieczorem",
    night: "w nocy"
  },
  wide: {
    am: "AM",
    pm: "PM",
    midnight: "o p\xF3\u0142nocy",
    noon: "w po\u0142udnie",
    morning: "rano",
    afternoon: "po po\u0142udniu",
    evening: "wieczorem",
    night: "w nocy"
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
    defaultWidth: "wide",
    formattingValues: monthFormattingValues,
    defaultFormattingWidth: "wide"
  }),
  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: "wide",
    formattingValues: dayFormattingValues,
    defaultFormattingWidth: "wide"
  }),
  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: "wide",
    formattingValues: dayPeriodFormattingValues,
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

// lib/locale/pl/_lib/match.js
var matchOrdinalNumberPattern = /^(\d+)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(p\.?\s*n\.?\s*e\.?\s*|n\.?\s*e\.?\s*)/i,
  abbreviated: /^(p\.?\s*n\.?\s*e\.?\s*|n\.?\s*e\.?\s*)/i,
  wide: /^(przed\s*nasz(ą|a)\s*er(ą|a)|naszej\s*ery)/i
};
var parseEraPatterns = {
  any: [/^p/i, /^n/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^(I|II|III|IV)\s*kw\.?/i,
  wide: /^(I|II|III|IV)\s*kwarta(ł|l)/i
};
var parseQuarterPatterns = {
  narrow: [/1/i, /2/i, /3/i, /4/i],
  any: [/^I kw/i, /^II kw/i, /^III kw/i, /^IV kw/i]
};
var matchMonthPatterns = {
  narrow: /^[slmkcwpg]/i,
  abbreviated: /^(sty|lut|mar|kwi|maj|cze|lip|sie|wrz|pa(ź|z)|lis|gru)/i,
  wide: /^(stycznia|stycze(ń|n)|lutego|luty|marca|marzec|kwietnia|kwiecie(ń|n)|maja|maj|czerwca|czerwiec|lipca|lipiec|sierpnia|sierpie(ń|n)|wrze(ś|s)nia|wrzesie(ń|n)|pa(ź|z)dziernika|pa(ź|z)dziernik|listopada|listopad|grudnia|grudzie(ń|n))/i
};
var parseMonthPatterns = {
  narrow: [
  /^s/i,
  /^l/i,
  /^m/i,
  /^k/i,
  /^m/i,
  /^c/i,
  /^l/i,
  /^s/i,
  /^w/i,
  /^p/i,
  /^l/i,
  /^g/i],

  any: [
  /^st/i,
  /^lu/i,
  /^mar/i,
  /^k/i,
  /^maj/i,
  /^c/i,
  /^lip/i,
  /^si/i,
  /^w/i,
  /^p/i,
  /^lis/i,
  /^g/i]

};
var matchDayPatterns = {
  narrow: /^[npwścs]/i,
  short: /^(nie|pon|wto|(ś|s)ro|czw|pi(ą|a)|sob)/i,
  abbreviated: /^(niedz|pon|wt|(ś|s)r|czw|pt|sob)\.?/i,
  wide: /^(niedziela|poniedzia(ł|l)ek|wtorek|(ś|s)roda|czwartek|pi(ą|a)tek|sobota)/i
};
var parseDayPatterns = {
  narrow: [/^n/i, /^p/i, /^w/i, /^ś/i, /^c/i, /^p/i, /^s/i],
  abbreviated: [/^n/i, /^po/i, /^w/i, /^(ś|s)r/i, /^c/i, /^pt/i, /^so/i],
  any: [/^n/i, /^po/i, /^w/i, /^(ś|s)r/i, /^c/i, /^pi/i, /^so/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(^a$|^p$|pó(ł|l)n\.?|o\s*pó(ł|l)n\.?|po(ł|l)\.?|w\s*po(ł|l)\.?|po\s*po(ł|l)\.?|rano|wiecz\.?|noc|w\s*nocy)/i,
  any: /^(am|pm|pó(ł|l)noc|o\s*pó(ł|l)nocy|po(ł|l)udnie|w\s*po(ł|l)udnie|popo(ł|l)udnie|po\s*po(ł|l)udniu|rano|wieczór|wieczorem|noc|w\s*nocy)/i
};
var parseDayPeriodPatterns = {
  narrow: {
    am: /^a$/i,
    pm: /^p$/i,
    midnight: /pó(ł|l)n/i,
    noon: /po(ł|l)/i,
    morning: /rano/i,
    afternoon: /po\s*po(ł|l)/i,
    evening: /wiecz/i,
    night: /noc/i
  },
  any: {
    am: /^am/i,
    pm: /^pm/i,
    midnight: /pó(ł|l)n/i,
    noon: /po(ł|l)/i,
    morning: /rano/i,
    afternoon: /po\s*po(ł|l)/i,
    evening: /wiecz/i,
    night: /noc/i
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

// lib/locale/pl.js
var pl = {
  code: "pl",
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

// lib/locale/pl/cdn.js
window.dateFns = _objectSpread(_objectSpread({},
window.dateFns), {}, {
  locale: _objectSpread(_objectSpread({}, (_window$dateFns =
  window.dateFns) === null || _window$dateFns === void 0 ? void 0 : _window$dateFns.locale), {}, {
    pl: pl }) });



//# debugId=4EC04C3729EE1DF164756E2164756E21

//# sourceMappingURL=cdn.js.map
})();