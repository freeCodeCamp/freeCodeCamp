'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('marks', v);
    },
    get: function () {
        return this.getPropertyValue('marks');
    },
    enumerable: true,
    configurable: true
};
