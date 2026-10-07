'use strict';

var valid_styles = ['normal', 'italic', 'oblique', 'inherit'];

module.exports.isValid = function(v) {
  return valid_styles.indexOf(v.toLowerCase()) !== -1;
};

module.exports.definition = {
  set: function(v) {
    this._setProperty('font-style', v);
  },
  get: function() {
    return this.getPropertyValue('font-style');
  },
  enumerable: true,
  configurable: true,
};
