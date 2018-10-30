'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-mask-box-image-width', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-mask-box-image-width');
    },
    enumerable: true,
    configurable: true
};
