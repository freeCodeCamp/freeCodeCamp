'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-border-image', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-border-image');
    },
    enumerable: true,
    configurable: true
};
