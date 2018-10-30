'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('orphans', v);
    },
    get: function () {
        return this.getPropertyValue('orphans');
    },
    enumerable: true,
    configurable: true
};
