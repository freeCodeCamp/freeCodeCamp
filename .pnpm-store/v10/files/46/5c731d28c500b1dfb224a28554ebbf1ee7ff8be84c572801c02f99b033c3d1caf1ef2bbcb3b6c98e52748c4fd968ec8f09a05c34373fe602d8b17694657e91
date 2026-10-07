'use strict';

var shorthandSetter = require('../parsers').shorthandSetter;
var shorthandGetter = require('../parsers').shorthandGetter;

var shorthand_for = {
  'border-right-width': require('./borderRightWidth'),
  'border-right-style': require('./borderRightStyle'),
  'border-right-color': require('./borderRightColor'),
};

module.exports.definition = {
  set: shorthandSetter('border-right', shorthand_for),
  get: shorthandGetter('border-right', shorthand_for),
  enumerable: true,
  configurable: true,
};
