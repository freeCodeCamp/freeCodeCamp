'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-text-emphasis-position', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-text-emphasis-position');
    },
    enumerable: true,
    configurable: true
};
