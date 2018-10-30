'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('border-image', v);
    },
    get: function () {
        return this.getPropertyValue('border-image');
    },
    enumerable: true,
    configurable: true
};
