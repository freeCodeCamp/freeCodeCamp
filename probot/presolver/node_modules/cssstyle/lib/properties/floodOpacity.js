'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('flood-opacity', v);
    },
    get: function () {
        return this.getPropertyValue('flood-opacity');
    },
    enumerable: true,
    configurable: true
};
