'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-border-radius', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-border-radius');
    },
    enumerable: true,
    configurable: true
};
