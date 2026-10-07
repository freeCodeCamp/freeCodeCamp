'use strict';

var shorthandSetter = require('../parsers').shorthandSetter;
var shorthandGetter = require('../parsers').shorthandGetter;

var shorthand_for = {
  'border-left-width': require('./borderLeftWidth'),
  'border-left-style': require('./borderLeftStyle'),
  'border-left-color': require('./borderLeftColor'),
};

module.exports.definition = {
  set: shorthandSetter('border-left', shorthand_for),
  get: shorthandGetter('border-left', shorthand_for),
  enumerable: true,
  configurable: true,
};
