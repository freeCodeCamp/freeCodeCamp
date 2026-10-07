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

// lib/locale/hi/_lib/localize.js
function localeToNumber(locale) {
  var enNumber = locale.toString().replace(/[१२३४५६७८९०]/g, function (match) {
    return numberValues.number[match];
  });
  return Number(enNumber);
}
function numberToLocale(enNumber) {
  return enNumber.toString().replace(/\d/g, function (match) {
    return numberValues.locale[match];
  });
}
var numberValues = {
  locale: {
    1: "\u0967",
    2: "\u0968",
    3: "\u0969",
    4: "\u096A",
    5: "\u096B",
    6: "\u096C",
    7: "\u096D",
    8: "\u096E",
    9: "\u096F",
    0: "\u0966"
  },
  number: {
    "\u0967": "1",
    "\u0968": "2",
    "\u0969": "3",
    "\u096A": "4",
    "\u096B": "5",
    "\u096C": "6",
    "\u096D": "7",
    "\u096E": "8",
    "\u096F": "9",
    "\u0966": "0"
  }
};
var eraValues = {
  narrow: ["\u0908\u0938\u093E-\u092A\u0942\u0930\u094D\u0935", "\u0908\u0938\u094D\u0935\u0940"],
  abbreviated: ["\u0908\u0938\u093E-\u092A\u0942\u0930\u094D\u0935", "\u0908\u0938\u094D\u0935\u0940"],
  wide: ["\u0908\u0938\u093E-\u092A\u0942\u0930\u094D\u0935", "\u0908\u0938\u0935\u0940 \u0938\u0928"]
};
var quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["\u0924\u093F1", "\u0924\u093F2", "\u0924\u093F3", "\u0924\u093F4"],
  wide: ["\u092A\u0939\u0932\u0940 \u0924\u093F\u092E\u093E\u0939\u0940", "\u0926\u0942\u0938\u0930\u0940 \u0924\u093F\u092E\u093E\u0939\u0940", "\u0924\u0940\u0938\u0930\u0940 \u0924\u093F\u092E\u093E\u0939\u0940", "\u091A\u094C\u0925\u0940 \u0924\u093F\u092E\u093E\u0939\u0940"]
};
var monthValues = {
  narrow: [
  "\u091C",
  "\u092B\u093C",
  "\u092E\u093E",
  "\u0905",
  "\u092E\u0908",
  "\u091C\u0942",
  "\u091C\u0941",
  "\u0905\u0917",
  "\u0938\u093F",
  "\u0905\u0915\u094D\u091F\u0942",
  "\u0928",
  "\u0926\u093F"],

  abbreviated: [
  "\u091C\u0928",
  "\u092B\u093C\u0930",
  "\u092E\u093E\u0930\u094D\u091A",
  "\u0905\u092A\u094D\u0930\u0948\u0932",
  "\u092E\u0908",
  "\u091C\u0942\u0928",
  "\u091C\u0941\u0932",
  "\u0905\u0917",
  "\u0938\u093F\u0924",
  "\u0905\u0915\u094D\u091F\u0942",
  "\u0928\u0935",
  "\u0926\u093F\u0938"],

  wide: [
  "\u091C\u0928\u0935\u0930\u0940",
  "\u092B\u093C\u0930\u0935\u0930\u0940",
  "\u092E\u093E\u0930\u094D\u091A",
  "\u0905\u092A\u094D\u0930\u0948\u0932",
  "\u092E\u0908",
  "\u091C\u0942\u0928",
  "\u091C\u0941\u0932\u093E\u0908",
  "\u0905\u0917\u0938\u094D\u0924",
  "\u0938\u093F\u0924\u0902\u092C\u0930",
  "\u0905\u0915\u094D\u091F\u0942\u092C\u0930",
  "\u0928\u0935\u0902\u092C\u0930",
  "\u0926\u093F\u0938\u0902\u092C\u0930"]

};
var dayValues = {
  narrow: ["\u0930", "\u0938\u094B", "\u092E\u0902", "\u092C\u0941", "\u0917\u0941", "\u0936\u0941", "\u0936"],
  short: ["\u0930", "\u0938\u094B", "\u092E\u0902", "\u092C\u0941", "\u0917\u0941", "\u0936\u0941", "\u0936"],
  abbreviated: ["\u0930\u0935\u093F", "\u0938\u094B\u092E", "\u092E\u0902\u0917\u0932", "\u092C\u0941\u0927", "\u0917\u0941\u0930\u0941", "\u0936\u0941\u0915\u094D\u0930", "\u0936\u0928\u093F"],
  wide: [
  "\u0930\u0935\u093F\u0935\u093E\u0930",
  "\u0938\u094B\u092E\u0935\u093E\u0930",
  "\u092E\u0902\u0917\u0932\u0935\u093E\u0930",
  "\u092C\u0941\u0927\u0935\u093E\u0930",
  "\u0917\u0941\u0930\u0941\u0935\u093E\u0930",
  "\u0936\u0941\u0915\u094D\u0930\u0935\u093E\u0930",
  "\u0936\u0928\u093F\u0935\u093E\u0930"]

};
var dayPeriodValues = {
  narrow: {
    am: "\u092A\u0942\u0930\u094D\u0935\u093E\u0939\u094D\u0928",
    pm: "\u0905\u092A\u0930\u093E\u0939\u094D\u0928",
    midnight: "\u092E\u0927\u094D\u092F\u0930\u093E\u0924\u094D\u0930\u093F",
    noon: "\u0926\u094B\u092A\u0939\u0930",
    morning: "\u0938\u0941\u092C\u0939",
    afternoon: "\u0926\u094B\u092A\u0939\u0930",
    evening: "\u0936\u093E\u092E",
    night: "\u0930\u093E\u0924"
  },
  abbreviated: {
    am: "\u092A\u0942\u0930\u094D\u0935\u093E\u0939\u094D\u0928",
    pm: "\u0905\u092A\u0930\u093E\u0939\u094D\u0928",
    midnight: "\u092E\u0927\u094D\u092F\u0930\u093E\u0924\u094D\u0930\u093F",
    noon: "\u0926\u094B\u092A\u0939\u0930",
    morning: "\u0938\u0941\u092C\u0939",
    afternoon: "\u0926\u094B\u092A\u0939\u0930",
    evening: "\u0936\u093E\u092E",
    night: "\u0930\u093E\u0924"
  },
  wide: {
    am: "\u092A\u0942\u0930\u094D\u0935\u093E\u0939\u094D\u0928",
    pm: "\u0905\u092A\u0930\u093E\u0939\u094D\u0928",
    midnight: "\u092E\u0927\u094D\u092F\u0930\u093E\u0924\u094D\u0930\u093F",
    noon: "\u0926\u094B\u092A\u0939\u0930",
    morning: "\u0938\u0941\u092C\u0939",
    afternoon: "\u0926\u094B\u092A\u0939\u0930",
    evening: "\u0936\u093E\u092E",
    night: "\u0930\u093E\u0924"
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: "\u092A\u0942\u0930\u094D\u0935\u093E\u0939\u094D\u0928",
    pm: "\u0905\u092A\u0930\u093E\u0939\u094D\u0928",
    midnight: "\u092E\u0927\u094D\u092F\u0930\u093E\u0924\u094D\u0930\u093F",
    noon: "\u0926\u094B\u092A\u0939\u0930",
    morning: "\u0938\u0941\u092C\u0939",
    afternoon: "\u0926\u094B\u092A\u0939\u0930",
    evening: "\u0936\u093E\u092E",
    night: "\u0930\u093E\u0924"
  },
  abbreviated: {
    am: "\u092A\u0942\u0930\u094D\u0935\u093E\u0939\u094D\u0928",
    pm: "\u0905\u092A\u0930\u093E\u0939\u094D\u0928",
    midnight: "\u092E\u0927\u094D\u092F\u0930\u093E\u0924\u094D\u0930\u093F",
    noon: "\u0926\u094B\u092A\u0939\u0930",
    morning: "\u0938\u0941\u092C\u0939",
    afternoon: "\u0926\u094B\u092A\u0939\u0930",
    evening: "\u0936\u093E\u092E",
    night: "\u0930\u093E\u0924"
  },
  wide: {
    am: "\u092A\u0942\u0930\u094D\u0935\u093E\u0939\u094D\u0928",
    pm: "\u0905\u092A\u0930\u093E\u0939\u094D\u0928",
    midnight: "\u092E\u0927\u094D\u092F\u0930\u093E\u0924\u094D\u0930\u093F",
    noon: "\u0926\u094B\u092A\u0939\u0930",
    morning: "\u0938\u0941\u092C\u0939",
    afternoon: "\u0926\u094B\u092A\u0939\u0930",
    evening: "\u0936\u093E\u092E",
    night: "\u0930\u093E\u0924"
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
  var number = Number(dirtyNumber);
  return numberToLocale(number);
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

// lib/locale/hi/_lib/formatDistance.js
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: "\u0967 \u0938\u0947\u0915\u0902\u0921 \u0938\u0947 \u0915\u092E",
    other: "{{count}} \u0938\u0947\u0915\u0902\u0921 \u0938\u0947 \u0915\u092E"
  },
  xSeconds: {
    one: "\u0967 \u0938\u0947\u0915\u0902\u0921",
    other: "{{count}} \u0938\u0947\u0915\u0902\u0921"
  },
  halfAMinute: "\u0906\u0927\u093E \u092E\u093F\u0928\u091F",
  lessThanXMinutes: {
    one: "\u0967 \u092E\u093F\u0928\u091F \u0938\u0947 \u0915\u092E",
    other: "{{count}} \u092E\u093F\u0928\u091F \u0938\u0947 \u0915\u092E"
  },
  xMinutes: {
    one: "\u0967 \u092E\u093F\u0928\u091F",
    other: "{{count}} \u092E\u093F\u0928\u091F"
  },
  aboutXHours: {
    one: "\u0932\u0917\u092D\u0917 \u0967 \u0918\u0902\u091F\u093E",
    other: "\u0932\u0917\u092D\u0917 {{count}} \u0918\u0902\u091F\u0947"
  },
  xHours: {
    one: "\u0967 \u0918\u0902\u091F\u093E",
    other: "{{count}} \u0918\u0902\u091F\u0947"
  },
  xDays: {
    one: "\u0967 \u0926\u093F\u0928",
    other: "{{count}} \u0926\u093F\u0928"
  },
  aboutXWeeks: {
    one: "\u0932\u0917\u092D\u0917 \u0967 \u0938\u092A\u094D\u0924\u093E\u0939",
    other: "\u0932\u0917\u092D\u0917 {{count}} \u0938\u092A\u094D\u0924\u093E\u0939"
  },
  xWeeks: {
    one: "\u0967 \u0938\u092A\u094D\u0924\u093E\u0939",
    other: "{{count}} \u0938\u092A\u094D\u0924\u093E\u0939"
  },
  aboutXMonths: {
    one: "\u0932\u0917\u092D\u0917 \u0967 \u092E\u0939\u0940\u0928\u093E",
    other: "\u0932\u0917\u092D\u0917 {{count}} \u092E\u0939\u0940\u0928\u0947"
  },
  xMonths: {
    one: "\u0967 \u092E\u0939\u0940\u0928\u093E",
    other: "{{count}} \u092E\u0939\u0940\u0928\u0947"
  },
  aboutXYears: {
    one: "\u0932\u0917\u092D\u0917 \u0967 \u0935\u0930\u094D\u0937",
    other: "\u0932\u0917\u092D\u0917 {{count}} \u0935\u0930\u094D\u0937"
  },
  xYears: {
    one: "\u0967 \u0935\u0930\u094D\u0937",
    other: "{{count}} \u0935\u0930\u094D\u0937"
  },
  overXYears: {
    one: "\u0967 \u0935\u0930\u094D\u0937 \u0938\u0947 \u0905\u0927\u093F\u0915",
    other: "{{count}} \u0935\u0930\u094D\u0937 \u0938\u0947 \u0905\u0927\u093F\u0915"
  },
  almostXYears: {
    one: "\u0932\u0917\u092D\u0917 \u0967 \u0935\u0930\u094D\u0937",
    other: "\u0932\u0917\u092D\u0917 {{count}} \u0935\u0930\u094D\u0937"
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
    result = tokenValue.other.replace("{{count}}", numberToLocale(count));
  }
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return result + "\u092E\u0947 ";
    } else {
      return result + " \u092A\u0939\u0932\u0947";
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

// lib/locale/hi/_lib/formatLong.js
var dateFormats = {
  full: "EEEE, do MMMM, y",
  long: "do MMMM, y",
  medium: "d MMM, y",
  short: "dd/MM/yyyy"
};
var timeFormats = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
};
var dateTimeFormats = {
  full: "{{date}} '\u0915\u094B' {{time}}",
  long: "{{date}} '\u0915\u094B' {{time}}",
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

// lib/locale/hi/_lib/formatRelative.js
var formatRelativeLocale = {
  lastWeek: "'\u092A\u093F\u091B\u0932\u0947' eeee p",
  yesterday: "'\u0915\u0932' p",
  today: "'\u0906\u091C' p",
  tomorrow: "'\u0915\u0932' p",
  nextWeek: "eeee '\u0915\u094B' p",
  other: "P"
};
var formatRelative = function formatRelative(token, _date, _baseDate, _options) {return formatRelativeLocale[token];};

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

// lib/locale/hi/_lib/match.js
var matchOrdinalNumberPattern = /^[०१२३४५६७८९]+/i;
var parseOrdinalNumberPattern = /^[०१२३४५६७८९]+/i;
var matchEraPatterns = {
  narrow: /^(ईसा-पूर्व|ईस्वी)/i,
  abbreviated: /^(ईसा\.?\s?पूर्व\.?|ईसा\.?)/i,
  wide: /^(ईसा-पूर्व|ईसवी पूर्व|ईसवी सन|ईसवी)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^ति[1234]/i,
  wide: /^[1234](पहली|दूसरी|तीसरी|चौथी)? तिमाही/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[जफ़माअप्मईजूनजुअगसिअक्तनदि]/i,
  abbreviated: /^(जन|फ़र|मार्च|अप्|मई|जून|जुल|अग|सित|अक्तू|नव|दिस)/i,
  wide: /^(जनवरी|फ़रवरी|मार्च|अप्रैल|मई|जून|जुलाई|अगस्त|सितंबर|अक्तूबर|नवंबर|दिसंबर)/i
};
var parseMonthPatterns = {
  narrow: [
  /^ज/i,
  /^फ़/i,
  /^मा/i,
  /^अप्/i,
  /^मई/i,
  /^जू/i,
  /^जु/i,
  /^अग/i,
  /^सि/i,
  /^अक्तू/i,
  /^न/i,
  /^दि/i],

  any: [
  /^जन/i,
  /^फ़/i,
  /^मा/i,
  /^अप्/i,
  /^मई/i,
  /^जू/i,
  /^जु/i,
  /^अग/i,
  /^सि/i,
  /^अक्तू/i,
  /^नव/i,
  /^दिस/i]

};
var matchDayPatterns = {
  narrow: /^[रविसोममंगलबुधगुरुशुक्रशनि]/i,
  short: /^(रवि|सोम|मंगल|बुध|गुरु|शुक्र|शनि)/i,
  abbreviated: /^(रवि|सोम|मंगल|बुध|गुरु|शुक्र|शनि)/i,
  wide: /^(रविवार|सोमवार|मंगलवार|बुधवार|गुरुवार|शुक्रवार|शनिवार)/i
};
var parseDayPatterns = {
  narrow: [/^रवि/i, /^सोम/i, /^मंगल/i, /^बुध/i, /^गुरु/i, /^शुक्र/i, /^शनि/i],
  any: [/^रवि/i, /^सोम/i, /^मंगल/i, /^बुध/i, /^गुरु/i, /^शुक्र/i, /^शनि/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(पू|अ|म|द.\?|सु|दो|शा|रा)/i,
  any: /^(पूर्वाह्न|अपराह्न|म|द.\?|सु|दो|शा|रा)/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^पूर्वाह्न/i,
    pm: /^अपराह्न/i,
    midnight: /^मध्य/i,
    noon: /^दो/i,
    morning: /सु/i,
    afternoon: /दो/i,
    evening: /शा/i,
    night: /रा/i
  }
};
var match = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: localeToNumber
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

// lib/locale/hi.js
var hi = {
  code: "hi",
  formatDistance: formatDistance,
  formatLong: formatLong,
  formatRelative: formatRelative,
  localize: localize,
  match: match,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 4
  }
};

// lib/locale/hi/cdn.js
window.dateFns = _objectSpread(_objectSpread({},
window.dateFns), {}, {
  locale: _objectSpread(_objectSpread({}, (_window$dateFns =
  window.dateFns) === null || _window$dateFns === void 0 ? void 0 : _window$dateFns.locale), {}, {
    hi: hi }) });



//# debugId=FB9B87E9537E0B2B64756E2164756E21

//# sourceMappingURL=cdn.js.map
})();