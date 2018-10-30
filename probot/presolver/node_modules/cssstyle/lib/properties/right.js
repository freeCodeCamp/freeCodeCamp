'use strict';

var parseMeasurement = require('../parsers').parseMeasurement;

module.exports.definition = {
    set: function (v) {
        this._setProperty('right', parseMeasurement(v));
    },
    get: function () {
        return this.getPropertyValue('right');
    },
    enumerable: true,
    configurable: true
};
