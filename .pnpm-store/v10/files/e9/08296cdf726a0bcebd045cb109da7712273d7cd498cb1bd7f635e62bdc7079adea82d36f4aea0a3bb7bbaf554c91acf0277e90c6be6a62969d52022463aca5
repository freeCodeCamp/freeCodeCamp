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

// lib/locale/lb/_lib/formatDistance.js
function isFinalNNeeded(nextWords) {
  var firstLetter = nextWords.charAt(0).toLowerCase();
  if (VOWELS.indexOf(firstLetter) != -1 || EXCEPTION_CONSONANTS.indexOf(firstLetter) != -1) {
    return true;
  }
  var firstWord = nextWords.split(" ")[0];
  var number = parseInt(firstWord);
  if (!isNaN(number) && DIGITS_SPOKEN_N_NEEDED.indexOf(number % 10) != -1 && FIRST_TWO_DIGITS_SPOKEN_NO_N_NEEDED.indexOf(parseInt(firstWord.substring(0, 2))) == -1) {
    return true;
  }
  return false;
}
var formatDistanceLocale = {
  lessThanXSeconds: {
    standalone: {
      one: "manner w\xE9i eng Sekonn",
      other: "manner w\xE9i {{count}} Sekonnen"
    },
    withPreposition: {
      one: "manner w\xE9i enger Sekonn",
      other: "manner w\xE9i {{count}} Sekonnen"
    }
  },
  xSeconds: {
    standalone: {
      one: "eng Sekonn",
      other: "{{count}} Sekonnen"
    },
    withPreposition: {
      one: "enger Sekonn",
      other: "{{count}} Sekonnen"
    }
  },
  halfAMinute: {
    standalone: "eng hallef Minutt",
    withPreposition: "enger hallwer Minutt"
  },
  lessThanXMinutes: {
    standalone: {
      one: "manner w\xE9i eng Minutt",
      other: "manner w\xE9i {{count}} Minutten"
    },
    withPreposition: {
      one: "manner w\xE9i enger Minutt",
      other: "manner w\xE9i {{count}} Minutten"
    }
  },
  xMinutes: {
    standalone: {
      one: "eng Minutt",
      other: "{{count}} Minutten"
    },
    withPreposition: {
      one: "enger Minutt",
      other: "{{count}} Minutten"
    }
  },
  aboutXHours: {
    standalone: {
      one: "ongef\xE9ier eng Stonn",
      other: "ongef\xE9ier {{count}} Stonnen"
    },
    withPreposition: {
      one: "ongef\xE9ier enger Stonn",
      other: "ongef\xE9ier {{count}} Stonnen"
    }
  },
  xHours: {
    standalone: {
      one: "eng Stonn",
      other: "{{count}} Stonnen"
    },
    withPreposition: {
      one: "enger Stonn",
      other: "{{count}} Stonnen"
    }
  },
  xDays: {
    standalone: {
      one: "een Dag",
      other: "{{count}} Deeg"
    },
    withPreposition: {
      one: "engem Dag",
      other: "{{count}} Deeg"
    }
  },
  aboutXWeeks: {
    standalone: {
      one: "ongef\xE9ier eng Woch",
      other: "ongef\xE9ier {{count}} Wochen"
    },
    withPreposition: {
      one: "ongef\xE9ier enger Woche",
      other: "ongef\xE9ier {{count}} Wochen"
    }
  },
  xWeeks: {
    standalone: {
      one: "eng Woch",
      other: "{{count}} Wochen"
    },
    withPreposition: {
      one: "enger Woch",
      other: "{{count}} Wochen"
    }
  },
  aboutXMonths: {
    standalone: {
      one: "ongef\xE9ier ee Mount",
      other: "ongef\xE9ier {{count}} M\xE9int"
    },
    withPreposition: {
      one: "ongef\xE9ier engem Mount",
      other: "ongef\xE9ier {{count}} M\xE9int"
    }
  },
  xMonths: {
    standalone: {
      one: "ee Mount",
      other: "{{count}} M\xE9int"
    },
    withPreposition: {
      one: "engem Mount",
      other: "{{count}} M\xE9int"
    }
  },
  aboutXYears: {
    standalone: {
      one: "ongef\xE9ier ee Joer",
      other: "ongef\xE9ier {{count}} Joer"
    },
    withPreposition: {
      one: "ongef\xE9ier engem Joer",
      other: "ongef\xE9ier {{count}} Joer"
    }
  },
  xYears: {
    standalone: {
      one: "ee Joer",
      other: "{{count}} Joer"
    },
    withPreposition: {
      one: "engem Joer",
      other: "{{count}} Joer"
    }
  },
  overXYears: {
    standalone: {
      one: "m\xE9i w\xE9i ee Joer",
      other: "m\xE9i w\xE9i {{count}} Joer"
    },
    withPreposition: {
      one: "m\xE9i w\xE9i engem Joer",
      other: "m\xE9i w\xE9i {{count}} Joer"
    }
  },
  almostXYears: {
    standalone: {
      one: "bal ee Joer",
      other: "bal {{count}} Joer"
    },
    withPreposition: {
      one: "bal engem Joer",
      other: "bal {{count}} Joer"
    }
  }
};
var EXCEPTION_CONSONANTS = ["d", "h", "n", "t", "z"];
var VOWELS = ["a,", "e", "i", "o", "u"];
var DIGITS_SPOKEN_N_NEEDED = [0, 1, 2, 3, 8, 9];
var FIRST_TWO_DIGITS_SPOKEN_NO_N_NEEDED = [40, 50, 60, 70];
var formatDistance = function formatDistance(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];
  var usageGroup = options !== null && options !== void 0 && options.addSuffix ? tokenValue.withPreposition : tokenValue.standalone;
  if (typeof usageGroup === "string") {
    result = usageGroup;
  } else if (count === 1) {
    result = usageGroup.one;
  } else {
    result = usageGroup.other.replace("{{count}}", String(count));
  }
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return "a" + (isFinalNNeeded(result) ? "n" : "") + " " + result;
    } else {
      return "viru" + (isFinalNNeeded(result) ? "n" : "") + " " + result;
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

// lib/locale/lb/_lib/formatLong.js
var dateFormats = {
  full: "EEEE, do MMMM y",
  long: "do MMMM y",
  medium: "do MMM y",
  short: "dd.MM.yy"
};
var timeFormats = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
};
var dateTimeFormats = {
  full: "{{date}} 'um' {{time}}",
  long: "{{date}} 'um' {{time}}",
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

// lib/locale/lb/_lib/formatRelative.js
var formatRelativeLocale = {
  lastWeek: function lastWeek(date) {
    var day = date.getDay();
    var result = "'l\xE4schte";
    if (day === 2 || day === 4) {
      result += "n";
    }
    result += "' eeee 'um' p";
    return result;
  },
  yesterday: "'g\xEBschter um' p",
  today: "'haut um' p",
  tomorrow: "'moien um' p",
  nextWeek: "eeee 'um' p",
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

// lib/locale/lb/_lib/localize.js
var eraValues = {
  narrow: ["v.Chr.", "n.Chr."],
  abbreviated: ["v.Chr.", "n.Chr."],
  wide: ["viru Christus", "no Christus"]
};
var quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1. Quartal", "2. Quartal", "3. Quartal", "4. Quartal"]
};
var monthValues = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
  "Jan",
  "Feb",
  "M\xE4e",
  "Abr",
  "Mee",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Okt",
  "Nov",
  "Dez"],

  wide: [
  "Januar",
  "Februar",
  "M\xE4erz",
  "Abr\xEBll",
  "Mee",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Dezember"]

};
var dayValues = {
  narrow: ["S", "M", "D", "M", "D", "F", "S"],
  short: ["So", "M\xE9", "D\xEB", "M\xEB", "Do", "Fr", "Sa"],
  abbreviated: ["So.", "M\xE9.", "D\xEB.", "M\xEB.", "Do.", "Fr.", "Sa."],
  wide: [
  "Sonndeg",
  "M\xE9indeg",
  "D\xEBnschdeg",
  "M\xEBttwoch",
  "Donneschdeg",
  "Freideg",
  "Samschdeg"]

};
var dayPeriodValues = {
  narrow: {
    am: "mo.",
    pm: "nom\xEB.",
    midnight: "M\xEBtternuecht",
    noon: "M\xEBtteg",
    morning: "Moien",
    afternoon: "Nom\xEBtteg",
    evening: "Owend",
    night: "Nuecht"
  },
  abbreviated: {
    am: "moies",
    pm: "nom\xEBttes",
    midnight: "M\xEBtternuecht",
    noon: "M\xEBtteg",
    morning: "Moien",
    afternoon: "Nom\xEBtteg",
    evening: "Owend",
    night: "Nuecht"
  },
  wide: {
    am: "moies",
    pm: "nom\xEBttes",
    midnight: "M\xEBtternuecht",
    noon: "M\xEBtteg",
    morning: "Moien",
    afternoon: "Nom\xEBtteg",
    evening: "Owend",
    night: "Nuecht"
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: "mo.",
    pm: "nom.",
    midnight: "M\xEBtternuecht",
    noon: "m\xEBttes",
    morning: "moies",
    afternoon: "nom\xEBttes",
    evening: "owes",
    night: "nuets"
  },
  abbreviated: {
    am: "moies",
    pm: "nom\xEBttes",
    midnight: "M\xEBtternuecht",
    noon: "m\xEBttes",
    morning: "moies",
    afternoon: "nom\xEBttes",
    evening: "owes",
    night: "nuets"
  },
  wide: {
    am: "moies",
    pm: "nom\xEBttes",
    midnight: "M\xEBtternuecht",
    noon: "m\xEBttes",
    morning: "moies",
    afternoon: "nom\xEBttes",
    evening: "owes",
    night: "nuets"
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

// lib/locale/lb/_lib/match.js
var matchOrdinalNumberPattern = /^(\d+)(\.)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,
  abbreviated: /^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,
  wide: /^(viru Christus|virun eiser Zäitrechnung|no Christus|eiser Zäitrechnung)/i
};
var parseEraPatterns = {
  any: [/^v/i, /^n/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](\.)? Quartal/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mäe|abr|mee|jun|jul|aug|sep|okt|nov|dez)/i,
  wide: /^(januar|februar|mäerz|abrëll|mee|juni|juli|august|september|oktober|november|dezember)/i
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
  /^mä/i,
  /^ab/i,
  /^me/i,
  /^jun/i,
  /^jul/i,
  /^au/i,
  /^s/i,
  /^o/i,
  /^n/i,
  /^d/i]

};
var matchDayPatterns = {
  narrow: /^[smdf]/i,
  short: /^(so|mé|dë|më|do|fr|sa)/i,
  abbreviated: /^(son?|méi?|dën?|mët?|don?|fre?|sam?)\.?/i,
  wide: /^(sonndeg|méindeg|dënschdeg|mëttwoch|donneschdeg|freideg|samschdeg)/i
};
var parseDayPatterns = {
  any: [/^so/i, /^mé/i, /^dë/i, /^më/i, /^do/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(mo\.?|nomë\.?|Mëtternuecht|mëttes|moies|nomëttes|owes|nuets)/i,
  abbreviated: /^(moi\.?|nomët\.?|Mëtternuecht|mëttes|moies|nomëttes|owes|nuets)/i,
  wide: /^(moies|nomëttes|Mëtternuecht|mëttes|moies|nomëttes|owes|nuets)/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^m/i,
    pm: /^n/i,
    midnight: /^Mëtter/i,
    noon: /^mëttes/i,
    morning: /moies/i,
    afternoon: /nomëttes/i,
    evening: /owes/i,
    night: /nuets/i
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
    defaultMatchWidth: "wide",
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: "any"
  })
};

// lib/locale/lb.js
var lb = {
  code: "lb",
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

// lib/locale/lb/cdn.js
window.dateFns = _objectSpread(_objectSpread({},
window.dateFns), {}, {
  locale: _objectSpread(_objectSpread({}, (_window$dateFns =
  window.dateFns) === null || _window$dateFns === void 0 ? void 0 : _window$dateFns.locale), {}, {
    lb: lb }) });



//# debugId=033CECD668028B5D64756E2164756E21

//# sourceMappingURL=cdn.js.map
})();