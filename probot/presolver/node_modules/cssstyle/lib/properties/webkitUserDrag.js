'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-user-drag', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-user-drag');
    },
    enumerable: true,
    configurable: true
};
