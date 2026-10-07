'use strict';

var isValid = require('./borderWidth').isValid;
module.exports.isValid = isValid;

module.exports.definition = {
  set: function(v) {
    if (isValid(v)) {
      this._setProperty('border-top-width', v);
    }
  },
  get: function() {
    return this.getPropertyValue('border-top-width');
  },
  enumerable: true,
  configurable: true,
};
