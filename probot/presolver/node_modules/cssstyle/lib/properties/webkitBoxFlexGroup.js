'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-box-flex-group', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-box-flex-group');
    },
    enumerable: true,
    configurable: true
};
