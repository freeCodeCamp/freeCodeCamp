'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-box-lines', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-box-lines');
    },
    enumerable: true,
    configurable: true
};
