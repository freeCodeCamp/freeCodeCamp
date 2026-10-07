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

// lib/locale/be/_lib/formatDistance.js
function declension(scheme, count) {
  if (scheme.one !== undefined && count === 1) {
    return scheme.one;
  }
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
function buildLocalizeTokenFn(scheme) {
  return function (count, options) {
    if (options && options.addSuffix) {
      if (options.comparison && options.comparison > 0) {
        if (scheme.future) {
          return declension(scheme.future, count);
        } else {
          return "\u043F\u0440\u0430\u0437 " + declension(scheme.regular, count);
        }
      } else {
        if (scheme.past) {
          return declension(scheme.past, count);
        } else {
          return declension(scheme.regular, count) + " \u0442\u0430\u043C\u0443";
        }
      }
    } else {
      return declension(scheme.regular, count);
    }
  };
}
var halfAMinute = function halfAMinute(_, options) {
  if (options && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return "\u043F\u0440\u0430\u0437 \u043F\u0430\u045E\u0445\u0432\u0456\u043B\u0456\u043D\u044B";
    } else {
      return "\u043F\u0430\u045E\u0445\u0432\u0456\u043B\u0456\u043D\u044B \u0442\u0430\u043C\u0443";
    }
  }
  return "\u043F\u0430\u045E\u0445\u0432\u0456\u043B\u0456\u043D\u044B";
};
var formatDistanceLocale = {
  lessThanXSeconds: buildLocalizeTokenFn({
    regular: {
      one: "\u043C\u0435\u043D\u0448 \u0437\u0430 \u0441\u0435\u043A\u0443\u043D\u0434\u0443",
      singularNominative: "\u043C\u0435\u043D\u0448 \u0437\u0430 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0443",
      singularGenitive: "\u043C\u0435\u043D\u0448 \u0437\u0430 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u044B",
      pluralGenitive: "\u043C\u0435\u043D\u0448 \u0437\u0430 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434"
    },
    future: {
      one: "\u043C\u0435\u043D\u0448, \u0447\u044B\u043C \u043F\u0440\u0430\u0437 \u0441\u0435\u043A\u0443\u043D\u0434\u0443",
      singularNominative: "\u043C\u0435\u043D\u0448, \u0447\u044B\u043C \u043F\u0440\u0430\u0437 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0443",
      singularGenitive: "\u043C\u0435\u043D\u0448, \u0447\u044B\u043C \u043F\u0440\u0430\u0437 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u044B",
      pluralGenitive: "\u043C\u0435\u043D\u0448, \u0447\u044B\u043C \u043F\u0440\u0430\u0437 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434"
    }
  }),
  xSeconds: buildLocalizeTokenFn({
    regular: {
      singularNominative: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0430",
      singularGenitive: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u044B",
      pluralGenitive: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434"
    },
    past: {
      singularNominative: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0443 \u0442\u0430\u043C\u0443",
      singularGenitive: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u044B \u0442\u0430\u043C\u0443",
      pluralGenitive: "{{count}} \u0441\u0435\u043A\u0443\u043D\u0434 \u0442\u0430\u043C\u0443"
    },
    future: {
      singularNominative: "\u043F\u0440\u0430\u0437 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u0443",
      singularGenitive: "\u043F\u0440\u0430\u0437 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434\u044B",
      pluralGenitive: "\u043F\u0440\u0430\u0437 {{count}} \u0441\u0435\u043A\u0443\u043D\u0434"
    }
  }),
  halfAMinute: halfAMinute,
  lessThanXMinutes: buildLocalizeTokenFn({
    regular: {
      one: "\u043C\u0435\u043D\u0448 \u0437\u0430 \u0445\u0432\u0456\u043B\u0456\u043D\u0443",
      singularNominative: "\u043C\u0435\u043D\u0448 \u0437\u0430 {{count}} \u0445\u0432\u0456\u043B\u0456\u043D\u0443",
      singularGenitive: "\u043C\u0435\u043D\u0448 \u0437\u0430 {{count}} \u0445\u0432\u0456\u043B\u0456\u043D\u044B",
      pluralGenitive: "\u043C\u0435\u043D\u0448 \u0437\u0430 {{count}} \u0445\u0432\u0456\u043B\u0456\u043D"
    },
    future: {
      one: "\u043C\u0435\u043D\u0448, \u0447\u044B\u043C \u043F\u0440\u0430\u0437 \u0445\u0432\u0456\u043B\u0456\u043D\u0443",
      singularNominative: "\u043C\u0435\u043D\u0448, \u0447\u044B\u043C \u043F\u0440\u0430\u0437 {{count}} \u0445\u0432\u0456\u043B\u0456\u043D\u0443",
      singularGenitive: "\u043C\u0435\u043D\u0448, \u0447\u044B\u043C \u043F\u0440\u0430\u0437 {{count}} \u0445\u0432\u0456\u043B\u0456\u043D\u044B",
      pluralGenitive: "\u043C\u0435\u043D\u0448, \u0447\u044B\u043C \u043F\u0440\u0430\u0437 {{count}} \u0445\u0432\u0456\u043B\u0456\u043D"
    }
  }),
  xMinutes: buildLocalizeTokenFn({
    regular: {
      singularNominative: "{{count}} \u0445\u0432\u0456\u043B\u0456\u043D\u0430",
      singularGenitive: "{{count}} \u0445\u0432\u0456\u043B\u0456\u043D\u044B",
      pluralGenitive: "{{count}} \u0445\u0432\u0456\u043B\u0456\u043D"
    },
    past: {
      singularNominative: "{{count}} \u0445\u0432\u0456\u043B\u0456\u043D\u0443 \u0442\u0430\u043C\u0443",
      singularGenitive: "{{count}} \u0445\u0432\u0456\u043B\u0456\u043D\u044B \u0442\u0430\u043C\u0443",
      pluralGenitive: "{{count}} \u0445\u0432\u0456\u043B\u0456\u043D \u0442\u0430\u043C\u0443"
    },
    future: {
      singularNominative: "\u043F\u0440\u0430\u0437 {{count}} \u0445\u0432\u0456\u043B\u0456\u043D\u0443",
      singularGenitive: "\u043F\u0440\u0430\u0437 {{count}} \u0445\u0432\u0456\u043B\u0456\u043D\u044B",
      pluralGenitive: "\u043F\u0440\u0430\u0437 {{count}} \u0445\u0432\u0456\u043B\u0456\u043D"
    }
  }),
  aboutXHours: buildLocalizeTokenFn({
    regular: {
      singularNominative: "\u043A\u0430\u043B\u044F {{count}} \u0433\u0430\u0434\u0437\u0456\u043D\u044B",
      singularGenitive: "\u043A\u0430\u043B\u044F {{count}} \u0433\u0430\u0434\u0437\u0456\u043D",
      pluralGenitive: "\u043A\u0430\u043B\u044F {{count}} \u0433\u0430\u0434\u0437\u0456\u043D"
    },
    future: {
      singularNominative: "\u043F\u0440\u044B\u0431\u043B\u0456\u0437\u043D\u0430 \u043F\u0440\u0430\u0437 {{count}} \u0433\u0430\u0434\u0437\u0456\u043D\u0443",
      singularGenitive: "\u043F\u0440\u044B\u0431\u043B\u0456\u0437\u043D\u0430 \u043F\u0440\u0430\u0437 {{count}} \u0433\u0430\u0434\u0437\u0456\u043D\u044B",
      pluralGenitive: "\u043F\u0440\u044B\u0431\u043B\u0456\u0437\u043D\u0430 \u043F\u0440\u0430\u0437 {{count}} \u0433\u0430\u0434\u0437\u0456\u043D"
    }
  }),
  xHours: buildLocalizeTokenFn({
    regular: {
      singularNominative: "{{count}} \u0433\u0430\u0434\u0437\u0456\u043D\u0430",
      singularGenitive: "{{count}} \u0433\u0430\u0434\u0437\u0456\u043D\u044B",
      pluralGenitive: "{{count}} \u0433\u0430\u0434\u0437\u0456\u043D"
    },
    past: {
      singularNominative: "{{count}} \u0433\u0430\u0434\u0437\u0456\u043D\u0443 \u0442\u0430\u043C\u0443",
      singularGenitive: "{{count}} \u0433\u0430\u0434\u0437\u0456\u043D\u044B \u0442\u0430\u043C\u0443",
      pluralGenitive: "{{count}} \u0433\u0430\u0434\u0437\u0456\u043D \u0442\u0430\u043C\u0443"
    },
    future: {
      singularNominative: "\u043F\u0440\u0430\u0437 {{count}} \u0433\u0430\u0434\u0437\u0456\u043D\u0443",
      singularGenitive: "\u043F\u0440\u0430\u0437 {{count}} \u0433\u0430\u0434\u0437\u0456\u043D\u044B",
      pluralGenitive: "\u043F\u0440\u0430\u0437 {{count}} \u0433\u0430\u0434\u0437\u0456\u043D"
    }
  }),
  xDays: buildLocalizeTokenFn({
    regular: {
      singularNominative: "{{count}} \u0434\u0437\u0435\u043D\u044C",
      singularGenitive: "{{count}} \u0434\u043D\u0456",
      pluralGenitive: "{{count}} \u0434\u0437\u0451\u043D"
    }
  }),
  aboutXWeeks: buildLocalizeTokenFn({
    regular: {
      singularNominative: "\u043A\u0430\u043B\u044F {{count}} \u0442\u044B\u0434\u043D\u0456",
      singularGenitive: "\u043A\u0430\u043B\u044F {{count}} \u0442\u044B\u0434\u043D\u044F\u045E",
      pluralGenitive: "\u043A\u0430\u043B\u044F {{count}} \u0442\u044B\u0434\u043D\u044F\u045E"
    },
    future: {
      singularNominative: "\u043F\u0440\u044B\u0431\u043B\u0456\u0437\u043D\u0430 \u043F\u0440\u0430\u0437 {{count}} \u0442\u044B\u0434\u0437\u0435\u043D\u044C",
      singularGenitive: "\u043F\u0440\u044B\u0431\u043B\u0456\u0437\u043D\u0430 \u043F\u0440\u0430\u0437 {{count}} \u0442\u044B\u0434\u043D\u0456",
      pluralGenitive: "\u043F\u0440\u044B\u0431\u043B\u0456\u0437\u043D\u0430 \u043F\u0440\u0430\u0437 {{count}} \u0442\u044B\u0434\u043D\u044F\u045E"
    }
  }),
  xWeeks: buildLocalizeTokenFn({
    regular: {
      singularNominative: "{{count}} \u0442\u044B\u0434\u0437\u0435\u043D\u044C",
      singularGenitive: "{{count}} \u0442\u044B\u0434\u043D\u0456",
      pluralGenitive: "{{count}} \u0442\u044B\u0434\u043D\u044F\u045E"
    }
  }),
  aboutXMonths: buildLocalizeTokenFn({
    regular: {
      singularNominative: "\u043A\u0430\u043B\u044F {{count}} \u043C\u0435\u0441\u044F\u0446\u0430",
      singularGenitive: "\u043A\u0430\u043B\u044F {{count}} \u043C\u0435\u0441\u044F\u0446\u0430\u045E",
      pluralGenitive: "\u043A\u0430\u043B\u044F {{count}} \u043C\u0435\u0441\u044F\u0446\u0430\u045E"
    },
    future: {
      singularNominative: "\u043F\u0440\u044B\u0431\u043B\u0456\u0437\u043D\u0430 \u043F\u0440\u0430\u0437 {{count}} \u043C\u0435\u0441\u044F\u0446",
      singularGenitive: "\u043F\u0440\u044B\u0431\u043B\u0456\u0437\u043D\u0430 \u043F\u0440\u0430\u0437 {{count}} \u043C\u0435\u0441\u044F\u0446\u044B",
      pluralGenitive: "\u043F\u0440\u044B\u0431\u043B\u0456\u0437\u043D\u0430 \u043F\u0440\u0430\u0437 {{count}} \u043C\u0435\u0441\u044F\u0446\u0430\u045E"
    }
  }),
  xMonths: buildLocalizeTokenFn({
    regular: {
      singularNominative: "{{count}} \u043C\u0435\u0441\u044F\u0446",
      singularGenitive: "{{count}} \u043C\u0435\u0441\u044F\u0446\u044B",
      pluralGenitive: "{{count}} \u043C\u0435\u0441\u044F\u0446\u0430\u045E"
    }
  }),
  aboutXYears: buildLocalizeTokenFn({
    regular: {
      singularNominative: "\u043A\u0430\u043B\u044F {{count}} \u0433\u043E\u0434\u0430",
      singularGenitive: "\u043A\u0430\u043B\u044F {{count}} \u0433\u0430\u0434\u043E\u045E",
      pluralGenitive: "\u043A\u0430\u043B\u044F {{count}} \u0433\u0430\u0434\u043E\u045E"
    },
    future: {
      singularNominative: "\u043F\u0440\u044B\u0431\u043B\u0456\u0437\u043D\u0430 \u043F\u0440\u0430\u0437 {{count}} \u0433\u043E\u0434",
      singularGenitive: "\u043F\u0440\u044B\u0431\u043B\u0456\u0437\u043D\u0430 \u043F\u0440\u0430\u0437 {{count}} \u0433\u0430\u0434\u044B",
      pluralGenitive: "\u043F\u0440\u044B\u0431\u043B\u0456\u0437\u043D\u0430 \u043F\u0440\u0430\u0437 {{count}} \u0433\u0430\u0434\u043E\u045E"
    }
  }),
  xYears: buildLocalizeTokenFn({
    regular: {
      singularNominative: "{{count}} \u0433\u043E\u0434",
      singularGenitive: "{{count}} \u0433\u0430\u0434\u044B",
      pluralGenitive: "{{count}} \u0433\u0430\u0434\u043E\u045E"
    }
  }),
  overXYears: buildLocalizeTokenFn({
    regular: {
      singularNominative: "\u0431\u043E\u043B\u044C\u0448 \u0437\u0430 {{count}} \u0433\u043E\u0434",
      singularGenitive: "\u0431\u043E\u043B\u044C\u0448 \u0437\u0430 {{count}} \u0433\u0430\u0434\u044B",
      pluralGenitive: "\u0431\u043E\u043B\u044C\u0448 \u0437\u0430 {{count}} \u0433\u0430\u0434\u043E\u045E"
    },
    future: {
      singularNominative: "\u0431\u043E\u043B\u044C\u0448, \u0447\u044B\u043C \u043F\u0440\u0430\u0437 {{count}} \u0433\u043E\u0434",
      singularGenitive: "\u0431\u043E\u043B\u044C\u0448, \u0447\u044B\u043C \u043F\u0440\u0430\u0437 {{count}} \u0433\u0430\u0434\u044B",
      pluralGenitive: "\u0431\u043E\u043B\u044C\u0448, \u0447\u044B\u043C \u043F\u0440\u0430\u0437 {{count}} \u0433\u0430\u0434\u043E\u045E"
    }
  }),
  almostXYears: buildLocalizeTokenFn({
    regular: {
      singularNominative: "\u0430\u043C\u0430\u043B\u044C {{count}} \u0433\u043E\u0434",
      singularGenitive: "\u0430\u043C\u0430\u043B\u044C {{count}} \u0433\u0430\u0434\u044B",
      pluralGenitive: "\u0430\u043C\u0430\u043B\u044C {{count}} \u0433\u0430\u0434\u043E\u045E"
    },
    future: {
      singularNominative: "\u0430\u043C\u0430\u043B\u044C \u043F\u0440\u0430\u0437 {{count}} \u0433\u043E\u0434",
      singularGenitive: "\u0430\u043C\u0430\u043B\u044C \u043F\u0440\u0430\u0437 {{count}} \u0433\u0430\u0434\u044B",
      pluralGenitive: "\u0430\u043C\u0430\u043B\u044C \u043F\u0440\u0430\u0437 {{count}} \u0433\u0430\u0434\u043E\u045E"
    }
  })
};
var formatDistance = function formatDistance(token, count, options) {
  options = options || {};
  return formatDistanceLocale[token](count, options);
};

// lib/locale/_lib/buildFormatLongFn.js
function buildFormatLongFn(args) {
  return function () {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

// lib/locale/be/_lib/formatLong.js
var dateFormats = {
  full: "EEEE, d MMMM y '\u0433.'",
  long: "d MMMM y '\u0433.'",
  medium: "d MMM y '\u0433.'",
  short: "dd.MM.y"
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

// lib/locale/be/_lib/formatRelative.js
function lastWeek(day) {
  var weekday = accusativeWeekdays[day];
  switch (day) {
    case 0:
    case 3:
    case 5:
    case 6:
      return "'\u0443 \u043C\u0456\u043D\u0443\u043B\u0443\u044E " + weekday + " \u0430' p";
    case 1:
    case 2:
    case 4:
      return "'\u0443 \u043C\u0456\u043D\u0443\u043B\u044B " + weekday + " \u0430' p";
  }
}
function thisWeek(day) {
  var weekday = accusativeWeekdays[day];
  return "'\u0443 " + weekday + " \u0430' p";
}
function nextWeek(day) {
  var weekday = accusativeWeekdays[day];
  switch (day) {
    case 0:
    case 3:
    case 5:
    case 6:
      return "'\u0443 \u043D\u0430\u0441\u0442\u0443\u043F\u043D\u0443\u044E " + weekday + " \u0430' p";
    case 1:
    case 2:
    case 4:
      return "'\u0443 \u043D\u0430\u0441\u0442\u0443\u043F\u043D\u044B " + weekday + " \u0430' p";
  }
}
var accusativeWeekdays = [
"\u043D\u044F\u0434\u0437\u0435\u043B\u044E",
"\u043F\u0430\u043D\u044F\u0434\u0437\u0435\u043B\u0430\u043A",
"\u0430\u045E\u0442\u043E\u0440\u0430\u043A",
"\u0441\u0435\u0440\u0430\u0434\u0443",
"\u0447\u0430\u0446\u0432\u0435\u0440",
"\u043F\u044F\u0442\u043D\u0456\u0446\u0443",
"\u0441\u0443\u0431\u043E\u0442\u0443"];

var lastWeekFormat = function lastWeekFormat(dirtyDate, baseDate, options) {
  var date = toDate(dirtyDate);
  var day = date.getDay();
  if (isSameWeek(date, baseDate, options)) {
    return thisWeek(day);
  } else {
    return lastWeek(day);
  }
};
var nextWeekFormat = function nextWeekFormat(dirtyDate, baseDate, options) {
  var date = toDate(dirtyDate);
  var day = date.getDay();
  if (isSameWeek(date, baseDate, options)) {
    return thisWeek(day);
  } else {
    return nextWeek(day);
  }
};
var formatRelativeLocale = {
  lastWeek: lastWeekFormat,
  yesterday: "'\u0443\u0447\u043E\u0440\u0430 \u0430' p",
  today: "'\u0441\u0451\u043D\u043D\u044F \u0430' p",
  tomorrow: "'\u0437\u0430\u045E\u0442\u0440\u0430 \u0430' p",
  nextWeek: nextWeekFormat,
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

// lib/locale/be/_lib/localize.js
var eraValues = {
  narrow: ["\u0434\u0430 \u043D.\u044D.", "\u043D.\u044D."],
  abbreviated: ["\u0434\u0430 \u043D. \u044D.", "\u043D. \u044D."],
  wide: ["\u0434\u0430 \u043D\u0430\u0448\u0430\u0439 \u044D\u0440\u044B", "\u043D\u0430\u0448\u0430\u0439 \u044D\u0440\u044B"]
};
var quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["1-\u044B \u043A\u0432.", "2-\u0456 \u043A\u0432.", "3-\u0456 \u043A\u0432.", "4-\u044B \u043A\u0432."],
  wide: ["1-\u044B \u043A\u0432\u0430\u0440\u0442\u0430\u043B", "2-\u0456 \u043A\u0432\u0430\u0440\u0442\u0430\u043B", "3-\u0456 \u043A\u0432\u0430\u0440\u0442\u0430\u043B", "4-\u044B \u043A\u0432\u0430\u0440\u0442\u0430\u043B"]
};
var monthValues = {
  narrow: ["\u0421", "\u041B", "\u0421", "\u041A", "\u041C", "\u0427", "\u041B", "\u0416", "\u0412", "\u041A", "\u041B", "\u0421"],
  abbreviated: [
  "\u0441\u0442\u0443\u0434\u0437.",
  "\u043B\u044E\u0442.",
  "\u0441\u0430\u043A.",
  "\u043A\u0440\u0430\u0441.",
  "\u043C\u0430\u0439",
  "\u0447\u044D\u0440\u0432.",
  "\u043B\u0456\u043F.",
  "\u0436\u043D.",
  "\u0432\u0435\u0440.",
  "\u043A\u0430\u0441\u0442\u0440.",
  "\u043B\u0456\u0441\u0442.",
  "\u0441\u043D\u0435\u0436."],

  wide: [
  "\u0441\u0442\u0443\u0434\u0437\u0435\u043D\u044C",
  "\u043B\u044E\u0442\u044B",
  "\u0441\u0430\u043A\u0430\u0432\u0456\u043A",
  "\u043A\u0440\u0430\u0441\u0430\u0432\u0456\u043A",
  "\u043C\u0430\u0439",
  "\u0447\u044D\u0440\u0432\u0435\u043D\u044C",
  "\u043B\u0456\u043F\u0435\u043D\u044C",
  "\u0436\u043D\u0456\u0432\u0435\u043D\u044C",
  "\u0432\u0435\u0440\u0430\u0441\u0435\u043D\u044C",
  "\u043A\u0430\u0441\u0442\u0440\u044B\u0447\u043D\u0456\u043A",
  "\u043B\u0456\u0441\u0442\u0430\u043F\u0430\u0434",
  "\u0441\u043D\u0435\u0436\u0430\u043D\u044C"]

};
var formattingMonthValues = {
  narrow: ["\u0421", "\u041B", "\u0421", "\u041A", "\u041C", "\u0427", "\u041B", "\u0416", "\u0412", "\u041A", "\u041B", "\u0421"],
  abbreviated: [
  "\u0441\u0442\u0443\u0434\u0437.",
  "\u043B\u044E\u0442.",
  "\u0441\u0430\u043A.",
  "\u043A\u0440\u0430\u0441.",
  "\u043C\u0430\u044F",
  "\u0447\u044D\u0440\u0432.",
  "\u043B\u0456\u043F.",
  "\u0436\u043D.",
  "\u0432\u0435\u0440.",
  "\u043A\u0430\u0441\u0442\u0440.",
  "\u043B\u0456\u0441\u0442.",
  "\u0441\u043D\u0435\u0436."],

  wide: [
  "\u0441\u0442\u0443\u0434\u0437\u0435\u043D\u044F",
  "\u043B\u044E\u0442\u0430\u0433\u0430",
  "\u0441\u0430\u043A\u0430\u0432\u0456\u043A\u0430",
  "\u043A\u0440\u0430\u0441\u0430\u0432\u0456\u043A\u0430",
  "\u043C\u0430\u044F",
  "\u0447\u044D\u0440\u0432\u0435\u043D\u044F",
  "\u043B\u0456\u043F\u0435\u043D\u044F",
  "\u0436\u043D\u0456\u045E\u043D\u044F",
  "\u0432\u0435\u0440\u0430\u0441\u043D\u044F",
  "\u043A\u0430\u0441\u0442\u0440\u044B\u0447\u043D\u0456\u043A\u0430",
  "\u043B\u0456\u0441\u0442\u0430\u043F\u0430\u0434\u0430",
  "\u0441\u043D\u0435\u0436\u043D\u044F"]

};
var dayValues = {
  narrow: ["\u041D", "\u041F", "\u0410", "\u0421", "\u0427", "\u041F", "\u0421"],
  short: ["\u043D\u0434", "\u043F\u043D", "\u0430\u045E", "\u0441\u0440", "\u0447\u0446", "\u043F\u0442", "\u0441\u0431"],
  abbreviated: ["\u043D\u044F\u0434\u0437", "\u043F\u0430\u043D", "\u0430\u045E\u0442", "\u0441\u0435\u0440", "\u0447\u0430\u0446", "\u043F\u044F\u0442", "\u0441\u0443\u0431"],
  wide: [
  "\u043D\u044F\u0434\u0437\u0435\u043B\u044F",
  "\u043F\u0430\u043D\u044F\u0434\u0437\u0435\u043B\u0430\u043A",
  "\u0430\u045E\u0442\u043E\u0440\u0430\u043A",
  "\u0441\u0435\u0440\u0430\u0434\u0430",
  "\u0447\u0430\u0446\u0432\u0435\u0440",
  "\u043F\u044F\u0442\u043D\u0456\u0446\u0430",
  "\u0441\u0443\u0431\u043E\u0442\u0430"]

};
var dayPeriodValues = {
  narrow: {
    am: "\u0414\u041F",
    pm: "\u041F\u041F",
    midnight: "\u043F\u043E\u045E\u043D.",
    noon: "\u043F\u043E\u045E\u0434.",
    morning: "\u0440\u0430\u043D.",
    afternoon: "\u0434\u0437\u0435\u043D\u044C",
    evening: "\u0432\u0435\u0447.",
    night: "\u043D\u043E\u0447"
  },
  abbreviated: {
    am: "\u0414\u041F",
    pm: "\u041F\u041F",
    midnight: "\u043F\u043E\u045E\u043D.",
    noon: "\u043F\u043E\u045E\u0434.",
    morning: "\u0440\u0430\u043D.",
    afternoon: "\u0434\u0437\u0435\u043D\u044C",
    evening: "\u0432\u0435\u0447.",
    night: "\u043D\u043E\u0447"
  },
  wide: {
    am: "\u0414\u041F",
    pm: "\u041F\u041F",
    midnight: "\u043F\u043E\u045E\u043D\u0430\u0447",
    noon: "\u043F\u043E\u045E\u0434\u0437\u0435\u043D\u044C",
    morning: "\u0440\u0430\u043D\u0456\u0446\u0430",
    afternoon: "\u0434\u0437\u0435\u043D\u044C",
    evening: "\u0432\u0435\u0447\u0430\u0440",
    night: "\u043D\u043E\u0447"
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: "\u0414\u041F",
    pm: "\u041F\u041F",
    midnight: "\u043F\u043E\u045E\u043D.",
    noon: "\u043F\u043E\u045E\u0434.",
    morning: "\u0440\u0430\u043D.",
    afternoon: "\u0434\u043D\u044F",
    evening: "\u0432\u0435\u0447.",
    night: "\u043D\u043E\u0447\u044B"
  },
  abbreviated: {
    am: "\u0414\u041F",
    pm: "\u041F\u041F",
    midnight: "\u043F\u043E\u045E\u043D.",
    noon: "\u043F\u043E\u045E\u0434.",
    morning: "\u0440\u0430\u043D.",
    afternoon: "\u0434\u043D\u044F",
    evening: "\u0432\u0435\u0447.",
    night: "\u043D\u043E\u0447\u044B"
  },
  wide: {
    am: "\u0414\u041F",
    pm: "\u041F\u041F",
    midnight: "\u043F\u043E\u045E\u043D\u0430\u0447",
    noon: "\u043F\u043E\u045E\u0434\u0437\u0435\u043D\u044C",
    morning: "\u0440\u0430\u043D\u0456\u0446\u044B",
    afternoon: "\u0434\u043D\u044F",
    evening: "\u0432\u0435\u0447\u0430\u0440\u0430",
    night: "\u043D\u043E\u0447\u044B"
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber, options) {
  var unit = String(options === null || options === void 0 ? void 0 : options.unit);
  var number = Number(dirtyNumber);
  var suffix;
  if (unit === "date") {
    suffix = "-\u0433\u0430";
  } else if (unit === "hour" || unit === "minute" || unit === "second") {
    suffix = "-\u044F";
  } else {
    suffix = (number % 10 === 2 || number % 10 === 3) && number % 100 !== 12 && number % 100 !== 13 ? "-\u0456" : "-\u044B";
  }
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

// lib/locale/be/_lib/match.js
var matchOrdinalNumberPattern = /^(\d+)(-?(е|я|га|і|ы|ае|ая|яя|шы|гі|ці|ты|мы))?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^((да )?н\.?\s?э\.?)/i,
  abbreviated: /^((да )?н\.?\s?э\.?)/i,
  wide: /^(да нашай эры|нашай эры|наша эра)/i
};
var parseEraPatterns = {
  any: [/^д/i, /^н/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^[1234](-?[ыі]?)? кв.?/i,
  wide: /^[1234](-?[ыі]?)? квартал/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[слкмчжв]/i,
  abbreviated: /^(студз|лют|сак|крас|ма[йя]|чэрв|ліп|жн|вер|кастр|ліст|снеж)\.?/i,
  wide: /^(студзен[ья]|лют(ы|ага)|сакавіка?|красавіка?|ма[йя]|чэрвен[ья]|ліпен[ья]|жні(вень|ўня)|верас(ень|ня)|кастрычніка?|лістапада?|снеж(ань|ня))/i
};
var parseMonthPatterns = {
  narrow: [
  /^с/i,
  /^л/i,
  /^с/i,
  /^к/i,
  /^м/i,
  /^ч/i,
  /^л/i,
  /^ж/i,
  /^в/i,
  /^к/i,
  /^л/i,
  /^с/i],

  any: [
  /^ст/i,
  /^лю/i,
  /^са/i,
  /^кр/i,
  /^ма/i,
  /^ч/i,
  /^ліп/i,
  /^ж/i,
  /^в/i,
  /^ка/i,
  /^ліс/i,
  /^сн/i]

};
var matchDayPatterns = {
  narrow: /^[нпасч]/i,
  short: /^(нд|ня|пн|па|аў|ат|ср|се|чц|ча|пт|пя|сб|су)\.?/i,
  abbreviated: /^(нядз?|ндз|пнд|пан|аўт|срд|сер|чцв|чац|птн|пят|суб).?/i,
  wide: /^(нядзел[яі]|панядзел(ак|ка)|аўтор(ак|ка)|серад[аы]|чацв(ер|ярга)|пятніц[аы]|субот[аы])/i
};
var parseDayPatterns = {
  narrow: [/^н/i, /^п/i, /^а/i, /^с/i, /^ч/i, /^п/i, /^с/i],
  any: [/^н/i, /^п[ан]/i, /^а/i, /^с[ер]/i, /^ч/i, /^п[ят]/i, /^с[уб]/i]
};
var matchDayPeriodPatterns = {
  narrow: /^([дп]п|поўн\.?|поўд\.?|ран\.?|дзень|дня|веч\.?|ночы?)/i,
  abbreviated: /^([дп]п|поўн\.?|поўд\.?|ран\.?|дзень|дня|веч\.?|ночы?)/i,
  wide: /^([дп]п|поўнач|поўдзень|раніц[аы]|дзень|дня|вечара?|ночы?)/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^дп/i,
    pm: /^пп/i,
    midnight: /^поўн/i,
    noon: /^поўд/i,
    morning: /^р/i,
    afternoon: /^д[зн]/i,
    evening: /^в/i,
    night: /^н/i
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

// lib/locale/be.js
var be = {
  code: "be",
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

// lib/locale/be/cdn.js
window.dateFns = _objectSpread(_objectSpread({},
window.dateFns), {}, {
  locale: _objectSpread(_objectSpread({}, (_window$dateFns =
  window.dateFns) === null || _window$dateFns === void 0 ? void 0 : _window$dateFns.locale), {}, {
    be: be }) });



//# debugId=4360E1FA7A364AA764756E2164756E21

//# sourceMappingURL=cdn.js.map
})();