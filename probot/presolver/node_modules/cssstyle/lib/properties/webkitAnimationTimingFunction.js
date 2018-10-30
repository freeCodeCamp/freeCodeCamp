'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-animation-timing-function', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-animation-timing-function');
    },
    enumerable: true,
    configurable: true
};
