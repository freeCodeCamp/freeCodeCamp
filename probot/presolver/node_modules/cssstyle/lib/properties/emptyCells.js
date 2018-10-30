'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('empty-cells', v);
    },
    get: function () {
        return this.getPropertyValue('empty-cells');
    },
    enumerable: true,
    configurable: true
};
