'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('overflow-y', v);
    },
    get: function () {
        return this.getPropertyValue('overflow-y');
    },
    enumerable: true,
    configurable: true
};
