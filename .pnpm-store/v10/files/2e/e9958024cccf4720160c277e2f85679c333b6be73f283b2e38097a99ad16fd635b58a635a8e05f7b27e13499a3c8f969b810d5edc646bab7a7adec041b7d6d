'use strict';

var parseMeasurement = require('../parsers').parseMeasurement;

function parse(v) {
  if (String(v).toLowerCase() === 'auto') {
    return 'auto';
  }
  if (String(v).toLowerCase() === 'inherit') {
    return 'inherit';
  }
  return parseMeasurement(v);
}

module.exports.isValid = function isValid(v) {
  return parse(v) !== undefined;
};

module.exports.definition = {
  set: function(v) {
    this._setProperty('flex-basis', parse(v));
  },
  get: function() {
    return this.getPropertyValue('flex-basis');
  },
  enumerable: true,
  configurable: true,
};
