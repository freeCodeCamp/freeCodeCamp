'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-text-decorations-in-effect', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-text-decorations-in-effect');
    },
    enumerable: true,
    configurable: true
};
