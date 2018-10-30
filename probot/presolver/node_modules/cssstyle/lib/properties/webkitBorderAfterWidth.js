'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-border-after-width', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-border-after-width');
    },
    enumerable: true,
    configurable: true
};
