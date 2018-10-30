'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-box-flex', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-box-flex');
    },
    enumerable: true,
    configurable: true
};
