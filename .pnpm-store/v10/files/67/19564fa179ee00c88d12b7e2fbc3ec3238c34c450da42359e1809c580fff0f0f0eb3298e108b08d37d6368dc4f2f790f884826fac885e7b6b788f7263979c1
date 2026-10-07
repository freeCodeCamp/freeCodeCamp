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

// lib/locale/tr/_lib/formatDistance.js
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: "bir saniyeden az",
    other: "{{count}} saniyeden az"
  },
  xSeconds: {
    one: "1 saniye",
    other: "{{count}} saniye"
  },
  halfAMinute: "yar\u0131m dakika",
  lessThanXMinutes: {
    one: "bir dakikadan az",
    other: "{{count}} dakikadan az"
  },
  xMinutes: {
    one: "1 dakika",
    other: "{{count}} dakika"
  },
  aboutXHours: {
    one: "yakla\u015F\u0131k 1 saat",
    other: "yakla\u015F\u0131k {{count}} saat"
  },
  xHours: {
    one: "1 saat",
    other: "{{count}} saat"
  },
  xDays: {
    one: "1 g\xFCn",
    other: "{{count}} g\xFCn"
  },
  aboutXWeeks: {
    one: "yakla\u015F\u0131k 1 hafta",
    other: "yakla\u015F\u0131k {{count}} hafta"
  },
  xWeeks: {
    one: "1 hafta",
    other: "{{count}} hafta"
  },
  aboutXMonths: {
    one: "yakla\u015F\u0131k 1 ay",
    other: "yakla\u015F\u0131k {{count}} ay"
  },
  xMonths: {
    one: "1 ay",
    other: "{{count}} ay"
  },
  aboutXYears: {
    one: "yakla\u015F\u0131k 1 y\u0131l",
    other: "yakla\u015F\u0131k {{count}} y\u0131l"
  },
  xYears: {
    one: "1 y\u0131l",
    other: "{{count}} y\u0131l"
  },
  overXYears: {
    one: "1 y\u0131ldan fazla",
    other: "{{count}} y\u0131ldan fazla"
  },
  almostXYears: {
    one: "neredeyse 1 y\u0131l",
    other: "neredeyse {{count}} y\u0131l"
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
      return result + " sonra";
    } else {
      return result + " \xF6nce";
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

// lib/locale/tr/_lib/formatLong.js
var dateFormats = {
  full: "d MMMM y EEEE",
  long: "d MMMM y",
  medium: "d MMM y",
  short: "dd.MM.yyyy"
};
var timeFormats = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
};
var dateTimeFormats = {
  full: "{{date}} 'saat' {{time}}",
  long: "{{date}} 'saat' {{time}}",
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

// lib/locale/tr/_lib/formatRelative.js
var formatRelativeLocale = {
  lastWeek: "'ge\xE7en hafta' eeee 'saat' p",
  yesterday: "'d\xFCn saat' p",
  today: "'bug\xFCn saat' p",
  tomorrow: "'yar\u0131n saat' p",
  nextWeek: "eeee 'saat' p",
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

// lib/locale/tr/_lib/localize.js
var eraValues = {
  narrow: ["M\xD6", "MS"],
  abbreviated: ["M\xD6", "MS"],
  wide: ["Milattan \xD6nce", "Milattan Sonra"]
};
var quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["1\xC7", "2\xC7", "3\xC7", "4\xC7"],
  wide: ["\u0130lk \xE7eyrek", "\u0130kinci \xC7eyrek", "\xDC\xE7\xFCnc\xFC \xE7eyrek", "Son \xE7eyrek"]
};
var monthValues = {
  narrow: ["O", "\u015E", "M", "N", "M", "H", "T", "A", "E", "E", "K", "A"],
  abbreviated: [
  "Oca",
  "\u015Eub",
  "Mar",
  "Nis",
  "May",
  "Haz",
  "Tem",
  "A\u011Fu",
  "Eyl",
  "Eki",
  "Kas",
  "Ara"],

  wide: [
  "Ocak",
  "\u015Eubat",
  "Mart",
  "Nisan",
  "May\u0131s",
  "Haziran",
  "Temmuz",
  "A\u011Fustos",
  "Eyl\xFCl",
  "Ekim",
  "Kas\u0131m",
  "Aral\u0131k"]

};
var dayValues = {
  narrow: ["P", "P", "S", "\xC7", "P", "C", "C"],
  short: ["Pz", "Pt", "Sa", "\xC7a", "Pe", "Cu", "Ct"],
  abbreviated: ["Paz", "Pzt", "Sal", "\xC7ar", "Per", "Cum", "Cts"],
  wide: [
  "Pazar",
  "Pazartesi",
  "Sal\u0131",
  "\xC7ar\u015Famba",
  "Per\u015Fembe",
  "Cuma",
  "Cumartesi"]

};
var dayPeriodValues = {
  narrow: {
    am: "\xF6\xF6",
    pm: "\xF6s",
    midnight: "gy",
    noon: "\xF6",
    morning: "sa",
    afternoon: "\xF6s",
    evening: "ak",
    night: "ge"
  },
  abbreviated: {
    am: "\xD6\xD6",
    pm: "\xD6S",
    midnight: "gece yar\u0131s\u0131",
    noon: "\xF6\u011Fle",
    morning: "sabah",
    afternoon: "\xF6\u011Fleden sonra",
    evening: "ak\u015Fam",
    night: "gece"
  },
  wide: {
    am: "\xD6.\xD6.",
    pm: "\xD6.S.",
    midnight: "gece yar\u0131s\u0131",
    noon: "\xF6\u011Fle",
    morning: "sabah",
    afternoon: "\xF6\u011Fleden sonra",
    evening: "ak\u015Fam",
    night: "gece"
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: "\xF6\xF6",
    pm: "\xF6s",
    midnight: "gy",
    noon: "\xF6",
    morning: "sa",
    afternoon: "\xF6s",
    evening: "ak",
    night: "ge"
  },
  abbreviated: {
    am: "\xD6\xD6",
    pm: "\xD6S",
    midnight: "gece yar\u0131s\u0131",
    noon: "\xF6\u011Flen",
    morning: "sabahleyin",
    afternoon: "\xF6\u011Fleden sonra",
    evening: "ak\u015Famleyin",
    night: "geceleyin"
  },
  wide: {
    am: "\xF6.\xF6.",
    pm: "\xF6.s.",
    midnight: "gece yar\u0131s\u0131",
    noon: "\xF6\u011Flen",
    morning: "sabahleyin",
    afternoon: "\xF6\u011Fleden sonra",
    evening: "ak\u015Famleyin",
    night: "geceleyin"
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
    argumentCallback: function argumentCallback(quarter) {return Number(quarter) - 1;}
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

// lib/locale/tr/_lib/match.js
var matchOrdinalNumberPattern = /^(\d+)(\.)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(mö|ms)/i,
  abbreviated: /^(mö|ms)/i,
  wide: /^(milattan önce|milattan sonra)/i
};
var parseEraPatterns = {
  any: [/(^mö|^milattan önce)/i, /(^ms|^milattan sonra)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^[1234]ç/i,
  wide: /^((i|İ)lk|(i|İ)kinci|üçüncü|son) çeyrek/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i],
  abbreviated: [/1ç/i, /2ç/i, /3ç/i, /4ç/i],
  wide: [
  /^(i|İ)lk çeyrek/i,
  /(i|İ)kinci çeyrek/i,
  /üçüncü çeyrek/i,
  /son çeyrek/i]

};
var matchMonthPatterns = {
  narrow: /^[oşmnhtaek]/i,
  abbreviated: /^(oca|şub|mar|nis|may|haz|tem|ağu|eyl|eki|kas|ara)/i,
  wide: /^(ocak|şubat|mart|nisan|mayıs|haziran|temmuz|ağustos|eylül|ekim|kasım|aralık)/i
};
var parseMonthPatterns = {
  narrow: [
  /^o/i,
  /^ş/i,
  /^m/i,
  /^n/i,
  /^m/i,
  /^h/i,
  /^t/i,
  /^a/i,
  /^e/i,
  /^e/i,
  /^k/i,
  /^a/i],

  any: [
  /^o/i,
  /^ş/i,
  /^mar/i,
  /^n/i,
  /^may/i,
  /^h/i,
  /^t/i,
  /^ağ/i,
  /^ey/i,
  /^ek/i,
  /^k/i,
  /^ar/i]

};
var matchDayPatterns = {
  narrow: /^[psçc]/i,
  short: /^(pz|pt|sa|ça|pe|cu|ct)/i,
  abbreviated: /^(paz|pzt|sal|çar|per|cum|cts)/i,
  wide: /^(pazar(?!tesi)|pazartesi|salı|çarşamba|perşembe|cuma(?!rtesi)|cumartesi)/i
};
var parseDayPatterns = {
  narrow: [/^p/i, /^p/i, /^s/i, /^ç/i, /^p/i, /^c/i, /^c/i],
  any: [/^pz/i, /^pt/i, /^sa/i, /^ça/i, /^pe/i, /^cu/i, /^ct/i],
  wide: [
  /^pazar(?!tesi)/i,
  /^pazartesi/i,
  /^salı/i,
  /^çarşamba/i,
  /^perşembe/i,
  /^cuma(?!rtesi)/i,
  /^cumartesi/i]

};
var matchDayPeriodPatterns = {
  narrow: /^(öö|ös|gy|ö|sa|ös|ak|ge)/i,
  any: /^(ö\.?\s?[ös]\.?|öğleden sonra|gece yarısı|öğle|(sabah|öğ|akşam|gece)(leyin))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^ö\.?ö\.?/i,
    pm: /^ö\.?s\.?/i,
    midnight: /^(gy|gece yarısı)/i,
    noon: /^öğ/i,
    morning: /^sa/i,
    afternoon: /^öğleden sonra/i,
    evening: /^ak/i,
    night: /^ge/i
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

// lib/locale/tr.js
var tr = {
  code: "tr",
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

// lib/locale/tr/cdn.js
window.dateFns = _objectSpread(_objectSpread({},
window.dateFns), {}, {
  locale: _objectSpread(_objectSpread({}, (_window$dateFns =
  window.dateFns) === null || _window$dateFns === void 0 ? void 0 : _window$dateFns.locale), {}, {
    tr: tr }) });



//# debugId=1F8426884F95E68A64756E2164756E21

//# sourceMappingURL=cdn.js.map
})();