'use strict';

var margin = require('./margin.js');
var parsers = require('../parsers.js');

module.exports.definition = {
  set: parsers.subImplicitSetter('margin', 'left', margin.isValid, margin.parser),
  get: function() {
    return this.getPropertyValue('margin-left');
  },
  enumerable: true,
  configurable: true,
};
