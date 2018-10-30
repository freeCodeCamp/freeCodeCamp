'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('stress', v);
    },
    get: function () {
        return this.getPropertyValue('stress');
    },
    enumerable: true,
    configurable: true
};
