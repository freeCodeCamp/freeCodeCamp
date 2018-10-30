'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('caption-side', v);
    },
    get: function () {
        return this.getPropertyValue('caption-side');
    },
    enumerable: true,
    configurable: true
};
