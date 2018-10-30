'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('flex-flow', v);
    },
    get: function () {
        return this.getPropertyValue('flex-flow');
    },
    enumerable: true,
    configurable: true
};
