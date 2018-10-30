'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-mask-repeat-x', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-mask-repeat-x');
    },
    enumerable: true,
    configurable: true
};
