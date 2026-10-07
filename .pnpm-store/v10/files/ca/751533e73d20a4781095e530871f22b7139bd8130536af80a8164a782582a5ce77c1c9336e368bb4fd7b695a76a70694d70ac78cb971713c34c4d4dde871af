import { onUnexpectedError, BugIndicatingError } from './errors.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/**
 * Throws an error with the provided message if the provided value does not evaluate to a true Javascript value.
 *
 * @deprecated Use `assert(...)` instead.
 * This method is usually used like this:
 * ```ts
 * import * as assert from 'vs/base/common/assert';
 * assert.ok(...);
 * ```
 *
 * However, `assert` in that example is a user chosen name.
 * There is no tooling for generating such an import statement.
 * Thus, the `assert(...)` function should be used instead.
 */
function ok(value, message) {
    if (!value) {
        throw new Error(message ? `Assertion failed (${message})` : 'Assertion Failed');
    }
}
function assertNever(value, message = 'Unreachable') {
    throw new Error(message);
}
/**
 * Asserts that a condition is `truthy`.
 *
 * @throws provided {@linkcode messageOrError} if the {@linkcode condition} is `falsy`.
 *
 * @param condition The condition to assert.
 * @param messageOrError An error message or error object to throw if condition is `falsy`.
 */
function assert(condition, messageOrError = 'unexpected state') {
    if (!condition) {
        // if error instance is provided, use it, otherwise create a new one
        const errorToThrow = typeof messageOrError === 'string'
            ? new BugIndicatingError(`Assertion Failed: ${messageOrError}`)
            : messageOrError;
        throw errorToThrow;
    }
}
/**
 * Like assert, but doesn't throw.
 */
function softAssert(condition, message = 'Soft Assertion Failed') {
    if (!condition) {
        onUnexpectedError(new BugIndicatingError(message));
    }
}
/**
 * condition must be side-effect free!
 */
function assertFn(condition) {
    if (!condition()) {
        // eslint-disable-next-line no-debugger
        debugger;
        // Reevaluate `condition` again to make debugging easier
        condition();
        onUnexpectedError(new BugIndicatingError('Assertion Failed'));
    }
}
function checkAdjacentItems(items, predicate) {
    let i = 0;
    while (i < items.length - 1) {
        const a = items[i];
        const b = items[i + 1];
        if (!predicate(a, b)) {
            return false;
        }
        i++;
    }
    return true;
}

export { assert, assertFn, assertNever, checkAdjacentItems, ok, softAssert };
