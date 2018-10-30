'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-line-clamp', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-line-clamp');
    },
    enumerable: true,
    configurable: true
};
