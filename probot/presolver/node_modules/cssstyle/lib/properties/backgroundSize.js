'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('background-size', v);
    },
    get: function () {
        return this.getPropertyValue('background-size');
    },
    enumerable: true,
    configurable: true
};
