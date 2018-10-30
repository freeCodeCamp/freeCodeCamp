'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('min-height', v);
    },
    get: function () {
        return this.getPropertyValue('min-height');
    },
    enumerable: true,
    configurable: true
};
