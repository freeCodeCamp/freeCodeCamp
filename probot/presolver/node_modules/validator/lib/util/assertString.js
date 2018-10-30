'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = assertString;
function assertString(input) {
  var isString = typeof input === 'string' || input instanceof String;

  if (!isString) {
    var invalidType = void 0;
    if (input === null) {
      invalidType = 'null';
    } else {
      invalidType = typeof input === 'undefined' ? 'undefined' : _typeof(input);
      if (invalidType === 'object' && input.constructor && input.constructor.hasOwnProperty('name')) {
        invalidType = input.constructor.name;
      } else {
        invalidType = 'a ' + invalidType;
      }
    }
    throw new TypeError('Expected string but received ' + invalidType + '.');
  }
}
module.exports = exports['default'];