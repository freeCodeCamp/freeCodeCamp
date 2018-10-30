'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('max-width', v);
    },
    get: function () {
        return this.getPropertyValue('max-width');
    },
    enumerable: true,
    configurable: true
};
