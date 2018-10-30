'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-line-grid', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-line-grid');
    },
    enumerable: true,
    configurable: true
};
