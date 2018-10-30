'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-region-break-before', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-region-break-before');
    },
    enumerable: true,
    configurable: true
};
