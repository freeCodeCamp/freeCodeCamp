'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-wrap-through', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-wrap-through');
    },
    enumerable: true,
    configurable: true
};
