'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-writing-mode', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-writing-mode');
    },
    enumerable: true,
    configurable: true
};
