'use strict';

var padding = require('./padding.js');
var parsers = require('../parsers.js');

module.exports.definition = {
    set: parsers.subImplicitSetter('padding', 'top', padding.isValid, padding.parser),
    get: function () {
        return this.getPropertyValue('padding-top');
    },
    enumerable: true,
    configurable: true
};
