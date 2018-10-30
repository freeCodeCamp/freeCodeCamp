'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-transform-origin-z', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-transform-origin-z');
    },
    enumerable: true,
    configurable: true
};
