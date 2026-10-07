"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isMailtoURI;
var _trim = _interopRequireDefault(require("./trim"));
var _isEmail = _interopRequireDefault(require("./isEmail"));
var _assertString = _interopRequireDefault(require("./util/assertString"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function parseMailtoQueryString(queryString) {
  var allowedParams = new Set(['subject', 'body', 'cc', 'bcc']),
    query = {
      cc: '',
      bcc: ''
    };
  var isParseFailed = false;
  var queryParams = queryString.split('&');
  if (queryParams.length > 4) {
    return false;
  }
  var _iterator = _createForOfIteratorHelper(queryParams),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var q = _step.value;
      var _q$split = q.split('='),
        _q$split2 = _slicedToArray(_q$split, 2),
        key = _q$split2[0],
        value = _q$split2[1];

      // checked for invalid and duplicated query params
      if (key && !allowedParams.has(key)) {
        isParseFailed = true;
        break;
      }
      if (value && (key === 'cc' || key === 'bcc')) {
        query[key] = value;
      }
      if (key) {
        allowedParams.delete(key);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return isParseFailed ? false : query;
}
function isMailtoURI(url, options) {
  (0, _assertString.default)(url);
  if (url.indexOf('mailto:') !== 0) {
    return false;
  }
  var _url$replace$split = url.replace('mailto:', '').split('?'),
    _url$replace$split2 = _slicedToArray(_url$replace$split, 2),
    to = _url$replace$split2[0],
    _url$replace$split2$ = _url$replace$split2[1],
    queryString = _url$replace$split2$ === void 0 ? '' : _url$replace$split2$;
  if (!to && !queryString) {
    return true;
  }
  var query = parseMailtoQueryString(queryString);
  if (!query) {
    return false;
  }
  return "".concat(to, ",").concat(query.cc, ",").concat(query.bcc).split(',').every(function (email) {
    email = (0, _trim.default)(email, ' ');
    if (email) {
      return (0, _isEmail.default)(email, options);
    }
    return true;
  });
}
module.exports = exports.default;
module.exports.default = exports.default;