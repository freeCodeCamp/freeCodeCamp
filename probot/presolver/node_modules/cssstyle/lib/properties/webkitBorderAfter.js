'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-border-after', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-border-after');
    },
    enumerable: true,
    configurable: true
};
