'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-text-combine', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-text-combine');
    },
    enumerable: true,
    configurable: true
};
