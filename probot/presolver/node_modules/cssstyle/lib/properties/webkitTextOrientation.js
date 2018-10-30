'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-text-orientation', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-text-orientation');
    },
    enumerable: true,
    configurable: true
};
