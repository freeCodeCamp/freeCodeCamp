'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get deprecate () {
        return deprecate;
    },
    get warn () {
        return warn;
    },
    get warning () {
        return warning;
    }
});
require("@swc/helpers/_/_to_consumable_array");
var _noop = require("./noop");
/**
 * Logs a warning when this function is called, in development environment only.
 */ var deprecate = function deprecate(fn, // @ts-ignore this parameter is used in the false branch
// eslint-disable-next-line no-unused-vars
message) {
    return fn;
};
/**
 * Logs a warning
 * This is used to log issues in development environment only.
 */ var warn = _noop.noop;
/**
 * Logs a warning if the condition is not met.
 * This is used to log issues in development environment only.
 */ var warning = _noop.noop;
