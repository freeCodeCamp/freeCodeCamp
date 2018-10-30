'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('vector-effect', v);
    },
    get: function () {
        return this.getPropertyValue('vector-effect');
    },
    enumerable: true,
    configurable: true
};
