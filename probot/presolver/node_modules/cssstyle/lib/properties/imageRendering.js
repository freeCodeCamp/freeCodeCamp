'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('image-rendering', v);
    },
    get: function () {
        return this.getPropertyValue('image-rendering');
    },
    enumerable: true,
    configurable: true
};
