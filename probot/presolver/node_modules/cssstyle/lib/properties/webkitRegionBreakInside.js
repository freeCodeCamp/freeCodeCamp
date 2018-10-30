'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-region-break-inside', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-region-break-inside');
    },
    enumerable: true,
    configurable: true
};
