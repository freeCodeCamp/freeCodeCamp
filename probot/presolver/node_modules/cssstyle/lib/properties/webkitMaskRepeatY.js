'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-mask-repeat-y', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-mask-repeat-y');
    },
    enumerable: true,
    configurable: true
};
