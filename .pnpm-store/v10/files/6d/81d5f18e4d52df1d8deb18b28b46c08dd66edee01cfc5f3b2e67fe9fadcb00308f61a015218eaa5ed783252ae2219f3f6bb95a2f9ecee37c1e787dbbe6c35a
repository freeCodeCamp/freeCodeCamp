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

// lib/locale/ro/_lib/formatDistance.js
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: "mai pu\u021Bin de o secund\u0103",
    other: "mai pu\u021Bin de {{count}} secunde"
  },
  xSeconds: {
    one: "1 secund\u0103",
    other: "{{count}} secunde"
  },
  halfAMinute: "jum\u0103tate de minut",
  lessThanXMinutes: {
    one: "mai pu\u021Bin de un minut",
    other: "mai pu\u021Bin de {{count}} minute"
  },
  xMinutes: {
    one: "1 minut",
    other: "{{count}} minute"
  },
  aboutXHours: {
    one: "circa 1 or\u0103",
    other: "circa {{count}} ore"
  },
  xHours: {
    one: "1 or\u0103",
    other: "{{count}} ore"
  },
  xDays: {
    one: "1 zi",
    other: "{{count}} zile"
  },
  aboutXWeeks: {
    one: "circa o s\u0103pt\u0103m\xE2n\u0103",
    other: "circa {{count}} s\u0103pt\u0103m\xE2ni"
  },
  xWeeks: {
    one: "1 s\u0103pt\u0103m\xE2n\u0103",
    other: "{{count}} s\u0103pt\u0103m\xE2ni"
  },
  aboutXMonths: {
    one: "circa 1 lun\u0103",
    other: "circa {{count}} luni"
  },
  xMonths: {
    one: "1 lun\u0103",
    other: "{{count}} luni"
  },
  aboutXYears: {
    one: "circa 1 an",
    other: "circa {{count}} ani"
  },
  xYears: {
    one: "1 an",
    other: "{{count}} ani"
  },
  overXYears: {
    one: "peste 1 an",
    other: "peste {{count}} ani"
  },
  almostXYears: {
    one: "aproape 1 an",
    other: "aproape {{count}} ani"
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
      return "\xEEn " + result;
    } else {
      return result + " \xEEn urm\u0103";
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

// lib/locale/ro/_lib/formatLong.js
var dateFormats = {
  full: "EEEE, d MMMM yyyy",
  long: "d MMMM yyyy",
  medium: "d MMM yyyy",
  short: "dd.MM.yyyy"
};
var timeFormats = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
};
var dateTimeFormats = {
  full: "{{date}} 'la' {{time}}",
  long: "{{date}} 'la' {{time}}",
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

// lib/locale/ro/_lib/formatRelative.js
var formatRelativeLocale = {
  lastWeek: "eeee 'trecut\u0103 la' p",
  yesterday: "'ieri la' p",
  today: "'ast\u0103zi la' p",
  tomorrow: "'m\xE2ine la' p",
  nextWeek: "eeee 'viitoare la' p",
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

// lib/locale/ro/_lib/localize.js
var eraValues = {
  narrow: ["\xCE", "D"],
  abbreviated: ["\xCE.d.C.", "D.C."],
  wide: ["\xCEnainte de Cristos", "Dup\u0103 Cristos"]
};
var quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["T1", "T2", "T3", "T4"],
  wide: [
  "primul trimestru",
  "al doilea trimestru",
  "al treilea trimestru",
  "al patrulea trimestru"]

};
var monthValues = {
  narrow: ["I", "F", "M", "A", "M", "I", "I", "A", "S", "O", "N", "D"],
  abbreviated: [
  "ian",
  "feb",
  "mar",
  "apr",
  "mai",
  "iun",
  "iul",
  "aug",
  "sep",
  "oct",
  "noi",
  "dec"],

  wide: [
  "ianuarie",
  "februarie",
  "martie",
  "aprilie",
  "mai",
  "iunie",
  "iulie",
  "august",
  "septembrie",
  "octombrie",
  "noiembrie",
  "decembrie"]

};
var dayValues = {
  narrow: ["d", "l", "m", "m", "j", "v", "s"],
  short: ["du", "lu", "ma", "mi", "jo", "vi", "s\xE2"],
  abbreviated: ["dum", "lun", "mar", "mie", "joi", "vin", "s\xE2m"],
  wide: ["duminic\u0103", "luni", "mar\u021Bi", "miercuri", "joi", "vineri", "s\xE2mb\u0103t\u0103"]
};
var dayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mn",
    noon: "ami",
    morning: "dim",
    afternoon: "da",
    evening: "s",
    night: "n"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "miezul nop\u021Bii",
    noon: "amiaz\u0103",
    morning: "diminea\u021B\u0103",
    afternoon: "dup\u0103-amiaz\u0103",
    evening: "sear\u0103",
    night: "noapte"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "miezul nop\u021Bii",
    noon: "amiaz\u0103",
    morning: "diminea\u021B\u0103",
    afternoon: "dup\u0103-amiaz\u0103",
    evening: "sear\u0103",
    night: "noapte"
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mn",
    noon: "amiaz\u0103",
    morning: "diminea\u021B\u0103",
    afternoon: "dup\u0103-amiaz\u0103",
    evening: "sear\u0103",
    night: "noapte"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "miezul nop\u021Bii",
    noon: "amiaz\u0103",
    morning: "diminea\u021B\u0103",
    afternoon: "dup\u0103-amiaz\u0103",
    evening: "sear\u0103",
    night: "noapte"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "miezul nop\u021Bii",
    noon: "amiaz\u0103",
    morning: "diminea\u021B\u0103",
    afternoon: "dup\u0103-amiaz\u0103",
    evening: "sear\u0103",
    night: "noapte"
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

// lib/locale/ro/_lib/match.js
var matchOrdinalNumberPattern = /^(\d+)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(Î|D)/i,
  abbreviated: /^(Î\.?\s?d\.?\s?C\.?|Î\.?\s?e\.?\s?n\.?|D\.?\s?C\.?|e\.?\s?n\.?)/i,
  wide: /^(Înainte de Cristos|Înaintea erei noastre|După Cristos|Era noastră)/i
};
var parseEraPatterns = {
  any: [/^ÎC/i, /^DC/i],
  wide: [
  /^(Înainte de Cristos|Înaintea erei noastre)/i,
  /^(După Cristos|Era noastră)/i]

};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^T[1234]/i,
  wide: /^trimestrul [1234]/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[ifmaasond]/i,
  abbreviated: /^(ian|feb|mar|apr|mai|iun|iul|aug|sep|oct|noi|dec)/i,
  wide: /^(ianuarie|februarie|martie|aprilie|mai|iunie|iulie|august|septembrie|octombrie|noiembrie|decembrie)/i
};
var parseMonthPatterns = {
  narrow: [
  /^i/i,
  /^f/i,
  /^m/i,
  /^a/i,
  /^m/i,
  /^i/i,
  /^i/i,
  /^a/i,
  /^s/i,
  /^o/i,
  /^n/i,
  /^d/i],

  any: [
  /^ia/i,
  /^f/i,
  /^mar/i,
  /^ap/i,
  /^mai/i,
  /^iun/i,
  /^iul/i,
  /^au/i,
  /^s/i,
  /^o/i,
  /^n/i,
  /^d/i]

};
var matchDayPatterns = {
  narrow: /^[dlmjvs]/i,
  short: /^(d|l|ma|mi|j|v|s)/i,
  abbreviated: /^(dum|lun|mar|mie|jo|vi|sâ)/i,
  wide: /^(duminica|luni|marţi|miercuri|joi|vineri|sâmbătă)/i
};
var parseDayPatterns = {
  narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^j/i, /^v/i, /^s/i],
  any: [/^d/i, /^l/i, /^ma/i, /^mi/i, /^j/i, /^v/i, /^s/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mn|a|(dimineaţa|după-amiaza|seara|noaptea))/i,
  any: /^([ap]\.?\s?m\.?|miezul nopții|amiaza|(dimineaţa|după-amiaza|seara|noaptea))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mn/i,
    noon: /amiaza/i,
    morning: /dimineaţa/i,
    afternoon: /după-amiaza/i,
    evening: /seara/i,
    night: /noaptea/i
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

// lib/locale/ro.js
var ro = {
  code: "ro",
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

// lib/locale/ro/cdn.js
window.dateFns = _objectSpread(_objectSpread({},
window.dateFns), {}, {
  locale: _objectSpread(_objectSpread({}, (_window$dateFns =
  window.dateFns) === null || _window$dateFns === void 0 ? void 0 : _window$dateFns.locale), {}, {
    ro: ro }) });



//# debugId=FD06BEBFBD89620C64756E2164756E21

//# sourceMappingURL=cdn.js.map
})();