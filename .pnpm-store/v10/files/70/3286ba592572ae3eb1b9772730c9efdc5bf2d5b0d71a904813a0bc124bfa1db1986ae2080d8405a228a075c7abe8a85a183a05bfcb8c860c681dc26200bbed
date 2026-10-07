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

// lib/locale/sl/_lib/formatDistance.js
function isPluralType(val) {
  return val.one !== undefined;
}
function getFormFromCount(count) {
  switch (count % 100) {
    case 1:
      return "one";
    case 2:
      return "two";
    case 3:
    case 4:
      return "few";
    default:
      return "other";
  }
}
var formatDistanceLocale = {
  lessThanXSeconds: {
    present: {
      one: "manj kot {{count}} sekunda",
      two: "manj kot {{count}} sekundi",
      few: "manj kot {{count}} sekunde",
      other: "manj kot {{count}} sekund"
    },
    past: {
      one: "manj kot {{count}} sekundo",
      two: "manj kot {{count}} sekundama",
      few: "manj kot {{count}} sekundami",
      other: "manj kot {{count}} sekundami"
    },
    future: {
      one: "manj kot {{count}} sekundo",
      two: "manj kot {{count}} sekundi",
      few: "manj kot {{count}} sekunde",
      other: "manj kot {{count}} sekund"
    }
  },
  xSeconds: {
    present: {
      one: "{{count}} sekunda",
      two: "{{count}} sekundi",
      few: "{{count}} sekunde",
      other: "{{count}} sekund"
    },
    past: {
      one: "{{count}} sekundo",
      two: "{{count}} sekundama",
      few: "{{count}} sekundami",
      other: "{{count}} sekundami"
    },
    future: {
      one: "{{count}} sekundo",
      two: "{{count}} sekundi",
      few: "{{count}} sekunde",
      other: "{{count}} sekund"
    }
  },
  halfAMinute: "pol minute",
  lessThanXMinutes: {
    present: {
      one: "manj kot {{count}} minuta",
      two: "manj kot {{count}} minuti",
      few: "manj kot {{count}} minute",
      other: "manj kot {{count}} minut"
    },
    past: {
      one: "manj kot {{count}} minuto",
      two: "manj kot {{count}} minutama",
      few: "manj kot {{count}} minutami",
      other: "manj kot {{count}} minutami"
    },
    future: {
      one: "manj kot {{count}} minuto",
      two: "manj kot {{count}} minuti",
      few: "manj kot {{count}} minute",
      other: "manj kot {{count}} minut"
    }
  },
  xMinutes: {
    present: {
      one: "{{count}} minuta",
      two: "{{count}} minuti",
      few: "{{count}} minute",
      other: "{{count}} minut"
    },
    past: {
      one: "{{count}} minuto",
      two: "{{count}} minutama",
      few: "{{count}} minutami",
      other: "{{count}} minutami"
    },
    future: {
      one: "{{count}} minuto",
      two: "{{count}} minuti",
      few: "{{count}} minute",
      other: "{{count}} minut"
    }
  },
  aboutXHours: {
    present: {
      one: "pribli\u017Eno {{count}} ura",
      two: "pribli\u017Eno {{count}} uri",
      few: "pribli\u017Eno {{count}} ure",
      other: "pribli\u017Eno {{count}} ur"
    },
    past: {
      one: "pribli\u017Eno {{count}} uro",
      two: "pribli\u017Eno {{count}} urama",
      few: "pribli\u017Eno {{count}} urami",
      other: "pribli\u017Eno {{count}} urami"
    },
    future: {
      one: "pribli\u017Eno {{count}} uro",
      two: "pribli\u017Eno {{count}} uri",
      few: "pribli\u017Eno {{count}} ure",
      other: "pribli\u017Eno {{count}} ur"
    }
  },
  xHours: {
    present: {
      one: "{{count}} ura",
      two: "{{count}} uri",
      few: "{{count}} ure",
      other: "{{count}} ur"
    },
    past: {
      one: "{{count}} uro",
      two: "{{count}} urama",
      few: "{{count}} urami",
      other: "{{count}} urami"
    },
    future: {
      one: "{{count}} uro",
      two: "{{count}} uri",
      few: "{{count}} ure",
      other: "{{count}} ur"
    }
  },
  xDays: {
    present: {
      one: "{{count}} dan",
      two: "{{count}} dni",
      few: "{{count}} dni",
      other: "{{count}} dni"
    },
    past: {
      one: "{{count}} dnem",
      two: "{{count}} dnevoma",
      few: "{{count}} dnevi",
      other: "{{count}} dnevi"
    },
    future: {
      one: "{{count}} dan",
      two: "{{count}} dni",
      few: "{{count}} dni",
      other: "{{count}} dni"
    }
  },
  aboutXWeeks: {
    one: "pribli\u017Eno {{count}} teden",
    two: "pribli\u017Eno {{count}} tedna",
    few: "pribli\u017Eno {{count}} tedne",
    other: "pribli\u017Eno {{count}} tednov"
  },
  xWeeks: {
    one: "{{count}} teden",
    two: "{{count}} tedna",
    few: "{{count}} tedne",
    other: "{{count}} tednov"
  },
  aboutXMonths: {
    present: {
      one: "pribli\u017Eno {{count}} mesec",
      two: "pribli\u017Eno {{count}} meseca",
      few: "pribli\u017Eno {{count}} mesece",
      other: "pribli\u017Eno {{count}} mesecev"
    },
    past: {
      one: "pribli\u017Eno {{count}} mesecem",
      two: "pribli\u017Eno {{count}} mesecema",
      few: "pribli\u017Eno {{count}} meseci",
      other: "pribli\u017Eno {{count}} meseci"
    },
    future: {
      one: "pribli\u017Eno {{count}} mesec",
      two: "pribli\u017Eno {{count}} meseca",
      few: "pribli\u017Eno {{count}} mesece",
      other: "pribli\u017Eno {{count}} mesecev"
    }
  },
  xMonths: {
    present: {
      one: "{{count}} mesec",
      two: "{{count}} meseca",
      few: "{{count}} meseci",
      other: "{{count}} mesecev"
    },
    past: {
      one: "{{count}} mesecem",
      two: "{{count}} mesecema",
      few: "{{count}} meseci",
      other: "{{count}} meseci"
    },
    future: {
      one: "{{count}} mesec",
      two: "{{count}} meseca",
      few: "{{count}} mesece",
      other: "{{count}} mesecev"
    }
  },
  aboutXYears: {
    present: {
      one: "pribli\u017Eno {{count}} leto",
      two: "pribli\u017Eno {{count}} leti",
      few: "pribli\u017Eno {{count}} leta",
      other: "pribli\u017Eno {{count}} let"
    },
    past: {
      one: "pribli\u017Eno {{count}} letom",
      two: "pribli\u017Eno {{count}} letoma",
      few: "pribli\u017Eno {{count}} leti",
      other: "pribli\u017Eno {{count}} leti"
    },
    future: {
      one: "pribli\u017Eno {{count}} leto",
      two: "pribli\u017Eno {{count}} leti",
      few: "pribli\u017Eno {{count}} leta",
      other: "pribli\u017Eno {{count}} let"
    }
  },
  xYears: {
    present: {
      one: "{{count}} leto",
      two: "{{count}} leti",
      few: "{{count}} leta",
      other: "{{count}} let"
    },
    past: {
      one: "{{count}} letom",
      two: "{{count}} letoma",
      few: "{{count}} leti",
      other: "{{count}} leti"
    },
    future: {
      one: "{{count}} leto",
      two: "{{count}} leti",
      few: "{{count}} leta",
      other: "{{count}} let"
    }
  },
  overXYears: {
    present: {
      one: "ve\u010D kot {{count}} leto",
      two: "ve\u010D kot {{count}} leti",
      few: "ve\u010D kot {{count}} leta",
      other: "ve\u010D kot {{count}} let"
    },
    past: {
      one: "ve\u010D kot {{count}} letom",
      two: "ve\u010D kot {{count}} letoma",
      few: "ve\u010D kot {{count}} leti",
      other: "ve\u010D kot {{count}} leti"
    },
    future: {
      one: "ve\u010D kot {{count}} leto",
      two: "ve\u010D kot {{count}} leti",
      few: "ve\u010D kot {{count}} leta",
      other: "ve\u010D kot {{count}} let"
    }
  },
  almostXYears: {
    present: {
      one: "skoraj {{count}} leto",
      two: "skoraj {{count}} leti",
      few: "skoraj {{count}} leta",
      other: "skoraj {{count}} let"
    },
    past: {
      one: "skoraj {{count}} letom",
      two: "skoraj {{count}} letoma",
      few: "skoraj {{count}} leti",
      other: "skoraj {{count}} leti"
    },
    future: {
      one: "skoraj {{count}} leto",
      two: "skoraj {{count}} leti",
      few: "skoraj {{count}} leta",
      other: "skoraj {{count}} let"
    }
  }
};
var formatDistance = function formatDistance(token, count, options) {
  var result = "";
  var tense = "present";
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      tense = "future";
      result = "\u010Dez ";
    } else {
      tense = "past";
      result = "pred ";
    }
  }
  var tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === "string") {
    result += tokenValue;
  } else {
    var form = getFormFromCount(count);
    if (isPluralType(tokenValue)) {
      result += tokenValue[form].replace("{{count}}", String(count));
    } else {
      result += tokenValue[tense][form].replace("{{count}}", String(count));
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

// lib/locale/sl/_lib/formatLong.js
var dateFormats = {
  full: "EEEE, dd. MMMM y",
  long: "dd. MMMM y",
  medium: "d. MMM y",
  short: "d. MM. yy"
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

// lib/locale/sl/_lib/formatRelative.js
var formatRelativeLocale = {
  lastWeek: function lastWeek(date) {
    var day = date.getDay();
    switch (day) {
      case 0:
        return "'prej\u0161njo nedeljo ob' p";
      case 3:
        return "'prej\u0161njo sredo ob' p";
      case 6:
        return "'prej\u0161njo soboto ob' p";
      default:
        return "'prej\u0161nji' EEEE 'ob' p";
    }
  },
  yesterday: "'v\u010Deraj ob' p",
  today: "'danes ob' p",
  tomorrow: "'jutri ob' p",
  nextWeek: function nextWeek(date) {
    var day = date.getDay();
    switch (day) {
      case 0:
        return "'naslednjo nedeljo ob' p";
      case 3:
        return "'naslednjo sredo ob' p";
      case 6:
        return "'naslednjo soboto ob' p";
      default:
        return "'naslednji' EEEE 'ob' p";
    }
  },
  other: "P"
};
var formatRelative = function formatRelative(token, date, _baseDate, _options) {
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

// lib/locale/sl/_lib/localize.js
var eraValues = {
  narrow: ["pr. n. \u0161t.", "po n. \u0161t."],
  abbreviated: ["pr. n. \u0161t.", "po n. \u0161t."],
  wide: ["pred na\u0161im \u0161tetjem", "po na\u0161em \u0161tetju"]
};
var quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["1. \u010Det.", "2. \u010Det.", "3. \u010Det.", "4. \u010Det."],
  wide: ["1. \u010Detrtletje", "2. \u010Detrtletje", "3. \u010Detrtletje", "4. \u010Detrtletje"]
};
var monthValues = {
  narrow: ["j", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"],
  abbreviated: [
  "jan.",
  "feb.",
  "mar.",
  "apr.",
  "maj",
  "jun.",
  "jul.",
  "avg.",
  "sep.",
  "okt.",
  "nov.",
  "dec."],

  wide: [
  "januar",
  "februar",
  "marec",
  "april",
  "maj",
  "junij",
  "julij",
  "avgust",
  "september",
  "oktober",
  "november",
  "december"]

};
var dayValues = {
  narrow: ["n", "p", "t", "s", "\u010D", "p", "s"],
  short: ["ned.", "pon.", "tor.", "sre.", "\u010Det.", "pet.", "sob."],
  abbreviated: ["ned.", "pon.", "tor.", "sre.", "\u010Det.", "pet.", "sob."],
  wide: [
  "nedelja",
  "ponedeljek",
  "torek",
  "sreda",
  "\u010Detrtek",
  "petek",
  "sobota"]

};
var dayPeriodValues = {
  narrow: {
    am: "d",
    pm: "p",
    midnight: "24.00",
    noon: "12.00",
    morning: "j",
    afternoon: "p",
    evening: "v",
    night: "n"
  },
  abbreviated: {
    am: "dop.",
    pm: "pop.",
    midnight: "poln.",
    noon: "pold.",
    morning: "jut.",
    afternoon: "pop.",
    evening: "ve\u010D.",
    night: "no\u010D"
  },
  wide: {
    am: "dop.",
    pm: "pop.",
    midnight: "polno\u010D",
    noon: "poldne",
    morning: "jutro",
    afternoon: "popoldne",
    evening: "ve\u010Der",
    night: "no\u010D"
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: "d",
    pm: "p",
    midnight: "24.00",
    noon: "12.00",
    morning: "zj",
    afternoon: "p",
    evening: "zv",
    night: "po"
  },
  abbreviated: {
    am: "dop.",
    pm: "pop.",
    midnight: "opoln.",
    noon: "opold.",
    morning: "zjut.",
    afternoon: "pop.",
    evening: "zve\u010D.",
    night: "pono\u010Di"
  },
  wide: {
    am: "dop.",
    pm: "pop.",
    midnight: "opolno\u010Di",
    noon: "opoldne",
    morning: "zjutraj",
    afternoon: "popoldan",
    evening: "zve\u010Der",
    night: "pono\u010Di"
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

// lib/locale/sl/_lib/match.js
var matchOrdinalNumberPattern = /^(\d+)\./i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  abbreviated: /^(pr\. n\. št\.|po n\. št\.)/i,
  wide: /^(pred Kristusom|pred na[sš]im [sš]tetjem|po Kristusu|po na[sš]em [sš]tetju|na[sš]ega [sš]tetja)/i
};
var parseEraPatterns = {
  any: [/^pr/i, /^(po|na[sš]em)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^[1234]\.\s?[čc]et\.?/i,
  wide: /^[1234]\. [čc]etrtletje/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan\.|feb\.|mar\.|apr\.|maj|jun\.|jul\.|avg\.|sep\.|okt\.|nov\.|dec\.)/i,
  wide: /^(januar|februar|marec|april|maj|junij|julij|avgust|september|oktober|november|december)/i
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

  abbreviated: [
  /^ja/i,
  /^fe/i,
  /^mar/i,
  /^ap/i,
  /^maj/i,
  /^jun/i,
  /^jul/i,
  /^av/i,
  /^s/i,
  /^o/i,
  /^n/i,
  /^d/i],

  wide: [
  /^ja/i,
  /^fe/i,
  /^mar/i,
  /^ap/i,
  /^maj/i,
  /^jun/i,
  /^jul/i,
  /^av/i,
  /^s/i,
  /^o/i,
  /^n/i,
  /^d/i]

};
var matchDayPatterns = {
  narrow: /^[nptsčc]/i,
  short: /^(ned\.|pon\.|tor\.|sre\.|[cč]et\.|pet\.|sob\.)/i,
  abbreviated: /^(ned\.|pon\.|tor\.|sre\.|[cč]et\.|pet\.|sob\.)/i,
  wide: /^(nedelja|ponedeljek|torek|sreda|[cč]etrtek|petek|sobota)/i
};
var parseDayPatterns = {
  narrow: [/^n/i, /^p/i, /^t/i, /^s/i, /^[cč]/i, /^p/i, /^s/i],
  any: [/^n/i, /^po/i, /^t/i, /^sr/i, /^[cč]/i, /^pe/i, /^so/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(d|po?|z?v|n|z?j|24\.00|12\.00)/i,
  any: /^(dop\.|pop\.|o?poln(\.|o[cč]i?)|o?pold(\.|ne)|z?ve[cč](\.|er)|(po)?no[cč]i?|popold(ne|an)|jut(\.|ro)|zjut(\.|raj))/i
};
var parseDayPeriodPatterns = {
  narrow: {
    am: /^d/i,
    pm: /^p/i,
    midnight: /^24/i,
    noon: /^12/i,
    morning: /^(z?j)/i,
    afternoon: /^p/i,
    evening: /^(z?v)/i,
    night: /^(n|po)/i
  },
  any: {
    am: /^dop\./i,
    pm: /^pop\./i,
    midnight: /^o?poln/i,
    noon: /^o?pold/i,
    morning: /j/i,
    afternoon: /^pop\./i,
    evening: /^z?ve/i,
    night: /(po)?no/i
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
    defaultParseWidth: "wide"
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

// lib/locale/sl.js
var sl = {
  code: "sl",
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

// lib/locale/sl/cdn.js
window.dateFns = _objectSpread(_objectSpread({},
window.dateFns), {}, {
  locale: _objectSpread(_objectSpread({}, (_window$dateFns =
  window.dateFns) === null || _window$dateFns === void 0 ? void 0 : _window$dateFns.locale), {}, {
    sl: sl }) });



//# debugId=2E2BB7293682F67664756E2164756E21

//# sourceMappingURL=cdn.js.map
})();