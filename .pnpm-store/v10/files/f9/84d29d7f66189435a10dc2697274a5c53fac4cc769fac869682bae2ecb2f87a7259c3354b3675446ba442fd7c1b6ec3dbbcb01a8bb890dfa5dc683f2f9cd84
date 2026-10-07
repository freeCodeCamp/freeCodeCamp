'use strict';

var parseNumber = require('../parsers').parseNumber;
var POSITION_AT_SHORTHAND = require('../constants').POSITION_AT_SHORTHAND;

module.exports.isValid = function isValid(v, positionAtFlexShorthand) {
  return parseNumber(v) !== undefined && positionAtFlexShorthand === POSITION_AT_SHORTHAND.second;
};

module.exports.definition = {
  set: function(v) {
    this._setProperty('flex-shrink', parseNumber(v));
  },
  get: function() {
    return this.getPropertyValue('flex-shrink');
  },
  enumerable: true,
  configurable: true,
};
