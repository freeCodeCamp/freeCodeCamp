'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('align-items', v);
    },
    get: function () {
        return this.getPropertyValue('align-items');
    },
    enumerable: true,
    configurable: true
};
