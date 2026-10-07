function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var arr = [];
var each = arr.forEach;
var slice = arr.slice;
var UNSAFE_KEYS = ['__proto__', 'constructor', 'prototype'];
export function defaults(obj) {
  each.call(slice.call(arguments, 1), function (source) {
    if (source) {
      for (var _i = 0, _Object$keys = Object.keys(source); _i < _Object$keys.length; _i++) {
        var prop = _Object$keys[_i];
        if (UNSAFE_KEYS.indexOf(prop) > -1) continue;
        if (obj[prop] === undefined) obj[prop] = source[prop];
      }
    }
  });
  return obj;
}
function isSafeSegmentBase(v) {
  if (typeof v !== 'string') return false;
  if (v.length === 0 || v.length > 128) return false;
  if (UNSAFE_KEYS.indexOf(v) > -1) return false;
  if (v.indexOf('..') > -1) return false;
  if (v.indexOf('\\') > -1) return false;
  if (/[\x00-\x1F\x7F]/.test(v)) return false;
  return true;
}
export function isSafeLangSegment(v) {
  if (!isSafeSegmentBase(v)) return false;
  if (v.indexOf('/') > -1) return false;
  return true;
}
export function isSafeNsSegment(v) {
  return isSafeSegmentBase(v);
}
export var isSafePathSegment = isSafeLangSegment;
var SAFETY_CHECK_BY_KEY = {
  lng: isSafeLangSegment,
  ns: isSafeNsSegment
};
export function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this;
    var args = arguments;
    var later = function later() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
function getLastOfPath(object, path, Empty) {
  function cleanKey(key) {
    return key && key.indexOf('###') > -1 ? key.replace(/###/g, '.') : key;
  }
  var stack = typeof path !== 'string' ? [].concat(path) : path.split('.');
  while (stack.length > 1) {
    if (!object) return {};
    var key = cleanKey(stack.shift());
    if (UNSAFE_KEYS.indexOf(key) > -1) return {};
    if (!Object.prototype.hasOwnProperty.call(object, key) && Empty) object[key] = new Empty();
    if (Object.prototype.hasOwnProperty.call(object, key)) object = object[key];else object = {};
  }
  if (!object) return {};
  var k = cleanKey(stack.shift());
  if (UNSAFE_KEYS.indexOf(k) > -1) return {};
  return {
    obj: object,
    k: k
  };
}
export function setPath(object, path, newValue) {
  var _getLastOfPath = getLastOfPath(object, path, Object),
    obj = _getLastOfPath.obj,
    k = _getLastOfPath.k;
  if (obj === undefined) return;
  if (Array.isArray(obj) && isNaN(k)) throw new Error("Cannot create property \"".concat(k, "\" here since object is an array"));
  obj[k] = newValue;
}
export function pushPath(object, path, newValue, concat) {
  var _getLastOfPath2 = getLastOfPath(object, path, Object),
    obj = _getLastOfPath2.obj,
    k = _getLastOfPath2.k;
  if (obj === undefined) return;
  obj[k] = obj[k] || [];
  if (concat) obj[k] = obj[k].concat(newValue);
  if (!concat) obj[k].push(newValue);
}
export function getPath(object, path) {
  var _getLastOfPath3 = getLastOfPath(object, path),
    obj = _getLastOfPath3.obj,
    k = _getLastOfPath3.k;
  if (!obj) return undefined;
  return obj[k];
}
var interpolationRegexp = /\{\{(.+?)\}\}/g;
export function interpolate(str, data) {
  return str.replace(interpolationRegexp, function (match, key) {
    var k = key.trim();
    if (UNSAFE_KEYS.indexOf(k) > -1) return match;
    var value = data[k];
    return value != null ? value : match;
  });
}
export function interpolatePath(str, data) {
  var unsafe = false;
  var result = str.replace(interpolationRegexp, function (match, key) {
    var k = key.trim();
    if (UNSAFE_KEYS.indexOf(k) > -1) return match;
    var value = data[k];
    if (value == null) return match;
    var check = SAFETY_CHECK_BY_KEY[k] || isSafeLangSegment;
    var segments = String(value).split('+');
    var _iterator = _createForOfIteratorHelper(segments),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var seg = _step.value;
        if (!check(seg)) {
          unsafe = true;
          return match;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return segments.join('+');
  });
  return unsafe ? null : result;
}