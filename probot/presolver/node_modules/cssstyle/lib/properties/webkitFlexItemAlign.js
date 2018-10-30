'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-flex-item-align', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-flex-item-align');
    },
    enumerable: true,
    configurable: true
};
