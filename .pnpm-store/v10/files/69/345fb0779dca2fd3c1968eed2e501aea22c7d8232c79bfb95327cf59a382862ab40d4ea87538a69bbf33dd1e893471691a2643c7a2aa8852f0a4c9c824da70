function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
      t && (r = t);
      var n = 0,
        F = function () {};
      return {
        s: F,
        n: function () {
          return n >= r.length ? {
            done: !0
          } : {
            done: !1,
            value: r[n++]
          };
        },
        e: function (r) {
          throw r;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o,
    a = !0,
    u = !1;
  return {
    s: function () {
      t = t.call(r);
    },
    n: function () {
      var r = t.next();
      return a = r.done, r;
    },
    e: function (r) {
      u = !0, o = r;
    },
    f: function () {
      try {
        a || null == t.return || t.return();
      } finally {
        if (u) throw o;
      }
    }
  };
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function _inherits(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(t, "prototype", {
    writable: !1
  }), e && _setPrototypeOf(t, e);
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _wrapRegExp() {
  _wrapRegExp = function (e, r) {
    return new BabelRegExp(e, void 0, r);
  };
  var e = RegExp.prototype,
    r = new WeakMap();
  function BabelRegExp(e, t, p) {
    var o = RegExp(e, t);
    return r.set(o, p || r.get(e)), _setPrototypeOf(o, BabelRegExp.prototype);
  }
  function buildGroups(e, t) {
    var p = r.get(t);
    return Object.keys(p).reduce(function (r, t) {
      var o = p[t];
      if ("number" == typeof o) r[t] = e[o];else {
        for (var i = 0; void 0 === e[o[i]] && i + 1 < o.length;) i++;
        r[t] = e[o[i]];
      }
      return r;
    }, Object.create(null));
  }
  return _inherits(BabelRegExp, RegExp), BabelRegExp.prototype.exec = function (r) {
    var t = e.exec.call(this, r);
    if (t) {
      t.groups = buildGroups(t, this);
      var p = t.indices;
      p && (p.groups = buildGroups(p, this));
    }
    return t;
  }, BabelRegExp.prototype[Symbol.replace] = function (t, p) {
    if ("string" == typeof p) {
      var o = r.get(this);
      return e[Symbol.replace].call(this, t, p.replace(/\$<([^>]+)(>|$)/g, function (e, r, t) {
        if ("" === t) return e;
        var p = o[r];
        return Array.isArray(p) ? "$" + p.join("$") : "number" == typeof p ? "$" + p : "";
      }));
    }
    if ("function" == typeof p) {
      var i = this;
      return e[Symbol.replace].call(this, t, function () {
        var e = arguments;
        return "object" != typeof e[e.length - 1] && (e = [].slice.call(e)).push(buildGroups(e, i)), p.apply(this, e);
      });
    }
    return e[Symbol.replace].call(this, t, p);
  }, _wrapRegExp.apply(this, arguments);
}

var _plugins = [];
var _hooks = {};
var providers = {};
var defaultProviderKeys = Object.keys(providers);
function registerPlugins(nextPlugins, _ref) {
  var obj = _ref.mixoutsTo;
  _plugins = nextPlugins;
  _hooks = {};
  Object.keys(providers).forEach(function (k) {
    if (defaultProviderKeys.indexOf(k) === -1) {
      delete providers[k];
    }
  });
  _plugins.forEach(function (plugin) {
    var mixout = plugin.mixout ? plugin.mixout() : {};
    Object.keys(mixout).forEach(function (tk) {
      if (typeof mixout[tk] === 'function') {
        obj[tk] = mixout[tk];
      }
      if (_typeof(mixout[tk]) === 'object') {
        Object.keys(mixout[tk]).forEach(function (sk) {
          if (!obj[tk]) {
            obj[tk] = {};
          }
          obj[tk][sk] = mixout[tk][sk];
        });
      }
    });
    if (plugin.hooks) {
      var hooks = plugin.hooks();
      Object.keys(hooks).forEach(function (hook) {
        if (!_hooks[hook]) {
          _hooks[hook] = [];
        }
        _hooks[hook].push(hooks[hook]);
      });
    }
    if (plugin.provides) {
      plugin.provides(providers);
    }
  });
  return obj;
}
function chainHooks(hook, accumulator) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }
  var hookFns = _hooks[hook] || [];
  hookFns.forEach(function (hookFn) {
    accumulator = hookFn.apply(null, [accumulator].concat(args));
  });
  return accumulator;
}
function callHooks(hook) {
  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }
  var hookFns = _hooks[hook] || [];
  hookFns.forEach(function (hookFn) {
    hookFn.apply(null, args);
  });
  return undefined;
}
function callProvided() {
  var hook = arguments[0];
  var args = Array.prototype.slice.call(arguments, 1);
  return providers[hook] ? providers[hook].apply(null, args) : undefined;
}

var noop = function noop() {};
var _WINDOW = {};
var _DOCUMENT = {};
var _MUTATION_OBSERVER = null;
var _PERFORMANCE = {
  mark: noop,
  measure: noop
};
try {
  if (typeof window !== 'undefined') _WINDOW = window;
  if (typeof document !== 'undefined') _DOCUMENT = document;
  if (typeof MutationObserver !== 'undefined') _MUTATION_OBSERVER = MutationObserver;
  if (typeof performance !== 'undefined') _PERFORMANCE = performance;
} catch (e) {} // eslint-disable-line no-empty

var _ref = _WINDOW.navigator || {},
  _ref$userAgent = _ref.userAgent,
  userAgent = _ref$userAgent === void 0 ? '' : _ref$userAgent;
var WINDOW = _WINDOW;
var DOCUMENT = _DOCUMENT;
var MUTATION_OBSERVER = _MUTATION_OBSERVER;
var PERFORMANCE = _PERFORMANCE;
var IS_BROWSER = !!WINDOW.document;
var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';
var IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');

var _ht;
var G = /fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,
  M = /Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i;
var Q = {
    classic: {
      fa: "solid",
      fas: "solid",
      "fa-solid": "solid",
      far: "regular",
      "fa-regular": "regular",
      fal: "light",
      "fa-light": "light",
      fat: "thin",
      "fa-thin": "thin",
      fab: "brands",
      "fa-brands": "brands"
    },
    duotone: {
      fa: "solid",
      fad: "solid",
      "fa-solid": "solid",
      "fa-duotone": "solid",
      fadr: "regular",
      "fa-regular": "regular",
      fadl: "light",
      "fa-light": "light",
      fadt: "thin",
      "fa-thin": "thin"
    },
    sharp: {
      fa: "solid",
      fass: "solid",
      "fa-solid": "solid",
      fasr: "regular",
      "fa-regular": "regular",
      fasl: "light",
      "fa-light": "light",
      fast: "thin",
      "fa-thin": "thin"
    },
    "sharp-duotone": {
      fa: "solid",
      fasds: "solid",
      "fa-solid": "solid",
      fasdr: "regular",
      "fa-regular": "regular",
      fasdl: "light",
      "fa-light": "light",
      fasdt: "thin",
      "fa-thin": "thin"
    },
    slab: {
      "fa-regular": "regular",
      faslr: "regular"
    },
    "slab-press": {
      "fa-regular": "regular",
      faslpr: "regular"
    },
    thumbprint: {
      "fa-light": "light",
      fatl: "light"
    },
    whiteboard: {
      "fa-semibold": "semibold",
      fawsb: "semibold"
    },
    notdog: {
      "fa-solid": "solid",
      fans: "solid"
    },
    "notdog-duo": {
      "fa-solid": "solid",
      fands: "solid"
    },
    etch: {
      "fa-solid": "solid",
      faes: "solid"
    },
    graphite: {
      "fa-thin": "thin",
      fagt: "thin"
    },
    jelly: {
      "fa-regular": "regular",
      fajr: "regular"
    },
    "jelly-fill": {
      "fa-regular": "regular",
      fajfr: "regular"
    },
    "jelly-duo": {
      "fa-regular": "regular",
      fajdr: "regular"
    },
    chisel: {
      "fa-regular": "regular",
      facr: "regular"
    },
    utility: {
      "fa-semibold": "semibold",
      fausb: "semibold"
    },
    "utility-duo": {
      "fa-semibold": "semibold",
      faudsb: "semibold"
    },
    "utility-fill": {
      "fa-semibold": "semibold",
      faufsb: "semibold"
    }
  },
  X = {
    GROUP: "duotone-group",
    SWAP_OPACITY: "swap-opacity",
    PRIMARY: "primary",
    SECONDARY: "secondary"
  },
  Z = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"];
var i = "classic",
  t = "duotone",
  d = "sharp",
  l = "sharp-duotone",
  f = "chisel",
  h = "etch",
  n = "graphite",
  g = "jelly",
  o = "jelly-duo",
  u = "jelly-fill",
  m = "notdog",
  e = "notdog-duo",
  y = "slab",
  p = "slab-press",
  s = "thumbprint",
  w = "utility",
  a = "utility-duo",
  x = "utility-fill",
  b = "whiteboard",
  c = "Classic",
  I = "Duotone",
  F = "Sharp",
  v = "Sharp Duotone",
  S = "Chisel",
  A = "Etch",
  P = "Graphite",
  j = "Jelly",
  B = "Jelly Duo",
  N = "Jelly Fill",
  k = "Notdog",
  D = "Notdog Duo",
  T = "Slab",
  C = "Slab Press",
  W = "Thumbprint",
  K = "Utility",
  R = "Utility Duo",
  L = "Utility Fill",
  U = "Whiteboard",
  dt = [i, t, d, l, f, h, n, g, o, u, m, e, y, p, s, w, a, x, b],
  ht = (_ht = {}, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_ht, i, c), t, I), d, F), l, v), f, S), h, A), n, P), g, j), o, B), u, N), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_ht, m, k), e, D), y, T), p, C), s, W), w, K), a, R), x, L), b, U));
var yt = {
    classic: {
      900: "fas",
      400: "far",
      normal: "far",
      300: "fal",
      100: "fat"
    },
    duotone: {
      900: "fad",
      400: "fadr",
      300: "fadl",
      100: "fadt"
    },
    sharp: {
      900: "fass",
      400: "fasr",
      300: "fasl",
      100: "fast"
    },
    "sharp-duotone": {
      900: "fasds",
      400: "fasdr",
      300: "fasdl",
      100: "fasdt"
    },
    slab: {
      400: "faslr"
    },
    "slab-press": {
      400: "faslpr"
    },
    whiteboard: {
      600: "fawsb"
    },
    thumbprint: {
      300: "fatl"
    },
    notdog: {
      900: "fans"
    },
    "notdog-duo": {
      900: "fands"
    },
    etch: {
      900: "faes"
    },
    graphite: {
      100: "fagt"
    },
    chisel: {
      400: "facr"
    },
    jelly: {
      400: "fajr"
    },
    "jelly-fill": {
      400: "fajfr"
    },
    "jelly-duo": {
      400: "fajdr"
    },
    utility: {
      600: "fausb"
    },
    "utility-duo": {
      600: "faudsb"
    },
    "utility-fill": {
      600: "faufsb"
    }
  };
var Kt = {
    "Font Awesome 7 Free": {
      900: "fas",
      400: "far"
    },
    "Font Awesome 7 Pro": {
      900: "fas",
      400: "far",
      normal: "far",
      300: "fal",
      100: "fat"
    },
    "Font Awesome 7 Brands": {
      400: "fab",
      normal: "fab"
    },
    "Font Awesome 7 Duotone": {
      900: "fad",
      400: "fadr",
      normal: "fadr",
      300: "fadl",
      100: "fadt"
    },
    "Font Awesome 7 Sharp": {
      900: "fass",
      400: "fasr",
      normal: "fasr",
      300: "fasl",
      100: "fast"
    },
    "Font Awesome 7 Sharp Duotone": {
      900: "fasds",
      400: "fasdr",
      normal: "fasdr",
      300: "fasdl",
      100: "fasdt"
    },
    "Font Awesome 7 Jelly": {
      400: "fajr",
      normal: "fajr"
    },
    "Font Awesome 7 Jelly Fill": {
      400: "fajfr",
      normal: "fajfr"
    },
    "Font Awesome 7 Jelly Duo": {
      400: "fajdr",
      normal: "fajdr"
    },
    "Font Awesome 7 Slab": {
      400: "faslr",
      normal: "faslr"
    },
    "Font Awesome 7 Slab Press": {
      400: "faslpr",
      normal: "faslpr"
    },
    "Font Awesome 7 Thumbprint": {
      300: "fatl",
      normal: "fatl"
    },
    "Font Awesome 7 Notdog": {
      900: "fans",
      normal: "fans"
    },
    "Font Awesome 7 Notdog Duo": {
      900: "fands",
      normal: "fands"
    },
    "Font Awesome 7 Etch": {
      900: "faes",
      normal: "faes"
    },
    "Font Awesome 7 Graphite": {
      100: "fagt",
      normal: "fagt"
    },
    "Font Awesome 7 Chisel": {
      400: "facr",
      normal: "facr"
    },
    "Font Awesome 7 Whiteboard": {
      600: "fawsb",
      normal: "fawsb"
    },
    "Font Awesome 7 Utility": {
      600: "fausb",
      normal: "fausb"
    },
    "Font Awesome 7 Utility Duo": {
      600: "faudsb",
      normal: "faudsb"
    },
    "Font Awesome 7 Utility Fill": {
      600: "faufsb",
      normal: "faufsb"
    }
  };
var Et = new Map([["classic", {
    defaultShortPrefixId: "fas",
    defaultStyleId: "solid",
    styleIds: ["solid", "regular", "light", "thin", "brands"],
    futureStyleIds: [],
    defaultFontWeight: 900
  }], ["duotone", {
    defaultShortPrefixId: "fad",
    defaultStyleId: "solid",
    styleIds: ["solid", "regular", "light", "thin"],
    futureStyleIds: [],
    defaultFontWeight: 900
  }], ["sharp", {
    defaultShortPrefixId: "fass",
    defaultStyleId: "solid",
    styleIds: ["solid", "regular", "light", "thin"],
    futureStyleIds: [],
    defaultFontWeight: 900
  }], ["sharp-duotone", {
    defaultShortPrefixId: "fasds",
    defaultStyleId: "solid",
    styleIds: ["solid", "regular", "light", "thin"],
    futureStyleIds: [],
    defaultFontWeight: 900
  }], ["chisel", {
    defaultShortPrefixId: "facr",
    defaultStyleId: "regular",
    styleIds: ["regular"],
    futureStyleIds: [],
    defaultFontWeight: 400
  }], ["etch", {
    defaultShortPrefixId: "faes",
    defaultStyleId: "solid",
    styleIds: ["solid"],
    futureStyleIds: [],
    defaultFontWeight: 900
  }], ["graphite", {
    defaultShortPrefixId: "fagt",
    defaultStyleId: "thin",
    styleIds: ["thin"],
    futureStyleIds: [],
    defaultFontWeight: 100
  }], ["jelly", {
    defaultShortPrefixId: "fajr",
    defaultStyleId: "regular",
    styleIds: ["regular"],
    futureStyleIds: [],
    defaultFontWeight: 400
  }], ["jelly-duo", {
    defaultShortPrefixId: "fajdr",
    defaultStyleId: "regular",
    styleIds: ["regular"],
    futureStyleIds: [],
    defaultFontWeight: 400
  }], ["jelly-fill", {
    defaultShortPrefixId: "fajfr",
    defaultStyleId: "regular",
    styleIds: ["regular"],
    futureStyleIds: [],
    defaultFontWeight: 400
  }], ["notdog", {
    defaultShortPrefixId: "fans",
    defaultStyleId: "solid",
    styleIds: ["solid"],
    futureStyleIds: [],
    defaultFontWeight: 900
  }], ["notdog-duo", {
    defaultShortPrefixId: "fands",
    defaultStyleId: "solid",
    styleIds: ["solid"],
    futureStyleIds: [],
    defaultFontWeight: 900
  }], ["slab", {
    defaultShortPrefixId: "faslr",
    defaultStyleId: "regular",
    styleIds: ["regular"],
    futureStyleIds: [],
    defaultFontWeight: 400
  }], ["slab-press", {
    defaultShortPrefixId: "faslpr",
    defaultStyleId: "regular",
    styleIds: ["regular"],
    futureStyleIds: [],
    defaultFontWeight: 400
  }], ["thumbprint", {
    defaultShortPrefixId: "fatl",
    defaultStyleId: "light",
    styleIds: ["light"],
    futureStyleIds: [],
    defaultFontWeight: 300
  }], ["utility", {
    defaultShortPrefixId: "fausb",
    defaultStyleId: "semibold",
    styleIds: ["semibold"],
    futureStyleIds: [],
    defaultFontWeight: 600
  }], ["utility-duo", {
    defaultShortPrefixId: "faudsb",
    defaultStyleId: "semibold",
    styleIds: ["semibold"],
    futureStyleIds: [],
    defaultFontWeight: 600
  }], ["utility-fill", {
    defaultShortPrefixId: "faufsb",
    defaultStyleId: "semibold",
    styleIds: ["semibold"],
    futureStyleIds: [],
    defaultFontWeight: 600
  }], ["whiteboard", {
    defaultShortPrefixId: "fawsb",
    defaultStyleId: "semibold",
    styleIds: ["semibold"],
    futureStyleIds: [],
    defaultFontWeight: 600
  }]]),
  Mt = {
    chisel: {
      regular: "facr"
    },
    classic: {
      brands: "fab",
      light: "fal",
      regular: "far",
      solid: "fas",
      thin: "fat"
    },
    duotone: {
      light: "fadl",
      regular: "fadr",
      solid: "fad",
      thin: "fadt"
    },
    etch: {
      solid: "faes"
    },
    graphite: {
      thin: "fagt"
    },
    jelly: {
      regular: "fajr"
    },
    "jelly-duo": {
      regular: "fajdr"
    },
    "jelly-fill": {
      regular: "fajfr"
    },
    notdog: {
      solid: "fans"
    },
    "notdog-duo": {
      solid: "fands"
    },
    sharp: {
      light: "fasl",
      regular: "fasr",
      solid: "fass",
      thin: "fast"
    },
    "sharp-duotone": {
      light: "fasdl",
      regular: "fasdr",
      solid: "fasds",
      thin: "fasdt"
    },
    slab: {
      regular: "faslr"
    },
    "slab-press": {
      regular: "faslpr"
    },
    thumbprint: {
      light: "fatl"
    },
    utility: {
      semibold: "fausb"
    },
    "utility-duo": {
      semibold: "faudsb"
    },
    "utility-fill": {
      semibold: "faufsb"
    },
    whiteboard: {
      semibold: "fawsb"
    }
  };
var Ht = ["fak", "fa-kit", "fakd", "fa-kit-duotone"],
  Qt = {
    kit: {
      fak: "kit",
      "fa-kit": "kit"
    },
    "kit-duotone": {
      fakd: "kit-duotone",
      "fa-kit-duotone": "kit-duotone"
    }
  },
  Xt = ["kit"];
var J = "kit",
  r = "kit-duotone",
  E = "Kit",
  _ = "Kit Duotone",
  ll = _defineProperty(_defineProperty({}, J, E), r, _);
var sl = {
  kit: {
    "fa-kit": "fak"
  },
  "kit-duotone": {
    "fa-kit-duotone": "fakd"
  }
};
var hl = {
    "Font Awesome Kit": {
      400: "fak",
      normal: "fak"
    },
    "Font Awesome Kit Duotone": {
      400: "fakd",
      normal: "fakd"
    }
  },
  nl = {
    kit: {
      fak: "fa-kit"
    },
    "kit-duotone": {
      fakd: "fa-kit-duotone"
    }
  };
var ml = {
    kit: {
      kit: "fak"
    },
    "kit-duotone": {
      "kit-duotone": "fakd"
    }
  };

var _wt;
var t$1 = {
    GROUP: "duotone-group",
    SWAP_OPACITY: "swap-opacity",
    PRIMARY: "primary",
    SECONDARY: "secondary"
  },
  f$1 = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-graphite", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"];
var h$1 = "classic",
  o$1 = "duotone",
  n$1 = "sharp",
  s$1 = "sharp-duotone",
  u$1 = "chisel",
  g$1 = "etch",
  y$1 = "graphite",
  m$1 = "jelly",
  a$1 = "jelly-duo",
  p$1 = "jelly-fill",
  w$1 = "notdog",
  e$1 = "notdog-duo",
  b$1 = "slab",
  c$1 = "slab-press",
  r$1 = "thumbprint",
  x$1 = "utility",
  i$1 = "utility-duo",
  I$1 = "utility-fill",
  F$1 = "whiteboard",
  v$1 = "Classic",
  S$1 = "Duotone",
  A$1 = "Sharp",
  P$1 = "Sharp Duotone",
  j$1 = "Chisel",
  B$1 = "Etch",
  N$1 = "Graphite",
  k$1 = "Jelly",
  D$1 = "Jelly Duo",
  C$1 = "Jelly Fill",
  T$1 = "Notdog",
  L$1 = "Notdog Duo",
  W$1 = "Slab",
  R$1 = "Slab Press",
  K$1 = "Thumbprint",
  U$1 = "Utility",
  J$1 = "Utility Duo",
  E$1 = "Utility Fill",
  _$1 = "Whiteboard",
  wt$1 = (_wt = {}, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_wt, h$1, v$1), o$1, S$1), n$1, A$1), s$1, P$1), u$1, j$1), g$1, B$1), y$1, N$1), m$1, k$1), a$1, D$1), p$1, C$1), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_wt, w$1, T$1), e$1, L$1), b$1, W$1), c$1, R$1), r$1, K$1), x$1, U$1), i$1, J$1), I$1, E$1), F$1, _$1));
var G$1 = "kit",
  d$1 = "kit-duotone",
  M$1 = "Kit",
  O = "Kit Duotone",
  dl$1 = _defineProperty(_defineProperty({}, G$1, M$1), d$1, O);
var Hl = {
    classic: {
      "fa-brands": "fab",
      "fa-duotone": "fad",
      "fa-light": "fal",
      "fa-regular": "far",
      "fa-solid": "fas",
      "fa-thin": "fat"
    },
    duotone: {
      "fa-regular": "fadr",
      "fa-light": "fadl",
      "fa-thin": "fadt"
    },
    sharp: {
      "fa-solid": "fass",
      "fa-regular": "fasr",
      "fa-light": "fasl",
      "fa-thin": "fast"
    },
    "sharp-duotone": {
      "fa-solid": "fasds",
      "fa-regular": "fasdr",
      "fa-light": "fasdl",
      "fa-thin": "fasdt"
    },
    slab: {
      "fa-regular": "faslr"
    },
    "slab-press": {
      "fa-regular": "faslpr"
    },
    whiteboard: {
      "fa-semibold": "fawsb"
    },
    thumbprint: {
      "fa-light": "fatl"
    },
    notdog: {
      "fa-solid": "fans"
    },
    "notdog-duo": {
      "fa-solid": "fands"
    },
    etch: {
      "fa-solid": "faes"
    },
    graphite: {
      "fa-thin": "fagt"
    },
    jelly: {
      "fa-regular": "fajr"
    },
    "jelly-fill": {
      "fa-regular": "fajfr"
    },
    "jelly-duo": {
      "fa-regular": "fajdr"
    },
    chisel: {
      "fa-regular": "facr"
    },
    utility: {
      "fa-semibold": "fausb"
    },
    "utility-duo": {
      "fa-semibold": "faudsb"
    },
    "utility-fill": {
      "fa-semibold": "faufsb"
    }
  },
  Y$1 = {
    classic: ["fas", "far", "fal", "fat", "fad"],
    duotone: ["fadr", "fadl", "fadt"],
    sharp: ["fass", "fasr", "fasl", "fast"],
    "sharp-duotone": ["fasds", "fasdr", "fasdl", "fasdt"],
    slab: ["faslr"],
    "slab-press": ["faslpr"],
    whiteboard: ["fawsb"],
    thumbprint: ["fatl"],
    notdog: ["fans"],
    "notdog-duo": ["fands"],
    etch: ["faes"],
    graphite: ["fagt"],
    jelly: ["fajr"],
    "jelly-fill": ["fajfr"],
    "jelly-duo": ["fajdr"],
    chisel: ["facr"],
    utility: ["fausb"],
    "utility-duo": ["faudsb"],
    "utility-fill": ["faufsb"]
  },
  Xl = {
    classic: {
      fab: "fa-brands",
      fad: "fa-duotone",
      fal: "fa-light",
      far: "fa-regular",
      fas: "fa-solid",
      fat: "fa-thin"
    },
    duotone: {
      fadr: "fa-regular",
      fadl: "fa-light",
      fadt: "fa-thin"
    },
    sharp: {
      fass: "fa-solid",
      fasr: "fa-regular",
      fasl: "fa-light",
      fast: "fa-thin"
    },
    "sharp-duotone": {
      fasds: "fa-solid",
      fasdr: "fa-regular",
      fasdl: "fa-light",
      fasdt: "fa-thin"
    },
    slab: {
      faslr: "fa-regular"
    },
    "slab-press": {
      faslpr: "fa-regular"
    },
    whiteboard: {
      fawsb: "fa-semibold"
    },
    thumbprint: {
      fatl: "fa-light"
    },
    notdog: {
      fans: "fa-solid"
    },
    "notdog-duo": {
      fands: "fa-solid"
    },
    etch: {
      faes: "fa-solid"
    },
    graphite: {
      fagt: "fa-thin"
    },
    jelly: {
      fajr: "fa-regular"
    },
    "jelly-fill": {
      fajfr: "fa-regular"
    },
    "jelly-duo": {
      fajdr: "fa-regular"
    },
    chisel: {
      facr: "fa-regular"
    },
    utility: {
      fausb: "fa-semibold"
    },
    "utility-duo": {
      faudsb: "fa-semibold"
    },
    "utility-fill": {
      faufsb: "fa-semibold"
    }
  },
  V$1 = ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands", "fa-semibold"],
  lo = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", "faslr", "faslpr", "fawsb", "fatl", "fans", "fands", "faes", "fagt", "fajr", "fajfr", "fajdr", "facr", "fausb", "faudsb", "faufsb"].concat(f$1, V$1),
  $ = ["solid", "regular", "light", "thin", "duotone", "brands", "semibold"],
  z$1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  q$1 = z$1.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
  H$1 = ["aw", "fw", "pull-left", "pull-right"],
  so = [].concat(_toConsumableArray(Object.keys(Y$1)), $, H$1, ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "inverse", "layers", "layers-bottom-left", "layers-bottom-right", "layers-counter", "layers-text", "layers-top-left", "layers-top-right", "li", "pull-end", "pull-start", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", "width-auto", "width-fixed", t$1.GROUP, t$1.SWAP_OPACITY, t$1.PRIMARY, t$1.SECONDARY]).concat(z$1.map(function (l) {
    return "".concat(l, "x");
  })).concat(q$1.map(function (l) {
    return "w-".concat(l);
  }));
var fo = {
    "Font Awesome 5 Free": {
      900: "fas",
      400: "far"
    },
    "Font Awesome 5 Pro": {
      900: "fas",
      400: "far",
      normal: "far",
      300: "fal"
    },
    "Font Awesome 5 Brands": {
      400: "fab",
      normal: "fab"
    },
    "Font Awesome 5 Duotone": {
      900: "fad"
    }
  };

var NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';
var UNITS_IN_GRID = 16;
var DEFAULT_CSS_PREFIX = 'fa';
var DEFAULT_REPLACEMENT_CLASS = 'svg-inline--fa';
var DATA_FA_I2SVG = 'data-fa-i2svg';
var DATA_FA_PSEUDO_ELEMENT = 'data-fa-pseudo-element';
var DATA_FA_PSEUDO_ELEMENT_PENDING = 'data-fa-pseudo-element-pending';
var DATA_PREFIX = 'data-prefix';
var DATA_ICON = 'data-icon';
var HTML_CLASS_I2SVG_BASE_CLASS = 'fontawesome-i2svg';
var MUTATION_APPROACH_ASYNC = 'async';
var TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS = ['HTML', 'HEAD', 'STYLE', 'SCRIPT'];
var PSEUDO_ELEMENTS = ['::before', '::after', ':before', ':after'];
var PRODUCTION = function () {
  try {
    return process.env.NODE_ENV === 'production';
  } catch (e$$1) {
    return false;
  }
}();
function familyProxy(obj) {
  // Defaults to the classic family if family is not available
  return new Proxy(obj, {
    get: function get(target, prop) {
      return prop in target ? target[prop] : target[i];
    }
  });
}
var _PREFIX_TO_STYLE = _objectSpread2({}, Q);

// We changed FACSSClassesToStyleId in the icons repo to be canonical and as such, "classic" family does not have any
// duotone styles.  But we do still need duotone in _PREFIX_TO_STYLE below, so we are manually adding
// {'fa-duotone': 'duotone'}
_PREFIX_TO_STYLE[i] = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, {
  'fa-duotone': 'duotone'
}), Q[i]), Qt['kit']), Qt['kit-duotone']);
var PREFIX_TO_STYLE = familyProxy(_PREFIX_TO_STYLE);
var _STYLE_TO_PREFIX = _objectSpread2({}, Mt);

// We changed FAStyleIdToShortPrefixId in the icons repo to be canonical and as such, "classic" family does not have any
// duotone styles.  But we do still need duotone in _STYLE_TO_PREFIX below, so we are manually adding {duotone: 'fad'}
_STYLE_TO_PREFIX[i] = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, {
  duotone: 'fad'
}), _STYLE_TO_PREFIX[i]), ml['kit']), ml['kit-duotone']);
var STYLE_TO_PREFIX = familyProxy(_STYLE_TO_PREFIX);
var _PREFIX_TO_LONG_STYLE = _objectSpread2({}, Xl);
_PREFIX_TO_LONG_STYLE[i] = _objectSpread2(_objectSpread2({}, _PREFIX_TO_LONG_STYLE[i]), nl['kit']);
var PREFIX_TO_LONG_STYLE = familyProxy(_PREFIX_TO_LONG_STYLE);
var _LONG_STYLE_TO_PREFIX = _objectSpread2({}, Hl);
_LONG_STYLE_TO_PREFIX[i] = _objectSpread2(_objectSpread2({}, _LONG_STYLE_TO_PREFIX[i]), sl['kit']);
var LONG_STYLE_TO_PREFIX = familyProxy(_LONG_STYLE_TO_PREFIX);
var ICON_SELECTION_SYNTAX_PATTERN = G;
var LAYERS_TEXT_CLASSNAME = 'fa-layers-text';
var FONT_FAMILY_PATTERN = M;
var _FONT_WEIGHT_TO_PREFIX = _objectSpread2({}, yt);
var FONT_WEIGHT_TO_PREFIX = familyProxy(_FONT_WEIGHT_TO_PREFIX);
var ATTRIBUTES_WATCHED_FOR_MUTATION = ['class', 'data-prefix', 'data-icon', 'data-fa-transform', 'data-fa-mask'];
var DUOTONE_CLASSES = X;
var RESERVED_CLASSES = [].concat(_toConsumableArray(Xt), _toConsumableArray(so));

var initial = WINDOW.FontAwesomeConfig || {};
function getAttrConfig(attr) {
  var element = DOCUMENT.querySelector('script[' + attr + ']');
  if (element) {
    return element.getAttribute(attr);
  }
}
function coerce(val) {
  // Getting an empty string will occur if the attribute is set on the HTML tag but without a value
  // We'll assume that this is an indication that it should be toggled to true
  if (val === '') return true;
  if (val === 'false') return false;
  if (val === 'true') return true;
  return val;
}
if (DOCUMENT && typeof DOCUMENT.querySelector === 'function') {
  var attrs = [['data-family-prefix', 'familyPrefix'], ['data-css-prefix', 'cssPrefix'], ['data-family-default', 'familyDefault'], ['data-style-default', 'styleDefault'], ['data-replacement-class', 'replacementClass'], ['data-auto-replace-svg', 'autoReplaceSvg'], ['data-auto-add-css', 'autoAddCss'], ['data-search-pseudo-elements', 'searchPseudoElements'], ['data-search-pseudo-elements-warnings', 'searchPseudoElementsWarnings'], ['data-search-pseudo-elements-full-scan', 'searchPseudoElementsFullScan'], ['data-observe-mutations', 'observeMutations'], ['data-mutate-approach', 'mutateApproach'], ['data-keep-original-source', 'keepOriginalSource'], ['data-measure-performance', 'measurePerformance'], ['data-show-missing-icons', 'showMissingIcons']];
  attrs.forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      attr = _ref2[0],
      key = _ref2[1];
    var val = coerce(getAttrConfig(attr));
    if (val !== undefined && val !== null) {
      initial[key] = val;
    }
  });
}
var _default = {
  styleDefault: 'solid',
  familyDefault: i,
  cssPrefix: DEFAULT_CSS_PREFIX,
  replacementClass: DEFAULT_REPLACEMENT_CLASS,
  autoReplaceSvg: true,
  autoAddCss: true,
  searchPseudoElements: false,
  searchPseudoElementsWarnings: true,
  searchPseudoElementsFullScan: false,
  observeMutations: true,
  mutateApproach: 'async',
  keepOriginalSource: true,
  measurePerformance: false,
  showMissingIcons: true
};

// familyPrefix is deprecated but we must still support it if present
if (initial.familyPrefix) {
  initial.cssPrefix = initial.familyPrefix;
}
var _config = _objectSpread2(_objectSpread2({}, _default), initial);
if (!_config.autoReplaceSvg) _config.observeMutations = false;
var config = {};
Object.keys(_default).forEach(function (key) {
  Object.defineProperty(config, key, {
    enumerable: true,
    set: function set(val) {
      _config[key] = val;
      _onChangeCb.forEach(function (cb) {
        return cb(config);
      });
    },
    get: function get() {
      return _config[key];
    }
  });
});

// familyPrefix is deprecated as of 6.2.0 and should be removed in 7.0.0
Object.defineProperty(config, 'familyPrefix', {
  enumerable: true,
  set: function set(val) {
    _config.cssPrefix = val;
    _onChangeCb.forEach(function (cb) {
      return cb(config);
    });
  },
  get: function get() {
    return _config.cssPrefix;
  }
});
WINDOW.FontAwesomeConfig = config;
var _onChangeCb = [];
function onChange(cb) {
  _onChangeCb.push(cb);
  return function () {
    _onChangeCb.splice(_onChangeCb.indexOf(cb), 1);
  };
}

var w$2 = WINDOW || {};
if (!w$2[NAMESPACE_IDENTIFIER]) w$2[NAMESPACE_IDENTIFIER] = {};
if (!w$2[NAMESPACE_IDENTIFIER].styles) w$2[NAMESPACE_IDENTIFIER].styles = {};
if (!w$2[NAMESPACE_IDENTIFIER].hooks) w$2[NAMESPACE_IDENTIFIER].hooks = {};
if (!w$2[NAMESPACE_IDENTIFIER].shims) w$2[NAMESPACE_IDENTIFIER].shims = [];
var namespace = w$2[NAMESPACE_IDENTIFIER];

var functions = [];
var _listener = function listener() {
  DOCUMENT.removeEventListener('DOMContentLoaded', _listener);
  loaded = 1;
  functions.map(function (fn) {
    return fn();
  });
};
var loaded = false;
if (IS_DOM) {
  loaded = (DOCUMENT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(DOCUMENT.readyState);
  if (!loaded) DOCUMENT.addEventListener('DOMContentLoaded', _listener);
}
function domready (fn) {
  if (!IS_DOM) return;
  loaded ? setTimeout(fn, 0) : functions.push(fn);
}

var d$2 = UNITS_IN_GRID;
var meaninglessTransform = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: false,
  flipY: false
};
function insertCss(css) {
  if (!css || !IS_DOM) {
    return;
  }
  var style = DOCUMENT.createElement('style');
  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  var headChildren = DOCUMENT.head.childNodes;
  var beforeChild = null;
  for (var i = headChildren.length - 1; i > -1; i--) {
    var child = headChildren[i];
    var tagName = (child.tagName || '').toUpperCase();
    if (['STYLE', 'LINK'].indexOf(tagName) > -1) {
      beforeChild = child;
    }
  }
  DOCUMENT.head.insertBefore(style, beforeChild);
  return css;
}
var idPool = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
function nextUniqueId() {
  var size = 12;
  var id = '';
  while (size-- > 0) {
    id += idPool[Math.random() * 62 | 0];
  }
  return id;
}
function toArray(obj) {
  var array = [];
  for (var i = (obj || []).length >>> 0; i--;) {
    array[i] = obj[i];
  }
  return array;
}
function classArray(node) {
  if (node.classList) {
    return toArray(node.classList);
  } else {
    return (node.getAttribute('class') || '').split(' ').filter(function (i) {
      return i;
    });
  }
}
function htmlEscape(str) {
  return "".concat(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function joinAttributes(attributes) {
  return Object.keys(attributes || {}).reduce(function (acc, attributeName) {
    return acc + "".concat(attributeName, "=\"").concat(htmlEscape(attributes[attributeName]), "\" ");
  }, '').trim();
}
function joinStyles(styles) {
  return Object.keys(styles || {}).reduce(function (acc, styleName) {
    return acc + "".concat(styleName, ": ").concat(styles[styleName].trim(), ";");
  }, '');
}
function transformIsMeaningful(transform) {
  return transform.size !== meaninglessTransform.size || transform.x !== meaninglessTransform.x || transform.y !== meaninglessTransform.y || transform.rotate !== meaninglessTransform.rotate || transform.flipX || transform.flipY;
}
function transformForSvg(_ref) {
  var transform = _ref.transform,
    containerWidth = _ref.containerWidth,
    iconWidth = _ref.iconWidth;
  var outer = {
    transform: "translate(".concat(containerWidth / 2, " 256)")
  };
  var innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
  var innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
  var innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
  var inner = {
    transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
  };
  var path = {
    transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
  };
  return {
    outer: outer,
    inner: inner,
    path: path
  };
}
function transformForCss(_ref2) {
  var transform = _ref2.transform,
    _ref2$width = _ref2.width,
    width = _ref2$width === void 0 ? UNITS_IN_GRID : _ref2$width,
    _ref2$height = _ref2.height,
    height = _ref2$height === void 0 ? UNITS_IN_GRID : _ref2$height,
    _ref2$startCentered = _ref2.startCentered,
    startCentered = _ref2$startCentered === void 0 ? false : _ref2$startCentered;
  var val = '';
  if (startCentered && IS_IE) {
    val += "translate(".concat(transform.x / d$2 - width / 2, "em, ").concat(transform.y / d$2 - height / 2, "em) ");
  } else if (startCentered) {
    val += "translate(calc(-50% + ".concat(transform.x / d$2, "em), calc(-50% + ").concat(transform.y / d$2, "em)) ");
  } else {
    val += "translate(".concat(transform.x / d$2, "em, ").concat(transform.y / d$2, "em) ");
  }
  val += "scale(".concat(transform.size / d$2 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / d$2 * (transform.flipY ? -1 : 1), ") ");
  val += "rotate(".concat(transform.rotate, "deg) ");
  return val;
}

function toHtml(abstractNodes) {
  var tag = abstractNodes.tag,
    _abstractNodes$attrib = abstractNodes.attributes,
    attributes = _abstractNodes$attrib === void 0 ? {} : _abstractNodes$attrib,
    _abstractNodes$childr = abstractNodes.children,
    children = _abstractNodes$childr === void 0 ? [] : _abstractNodes$childr;
  if (typeof abstractNodes === 'string') {
    return htmlEscape(abstractNodes);
  } else {
    return "<".concat(tag, " ").concat(joinAttributes(attributes), ">").concat(children.map(toHtml).join(''), "</").concat(tag, ">");
  }
}

function iconFromMapping(mapping, prefix, iconName) {
  if (mapping && mapping[prefix] && mapping[prefix][iconName]) {
    return {
      prefix: prefix,
      iconName: iconName,
      icon: mapping[prefix][iconName]
    };
  }
}

/**
 * Internal helper to bind a function known to have 4 arguments
 * to a given context.
 */
var bindInternal4 = function bindInternal4(func, thisContext) {
  return function (a, b, c, d) {
    return func.call(thisContext, a, b, c, d);
  };
};

/**
 * # Reduce
 *
 * A fast object `.reduce()` implementation.
 *
 * @param  {Object}   subject      The object to reduce over.
 * @param  {Function} fn           The reducer function.
 * @param  {mixed}    initialValue The initial value for the reducer, defaults to subject[0].
 * @param  {Object}   thisContext  The context for the reducer.
 * @return {mixed}                 The final result.
 */
var reduce = function fastReduceObject(subject, fn, initialValue, thisContext) {
  var keys = Object.keys(subject),
    length = keys.length,
    iterator = thisContext !== undefined ? bindInternal4(fn, thisContext) : fn,
    i,
    key,
    result;
  if (initialValue === undefined) {
    i = 1;
    result = subject[keys[0]];
  } else {
    i = 0;
    result = initialValue;
  }
  for (; i < length; i++) {
    key = keys[i];
    result = iterator(result, subject[key], key, subject);
  }
  return result;
};

/**
 * Return hexadecimal string for a unicode character
 * Returns `null` when more than one character (not bytes!) are passed
 * For example: 'K' → '7B'
 */
function toHex(unicode) {
  if (_toConsumableArray(unicode).length !== 1) return null;
  return unicode.codePointAt(0).toString(16);
}

function normalizeIcons(icons) {
  return Object.keys(icons).reduce(function (acc, iconName) {
    var icon = icons[iconName];
    var expanded = !!icon.icon;
    if (expanded) {
      acc[icon.iconName] = icon.icon;
    } else {
      acc[iconName] = icon;
    }
    return acc;
  }, {});
}
function defineIcons(prefix, icons) {
  var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var _params$skipHooks = params.skipHooks,
    skipHooks = _params$skipHooks === void 0 ? false : _params$skipHooks;
  var normalized = normalizeIcons(icons);
  if (typeof namespace.hooks.addPack === 'function' && !skipHooks) {
    namespace.hooks.addPack(prefix, normalizeIcons(icons));
  } else {
    namespace.styles[prefix] = _objectSpread2(_objectSpread2({}, namespace.styles[prefix] || {}), normalized);
  }

  /**
   * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
   * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
   * for `fas` so we'll ease the upgrade process for our users by automatically defining
   * this as well.
   */
  if (prefix === 'fas') {
    defineIcons('fa', icons);
  }
}

var MONO = 0x1;
var DUO = 0x2;

// New v7 compatible matchers using the style attribute to determine layer membership
var modernMatches = [[DUO, /*#__PURE__*/_wrapRegExp(/path opacity="([^"]*)".*d="([^"]*)".*path.*d="([^"]*)"/, {
  d2: 2,
  d1: 3
})], [DUO, /*#__PURE__*/_wrapRegExp(/path opacity="([^"]*)".*d="([^"]*)"/, {
  d2: 2
})], [MONO, /*#__PURE__*/_wrapRegExp(/path fill="currentColor".*d="([^"]+)"/, {
  d1: 1
})]];

// Old <= v6 matchers, these should rarely get used.
//
// Why are there so many? Over the lifecycle of version 5 and 6 we modified the
// syntax for our source SVG files several times. These patterns match the
// historical record and attempt to handle backwards-compatibility in rare edge
// cases (loading version 6 SVG source files using the version 7 SVG parser)
var legacyMatches = [[DUO, /*#__PURE__*/_wrapRegExp(/path class="([^"]*secondary[^"]*)".*d="([^"]+)".*path class="([^"]*primary[^"]*)".*d="([^"]+)"/, {
  attr2: 1,
  d2: 2,
  attr1: 3,
  d1: 4
})], [DUO, /*#__PURE__*/_wrapRegExp(/path class="([^"]*primary[^"]*)".*d="([^"]+)".*path class="([^"]*secondary[^"]*)".*d="([^"]+)"/, {
  attr1: 1,
  d1: 2,
  attr2: 3,
  d2: 4
})], [DUO, /*#__PURE__*/_wrapRegExp(/path class="([^"]*primary[^"]*)".*d="([^"]+)"/, {
  attr1: 1,
  d1: 2
})], [DUO, /*#__PURE__*/_wrapRegExp(/path class="([^"]*secondary[^"]*)".*d="([^"]+)"/, {
  attr2: 1,
  d2: 2
})], [DUO, /*#__PURE__*/_wrapRegExp(/path d="([^"]+)".*class="([^"]*secondary[^"]*)".*path d="([^"]+)".*class="([^"]*primary[^"]*)"/, {
  d2: 1,
  attr2: 2,
  d1: 3,
  attr1: 4
})], [DUO, /*#__PURE__*/_wrapRegExp(/path d="([^"]+)".*class="([^"]*primary[^"]*)".*path d="([^"]+)".*class="([^"]*secondary[^"]*)"/, {
  d1: 1,
  attr1: 2,
  d2: 3,
  attr2: 4
})], [DUO, /*#__PURE__*/_wrapRegExp(/path d="([^"]+)".*class="([^"]*primary[^"]*)"/, {
  d1: 1,
  attr1: 2
})], [DUO, /*#__PURE__*/_wrapRegExp(/path d="([^"]+)".*class="([^"]*secondary[^"]*)"/, {
  d2: 1,
  attr2: 2
})], [DUO, /*#__PURE__*/_wrapRegExp(/path d="([^"]+)".*path d="([^"]+)"/, {
  d1: 1,
  d2: 2
})], [MONO, /*#__PURE__*/_wrapRegExp(/path d="([^"]+)"/, {
  d1: 1
})], [MONO, /*#__PURE__*/_wrapRegExp(/path style="([^"]+)".*d="([^"]+)"/, {
  attr1: 1,
  d1: 2
})]];

var styles = namespace.styles,
  shims = namespace.shims;
var FAMILY_NAMES = Object.keys(PREFIX_TO_LONG_STYLE);
var PREFIXES_FOR_FAMILY = FAMILY_NAMES.reduce(function (acc, familyId) {
  acc[familyId] = Object.keys(PREFIX_TO_LONG_STYLE[familyId]);
  return acc;
}, {});
var _defaultUsablePrefix = null;
var _byUnicode = {};
var _byLigature = {};
var _byOldName = {};
var _byOldUnicode = {};
var _byAlias = {};
function isReserved(name) {
  return ~RESERVED_CLASSES.indexOf(name);
}
function getIconName(cssPrefix, cls) {
  var parts = cls.split('-');
  var prefix = parts[0];
  var iconName = parts.slice(1).join('-');
  if (prefix === cssPrefix && iconName !== '' && !isReserved(iconName)) {
    return iconName;
  } else {
    return null;
  }
}
var build = function build() {
  var lookup = function lookup(reducer) {
    return reduce(styles, function (o$$1, style, prefix) {
      o$$1[prefix] = reduce(style, reducer, {});
      return o$$1;
    }, {});
  };
  _byUnicode = lookup(function (acc, icon, iconName) {
    if (icon[3]) {
      acc[icon[3]] = iconName;
    }
    if (icon[2]) {
      var aliases = icon[2].filter(function (a$$1) {
        return typeof a$$1 === 'number';
      });
      aliases.forEach(function (alias) {
        acc[alias.toString(16)] = iconName;
      });
    }
    return acc;
  });
  _byLigature = lookup(function (acc, icon, iconName) {
    acc[iconName] = iconName;
    if (icon[2]) {
      var aliases = icon[2].filter(function (a$$1) {
        return typeof a$$1 === 'string';
      });
      aliases.forEach(function (alias) {
        acc[alias] = iconName;
      });
    }
    return acc;
  });
  _byAlias = lookup(function (acc, icon, iconName) {
    var aliases = icon[2];
    acc[iconName] = iconName;
    aliases.forEach(function (alias) {
      acc[alias] = iconName;
    });
    return acc;
  });

  // If we have a Kit, we can't determine if regular is available since we
  // could be auto-fetching it. We'll have to assume that it is available.
  var hasRegular = 'far' in styles || config.autoFetchSvg;
  var shimLookups = reduce(shims, function (acc, shim) {
    var maybeNameMaybeUnicode = shim[0];
    var prefix = shim[1];
    var iconName = shim[2];
    if (prefix === 'far' && !hasRegular) {
      prefix = 'fas';
    }
    if (typeof maybeNameMaybeUnicode === 'string') {
      acc.names[maybeNameMaybeUnicode] = {
        prefix: prefix,
        iconName: iconName
      };
    }
    if (typeof maybeNameMaybeUnicode === 'number') {
      acc.unicodes[maybeNameMaybeUnicode.toString(16)] = {
        prefix: prefix,
        iconName: iconName
      };
    }
    return acc;
  }, {
    names: {},
    unicodes: {}
  });
  _byOldName = shimLookups.names;
  _byOldUnicode = shimLookups.unicodes;
  _defaultUsablePrefix = getCanonicalPrefix(config.styleDefault, {
    family: config.familyDefault
  });
};
onChange(function (c$$1) {
  _defaultUsablePrefix = getCanonicalPrefix(c$$1.styleDefault, {
    family: config.familyDefault
  });
});
build();
function byUnicode(prefix, unicode) {
  return (_byUnicode[prefix] || {})[unicode];
}
function byLigature(prefix, ligature) {
  return (_byLigature[prefix] || {})[ligature];
}
function byAlias(prefix, alias) {
  return (_byAlias[prefix] || {})[alias];
}
function byOldName(name) {
  return _byOldName[name] || {
    prefix: null,
    iconName: null
  };
}
function byOldUnicode(unicode) {
  var oldUnicode = _byOldUnicode[unicode];
  var newUnicode = byUnicode('fas', unicode);
  return oldUnicode || (newUnicode ? {
    prefix: 'fas',
    iconName: newUnicode
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function getDefaultUsablePrefix() {
  return _defaultUsablePrefix;
}
var emptyCanonicalIcon = function emptyCanonicalIcon() {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};
function getFamilyId(values) {
  var family = i;
  var famProps = FAMILY_NAMES.reduce(function (acc, familyId) {
    acc[familyId] = "".concat(config.cssPrefix, "-").concat(familyId);
    return acc;
  }, {});
  dt.forEach(function (familyId) {
    if (values.includes(famProps[familyId]) || values.some(function (v$$1) {
      return PREFIXES_FOR_FAMILY[familyId].includes(v$$1);
    })) {
      family = familyId;
    }
  });
  return family;
}
function getCanonicalPrefix(styleOrPrefix) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$family = params.family,
    family = _params$family === void 0 ? i : _params$family;
  var style = PREFIX_TO_STYLE[family][styleOrPrefix];

  // handles the exception of passing in only a family of 'duotone' with no style
  if (family === t && !styleOrPrefix) {
    return 'fad';
  }
  var prefix = STYLE_TO_PREFIX[family][styleOrPrefix] || STYLE_TO_PREFIX[family][style];
  var defined = styleOrPrefix in namespace.styles ? styleOrPrefix : null;
  var result = prefix || defined || null;
  return result;
}
function moveNonFaClassesToRest(classNames) {
  var rest = [];
  var iconName = null;
  classNames.forEach(function (cls) {
    var result = getIconName(config.cssPrefix, cls);
    if (result) {
      iconName = result;
    } else if (cls) {
      rest.push(cls);
    }
  });
  return {
    iconName: iconName,
    rest: rest
  };
}
function sortedUniqueValues(arr) {
  return arr.sort().filter(function (value, index, arr) {
    return arr.indexOf(value) === index;
  });
}
var _faCombinedClasses = lo.concat(Ht);
function getCanonicalIcon(values) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$skipLookups = params.skipLookups,
    skipLookups = _params$skipLookups === void 0 ? false : _params$skipLookups;
  var givenPrefix = null;
  var faStyleOrFamilyClasses = sortedUniqueValues(values.filter(function (cls) {
    return _faCombinedClasses.includes(cls);
  }));
  var nonStyleOrFamilyClasses = sortedUniqueValues(values.filter(function (cls) {
    return !_faCombinedClasses.includes(cls);
  }));
  var faStyles = faStyleOrFamilyClasses.filter(function (cls) {
    givenPrefix = cls;
    return !Z.includes(cls);
  });
  var _faStyles = _slicedToArray(faStyles, 1),
    _faStyles$ = _faStyles[0],
    styleFromValues = _faStyles$ === void 0 ? null : _faStyles$;
  var family = getFamilyId(faStyleOrFamilyClasses);
  var canonical = _objectSpread2(_objectSpread2({}, moveNonFaClassesToRest(nonStyleOrFamilyClasses)), {}, {
    prefix: getCanonicalPrefix(styleFromValues, {
      family: family
    })
  });
  return _objectSpread2(_objectSpread2(_objectSpread2({}, canonical), getDefaultCanonicalPrefix({
    values: values,
    family: family,
    styles: styles,
    config: config,
    canonical: canonical,
    givenPrefix: givenPrefix
  })), applyShimAndAlias(skipLookups, givenPrefix, canonical));
}
function applyShimAndAlias(skipLookups, givenPrefix, canonical) {
  var prefix = canonical.prefix,
    iconName = canonical.iconName;
  if (skipLookups || !prefix || !iconName) {
    return {
      prefix: prefix,
      iconName: iconName
    };
  }
  var shim = givenPrefix === 'fa' ? byOldName(iconName) : {};
  var aliasIconName = byAlias(prefix, iconName);
  iconName = shim.iconName || aliasIconName || iconName;
  prefix = shim.prefix || prefix;
  if (prefix === 'far' && !styles['far'] && styles['fas'] && !config.autoFetchSvg) {
    // Allow a fallback from the regular style to solid if regular is not available
    // but only if we aren't auto-fetching SVGs
    prefix = 'fas';
  }
  return {
    prefix: prefix,
    iconName: iconName
  };
}
var newCanonicalFamilies = dt.filter(function (familyId) {
  return familyId !== i || familyId !== t;
});
var newCanonicalStyles = Object.keys(Xl).filter(function (key) {
  return key !== i;
}).map(function (key) {
  return Object.keys(Xl[key]);
}).flat();
function getDefaultCanonicalPrefix(prefixOptions) {
  var values = prefixOptions.values,
    family = prefixOptions.family,
    canonical = prefixOptions.canonical,
    _prefixOptions$givenP = prefixOptions.givenPrefix,
    givenPrefix = _prefixOptions$givenP === void 0 ? '' : _prefixOptions$givenP,
    _prefixOptions$styles = prefixOptions.styles,
    styles = _prefixOptions$styles === void 0 ? {} : _prefixOptions$styles,
    _prefixOptions$config = prefixOptions.config,
    config$$1 = _prefixOptions$config === void 0 ? {} : _prefixOptions$config;
  var isDuotoneFamily = family === t;
  var valuesHasDuotone = values.includes('fa-duotone') || values.includes('fad');
  var defaultFamilyIsDuotone = config$$1.familyDefault === 'duotone';
  var canonicalPrefixIsDuotone = canonical.prefix === 'fad' || canonical.prefix === 'fa-duotone';
  if (!isDuotoneFamily && (valuesHasDuotone || defaultFamilyIsDuotone || canonicalPrefixIsDuotone)) {
    canonical.prefix = 'fad';
  }
  if (values.includes('fa-brands') || values.includes('fab')) {
    canonical.prefix = 'fab';
  }
  if (!canonical.prefix && newCanonicalFamilies.includes(family)) {
    var validPrefix = Object.keys(styles).find(function (key) {
      return newCanonicalStyles.includes(key);
    });
    if (validPrefix || config$$1.autoFetchSvg) {
      var defaultPrefix = Et.get(family).defaultShortPrefixId;
      canonical.prefix = defaultPrefix;
      canonical.iconName = byAlias(canonical.prefix, canonical.iconName) || canonical.iconName;
    }
  }
  if (canonical.prefix === 'fa' || givenPrefix === 'fa') {
    // The fa prefix is not canonical. So if it has made it through until this point
    // we will shift it to the correct prefix.
    canonical.prefix = getDefaultUsablePrefix() || 'fas';
  }
  return canonical;
}

var Library = /*#__PURE__*/function () {
  function Library() {
    _classCallCheck(this, Library);
    this.definitions = {};
  }
  return _createClass(Library, [{
    key: "add",
    value: function add() {
      var _this = this;
      for (var _len = arguments.length, definitions = new Array(_len), _key = 0; _key < _len; _key++) {
        definitions[_key] = arguments[_key];
      }
      var additions = definitions.reduce(this._pullDefinitions, {});
      Object.keys(additions).forEach(function (key) {
        _this.definitions[key] = _objectSpread2(_objectSpread2({}, _this.definitions[key] || {}), additions[key]);
        defineIcons(key, additions[key]);

        // To keep support for older Classic styles, also add longer prefixes
        var longPrefix = PREFIX_TO_LONG_STYLE[i][key];
        if (longPrefix) defineIcons(longPrefix, additions[key]);
        build();
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      this.definitions = {};
    }
  }, {
    key: "_pullDefinitions",
    value: function _pullDefinitions(additions, definition) {
      var normalized = definition.prefix && definition.iconName && definition.icon ? {
        0: definition
      } : definition;
      Object.keys(normalized).map(function (key) {
        var _normalized$key = normalized[key],
          prefix = _normalized$key.prefix,
          iconName = _normalized$key.iconName,
          icon = _normalized$key.icon;
        var aliases = icon[2];
        if (!additions[prefix]) additions[prefix] = {};
        if (aliases.length > 0) {
          aliases.forEach(function (alias) {
            if (typeof alias === 'string') {
              additions[prefix][alias] = icon;
            }
          });
        }
        additions[prefix][iconName] = icon;
      });
      return additions;
    }
  }]);
}();

function findIconDefinition(iconLookup) {
  if (iconLookup.prefix === 'fa') {
    iconLookup.prefix = 'fas';
  }
  var iconName = iconLookup.iconName;
  var prefix = iconLookup.prefix || getDefaultUsablePrefix();
  if (!iconName) return;
  iconName = byAlias(prefix, iconName) || iconName;
  return iconFromMapping(library.definitions, prefix, iconName) || iconFromMapping(namespace.styles, prefix, iconName);
}
var library = new Library();
var noAuto = function noAuto() {
  config.autoReplaceSvg = false;
  config.observeMutations = false;
  callHooks('noAuto');
};
var dom = {
  i2svg: function i2svg() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    if (IS_DOM) {
      callHooks('beforeI2svg', params);
      callProvided('pseudoElements2svg', params);
      return callProvided('i2svg', params);
    } else {
      return Promise.reject(new Error('Operation requires a DOM of some kind.'));
    }
  },
  watch: function watch() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var autoReplaceSvgRoot = params.autoReplaceSvgRoot;
    if (config.autoReplaceSvg === false) {
      config.autoReplaceSvg = true;
    }
    config.observeMutations = true;
    domready(function () {
      autoReplace({
        autoReplaceSvgRoot: autoReplaceSvgRoot
      });
      callHooks('watch', params);
    });
  }
};
var parse = {
  icon: function icon(_icon) {
    if (_icon === null) {
      return null;
    }
    if (_typeof(_icon) === 'object' && _icon.prefix && _icon.iconName) {
      return {
        prefix: _icon.prefix,
        iconName: byAlias(_icon.prefix, _icon.iconName) || _icon.iconName
      };
    }
    if (Array.isArray(_icon) && _icon.length === 2) {
      var iconName = _icon[1].indexOf('fa-') === 0 ? _icon[1].slice(3) : _icon[1];
      var prefix = getCanonicalPrefix(_icon[0]);
      return {
        prefix: prefix,
        iconName: byAlias(prefix, iconName) || iconName
      };
    }
    if (typeof _icon === 'string' && (_icon.indexOf("".concat(config.cssPrefix, "-")) > -1 || _icon.match(ICON_SELECTION_SYNTAX_PATTERN))) {
      var canonicalIcon = getCanonicalIcon(_icon.split(' '), {
        skipLookups: true
      });
      return {
        prefix: canonicalIcon.prefix || getDefaultUsablePrefix(),
        iconName: byAlias(canonicalIcon.prefix, canonicalIcon.iconName) || canonicalIcon.iconName
      };
    }
    if (typeof _icon === 'string') {
      var _prefix = getDefaultUsablePrefix();
      return {
        prefix: _prefix,
        iconName: byAlias(_prefix, _icon) || _icon
      };
    }
  }
};
var api = {
  noAuto: noAuto,
  config: config,
  dom: dom,
  parse: parse,
  library: library,
  findIconDefinition: findIconDefinition,
  toHtml: toHtml
};
var autoReplace = function autoReplace() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _params$autoReplaceSv = params.autoReplaceSvgRoot,
    autoReplaceSvgRoot = _params$autoReplaceSv === void 0 ? DOCUMENT : _params$autoReplaceSv;
  if ((Object.keys(namespace.styles).length > 0 || config.autoFetchSvg) && IS_DOM && config.autoReplaceSvg) api.dom.i2svg({
    node: autoReplaceSvgRoot
  });
};

var baseStyles = ":root, :host {\n  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';\n  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';\n  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';\n  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';\n  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';\n  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';\n  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';\n  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';\n  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';\n  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';\n  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';\n  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';\n  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';\n  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';\n  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';\n  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';\n  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';\n  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';\n  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';\n  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';\n  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';\n  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';\n  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';\n}\n\n.svg-inline--fa {\n  box-sizing: content-box;\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285714em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left,\n.svg-inline--fa .fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-pull-right,\n.svg-inline--fa .fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.fa-layers .svg-inline--fa {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-counter-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xs {\n  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-sm {\n  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-lg {\n  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-xl {\n  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-2xl {\n  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */\n  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */\n  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */\n}\n\n.fa-width-auto {\n  --fa-width: auto;\n}\n\n.fa-fw,\n.fa-width-fixed {\n  --fa-width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-inline-start: var(--fa-li-margin, 2.5em);\n  padding-inline-start: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n/* Heads Up: Bordered Icons will not be supported in the future!\n  - This feature will be deprecated in the next major release of Font Awesome (v8)!\n  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.\n*/\n/* Notes:\n* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)\n* --@{v.$css-prefix}-border-padding =\n  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)\n  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)\n*/\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.0625em);\n  box-sizing: var(--fa-border-box-sizing, content-box);\n  padding: var(--fa-border-padding, 0.1875em 0.25em);\n}\n\n.fa-pull-left,\n.fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right,\n.fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  animation-name: fa-beat;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  animation-name: fa-bounce;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  animation-name: fa-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  animation-name: fa-beat-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  animation-name: fa-flip;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  animation-name: fa-shake;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  animation-name: fa-spin;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  animation-name: fa-spin;\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n  .fa-bounce,\n  .fa-fade,\n  .fa-beat-fade,\n  .fa-flip,\n  .fa-pulse,\n  .fa-shake,\n  .fa-spin,\n  .fa-spin-pulse {\n    animation: none !important;\n    transition: none !important;\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    transform: scale(1);\n  }\n  45% {\n    transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-shake {\n  0% {\n    transform: rotate(-15deg);\n  }\n  4% {\n    transform: rotate(15deg);\n  }\n  8%, 24% {\n    transform: rotate(-18deg);\n  }\n  12%, 28% {\n    transform: rotate(18deg);\n  }\n  16% {\n    transform: rotate(-22deg);\n  }\n  20% {\n    transform: rotate(22deg);\n  }\n  32% {\n    transform: rotate(-12deg);\n  }\n  36% {\n    transform: rotate(12deg);\n  }\n  40%, 100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.svg-inline--fa.fa-inverse {\n  fill: var(--fa-inverse, #fff);\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  line-height: 2em;\n  position: relative;\n  vertical-align: middle;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  --fa-width: 1.25em;\n  height: 1em;\n  width: var(--fa-width);\n}\n.svg-inline--fa.fa-stack-2x {\n  --fa-width: 2.5em;\n  height: 2em;\n  width: var(--fa-width);\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  z-index: var(--fa-stack-z-index, auto);\n}";

function css() {
  var dcp = DEFAULT_CSS_PREFIX;
  var drc = DEFAULT_REPLACEMENT_CLASS;
  var fp = config.cssPrefix;
  var rc = config.replacementClass;
  var s = baseStyles;
  if (fp !== dcp || rc !== drc) {
    var dPatt = new RegExp("\\.".concat(dcp, "\\-"), 'g');
    var customPropPatt = new RegExp("\\--".concat(dcp, "\\-"), 'g');
    var rPatt = new RegExp("\\.".concat(drc), 'g');
    s = s.replace(dPatt, ".".concat(fp, "-")).replace(customPropPatt, "--".concat(fp, "-")).replace(rPatt, ".".concat(rc));
  }
  return s;
}
var _cssInserted = false;
function ensureCss() {
  if (config.autoAddCss && !_cssInserted) {
    insertCss(css());
    _cssInserted = true;
  }
}
var injectCss = {
  mixout: function mixout() {
    return {
      dom: {
        css: css,
        insertCss: ensureCss
      }
    };
  },
  hooks: function hooks() {
    return {
      beforeDOMElementCreation: function beforeDOMElementCreation() {
        ensureCss();
      },
      beforeI2svg: function beforeI2svg() {
        ensureCss();
      }
    };
  }
};

function domVariants(val, abstractCreator) {
  Object.defineProperty(val, 'abstract', {
    get: abstractCreator
  });
  Object.defineProperty(val, 'html', {
    get: function get() {
      return val.abstract.map(function (a) {
        return toHtml(a);
      });
    }
  });
  Object.defineProperty(val, 'node', {
    get: function get() {
      if (!IS_DOM) return undefined;
      var container = DOCUMENT.createElement('div');
      container.innerHTML = val.html;
      return container.children;
    }
  });
  return val;
}

function asIcon (_ref) {
  var children = _ref.children,
    main = _ref.main,
    mask = _ref.mask,
    attributes = _ref.attributes,
    styles = _ref.styles,
    transform = _ref.transform;
  if (transformIsMeaningful(transform) && main.found && !mask.found) {
    var width = main.width,
      height = main.height;
    var offset = {
      x: width / height / 2,
      y: 0.5
    };
    attributes['style'] = joinStyles(_objectSpread2(_objectSpread2({}, styles), {}, {
      'transform-origin': "".concat(offset.x + transform.x / 16, "em ").concat(offset.y + transform.y / 16, "em")
    }));
  }
  return [{
    tag: 'svg',
    attributes: attributes,
    children: children
  }];
}

function asSymbol (_ref) {
  var prefix = _ref.prefix,
    iconName = _ref.iconName,
    children = _ref.children,
    attributes = _ref.attributes,
    symbol = _ref.symbol;
  var id = symbol === true ? "".concat(prefix, "-").concat(config.cssPrefix, "-").concat(iconName) : symbol;
  return [{
    tag: 'svg',
    attributes: {
      style: 'display: none;'
    },
    children: [{
      tag: 'symbol',
      attributes: _objectSpread2(_objectSpread2({}, attributes), {}, {
        id: id
      }),
      children: children
    }]
  }];
}

// If any of these attributes are present, don't assume the icon is decorative
function isLabeled(attributes) {
  var labels = ['aria-label', 'aria-labelledby', 'title', 'role'];
  return labels.some(function (label) {
    return label in attributes;
  });
}
function makeInlineSvgAbstract(params) {
  var _params$icons = params.icons,
    main = _params$icons.main,
    mask = _params$icons.mask,
    prefix = params.prefix,
    iconName = params.iconName,
    transform = params.transform,
    symbol = params.symbol,
    maskId = params.maskId,
    extra = params.extra,
    _params$watchable = params.watchable,
    watchable = _params$watchable === void 0 ? false : _params$watchable;
  var _ref = mask.found ? mask : main,
    width = _ref.width,
    height = _ref.height;
  var attrClass = [config.replacementClass, iconName ? "".concat(config.cssPrefix, "-").concat(iconName) : ''].filter(function (c) {
    return extra.classes.indexOf(c) === -1;
  }).filter(function (c) {
    return c !== '' || !!c;
  }).concat(extra.classes).join(' ');
  var content = {
    children: [],
    attributes: _objectSpread2(_objectSpread2({}, extra.attributes), {}, {
      'data-prefix': prefix,
      'data-icon': iconName,
      'class': attrClass,
      'role': extra.attributes.role || 'img',
      'viewBox': "0 0 ".concat(width, " ").concat(height)
    })
  };
  if (!isLabeled(extra.attributes) && !extra.attributes['aria-hidden']) {
    content.attributes['aria-hidden'] = 'true';
  }
  if (watchable) {
    content.attributes[DATA_FA_I2SVG] = '';
  }
  var args = _objectSpread2(_objectSpread2({}, content), {}, {
    prefix: prefix,
    iconName: iconName,
    main: main,
    mask: mask,
    maskId: maskId,
    transform: transform,
    symbol: symbol,
    styles: _objectSpread2({}, extra.styles)
  });
  var _ref2 = mask.found && main.found ? callProvided('generateAbstractMask', args) || {
      children: [],
      attributes: {}
    } : callProvided('generateAbstractIcon', args) || {
      children: [],
      attributes: {}
    },
    children = _ref2.children,
    attributes = _ref2.attributes;
  args.children = children;
  args.attributes = attributes;
  if (symbol) {
    return asSymbol(args);
  } else {
    return asIcon(args);
  }
}
function makeLayersTextAbstract(params) {
  var content = params.content,
    width = params.width,
    height = params.height,
    transform = params.transform,
    extra = params.extra,
    _params$watchable2 = params.watchable,
    watchable = _params$watchable2 === void 0 ? false : _params$watchable2;
  var attributes = _objectSpread2(_objectSpread2({}, extra.attributes), {}, {
    class: extra.classes.join(' ')
  });
  if (watchable) {
    attributes[DATA_FA_I2SVG] = '';
  }
  var styles = _objectSpread2({}, extra.styles);
  if (transformIsMeaningful(transform)) {
    styles['transform'] = transformForCss({
      transform: transform,
      startCentered: true,
      width: width,
      height: height
    });
    styles['-webkit-transform'] = styles['transform'];
  }
  var styleString = joinStyles(styles);
  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }
  var val = [];
  val.push({
    tag: 'span',
    attributes: attributes,
    children: [content]
  });
  return val;
}
function makeLayersCounterAbstract(params) {
  var content = params.content,
    extra = params.extra;
  var attributes = _objectSpread2(_objectSpread2({}, extra.attributes), {}, {
    class: extra.classes.join(' ')
  });
  var styleString = joinStyles(extra.styles);
  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }
  var val = [];
  val.push({
    tag: 'span',
    attributes: attributes,
    children: [content]
  });
  return val;
}

var styles$1 = namespace.styles;
function asFoundIcon(icon) {
  var width = icon[0];
  var height = icon[1];
  var _icon$slice = icon.slice(4),
    _icon$slice2 = _slicedToArray(_icon$slice, 1),
    vectorData = _icon$slice2[0];
  var element = null;
  if (Array.isArray(vectorData)) {
    element = {
      tag: 'g',
      attributes: {
        class: "".concat(config.cssPrefix, "-").concat(DUOTONE_CLASSES.GROUP)
      },
      children: [{
        tag: 'path',
        attributes: {
          class: "".concat(config.cssPrefix, "-").concat(DUOTONE_CLASSES.SECONDARY),
          fill: 'currentColor',
          d: vectorData[0]
        }
      }, {
        tag: 'path',
        attributes: {
          class: "".concat(config.cssPrefix, "-").concat(DUOTONE_CLASSES.PRIMARY),
          fill: 'currentColor',
          d: vectorData[1]
        }
      }]
    };
  } else {
    element = {
      tag: 'path',
      attributes: {
        fill: 'currentColor',
        d: vectorData
      }
    };
  }
  return {
    found: true,
    width: width,
    height: height,
    icon: element
  };
}
var missingIconResolutionMixin = {
  found: false,
  width: 512,
  height: 512
};
function maybeNotifyMissing(iconName, prefix) {
  if (!PRODUCTION && !config.showMissingIcons && iconName) {
    console.error("Icon with name \"".concat(iconName, "\" and prefix \"").concat(prefix, "\" is missing."));
  }
}
function findIcon(iconName, prefix) {
  var givenPrefix = prefix;
  if (prefix === 'fa' && config.styleDefault !== null) {
    prefix = getDefaultUsablePrefix();
  }
  return new Promise(function (resolve, reject) {
    if (givenPrefix === 'fa') {
      var shim = byOldName(iconName) || {};
      iconName = shim.iconName || iconName;
      prefix = shim.prefix || prefix;
    }
    if (iconName && prefix && styles$1[prefix] && styles$1[prefix][iconName]) {
      var icon = styles$1[prefix][iconName];
      return resolve(asFoundIcon(icon));
    }
    maybeNotifyMissing(iconName, prefix);
    resolve(_objectSpread2(_objectSpread2({}, missingIconResolutionMixin), {}, {
      icon: config.showMissingIcons && iconName ? callProvided('missingIconAbstract') || {} : {}
    }));
  });
}

var noop$1 = function noop() {};
var p$2 = config.measurePerformance && PERFORMANCE && PERFORMANCE.mark && PERFORMANCE.measure ? PERFORMANCE : {
  mark: noop$1,
  measure: noop$1
};
var preamble = "FA \"7.2.0\"";
var begin = function begin(name) {
  p$2.mark("".concat(preamble, " ").concat(name, " begins"));
  return function () {
    return end(name);
  };
};
var end = function end(name) {
  p$2.mark("".concat(preamble, " ").concat(name, " ends"));
  p$2.measure("".concat(preamble, " ").concat(name), "".concat(preamble, " ").concat(name, " begins"), "".concat(preamble, " ").concat(name, " ends"));
};
var perf = {
  begin: begin,
  end: end
};

var noop$2 = function noop() {};
function isWatched(node) {
  var i2svg = node.getAttribute ? node.getAttribute(DATA_FA_I2SVG) : null;
  return typeof i2svg === 'string';
}
function hasPrefixAndIcon(node) {
  var prefix = node.getAttribute ? node.getAttribute(DATA_PREFIX) : null;
  var icon = node.getAttribute ? node.getAttribute(DATA_ICON) : null;
  return prefix && icon;
}
function hasBeenReplaced(node) {
  return node && node.classList && node.classList.contains && node.classList.contains(config.replacementClass);
}
function getMutator() {
  if (config.autoReplaceSvg === true) {
    return mutators.replace;
  }
  var mutator = mutators[config.autoReplaceSvg];
  return mutator || mutators.replace;
}
function createElementNS(tag) {
  return DOCUMENT.createElementNS('http://www.w3.org/2000/svg', tag);
}
function createElement(tag) {
  return DOCUMENT.createElement(tag);
}
function convertSVG(abstractObj) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$ceFn = params.ceFn,
    ceFn = _params$ceFn === void 0 ? abstractObj.tag === 'svg' ? createElementNS : createElement : _params$ceFn;
  if (typeof abstractObj === 'string') {
    return DOCUMENT.createTextNode(abstractObj);
  }
  var tag = ceFn(abstractObj.tag);
  Object.keys(abstractObj.attributes || []).forEach(function (key) {
    tag.setAttribute(key, abstractObj.attributes[key]);
  });
  var children = abstractObj.children || [];
  children.forEach(function (child) {
    tag.appendChild(convertSVG(child, {
      ceFn: ceFn
    }));
  });
  return tag;
}
function nodeAsComment(node) {
  var comment = " ".concat(node.outerHTML, " ");
  /* BEGIN.ATTRIBUTION */
  comment = "".concat(comment, "Font Awesome fontawesome.com ");
  /* END.ATTRIBUTION */
  return comment;
}
var mutators = {
  replace: function replace(mutation) {
    var node = mutation[0];
    if (node.parentNode) {
      mutation[1].forEach(function (abstract) {
        node.parentNode.insertBefore(convertSVG(abstract), node);
      });
      if (node.getAttribute(DATA_FA_I2SVG) === null && config.keepOriginalSource) {
        var comment = DOCUMENT.createComment(nodeAsComment(node));
        node.parentNode.replaceChild(comment, node);
      } else {
        node.remove();
      }
    }
  },
  nest: function nest(mutation) {
    var node = mutation[0];
    var abstract = mutation[1];

    // If we already have a replaced node we do not want to continue nesting within it.
    // Short-circuit to the standard replacement
    if (~classArray(node).indexOf(config.replacementClass)) {
      return mutators.replace(mutation);
    }
    var forSvg = new RegExp("".concat(config.cssPrefix, "-.*"));
    delete abstract[0].attributes.id;
    if (abstract[0].attributes.class) {
      var splitClasses = abstract[0].attributes.class.split(' ').reduce(function (acc, cls) {
        if (cls === config.replacementClass || cls.match(forSvg)) {
          acc.toSvg.push(cls);
        } else {
          acc.toNode.push(cls);
        }
        return acc;
      }, {
        toNode: [],
        toSvg: []
      });
      abstract[0].attributes.class = splitClasses.toSvg.join(' ');
      if (splitClasses.toNode.length === 0) {
        node.removeAttribute('class');
      } else {
        node.setAttribute('class', splitClasses.toNode.join(' '));
      }
    }
    var newInnerHTML = abstract.map(function (a) {
      return toHtml(a);
    }).join('\n');
    node.setAttribute(DATA_FA_I2SVG, '');
    node.innerHTML = newInnerHTML;
  }
};
function performOperationSync(op) {
  op();
}
function perform(mutations, callback) {
  var callbackFunction = typeof callback === 'function' ? callback : noop$2;
  if (mutations.length === 0) {
    callbackFunction();
  } else {
    var frame = performOperationSync;
    if (config.mutateApproach === MUTATION_APPROACH_ASYNC) {
      frame = WINDOW.requestAnimationFrame || performOperationSync;
    }
    frame(function () {
      var mutator = getMutator();
      var mark = perf.begin('mutate');
      mutations.map(mutator);
      mark();
      callbackFunction();
    });
  }
}
var disabled = false;
function disableObservation() {
  disabled = true;
}
function enableObservation() {
  disabled = false;
}
var mo = null;
function observe(options) {
  if (!MUTATION_OBSERVER) {
    return;
  }
  if (!config.observeMutations) {
    return;
  }
  var _options$treeCallback = options.treeCallback,
    treeCallback = _options$treeCallback === void 0 ? noop$2 : _options$treeCallback,
    _options$nodeCallback = options.nodeCallback,
    nodeCallback = _options$nodeCallback === void 0 ? noop$2 : _options$nodeCallback,
    _options$pseudoElemen = options.pseudoElementsCallback,
    pseudoElementsCallback = _options$pseudoElemen === void 0 ? noop$2 : _options$pseudoElemen,
    _options$observeMutat = options.observeMutationsRoot,
    observeMutationsRoot = _options$observeMutat === void 0 ? DOCUMENT : _options$observeMutat;
  mo = new MUTATION_OBSERVER(function (objects) {
    if (disabled) return;
    var defaultPrefix = getDefaultUsablePrefix();
    toArray(objects).forEach(function (mutationRecord) {
      if (mutationRecord.type === 'childList' && mutationRecord.addedNodes.length > 0 && !isWatched(mutationRecord.addedNodes[0])) {
        if (config.searchPseudoElements) {
          pseudoElementsCallback(mutationRecord.target);
        }
        treeCallback(mutationRecord.target);
      }
      if (mutationRecord.type === 'attributes' && mutationRecord.target.parentNode && config.searchPseudoElements) {
        pseudoElementsCallback([mutationRecord.target], true);
      }
      if (mutationRecord.type === 'attributes' && isWatched(mutationRecord.target) && ~ATTRIBUTES_WATCHED_FOR_MUTATION.indexOf(mutationRecord.attributeName)) {
        if (mutationRecord.attributeName === 'class' && hasPrefixAndIcon(mutationRecord.target)) {
          var _getCanonicalIcon = getCanonicalIcon(classArray(mutationRecord.target)),
            prefix = _getCanonicalIcon.prefix,
            iconName = _getCanonicalIcon.iconName;
          mutationRecord.target.setAttribute(DATA_PREFIX, prefix || defaultPrefix);
          if (iconName) mutationRecord.target.setAttribute(DATA_ICON, iconName);
        } else if (hasBeenReplaced(mutationRecord.target)) {
          nodeCallback(mutationRecord.target);
        }
      }
    });
  });
  if (!IS_DOM) return;
  mo.observe(observeMutationsRoot, {
    childList: true,
    attributes: true,
    characterData: true,
    subtree: true
  });
}
function disconnect() {
  if (!mo) return;
  mo.disconnect();
}

function styleParser (node) {
  var style = node.getAttribute('style');
  var val = [];
  if (style) {
    val = style.split(';').reduce(function (acc, style) {
      var styles = style.split(':');
      var prop = styles[0];
      var value = styles.slice(1);
      if (prop && value.length > 0) {
        acc[prop] = value.join(':').trim();
      }
      return acc;
    }, {});
  }
  return val;
}

function classParser (node) {
  var existingPrefix = node.getAttribute('data-prefix');
  var existingIconName = node.getAttribute('data-icon');
  var innerText = node.innerText !== undefined ? node.innerText.trim() : '';
  var val = getCanonicalIcon(classArray(node));
  if (!val.prefix) {
    val.prefix = getDefaultUsablePrefix();
  }
  if (existingPrefix && existingIconName) {
    val.prefix = existingPrefix;
    val.iconName = existingIconName;
  }
  if (val.iconName && val.prefix) {
    return val;
  }
  if (val.prefix && innerText.length > 0) {
    val.iconName = byLigature(val.prefix, node.innerText) || byUnicode(val.prefix, toHex(node.innerText));
  }
  if (!val.iconName && config.autoFetchSvg && node.firstChild && node.firstChild.nodeType === Node.TEXT_NODE) {
    val.iconName = node.firstChild.data;
  }
  return val;
}

function attributesParser (node) {
  var extraAttributes = toArray(node.attributes).reduce(function (acc, attr) {
    if (acc.name !== 'class' && acc.name !== 'style') {
      acc[attr.name] = attr.value;
    }
    return acc;
  }, {});
  return extraAttributes;
}

function blankMeta() {
  return {
    iconName: null,
    prefix: null,
    transform: meaninglessTransform,
    symbol: false,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    extra: {
      classes: [],
      styles: {},
      attributes: {}
    }
  };
}
function parseMeta(node) {
  var parser = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    styleParser: true
  };
  var _classParser = classParser(node),
    iconName = _classParser.iconName,
    prefix = _classParser.prefix,
    extraClasses = _classParser.rest;
  var extraAttributes = attributesParser(node);
  var pluginMeta = chainHooks('parseNodeAttributes', {}, node);
  var extraStyles = parser.styleParser ? styleParser(node) : [];
  return _objectSpread2({
    iconName: iconName,
    prefix: prefix,
    transform: meaninglessTransform,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: false,
    extra: {
      classes: extraClasses,
      styles: extraStyles,
      attributes: extraAttributes
    }
  }, pluginMeta);
}

var styles$2 = namespace.styles;
function generateMutation(node) {
  var nodeMeta = config.autoReplaceSvg === 'nest' ? parseMeta(node, {
    styleParser: false
  }) : parseMeta(node);
  if (~nodeMeta.extra.classes.indexOf(LAYERS_TEXT_CLASSNAME)) {
    return callProvided('generateLayersText', node, nodeMeta);
  } else {
    return callProvided('generateSvgReplacementMutation', node, nodeMeta);
  }
}
function getKnownPrefixes() {
  return [].concat(_toConsumableArray(Ht), _toConsumableArray(lo));
}
function onTree(root) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  if (!IS_DOM) return Promise.resolve();
  var htmlClassList = DOCUMENT.documentElement.classList;
  var hclAdd = function hclAdd(suffix) {
    return htmlClassList.add("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
  };
  var hclRemove = function hclRemove(suffix) {
    return htmlClassList.remove("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
  };
  var prefixes = config.autoFetchSvg ? getKnownPrefixes() : Z.concat(Object.keys(styles$2));
  if (!prefixes.includes('fa')) {
    prefixes.push('fa');
  }
  var prefixesDomQuery = [".".concat(LAYERS_TEXT_CLASSNAME, ":not([").concat(DATA_FA_I2SVG, "])")].concat(prefixes.map(function (p$$1) {
    return ".".concat(p$$1, ":not([").concat(DATA_FA_I2SVG, "])");
  })).join(', ');
  if (prefixesDomQuery.length === 0) {
    return Promise.resolve();
  }
  var candidates = [];
  try {
    candidates = toArray(root.querySelectorAll(prefixesDomQuery));
  } catch (e$$1) {
    // noop
  }
  if (candidates.length > 0) {
    hclAdd('pending');
    hclRemove('complete');
  } else {
    return Promise.resolve();
  }
  var mark = perf.begin('onTree');
  var mutations = candidates.reduce(function (acc, node) {
    try {
      var mutation = generateMutation(node);
      if (mutation) {
        acc.push(mutation);
      }
    } catch (e$$1) {
      if (!PRODUCTION) {
        if (e$$1.name === 'MissingIcon') {
          console.error(e$$1);
        }
      }
    }
    return acc;
  }, []);
  return new Promise(function (resolve, reject) {
    Promise.all(mutations).then(function (resolvedMutations) {
      perform(resolvedMutations, function () {
        hclAdd('active');
        hclAdd('complete');
        hclRemove('pending');
        if (typeof callback === 'function') callback();
        mark();
        resolve();
      });
    }).catch(function (e$$1) {
      mark();
      reject(e$$1);
    });
  });
}
function onNode(node) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  generateMutation(node).then(function (mutation) {
    if (mutation) {
      perform([mutation], callback);
    }
  });
}
function resolveIcons(next) {
  return function (maybeIconDefinition) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var iconDefinition = (maybeIconDefinition || {}).icon ? maybeIconDefinition : findIconDefinition(maybeIconDefinition || {});
    var mask = params.mask;
    if (mask) {
      mask = (mask || {}).icon ? mask : findIconDefinition(mask || {});
    }
    return next(iconDefinition, _objectSpread2(_objectSpread2({}, params), {}, {
      mask: mask
    }));
  };
}
var render = function render(iconDefinition) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$transform = params.transform,
    transform = _params$transform === void 0 ? meaninglessTransform : _params$transform,
    _params$symbol = params.symbol,
    symbol = _params$symbol === void 0 ? false : _params$symbol,
    _params$mask = params.mask,
    mask = _params$mask === void 0 ? null : _params$mask,
    _params$maskId = params.maskId,
    maskId = _params$maskId === void 0 ? null : _params$maskId,
    _params$classes = params.classes,
    classes = _params$classes === void 0 ? [] : _params$classes,
    _params$attributes = params.attributes,
    attributes = _params$attributes === void 0 ? {} : _params$attributes,
    _params$styles = params.styles,
    styles = _params$styles === void 0 ? {} : _params$styles;
  if (!iconDefinition) return;
  var prefix = iconDefinition.prefix,
    iconName = iconDefinition.iconName,
    icon = iconDefinition.icon;
  return domVariants(_objectSpread2({
    type: 'icon'
  }, iconDefinition), function () {
    callHooks('beforeDOMElementCreation', {
      iconDefinition: iconDefinition,
      params: params
    });
    return makeInlineSvgAbstract({
      icons: {
        main: asFoundIcon(icon),
        mask: mask ? asFoundIcon(mask.icon) : {
          found: false,
          width: null,
          height: null,
          icon: {}
        }
      },
      prefix: prefix,
      iconName: iconName,
      transform: _objectSpread2(_objectSpread2({}, meaninglessTransform), transform),
      symbol: symbol,
      maskId: maskId,
      extra: {
        attributes: attributes,
        styles: styles,
        classes: classes
      }
    });
  });
};
var replaceElements = {
  mixout: function mixout() {
    return {
      icon: resolveIcons(render)
    };
  },
  hooks: function hooks() {
    return {
      mutationObserverCallbacks: function mutationObserverCallbacks(accumulator) {
        accumulator.treeCallback = onTree;
        accumulator.nodeCallback = onNode;
        return accumulator;
      }
    };
  },
  provides: function provides(providers$$1) {
    providers$$1.i2svg = function (params) {
      var _params$node = params.node,
        node = _params$node === void 0 ? DOCUMENT : _params$node,
        _params$callback = params.callback,
        callback = _params$callback === void 0 ? function () {} : _params$callback;
      return onTree(node, callback);
    };
    providers$$1.generateSvgReplacementMutation = function (node, nodeMeta) {
      var iconName = nodeMeta.iconName,
        prefix = nodeMeta.prefix,
        transform = nodeMeta.transform,
        symbol = nodeMeta.symbol,
        mask = nodeMeta.mask,
        maskId = nodeMeta.maskId,
        extra = nodeMeta.extra;
      return new Promise(function (resolve, reject) {
        Promise.all([findIcon(iconName, prefix), mask.iconName ? findIcon(mask.iconName, mask.prefix) : Promise.resolve({
          found: false,
          width: 512,
          height: 512,
          icon: {}
        })]).then(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
            main = _ref2[0],
            mask = _ref2[1];
          resolve([node, makeInlineSvgAbstract({
            icons: {
              main: main,
              mask: mask
            },
            prefix: prefix,
            iconName: iconName,
            transform: transform,
            symbol: symbol,
            maskId: maskId,
            extra: extra,
            watchable: true
          })]);
        }).catch(reject);
      });
    };
    providers$$1.generateAbstractIcon = function (_ref3) {
      var children = _ref3.children,
        attributes = _ref3.attributes,
        main = _ref3.main,
        transform = _ref3.transform,
        styles = _ref3.styles;
      var styleString = joinStyles(styles);
      if (styleString.length > 0) {
        attributes['style'] = styleString;
      }
      var nextChild;
      if (transformIsMeaningful(transform)) {
        nextChild = callProvided('generateAbstractTransformGrouping', {
          main: main,
          transform: transform,
          containerWidth: main.width,
          iconWidth: main.width
        });
      }
      children.push(nextChild || main.icon);
      return {
        children: children,
        attributes: attributes
      };
    };
  }
};

var layers = {
  mixout: function mixout() {
    return {
      layer: function layer(assembler) {
        var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var _params$classes = params.classes,
          classes = _params$classes === void 0 ? [] : _params$classes;
        return domVariants({
          type: 'layer'
        }, function () {
          callHooks('beforeDOMElementCreation', {
            assembler: assembler,
            params: params
          });
          var children = [];
          assembler(function (args) {
            Array.isArray(args) ? args.map(function (a) {
              children = children.concat(a.abstract);
            }) : children = children.concat(args.abstract);
          });
          return [{
            tag: 'span',
            attributes: {
              class: ["".concat(config.cssPrefix, "-layers")].concat(_toConsumableArray(classes)).join(' ')
            },
            children: children
          }];
        });
      }
    };
  }
};

var layersCounter = {
  mixout: function mixout() {
    return {
      counter: function counter(content) {
        var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var _params$title = params.title,
          title = _params$title === void 0 ? null : _params$title,
          _params$classes = params.classes,
          classes = _params$classes === void 0 ? [] : _params$classes,
          _params$attributes = params.attributes,
          attributes = _params$attributes === void 0 ? {} : _params$attributes,
          _params$styles = params.styles,
          styles = _params$styles === void 0 ? {} : _params$styles;
        return domVariants({
          type: 'counter',
          content: content
        }, function () {
          callHooks('beforeDOMElementCreation', {
            content: content,
            params: params
          });
          return makeLayersCounterAbstract({
            content: content.toString(),
            title: title,
            extra: {
              attributes: attributes,
              styles: styles,
              classes: ["".concat(config.cssPrefix, "-layers-counter")].concat(_toConsumableArray(classes))
            }
          });
        });
      }
    };
  }
};

var layersText = {
  mixout: function mixout() {
    return {
      text: function text(content) {
        var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var _params$transform = params.transform,
          transform = _params$transform === void 0 ? meaninglessTransform : _params$transform,
          _params$classes = params.classes,
          classes = _params$classes === void 0 ? [] : _params$classes,
          _params$attributes = params.attributes,
          attributes = _params$attributes === void 0 ? {} : _params$attributes,
          _params$styles = params.styles,
          styles = _params$styles === void 0 ? {} : _params$styles;
        return domVariants({
          type: 'text',
          content: content
        }, function () {
          callHooks('beforeDOMElementCreation', {
            content: content,
            params: params
          });
          return makeLayersTextAbstract({
            content: content,
            transform: _objectSpread2(_objectSpread2({}, meaninglessTransform), transform),
            extra: {
              attributes: attributes,
              styles: styles,
              classes: ["".concat(config.cssPrefix, "-layers-text")].concat(_toConsumableArray(classes))
            }
          });
        });
      }
    };
  },
  provides: function provides(providers$$1) {
    providers$$1.generateLayersText = function (node, nodeMeta) {
      var transform = nodeMeta.transform,
        extra = nodeMeta.extra;
      var width = null;
      var height = null;
      if (IS_IE) {
        var computedFontSize = parseInt(getComputedStyle(node).fontSize, 10);
        var boundingClientRect = node.getBoundingClientRect();
        width = boundingClientRect.width / computedFontSize;
        height = boundingClientRect.height / computedFontSize;
      }
      return Promise.resolve([node, makeLayersTextAbstract({
        content: node.innerHTML,
        width: width,
        height: height,
        transform: transform,
        extra: extra,
        watchable: true
      })]);
    };
  }
};

var CLEAN_CONTENT_PATTERN = new RegExp("\"", 'ug');
var SECONDARY_UNICODE_RANGE = [1105920, 1112319];
var _FONT_FAMILY_WEIGHT_TO_PREFIX = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, {
  FontAwesome: {
    normal: 'fas',
    400: 'fas'
  }
}), Kt), fo), hl);
var FONT_FAMILY_WEIGHT_TO_PREFIX = Object.keys(_FONT_FAMILY_WEIGHT_TO_PREFIX).reduce(function (acc, key) {
  acc[key.toLowerCase()] = _FONT_FAMILY_WEIGHT_TO_PREFIX[key];
  return acc;
}, {});
var FONT_FAMILY_WEIGHT_FALLBACK = Object.keys(FONT_FAMILY_WEIGHT_TO_PREFIX).reduce(function (acc, fontFamily) {
  var weights = FONT_FAMILY_WEIGHT_TO_PREFIX[fontFamily];
  acc[fontFamily] = weights[900] || _toConsumableArray(Object.entries(weights))[0][1];
  return acc;
}, {});

// Return hex value of *first* character in `content`
function hexValueFromContent(content) {
  var cleaned = content.replace(CLEAN_CONTENT_PATTERN, '');
  return toHex(_toConsumableArray(cleaned)[0] || '');
}

// Check if it's a secondary Duotone layer, by checking if:
// - Unicode value in `content` is repeated
// - Unicode value in `content` is above 0x10000
// - The "ss01" font feature is enabled on the `content`
function isSecondaryLayer(styles) {
  var hasStylisticSet = styles.getPropertyValue('font-feature-settings').includes('ss01');
  var content = styles.getPropertyValue('content');
  var cleaned = content.replace(CLEAN_CONTENT_PATTERN, '');
  var codePoint = cleaned.codePointAt(0);
  var isPrependTen = codePoint >= SECONDARY_UNICODE_RANGE[0] && codePoint <= SECONDARY_UNICODE_RANGE[1];
  var isDoubled = cleaned.length === 2 ? cleaned[0] === cleaned[1] : false;
  return isPrependTen || isDoubled || hasStylisticSet;
}
function getPrefix(fontFamily, fontWeight) {
  var fontFamilySanitized = fontFamily.replace(/^['"]|['"]$/g, '').toLowerCase();
  var fontWeightInteger = parseInt(fontWeight);
  var fontWeightSanitized = isNaN(fontWeightInteger) ? 'normal' : fontWeightInteger;
  return (FONT_FAMILY_WEIGHT_TO_PREFIX[fontFamilySanitized] || {})[fontWeightSanitized] || FONT_FAMILY_WEIGHT_FALLBACK[fontFamilySanitized];
}
function replaceForPosition(node, position) {
  var pendingAttribute = "".concat(DATA_FA_PSEUDO_ELEMENT_PENDING).concat(position.replace(':', '-'));
  return new Promise(function (resolve, reject) {
    if (node.getAttribute(pendingAttribute) !== null) {
      // This node is already being processed
      return resolve();
    }
    var children = toArray(node.children);
    var alreadyProcessedPseudoElement = children.filter(function (c$$1) {
      return c$$1.getAttribute(DATA_FA_PSEUDO_ELEMENT) === position;
    })[0];
    var styles = WINDOW.getComputedStyle(node, position);
    var fontFamily = styles.getPropertyValue('font-family');
    var fontFamilyMatch = fontFamily.match(FONT_FAMILY_PATTERN);
    var fontWeight = styles.getPropertyValue('font-weight');
    var content = styles.getPropertyValue('content');
    if (alreadyProcessedPseudoElement && !fontFamilyMatch) {
      // If we've already processed it but the current computed style does not result in a font-family,
      // that probably means that a class name that was previously present to make the icon has been
      // removed. So we now should delete the icon.
      node.removeChild(alreadyProcessedPseudoElement);
      return resolve();
    } else if (fontFamilyMatch && content !== 'none' && content !== '') {
      var _content = styles.getPropertyValue('content');
      var prefix = getPrefix(fontFamily, fontWeight);
      var hexValue = hexValueFromContent(_content);
      var isV4 = fontFamilyMatch[0].startsWith('FontAwesome');
      var isSecondary = isSecondaryLayer(styles);
      var iconName = byUnicode(prefix, hexValue);
      var iconIdentifier = iconName;
      if (isV4) {
        var iconName4 = byOldUnicode(hexValue);
        if (iconName4.iconName && iconName4.prefix) {
          iconName = iconName4.iconName;
          prefix = iconName4.prefix;
        }
      }

      // Only convert the pseudo element in this ::before/::after position into an icon if we haven't
      // already done so with the same prefix and iconName
      if (iconName && !isSecondary && (!alreadyProcessedPseudoElement || alreadyProcessedPseudoElement.getAttribute(DATA_PREFIX) !== prefix || alreadyProcessedPseudoElement.getAttribute(DATA_ICON) !== iconIdentifier)) {
        node.setAttribute(pendingAttribute, iconIdentifier);
        if (alreadyProcessedPseudoElement) {
          // Delete the old one, since we're replacing it with a new one
          node.removeChild(alreadyProcessedPseudoElement);
        }
        var meta = blankMeta();
        var extra = meta.extra;
        extra.attributes[DATA_FA_PSEUDO_ELEMENT] = position;
        findIcon(iconName, prefix).then(function (main) {
          var abstract = makeInlineSvgAbstract(_objectSpread2(_objectSpread2({}, meta), {}, {
            icons: {
              main: main,
              mask: emptyCanonicalIcon()
            },
            prefix: prefix,
            iconName: iconIdentifier,
            extra: extra,
            watchable: true
          }));
          var element = DOCUMENT.createElementNS('http://www.w3.org/2000/svg', 'svg');
          if (position === '::before') {
            node.insertBefore(element, node.firstChild);
          } else {
            node.appendChild(element);
          }
          element.outerHTML = abstract.map(function (a$$1) {
            return toHtml(a$$1);
          }).join('\n');
          node.removeAttribute(pendingAttribute);
          resolve();
        }).catch(reject);
      } else {
        resolve();
      }
    } else {
      resolve();
    }
  });
}
function replace(node) {
  return Promise.all([replaceForPosition(node, '::before'), replaceForPosition(node, '::after')]);
}
function processable(node) {
  return node.parentNode !== document.head && !~TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS.indexOf(node.tagName.toUpperCase()) && !node.getAttribute(DATA_FA_PSEUDO_ELEMENT) && (!node.parentNode || node.parentNode.tagName !== 'svg');
}
var hasPseudoElement = function hasPseudoElement(selector) {
  return !!selector && PSEUDO_ELEMENTS.some(function (pseudoSelector) {
    return selector.includes(pseudoSelector);
  });
};

// Return selectors from all available stylesheets that have
// pseudo-elements defined.
var parseCSSRuleForPseudos = function parseCSSRuleForPseudos(selectorText) {
  if (!selectorText) return [];
  var selectorSet = new Set();
  var selectors = selectorText.split(/,(?![^()]*\))/).map(function (s$$1) {
    return s$$1.trim();
  });
  selectors = selectors.flatMap(function (selector) {
    return selector.includes('(') ? selector : selector.split(',').map(function (s$$1) {
      return s$$1.trim();
    });
  });
  var _iterator = _createForOfIteratorHelper(selectors),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var selector = _step.value;
      if (hasPseudoElement(selector)) {
        // Remove pseudo-elements from the selector
        var selectorWithoutPseudo = PSEUDO_ELEMENTS.reduce(function (acc, pseudoSelector) {
          return acc.replace(pseudoSelector, '');
        }, selector);
        if (selectorWithoutPseudo !== '' && selectorWithoutPseudo !== '*') {
          selectorSet.add(selectorWithoutPseudo);
        }
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return selectorSet;
};
function searchPseudoElements(root) {
  var useAsNodeList = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  if (!IS_DOM) return;
  var nodeList;
  if (useAsNodeList) {
    nodeList = root;
  } else if (config.searchPseudoElementsFullScan) {
    nodeList = root.querySelectorAll('*');
  } else {
    // Get elements that have pseudo elements defined in the CSS
    var selectorSet = new Set();
    var _iterator2 = _createForOfIteratorHelper(document.styleSheets),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var stylesheet = _step2.value;
        try {
          var _iterator3 = _createForOfIteratorHelper(stylesheet.cssRules),
            _step3;
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var rule = _step3.value;
              var parsedSelectors = parseCSSRuleForPseudos(rule.selectorText);
              var _iterator4 = _createForOfIteratorHelper(parsedSelectors),
                _step4;
              try {
                for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                  var selector = _step4.value;
                  selectorSet.add(selector);
                }
              } catch (err) {
                _iterator4.e(err);
              } finally {
                _iterator4.f();
              }
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        } catch (e$$1) {
          if (config.searchPseudoElementsWarnings) {
            console.warn("Font Awesome: cannot parse stylesheet: ".concat(stylesheet.href, " (").concat(e$$1.message, ")\nIf it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin=\"anonymous\" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false."));
          }
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    if (!selectorSet.size) return;
    var cleanSelectors = Array.from(selectorSet).join(', ');
    try {
      nodeList = root.querySelectorAll(cleanSelectors);
    } catch (_unused) {} // eslint-disable-line no-empty
  }
  return new Promise(function (resolve, reject) {
    var operations = toArray(nodeList).filter(processable).map(replace);
    var end = perf.begin('searchPseudoElements');
    disableObservation();
    Promise.all(operations).then(function () {
      end();
      enableObservation();
      resolve();
    }).catch(function () {
      end();
      enableObservation();
      reject();
    });
  });
}
var pseudoElements = {
  hooks: function hooks() {
    return {
      mutationObserverCallbacks: function mutationObserverCallbacks(accumulator) {
        accumulator.pseudoElementsCallback = searchPseudoElements;
        return accumulator;
      }
    };
  },
  provides: function provides(providers) {
    providers.pseudoElements2svg = function (params) {
      var _params$node = params.node,
        node = _params$node === void 0 ? DOCUMENT : _params$node;
      if (config.searchPseudoElements) {
        searchPseudoElements(node);
      }
    };
  }
};

var _unwatched = false;
var mutationObserver = {
  mixout: function mixout() {
    return {
      dom: {
        unwatch: function unwatch() {
          disableObservation();
          _unwatched = true;
        }
      }
    };
  },
  hooks: function hooks() {
    return {
      bootstrap: function bootstrap() {
        observe(chainHooks('mutationObserverCallbacks', {}));
      },
      noAuto: function noAuto() {
        disconnect();
      },
      watch: function watch(params) {
        var observeMutationsRoot = params.observeMutationsRoot;
        if (_unwatched) {
          enableObservation();
        } else {
          observe(chainHooks('mutationObserverCallbacks', {
            observeMutationsRoot: observeMutationsRoot
          }));
        }
      }
    };
  }
};

var parseTransformString = function parseTransformString(transformString) {
  var transform = {
    size: 16,
    x: 0,
    y: 0,
    flipX: false,
    flipY: false,
    rotate: 0
  };
  return transformString.toLowerCase().split(' ').reduce(function (acc, n) {
    var parts = n.toLowerCase().split('-');
    var first = parts[0];
    var rest = parts.slice(1).join('-');
    if (first && rest === 'h') {
      acc.flipX = true;
      return acc;
    }
    if (first && rest === 'v') {
      acc.flipY = true;
      return acc;
    }
    rest = parseFloat(rest);
    if (isNaN(rest)) {
      return acc;
    }
    switch (first) {
      case 'grow':
        acc.size = acc.size + rest;
        break;
      case 'shrink':
        acc.size = acc.size - rest;
        break;
      case 'left':
        acc.x = acc.x - rest;
        break;
      case 'right':
        acc.x = acc.x + rest;
        break;
      case 'up':
        acc.y = acc.y - rest;
        break;
      case 'down':
        acc.y = acc.y + rest;
        break;
      case 'rotate':
        acc.rotate = acc.rotate + rest;
        break;
    }
    return acc;
  }, transform);
};
var powerTransforms = {
  mixout: function mixout() {
    return {
      parse: {
        transform: function transform(transformString) {
          return parseTransformString(transformString);
        }
      }
    };
  },
  hooks: function hooks() {
    return {
      parseNodeAttributes: function parseNodeAttributes(accumulator, node) {
        var transformString = node.getAttribute('data-fa-transform');
        if (transformString) {
          accumulator.transform = parseTransformString(transformString);
        }
        return accumulator;
      }
    };
  },
  provides: function provides(providers) {
    providers.generateAbstractTransformGrouping = function (_ref) {
      var main = _ref.main,
        transform = _ref.transform,
        containerWidth = _ref.containerWidth,
        iconWidth = _ref.iconWidth;
      var outer = {
        transform: "translate(".concat(containerWidth / 2, " 256)")
      };
      var innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
      var innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
      var innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
      var inner = {
        transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
      };
      var path = {
        transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
      };
      var operations = {
        outer: outer,
        inner: inner,
        path: path
      };
      return {
        tag: 'g',
        attributes: _objectSpread2({}, operations.outer),
        children: [{
          tag: 'g',
          attributes: _objectSpread2({}, operations.inner),
          children: [{
            tag: main.icon.tag,
            children: main.icon.children,
            attributes: _objectSpread2(_objectSpread2({}, main.icon.attributes), operations.path)
          }]
        }]
      };
    };
  }
};

var ALL_SPACE = {
  x: 0,
  y: 0,
  width: '100%',
  height: '100%'
};
function fillBlack(abstract) {
  var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  if (abstract.attributes && (abstract.attributes.fill || force)) {
    abstract.attributes.fill = 'black';
  }
  return abstract;
}
function deGroup(abstract) {
  if (abstract.tag === 'g') {
    return abstract.children;
  } else {
    return [abstract];
  }
}
var masks = {
  hooks: function hooks() {
    return {
      parseNodeAttributes: function parseNodeAttributes(accumulator, node) {
        var maskData = node.getAttribute('data-fa-mask');
        var mask = !maskData ? emptyCanonicalIcon() : getCanonicalIcon(maskData.split(' ').map(function (i) {
          return i.trim();
        }));
        if (!mask.prefix) {
          mask.prefix = getDefaultUsablePrefix();
        }
        accumulator.mask = mask;
        accumulator.maskId = node.getAttribute('data-fa-mask-id');
        return accumulator;
      }
    };
  },
  provides: function provides(providers) {
    providers.generateAbstractMask = function (_ref) {
      var children = _ref.children,
        attributes = _ref.attributes,
        main = _ref.main,
        mask = _ref.mask,
        explicitMaskId = _ref.maskId,
        transform = _ref.transform;
      var mainWidth = main.width,
        mainPath = main.icon;
      var maskWidth = mask.width,
        maskPath = mask.icon;
      var trans = transformForSvg({
        transform: transform,
        containerWidth: maskWidth,
        iconWidth: mainWidth
      });
      var maskRect = {
        tag: 'rect',
        attributes: _objectSpread2(_objectSpread2({}, ALL_SPACE), {}, {
          fill: 'white'
        })
      };
      var maskInnerGroupChildrenMixin = mainPath.children ? {
        children: mainPath.children.map(fillBlack)
      } : {};
      var maskInnerGroup = {
        tag: 'g',
        attributes: _objectSpread2({}, trans.inner),
        children: [fillBlack(_objectSpread2({
          tag: mainPath.tag,
          attributes: _objectSpread2(_objectSpread2({}, mainPath.attributes), trans.path)
        }, maskInnerGroupChildrenMixin))]
      };
      var maskOuterGroup = {
        tag: 'g',
        attributes: _objectSpread2({}, trans.outer),
        children: [maskInnerGroup]
      };
      var maskId = "mask-".concat(explicitMaskId || nextUniqueId());
      var clipId = "clip-".concat(explicitMaskId || nextUniqueId());
      var maskTag = {
        tag: 'mask',
        attributes: _objectSpread2(_objectSpread2({}, ALL_SPACE), {}, {
          id: maskId,
          maskUnits: 'userSpaceOnUse',
          maskContentUnits: 'userSpaceOnUse'
        }),
        children: [maskRect, maskOuterGroup]
      };
      var defs = {
        tag: 'defs',
        children: [{
          tag: 'clipPath',
          attributes: {
            id: clipId
          },
          children: deGroup(maskPath)
        }, maskTag]
      };
      children.push(defs, {
        tag: 'rect',
        attributes: _objectSpread2({
          'fill': 'currentColor',
          'clip-path': "url(#".concat(clipId, ")"),
          'mask': "url(#".concat(maskId, ")")
        }, ALL_SPACE)
      });
      return {
        children: children,
        attributes: attributes
      };
    };
  }
};

var missingIconIndicator = {
  provides: function provides(providers) {
    var reduceMotion = false;
    if (WINDOW.matchMedia) {
      reduceMotion = WINDOW.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    providers.missingIconAbstract = function () {
      var gChildren = [];
      var FILL = {
        fill: 'currentColor'
      };
      var ANIMATION_BASE = {
        attributeType: 'XML',
        repeatCount: 'indefinite',
        dur: '2s'
      };

      // Ring
      gChildren.push({
        tag: 'path',
        attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
          d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z'
        })
      });
      var OPACITY_ANIMATE = _objectSpread2(_objectSpread2({}, ANIMATION_BASE), {}, {
        attributeName: 'opacity'
      });
      var dot = {
        tag: 'circle',
        attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
          cx: '256',
          cy: '364',
          r: '28'
        }),
        children: []
      };
      if (!reduceMotion) {
        dot.children.push({
          tag: 'animate',
          attributes: _objectSpread2(_objectSpread2({}, ANIMATION_BASE), {}, {
            attributeName: 'r',
            values: '28;14;28;28;14;28;'
          })
        }, {
          tag: 'animate',
          attributes: _objectSpread2(_objectSpread2({}, OPACITY_ANIMATE), {}, {
            values: '1;0;1;1;0;1;'
          })
        });
      }
      gChildren.push(dot);
      gChildren.push({
        tag: 'path',
        attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
          opacity: '1',
          d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z'
        }),
        children: reduceMotion ? [] : [{
          tag: 'animate',
          attributes: _objectSpread2(_objectSpread2({}, OPACITY_ANIMATE), {}, {
            values: '1;0;0;0;0;1;'
          })
        }]
      });
      if (!reduceMotion) {
        // Exclamation
        gChildren.push({
          tag: 'path',
          attributes: _objectSpread2(_objectSpread2({}, FILL), {}, {
            opacity: '0',
            d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z'
          }),
          children: [{
            tag: 'animate',
            attributes: _objectSpread2(_objectSpread2({}, OPACITY_ANIMATE), {}, {
              values: '0;0;1;1;0;0;'
            })
          }]
        });
      }
      return {
        tag: 'g',
        attributes: {
          class: 'missing'
        },
        children: gChildren
      };
    };
  }
};

var svgSymbols = {
  hooks: function hooks() {
    return {
      parseNodeAttributes: function parseNodeAttributes(accumulator, node) {
        var symbolData = node.getAttribute('data-fa-symbol');
        var symbol = symbolData === null ? false : symbolData === '' ? true : symbolData;
        accumulator['symbol'] = symbol;
        return accumulator;
      }
    };
  }
};

function register(plugins) {
  return registerPlugins(plugins, {
    mixoutsTo: api
  });
}

export { register, injectCss as InjectCSS, replaceElements as ReplaceElements, layers as Layers, layersCounter as LayersCounter, layersText as LayersText, pseudoElements as PseudoElements, mutationObserver as MutationObserver, powerTransforms as PowerTransforms, masks as Masks, missingIconIndicator as MissingIconIndicator, svgSymbols as SvgSymbols };
