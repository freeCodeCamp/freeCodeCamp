'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('border-image-repeat', v);
    },
    get: function () {
        return this.getPropertyValue('border-image-repeat');
    },
    enumerable: true,
    configurable: true
};
