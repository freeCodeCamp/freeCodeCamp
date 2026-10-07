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

// lib/locale/sk/_lib/formatDistance.js
function declensionGroup(scheme, count) {
  if (count === 1 && scheme.one) {
    return scheme.one;
  }
  if (count >= 2 && count <= 4 && scheme.twoFour) {
    return scheme.twoFour;
  }
  return scheme.other;
}
function declension(scheme, count, time) {
  var group = declensionGroup(scheme, count);
  var finalText = group[time];
  return finalText.replace("{{count}}", String(count));
}
function extractPreposition(token) {
  var result = ["lessThan", "about", "over", "almost"].filter(function (preposition) {
    return !!token.match(new RegExp("^" + preposition));
  });
  return result[0];
}
function prefixPreposition(preposition) {
  var translation = "";
  if (preposition === "almost") {
    translation = "takmer";
  }
  if (preposition === "about") {
    translation = "pribli\u017Ene";
  }
  return translation.length > 0 ? translation + " " : "";
}
function suffixPreposition(preposition) {
  var translation = "";
  if (preposition === "lessThan") {
    translation = "menej ne\u017E";
  }
  if (preposition === "over") {
    translation = "viac ne\u017E";
  }
  return translation.length > 0 ? translation + " " : "";
}
function lowercaseFirstLetter(string) {
  return string.charAt(0).toLowerCase() + string.slice(1);
}
var formatDistanceLocale = {
  xSeconds: {
    one: {
      present: "sekunda",
      past: "sekundou",
      future: "sekundu"
    },
    twoFour: {
      present: "{{count}} sekundy",
      past: "{{count}} sekundami",
      future: "{{count}} sekundy"
    },
    other: {
      present: "{{count}} sek\xFAnd",
      past: "{{count}} sekundami",
      future: "{{count}} sek\xFAnd"
    }
  },
  halfAMinute: {
    other: {
      present: "pol min\xFAty",
      past: "pol min\xFAtou",
      future: "pol min\xFAty"
    }
  },
  xMinutes: {
    one: {
      present: "min\xFAta",
      past: "min\xFAtou",
      future: "min\xFAtu"
    },
    twoFour: {
      present: "{{count}} min\xFAty",
      past: "{{count}} min\xFAtami",
      future: "{{count}} min\xFAty"
    },
    other: {
      present: "{{count}} min\xFAt",
      past: "{{count}} min\xFAtami",
      future: "{{count}} min\xFAt"
    }
  },
  xHours: {
    one: {
      present: "hodina",
      past: "hodinou",
      future: "hodinu"
    },
    twoFour: {
      present: "{{count}} hodiny",
      past: "{{count}} hodinami",
      future: "{{count}} hodiny"
    },
    other: {
      present: "{{count}} hod\xEDn",
      past: "{{count}} hodinami",
      future: "{{count}} hod\xEDn"
    }
  },
  xDays: {
    one: {
      present: "de\u0148",
      past: "d\u0148om",
      future: "de\u0148"
    },
    twoFour: {
      present: "{{count}} dni",
      past: "{{count}} d\u0148ami",
      future: "{{count}} dni"
    },
    other: {
      present: "{{count}} dn\xED",
      past: "{{count}} d\u0148ami",
      future: "{{count}} dn\xED"
    }
  },
  xWeeks: {
    one: {
      present: "t\xFD\u017Ede\u0148",
      past: "t\xFD\u017Ed\u0148om",
      future: "t\xFD\u017Ede\u0148"
    },
    twoFour: {
      present: "{{count}} t\xFD\u017Edne",
      past: "{{count}} t\xFD\u017Ed\u0148ami",
      future: "{{count}} t\xFD\u017Edne"
    },
    other: {
      present: "{{count}} t\xFD\u017Ed\u0148ov",
      past: "{{count}} t\xFD\u017Ed\u0148ami",
      future: "{{count}} t\xFD\u017Ed\u0148ov"
    }
  },
  xMonths: {
    one: {
      present: "mesiac",
      past: "mesiacom",
      future: "mesiac"
    },
    twoFour: {
      present: "{{count}} mesiace",
      past: "{{count}} mesiacmi",
      future: "{{count}} mesiace"
    },
    other: {
      present: "{{count}} mesiacov",
      past: "{{count}} mesiacmi",
      future: "{{count}} mesiacov"
    }
  },
  xYears: {
    one: {
      present: "rok",
      past: "rokom",
      future: "rok"
    },
    twoFour: {
      present: "{{count}} roky",
      past: "{{count}} rokmi",
      future: "{{count}} roky"
    },
    other: {
      present: "{{count}} rokov",
      past: "{{count}} rokmi",
      future: "{{count}} rokov"
    }
  }
};
var formatDistance = function formatDistance(token, count, options) {
  var preposition = extractPreposition(token) || "";
  var key = lowercaseFirstLetter(token.substring(preposition.length));
  var scheme = formatDistanceLocale[key];
  if (!(options !== null && options !== void 0 && options.addSuffix)) {
    return prefixPreposition(preposition) + suffixPreposition(preposition) + declension(scheme, count, "present");
  }
  if (options.comparison && options.comparison > 0) {
    return prefixPreposition(preposition) + "o " + suffixPreposition(preposition) + declension(scheme, count, "future");
  } else {
    return prefixPreposition(preposition) + "pred " + suffixPreposition(preposition) + declension(scheme, count, "past");
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

// lib/locale/sk/_lib/formatLong.js
var dateFormats = {
  full: "EEEE d. MMMM y",
  long: "d. MMMM y",
  medium: "d. M. y",
  short: "d. M. y"
};
var timeFormats = {
  full: "H:mm:ss zzzz",
  long: "H:mm:ss z",
  medium: "H:mm:ss",
  short: "H:mm"
};
var dateTimeFormats = {
  full: "{{date}}, {{time}}",
  long: "{{date}}, {{time}}",
  medium: "{{date}}, {{time}}",
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

// lib/locale/sk/_lib/formatRelative.js
function _lastWeek(day) {
  var weekday = accusativeWeekdays[day];
  switch (day) {
    case 0:
    case 3:
    case 6:
      return "'minul\xFA " + weekday + " o' p";
    default:
      return "'minul\xFD' eeee 'o' p";
  }
}
function thisWeek(day) {
  var weekday = accusativeWeekdays[day];
  if (day === 4) {
    return "'vo' eeee 'o' p";
  } else {
    return "'v " + weekday + " o' p";
  }
}
function _nextWeek(day) {
  var weekday = accusativeWeekdays[day];
  switch (day) {
    case 0:
    case 4:
    case 6:
      return "'bud\xFAcu " + weekday + " o' p";
    default:
      return "'bud\xFAci' eeee 'o' p";
  }
}
var accusativeWeekdays = [
"nede\u013Eu",
"pondelok",
"utorok",
"stredu",
"\u0161tvrtok",
"piatok",
"sobotu"];

var formatRelativeLocale = {
  lastWeek: function lastWeek(date, baseDate, options) {
    var day = date.getDay();
    if (isSameWeek(date, baseDate, options)) {
      return thisWeek(day);
    } else {
      return _lastWeek(day);
    }
  },
  yesterday: "'v\u010Dera o' p",
  today: "'dnes o' p",
  tomorrow: "'zajtra o' p",
  nextWeek: function nextWeek(date, baseDate, options) {
    var day = date.getDay();
    if (isSameWeek(date, baseDate, options)) {
      return thisWeek(day);
    } else {
      return _nextWeek(day);
    }
  },
  other: "P"
};
var formatRelative = function formatRelative(token, date, baseDate, options) {
  var format = formatRelativeLocale[token];
  if (typeof format === "function") {
    return format(date, baseDate, options);
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

// lib/locale/sk/_lib/localize.js
var eraValues = {
  narrow: ["pred Kr.", "po Kr."],
  abbreviated: ["pred Kr.", "po Kr."],
  wide: ["pred Kristom", "po Kristovi"]
};
var quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1. \u0161tvr\u0165rok", "2. \u0161tvr\u0165rok", "3. \u0161tvr\u0165rok", "4. \u0161tvr\u0165rok"]
};
var monthValues = {
  narrow: ["j", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"],
  abbreviated: [
  "jan",
  "feb",
  "mar",
  "apr",
  "m\xE1j",
  "j\xFAn",
  "j\xFAl",
  "aug",
  "sep",
  "okt",
  "nov",
  "dec"],

  wide: [
  "janu\xE1r",
  "febru\xE1r",
  "marec",
  "apr\xEDl",
  "m\xE1j",
  "j\xFAn",
  "j\xFAl",
  "august",
  "september",
  "okt\xF3ber",
  "november",
  "december"]

};
var formattingMonthValues = {
  narrow: ["j", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"],
  abbreviated: [
  "jan",
  "feb",
  "mar",
  "apr",
  "m\xE1j",
  "j\xFAn",
  "j\xFAl",
  "aug",
  "sep",
  "okt",
  "nov",
  "dec"],

  wide: [
  "janu\xE1ra",
  "febru\xE1ra",
  "marca",
  "apr\xEDla",
  "m\xE1ja",
  "j\xFAna",
  "j\xFAla",
  "augusta",
  "septembra",
  "okt\xF3bra",
  "novembra",
  "decembra"]

};
var dayValues = {
  narrow: ["n", "p", "u", "s", "\u0161", "p", "s"],
  short: ["ne", "po", "ut", "st", "\u0161t", "pi", "so"],
  abbreviated: ["ne", "po", "ut", "st", "\u0161t", "pi", "so"],
  wide: [
  "nede\u013Ea",
  "pondelok",
  "utorok",
  "streda",
  "\u0161tvrtok",
  "piatok",
  "sobota"]

};
var dayPeriodValues = {
  narrow: {
    am: "AM",
    pm: "PM",
    midnight: "poln.",
    noon: "pol.",
    morning: "r\xE1no",
    afternoon: "pop.",
    evening: "ve\u010D.",
    night: "noc"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "poln.",
    noon: "pol.",
    morning: "r\xE1no",
    afternoon: "popol.",
    evening: "ve\u010Der",
    night: "noc"
  },
  wide: {
    am: "AM",
    pm: "PM",
    midnight: "polnoc",
    noon: "poludnie",
    morning: "r\xE1no",
    afternoon: "popoludnie",
    evening: "ve\u010Der",
    night: "noc"
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: "AM",
    pm: "PM",
    midnight: "o poln.",
    noon: "nap.",
    morning: "r\xE1no",
    afternoon: "pop.",
    evening: "ve\u010D.",
    night: "v n."
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "o poln.",
    noon: "napol.",
    morning: "r\xE1no",
    afternoon: "popol.",
    evening: "ve\u010Der",
    night: "v noci"
  },
  wide: {
    am: "AM",
    pm: "PM",
    midnight: "o polnoci",
    noon: "napoludnie",
    morning: "r\xE1no",
    afternoon: "popoludn\xED",
    evening: "ve\u010Der",
    night: "v noci"
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

// lib/locale/sk/_lib/match.js
var matchOrdinalNumberPattern = /^(\d+)\.?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(pred Kr\.|pred n\. l\.|po Kr\.|n\. l\.)/i,
  abbreviated: /^(pred Kr\.|pred n\. l\.|po Kr\.|n\. l\.)/i,
  wide: /^(pred Kristom|pred na[šs][íi]m letopo[čc]tom|po Kristovi|n[áa][šs]ho letopo[čc]tu)/i
};
var parseEraPatterns = {
  any: [/^pr/i, /^(po|n)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234]\. [šs]tvr[ťt]rok/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|m[áa]j|j[úu]n|j[úu]l|aug|sep|okt|nov|dec)/i,
  wide: /^(janu[áa]ra?|febru[áa]ra?|(marec|marca)|apr[íi]la?|m[áa]ja?|j[úu]na?|j[úu]la?|augusta?|(september|septembra)|(okt[óo]ber|okt[óo]bra)|(november|novembra)|(december|decembra))/i
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
  /^m[áa]j/i,
  /^j[úu]n/i,
  /^j[úu]l/i,
  /^au/i,
  /^s/i,
  /^o/i,
  /^n/i,
  /^d/i]

};
var matchDayPatterns = {
  narrow: /^[npusšp]/i,
  short: /^(ne|po|ut|st|št|pi|so)/i,
  abbreviated: /^(ne|po|ut|st|št|pi|so)/i,
  wide: /^(nede[ľl]a|pondelok|utorok|streda|[šs]tvrtok|piatok|sobota])/i
};
var parseDayPatterns = {
  narrow: [/^n/i, /^p/i, /^u/i, /^s/i, /^š/i, /^p/i, /^s/i],
  any: [/^n/i, /^po/i, /^u/i, /^st/i, /^(št|stv)/i, /^pi/i, /^so/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(am|pm|(o )?poln\.?|(nap\.?|pol\.?)|r[áa]no|pop\.?|ve[čc]\.?|(v n\.?|noc))/i,
  abbreviated: /^(am|pm|(o )?poln\.?|(napol\.?|pol\.?)|r[áa]no|pop\.?|ve[čc]er|(v )?noci?)/i,
  any: /^(am|pm|(o )?polnoci?|(na)?poludnie|r[áa]no|popoludn(ie|í|i)|ve[čc]er|(v )?noci?)/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^am/i,
    pm: /^pm/i,
    midnight: /poln/i,
    noon: /^(nap|(na)?pol(\.|u))/i,
    morning: /^r[áa]no/i,
    afternoon: /^pop/i,
    evening: /^ve[čc]/i,
    night: /^(noc|v n\.)/i
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

// lib/locale/sk.js
var sk = {
  code: "sk",
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

// lib/locale/sk/cdn.js
window.dateFns = _objectSpread(_objectSpread({},
window.dateFns), {}, {
  locale: _objectSpread(_objectSpread({}, (_window$dateFns =
  window.dateFns) === null || _window$dateFns === void 0 ? void 0 : _window$dateFns.locale), {}, {
    sk: sk }) });



//# debugId=F8817961594D46E664756E2164756E21

//# sourceMappingURL=cdn.js.map
})();