'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-transition-property', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-transition-property');
    },
    enumerable: true,
    configurable: true
};
