'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('fill-opacity', v);
    },
    get: function () {
        return this.getPropertyValue('fill-opacity');
    },
    enumerable: true,
    configurable: true
};
