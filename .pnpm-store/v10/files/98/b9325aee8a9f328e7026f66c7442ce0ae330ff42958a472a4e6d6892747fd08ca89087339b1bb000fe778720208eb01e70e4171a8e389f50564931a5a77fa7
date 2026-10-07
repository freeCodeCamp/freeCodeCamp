'use strict';

var parsers = require('../parsers');

var isValid = (module.exports.isValid = function isValid(v) {
  return (
    parsers.valueType(v) === parsers.TYPES.KEYWORD &&
    (v.toLowerCase() === 'scroll' || v.toLowerCase() === 'fixed' || v.toLowerCase() === 'inherit')
  );
});

module.exports.definition = {
  set: function(v) {
    if (!isValid(v)) {
      return;
    }
    this._setProperty('background-attachment', v);
  },
  get: function() {
    return this.getPropertyValue('background-attachment');
  },
  enumerable: true,
  configurable: true,
};
