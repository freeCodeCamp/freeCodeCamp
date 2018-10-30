'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('marker-mid', v);
    },
    get: function () {
        return this.getPropertyValue('marker-mid');
    },
    enumerable: true,
    configurable: true
};
