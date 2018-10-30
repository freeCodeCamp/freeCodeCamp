'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-font-variant-ligatures', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-font-variant-ligatures');
    },
    enumerable: true,
    configurable: true
};
