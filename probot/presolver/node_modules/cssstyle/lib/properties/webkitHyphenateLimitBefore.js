'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-hyphenate-limit-before', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-hyphenate-limit-before');
    },
    enumerable: true,
    configurable: true
};
