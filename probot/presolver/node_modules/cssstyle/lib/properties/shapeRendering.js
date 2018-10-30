'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('shape-rendering', v);
    },
    get: function () {
        return this.getPropertyValue('shape-rendering');
    },
    enumerable: true,
    configurable: true
};
