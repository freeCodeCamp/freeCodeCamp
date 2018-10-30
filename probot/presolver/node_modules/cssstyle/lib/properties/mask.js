'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('mask', v);
    },
    get: function () {
        return this.getPropertyValue('mask');
    },
    enumerable: true,
    configurable: true
};
