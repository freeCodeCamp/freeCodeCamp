'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-padding-after', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-padding-after');
    },
    enumerable: true,
    configurable: true
};
