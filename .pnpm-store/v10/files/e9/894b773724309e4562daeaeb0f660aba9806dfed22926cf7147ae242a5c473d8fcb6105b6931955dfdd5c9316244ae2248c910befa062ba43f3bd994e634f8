/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { loggingErrorHandler } from './logging-error-handler';
/** The global error handler delegate */
let delegateHandler = loggingErrorHandler();
/**
 * Set the global error handler
 * @param {ErrorHandler} handler
 */
export function setGlobalErrorHandler(handler) {
    delegateHandler = handler;
}
/**
 * Return the global error handler
 * @param {Exception} ex
 */
export function globalErrorHandler(ex) {
    try {
        delegateHandler(ex);
    }
    catch { } // eslint-disable-line no-empty
}
//# sourceMappingURL=global-error-handler.js.map