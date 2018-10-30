'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-box-reflect', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-box-reflect');
    },
    enumerable: true,
    configurable: true
};
