'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-line-break', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-line-break');
    },
    enumerable: true,
    configurable: true
};
