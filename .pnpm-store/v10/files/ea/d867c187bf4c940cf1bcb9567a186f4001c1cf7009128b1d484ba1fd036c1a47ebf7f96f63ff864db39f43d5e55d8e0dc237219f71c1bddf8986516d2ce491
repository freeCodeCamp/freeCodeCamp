'use strict';

var parsers = require('../parsers');

var valid_keywords = ['top', 'center', 'bottom', 'left', 'right'];

var parse = function parse(v) {
  if (v === '' || v === null) {
    return undefined;
  }
  var parts = v.split(/\s+/);
  if (parts.length > 2 || parts.length < 1) {
    return undefined;
  }
  var types = [];
  parts.forEach(function(part, index) {
    types[index] = parsers.valueType(part);
  });
  if (parts.length === 1) {
    if (types[0] === parsers.TYPES.LENGTH || types[0] === parsers.TYPES.PERCENT) {
      return v;
    }
    if (types[0] === parsers.TYPES.KEYWORD) {
      if (valid_keywords.indexOf(v.toLowerCase()) !== -1 || v.toLowerCase() === 'inherit') {
        return v;
      }
    }
    return undefined;
  }
  if (
    (types[0] === parsers.TYPES.LENGTH || types[0] === parsers.TYPES.PERCENT) &&
    (types[1] === parsers.TYPES.LENGTH || types[1] === parsers.TYPES.PERCENT)
  ) {
    return v;
  }
  if (types[0] !== parsers.TYPES.KEYWORD || types[1] !== parsers.TYPES.KEYWORD) {
    return undefined;
  }
  if (valid_keywords.indexOf(parts[0]) !== -1 && valid_keywords.indexOf(parts[1]) !== -1) {
    return v;
  }
  return undefined;
};

module.exports.isValid = function isValid(v) {
  return parse(v) !== undefined;
};

module.exports.definition = {
  set: function(v) {
    this._setProperty('background-position', parse(v));
  },
  get: function() {
    return this.getPropertyValue('background-position');
  },
  enumerable: true,
  configurable: true,
};
