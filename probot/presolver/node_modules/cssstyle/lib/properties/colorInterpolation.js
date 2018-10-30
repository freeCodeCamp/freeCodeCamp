'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('color-interpolation', v);
    },
    get: function () {
        return this.getPropertyValue('color-interpolation');
    },
    enumerable: true,
    configurable: true
};
