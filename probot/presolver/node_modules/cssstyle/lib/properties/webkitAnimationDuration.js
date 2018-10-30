'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-animation-duration', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-animation-duration');
    },
    enumerable: true,
    configurable: true
};
