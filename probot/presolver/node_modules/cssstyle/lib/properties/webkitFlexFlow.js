'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-flex-flow', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-flex-flow');
    },
    enumerable: true,
    configurable: true
};
