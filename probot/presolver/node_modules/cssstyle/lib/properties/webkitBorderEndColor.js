'use strict';

var parseColor = require('../parsers').parseColor;

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-border-end-color', parseColor(v));
    },
    get: function () {
        return this.getPropertyValue('-webkit-border-end-color');
    },
    enumerable: true,
    configurable: true
};
