'use strict';

var TYPES = require('../parsers').TYPES;
var valueType = require('../parsers').valueType;

var absoluteSizes = ['xx-small', 'x-small', 'small', 'medium', 'large', 'x-large', 'xx-large'];
var relativeSizes = ['larger', 'smaller'];

module.exports.isValid = function (v) {
    var type = valueType(v.toLowerCase());
    return type === TYPES.LENGTH || type === TYPES.PERCENT ||
        (type === TYPES.KEYWORD && absoluteSizes.indexOf(v.toLowerCase()) !== -1) ||
        (type === TYPES.KEYWORD && relativeSizes.indexOf(v.toLowerCase()) !== -1);
};

module.exports.definition = {
    set: function (v) {
        this._setProperty('font-size', v);
    },
    get: function () {
        return this.getPropertyValue('font-size');
    },
    enumerable: true,
    configurable: true
};
