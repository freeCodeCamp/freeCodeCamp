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

// lib/locale/ta/_lib/formatDistance.js
function isPluralType(val) {
  return val.one !== undefined;
}
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: {
      default: "\u0B92\u0BB0\u0BC1 \u0BB5\u0BBF\u0BA9\u0BBE\u0B9F\u0BBF\u0B95\u0BCD\u0B95\u0BC1 \u0B95\u0BC1\u0BB1\u0BC8\u0BB5\u0BBE\u0B95",
      in: "\u0B92\u0BB0\u0BC1 \u0BB5\u0BBF\u0BA9\u0BBE\u0B9F\u0BBF\u0B95\u0BCD\u0B95\u0BC1\u0BB3\u0BCD",
      ago: "\u0B92\u0BB0\u0BC1 \u0BB5\u0BBF\u0BA9\u0BBE\u0B9F\u0BBF\u0B95\u0BCD\u0B95\u0BC1 \u0BAE\u0BC1\u0BA9\u0BCD\u0BAA\u0BC1"
    },
    other: {
      default: "{{count}} \u0BB5\u0BBF\u0BA9\u0BBE\u0B9F\u0BBF\u0B95\u0BB3\u0BC1\u0B95\u0BCD\u0B95\u0BC1 \u0B95\u0BC1\u0BB1\u0BC8\u0BB5\u0BBE\u0B95",
      in: "{{count}} \u0BB5\u0BBF\u0BA9\u0BBE\u0B9F\u0BBF\u0B95\u0BB3\u0BC1\u0B95\u0BCD\u0B95\u0BC1\u0BB3\u0BCD",
      ago: "{{count}} \u0BB5\u0BBF\u0BA9\u0BBE\u0B9F\u0BBF\u0B95\u0BB3\u0BC1\u0B95\u0BCD\u0B95\u0BC1 \u0BAE\u0BC1\u0BA9\u0BCD\u0BAA\u0BC1"
    }
  },
  xSeconds: {
    one: {
      default: "1 \u0BB5\u0BBF\u0BA9\u0BBE\u0B9F\u0BBF",
      in: "1 \u0BB5\u0BBF\u0BA9\u0BBE\u0B9F\u0BBF\u0BAF\u0BBF\u0BB2\u0BCD",
      ago: "1 \u0BB5\u0BBF\u0BA9\u0BBE\u0B9F\u0BBF \u0BAE\u0BC1\u0BA9\u0BCD\u0BAA\u0BC1"
    },
    other: {
      default: "{{count}} \u0BB5\u0BBF\u0BA8\u0BBE\u0B9F\u0BBF\u0B95\u0BB3\u0BCD",
      in: "{{count}} \u0BB5\u0BBF\u0BA9\u0BBE\u0B9F\u0BBF\u0B95\u0BB3\u0BBF\u0BB2\u0BCD",
      ago: "{{count}} \u0BB5\u0BBF\u0BA8\u0BBE\u0B9F\u0BBF\u0B95\u0BB3\u0BC1\u0B95\u0BCD\u0B95\u0BC1 \u0BAE\u0BC1\u0BA9\u0BCD\u0BAA\u0BC1"
    }
  },
  halfAMinute: {
    default: "\u0B85\u0BB0\u0BC8 \u0BA8\u0BBF\u0BAE\u0BBF\u0B9F\u0BAE\u0BCD",
    in: "\u0B85\u0BB0\u0BC8 \u0BA8\u0BBF\u0BAE\u0BBF\u0B9F\u0BA4\u0BCD\u0BA4\u0BBF\u0BB2\u0BCD",
    ago: "\u0B85\u0BB0\u0BC8 \u0BA8\u0BBF\u0BAE\u0BBF\u0B9F\u0BAE\u0BCD \u0BAE\u0BC1\u0BA9\u0BCD\u0BAA\u0BC1"
  },
  lessThanXMinutes: {
    one: {
      default: "\u0B92\u0BB0\u0BC1 \u0BA8\u0BBF\u0BAE\u0BBF\u0B9F\u0BA4\u0BCD\u0BA4\u0BBF\u0BB1\u0BCD\u0B95\u0BC1\u0BAE\u0BCD \u0B95\u0BC1\u0BB1\u0BC8\u0BB5\u0BBE\u0B95",
      in: "\u0B92\u0BB0\u0BC1 \u0BA8\u0BBF\u0BAE\u0BBF\u0B9F\u0BA4\u0BCD\u0BA4\u0BBF\u0BB1\u0BCD\u0B95\u0BC1\u0BB3\u0BCD",
      ago: "\u0B92\u0BB0\u0BC1 \u0BA8\u0BBF\u0BAE\u0BBF\u0B9F\u0BA4\u0BCD\u0BA4\u0BBF\u0BB1\u0BCD\u0B95\u0BC1 \u0BAE\u0BC1\u0BA9\u0BCD\u0BAA\u0BC1"
    },
    other: {
      default: "{{count}} \u0BA8\u0BBF\u0BAE\u0BBF\u0B9F\u0B99\u0BCD\u0B95\u0BB3\u0BC1\u0B95\u0BCD\u0B95\u0BC1\u0BAE\u0BCD \u0B95\u0BC1\u0BB1\u0BC8\u0BB5\u0BBE\u0B95",
      in: "{{count}} \u0BA8\u0BBF\u0BAE\u0BBF\u0B9F\u0B99\u0BCD\u0B95\u0BB3\u0BC1\u0B95\u0BCD\u0B95\u0BC1\u0BB3\u0BCD",
      ago: "{{count}} \u0BA8\u0BBF\u0BAE\u0BBF\u0B9F\u0B99\u0BCD\u0B95\u0BB3\u0BC1\u0B95\u0BCD\u0B95\u0BC1 \u0BAE\u0BC1\u0BA9\u0BCD\u0BAA\u0BC1"
    }
  },
  xMinutes: {
    one: {
      default: "1 \u0BA8\u0BBF\u0BAE\u0BBF\u0B9F\u0BAE\u0BCD",
      in: "1 \u0BA8\u0BBF\u0BAE\u0BBF\u0B9F\u0BA4\u0BCD\u0BA4\u0BBF\u0BB2\u0BCD",
      ago: "1 \u0BA8\u0BBF\u0BAE\u0BBF\u0B9F\u0BAE\u0BCD \u0BAE\u0BC1\u0BA9\u0BCD\u0BAA\u0BC1"
    },
    other: {
      default: "{{count}} \u0BA8\u0BBF\u0BAE\u0BBF\u0B9F\u0B99\u0BCD\u0B95\u0BB3\u0BCD",
      in: "{{count}} \u0BA8\u0BBF\u0BAE\u0BBF\u0B9F\u0B99\u0BCD\u0B95\u0BB3\u0BBF\u0BB2\u0BCD",
      ago: "{{count}} \u0BA8\u0BBF\u0BAE\u0BBF\u0B9F\u0B99\u0BCD\u0B95\u0BB3\u0BC1\u0B95\u0BCD\u0B95\u0BC1 \u0BAE\u0BC1\u0BA9\u0BCD\u0BAA\u0BC1"
    }
  },
  aboutXHours: {
    one: {
      default: "\u0B9A\u0BC1\u0BAE\u0BBE\u0BB0\u0BCD 1 \u0BAE\u0BA3\u0BBF \u0BA8\u0BC7\u0BB0\u0BAE\u0BCD",
      in: "\u0B9A\u0BC1\u0BAE\u0BBE\u0BB0\u0BCD 1 \u0BAE\u0BA3\u0BBF \u0BA8\u0BC7\u0BB0\u0BA4\u0BCD\u0BA4\u0BBF\u0BB2\u0BCD",
      ago: "\u0B9A\u0BC1\u0BAE\u0BBE\u0BB0\u0BCD 1 \u0BAE\u0BA3\u0BBF \u0BA8\u0BC7\u0BB0\u0BA4\u0BCD\u0BA4\u0BBF\u0BB1\u0BCD\u0B95\u0BC1 \u0BAE\u0BC1\u0BA9\u0BCD\u0BAA\u0BC1"
    },
    other: {
      default: "\u0B9A\u0BC1\u0BAE\u0BBE\u0BB0\u0BCD {{count}} \u0BAE\u0BA3\u0BBF \u0BA8\u0BC7\u0BB0\u0BAE\u0BCD",
      in: "\u0B9A\u0BC1\u0BAE\u0BBE\u0BB0\u0BCD {{count}} \u0BAE\u0BA3\u0BBF \u0BA8\u0BC7\u0BB0\u0BA4\u0BCD\u0BA4\u0BBF\u0BB1\u0BCD\u0B95\u0BC1 \u0BAE\u0BC1\u0BA9\u0BCD\u0BAA\u0BC1",
      ago: "\u0B9A\u0BC1\u0BAE\u0BBE\u0BB0\u0BCD {{count}} \u0BAE\u0BA3\u0BBF \u0BA8\u0BC7\u0BB0\u0BA4\u0BCD\u0BA4\u0BBF\u0BB2\u0BCD"
    }
  },
  xHours: {
    one: {
      default: "1 \u0BAE\u0BA3\u0BBF \u0BA8\u0BC7\u0BB0\u0BAE\u0BCD",
      in: "1 \u0BAE\u0BA3\u0BBF \u0BA8\u0BC7\u0BB0\u0BA4\u0BCD\u0BA4\u0BBF\u0BB2\u0BCD",
      ago: "1 \u0BAE\u0BA3\u0BBF \u0BA8\u0BC7\u0BB0\u0BA4\u0BCD\u0BA4\u0BBF\u0BB1\u0BCD\u0B95\u0BC1 \u0BAE\u0BC1\u0BA9\u0BCD\u0BAA\u0BC1"
    },
    other: {
      default: "{{count}} \u0BAE\u0BA3\u0BBF \u0BA8\u0BC7\u0BB0\u0BAE\u0BCD",
      in: "{{count}} \u0BAE\u0BA3\u0BBF \u0BA8\u0BC7\u0BB0\u0BA4\u0BCD\u0BA4\u0BBF\u0BB2\u0BCD",
      ago: "{{count}} \u0BAE\u0BA3\u0BBF \u0BA8\u0BC7\u0BB0\u0BA4\u0BCD\u0BA4\u0BBF\u0BB1\u0BCD\u0B95\u0BC1 \u0BAE\u0BC1\u0BA9\u0BCD\u0BAA\u0BC1"
    }
  },
  xDays: {
    one: {
      default: "1 \u0BA8\u0BBE\u0BB3\u0BCD",
      in: "1 \u0BA8\u0BBE\u0BB3\u0BBF\u0BB2\u0BCD",
      ago: "1 \u0BA8\u0BBE\u0BB3\u0BCD \u0BAE\u0BC1\u0BA9\u0BCD\u0BAA\u0BC1"
    },
    other: {
      default: "{{count}} \u0BA8\u0BBE\u0B9F\u0BCD\u0B95\u0BB3\u0BCD",
      in: "{{count}} \u0BA8\u0BBE\u0B9F\u0BCD\u0B95\u0BB3\u0BBF\u0BB2\u0BCD",
      ago: "{{count}} \u0BA8\u0BBE\u0B9F\u0BCD\u0B95\u0BB3\u0BC1\u0B95\u0BCD\u0B95\u0BC1 \u0BAE\u0BC1\u0BA9\u0BCD\u0BAA\u0BC1"
    }
  },
  aboutXWeeks: {
    one: {
      default: "\u0B9A\u0BC1\u0BAE\u0BBE\u0BB0\u0BCD 1 \u0BB5\u0BBE\u0BB0\u0BAE\u0BCD",
      in: "\u0B9A\u0BC1\u0BAE\u0BBE\u0BB0\u0BCD 1 \u0BB5\u0BBE\u0BB0\u0BA4\u0BCD\u0BA4\u0BBF\u0BB2\u0BCD",
      ago: "\u0B9A\u0BC1\u0BAE\u0BBE\u0BB0\u0BCD 1 \u0BB5\u0BBE\u0BB0\u0BAE\u0BCD \u0BAE\u0BC1\u0BA9\u0BCD\u0BAA\u0BC1"
    },
    other: {
      default: "\u0B9A\u0BC1\u0BAE\u0BBE\u0BB0\u0BCD {{count}} \u0BB5\u0BBE\u0BB0\u0B99\u0BCD\u0B95\u0BB3\u0BCD",
      in: "\u0B9A\u0BC1\u0BAE\u0BBE\u0BB0\u0BCD {{count}} \u0BB5\u0BBE\u0BB0\u0B99\u0BCD\u0B95\u0BB3\u0BBF\u0BB2\u0BCD",
      ago: "\u0B9A\u0BC1\u0BAE\u0BBE\u0BB0\u0BCD {{count}} \u0BB5\u0BBE\u0BB0\u0B99\u0BCD\u0B95\u0BB3\u0BC1\u0B95\u0BCD\u0B95\u0BC1 \u0BAE\u0BC1\u0BA9\u0BCD\u0BAA\u0BC1"
    }
  },
  xWeeks: {
    one: {
      default: "1 \u0BB5\u0BBE\u0BB0\u0BAE\u0BCD",
      in: "1 \u0BB5\u0BBE\u0BB0\u0BA4\u0BCD\u0BA4\u0BBF\u0BB2\u0BCD",
      ago: "1 \u0BB5\u0BBE\u0BB0\u0BAE\u0BCD \u0BAE\u0BC1\u0BA9\u0BCD\u0BAA\u0BC1"
    },
    other: {
      default: "{{count}} \u0BB5\u0BBE\u0BB0\u0B99\u0BCD\u0B95\u0BB3\u0BCD",
      in: "{{count}} \u0BB5\u0BBE\u0BB0\u0B99\u0BCD\u0B95\u0BB3\u0BBF\u0BB2\u0BCD",
      ago: "{{count}} \u0BB5\u0BBE\u0BB0\u0B99\u0BCD\u0B95\u0BB3\u0BC1\u0B95\u0BCD\u0B95\u0BC1 \u0BAE\u0BC1\u0BA9\u0BCD\u0BAA\u0BC1"
    }
  },
  aboutXMonths: {
    one: {
      default: "\u0B9A\u0BC1\u0BAE\u0BBE\u0BB0\u0BCD 1 \u0BAE\u0BBE\u0BA4\u0BAE\u0BCD",
      in: "\u0B9A\u0BC1\u0BAE\u0BBE\u0BB0\u0BCD 1 \u0BAE\u0BBE\u0BA4\u0BA4\u0BCD\u0BA4\u0BBF\u0BB2\u0BCD",
      ago: "\u0B9A\u0BC1\u0BAE\u0BBE\u0BB0\u0BCD 1 \u0BAE\u0BBE\u0BA4\u0BA4\u0BCD\u0BA4\u0BBF\u0BB1\u0BCD\u0B95\u0BC1 \u0BAE\u0BC1\u0BA9\u0BCD\u0BAA\u0BC1"
    },
    other: {
      default: "\u0B9A\u0BC1\u0BAE\u0BBE\u0BB0\u0BCD {{count}} \u0BAE\u0BBE\u0BA4\u0B99\u0BCD\u0B95\u0BB3\u0BCD",
      in: "\u0B9A\u0BC1\u0BAE\u0BBE\u0BB0\u0BCD {{count}} \u0BAE\u0BBE\u0BA4\u0B99\u0BCD\u0B95\u0BB3\u0BBF\u0BB2\u0BCD",
      ago: "\u0B9A\u0BC1\u0BAE\u0BBE\u0BB0\u0BCD {{count}} \u0BAE\u0BBE\u0BA4\u0B99\u0BCD\u0B95\u0BB3\u0BC1\u0B95\u0BCD\u0B95\u0BC1 \u0BAE\u0BC1\u0BA9\u0BCD\u0BAA\u0BC1"
    }
  },
  xMonths: {
    one: {
      default: "1 \u0BAE\u0BBE\u0BA4\u0BAE\u0BCD",
      in: "1 \u0BAE\u0BBE\u0BA4\u0BA4\u0BCD\u0BA4\u0BBF\u0BB2\u0BCD",
      ago: "1 \u0BAE\u0BBE\u0BA4\u0BAE\u0BCD \u0BAE\u0BC1\u0BA9\u0BCD\u0BAA\u0BC1"
    },
    other: {
      default: "{{count}} \u0BAE\u0BBE\u0BA4\u0B99\u0BCD\u0B95\u0BB3\u0BCD",
      in: "{{count}} \u0BAE\u0BBE\u0BA4\u0B99\u0BCD\u0B95\u0BB3\u0BBF\u0BB2\u0BCD",
      ago: "{{count}} \u0BAE\u0BBE\u0BA4\u0B99\u0BCD\u0B95\u0BB3\u0BC1\u0B95\u0BCD\u0B95\u0BC1 \u0BAE\u0BC1\u0BA9\u0BCD\u0BAA\u0BC1"
    }
  },
  aboutXYears: {
    one: {
      default: "\u0B9A\u0BC1\u0BAE\u0BBE\u0BB0\u0BCD 1 \u0BB5\u0BB0\u0BC1\u0B9F\u0BAE\u0BCD",
      in: "\u0B9A\u0BC1\u0BAE\u0BBE\u0BB0\u0BCD 1 \u0B86\u0BA3\u0BCD\u0B9F\u0BBF\u0BB2\u0BCD",
      ago: "\u0B9A\u0BC1\u0BAE\u0BBE\u0BB0\u0BCD 1 \u0BB5\u0BB0\u0BC1\u0B9F\u0BAE\u0BCD \u0BAE\u0BC1\u0BA9\u0BCD\u0BAA\u0BC1"
    },
    other: {
      default: "\u0B9A\u0BC1\u0BAE\u0BBE\u0BB0\u0BCD {{count}} \u0B86\u0BA3\u0BCD\u0B9F\u0BC1\u0B95\u0BB3\u0BCD",
      in: "\u0B9A\u0BC1\u0BAE\u0BBE\u0BB0\u0BCD {{count}} \u0B86\u0BA3\u0BCD\u0B9F\u0BC1\u0B95\u0BB3\u0BBF\u0BB2\u0BCD",
      ago: "\u0B9A\u0BC1\u0BAE\u0BBE\u0BB0\u0BCD {{count}} \u0B86\u0BA3\u0BCD\u0B9F\u0BC1\u0B95\u0BB3\u0BC1\u0B95\u0BCD\u0B95\u0BC1 \u0BAE\u0BC1\u0BA9\u0BCD\u0BAA\u0BC1"
    }
  },
  xYears: {
    one: {
      default: "1 \u0BB5\u0BB0\u0BC1\u0B9F\u0BAE\u0BCD",
      in: "1 \u0B86\u0BA3\u0BCD\u0B9F\u0BBF\u0BB2\u0BCD",
      ago: "1 \u0BB5\u0BB0\u0BC1\u0B9F\u0BAE\u0BCD \u0BAE\u0BC1\u0BA9\u0BCD\u0BAA\u0BC1"
    },
    other: {
      default: "{{count}} \u0B86\u0BA3\u0BCD\u0B9F\u0BC1\u0B95\u0BB3\u0BCD",
      in: "{{count}} \u0B86\u0BA3\u0BCD\u0B9F\u0BC1\u0B95\u0BB3\u0BBF\u0BB2\u0BCD",
      ago: "{{count}} \u0B86\u0BA3\u0BCD\u0B9F\u0BC1\u0B95\u0BB3\u0BC1\u0B95\u0BCD\u0B95\u0BC1 \u0BAE\u0BC1\u0BA9\u0BCD\u0BAA\u0BC1"
    }
  },
  overXYears: {
    one: {
      default: "1 \u0BB5\u0BB0\u0BC1\u0B9F\u0BA4\u0BCD\u0BA4\u0BBF\u0BB1\u0BCD\u0B95\u0BC1 \u0BAE\u0BC7\u0BB2\u0BCD",
      in: "1 \u0BB5\u0BB0\u0BC1\u0B9F\u0BA4\u0BCD\u0BA4\u0BBF\u0BB1\u0BCD\u0B95\u0BC1\u0BAE\u0BCD \u0BAE\u0BC7\u0BB2\u0BBE\u0B95",
      ago: "1 \u0BB5\u0BB0\u0BC1\u0B9F\u0BAE\u0BCD \u0BAE\u0BC1\u0BA9\u0BCD\u0BAA\u0BC1"
    },
    other: {
      default: "{{count}} \u0B86\u0BA3\u0BCD\u0B9F\u0BC1\u0B95\u0BB3\u0BC1\u0B95\u0BCD\u0B95\u0BC1\u0BAE\u0BCD \u0BAE\u0BC7\u0BB2\u0BBE\u0B95",
      in: "{{count}} \u0B86\u0BA3\u0BCD\u0B9F\u0BC1\u0B95\u0BB3\u0BBF\u0BB2\u0BCD",
      ago: "{{count}} \u0B86\u0BA3\u0BCD\u0B9F\u0BC1\u0B95\u0BB3\u0BC1\u0B95\u0BCD\u0B95\u0BC1 \u0BAE\u0BC1\u0BA9\u0BCD\u0BAA\u0BC1"
    }
  },
  almostXYears: {
    one: {
      default: "\u0B95\u0BBF\u0B9F\u0BCD\u0B9F\u0BA4\u0BCD\u0BA4\u0B9F\u0BCD\u0B9F 1 \u0BB5\u0BB0\u0BC1\u0B9F\u0BAE\u0BCD",
      in: "\u0B95\u0BBF\u0B9F\u0BCD\u0B9F\u0BA4\u0BCD\u0BA4\u0B9F\u0BCD\u0B9F 1 \u0B86\u0BA3\u0BCD\u0B9F\u0BBF\u0BB2\u0BCD",
      ago: "\u0B95\u0BBF\u0B9F\u0BCD\u0B9F\u0BA4\u0BCD\u0BA4\u0B9F\u0BCD\u0B9F 1 \u0BB5\u0BB0\u0BC1\u0B9F\u0BAE\u0BCD \u0BAE\u0BC1\u0BA9\u0BCD\u0BAA\u0BC1"
    },
    other: {
      default: "\u0B95\u0BBF\u0B9F\u0BCD\u0B9F\u0BA4\u0BCD\u0BA4\u0B9F\u0BCD\u0B9F {{count}} \u0B86\u0BA3\u0BCD\u0B9F\u0BC1\u0B95\u0BB3\u0BCD",
      in: "\u0B95\u0BBF\u0B9F\u0BCD\u0B9F\u0BA4\u0BCD\u0BA4\u0B9F\u0BCD\u0B9F {{count}} \u0B86\u0BA3\u0BCD\u0B9F\u0BC1\u0B95\u0BB3\u0BBF\u0BB2\u0BCD",
      ago: "\u0B95\u0BBF\u0B9F\u0BCD\u0B9F\u0BA4\u0BCD\u0BA4\u0B9F\u0BCD\u0B9F {{count}} \u0B86\u0BA3\u0BCD\u0B9F\u0BC1\u0B95\u0BB3\u0BC1\u0B95\u0BCD\u0B95\u0BC1 \u0BAE\u0BC1\u0BA9\u0BCD\u0BAA\u0BC1"
    }
  }
};
var formatDistance = function formatDistance(token, count, options) {
  var tense = options !== null && options !== void 0 && options.addSuffix ? options.comparison && options.comparison > 0 ? "in" : "ago" : "default";
  var tokenValue = formatDistanceLocale[token];
  if (!isPluralType(tokenValue))
  return tokenValue[tense];
  if (count === 1) {
    return tokenValue.one[tense];
  } else {
    return tokenValue.other[tense].replace("{{count}}", String(count));
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

// lib/locale/ta/_lib/formatLong.js
var dateFormats = {
  full: "EEEE, d MMMM, y",
  long: "d MMMM, y",
  medium: "d MMM, y",
  short: "d/M/yy"
};
var timeFormats = {
  full: "a h:mm:ss zzzz",
  long: "a h:mm:ss z",
  medium: "a h:mm:ss",
  short: "a h:mm"
};
var dateTimeFormats = {
  full: "{{date}} {{time}}",
  long: "{{date}} {{time}}",
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

// lib/locale/ta/_lib/formatRelative.js
var formatRelativeLocale = {
  lastWeek: "'\u0B95\u0B9F\u0BA8\u0BCD\u0BA4' eeee p '\u0BAE\u0BA3\u0BBF\u0B95\u0BCD\u0B95\u0BC1'",
  yesterday: "'\u0BA8\u0BC7\u0BB1\u0BCD\u0BB1\u0BC1 ' p '\u0BAE\u0BA3\u0BBF\u0B95\u0BCD\u0B95\u0BC1'",
  today: "'\u0B87\u0BA9\u0BCD\u0BB1\u0BC1 ' p '\u0BAE\u0BA3\u0BBF\u0B95\u0BCD\u0B95\u0BC1'",
  tomorrow: "'\u0BA8\u0BBE\u0BB3\u0BC8 ' p '\u0BAE\u0BA3\u0BBF\u0B95\u0BCD\u0B95\u0BC1'",
  nextWeek: "eeee p '\u0BAE\u0BA3\u0BBF\u0B95\u0BCD\u0B95\u0BC1'",
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

// lib/locale/ta/_lib/localize.js
var eraValues = {
  narrow: ["\u0B95\u0BBF.\u0BAE\u0BC1.", "\u0B95\u0BBF.\u0BAA\u0BBF."],
  abbreviated: ["\u0B95\u0BBF.\u0BAE\u0BC1.", "\u0B95\u0BBF.\u0BAA\u0BBF."],
  wide: ["\u0B95\u0BBF\u0BB1\u0BBF\u0BB8\u0BCD\u0BA4\u0BC1\u0BB5\u0BC1\u0B95\u0BCD\u0B95\u0BC1 \u0BAE\u0BC1\u0BA9\u0BCD", "\u0B85\u0BA9\u0BCD\u0BA9\u0BCB \u0B9F\u0BCB\u0BAE\u0BBF\u0BA9\u0BBF"]
};
var quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["\u0B95\u0BBE\u0BB2\u0BBE.1", "\u0B95\u0BBE\u0BB2\u0BBE.2", "\u0B95\u0BBE\u0BB2\u0BBE.3", "\u0B95\u0BBE\u0BB2\u0BBE.4"],
  wide: [
  "\u0B92\u0BA9\u0BCD\u0BB1\u0BBE\u0BAE\u0BCD \u0B95\u0BBE\u0BB2\u0BBE\u0BA3\u0BCD\u0B9F\u0BC1",
  "\u0B87\u0BB0\u0BA3\u0BCD\u0B9F\u0BBE\u0BAE\u0BCD \u0B95\u0BBE\u0BB2\u0BBE\u0BA3\u0BCD\u0B9F\u0BC1",
  "\u0BAE\u0BC2\u0BA9\u0BCD\u0BB1\u0BBE\u0BAE\u0BCD \u0B95\u0BBE\u0BB2\u0BBE\u0BA3\u0BCD\u0B9F\u0BC1",
  "\u0BA8\u0BBE\u0BA9\u0BCD\u0B95\u0BBE\u0BAE\u0BCD \u0B95\u0BBE\u0BB2\u0BBE\u0BA3\u0BCD\u0B9F\u0BC1"]

};
var monthValues = {
  narrow: ["\u0B9C", "\u0BAA\u0BBF", "\u0BAE\u0BBE", "\u0B8F", "\u0BAE\u0BC7", "\u0B9C\u0BC2", "\u0B9C\u0BC2", "\u0B86", "\u0B9A\u0BC6", "\u0B85", "\u0BA8", "\u0B9F\u0BBF"],
  abbreviated: [
  "\u0B9C\u0BA9.",
  "\u0BAA\u0BBF\u0BAA\u0BCD.",
  "\u0BAE\u0BBE\u0BB0\u0BCD.",
  "\u0B8F\u0BAA\u0BCD.",
  "\u0BAE\u0BC7",
  "\u0B9C\u0BC2\u0BA9\u0BCD",
  "\u0B9C\u0BC2\u0BB2\u0BC8",
  "\u0B86\u0B95.",
  "\u0B9A\u0BC6\u0BAA\u0BCD.",
  "\u0B85\u0B95\u0BCD.",
  "\u0BA8\u0BB5.",
  "\u0B9F\u0BBF\u0B9A."],

  wide: [
  "\u0B9C\u0BA9\u0BB5\u0BB0\u0BBF",
  "\u0BAA\u0BBF\u0BAA\u0BCD\u0BB0\u0BB5\u0BB0\u0BBF",
  "\u0BAE\u0BBE\u0BB0\u0BCD\u0B9A\u0BCD",
  "\u0B8F\u0BAA\u0BCD\u0BB0\u0BB2\u0BCD",
  "\u0BAE\u0BC7",
  "\u0B9C\u0BC2\u0BA9\u0BCD",
  "\u0B9C\u0BC2\u0BB2\u0BC8",
  "\u0B86\u0B95\u0BB8\u0BCD\u0B9F\u0BCD",
  "\u0B9A\u0BC6\u0BAA\u0BCD\u0B9F\u0BAE\u0BCD\u0BAA\u0BB0\u0BCD",
  "\u0B85\u0B95\u0BCD\u0B9F\u0BCB\u0BAA\u0BB0\u0BCD",
  "\u0BA8\u0BB5\u0BAE\u0BCD\u0BAA\u0BB0\u0BCD",
  "\u0B9F\u0BBF\u0B9A\u0BAE\u0BCD\u0BAA\u0BB0\u0BCD"]

};
var dayValues = {
  narrow: ["\u0B9E\u0BBE", "\u0BA4\u0BBF", "\u0B9A\u0BC6", "\u0BAA\u0BC1", "\u0BB5\u0BBF", "\u0BB5\u0BC6", "\u0B9A"],
  short: ["\u0B9E\u0BBE", "\u0BA4\u0BBF", "\u0B9A\u0BC6", "\u0BAA\u0BC1", "\u0BB5\u0BBF", "\u0BB5\u0BC6", "\u0B9A"],
  abbreviated: ["\u0B9E\u0BBE\u0BAF\u0BBF.", "\u0BA4\u0BBF\u0B99\u0BCD.", "\u0B9A\u0BC6\u0BB5\u0BCD.", "\u0BAA\u0BC1\u0BA4.", "\u0BB5\u0BBF\u0BAF\u0BBE.", "\u0BB5\u0BC6\u0BB3\u0BCD.", "\u0B9A\u0BA9\u0BBF"],
  wide: [
  "\u0B9E\u0BBE\u0BAF\u0BBF\u0BB1\u0BC1",
  "\u0BA4\u0BBF\u0B99\u0BCD\u0B95\u0BB3\u0BCD",
  "\u0B9A\u0BC6\u0BB5\u0BCD\u0BB5\u0BBE\u0BAF\u0BCD",
  "\u0BAA\u0BC1\u0BA4\u0BA9\u0BCD",
  "\u0BB5\u0BBF\u0BAF\u0BBE\u0BB4\u0BA9\u0BCD",
  "\u0BB5\u0BC6\u0BB3\u0BCD\u0BB3\u0BBF",
  "\u0B9A\u0BA9\u0BBF"]

};
var dayPeriodValues = {
  narrow: {
    am: "\u0BAE\u0BC1.\u0BAA",
    pm: "\u0BAA\u0BBF.\u0BAA",
    midnight: "\u0BA8\u0BB3\u0BCD.",
    noon: "\u0BA8\u0BA3\u0BCD.",
    morning: "\u0B95\u0BBE.",
    afternoon: "\u0BAE\u0BA4\u0BBF.",
    evening: "\u0BAE\u0BBE.",
    night: "\u0B87\u0BB0."
  },
  abbreviated: {
    am: "\u0BAE\u0BC1\u0BB1\u0BCD\u0BAA\u0B95\u0BB2\u0BCD",
    pm: "\u0BAA\u0BBF\u0BB1\u0BCD\u0BAA\u0B95\u0BB2\u0BCD",
    midnight: "\u0BA8\u0BB3\u0BCD\u0BB3\u0BBF\u0BB0\u0BB5\u0BC1",
    noon: "\u0BA8\u0BA3\u0BCD\u0BAA\u0B95\u0BB2\u0BCD",
    morning: "\u0B95\u0BBE\u0BB2\u0BC8",
    afternoon: "\u0BAE\u0BA4\u0BBF\u0BAF\u0BAE\u0BCD",
    evening: "\u0BAE\u0BBE\u0BB2\u0BC8",
    night: "\u0B87\u0BB0\u0BB5\u0BC1"
  },
  wide: {
    am: "\u0BAE\u0BC1\u0BB1\u0BCD\u0BAA\u0B95\u0BB2\u0BCD",
    pm: "\u0BAA\u0BBF\u0BB1\u0BCD\u0BAA\u0B95\u0BB2\u0BCD",
    midnight: "\u0BA8\u0BB3\u0BCD\u0BB3\u0BBF\u0BB0\u0BB5\u0BC1",
    noon: "\u0BA8\u0BA3\u0BCD\u0BAA\u0B95\u0BB2\u0BCD",
    morning: "\u0B95\u0BBE\u0BB2\u0BC8",
    afternoon: "\u0BAE\u0BA4\u0BBF\u0BAF\u0BAE\u0BCD",
    evening: "\u0BAE\u0BBE\u0BB2\u0BC8",
    night: "\u0B87\u0BB0\u0BB5\u0BC1"
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: "\u0BAE\u0BC1.\u0BAA",
    pm: "\u0BAA\u0BBF.\u0BAA",
    midnight: "\u0BA8\u0BB3\u0BCD.",
    noon: "\u0BA8\u0BA3\u0BCD.",
    morning: "\u0B95\u0BBE.",
    afternoon: "\u0BAE\u0BA4\u0BBF.",
    evening: "\u0BAE\u0BBE.",
    night: "\u0B87\u0BB0."
  },
  abbreviated: {
    am: "\u0BAE\u0BC1\u0BB1\u0BCD\u0BAA\u0B95\u0BB2\u0BCD",
    pm: "\u0BAA\u0BBF\u0BB1\u0BCD\u0BAA\u0B95\u0BB2\u0BCD",
    midnight: "\u0BA8\u0BB3\u0BCD\u0BB3\u0BBF\u0BB0\u0BB5\u0BC1",
    noon: "\u0BA8\u0BA3\u0BCD\u0BAA\u0B95\u0BB2\u0BCD",
    morning: "\u0B95\u0BBE\u0BB2\u0BC8",
    afternoon: "\u0BAE\u0BA4\u0BBF\u0BAF\u0BAE\u0BCD",
    evening: "\u0BAE\u0BBE\u0BB2\u0BC8",
    night: "\u0B87\u0BB0\u0BB5\u0BC1"
  },
  wide: {
    am: "\u0BAE\u0BC1\u0BB1\u0BCD\u0BAA\u0B95\u0BB2\u0BCD",
    pm: "\u0BAA\u0BBF\u0BB1\u0BCD\u0BAA\u0B95\u0BB2\u0BCD",
    midnight: "\u0BA8\u0BB3\u0BCD\u0BB3\u0BBF\u0BB0\u0BB5\u0BC1",
    noon: "\u0BA8\u0BA3\u0BCD\u0BAA\u0B95\u0BB2\u0BCD",
    morning: "\u0B95\u0BBE\u0BB2\u0BC8",
    afternoon: "\u0BAE\u0BA4\u0BBF\u0BAF\u0BAE\u0BCD",
    evening: "\u0BAE\u0BBE\u0BB2\u0BC8",
    night: "\u0B87\u0BB0\u0BB5\u0BC1"
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

// lib/locale/ta/_lib/match.js
var matchOrdinalNumberPattern = /^(\d+)(வது)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(கி.மு.|கி.பி.)/i,
  abbreviated: /^(கி\.?\s?மு\.?|கி\.?\s?பி\.?)/,
  wide: /^(கிறிஸ்துவுக்கு\sமுன்|அன்னோ\sடோமினி)/i
};
var parseEraPatterns = {
  any: [/கி\.?\s?மு\.?/, /கி\.?\s?பி\.?/]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^காலா.[1234]/i,
  wide: /^(ஒன்றாம்|இரண்டாம்|மூன்றாம்|நான்காம்) காலாண்டு/i
};
var parseQuarterPatterns = {
  narrow: [/1/i, /2/i, /3/i, /4/i],
  any: [
  /(1|காலா.1|ஒன்றாம்)/i,
  /(2|காலா.2|இரண்டாம்)/i,
  /(3|காலா.3|மூன்றாம்)/i,
  /(4|காலா.4|நான்காம்)/i]

};
var matchMonthPatterns = {
  narrow: /^(ஜ|பி|மா|ஏ|மே|ஜூ|ஆ|செ|அ|ந|டி)$/i,
  abbreviated: /^(ஜன.|பிப்.|மார்.|ஏப்.|மே|ஜூன்|ஜூலை|ஆக.|செப்.|அக்.|நவ.|டிச.)/i,
  wide: /^(ஜனவரி|பிப்ரவரி|மார்ச்|ஏப்ரல்|மே|ஜூன்|ஜூலை|ஆகஸ்ட்|செப்டம்பர்|அக்டோபர்|நவம்பர்|டிசம்பர்)/i
};
var parseMonthPatterns = {
  narrow: [
  /^ஜ$/i,
  /^பி/i,
  /^மா/i,
  /^ஏ/i,
  /^மே/i,
  /^ஜூ/i,
  /^ஜூ/i,
  /^ஆ/i,
  /^செ/i,
  /^அ/i,
  /^ந/i,
  /^டி/i],

  any: [
  /^ஜன/i,
  /^பி/i,
  /^மா/i,
  /^ஏ/i,
  /^மே/i,
  /^ஜூன்/i,
  /^ஜூலை/i,
  /^ஆ/i,
  /^செ/i,
  /^அ/i,
  /^ந/i,
  /^டி/i]

};
var matchDayPatterns = {
  narrow: /^(ஞா|தி|செ|பு|வி|வெ|ச)/i,
  short: /^(ஞா|தி|செ|பு|வி|வெ|ச)/i,
  abbreviated: /^(ஞாயி.|திங்.|செவ்.|புத.|வியா.|வெள்.|சனி)/i,
  wide: /^(ஞாயிறு|திங்கள்|செவ்வாய்|புதன்|வியாழன்|வெள்ளி|சனி)/i
};
var parseDayPatterns = {
  narrow: [/^ஞா/i, /^தி/i, /^செ/i, /^பு/i, /^வி/i, /^வெ/i, /^ச/i],
  any: [/^ஞா/i, /^தி/i, /^செ/i, /^பு/i, /^வி/i, /^வெ/i, /^ச/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(மு.ப|பி.ப|நள்|நண்|காலை|மதியம்|மாலை|இரவு)/i,
  any: /^(மு.ப|பி.ப|முற்பகல்|பிற்பகல்|நள்ளிரவு|நண்பகல்|காலை|மதியம்|மாலை|இரவு)/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^மு/i,
    pm: /^பி/i,
    midnight: /^நள்/i,
    noon: /^நண்/i,
    morning: /காலை/i,
    afternoon: /மதியம்/i,
    evening: /மாலை/i,
    night: /இரவு/i
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

// lib/locale/ta.js
var ta = {
  code: "ta",
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

// lib/locale/ta/cdn.js
window.dateFns = _objectSpread(_objectSpread({},
window.dateFns), {}, {
  locale: _objectSpread(_objectSpread({}, (_window$dateFns =
  window.dateFns) === null || _window$dateFns === void 0 ? void 0 : _window$dateFns.locale), {}, {
    ta: ta }) });



//# debugId=37224F769AD45E0A64756E2164756E21

//# sourceMappingURL=cdn.js.map
})();