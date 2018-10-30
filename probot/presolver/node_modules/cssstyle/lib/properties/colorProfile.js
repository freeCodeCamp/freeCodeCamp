'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('color-profile', v);
    },
    get: function () {
        return this.getPropertyValue('color-profile');
    },
    enumerable: true,
    configurable: true
};
