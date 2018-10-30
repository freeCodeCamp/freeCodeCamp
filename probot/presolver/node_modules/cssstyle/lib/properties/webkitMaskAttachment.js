'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-mask-attachment', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-mask-attachment');
    },
    enumerable: true,
    configurable: true
};
