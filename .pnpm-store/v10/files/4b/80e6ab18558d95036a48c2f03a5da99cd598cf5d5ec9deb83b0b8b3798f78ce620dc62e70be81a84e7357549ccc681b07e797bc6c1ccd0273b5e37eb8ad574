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

// lib/locale/kn/_lib/formatDistance.js
function getResultByTense(parentToken, options) {
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return parentToken.future;
    } else {
      return parentToken.past;
    }
  }
  return parentToken.default;
}
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: {
      default: "1 \u0CB8\u0CC6\u0C95\u0CC6\u0C82\u0CA1\u0CCD\u200C\u0C97\u0CBF\u0C82\u0CA4 \u0C95\u0CA1\u0CBF\u0CAE\u0CC6",
      future: "1 \u0CB8\u0CC6\u0C95\u0CC6\u0C82\u0CA1\u0CCD\u200C\u0C97\u0CBF\u0C82\u0CA4 \u0C95\u0CA1\u0CBF\u0CAE\u0CC6",
      past: "1 \u0CB8\u0CC6\u0C95\u0CC6\u0C82\u0CA1\u0CCD\u200C\u0C97\u0CBF\u0C82\u0CA4 \u0C95\u0CA1\u0CBF\u0CAE\u0CC6"
    },
    other: {
      default: "{{count}} \u0CB8\u0CC6\u0C95\u0CC6\u0C82\u0CA1\u0CCD\u200C\u0C97\u0CBF\u0C82\u0CA4 \u0C95\u0CA1\u0CBF\u0CAE\u0CC6",
      future: "{{count}} \u0CB8\u0CC6\u0C95\u0CC6\u0C82\u0CA1\u0CCD\u200C\u0C97\u0CBF\u0C82\u0CA4 \u0C95\u0CA1\u0CBF\u0CAE\u0CC6",
      past: "{{count}} \u0CB8\u0CC6\u0C95\u0CC6\u0C82\u0CA1\u0CCD\u200C\u0C97\u0CBF\u0C82\u0CA4 \u0C95\u0CA1\u0CBF\u0CAE\u0CC6"
    }
  },
  xSeconds: {
    one: {
      default: "1 \u0CB8\u0CC6\u0C95\u0CC6\u0C82\u0CA1\u0CCD",
      future: "1 \u0CB8\u0CC6\u0C95\u0CC6\u0C82\u0CA1\u0CCD\u200C\u0CA8\u0CB2\u0CCD\u0CB2\u0CBF",
      past: "1 \u0CB8\u0CC6\u0C95\u0CC6\u0C82\u0CA1\u0CCD \u0CB9\u0CBF\u0C82\u0CA6\u0CC6"
    },
    other: {
      default: "{{count}} \u0CB8\u0CC6\u0C95\u0CC6\u0C82\u0CA1\u0CC1\u0C97\u0CB3\u0CC1",
      future: "{{count}} \u0CB8\u0CC6\u0C95\u0CC6\u0C82\u0CA1\u0CCD\u200C\u0C97\u0CB3\u0CB2\u0CCD\u0CB2\u0CBF",
      past: "{{count}} \u0CB8\u0CC6\u0C95\u0CC6\u0C82\u0CA1\u0CCD \u0CB9\u0CBF\u0C82\u0CA6\u0CC6"
    }
  },
  halfAMinute: {
    other: {
      default: "\u0C85\u0CB0\u0CCD\u0CA7 \u0CA8\u0CBF\u0CAE\u0CBF\u0CB7",
      future: "\u0C85\u0CB0\u0CCD\u0CA7 \u0CA8\u0CBF\u0CAE\u0CBF\u0CB7\u0CA6\u0CB2\u0CCD\u0CB2\u0CBF",
      past: "\u0C85\u0CB0\u0CCD\u0CA7 \u0CA8\u0CBF\u0CAE\u0CBF\u0CB7\u0CA6 \u0CB9\u0CBF\u0C82\u0CA6\u0CC6"
    }
  },
  lessThanXMinutes: {
    one: {
      default: "1 \u0CA8\u0CBF\u0CAE\u0CBF\u0CB7\u0C95\u0CCD\u0C95\u0CBF\u0C82\u0CA4 \u0C95\u0CA1\u0CBF\u0CAE\u0CC6",
      future: "1 \u0CA8\u0CBF\u0CAE\u0CBF\u0CB7\u0C95\u0CCD\u0C95\u0CBF\u0C82\u0CA4 \u0C95\u0CA1\u0CBF\u0CAE\u0CC6",
      past: "1 \u0CA8\u0CBF\u0CAE\u0CBF\u0CB7\u0C95\u0CCD\u0C95\u0CBF\u0C82\u0CA4 \u0C95\u0CA1\u0CBF\u0CAE\u0CC6"
    },
    other: {
      default: "{{count}} \u0CA8\u0CBF\u0CAE\u0CBF\u0CB7\u0C95\u0CCD\u0C95\u0CBF\u0C82\u0CA4 \u0C95\u0CA1\u0CBF\u0CAE\u0CC6",
      future: "{{count}} \u0CA8\u0CBF\u0CAE\u0CBF\u0CB7\u0C95\u0CCD\u0C95\u0CBF\u0C82\u0CA4 \u0C95\u0CA1\u0CBF\u0CAE\u0CC6",
      past: "{{count}} \u0CA8\u0CBF\u0CAE\u0CBF\u0CB7\u0C95\u0CCD\u0C95\u0CBF\u0C82\u0CA4 \u0C95\u0CA1\u0CBF\u0CAE\u0CC6"
    }
  },
  xMinutes: {
    one: {
      default: "1 \u0CA8\u0CBF\u0CAE\u0CBF\u0CB7",
      future: "1 \u0CA8\u0CBF\u0CAE\u0CBF\u0CB7\u0CA6\u0CB2\u0CCD\u0CB2\u0CBF",
      past: "1 \u0CA8\u0CBF\u0CAE\u0CBF\u0CB7\u0CA6 \u0CB9\u0CBF\u0C82\u0CA6\u0CC6"
    },
    other: {
      default: "{{count}} \u0CA8\u0CBF\u0CAE\u0CBF\u0CB7\u0C97\u0CB3\u0CC1",
      future: "{{count}} \u0CA8\u0CBF\u0CAE\u0CBF\u0CB7\u0C97\u0CB3\u0CB2\u0CCD\u0CB2\u0CBF",
      past: "{{count}} \u0CA8\u0CBF\u0CAE\u0CBF\u0CB7\u0C97\u0CB3 \u0CB9\u0CBF\u0C82\u0CA6\u0CC6"
    }
  },
  aboutXHours: {
    one: {
      default: "\u0CB8\u0CC1\u0CAE\u0CBE\u0CB0\u0CC1 1 \u0C97\u0C82\u0C9F\u0CC6",
      future: "\u0CB8\u0CC1\u0CAE\u0CBE\u0CB0\u0CC1 1 \u0C97\u0C82\u0C9F\u0CC6\u0CAF\u0CB2\u0CCD\u0CB2\u0CBF",
      past: "\u0CB8\u0CC1\u0CAE\u0CBE\u0CB0\u0CC1 1 \u0C97\u0C82\u0C9F\u0CC6 \u0CB9\u0CBF\u0C82\u0CA6\u0CC6"
    },
    other: {
      default: "\u0CB8\u0CC1\u0CAE\u0CBE\u0CB0\u0CC1 {{count}} \u0C97\u0C82\u0C9F\u0CC6\u0C97\u0CB3\u0CC1",
      future: "\u0CB8\u0CC1\u0CAE\u0CBE\u0CB0\u0CC1 {{count}} \u0C97\u0C82\u0C9F\u0CC6\u0C97\u0CB3\u0CB2\u0CCD\u0CB2\u0CBF",
      past: "\u0CB8\u0CC1\u0CAE\u0CBE\u0CB0\u0CC1 {{count}} \u0C97\u0C82\u0C9F\u0CC6\u0C97\u0CB3 \u0CB9\u0CBF\u0C82\u0CA6\u0CC6"
    }
  },
  xHours: {
    one: {
      default: "1 \u0C97\u0C82\u0C9F\u0CC6",
      future: "1 \u0C97\u0C82\u0C9F\u0CC6\u0CAF\u0CB2\u0CCD\u0CB2\u0CBF",
      past: "1 \u0C97\u0C82\u0C9F\u0CC6 \u0CB9\u0CBF\u0C82\u0CA6\u0CC6"
    },
    other: {
      default: "{{count}} \u0C97\u0C82\u0C9F\u0CC6\u0C97\u0CB3\u0CC1",
      future: "{{count}} \u0C97\u0C82\u0C9F\u0CC6\u0C97\u0CB3\u0CB2\u0CCD\u0CB2\u0CBF",
      past: "{{count}} \u0C97\u0C82\u0C9F\u0CC6\u0C97\u0CB3 \u0CB9\u0CBF\u0C82\u0CA6\u0CC6"
    }
  },
  xDays: {
    one: {
      default: "1 \u0CA6\u0CBF\u0CA8",
      future: "1 \u0CA6\u0CBF\u0CA8\u0CA6\u0CB2\u0CCD\u0CB2\u0CBF",
      past: "1 \u0CA6\u0CBF\u0CA8\u0CA6 \u0CB9\u0CBF\u0C82\u0CA6\u0CC6"
    },
    other: {
      default: "{{count}} \u0CA6\u0CBF\u0CA8\u0C97\u0CB3\u0CC1",
      future: "{{count}} \u0CA6\u0CBF\u0CA8\u0C97\u0CB3\u0CB2\u0CCD\u0CB2\u0CBF",
      past: "{{count}} \u0CA6\u0CBF\u0CA8\u0C97\u0CB3 \u0CB9\u0CBF\u0C82\u0CA6\u0CC6"
    }
  },
  aboutXMonths: {
    one: {
      default: "\u0CB8\u0CC1\u0CAE\u0CBE\u0CB0\u0CC1 1 \u0CA4\u0CBF\u0C82\u0C97\u0CB3\u0CC1",
      future: "\u0CB8\u0CC1\u0CAE\u0CBE\u0CB0\u0CC1 1 \u0CA4\u0CBF\u0C82\u0C97\u0CB3\u0CB2\u0CCD\u0CB2\u0CBF",
      past: "\u0CB8\u0CC1\u0CAE\u0CBE\u0CB0\u0CC1 1 \u0CA4\u0CBF\u0C82\u0C97\u0CB3 \u0CB9\u0CBF\u0C82\u0CA6\u0CC6"
    },
    other: {
      default: "\u0CB8\u0CC1\u0CAE\u0CBE\u0CB0\u0CC1 {{count}} \u0CA4\u0CBF\u0C82\u0C97\u0CB3\u0CC1",
      future: "\u0CB8\u0CC1\u0CAE\u0CBE\u0CB0\u0CC1 {{count}} \u0CA4\u0CBF\u0C82\u0C97\u0CB3\u0CC1\u0C97\u0CB3\u0CB2\u0CCD\u0CB2\u0CBF",
      past: "\u0CB8\u0CC1\u0CAE\u0CBE\u0CB0\u0CC1 {{count}} \u0CA4\u0CBF\u0C82\u0C97\u0CB3\u0CC1\u0C97\u0CB3 \u0CB9\u0CBF\u0C82\u0CA6\u0CC6"
    }
  },
  xMonths: {
    one: {
      default: "1 \u0CA4\u0CBF\u0C82\u0C97\u0CB3\u0CC1",
      future: "1 \u0CA4\u0CBF\u0C82\u0C97\u0CB3\u0CB2\u0CCD\u0CB2\u0CBF",
      past: "1 \u0CA4\u0CBF\u0C82\u0C97\u0CB3 \u0CB9\u0CBF\u0C82\u0CA6\u0CC6"
    },
    other: {
      default: "{{count}} \u0CA4\u0CBF\u0C82\u0C97\u0CB3\u0CC1",
      future: "{{count}} \u0CA4\u0CBF\u0C82\u0C97\u0CB3\u0CC1\u0C97\u0CB3\u0CB2\u0CCD\u0CB2\u0CBF",
      past: "{{count}} \u0CA4\u0CBF\u0C82\u0C97\u0CB3\u0CC1\u0C97\u0CB3 \u0CB9\u0CBF\u0C82\u0CA6\u0CC6"
    }
  },
  aboutXYears: {
    one: {
      default: "\u0CB8\u0CC1\u0CAE\u0CBE\u0CB0\u0CC1 1 \u0CB5\u0CB0\u0CCD\u0CB7",
      future: "\u0CB8\u0CC1\u0CAE\u0CBE\u0CB0\u0CC1 1 \u0CB5\u0CB0\u0CCD\u0CB7\u0CA6\u0CB2\u0CCD\u0CB2\u0CBF",
      past: "\u0CB8\u0CC1\u0CAE\u0CBE\u0CB0\u0CC1 1 \u0CB5\u0CB0\u0CCD\u0CB7\u0CA6 \u0CB9\u0CBF\u0C82\u0CA6\u0CC6"
    },
    other: {
      default: "\u0CB8\u0CC1\u0CAE\u0CBE\u0CB0\u0CC1 {{count}} \u0CB5\u0CB0\u0CCD\u0CB7\u0C97\u0CB3\u0CC1",
      future: "\u0CB8\u0CC1\u0CAE\u0CBE\u0CB0\u0CC1 {{count}} \u0CB5\u0CB0\u0CCD\u0CB7\u0C97\u0CB3\u0CB2\u0CCD\u0CB2\u0CBF",
      past: "\u0CB8\u0CC1\u0CAE\u0CBE\u0CB0\u0CC1 {{count}} \u0CB5\u0CB0\u0CCD\u0CB7\u0C97\u0CB3 \u0CB9\u0CBF\u0C82\u0CA6\u0CC6"
    }
  },
  xYears: {
    one: {
      default: "1 \u0CB5\u0CB0\u0CCD\u0CB7",
      future: "1 \u0CB5\u0CB0\u0CCD\u0CB7\u0CA6\u0CB2\u0CCD\u0CB2\u0CBF",
      past: "1 \u0CB5\u0CB0\u0CCD\u0CB7\u0CA6 \u0CB9\u0CBF\u0C82\u0CA6\u0CC6"
    },
    other: {
      default: "{{count}} \u0CB5\u0CB0\u0CCD\u0CB7\u0C97\u0CB3\u0CC1",
      future: "{{count}} \u0CB5\u0CB0\u0CCD\u0CB7\u0C97\u0CB3\u0CB2\u0CCD\u0CB2\u0CBF",
      past: "{{count}} \u0CB5\u0CB0\u0CCD\u0CB7\u0C97\u0CB3 \u0CB9\u0CBF\u0C82\u0CA6\u0CC6"
    }
  },
  overXYears: {
    one: {
      default: "1 \u0CB5\u0CB0\u0CCD\u0CB7\u0CA6 \u0CAE\u0CC7\u0CB2\u0CC6",
      future: "1 \u0CB5\u0CB0\u0CCD\u0CB7\u0CA6 \u0CAE\u0CC7\u0CB2\u0CC6",
      past: "1 \u0CB5\u0CB0\u0CCD\u0CB7\u0CA6 \u0CAE\u0CC7\u0CB2\u0CC6"
    },
    other: {
      default: "{{count}} \u0CB5\u0CB0\u0CCD\u0CB7\u0C97\u0CB3 \u0CAE\u0CC7\u0CB2\u0CC6",
      future: "{{count}} \u0CB5\u0CB0\u0CCD\u0CB7\u0C97\u0CB3 \u0CAE\u0CC7\u0CB2\u0CC6",
      past: "{{count}} \u0CB5\u0CB0\u0CCD\u0CB7\u0C97\u0CB3 \u0CAE\u0CC7\u0CB2\u0CC6"
    }
  },
  almostXYears: {
    one: {
      default: "\u0CAC\u0CB9\u0CC1\u0CA4\u0CC7\u0C95 1 \u0CB5\u0CB0\u0CCD\u0CB7\u0CA6\u0CB2\u0CCD\u0CB2\u0CBF",
      future: "\u0CAC\u0CB9\u0CC1\u0CA4\u0CC7\u0C95 1 \u0CB5\u0CB0\u0CCD\u0CB7\u0CA6\u0CB2\u0CCD\u0CB2\u0CBF",
      past: "\u0CAC\u0CB9\u0CC1\u0CA4\u0CC7\u0C95 1 \u0CB5\u0CB0\u0CCD\u0CB7\u0CA6\u0CB2\u0CCD\u0CB2\u0CBF"
    },
    other: {
      default: "\u0CAC\u0CB9\u0CC1\u0CA4\u0CC7\u0C95 {{count}} \u0CB5\u0CB0\u0CCD\u0CB7\u0C97\u0CB3\u0CB2\u0CCD\u0CB2\u0CBF",
      future: "\u0CAC\u0CB9\u0CC1\u0CA4\u0CC7\u0C95 {{count}} \u0CB5\u0CB0\u0CCD\u0CB7\u0C97\u0CB3\u0CB2\u0CCD\u0CB2\u0CBF",
      past: "\u0CAC\u0CB9\u0CC1\u0CA4\u0CC7\u0C95 {{count}} \u0CB5\u0CB0\u0CCD\u0CB7\u0C97\u0CB3\u0CB2\u0CCD\u0CB2\u0CBF"
    }
  }
};
var formatDistance = function formatDistance(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];
  if (tokenValue.one && count === 1) {
    result = getResultByTense(tokenValue.one, options);
  } else {
    result = getResultByTense(tokenValue.other, options);
  }
  return result.replace("{{count}}", String(count));
};

// lib/locale/_lib/buildFormatLongFn.js
function buildFormatLongFn(args) {
  return function () {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

// lib/locale/kn/_lib/formatLong.js
var dateFormats = {
  full: "EEEE, MMMM d, y",
  long: "MMMM d, y",
  medium: "MMM d, y",
  short: "d/M/yy"
};
var timeFormats = {
  full: "hh:mm:ss a zzzz",
  long: "hh:mm:ss a z",
  medium: "hh:mm:ss a",
  short: "hh:mm a"
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

// lib/locale/kn/_lib/formatRelative.js
var formatRelativeLocale = {
  lastWeek: "'\u0C95\u0CB3\u0CC6\u0CA6' eeee p '\u0C95\u0CCD\u0C95\u0CC6'",
  yesterday: "'\u0CA8\u0CBF\u0CA8\u0CCD\u0CA8\u0CC6' p '\u0C95\u0CCD\u0C95\u0CC6'",
  today: "'\u0C87\u0C82\u0CA6\u0CC1' p '\u0C95\u0CCD\u0C95\u0CC6'",
  tomorrow: "'\u0CA8\u0CBE\u0CB3\u0CC6' p '\u0C95\u0CCD\u0C95\u0CC6'",
  nextWeek: "eeee p '\u0C95\u0CCD\u0C95\u0CC6'",
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

// lib/locale/kn/_lib/localize.js
var eraValues = {
  narrow: ["\u0C95\u0CCD\u0CB0\u0CBF.\u0CAA\u0CC2", "\u0C95\u0CCD\u0CB0\u0CBF.\u0CB6"],
  abbreviated: ["\u0C95\u0CCD\u0CB0\u0CBF.\u0CAA\u0CC2", "\u0C95\u0CCD\u0CB0\u0CBF.\u0CB6"],
  wide: ["\u0C95\u0CCD\u0CB0\u0CBF\u0CB8\u0CCD\u0CA4 \u0CAA\u0CC2\u0CB0\u0CCD\u0CB5", "\u0C95\u0CCD\u0CB0\u0CBF\u0CB8\u0CCD\u0CA4 \u0CB6\u0C95"]
};
var quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["\u0CA4\u0CCD\u0CB0\u0CC8 1", "\u0CA4\u0CCD\u0CB0\u0CC8 2", "\u0CA4\u0CCD\u0CB0\u0CC8 3", "\u0CA4\u0CCD\u0CB0\u0CC8 4"],
  wide: ["1\u0CA8\u0CC7 \u0CA4\u0CCD\u0CB0\u0CC8\u0CAE\u0CBE\u0CB8\u0CBF\u0C95", "2\u0CA8\u0CC7 \u0CA4\u0CCD\u0CB0\u0CC8\u0CAE\u0CBE\u0CB8\u0CBF\u0C95", "3\u0CA8\u0CC7 \u0CA4\u0CCD\u0CB0\u0CC8\u0CAE\u0CBE\u0CB8\u0CBF\u0C95", "4\u0CA8\u0CC7 \u0CA4\u0CCD\u0CB0\u0CC8\u0CAE\u0CBE\u0CB8\u0CBF\u0C95"]
};
var monthValues = {
  narrow: ["\u0C9C", "\u0CAB\u0CC6", "\u0CAE\u0CBE", "\u0C8F", "\u0CAE\u0CC7", "\u0C9C\u0CC2", "\u0C9C\u0CC1", "\u0C86", "\u0CB8\u0CC6", "\u0C85", "\u0CA8", "\u0CA1\u0CBF"],
  abbreviated: [
  "\u0C9C\u0CA8",
  "\u0CAB\u0CC6\u0CAC\u0CCD\u0CB0",
  "\u0CAE\u0CBE\u0CB0\u0CCD\u0C9A\u0CCD",
  "\u0C8F\u0CAA\u0CCD\u0CB0\u0CBF",
  "\u0CAE\u0CC7",
  "\u0C9C\u0CC2\u0CA8\u0CCD",
  "\u0C9C\u0CC1\u0CB2\u0CC8",
  "\u0C86\u0C97",
  "\u0CB8\u0CC6\u0CAA\u0CCD\u0C9F\u0CC6\u0C82",
  "\u0C85\u0C95\u0CCD\u0C9F\u0CCB",
  "\u0CA8\u0CB5\u0CC6\u0C82",
  "\u0CA1\u0CBF\u0CB8\u0CC6\u0C82"],

  wide: [
  "\u0C9C\u0CA8\u0CB5\u0CB0\u0CBF",
  "\u0CAB\u0CC6\u0CAC\u0CCD\u0CB0\u0CB5\u0CB0\u0CBF",
  "\u0CAE\u0CBE\u0CB0\u0CCD\u0C9A\u0CCD",
  "\u0C8F\u0CAA\u0CCD\u0CB0\u0CBF\u0CB2\u0CCD",
  "\u0CAE\u0CC7",
  "\u0C9C\u0CC2\u0CA8\u0CCD",
  "\u0C9C\u0CC1\u0CB2\u0CC8",
  "\u0C86\u0C97\u0CB8\u0CCD\u0C9F\u0CCD",
  "\u0CB8\u0CC6\u0CAA\u0CCD\u0C9F\u0CC6\u0C82\u0CAC\u0CB0\u0CCD",
  "\u0C85\u0C95\u0CCD\u0C9F\u0CCB\u0CAC\u0CB0\u0CCD",
  "\u0CA8\u0CB5\u0CC6\u0C82\u0CAC\u0CB0\u0CCD",
  "\u0CA1\u0CBF\u0CB8\u0CC6\u0C82\u0CAC\u0CB0\u0CCD"]

};
var dayValues = {
  narrow: ["\u0CAD\u0CBE", "\u0CB8\u0CCB", "\u0CAE\u0C82", "\u0CAC\u0CC1", "\u0C97\u0CC1", "\u0CB6\u0CC1", "\u0CB6"],
  short: ["\u0CAD\u0CBE\u0CA8\u0CC1", "\u0CB8\u0CCB\u0CAE", "\u0CAE\u0C82\u0C97\u0CB3", "\u0CAC\u0CC1\u0CA7", "\u0C97\u0CC1\u0CB0\u0CC1", "\u0CB6\u0CC1\u0C95\u0CCD\u0CB0", "\u0CB6\u0CA8\u0CBF"],
  abbreviated: ["\u0CAD\u0CBE\u0CA8\u0CC1", "\u0CB8\u0CCB\u0CAE", "\u0CAE\u0C82\u0C97\u0CB3", "\u0CAC\u0CC1\u0CA7", "\u0C97\u0CC1\u0CB0\u0CC1", "\u0CB6\u0CC1\u0C95\u0CCD\u0CB0", "\u0CB6\u0CA8\u0CBF"],
  wide: [
  "\u0CAD\u0CBE\u0CA8\u0CC1\u0CB5\u0CBE\u0CB0",
  "\u0CB8\u0CCB\u0CAE\u0CB5\u0CBE\u0CB0",
  "\u0CAE\u0C82\u0C97\u0CB3\u0CB5\u0CBE\u0CB0",
  "\u0CAC\u0CC1\u0CA7\u0CB5\u0CBE\u0CB0",
  "\u0C97\u0CC1\u0CB0\u0CC1\u0CB5\u0CBE\u0CB0",
  "\u0CB6\u0CC1\u0C95\u0CCD\u0CB0\u0CB5\u0CBE\u0CB0",
  "\u0CB6\u0CA8\u0CBF\u0CB5\u0CBE\u0CB0"]

};
var dayPeriodValues = {
  narrow: {
    am: "\u0CAA\u0CC2\u0CB0\u0CCD\u0CB5\u0CBE\u0CB9\u0CCD\u0CA8",
    pm: "\u0C85\u0CAA\u0CB0\u0CBE\u0CB9\u0CCD\u0CA8",
    midnight: "\u0CAE\u0CA7\u0CCD\u0CAF\u0CB0\u0CBE\u0CA4\u0CCD\u0CB0\u0CBF",
    noon: "\u0CAE\u0CA7\u0CCD\u0CAF\u0CBE\u0CB9\u0CCD\u0CA8",
    morning: "\u0CAC\u0CC6\u0CB3\u0C97\u0CCD\u0C97\u0CC6",
    afternoon: "\u0CAE\u0CA7\u0CCD\u0CAF\u0CBE\u0CB9\u0CCD\u0CA8",
    evening: "\u0CB8\u0C82\u0C9C\u0CC6",
    night: "\u0CB0\u0CBE\u0CA4\u0CCD\u0CB0\u0CBF"
  },
  abbreviated: {
    am: "\u0CAA\u0CC2\u0CB0\u0CCD\u0CB5\u0CBE\u0CB9\u0CCD\u0CA8",
    pm: "\u0C85\u0CAA\u0CB0\u0CBE\u0CB9\u0CCD\u0CA8",
    midnight: "\u0CAE\u0CA7\u0CCD\u0CAF\u0CB0\u0CBE\u0CA4\u0CCD\u0CB0\u0CBF",
    noon: "\u0CAE\u0CA7\u0CCD\u0CAF\u0CBE\u0CA8\u0CCD\u0CB9",
    morning: "\u0CAC\u0CC6\u0CB3\u0C97\u0CCD\u0C97\u0CC6",
    afternoon: "\u0CAE\u0CA7\u0CCD\u0CAF\u0CBE\u0CA8\u0CCD\u0CB9",
    evening: "\u0CB8\u0C82\u0C9C\u0CC6",
    night: "\u0CB0\u0CBE\u0CA4\u0CCD\u0CB0\u0CBF"
  },
  wide: {
    am: "\u0CAA\u0CC2\u0CB0\u0CCD\u0CB5\u0CBE\u0CB9\u0CCD\u0CA8",
    pm: "\u0C85\u0CAA\u0CB0\u0CBE\u0CB9\u0CCD\u0CA8",
    midnight: "\u0CAE\u0CA7\u0CCD\u0CAF\u0CB0\u0CBE\u0CA4\u0CCD\u0CB0\u0CBF",
    noon: "\u0CAE\u0CA7\u0CCD\u0CAF\u0CBE\u0CA8\u0CCD\u0CB9",
    morning: "\u0CAC\u0CC6\u0CB3\u0C97\u0CCD\u0C97\u0CC6",
    afternoon: "\u0CAE\u0CA7\u0CCD\u0CAF\u0CBE\u0CA8\u0CCD\u0CB9",
    evening: "\u0CB8\u0C82\u0C9C\u0CC6",
    night: "\u0CB0\u0CBE\u0CA4\u0CCD\u0CB0\u0CBF"
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: "\u0CAA\u0CC2",
    pm: "\u0C85",
    midnight: "\u0CAE\u0CA7\u0CCD\u0CAF\u0CB0\u0CBE\u0CA4\u0CCD\u0CB0\u0CBF",
    noon: "\u0CAE\u0CA7\u0CCD\u0CAF\u0CBE\u0CA8\u0CCD\u0CB9",
    morning: "\u0CAC\u0CC6\u0CB3\u0C97\u0CCD\u0C97\u0CC6",
    afternoon: "\u0CAE\u0CA7\u0CCD\u0CAF\u0CBE\u0CA8\u0CCD\u0CB9",
    evening: "\u0CB8\u0C82\u0C9C\u0CC6",
    night: "\u0CB0\u0CBE\u0CA4\u0CCD\u0CB0\u0CBF"
  },
  abbreviated: {
    am: "\u0CAA\u0CC2\u0CB0\u0CCD\u0CB5\u0CBE\u0CB9\u0CCD\u0CA8",
    pm: "\u0C85\u0CAA\u0CB0\u0CBE\u0CB9\u0CCD\u0CA8",
    midnight: "\u0CAE\u0CA7\u0CCD\u0CAF \u0CB0\u0CBE\u0CA4\u0CCD\u0CB0\u0CBF",
    noon: "\u0CAE\u0CA7\u0CCD\u0CAF\u0CBE\u0CA8\u0CCD\u0CB9",
    morning: "\u0CAC\u0CC6\u0CB3\u0C97\u0CCD\u0C97\u0CC6",
    afternoon: "\u0CAE\u0CA7\u0CCD\u0CAF\u0CBE\u0CA8\u0CCD\u0CB9",
    evening: "\u0CB8\u0C82\u0C9C\u0CC6",
    night: "\u0CB0\u0CBE\u0CA4\u0CCD\u0CB0\u0CBF"
  },
  wide: {
    am: "\u0CAA\u0CC2\u0CB0\u0CCD\u0CB5\u0CBE\u0CB9\u0CCD\u0CA8",
    pm: "\u0C85\u0CAA\u0CB0\u0CBE\u0CB9\u0CCD\u0CA8",
    midnight: "\u0CAE\u0CA7\u0CCD\u0CAF \u0CB0\u0CBE\u0CA4\u0CCD\u0CB0\u0CBF",
    noon: "\u0CAE\u0CA7\u0CCD\u0CAF\u0CBE\u0CA8\u0CCD\u0CB9",
    morning: "\u0CAC\u0CC6\u0CB3\u0C97\u0CCD\u0C97\u0CC6",
    afternoon: "\u0CAE\u0CA7\u0CCD\u0CAF\u0CBE\u0CA8\u0CCD\u0CB9",
    evening: "\u0CB8\u0C82\u0C9C\u0CC6",
    night: "\u0CB0\u0CBE\u0CA4\u0CCD\u0CB0\u0CBF"
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
  var number = Number(dirtyNumber);
  return number + "\u0CA8\u0CC7";
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

// lib/locale/kn/_lib/match.js
var matchOrdinalNumberPattern = /^(\d+)(ನೇ|ನೆ)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(ಕ್ರಿ.ಪೂ|ಕ್ರಿ.ಶ)/i,
  abbreviated: /^(ಕ್ರಿ\.?\s?ಪೂ\.?|ಕ್ರಿ\.?\s?ಶ\.?|ಪ್ರ\.?\s?ಶ\.?)/i,
  wide: /^(ಕ್ರಿಸ್ತ ಪೂರ್ವ|ಕ್ರಿಸ್ತ ಶಕ|ಪ್ರಸಕ್ತ ಶಕ)/i
};
var parseEraPatterns = {
  any: [/^ಪೂ/i, /^(ಶ|ಪ್ರ)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^ತ್ರೈ[1234]|ತ್ರೈ [1234]| [1234]ತ್ರೈ/i,
  wide: /^[1234](ನೇ)? ತ್ರೈಮಾಸಿಕ/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^(ಜೂ|ಜು|ಜ|ಫೆ|ಮಾ|ಏ|ಮೇ|ಆ|ಸೆ|ಅ|ನ|ಡಿ)/i,
  abbreviated: /^(ಜನ|ಫೆಬ್ರ|ಮಾರ್ಚ್|ಏಪ್ರಿ|ಮೇ|ಜೂನ್|ಜುಲೈ|ಆಗ|ಸೆಪ್ಟೆಂ|ಅಕ್ಟೋ|ನವೆಂ|ಡಿಸೆಂ)/i,
  wide: /^(ಜನವರಿ|ಫೆಬ್ರವರಿ|ಮಾರ್ಚ್|ಏಪ್ರಿಲ್|ಮೇ|ಜೂನ್|ಜುಲೈ|ಆಗಸ್ಟ್|ಸೆಪ್ಟೆಂಬರ್|ಅಕ್ಟೋಬರ್|ನವೆಂಬರ್|ಡಿಸೆಂಬರ್)/i
};
var parseMonthPatterns = {
  narrow: [
  /^ಜ$/i,
  /^ಫೆ/i,
  /^ಮಾ/i,
  /^ಏ/i,
  /^ಮೇ/i,
  /^ಜೂ/i,
  /^ಜು$/i,
  /^ಆ/i,
  /^ಸೆ/i,
  /^ಅ/i,
  /^ನ/i,
  /^ಡಿ/i],

  any: [
  /^ಜನ/i,
  /^ಫೆ/i,
  /^ಮಾ/i,
  /^ಏ/i,
  /^ಮೇ/i,
  /^ಜೂನ್/i,
  /^ಜುಲೈ/i,
  /^ಆ/i,
  /^ಸೆ/i,
  /^ಅ/i,
  /^ನ/i,
  /^ಡಿ/i]

};
var matchDayPatterns = {
  narrow: /^(ಭಾ|ಸೋ|ಮ|ಬು|ಗು|ಶು|ಶ)/i,
  short: /^(ಭಾನು|ಸೋಮ|ಮಂಗಳ|ಬುಧ|ಗುರು|ಶುಕ್ರ|ಶನಿ)/i,
  abbreviated: /^(ಭಾನು|ಸೋಮ|ಮಂಗಳ|ಬುಧ|ಗುರು|ಶುಕ್ರ|ಶನಿ)/i,
  wide: /^(ಭಾನುವಾರ|ಸೋಮವಾರ|ಮಂಗಳವಾರ|ಬುಧವಾರ|ಗುರುವಾರ|ಶುಕ್ರವಾರ|ಶನಿವಾರ)/i
};
var parseDayPatterns = {
  narrow: [/^ಭಾ/i, /^ಸೋ/i, /^ಮ/i, /^ಬು/i, /^ಗು/i, /^ಶು/i, /^ಶ/i],
  any: [/^ಭಾ/i, /^ಸೋ/i, /^ಮ/i, /^ಬು/i, /^ಗು/i, /^ಶು/i, /^ಶ/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(ಪೂ|ಅ|ಮಧ್ಯರಾತ್ರಿ|ಮಧ್ಯಾನ್ಹ|ಬೆಳಗ್ಗೆ|ಸಂಜೆ|ರಾತ್ರಿ)/i,
  any: /^(ಪೂರ್ವಾಹ್ನ|ಅಪರಾಹ್ನ|ಮಧ್ಯರಾತ್ರಿ|ಮಧ್ಯಾನ್ಹ|ಬೆಳಗ್ಗೆ|ಸಂಜೆ|ರಾತ್ರಿ)/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^ಪೂ/i,
    pm: /^ಅ/i,
    midnight: /ಮಧ್ಯರಾತ್ರಿ/i,
    noon: /ಮಧ್ಯಾನ್ಹ/i,
    morning: /ಬೆಳಗ್ಗೆ/i,
    afternoon: /ಮಧ್ಯಾನ್ಹ/i,
    evening: /ಸಂಜೆ/i,
    night: /ರಾತ್ರಿ/i
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

// lib/locale/kn.js
var kn = {
  code: "kn",
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

// lib/locale/kn/cdn.js
window.dateFns = _objectSpread(_objectSpread({},
window.dateFns), {}, {
  locale: _objectSpread(_objectSpread({}, (_window$dateFns =
  window.dateFns) === null || _window$dateFns === void 0 ? void 0 : _window$dateFns.locale), {}, {
    kn: kn }) });



//# debugId=95791F86686E063964756E2164756E21

//# sourceMappingURL=cdn.js.map
})();