'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-background-size', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-background-size');
    },
    enumerable: true,
    configurable: true
};
