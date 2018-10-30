'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-highlight', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-highlight');
    },
    enumerable: true,
    configurable: true
};
