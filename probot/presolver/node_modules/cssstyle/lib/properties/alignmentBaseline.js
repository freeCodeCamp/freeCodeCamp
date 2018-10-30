'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('alignment-baseline', v);
    },
    get: function () {
        return this.getPropertyValue('alignment-baseline');
    },
    enumerable: true,
    configurable: true
};
