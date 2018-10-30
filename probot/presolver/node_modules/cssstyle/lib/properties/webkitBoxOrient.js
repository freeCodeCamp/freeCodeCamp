'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-box-orient', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-box-orient');
    },
    enumerable: true,
    configurable: true
};
