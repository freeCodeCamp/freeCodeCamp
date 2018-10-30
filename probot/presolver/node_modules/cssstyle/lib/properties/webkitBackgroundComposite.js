'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-background-composite', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-background-composite');
    },
    enumerable: true,
    configurable: true
};
