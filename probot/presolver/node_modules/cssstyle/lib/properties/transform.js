'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('transform', v);
    },
    get: function () {
        return this.getPropertyValue('transform');
    },
    enumerable: true,
    configurable: true
};
