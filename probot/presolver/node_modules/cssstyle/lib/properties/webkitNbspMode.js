'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-nbsp-mode', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-nbsp-mode');
    },
    enumerable: true,
    configurable: true
};
