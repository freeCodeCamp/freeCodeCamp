'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-border-before-style', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-border-before-style');
    },
    enumerable: true,
    configurable: true
};
