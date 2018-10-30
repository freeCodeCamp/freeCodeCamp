'use strict';

module.exports.definition = {
    set: function (v) {
        this._setProperty('-webkit-margin-before-collapse', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-margin-before-collapse');
    },
    enumerable: true,
    configurable: true
};
