'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-wrap-shape-inside', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-wrap-shape-inside');
    },
    enumerable: true,
    configurable: true
};
