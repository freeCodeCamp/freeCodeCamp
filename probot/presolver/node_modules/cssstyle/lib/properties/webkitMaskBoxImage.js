'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-mask-box-image', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-mask-box-image');
    },
    enumerable: true,
    configurable: true
};
