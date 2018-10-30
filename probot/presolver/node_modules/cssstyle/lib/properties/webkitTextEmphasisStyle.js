'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-text-emphasis-style', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-text-emphasis-style');
    },
    enumerable: true,
    configurable: true
};
