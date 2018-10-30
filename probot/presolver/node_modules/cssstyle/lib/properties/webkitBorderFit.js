'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-border-fit', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-border-fit');
    },
    enumerable: true,
    configurable: true
};
