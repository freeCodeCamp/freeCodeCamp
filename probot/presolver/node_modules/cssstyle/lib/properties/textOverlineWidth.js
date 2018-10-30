'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('text-overline-width', v);
    },
    get: function () {
        return this.getPropertyValue('text-overline-width');
    },
    enumerable: true,
    configurable: true
};
