'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-marquee-speed', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-marquee-speed');
    },
    enumerable: true,
    configurable: true
};
