'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('border-top-right-radius', v);
    },
    get: function () {
        return this.getPropertyValue('border-top-right-radius');
    },
    enumerable: true,
    configurable: true
};
