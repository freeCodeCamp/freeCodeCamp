"use strict";
/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.callWithTimeout = exports.TimeoutError = void 0;
/**
 * Error that is thrown on timeouts.
 */
class TimeoutError extends Error {
    constructor(message) {
        super(message);
        // manually adjust prototype to retain `instanceof` functionality when targeting ES5, see:
        // https://github.com/Microsoft/TypeScript-wiki/blob/main/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
        Object.setPrototypeOf(this, TimeoutError.prototype);
    }
}
exports.TimeoutError = TimeoutError;
/**
 * Adds a timeout to a promise and rejects if the specified timeout has elapsed. Also rejects if the specified promise
 * rejects, and resolves if the specified promise resolves.
 *
 * <p> NOTE: this operation will continue even after it throws a {@link TimeoutError}.
 *
 * @param promise promise to use with timeout.
 * @param timeout the timeout in milliseconds until the returned promise is rejected.
 */
function callWithTimeout(promise, timeout) {
    let timeoutHandle;
    const timeoutPromise = new Promise(function timeoutFunction(_resolve, reject) {
        timeoutHandle = setTimeout(function timeoutHandler() {
            reject(new TimeoutError('Operation timed out.'));
        }, timeout);
    });
    return Promise.race([promise, timeoutPromise]).then(result => {
        clearTimeout(timeoutHandle);
        return result;
    }, reason => {
        clearTimeout(timeoutHandle);
        throw reason;
    });
}
exports.callWithTimeout = callWithTimeout;
//# sourceMappingURL=timeout.js.map