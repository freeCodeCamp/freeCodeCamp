'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-mask-repeat', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-mask-repeat');
    },
    enumerable: true,
    configurable: true
};
