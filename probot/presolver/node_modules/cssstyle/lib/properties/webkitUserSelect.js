'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-user-select', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-user-select');
    },
    enumerable: true,
    configurable: true
};
