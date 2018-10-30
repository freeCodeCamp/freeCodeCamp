'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('stroke-dasharray', v);
    },
    get: function () {
        return this.getPropertyValue('stroke-dasharray');
    },
    enumerable: true,
    configurable: true
};
