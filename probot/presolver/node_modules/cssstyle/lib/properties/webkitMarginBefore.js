'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-margin-before', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-margin-before');
    },
    enumerable: true,
    configurable: true
};
