/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * function to execute patched function and being able to catch errors
 * @param execute - function to be executed
 * @param onFinish - callback to run when execute finishes
 */
export function safeExecuteInTheMiddle(execute, onFinish, preventThrowingError) {
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
/**
 * Async function to execute patched function and being able to catch errors
 * @param execute - function to be executed
 * @param onFinish - callback to run when execute finishes
 */
export async function safeExecuteInTheMiddleAsync(execute, onFinish, preventThrowingError) {
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
/**
 * Checks if certain function has been already wrapped
 * @param func
 */
export function isWrapped(func) {
    return (typeof func === 'function' &&
        typeof func.__original === 'function' &&
        typeof func.__unwrap === 'function' &&
        func.__wrapped === true);
}
//# sourceMappingURL=utils.js.map