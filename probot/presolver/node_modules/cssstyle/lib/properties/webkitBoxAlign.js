'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-box-align', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-box-align');
    },
    enumerable: true,
    configurable: true
};
