'use strict';

var shorthandSetter = require('../parsers').shorthandSetter;
var shorthandGetter = require('../parsers').shorthandGetter;
var shorthandParser = require('../parsers').shorthandParser;

var shorthand_for = {
    'border-top-width': require('./borderTopWidth'),
    'border-top-style': require('./borderTopStyle'),
    'border-top-color': require('./borderTopColor')
};

module.exports.isValid = function (v) {
    return shorthandParser(v, shorthand_for) !== undefined;
};

module.exports.definition = {
    set: shorthandSetter('border-top', shorthand_for),
    get: shorthandGetter('border-top', shorthand_for),
    enumerable: true,
    configurable: true
};
