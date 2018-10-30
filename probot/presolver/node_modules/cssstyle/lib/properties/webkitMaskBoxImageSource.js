'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-mask-box-image-source', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-mask-box-image-source');
    },
    enumerable: true,
    configurable: true
};
