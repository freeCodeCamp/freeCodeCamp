'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.toError = toError;

var _inspect = require('./inspect.js');

/**
 * Sometimes a non-error is thrown, wrap it as an Error instance to ensure a consistent Error interface.
 */
function toError(thrownValue) {
  return thrownValue instanceof Error
    ? thrownValue
    : new NonErrorThrown(thrownValue);
}

class NonErrorThrown extends Error {
  constructor(thrownValue) {
    super('Unexpected error value: ' + (0, _inspect.inspect)(thrownValue));
    this.name = 'NonErrorThrown';
    this.thrownValue = thrownValue;
  }
}
