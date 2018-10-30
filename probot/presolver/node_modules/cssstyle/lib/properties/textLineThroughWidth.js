'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('text-line-through-width', v);
    },
    get: function () {
        return this.getPropertyValue('text-line-through-width');
    },
    enumerable: true,
    configurable: true
};
