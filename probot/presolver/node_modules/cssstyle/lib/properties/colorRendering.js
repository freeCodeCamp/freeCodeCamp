'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('color-rendering', v);
    },
    get: function () {
        return this.getPropertyValue('color-rendering');
    },
    enumerable: true,
    configurable: true
};
