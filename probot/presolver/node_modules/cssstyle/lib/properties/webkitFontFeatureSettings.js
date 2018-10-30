'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-font-feature-settings', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-font-feature-settings');
    },
    enumerable: true,
    configurable: true
};
