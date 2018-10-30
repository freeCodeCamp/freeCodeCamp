'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('glyph-orientation-horizontal', v);
    },
    get: function () {
        return this.getPropertyValue('glyph-orientation-horizontal');
    },
    enumerable: true,
    configurable: true
};
