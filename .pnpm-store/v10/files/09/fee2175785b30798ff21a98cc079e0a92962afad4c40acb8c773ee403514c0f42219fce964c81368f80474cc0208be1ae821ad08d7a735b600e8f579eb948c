"use strict";

const prepareValue = require("../parsers").prepareValue;

module.exports.getPropertyDescriptor = function getPropertyDescriptor(property) {
  return {
    set(v) {
      this._setProperty(property, prepareValue(v));
    },
    get() {
      return this.getPropertyValue(property);
    },
    enumerable: true,
    configurable: true
  };
};
