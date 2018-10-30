'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-column-break-inside', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-column-break-inside');
    },
    enumerable: true,
    configurable: true
};
