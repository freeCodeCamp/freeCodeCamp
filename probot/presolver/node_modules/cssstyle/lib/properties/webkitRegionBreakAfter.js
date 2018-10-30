'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-region-break-after', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-region-break-after');
    },
    enumerable: true,
    configurable: true
};
