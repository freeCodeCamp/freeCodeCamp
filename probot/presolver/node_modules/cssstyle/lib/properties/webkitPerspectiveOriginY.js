'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-perspective-origin-y', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-perspective-origin-y');
    },
    enumerable: true,
    configurable: true
};
