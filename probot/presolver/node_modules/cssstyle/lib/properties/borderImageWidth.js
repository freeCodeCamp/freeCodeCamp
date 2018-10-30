'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('border-image-width', v);
    },
    get: function () {
        return this.getPropertyValue('border-image-width');
    },
    enumerable: true,
    configurable: true
};
