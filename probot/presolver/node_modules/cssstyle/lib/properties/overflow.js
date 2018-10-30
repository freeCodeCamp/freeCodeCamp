'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('overflow', v);
    },
    get: function () {
        return this.getPropertyValue('overflow');
    },
    enumerable: true,
    configurable: true
};
