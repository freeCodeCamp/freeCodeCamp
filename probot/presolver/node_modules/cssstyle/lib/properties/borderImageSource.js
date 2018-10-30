'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('border-image-source', v);
    },
    get: function () {
        return this.getPropertyValue('border-image-source');
    },
    enumerable: true,
    configurable: true
};
