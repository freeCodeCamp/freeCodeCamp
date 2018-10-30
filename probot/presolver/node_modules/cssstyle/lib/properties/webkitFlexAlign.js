'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-flex-align', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-flex-align');
    },
    enumerable: true,
    configurable: true
};
