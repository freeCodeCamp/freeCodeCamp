'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-animation-name', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-animation-name');
    },
    enumerable: true,
    configurable: true
};
