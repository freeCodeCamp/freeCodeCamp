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

// lib/locale/kk/_lib/formatDistance.js
function declension(scheme, count) {
  if (scheme.one && count === 1)
  return scheme.one;
  var rem10 = count % 10;
  var rem100 = count % 100;
  if (rem10 === 1 && rem100 !== 11) {
    return scheme.singularNominative.replace("{{count}}", String(count));
  } else if (rem10 >= 2 && rem10 <= 4 && (rem100 < 10 || rem100 > 20)) {
    return scheme.singularGenitive.replace("{{count}}", String(count));
  } else {
    return scheme.pluralGenitive.replace("{{count}}", String(count));
  }
}
var formatDistanceLocale = {
  lessThanXSeconds: {
    regular: {
      one: "1 \u0441\u0435\u043A\u0443\u043D\u0434\u0442\u0430\u043D \u0430\u0437",
      singularNominative: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0442\u0430\u043D \u0430\u0437",
      singularGenitive: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0442\u0430\u043D \u0430\u0437",
      pluralGenitive: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0442\u0430\u043D \u0430\u0437"
    },
    future: {
      one: "\u0431\u0456\u0440 \u0441\u0435\u043A\u0443\u043D\u0434\u0442\u0430\u043D \u043A\u0435\u0439\u0456\u043D",
      singularNominative: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0442\u0430\u043D \u043A\u0435\u0439\u0456\u043D",
      singularGenitive: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0442\u0430\u043D \u043A\u0435\u0439\u0456\u043D",
      pluralGenitive: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0442\u0430\u043D \u043A\u0435\u0439\u0456\u043D"
    }
  },
  xSeconds: {
    regular: {
      singularNominative: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434",
      singularGenitive: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434",
      pluralGenitive: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434"
    },
    past: {
      singularNominative: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434 \u0431\u04B1\u0440\u044B\u043D",
      singularGenitive: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434 \u0431\u04B1\u0440\u044B\u043D",
      pluralGenitive: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434 \u0431\u04B1\u0440\u044B\u043D"
    },
    future: {
      singularNominative: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0442\u0430\u043D \u043A\u0435\u0439\u0456\u043D",
      singularGenitive: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0442\u0430\u043D \u043A\u0435\u0439\u0456\u043D",
      pluralGenitive: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0442\u0430\u043D \u043A\u0435\u0439\u0456\u043D"
    }
  },
  halfAMinute: function halfAMinute(options) {
    if (options !== null && options !== void 0 && options.addSuffix) {
      if (options.comparison && options.comparison > 0) {
        return "\u0436\u0430\u0440\u0442\u044B \u043C\u0438\u043D\u0443\u0442 \u0456\u0448\u0456\u043D\u0434\u0435";
      } else {
        return "\u0436\u0430\u0440\u0442\u044B \u043C\u0438\u043D\u0443\u0442 \u0431\u04B1\u0440\u044B\u043D";
      }
    }
    return "\u0436\u0430\u0440\u0442\u044B \u043C\u0438\u043D\u0443\u0442";
  },
  lessThanXMinutes: {
    regular: {
      one: "1 \u043C\u0438\u043D\u0443\u0442\u0442\u0430\u043D \u0430\u0437",
      singularNominative: "{{count}} \u043C\u0438\u043D\u0443\u0442\u0442\u0430\u043D \u0430\u0437",
      singularGenitive: "{{count}} \u043C\u0438\u043D\u0443\u0442\u0442\u0430\u043D \u0430\u0437",
      pluralGenitive: "{{count}} \u043C\u0438\u043D\u0443\u0442\u0442\u0430\u043D \u0430\u0437"
    },
    future: {
      one: "\u043C\u0438\u043D\u0443\u0442\u0442\u0430\u043D \u043A\u0435\u043C ",
      singularNominative: "{{count}} \u043C\u0438\u043D\u0443\u0442\u0442\u0430\u043D \u043A\u0435\u043C",
      singularGenitive: "{{count}} \u043C\u0438\u043D\u0443\u0442\u0442\u0430\u043D \u043A\u0435\u043C",
      pluralGenitive: "{{count}} \u043C\u0438\u043D\u0443\u0442\u0442\u0430\u043D \u043A\u0435\u043C"
    }
  },
  xMinutes: {
    regular: {
      singularNominative: "{{count}} \u043C\u0438\u043D\u0443\u0442",
      singularGenitive: "{{count}} \u043C\u0438\u043D\u0443\u0442",
      pluralGenitive: "{{count}} \u043C\u0438\u043D\u0443\u0442"
    },
    past: {
      singularNominative: "{{count}} \u043C\u0438\u043D\u0443\u0442 \u0431\u04B1\u0440\u044B\u043D",
      singularGenitive: "{{count}} \u043C\u0438\u043D\u0443\u0442 \u0431\u04B1\u0440\u044B\u043D",
      pluralGenitive: "{{count}} \u043C\u0438\u043D\u0443\u0442 \u0431\u04B1\u0440\u044B\u043D"
    },
    future: {
      singularNominative: "{{count}} \u043C\u0438\u043D\u0443\u0442\u0442\u0430\u043D \u043A\u0435\u0439\u0456\u043D",
      singularGenitive: "{{count}} \u043C\u0438\u043D\u0443\u0442\u0442\u0430\u043D \u043A\u0435\u0439\u0456\u043D",
      pluralGenitive: "{{count}} \u043C\u0438\u043D\u0443\u0442\u0442\u0430\u043D \u043A\u0435\u0439\u0456\u043D"
    }
  },
  aboutXHours: {
    regular: {
      singularNominative: "\u0448\u0430\u043C\u0430\u043C\u0435\u043D {{count}} \u0441\u0430\u0493\u0430\u0442",
      singularGenitive: "\u0448\u0430\u043C\u0430\u043C\u0435\u043D {{count}} \u0441\u0430\u0493\u0430\u0442",
      pluralGenitive: "\u0448\u0430\u043C\u0430\u043C\u0435\u043D {{count}} \u0441\u0430\u0493\u0430\u0442"
    },
    future: {
      singularNominative: "\u0448\u0430\u043C\u0430\u043C\u0435\u043D {{count}} \u0441\u0430\u0493\u0430\u0442\u0442\u0430\u043D \u043A\u0435\u0439\u0456\u043D",
      singularGenitive: "\u0448\u0430\u043C\u0430\u043C\u0435\u043D {{count}} \u0441\u0430\u0493\u0430\u0442\u0442\u0430\u043D \u043A\u0435\u0439\u0456\u043D",
      pluralGenitive: "\u0448\u0430\u043C\u0430\u043C\u0435\u043D {{count}} \u0441\u0430\u0493\u0430\u0442\u0442\u0430\u043D \u043A\u0435\u0439\u0456\u043D"
    }
  },
  xHours: {
    regular: {
      singularNominative: "{{count}} \u0441\u0430\u0493\u0430\u0442",
      singularGenitive: "{{count}} \u0441\u0430\u0493\u0430\u0442",
      pluralGenitive: "{{count}} \u0441\u0430\u0493\u0430\u0442"
    }
  },
  xDays: {
    regular: {
      singularNominative: "{{count}} \u043A\u04AF\u043D",
      singularGenitive: "{{count}} \u043A\u04AF\u043D",
      pluralGenitive: "{{count}} \u043A\u04AF\u043D"
    },
    future: {
      singularNominative: "{{count}} \u043A\u04AF\u043D\u043D\u0435\u043D \u043A\u0435\u0439\u0456\u043D",
      singularGenitive: "{{count}} \u043A\u04AF\u043D\u043D\u0435\u043D \u043A\u0435\u0439\u0456\u043D",
      pluralGenitive: "{{count}} \u043A\u04AF\u043D\u043D\u0435\u043D \u043A\u0435\u0439\u0456\u043D"
    }
  },
  aboutXWeeks: {
    type: "weeks",
    one: "\u0448\u0430\u043C\u0430\u043C\u0435\u043D 1 \u0430\u043F\u0442\u0430",
    other: "\u0448\u0430\u043C\u0430\u043C\u0435\u043D {{count}} \u0430\u043F\u0442\u0430"
  },
  xWeeks: {
    type: "weeks",
    one: "1 \u0430\u043F\u0442\u0430",
    other: "{{count}} \u0430\u043F\u0442\u0430"
  },
  aboutXMonths: {
    regular: {
      singularNominative: "\u0448\u0430\u043C\u0430\u043C\u0435\u043D {{count}} \u0430\u0439",
      singularGenitive: "\u0448\u0430\u043C\u0430\u043C\u0435\u043D {{count}} \u0430\u0439",
      pluralGenitive: "\u0448\u0430\u043C\u0430\u043C\u0435\u043D {{count}} \u0430\u0439"
    },
    future: {
      singularNominative: "\u0448\u0430\u043C\u0430\u043C\u0435\u043D {{count}} \u0430\u0439\u0434\u0430\u043D \u043A\u0435\u0439\u0456\u043D",
      singularGenitive: "\u0448\u0430\u043C\u0430\u043C\u0435\u043D {{count}} \u0430\u0439\u0434\u0430\u043D \u043A\u0435\u0439\u0456\u043D",
      pluralGenitive: "\u0448\u0430\u043C\u0430\u043C\u0435\u043D {{count}} \u0430\u0439\u0434\u0430\u043D \u043A\u0435\u0439\u0456\u043D"
    }
  },
  xMonths: {
    regular: {
      singularNominative: "{{count}} \u0430\u0439",
      singularGenitive: "{{count}} \u0430\u0439",
      pluralGenitive: "{{count}} \u0430\u0439"
    }
  },
  aboutXYears: {
    regular: {
      singularNominative: "\u0448\u0430\u043C\u0430\u043C\u0435\u043D {{count}} \u0436\u044B\u043B",
      singularGenitive: "\u0448\u0430\u043C\u0430\u043C\u0435\u043D {{count}} \u0436\u044B\u043B",
      pluralGenitive: "\u0448\u0430\u043C\u0430\u043C\u0435\u043D {{count}} \u0436\u044B\u043B"
    },
    future: {
      singularNominative: "\u0448\u0430\u043C\u0430\u043C\u0435\u043D {{count}} \u0436\u044B\u043B\u0434\u0430\u043D \u043A\u0435\u0439\u0456\u043D",
      singularGenitive: "\u0448\u0430\u043C\u0430\u043C\u0435\u043D {{count}} \u0436\u044B\u043B\u0434\u0430\u043D \u043A\u0435\u0439\u0456\u043D",
      pluralGenitive: "\u0448\u0430\u043C\u0430\u043C\u0435\u043D {{count}} \u0436\u044B\u043B\u0434\u0430\u043D \u043A\u0435\u0439\u0456\u043D"
    }
  },
  xYears: {
    regular: {
      singularNominative: "{{count}} \u0436\u044B\u043B",
      singularGenitive: "{{count}} \u0436\u044B\u043B",
      pluralGenitive: "{{count}} \u0436\u044B\u043B"
    },
    future: {
      singularNominative: "{{count}} \u0436\u044B\u043B\u0434\u0430\u043D \u043A\u0435\u0439\u0456\u043D",
      singularGenitive: "{{count}} \u0436\u044B\u043B\u0434\u0430\u043D \u043A\u0435\u0439\u0456\u043D",
      pluralGenitive: "{{count}} \u0436\u044B\u043B\u0434\u0430\u043D \u043A\u0435\u0439\u0456\u043D"
    }
  },
  overXYears: {
    regular: {
      singularNominative: "{{count}} \u0436\u044B\u043B\u0434\u0430\u043D \u0430\u0441\u0442\u0430\u043C",
      singularGenitive: "{{count}} \u0436\u044B\u043B\u0434\u0430\u043D \u0430\u0441\u0442\u0430\u043C",
      pluralGenitive: "{{count}} \u0436\u044B\u043B\u0434\u0430\u043D \u0430\u0441\u0442\u0430\u043C"
    },
    future: {
      singularNominative: "{{count}} \u0436\u044B\u043B\u0434\u0430\u043D \u0430\u0441\u0442\u0430\u043C",
      singularGenitive: "{{count}} \u0436\u044B\u043B\u0434\u0430\u043D \u0430\u0441\u0442\u0430\u043C",
      pluralGenitive: "{{count}} \u0436\u044B\u043B\u0434\u0430\u043D \u0430\u0441\u0442\u0430\u043C"
    }
  },
  almostXYears: {
    regular: {
      singularNominative: "{{count}} \u0436\u044B\u043B\u0493\u0430 \u0436\u0430\u049B\u044B\u043D",
      singularGenitive: "{{count}} \u0436\u044B\u043B\u0493\u0430 \u0436\u0430\u049B\u044B\u043D",
      pluralGenitive: "{{count}} \u0436\u044B\u043B\u0493\u0430 \u0436\u0430\u049B\u044B\u043D"
    },
    future: {
      singularNominative: "{{count}} \u0436\u044B\u043B\u0434\u0430\u043D \u043A\u0435\u0439\u0456\u043D",
      singularGenitive: "{{count}} \u0436\u044B\u043B\u0434\u0430\u043D \u043A\u0435\u0439\u0456\u043D",
      pluralGenitive: "{{count}} \u0436\u044B\u043B\u0434\u0430\u043D \u043A\u0435\u0439\u0456\u043D"
    }
  }
};
var formatDistance = function formatDistance(token, count, options) {
  var tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === "function")
  return tokenValue(options);
  if (tokenValue.type === "weeks") {
    return count === 1 ? tokenValue.one : tokenValue.other.replace("{{count}}", String(count));
  }
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      if (tokenValue.future) {
        return declension(tokenValue.future, count);
      } else {
        return declension(tokenValue.regular, count) + " \u043A\u0435\u0439\u0456\u043D";
      }
    } else {
      if (tokenValue.past) {
        return declension(tokenValue.past, count);
      } else {
        return declension(tokenValue.regular, count) + " \u0431\u04B1\u0440\u044B\u043D";
      }
    }
  } else {
    return declension(tokenValue.regular, count);
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

// lib/locale/kk/_lib/formatLong.js
var dateFormats = {
  full: "EEEE, do MMMM y '\u0436.'",
  long: "do MMMM y '\u0436.'",
  medium: "d MMM y '\u0436.'",
  short: "dd.MM.yyyy"
};
var timeFormats = {
  full: "H:mm:ss zzzz",
  long: "H:mm:ss z",
  medium: "H:mm:ss",
  short: "H:mm"
};
var dateTimeFormats = {
  any: "{{date}}, {{time}}"
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
    defaultWidth: "any"
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

// lib/locale/kk/_lib/formatRelative.js
function _lastWeek(day) {
  var weekday = accusativeWeekdays[day];
  return "'\u04E9\u0442\u043A\u0435\u043D " + weekday + " \u0441\u0430\u0493\u0430\u0442' p'-\u0434\u0435'";
}
function thisWeek(day) {
  var weekday = accusativeWeekdays[day];
  return "'" + weekday + " \u0441\u0430\u0493\u0430\u0442' p'-\u0434\u0435'";
}
function _nextWeek(day) {
  var weekday = accusativeWeekdays[day];
  return "'\u043A\u0435\u043B\u0435\u0441\u0456 " + weekday + " \u0441\u0430\u0493\u0430\u0442' p'-\u0434\u0435'";
}
var accusativeWeekdays = [
"\u0436\u0435\u043A\u0441\u0435\u043D\u0431\u0456\u0434\u0435",
"\u0434\u04AF\u0439\u0441\u0435\u043D\u0431\u0456\u0434\u0435",
"\u0441\u0435\u0439\u0441\u0435\u043D\u0431\u0456\u0434\u0435",
"\u0441\u04D9\u0440\u0441\u0435\u043D\u0431\u0456\u0434\u0435",
"\u0431\u0435\u0439\u0441\u0435\u043D\u0431\u0456\u0434\u0435",
"\u0436\u04B1\u043C\u0430\u0434\u0430",
"\u0441\u0435\u043D\u0431\u0456\u0434\u0435"];

var formatRelativeLocale = {
  lastWeek: function lastWeek(date, baseDate, options) {
    var day = date.getDay();
    if (isSameWeek(date, baseDate, options)) {
      return thisWeek(day);
    } else {
      return _lastWeek(day);
    }
  },
  yesterday: "'\u043A\u0435\u0448\u0435 \u0441\u0430\u0493\u0430\u0442' p'-\u0434\u0435'",
  today: "'\u0431\u04AF\u0433\u0456\u043D \u0441\u0430\u0493\u0430\u0442' p'-\u0434\u0435'",
  tomorrow: "'\u0435\u0440\u0442\u0435\u04A3 \u0441\u0430\u0493\u0430\u0442' p'-\u0434\u0435'",
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

// lib/locale/kk/_lib/localize.js
var eraValues = {
  narrow: ["\u0431.\u0437.\u0434.", "\u0431.\u0437."],
  abbreviated: ["\u0431.\u0437.\u0434.", "\u0431.\u0437."],
  wide: ["\u0431\u0456\u0437\u0434\u0456\u04A3 \u0437\u0430\u043C\u0430\u043D\u044B\u043C\u044B\u0437\u0493\u0430 \u0434\u0435\u0439\u0456\u043D", "\u0431\u0456\u0437\u0434\u0456\u04A3 \u0437\u0430\u043C\u0430\u043D\u044B\u043C\u044B\u0437"]
};
var quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["1-\u0448\u0456 \u0442\u043E\u049B.", "2-\u0448\u0456 \u0442\u043E\u049B.", "3-\u0448\u0456 \u0442\u043E\u049B.", "4-\u0448\u0456 \u0442\u043E\u049B."],
  wide: ["1-\u0448\u0456 \u0442\u043E\u049B\u0441\u0430\u043D", "2-\u0448\u0456 \u0442\u043E\u049B\u0441\u0430\u043D", "3-\u0448\u0456 \u0442\u043E\u049B\u0441\u0430\u043D", "4-\u0448\u0456 \u0442\u043E\u049B\u0441\u0430\u043D"]
};
var monthValues = {
  narrow: ["\u049A", "\u0410", "\u041D", "\u0421", "\u041C", "\u041C", "\u0428", "\u0422", "\u049A", "\u049A", "\u049A", "\u0416"],
  abbreviated: [
  "\u049B\u0430\u04A3",
  "\u0430\u049B\u043F",
  "\u043D\u0430\u0443",
  "\u0441\u04D9\u0443",
  "\u043C\u0430\u043C",
  "\u043C\u0430\u0443",
  "\u0448\u0456\u043B",
  "\u0442\u0430\u043C",
  "\u049B\u044B\u0440",
  "\u049B\u0430\u0437",
  "\u049B\u0430\u0440",
  "\u0436\u0435\u043B"],

  wide: [
  "\u049B\u0430\u04A3\u0442\u0430\u0440",
  "\u0430\u049B\u043F\u0430\u043D",
  "\u043D\u0430\u0443\u0440\u044B\u0437",
  "\u0441\u04D9\u0443\u0456\u0440",
  "\u043C\u0430\u043C\u044B\u0440",
  "\u043C\u0430\u0443\u0441\u044B\u043C",
  "\u0448\u0456\u043B\u0434\u0435",
  "\u0442\u0430\u043C\u044B\u0437",
  "\u049B\u044B\u0440\u043A\u04AF\u0439\u0435\u043A",
  "\u049B\u0430\u0437\u0430\u043D",
  "\u049B\u0430\u0440\u0430\u0448\u0430",
  "\u0436\u0435\u043B\u0442\u043E\u049B\u0441\u0430\u043D"]

};
var formattingMonthValues = {
  narrow: ["\u049A", "\u0410", "\u041D", "\u0421", "\u041C", "\u041C", "\u0428", "\u0422", "\u049A", "\u049A", "\u049A", "\u0416"],
  abbreviated: [
  "\u049B\u0430\u04A3",
  "\u0430\u049B\u043F",
  "\u043D\u0430\u0443",
  "\u0441\u04D9\u0443",
  "\u043C\u0430\u043C",
  "\u043C\u0430\u0443",
  "\u0448\u0456\u043B",
  "\u0442\u0430\u043C",
  "\u049B\u044B\u0440",
  "\u049B\u0430\u0437",
  "\u049B\u0430\u0440",
  "\u0436\u0435\u043B"],

  wide: [
  "\u049B\u0430\u04A3\u0442\u0430\u0440",
  "\u0430\u049B\u043F\u0430\u043D",
  "\u043D\u0430\u0443\u0440\u044B\u0437",
  "\u0441\u04D9\u0443\u0456\u0440",
  "\u043C\u0430\u043C\u044B\u0440",
  "\u043C\u0430\u0443\u0441\u044B\u043C",
  "\u0448\u0456\u043B\u0434\u0435",
  "\u0442\u0430\u043C\u044B\u0437",
  "\u049B\u044B\u0440\u043A\u04AF\u0439\u0435\u043A",
  "\u049B\u0430\u0437\u0430\u043D",
  "\u049B\u0430\u0440\u0430\u0448\u0430",
  "\u0436\u0435\u043B\u0442\u043E\u049B\u0441\u0430\u043D"]

};
var dayValues = {
  narrow: ["\u0416", "\u0414", "\u0421", "\u0421", "\u0411", "\u0416", "\u0421"],
  short: ["\u0436\u0441", "\u0434\u0441", "\u0441\u0441", "\u0441\u0440", "\u0431\u0441", "\u0436\u043C", "\u0441\u0431"],
  abbreviated: ["\u0436\u0441", "\u0434\u0441", "\u0441\u0441", "\u0441\u0440", "\u0431\u0441", "\u0436\u043C", "\u0441\u0431"],
  wide: [
  "\u0436\u0435\u043A\u0441\u0435\u043D\u0431\u0456",
  "\u0434\u04AF\u0439\u0441\u0435\u043D\u0431\u0456",
  "\u0441\u0435\u0439\u0441\u0435\u043D\u0431\u0456",
  "\u0441\u04D9\u0440\u0441\u0435\u043D\u0431\u0456",
  "\u0431\u0435\u0439\u0441\u0435\u043D\u0431\u0456",
  "\u0436\u04B1\u043C\u0430",
  "\u0441\u0435\u043D\u0431\u0456"]

};
var dayPeriodValues = {
  narrow: {
    am: "\u0422\u0414",
    pm: "\u0422\u041A",
    midnight: "\u0442\u04AF\u043D \u043E\u0440\u0442\u0430\u0441\u044B",
    noon: "\u0442\u04AF\u0441",
    morning: "\u0442\u0430\u04A3",
    afternoon: "\u043A\u04AF\u043D\u0434\u0456\u0437",
    evening: "\u043A\u0435\u0448",
    night: "\u0442\u04AF\u043D"
  },
  wide: {
    am: "\u0422\u0414",
    pm: "\u0422\u041A",
    midnight: "\u0442\u04AF\u043D \u043E\u0440\u0442\u0430\u0441\u044B",
    noon: "\u0442\u04AF\u0441",
    morning: "\u0442\u0430\u04A3",
    afternoon: "\u043A\u04AF\u043D\u0434\u0456\u0437",
    evening: "\u043A\u0435\u0448",
    night: "\u0442\u04AF\u043D"
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: "\u0422\u0414",
    pm: "\u0422\u041A",
    midnight: "\u0442\u04AF\u043D \u043E\u0440\u0442\u0430\u0441\u044B\u043D\u0434\u0430",
    noon: "\u0442\u04AF\u0441",
    morning: "\u0442\u0430\u04A3",
    afternoon: "\u043A\u04AF\u043D",
    evening: "\u043A\u0435\u0448",
    night: "\u0442\u04AF\u043D"
  },
  wide: {
    am: "\u0422\u0414",
    pm: "\u0422\u041A",
    midnight: "\u0442\u04AF\u043D \u043E\u0440\u0442\u0430\u0441\u044B\u043D\u0434\u0430",
    noon: "\u0442\u04AF\u0441\u0442\u0435",
    morning: "\u0442\u0430\u04A3\u0435\u0440\u0442\u0435\u04A3",
    afternoon: "\u043A\u04AF\u043D\u0434\u0456\u0437",
    evening: "\u043A\u0435\u0448\u0442\u0435",
    night: "\u0442\u04AF\u043D\u0434\u0435"
  }
};
var suffixes = {
  0: "-\u0448\u0456",
  1: "-\u0448\u0456",
  2: "-\u0448\u0456",
  3: "-\u0448\u0456",
  4: "-\u0448\u0456",
  5: "-\u0448\u0456",
  6: "-\u0448\u044B",
  7: "-\u0448\u0456",
  8: "-\u0448\u0456",
  9: "-\u0448\u044B",
  10: "-\u0448\u044B",
  20: "-\u0448\u044B",
  30: "-\u0448\u044B",
  40: "-\u0448\u044B",
  50: "-\u0448\u0456",
  60: "-\u0448\u044B",
  70: "-\u0448\u0456",
  80: "-\u0448\u0456",
  90: "-\u0448\u044B",
  100: "-\u0448\u0456"
};
var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
  var number = Number(dirtyNumber);
  var mod10 = number % 10;
  var b = number >= 100 ? 100 : null;
  var suffix = suffixes[number] || suffixes[mod10] || b && suffixes[b] || "";
  return number + suffix;
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
    defaultWidth: "any",
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

// lib/locale/kk/_lib/match.js
var matchOrdinalNumberPattern = /^(\d+)(-?(ші|шы))?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^((б )?з\.?\s?д\.?)/i,
  abbreviated: /^((б )?з\.?\s?д\.?)/i,
  wide: /^(біздің заманымызға дейін|біздің заманымыз|біздің заманымыздан)/i
};
var parseEraPatterns = {
  any: [/^б/i, /^з/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^[1234](-?ші)? тоқ.?/i,
  wide: /^[1234](-?ші)? тоқсан/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^(қ|а|н|с|м|мау|ш|т|қыр|қаз|қар|ж)/i,
  abbreviated: /^(қаң|ақп|нау|сәу|мам|мау|шіл|там|қыр|қаз|қар|жел)/i,
  wide: /^(қаңтар|ақпан|наурыз|сәуір|мамыр|маусым|шілде|тамыз|қыркүйек|қазан|қараша|желтоқсан)/i
};
var parseMonthPatterns = {
  narrow: [
  /^қ/i,
  /^а/i,
  /^н/i,
  /^с/i,
  /^м/i,
  /^м/i,
  /^ш/i,
  /^т/i,
  /^қ/i,
  /^қ/i,
  /^қ/i,
  /^ж/i],

  abbreviated: [
  /^қаң/i,
  /^ақп/i,
  /^нау/i,
  /^сәу/i,
  /^мам/i,
  /^мау/i,
  /^шіл/i,
  /^там/i,
  /^қыр/i,
  /^қаз/i,
  /^қар/i,
  /^жел/i],

  any: [
  /^қ/i,
  /^а/i,
  /^н/i,
  /^с/i,
  /^м/i,
  /^м/i,
  /^ш/i,
  /^т/i,
  /^қ/i,
  /^қ/i,
  /^қ/i,
  /^ж/i]

};
var matchDayPatterns = {
  narrow: /^(ж|д|с|с|б|ж|с)/i,
  short: /^(жс|дс|сс|ср|бс|жм|сб)/i,
  wide: /^(жексенбі|дүйсенбі|сейсенбі|сәрсенбі|бейсенбі|жұма|сенбі)/i
};
var parseDayPatterns = {
  narrow: [/^ж/i, /^д/i, /^с/i, /^с/i, /^б/i, /^ж/i, /^с/i],
  short: [/^жс/i, /^дс/i, /^сс/i, /^ср/i, /^бс/i, /^жм/i, /^сб/i],
  any: [
  /^ж[ек]/i,
  /^д[үй]/i,
  /^сe[й]/i,
  /^сә[р]/i,
  /^б[ей]/i,
  /^ж[ұм]/i,
  /^се[н]/i]

};
var matchDayPeriodPatterns = {
  narrow: /^Т\.?\s?[ДК]\.?|түн ортасында|((түсте|таңертең|таңда|таңертең|таңмен|таң|күндіз|күн|кеште|кеш|түнде|түн)\.?)/i,
  wide: /^Т\.?\s?[ДК]\.?|түн ортасында|((түсте|таңертең|таңда|таңертең|таңмен|таң|күндіз|күн|кеште|кеш|түнде|түн)\.?)/i,
  any: /^Т\.?\s?[ДК]\.?|түн ортасында|((түсте|таңертең|таңда|таңертең|таңмен|таң|күндіз|күн|кеште|кеш|түнде|түн)\.?)/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^ТД/i,
    pm: /^ТК/i,
    midnight: /^түн орта/i,
    noon: /^күндіз/i,
    morning: /таң/i,
    afternoon: /түс/i,
    evening: /кеш/i,
    night: /түн/i
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

// lib/locale/kk.js
var kk = {
  code: "kk",
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

// lib/locale/kk/cdn.js
window.dateFns = _objectSpread(_objectSpread({},
window.dateFns), {}, {
  locale: _objectSpread(_objectSpread({}, (_window$dateFns =
  window.dateFns) === null || _window$dateFns === void 0 ? void 0 : _window$dateFns.locale), {}, {
    kk: kk }) });



//# debugId=CE0108605B17309A64756E2164756E21

//# sourceMappingURL=cdn.js.map
})();