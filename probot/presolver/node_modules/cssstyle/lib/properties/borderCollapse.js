'use strict';

var parsers = require('../parsers');

var parse = function parse(v) {
    if (parsers.valueType(v) === parsers.TYPES.KEYWORD && (v.toLowerCase() === 'collapse' || v.toLowerCase() === 'separate' || v.toLowerCase() === 'inherit')) {
        return v;
    }
    return undefined;
};

module.exports.isValid = function isValid(v) {
    return parse(v) !== undefined;
};

module.exports.definition = {
    set: function (v) {
        this._setProperty('border-collapse', parse(v));
    },
    get: function () {
        return this.getPropertyValue('border-collapse');
    },
    enumerable: true,
    configurable: true
};
