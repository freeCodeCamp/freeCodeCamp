'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('min-width', v);
    },
    get: function () {
        return this.getPropertyValue('min-width');
    },
    enumerable: true,
    configurable: true
};
