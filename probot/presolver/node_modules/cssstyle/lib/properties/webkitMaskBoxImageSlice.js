'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-mask-box-image-slice', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-mask-box-image-slice');
    },
    enumerable: true,
    configurable: true
};
