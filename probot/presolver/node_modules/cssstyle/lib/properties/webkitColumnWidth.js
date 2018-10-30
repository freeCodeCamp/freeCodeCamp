'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-column-width', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-column-width');
    },
    enumerable: true,
    configurable: true
};
