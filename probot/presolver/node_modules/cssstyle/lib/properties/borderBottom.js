'use strict';

var shorthandSetter = require('../parsers').shorthandSetter;
var shorthandGetter = require('../parsers').shorthandGetter;
var shorthandParser = require('../parsers').shorthandParser;

var shorthand_for = {
    'border-bottom-width': require('./borderBottomWidth'),
    'border-bottom-style': require('./borderBottomStyle'),
    'border-bottom-color': require('./borderBottomColor')
};

var isValid = function isValid(v) {
    return shorthandParser(v, shorthand_for) !== undefined;
};
module.exports.isValid = isValid;

module.exports.definition = {
    set: shorthandSetter('border-bottom', shorthand_for),
    get: shorthandGetter('border-bottom', shorthand_for),
    enumerable: true,
    configurable: true
};
