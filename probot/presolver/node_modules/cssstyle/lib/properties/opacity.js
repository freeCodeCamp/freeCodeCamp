'use strict';

var parseNumber = require('../parsers').parseNumber;

module.exports.definition = {
    set: function (v) {
        this._setProperty('opacity', parseNumber(v));
    },
    get: function () {
        return this.getPropertyValue('opacity');
    },
    enumerable: true,
    configurable: true
};
