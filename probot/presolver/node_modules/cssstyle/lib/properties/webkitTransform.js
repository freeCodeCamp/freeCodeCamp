'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-transform', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-transform');
    },
    enumerable: true,
    configurable: true
};
