"use strict";
/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.isWrapped = exports.safeExecuteInTheMiddleAsync = exports.safeExecuteInTheMiddle = void 0;
/**
 * function to execute patched function and being able to catch errors
 * @param execute - function to be executed
 * @param onFinish - callback to run when execute finishes
 */
function safeExecuteInTheMiddle(execute, onFinish, preventThrowingError) {
    let error;
    let result;
    try {
        result = execute();
    }
    catch (e) {
        error = e;
    }
    finally {
        onFinish(error, result);
        if (error && !preventThrowingError) {
            // eslint-disable-next-line no-unsafe-finally
            throw error;
        }
        // eslint-disable-next-line no-unsafe-finally
        return result;
    }
}
exports.safeExecuteInTheMiddle = safeExecuteInTheMiddle;
/**
 * Async function to execute patched function and being able to catch errors
 * @param execute - function to be executed
 * @param onFinish - callback to run when execute finishes
 */
async function safeExecuteInTheMiddleAsync(execute, onFinish, preventThrowingError) {
    let error;
    let result;
    try {
        result = await execute();
    }
    catch (e) {
        error = e;
    }
    finally {
        await onFinish(error, result);
        if (error && !preventThrowingError) {
            // eslint-disable-next-line no-unsafe-finally
            throw error;
        }
        // eslint-disable-next-line no-unsafe-finally
        return result;
    }
}
exports.safeExecuteInTheMiddleAsync = safeExecuteInTheMiddleAsync;
/**
 * Checks if certain function has been already wrapped
 * @param func
 */
function isWrapped(func) {
    return (typeof func === 'function' &&
        typeof func.__original === 'function' &&
        typeof func.__unwrap === 'function' &&
        func.__wrapped === true);
}
exports.isWrapped = isWrapped;
//# sourceMappingURL=utils.js.map