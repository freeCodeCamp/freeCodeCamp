'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('text-line-through', v);
    },
    get: function () {
        return this.getPropertyValue('text-line-through');
    },
    enumerable: true,
    configurable: true
};
