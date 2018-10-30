'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('table-layout', v);
    },
    get: function () {
        return this.getPropertyValue('table-layout');
    },
    enumerable: true,
    configurable: true
};
