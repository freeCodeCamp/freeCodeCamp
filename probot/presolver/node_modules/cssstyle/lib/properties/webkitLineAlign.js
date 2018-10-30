'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-line-align', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-line-align');
    },
    enumerable: true,
    configurable: true
};
