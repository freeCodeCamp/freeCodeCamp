'use strict';

var shorthandSetter = require('../parsers').shorthandSetter;
var shorthandGetter = require('../parsers').shorthandGetter;
var shorthandParser = require('../parsers').shorthandParser;

var shorthand_for = {
    'border-left-width': require('./borderLeftWidth'),
    'border-left-style': require('./borderLeftStyle'),
    'border-left-color': require('./borderLeftColor')
};

var isValid = function isValid(v) {
    return shorthandParser(v, shorthand_for) !== undefined;
};
module.exports.isValid = isValid;

module.exports.definition = {
    set: shorthandSetter('border-left', shorthand_for),
    get: shorthandGetter('border-left', shorthand_for),
    enumerable: true,
    configurable: true
};
