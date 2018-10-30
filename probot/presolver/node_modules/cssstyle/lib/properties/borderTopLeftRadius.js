'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('border-top-left-radius', v);
    },
    get: function () {
        return this.getPropertyValue('border-top-left-radius');
    },
    enumerable: true,
    configurable: true
};
