'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('vertical-align', v);
    },
    get: function () {
        return this.getPropertyValue('vertical-align');
    },
    enumerable: true,
    configurable: true
};
