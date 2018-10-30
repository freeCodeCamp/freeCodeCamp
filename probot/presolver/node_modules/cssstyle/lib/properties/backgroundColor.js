'use strict';

var parsers = require('../parsers');

var parse = function parse(v) {
    var parsed = parsers.parseColor(v);
    if (parsed !== undefined) {
        return parsed;
    }
    if (parsers.valueType(v) === parsers.TYPES.KEYWORD && (v.toLowerCase() === 'transparent' || v.toLowerCase() === 'inherit')) {
        return v;
    }
    return undefined;
};

module.exports.isValid = function isValid(v) {
    return parse(v) !== undefined;
};

module.exports.definition = {
    set: function (v) {
        var parsed = parse(v);
        if (parsed === undefined) {
            return;
        }
        this._setProperty('background-color', parsed);
    },
    get: function () {
        return this.getPropertyValue('background-color');
    },
    enumerable: true,
    configurable: true
};
