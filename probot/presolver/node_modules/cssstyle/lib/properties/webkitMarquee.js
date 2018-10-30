'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-marquee', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-marquee');
    },
    enumerable: true,
    configurable: true
};
