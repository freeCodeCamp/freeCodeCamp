'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('filter', v);
    },
    get: function () {
        return this.getPropertyValue('filter');
    },
    enumerable: true,
    configurable: true
};
