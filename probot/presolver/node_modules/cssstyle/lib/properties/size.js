'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('size', v);
    },
    get: function () {
        return this.getPropertyValue('size');
    },
    enumerable: true,
    configurable: true
};
