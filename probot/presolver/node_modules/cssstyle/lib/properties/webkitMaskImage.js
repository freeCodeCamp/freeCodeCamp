'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-mask-image', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-mask-image');
    },
    enumerable: true,
    configurable: true
};
