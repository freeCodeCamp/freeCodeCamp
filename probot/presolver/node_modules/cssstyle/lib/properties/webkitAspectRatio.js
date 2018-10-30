'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-aspect-ratio', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-aspect-ratio');
    },
    enumerable: true,
    configurable: true
};
