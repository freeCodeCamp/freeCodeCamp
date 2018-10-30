'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-flex-wrap', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-flex-wrap');
    },
    enumerable: true,
    configurable: true
};
