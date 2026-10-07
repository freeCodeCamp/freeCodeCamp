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

module.exports.definition = {
  set: function(v) {
    this._setProperty('width', parse(v));
  },
  get: function() {
    return this.getPropertyValue('width');
  },
  enumerable: true,
  configurable: true,
};
