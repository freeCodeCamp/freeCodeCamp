'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-background-clip', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-background-clip');
    },
    enumerable: true,
    configurable: true
};
