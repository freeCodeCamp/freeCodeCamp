/*
 * @fileoverview Utilities for Doctrine
 * @author Yusuke Suzuki <utatane.tea@gmail.com>
 */


(function () {
    'use strict';

    var VERSION;

    VERSION = require('../package.json').version;
    exports.VERSION = VERSION;

    function DoctrineError(message) {
        this.name = 'DoctrineError';
        this.message = message;
    }
    DoctrineError.prototype = (function () {
        var Middle = function () { };
        Middle.prototype = Error.prototype;
        return new Middle();
    }());
    DoctrineError.prototype.constructor = DoctrineError;
    exports.DoctrineError = DoctrineError;

    function throwError(message) {
        throw new DoctrineError(message);
    }
    exports.throwError = throwError;

    exports.assert = require('assert');
}());

/* vim: set sw=4 ts=4 et tw=80 : */
