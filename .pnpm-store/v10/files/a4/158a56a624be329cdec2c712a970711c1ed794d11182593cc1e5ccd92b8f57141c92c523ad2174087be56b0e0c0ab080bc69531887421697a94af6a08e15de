'use strict';

var shorthandSetter = require('../parsers').shorthandSetter;
var shorthandGetter = require('../parsers').shorthandGetter;

var shorthand_for = {
  'border-bottom-width': require('./borderBottomWidth'),
  'border-bottom-style': require('./borderBottomStyle'),
  'border-bottom-color': require('./borderBottomColor'),
};

module.exports.definition = {
  set: shorthandSetter('border-bottom', shorthand_for),
  get: shorthandGetter('border-bottom', shorthand_for),
  enumerable: true,
  configurable: true,
};
