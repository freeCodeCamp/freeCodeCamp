'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-appearance', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-appearance');
    },
    enumerable: true,
    configurable: true
};
