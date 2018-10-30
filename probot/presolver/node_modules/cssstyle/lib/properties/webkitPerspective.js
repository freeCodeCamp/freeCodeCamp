'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-perspective', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-perspective');
    },
    enumerable: true,
    configurable: true
};
