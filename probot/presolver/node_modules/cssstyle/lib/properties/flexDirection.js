'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('flex-direction', v);
    },
    get: function () {
        return this.getPropertyValue('flex-direction');
    },
    enumerable: true,
    configurable: true
};
