'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-mask-clip', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-mask-clip');
    },
    enumerable: true,
    configurable: true
};
