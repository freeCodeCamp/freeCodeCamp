'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('fill-rule', v);
    },
    get: function () {
        return this.getPropertyValue('fill-rule');
    },
    enumerable: true,
    configurable: true
};
