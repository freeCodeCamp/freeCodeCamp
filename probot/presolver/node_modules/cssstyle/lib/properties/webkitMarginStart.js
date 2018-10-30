'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-margin-start', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-margin-start');
    },
    enumerable: true,
    configurable: true
};
