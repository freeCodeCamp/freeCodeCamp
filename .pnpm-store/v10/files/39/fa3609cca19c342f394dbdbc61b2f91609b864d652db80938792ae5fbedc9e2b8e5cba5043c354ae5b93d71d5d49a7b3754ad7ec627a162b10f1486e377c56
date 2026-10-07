'use strict';

var parsers = require('../parsers');
var implicitSetter = require('../parsers').implicitSetter;

module.exports.isValid = function parse(v) {
  if (typeof v !== 'string') {
    return false;
  }
  return (
    v === '' || v.toLowerCase() === 'transparent' || parsers.valueType(v) === parsers.TYPES.COLOR
  );
};
var isValid = module.exports.isValid;

var parser = function(v) {
  if (isValid(v)) {
    return v.toLowerCase();
  }
  return undefined;
};

module.exports.definition = {
  set: implicitSetter('border', 'color', isValid, parser),
  get: function() {
    return this.getPropertyValue('border-color');
  },
  enumerable: true,
  configurable: true,
};
