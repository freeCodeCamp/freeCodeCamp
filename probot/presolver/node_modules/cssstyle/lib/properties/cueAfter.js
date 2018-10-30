'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('cue-after', v);
    },
    get: function () {
        return this.getPropertyValue('cue-after');
    },
    enumerable: true,
    configurable: true
};
