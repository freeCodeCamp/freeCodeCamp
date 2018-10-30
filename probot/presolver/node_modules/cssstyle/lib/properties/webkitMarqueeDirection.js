'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-marquee-direction', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-marquee-direction');
    },
    enumerable: true,
    configurable: true
};
