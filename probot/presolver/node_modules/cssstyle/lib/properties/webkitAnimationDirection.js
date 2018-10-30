'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-animation-direction', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-animation-direction');
    },
    enumerable: true,
    configurable: true
};
