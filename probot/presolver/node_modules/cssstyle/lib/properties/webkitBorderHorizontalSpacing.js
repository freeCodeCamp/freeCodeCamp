'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-border-horizontal-spacing', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-border-horizontal-spacing');
    },
    enumerable: true,
    configurable: true
};
