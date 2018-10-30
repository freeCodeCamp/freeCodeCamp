'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-flex-order', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-flex-order');
    },
    enumerable: true,
    configurable: true
};
