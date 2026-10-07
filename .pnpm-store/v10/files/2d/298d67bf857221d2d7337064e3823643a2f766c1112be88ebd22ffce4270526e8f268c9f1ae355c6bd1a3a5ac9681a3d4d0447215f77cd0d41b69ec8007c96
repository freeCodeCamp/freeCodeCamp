"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = patchFs;
var _lists = require("./util/lists");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function patchFs(vol) {
  var fs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : require('fs');
  var bkp = {};
  var patch = function patch(key, newValue) {
    bkp[key] = fs[key];
    fs[key] = newValue;
  };
  var patchMethod = function patchMethod(key) {
    return patch(key, vol[key].bind(vol));
  };
  var _iterator = _createForOfIteratorHelper(_lists.fsProps),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var prop = _step.value;
      if (typeof vol[prop] !== 'undefined') patch(prop, vol[prop]);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  if (typeof vol.StatWatcher === 'function') {
    patch('StatWatcher', vol.FSWatcher.bind(null, vol));
  }
  if (typeof vol.FSWatcher === 'function') {
    patch('FSWatcher', vol.StatWatcher.bind(null, vol));
  }
  if (typeof vol.ReadStream === 'function') {
    patch('ReadStream', vol.ReadStream.bind(null, vol));
  }
  if (typeof vol.WriteStream === 'function') {
    patch('WriteStream', vol.WriteStream.bind(null, vol));
  }
  if (typeof vol._toUnixTimestamp === 'function') patchMethod('_toUnixTimestamp');
  var _iterator2 = _createForOfIteratorHelper(_lists.fsAsyncMethods),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var method = _step2.value;
      if (typeof vol[method] === 'function') patchMethod(method);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  var _iterator3 = _createForOfIteratorHelper(_lists.fsSyncMethods),
    _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var _method = _step3.value;
      if (typeof vol[_method] === 'function') patchMethod(_method);
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  return function unpatch() {
    for (var key in bkp) fs[key] = bkp[key];
  };
}
;