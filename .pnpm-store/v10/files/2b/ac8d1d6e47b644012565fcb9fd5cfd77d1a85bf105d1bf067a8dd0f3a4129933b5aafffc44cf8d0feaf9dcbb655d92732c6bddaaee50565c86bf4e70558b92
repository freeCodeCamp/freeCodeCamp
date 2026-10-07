'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var deprecationsSeen = {};
var resetDeprecationsSeen = exports.resetDeprecationsSeen = function resetDeprecationsSeen() {
  deprecationsSeen = {};
};

var consoleWarn = (typeof console === 'undefined' ? 'undefined' : _typeof(console)) === 'object' && typeof console.warn === 'function' ? function () {
  var _console;

  return (_console = console).warn.apply(_console, arguments);
} : function () {};

var deprecate = exports.deprecate = function deprecate(msg) {
  if (!deprecationsSeen[msg]) {
    deprecationsSeen[msg] = true;
    consoleWarn('redux-observable | DEPRECATION: ' + msg);
  }
};

var warn = exports.warn = function warn(msg) {
  consoleWarn('redux-observable | WARNING: ' + msg);
};