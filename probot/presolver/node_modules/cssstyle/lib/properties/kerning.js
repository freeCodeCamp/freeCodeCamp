'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('kerning', v);
    },
    get: function () {
        return this.getPropertyValue('kerning');
    },
    enumerable: true,
    configurable: true
};
