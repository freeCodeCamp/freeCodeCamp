'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-perspective-origin', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-perspective-origin');
    },
    enumerable: true,
    configurable: true
};
