'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-mask-position-x', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-mask-position-x');
    },
    enumerable: true,
    configurable: true
};
