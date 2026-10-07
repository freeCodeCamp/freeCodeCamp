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

// lib/locale/et/_lib/formatDistance.js
var formatDistanceLocale = {
  lessThanXSeconds: {
    standalone: {
      one: "v\xE4hem kui \xFCks sekund",
      other: "v\xE4hem kui {{count}} sekundit"
    },
    withPreposition: {
      one: "v\xE4hem kui \xFChe sekundi",
      other: "v\xE4hem kui {{count}} sekundi"
    }
  },
  xSeconds: {
    standalone: {
      one: "\xFCks sekund",
      other: "{{count}} sekundit"
    },
    withPreposition: {
      one: "\xFChe sekundi",
      other: "{{count}} sekundi"
    }
  },
  halfAMinute: {
    standalone: "pool minutit",
    withPreposition: "poole minuti"
  },
  lessThanXMinutes: {
    standalone: {
      one: "v\xE4hem kui \xFCks minut",
      other: "v\xE4hem kui {{count}} minutit"
    },
    withPreposition: {
      one: "v\xE4hem kui \xFChe minuti",
      other: "v\xE4hem kui {{count}} minuti"
    }
  },
  xMinutes: {
    standalone: {
      one: "\xFCks minut",
      other: "{{count}} minutit"
    },
    withPreposition: {
      one: "\xFChe minuti",
      other: "{{count}} minuti"
    }
  },
  aboutXHours: {
    standalone: {
      one: "umbes \xFCks tund",
      other: "umbes {{count}} tundi"
    },
    withPreposition: {
      one: "umbes \xFChe tunni",
      other: "umbes {{count}} tunni"
    }
  },
  xHours: {
    standalone: {
      one: "\xFCks tund",
      other: "{{count}} tundi"
    },
    withPreposition: {
      one: "\xFChe tunni",
      other: "{{count}} tunni"
    }
  },
  xDays: {
    standalone: {
      one: "\xFCks p\xE4ev",
      other: "{{count}} p\xE4eva"
    },
    withPreposition: {
      one: "\xFChe p\xE4eva",
      other: "{{count}} p\xE4eva"
    }
  },
  aboutXWeeks: {
    standalone: {
      one: "umbes \xFCks n\xE4dal",
      other: "umbes {{count}} n\xE4dalat"
    },
    withPreposition: {
      one: "umbes \xFChe n\xE4dala",
      other: "umbes {{count}} n\xE4dala"
    }
  },
  xWeeks: {
    standalone: {
      one: "\xFCks n\xE4dal",
      other: "{{count}} n\xE4dalat"
    },
    withPreposition: {
      one: "\xFChe n\xE4dala",
      other: "{{count}} n\xE4dala"
    }
  },
  aboutXMonths: {
    standalone: {
      one: "umbes \xFCks kuu",
      other: "umbes {{count}} kuud"
    },
    withPreposition: {
      one: "umbes \xFChe kuu",
      other: "umbes {{count}} kuu"
    }
  },
  xMonths: {
    standalone: {
      one: "\xFCks kuu",
      other: "{{count}} kuud"
    },
    withPreposition: {
      one: "\xFChe kuu",
      other: "{{count}} kuu"
    }
  },
  aboutXYears: {
    standalone: {
      one: "umbes \xFCks aasta",
      other: "umbes {{count}} aastat"
    },
    withPreposition: {
      one: "umbes \xFChe aasta",
      other: "umbes {{count}} aasta"
    }
  },
  xYears: {
    standalone: {
      one: "\xFCks aasta",
      other: "{{count}} aastat"
    },
    withPreposition: {
      one: "\xFChe aasta",
      other: "{{count}} aasta"
    }
  },
  overXYears: {
    standalone: {
      one: "rohkem kui \xFCks aasta",
      other: "rohkem kui {{count}} aastat"
    },
    withPreposition: {
      one: "rohkem kui \xFChe aasta",
      other: "rohkem kui {{count}} aasta"
    }
  },
  almostXYears: {
    standalone: {
      one: "peaaegu \xFCks aasta",
      other: "peaaegu {{count}} aastat"
    },
    withPreposition: {
      one: "peaaegu \xFChe aasta",
      other: "peaaegu {{count}} aasta"
    }
  }
};
var formatDistance = function formatDistance(token, count, options) {
  var usageGroup = options !== null && options !== void 0 && options.addSuffix ? formatDistanceLocale[token].withPreposition : formatDistanceLocale[token].standalone;
  var result;
  if (typeof usageGroup === "string") {
    result = usageGroup;
  } else if (count === 1) {
    result = usageGroup.one;
  } else {
    result = usageGroup.other.replace("{{count}}", String(count));
  }
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return result + " p\xE4rast";
    } else {
      return result + " eest";
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

// lib/locale/et/_lib/formatLong.js
var dateFormats = {
  full: "EEEE, d. MMMM y",
  long: "d. MMMM y",
  medium: "d. MMM y",
  short: "dd.MM.y"
};
var timeFormats = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
};
var dateTimeFormats = {
  full: "{{date}} 'kell' {{time}}",
  long: "{{date}} 'kell' {{time}}",
  medium: "{{date}}. {{time}}",
  short: "{{date}}. {{time}}"
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

// lib/locale/et/_lib/formatRelative.js
var formatRelativeLocale = {
  lastWeek: "'eelmine' eeee 'kell' p",
  yesterday: "'eile kell' p",
  today: "'t\xE4na kell' p",
  tomorrow: "'homme kell' p",
  nextWeek: "'j\xE4rgmine' eeee 'kell' p",
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

// lib/locale/et/_lib/localize.js
var eraValues = {
  narrow: ["e.m.a", "m.a.j"],
  abbreviated: ["e.m.a", "m.a.j"],
  wide: ["enne meie ajaarvamist", "meie ajaarvamise j\xE4rgi"]
};
var quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["K1", "K2", "K3", "K4"],
  wide: ["1. kvartal", "2. kvartal", "3. kvartal", "4. kvartal"]
};
var monthValues = {
  narrow: ["J", "V", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
  "jaan",
  "veebr",
  "m\xE4rts",
  "apr",
  "mai",
  "juuni",
  "juuli",
  "aug",
  "sept",
  "okt",
  "nov",
  "dets"],

  wide: [
  "jaanuar",
  "veebruar",
  "m\xE4rts",
  "aprill",
  "mai",
  "juuni",
  "juuli",
  "august",
  "september",
  "oktoober",
  "november",
  "detsember"]

};
var dayValues = {
  narrow: ["P", "E", "T", "K", "N", "R", "L"],
  short: ["P", "E", "T", "K", "N", "R", "L"],
  abbreviated: [
  "p\xFChap.",
  "esmasp.",
  "teisip.",
  "kolmap.",
  "neljap.",
  "reede.",
  "laup."],

  wide: [
  "p\xFChap\xE4ev",
  "esmasp\xE4ev",
  "teisip\xE4ev",
  "kolmap\xE4ev",
  "neljap\xE4ev",
  "reede",
  "laup\xE4ev"]

};
var dayPeriodValues = {
  narrow: {
    am: "AM",
    pm: "PM",
    midnight: "kesk\xF6\xF6",
    noon: "keskp\xE4ev",
    morning: "hommik",
    afternoon: "p\xE4rastl\xF5una",
    evening: "\xF5htu",
    night: "\xF6\xF6"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "kesk\xF6\xF6",
    noon: "keskp\xE4ev",
    morning: "hommik",
    afternoon: "p\xE4rastl\xF5una",
    evening: "\xF5htu",
    night: "\xF6\xF6"
  },
  wide: {
    am: "AM",
    pm: "PM",
    midnight: "kesk\xF6\xF6",
    noon: "keskp\xE4ev",
    morning: "hommik",
    afternoon: "p\xE4rastl\xF5una",
    evening: "\xF5htu",
    night: "\xF6\xF6"
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: "AM",
    pm: "PM",
    midnight: "kesk\xF6\xF6l",
    noon: "keskp\xE4eval",
    morning: "hommikul",
    afternoon: "p\xE4rastl\xF5unal",
    evening: "\xF5htul",
    night: "\xF6\xF6sel"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "kesk\xF6\xF6l",
    noon: "keskp\xE4eval",
    morning: "hommikul",
    afternoon: "p\xE4rastl\xF5unal",
    evening: "\xF5htul",
    night: "\xF6\xF6sel"
  },
  wide: {
    am: "AM",
    pm: "PM",
    midnight: "kesk\xF6\xF6l",
    noon: "keskp\xE4eval",
    morning: "hommikul",
    afternoon: "p\xE4rastl\xF5unal",
    evening: "\xF5htul",
    night: "\xF6\xF6sel"
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
    formattingValues: monthValues,
    defaultFormattingWidth: "wide"
  }),
  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: "wide",
    formattingValues: dayValues,
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

// lib/locale/et/_lib/match.js
var matchOrdinalNumberPattern = /^\d+\./i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(e\.m\.a|m\.a\.j|eKr|pKr)/i,
  abbreviated: /^(e\.m\.a|m\.a\.j|eKr|pKr)/i,
  wide: /^(enne meie ajaarvamist|meie ajaarvamise järgi|enne Kristust|pärast Kristust)/i
};
var parseEraPatterns = {
  any: [/^e/i, /^(m|p)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^K[1234]/i,
  wide: /^[1234](\.)? kvartal/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jvmasond]/i,
  abbreviated: /^(jaan|veebr|märts|apr|mai|juuni|juuli|aug|sept|okt|nov|dets)/i,
  wide: /^(jaanuar|veebruar|märts|aprill|mai|juuni|juuli|august|september|oktoober|november|detsember)/i
};
var parseMonthPatterns = {
  narrow: [
  /^j/i,
  /^v/i,
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
  /^v/i,
  /^mär/i,
  /^ap/i,
  /^mai/i,
  /^juun/i,
  /^juul/i,
  /^au/i,
  /^s/i,
  /^o/i,
  /^n/i,
  /^d/i]

};
var matchDayPatterns = {
  narrow: /^[petknrl]/i,
  short: /^[petknrl]/i,
  abbreviated: /^(püh?|esm?|tei?|kolm?|nel?|ree?|laup?)\.?/i,
  wide: /^(pühapäev|esmaspäev|teisipäev|kolmapäev|neljapäev|reede|laupäev)/i
};
var parseDayPatterns = {
  any: [/^p/i, /^e/i, /^t/i, /^k/i, /^n/i, /^r/i, /^l/i]
};
var matchDayPeriodPatterns = {
  any: /^(am|pm|keskööl?|keskpäev(al)?|hommik(ul)?|pärastlõunal?|õhtul?|öö(sel)?)/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^keskö/i,
    noon: /^keskp/i,
    morning: /hommik/i,
    afternoon: /pärastlõuna/i,
    evening: /õhtu/i,
    night: /öö/i
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

// lib/locale/et.js
var et = {
  code: "et",
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

// lib/locale/et/cdn.js
window.dateFns = _objectSpread(_objectSpread({},
window.dateFns), {}, {
  locale: _objectSpread(_objectSpread({}, (_window$dateFns =
  window.dateFns) === null || _window$dateFns === void 0 ? void 0 : _window$dateFns.locale), {}, {
    et: et }) });



//# debugId=6B2AC2413AC3C80264756E2164756E21

//# sourceMappingURL=cdn.js.map
})();