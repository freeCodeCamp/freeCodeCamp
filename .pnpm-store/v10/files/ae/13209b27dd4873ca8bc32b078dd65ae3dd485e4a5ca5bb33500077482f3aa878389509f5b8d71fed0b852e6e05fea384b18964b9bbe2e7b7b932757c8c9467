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

// lib/locale/lt/_lib/formatDistance.js
function special(number) {
  return number % 10 === 0 || number > 10 && number < 20;
}
function forms(key) {
  return translations[key].split("_");
}
var translations = {
  xseconds_other: "sekund\u0117_sekund\u017Ei\u0173_sekundes",
  xminutes_one: "minut\u0117_minut\u0117s_minut\u0119",
  xminutes_other: "minut\u0117s_minu\u010Di\u0173_minutes",
  xhours_one: "valanda_valandos_valand\u0105",
  xhours_other: "valandos_valand\u0173_valandas",
  xdays_one: "diena_dienos_dien\u0105",
  xdays_other: "dienos_dien\u0173_dienas",
  xweeks_one: "savait\u0117_savait\u0117s_savait\u0119",
  xweeks_other: "savait\u0117s_savai\u010Di\u0173_savaites",
  xmonths_one: "m\u0117nuo_m\u0117nesio_m\u0117nes\u012F",
  xmonths_other: "m\u0117nesiai_m\u0117nesi\u0173_m\u0117nesius",
  xyears_one: "metai_met\u0173_metus",
  xyears_other: "metai_met\u0173_metus",
  about: "apie",
  over: "daugiau nei",
  almost: "beveik",
  lessthan: "ma\u017Eiau nei"
};
var translateSeconds = function translateSeconds(_number, addSuffix, _key, isFuture) {
  if (!addSuffix) {
    return "kelios sekund\u0117s";
  } else {
    return isFuture ? "keli\u0173 sekund\u017Ei\u0173" : "kelias sekundes";
  }
};
var translateSingular = function translateSingular(_number, addSuffix, key, isFuture) {
  return !addSuffix ? forms(key)[0] : isFuture ? forms(key)[1] : forms(key)[2];
};
var translate = function translate(number, addSuffix, key, isFuture) {
  var result = number + " ";
  if (number === 1) {
    return result + translateSingular(number, addSuffix, key, isFuture);
  } else if (!addSuffix) {
    return result + (special(number) ? forms(key)[1] : forms(key)[0]);
  } else {
    if (isFuture) {
      return result + forms(key)[1];
    } else {
      return result + (special(number) ? forms(key)[1] : forms(key)[2]);
    }
  }
};
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: translateSeconds,
    other: translate
  },
  xSeconds: {
    one: translateSeconds,
    other: translate
  },
  halfAMinute: "pus\u0117 minut\u0117s",
  lessThanXMinutes: {
    one: translateSingular,
    other: translate
  },
  xMinutes: {
    one: translateSingular,
    other: translate
  },
  aboutXHours: {
    one: translateSingular,
    other: translate
  },
  xHours: {
    one: translateSingular,
    other: translate
  },
  xDays: {
    one: translateSingular,
    other: translate
  },
  aboutXWeeks: {
    one: translateSingular,
    other: translate
  },
  xWeeks: {
    one: translateSingular,
    other: translate
  },
  aboutXMonths: {
    one: translateSingular,
    other: translate
  },
  xMonths: {
    one: translateSingular,
    other: translate
  },
  aboutXYears: {
    one: translateSingular,
    other: translate
  },
  xYears: {
    one: translateSingular,
    other: translate
  },
  overXYears: {
    one: translateSingular,
    other: translate
  },
  almostXYears: {
    one: translateSingular,
    other: translate
  }
};
var formatDistance = function formatDistance(token, count, options) {
  var adverb = token.match(/about|over|almost|lessthan/i);
  var unit = adverb ? token.replace(adverb[0], "") : token;
  var isFuture = (options === null || options === void 0 ? void 0 : options.comparison) !== undefined && options.comparison > 0;
  var result;
  var tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === "string") {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one(count, (options === null || options === void 0 ? void 0 : options.addSuffix) === true, unit.toLowerCase() + "_one", isFuture);
  } else {
    result = tokenValue.other(count, (options === null || options === void 0 ? void 0 : options.addSuffix) === true, unit.toLowerCase() + "_other", isFuture);
  }
  if (adverb) {
    var key = adverb[0].toLowerCase();
    result = translations[key] + " " + result;
  }
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return "po " + result;
    } else {
      return "prie\u0161 " + result;
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

// lib/locale/lt/_lib/formatLong.js
var dateFormats = {
  full: "y 'm'. MMMM d 'd'., EEEE",
  long: "y 'm'. MMMM d 'd'.",
  medium: "y-MM-dd",
  short: "y-MM-dd"
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

// lib/locale/lt/_lib/formatRelative.js
var formatRelativeLocale = {
  lastWeek: "'Pra\u0117jus\u012F' eeee p",
  yesterday: "'Vakar' p",
  today: "'\u0160iandien' p",
  tomorrow: "'Rytoj' p",
  nextWeek: "eeee p",
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

// lib/locale/lt/_lib/localize.js
var eraValues = {
  narrow: ["pr. Kr.", "po Kr."],
  abbreviated: ["pr. Kr.", "po Kr."],
  wide: ["prie\u0161 Krist\u0173", "po Kristaus"]
};
var quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["I ketv.", "II ketv.", "III ketv.", "IV ketv."],
  wide: ["I ketvirtis", "II ketvirtis", "III ketvirtis", "IV ketvirtis"]
};
var formattingQuarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["I k.", "II k.", "III k.", "IV k."],
  wide: ["I ketvirtis", "II ketvirtis", "III ketvirtis", "IV ketvirtis"]
};
var monthValues = {
  narrow: ["S", "V", "K", "B", "G", "B", "L", "R", "R", "S", "L", "G"],
  abbreviated: [
  "saus.",
  "vas.",
  "kov.",
  "bal.",
  "geg.",
  "bir\u017E.",
  "liep.",
  "rugp.",
  "rugs.",
  "spal.",
  "lapkr.",
  "gruod."],

  wide: [
  "sausis",
  "vasaris",
  "kovas",
  "balandis",
  "gegu\u017E\u0117",
  "bir\u017Eelis",
  "liepa",
  "rugpj\u016Btis",
  "rugs\u0117jis",
  "spalis",
  "lapkritis",
  "gruodis"]

};
var formattingMonthValues = {
  narrow: ["S", "V", "K", "B", "G", "B", "L", "R", "R", "S", "L", "G"],
  abbreviated: [
  "saus.",
  "vas.",
  "kov.",
  "bal.",
  "geg.",
  "bir\u017E.",
  "liep.",
  "rugp.",
  "rugs.",
  "spal.",
  "lapkr.",
  "gruod."],

  wide: [
  "sausio",
  "vasario",
  "kovo",
  "baland\u017Eio",
  "gegu\u017E\u0117s",
  "bir\u017Eelio",
  "liepos",
  "rugpj\u016B\u010Dio",
  "rugs\u0117jo",
  "spalio",
  "lapkri\u010Dio",
  "gruod\u017Eio"]

};
var dayValues = {
  narrow: ["S", "P", "A", "T", "K", "P", "\u0160"],
  short: ["Sk", "Pr", "An", "Tr", "Kt", "Pn", "\u0160t"],
  abbreviated: ["sk", "pr", "an", "tr", "kt", "pn", "\u0161t"],
  wide: [
  "sekmadienis",
  "pirmadienis",
  "antradienis",
  "tre\u010Diadienis",
  "ketvirtadienis",
  "penktadienis",
  "\u0161e\u0161tadienis"]

};
var formattingDayValues = {
  narrow: ["S", "P", "A", "T", "K", "P", "\u0160"],
  short: ["Sk", "Pr", "An", "Tr", "Kt", "Pn", "\u0160t"],
  abbreviated: ["sk", "pr", "an", "tr", "kt", "pn", "\u0161t"],
  wide: [
  "sekmadien\u012F",
  "pirmadien\u012F",
  "antradien\u012F",
  "tre\u010Diadien\u012F",
  "ketvirtadien\u012F",
  "penktadien\u012F",
  "\u0161e\u0161tadien\u012F"]

};
var dayPeriodValues = {
  narrow: {
    am: "pr. p.",
    pm: "pop.",
    midnight: "vidurnaktis",
    noon: "vidurdienis",
    morning: "rytas",
    afternoon: "diena",
    evening: "vakaras",
    night: "naktis"
  },
  abbreviated: {
    am: "prie\u0161piet",
    pm: "popiet",
    midnight: "vidurnaktis",
    noon: "vidurdienis",
    morning: "rytas",
    afternoon: "diena",
    evening: "vakaras",
    night: "naktis"
  },
  wide: {
    am: "prie\u0161piet",
    pm: "popiet",
    midnight: "vidurnaktis",
    noon: "vidurdienis",
    morning: "rytas",
    afternoon: "diena",
    evening: "vakaras",
    night: "naktis"
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: "pr. p.",
    pm: "pop.",
    midnight: "vidurnaktis",
    noon: "perpiet",
    morning: "rytas",
    afternoon: "popiet\u0117",
    evening: "vakaras",
    night: "naktis"
  },
  abbreviated: {
    am: "prie\u0161piet",
    pm: "popiet",
    midnight: "vidurnaktis",
    noon: "perpiet",
    morning: "rytas",
    afternoon: "popiet\u0117",
    evening: "vakaras",
    night: "naktis"
  },
  wide: {
    am: "prie\u0161piet",
    pm: "popiet",
    midnight: "vidurnaktis",
    noon: "perpiet",
    morning: "rytas",
    afternoon: "popiet\u0117",
    evening: "vakaras",
    night: "naktis"
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
  var number = Number(dirtyNumber);
  return number + "-oji";
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
    formattingValues: formattingQuarterValues,
    defaultFormattingWidth: "wide",
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
    defaultWidth: "wide",
    formattingValues: formattingDayValues,
    defaultFormattingWidth: "wide"
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

// lib/locale/lt/_lib/match.js
var matchOrdinalNumberPattern = /^(\d+)(-oji)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^p(r|o)\.?\s?(kr\.?|me)/i,
  abbreviated: /^(pr\.\s?(kr\.|m\.\s?e\.)|po\s?kr\.|mūsų eroje)/i,
  wide: /^(prieš Kristų|prieš mūsų erą|po Kristaus|mūsų eroje)/i
};
var parseEraPatterns = {
  wide: [/prieš/i, /(po|mūsų)/i],
  any: [/^pr/i, /^(po|m)/i]
};
var matchQuarterPatterns = {
  narrow: /^([1234])/i,
  abbreviated: /^(I|II|III|IV)\s?ketv?\.?/i,
  wide: /^(I|II|III|IV)\s?ketvirtis/i
};
var parseQuarterPatterns = {
  narrow: [/1/i, /2/i, /3/i, /4/i],
  any: [/I$/i, /II$/i, /III/i, /IV/i]
};
var matchMonthPatterns = {
  narrow: /^[svkbglr]/i,
  abbreviated: /^(saus\.|vas\.|kov\.|bal\.|geg\.|birž\.|liep\.|rugp\.|rugs\.|spal\.|lapkr\.|gruod\.)/i,
  wide: /^(sausi(s|o)|vasari(s|o)|kov(a|o)s|balandž?i(s|o)|gegužės?|birželi(s|o)|liep(a|os)|rugpjū(t|č)i(s|o)|rugsėj(is|o)|spali(s|o)|lapkri(t|č)i(s|o)|gruodž?i(s|o))/i
};
var parseMonthPatterns = {
  narrow: [
  /^s/i,
  /^v/i,
  /^k/i,
  /^b/i,
  /^g/i,
  /^b/i,
  /^l/i,
  /^r/i,
  /^r/i,
  /^s/i,
  /^l/i,
  /^g/i],

  any: [
  /^saus/i,
  /^vas/i,
  /^kov/i,
  /^bal/i,
  /^geg/i,
  /^birž/i,
  /^liep/i,
  /^rugp/i,
  /^rugs/i,
  /^spal/i,
  /^lapkr/i,
  /^gruod/i]

};
var matchDayPatterns = {
  narrow: /^[spatkš]/i,
  short: /^(sk|pr|an|tr|kt|pn|št)/i,
  abbreviated: /^(sk|pr|an|tr|kt|pn|št)/i,
  wide: /^(sekmadien(is|į)|pirmadien(is|į)|antradien(is|į)|trečiadien(is|į)|ketvirtadien(is|į)|penktadien(is|į)|šeštadien(is|į))/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^p/i, /^a/i, /^t/i, /^k/i, /^p/i, /^š/i],
  wide: [/^se/i, /^pi/i, /^an/i, /^tr/i, /^ke/i, /^pe/i, /^še/i],
  any: [/^sk/i, /^pr/i, /^an/i, /^tr/i, /^kt/i, /^pn/i, /^št/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(pr.\s?p.|pop.|vidurnaktis|(vidurdienis|perpiet)|rytas|(diena|popietė)|vakaras|naktis)/i,
  any: /^(priešpiet|popiet$|vidurnaktis|(vidurdienis|perpiet)|rytas|(diena|popietė)|vakaras|naktis)/i
};
var parseDayPeriodPatterns = {
  narrow: {
    am: /^pr/i,
    pm: /^pop./i,
    midnight: /^vidurnaktis/i,
    noon: /^(vidurdienis|perp)/i,
    morning: /rytas/i,
    afternoon: /(die|popietė)/i,
    evening: /vakaras/i,
    night: /naktis/i
  },
  any: {
    am: /^pr/i,
    pm: /^popiet$/i,
    midnight: /^vidurnaktis/i,
    noon: /^(vidurdienis|perp)/i,
    morning: /rytas/i,
    afternoon: /(die|popietė)/i,
    evening: /vakaras/i,
    night: /naktis/i
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

// lib/locale/lt.js
var lt = {
  code: "lt",
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

// lib/locale/lt/cdn.js
window.dateFns = _objectSpread(_objectSpread({},
window.dateFns), {}, {
  locale: _objectSpread(_objectSpread({}, (_window$dateFns =
  window.dateFns) === null || _window$dateFns === void 0 ? void 0 : _window$dateFns.locale), {}, {
    lt: lt }) });



//# debugId=27AFBC133550450364756E2164756E21

//# sourceMappingURL=cdn.js.map
})();