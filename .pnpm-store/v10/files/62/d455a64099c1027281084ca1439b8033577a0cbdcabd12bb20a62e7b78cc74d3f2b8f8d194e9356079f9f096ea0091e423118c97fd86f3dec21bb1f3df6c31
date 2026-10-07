'use strict';

var isValid = (module.exports.isValid = require('./borderWidth').isValid);

module.exports.definition = {
  set: function(v) {
    if (isValid(v)) {
      this._setProperty('border-right-width', v);
    }
  },
  get: function() {
    return this.getPropertyValue('border-right-width');
  },
  enumerable: true,
  configurable: true,
};
