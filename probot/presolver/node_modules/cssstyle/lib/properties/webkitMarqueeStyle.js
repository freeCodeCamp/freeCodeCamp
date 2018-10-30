'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-marquee-style', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-marquee-style');
    },
    enumerable: true,
    configurable: true
};
