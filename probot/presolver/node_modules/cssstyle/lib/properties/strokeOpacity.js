'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('stroke-opacity', v);
    },
    get: function () {
        return this.getPropertyValue('stroke-opacity');
    },
    enumerable: true,
    configurable: true
};
