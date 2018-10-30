'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-columns', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-columns');
    },
    enumerable: true,
    configurable: true
};
