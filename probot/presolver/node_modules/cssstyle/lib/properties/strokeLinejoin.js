'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('stroke-linejoin', v);
    },
    get: function () {
        return this.getPropertyValue('stroke-linejoin');
    },
    enumerable: true,
    configurable: true
};
