'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-text-emphasis', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-text-emphasis');
    },
    enumerable: true,
    configurable: true
};
