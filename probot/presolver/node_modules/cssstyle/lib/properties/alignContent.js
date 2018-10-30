'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('align-content', v);
    },
    get: function () {
        return this.getPropertyValue('align-content');
    },
    enumerable: true,
    configurable: true
};
