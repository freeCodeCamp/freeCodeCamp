'use strict';

var parseKeyword = require('../parsers').parseKeyword;

var clear_keywords = [ 'none', 'left', 'right', 'both', 'inherit' ];

module.exports.definition = {
    set: function (v) {
        this._setProperty('clear', parseKeyword(v, clear_keywords));
    },
    get: function () {
        return this.getPropertyValue('clear');
    },
    enumerable: true,
    configurable: true
};
