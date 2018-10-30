'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-background-origin', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-background-origin');
    },
    enumerable: true,
    configurable: true
};
