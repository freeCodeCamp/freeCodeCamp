'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-animation-iteration-count', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-animation-iteration-count');
    },
    enumerable: true,
    configurable: true
};
