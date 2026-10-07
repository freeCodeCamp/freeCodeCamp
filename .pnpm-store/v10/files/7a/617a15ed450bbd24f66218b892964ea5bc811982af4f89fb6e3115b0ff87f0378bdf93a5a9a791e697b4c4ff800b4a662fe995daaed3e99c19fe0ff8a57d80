"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.request = exports.cancel = void 0;

var _canUseDOM = _interopRequireDefault(require("./canUseDOM"));

/* https://github.com/component/raf */
var prev = new Date().getTime();

function fallback(fn) {
  var curr = new Date().getTime();
  var ms = Math.max(0, 16 - (curr - prev));
  var handle = setTimeout(fn, ms);
  prev = curr;
  return handle;
}

var vendors = ['', 'webkit', 'moz', 'o', 'ms'];
var cancelMethod = 'clearTimeout';
var rafImpl = fallback; // eslint-disable-next-line import/no-mutable-exports

var getKey = function getKey(vendor, k) {
  return vendor + (!vendor ? k : k[0].toUpperCase() + k.substr(1)) + "AnimationFrame";
};

if (_canUseDOM.default) {
  vendors.some(function (vendor) {
    var rafMethod = getKey(vendor, 'request');

    if (rafMethod in window) {
      cancelMethod = getKey(vendor, 'cancel'); // @ts-ignore

      rafImpl = function rafImpl(cb) {
        return window[rafMethod](cb);
      };
    }

    return !!rafImpl;
  });
}

var cancel = function cancel(id) {
  // @ts-ignore
  if (typeof window[cancelMethod] === 'function') window[cancelMethod](id);
};

exports.cancel = cancel;
var request = rafImpl;
exports.request = request;