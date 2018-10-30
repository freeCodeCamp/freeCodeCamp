'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('baseline-shift', v);
    },
    get: function () {
        return this.getPropertyValue('baseline-shift');
    },
    enumerable: true,
    configurable: true
};
