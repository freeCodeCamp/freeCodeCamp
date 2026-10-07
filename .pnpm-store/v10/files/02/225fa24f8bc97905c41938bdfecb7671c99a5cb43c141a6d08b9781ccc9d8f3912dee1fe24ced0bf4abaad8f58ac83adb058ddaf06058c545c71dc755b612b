"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.encode = encode;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function con(n) {
  return 0x80 | n & 0x3f;
}

function encode(str) {
  var arr = str.split("").map(function (x) {
    return x.charCodeAt(0);
  });
  return _encode(arr);
}

function _encode(arr) {
  if (arr.length === 0) {
    return [];
  }

  var _arr = _toArray(arr),
      n = _arr[0],
      ns = _arr.slice(1);

  if (n < 0) {
    throw new Error("utf8");
  }

  if (n < 0x80) {
    return [n].concat(_toConsumableArray(_encode(ns)));
  }

  if (n < 0x800) {
    return [0xc0 | n >>> 6, con(n)].concat(_toConsumableArray(_encode(ns)));
  }

  if (n < 0x10000) {
    return [0xe0 | n >>> 12, con(n >>> 6), con(n)].concat(_toConsumableArray(_encode(ns)));
  }

  if (n < 0x110000) {
    return [0xf0 | n >>> 18, con(n >>> 12), con(n >>> 6), con(n)].concat(_toConsumableArray(_encode(ns)));
  }

  throw new Error("utf8");
}