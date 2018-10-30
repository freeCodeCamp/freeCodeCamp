'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-wrap-padding', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-wrap-padding');
    },
    enumerable: true,
    configurable: true
};
