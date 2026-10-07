import { coalesce } from './arrays.js';
import { isString } from './types.js';
import { localize } from '../../nls.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
function exceptionToErrorMessage(exception, verbose) {
    if (verbose && (exception.stack || exception.stacktrace)) {
        return localize(29, "{0}: {1}", detectSystemErrorMessage(exception), stackToString(exception.stack) || stackToString(exception.stacktrace));
    }
    return detectSystemErrorMessage(exception);
}
function stackToString(stack) {
    if (Array.isArray(stack)) {
        return stack.join('\n');
    }
    return stack;
}
function detectSystemErrorMessage(exception) {
    // Custom node.js error from us
    if (exception.code === 'ERR_UNC_HOST_NOT_ALLOWED') {
        return `${exception.message}. Please update the 'security.allowedUNCHosts' setting if you want to allow this host.`;
    }
    // See https://nodejs.org/api/errors.html#errors_class_system_error
    if (typeof exception.code === 'string' && typeof exception.errno === 'number' && typeof exception.syscall === 'string') {
        return localize(30, "A system error occurred ({0})", exception.message);
    }
    return exception.message || localize(31, "An unknown error occurred. Please consult the log for more details.");
}
/**
 * Tries to generate a human readable error message out of the error. If the verbose parameter
 * is set to true, the error message will include stacktrace details if provided.
 *
 * @returns A string containing the error message.
 */
function toErrorMessage(error = null, verbose = false) {
    if (!error) {
        return localize(32, "An unknown error occurred. Please consult the log for more details.");
    }
    if (Array.isArray(error)) {
        const errors = coalesce(error);
        const msg = toErrorMessage(errors[0], verbose);
        if (errors.length > 1) {
            return localize(33, "{0} ({1} errors in total)", msg, errors.length);
        }
        return msg;
    }
    if (isString(error)) {
        return error;
    }
    if (error.detail) {
        const detail = error.detail;
        if (detail.error) {
            return exceptionToErrorMessage(detail.error, verbose);
        }
        if (detail.exception) {
            return exceptionToErrorMessage(detail.exception, verbose);
        }
    }
    if (error.stack) {
        return exceptionToErrorMessage(error, verbose);
    }
    if (error.message) {
        return error.message;
    }
    return localize(34, "An unknown error occurred. Please consult the log for more details.");
}

export { toErrorMessage };
