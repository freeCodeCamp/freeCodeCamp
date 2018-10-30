'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-text-size-adjust', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-text-size-adjust');
    },
    enumerable: true,
    configurable: true
};
