'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('stroke-width', v);
    },
    get: function () {
        return this.getPropertyValue('stroke-width');
    },
    enumerable: true,
    configurable: true
};
