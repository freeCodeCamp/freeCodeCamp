'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-text-security', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-text-security');
    },
    enumerable: true,
    configurable: true
};
