'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isPlainObject", {
    enumerable: true,
    get: function() {
        return isPlainObject;
    }
});
var _type_of = require("@swc/helpers/_/_type_of");
/**
 * This implementation is taken from Lodash implementation.
 * See: https://github.com/lodash/lodash/blob/master/isPlainObject.js
 */ function getTag(value) {
    if (value === null) {
        return value === undefined ? '[object Undefined]' : '[object Null]';
    }
    return Object.prototype.toString.call(value);
}
function isObjectLike(value) {
    return (typeof value === "undefined" ? "undefined" : _type_of._(value)) === 'object' && value !== null;
}
function isPlainObject(value) {
    if (!isObjectLike(value) || getTag(value) !== '[object Object]') {
        return false;
    }
    if (Object.getPrototypeOf(value) === null) {
        return true;
    }
    var proto = value;
    while(Object.getPrototypeOf(proto) !== null){
        proto = Object.getPrototypeOf(proto);
    }
    return Object.getPrototypeOf(value) === proto;
}
