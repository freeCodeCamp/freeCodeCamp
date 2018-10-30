'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-marquee-repetition', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-marquee-repetition');
    },
    enumerable: true,
    configurable: true
};
