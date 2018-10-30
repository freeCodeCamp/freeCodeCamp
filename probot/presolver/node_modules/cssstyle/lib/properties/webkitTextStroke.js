'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-text-stroke', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-text-stroke');
    },
    enumerable: true,
    configurable: true
};
