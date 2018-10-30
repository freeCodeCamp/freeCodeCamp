'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-svg-shadow', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-svg-shadow');
    },
    enumerable: true,
    configurable: true
};
