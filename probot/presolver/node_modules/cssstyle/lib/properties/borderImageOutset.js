'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('border-image-outset', v);
    },
    get: function () {
        return this.getPropertyValue('border-image-outset');
    },
    enumerable: true,
    configurable: true
};
