'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-mask-origin', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-mask-origin');
    },
    enumerable: true,
    configurable: true
};
