'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('text-underline-mode', v);
    },
    get: function () {
        return this.getPropertyValue('text-underline-mode');
    },
    enumerable: true,
    configurable: true
};
