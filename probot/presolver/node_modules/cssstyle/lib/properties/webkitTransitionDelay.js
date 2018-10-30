'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-transition-delay', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-transition-delay');
    },
    enumerable: true,
    configurable: true
};
