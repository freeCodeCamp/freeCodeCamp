'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-font-size-delta', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-font-size-delta');
    },
    enumerable: true,
    configurable: true
};
