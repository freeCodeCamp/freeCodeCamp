'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-transform-origin-y', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-transform-origin-y');
    },
    enumerable: true,
    configurable: true
};
