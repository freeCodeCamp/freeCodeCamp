'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('text-rendering', v);
    },
    get: function () {
        return this.getPropertyValue('text-rendering');
    },
    enumerable: true,
    configurable: true
};
