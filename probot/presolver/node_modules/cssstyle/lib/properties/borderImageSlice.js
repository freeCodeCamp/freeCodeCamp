'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('border-image-slice', v);
    },
    get: function () {
        return this.getPropertyValue('border-image-slice');
    },
    enumerable: true,
    configurable: true
};
