'use strict';

var parseMeasurement = require('../parsers').parseMeasurement;

module.exports.definition = {
  set: function(v) {
    this._setProperty('top', parseMeasurement(v));
  },
  get: function() {
    return this.getPropertyValue('top');
  },
  enumerable: true,
  configurable: true,
};
