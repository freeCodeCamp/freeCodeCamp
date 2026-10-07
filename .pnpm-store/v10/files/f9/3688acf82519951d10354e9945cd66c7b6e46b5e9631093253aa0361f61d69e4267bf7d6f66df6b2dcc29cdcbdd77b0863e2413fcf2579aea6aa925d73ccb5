"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectKeys = exports.assertSingleKey = exports.assertNotStrictEqual = void 0;
const assert_1 = require("assert");
/**
 * Typing wrapper around assert.notStrictEqual()
 */
function assertNotStrictEqual(actual, expected, message) {
    assert_1.notStrictEqual(actual, expected, message);
}
exports.assertNotStrictEqual = assertNotStrictEqual;
/**
 * Asserts actual is a single key, not a key array or a key map.
 */
function assertSingleKey(actual) {
    assert_1.strictEqual(typeof actual, 'string');
}
exports.assertSingleKey = assertSingleKey;
/**
 * Typing wrapper around Object.keys()
 */
function objectKeys(object) {
    return Object.keys(object);
}
exports.objectKeys = objectKeys;
