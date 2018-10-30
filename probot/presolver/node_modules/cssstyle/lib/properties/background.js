'use strict';

var shorthandParser = require('../parsers').shorthandParser;
var shorthandSetter = require('../parsers').shorthandSetter;
var shorthandGetter = require('../parsers').shorthandGetter;

var shorthand_for = {
    'background-color': require('./backgroundColor'),
    'background-image': require('./backgroundImage'),
    'background-repeat': require('./backgroundRepeat'),
    'background-attachment': require('./backgroundAttachment'),
    'background-position': require('./backgroundPosition')
};

module.exports.isValid = function isValid(v) {
    return shorthandParser(v, shorthand_for) !== undefined;
};

module.exports.definition = {
    set: shorthandSetter('background', shorthand_for),
    get: shorthandGetter('background', shorthand_for),
    enumerable: true,
    configurable: true
};
