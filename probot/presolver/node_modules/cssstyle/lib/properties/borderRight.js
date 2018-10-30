'use strict';

var shorthandSetter = require('../parsers').shorthandSetter;
var shorthandGetter = require('../parsers').shorthandGetter;
var shorthandParser = require('../parsers').shorthandParser;

var shorthand_for = {
    'border-right-width': require('./borderRightWidth'),
    'border-right-style': require('./borderRightStyle'),
    'border-right-color': require('./borderRightColor')
};

var isValid = function isValid(v) {
    return shorthandParser(v, shorthand_for) !== undefined;
};
module.exports.isValid = isValid;

module.exports.definition = {
    set: shorthandSetter('border-right', shorthand_for),
    get: shorthandGetter('border-right', shorthand_for),
    enumerable: true,
    configurable: true
};
