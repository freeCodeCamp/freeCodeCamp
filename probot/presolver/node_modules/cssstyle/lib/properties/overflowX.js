'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('overflow-x', v);
    },
    get: function () {
        return this.getPropertyValue('overflow-x');
    },
    enumerable: true,
    configurable: true
};
