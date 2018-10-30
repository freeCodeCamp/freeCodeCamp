'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('text-underline-width', v);
    },
    get: function () {
        return this.getPropertyValue('text-underline-width');
    },
    enumerable: true,
    configurable: true
};
