"use strict";
/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalErrorHandler = exports.setGlobalErrorHandler = void 0;
const logging_error_handler_1 = require("./logging-error-handler");
/** The global error handler delegate */
let delegateHandler = (0, logging_error_handler_1.loggingErrorHandler)();
/**
 * Set the global error handler
 * @param {ErrorHandler} handler
 */
function setGlobalErrorHandler(handler) {
    delegateHandler = handler;
}
exports.setGlobalErrorHandler = setGlobalErrorHandler;
/**
 * Return the global error handler
 * @param {Exception} ex
 */
function globalErrorHandler(ex) {
    try {
        delegateHandler(ex);
    }
    catch { } // eslint-disable-line no-empty
}
exports.globalErrorHandler = globalErrorHandler;
//# sourceMappingURL=global-error-handler.js.map