'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-overflow-scrolling', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-overflow-scrolling');
    },
    enumerable: true,
    configurable: true
};
