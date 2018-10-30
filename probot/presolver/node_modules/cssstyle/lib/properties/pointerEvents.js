'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('pointer-events', v);
    },
    get: function () {
        return this.getPropertyValue('pointer-events');
    },
    enumerable: true,
    configurable: true
};
