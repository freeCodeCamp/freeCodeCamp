'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-user-modify', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-user-modify');
    },
    enumerable: true,
    configurable: true
};
