'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-transition-timing-function', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-transition-timing-function');
    },
    enumerable: true,
    configurable: true
};
