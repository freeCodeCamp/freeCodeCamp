'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('glyph-orientation-vertical', v);
    },
    get: function () {
        return this.getPropertyValue('glyph-orientation-vertical');
    },
    enumerable: true,
    configurable: true
};
