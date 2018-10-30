'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-mask', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-mask');
    },
    enumerable: true,
    configurable: true
};
