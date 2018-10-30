'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('cursor', v);
    },
    get: function () {
        return this.getPropertyValue('cursor');
    },
    enumerable: true,
    configurable: true
};
