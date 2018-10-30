'use strict';

var margin = require('./margin.js');
var parsers = require('../parsers.js');

module.exports.definition = {
    set: parsers.subImplicitSetter('margin', 'right', margin.isValid, margin.parser),
    get: function () {
        return this.getPropertyValue('margin-right');
    },
    enumerable: true,
    configurable: true
};
