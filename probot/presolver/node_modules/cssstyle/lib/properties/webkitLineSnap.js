'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-line-snap', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-line-snap');
    },
    enumerable: true,
    configurable: true
};
