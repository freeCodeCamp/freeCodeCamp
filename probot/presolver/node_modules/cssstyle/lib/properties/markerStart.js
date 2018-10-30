'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('marker-start', v);
    },
    get: function () {
        return this.getPropertyValue('marker-start');
    },
    enumerable: true,
    configurable: true
};
