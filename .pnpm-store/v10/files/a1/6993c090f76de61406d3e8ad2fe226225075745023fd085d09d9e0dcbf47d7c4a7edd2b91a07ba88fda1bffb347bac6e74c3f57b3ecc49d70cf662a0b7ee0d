'use strict';

var shorthandSetter = require('../parsers').shorthandSetter;
var shorthandGetter = require('../parsers').shorthandGetter;

var shorthand_for = {
  'background-color': require('./backgroundColor'),
  'background-image': require('./backgroundImage'),
  'background-repeat': require('./backgroundRepeat'),
  'background-attachment': require('./backgroundAttachment'),
  'background-position': require('./backgroundPosition'),
};

module.exports.definition = {
  set: shorthandSetter('background', shorthand_for),
  get: shorthandGetter('background', shorthand_for),
  enumerable: true,
  configurable: true,
};
