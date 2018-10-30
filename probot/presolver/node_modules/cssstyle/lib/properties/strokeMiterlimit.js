'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('stroke-miterlimit', v);
    },
    get: function () {
        return this.getPropertyValue('stroke-miterlimit');
    },
    enumerable: true,
    configurable: true
};
