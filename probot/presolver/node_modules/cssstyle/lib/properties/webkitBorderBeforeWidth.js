'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-border-before-width', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-border-before-width');
    },
    enumerable: true,
    configurable: true
};
