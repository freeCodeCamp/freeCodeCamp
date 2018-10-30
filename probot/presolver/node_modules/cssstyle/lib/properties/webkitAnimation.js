'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-animation', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-animation');
    },
    enumerable: true,
    configurable: true
};
