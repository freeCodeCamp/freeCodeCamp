'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-margin-after', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-margin-after');
    },
    enumerable: true,
    configurable: true
};
