"use strict";
/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPlainObject = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * based on lodash in order to support esm builds without esModuleInterop.
 * lodash is using MIT License.
 **/
const objectTag = '[object Object]';
const nullTag = '[object Null]';
const undefinedTag = '[object Undefined]';
const funcProto = Function.prototype;
const funcToString = funcProto.toString;
const objectCtorString = funcToString.call(Object);
const getPrototypeOf = Object.getPrototypeOf;
const objectProto = Object.prototype;
const hasOwnProperty = objectProto.hasOwnProperty;
const symToStringTag = Symbol ? Symbol.toStringTag : undefined;
const nativeObjectToString = objectProto.toString;
/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
    if (!isObjectLike(value) || baseGetTag(value) !== objectTag) {
        return false;
    }
    const proto = getPrototypeOf(value);
    if (proto === null) {
        return true;
    }
    const Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
    return (typeof Ctor == 'function' &&
        Ctor instanceof Ctor &&
        funcToString.call(Ctor) === objectCtorString);
}
exports.isPlainObject = isPlainObject;
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
    return value != null && typeof value == 'object';
}
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
    if (value == null) {
        return value === undefined ? undefinedTag : nullTag;
    }
    return symToStringTag && symToStringTag in Object(value)
        ? getRawTag(value)
        : objectToString(value);
}
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
    const isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
    let unmasked = false;
    try {
        value[symToStringTag] = undefined;
        unmasked = true;
    }
    catch {
        // silence
    }
    const result = nativeObjectToString.call(value);
    if (unmasked) {
        if (isOwn) {
            value[symToStringTag] = tag;
        }
        else {
            delete value[symToStringTag];
        }
    }
    return result;
}
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
    return nativeObjectToString.call(value);
}
//# sourceMappingURL=lodash.merge.js.map