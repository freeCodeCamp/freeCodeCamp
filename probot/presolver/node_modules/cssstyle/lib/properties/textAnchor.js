'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('text-anchor', v);
    },
    get: function () {
        return this.getPropertyValue('text-anchor');
    },
    enumerable: true,
    configurable: true
};
