'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-margin-end', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-margin-end');
    },
    enumerable: true,
    configurable: true
};
