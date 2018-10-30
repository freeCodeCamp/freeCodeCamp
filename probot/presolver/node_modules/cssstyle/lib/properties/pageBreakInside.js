'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('page-break-inside', v);
    },
    get: function () {
        return this.getPropertyValue('page-break-inside');
    },
    enumerable: true,
    configurable: true
};
