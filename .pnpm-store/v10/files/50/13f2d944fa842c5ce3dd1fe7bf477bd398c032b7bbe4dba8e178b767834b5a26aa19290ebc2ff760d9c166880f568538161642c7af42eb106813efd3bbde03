"use strict";
/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNoopDiagLogger = void 0;
function noopLogFunction() { }
/**
 * Returns a No-Op Diagnostic logger where all messages do nothing.
 * @implements {@link DiagLogger}
 * @returns {DiagLogger}
 */
function createNoopDiagLogger() {
    return {
        verbose: noopLogFunction,
        debug: noopLogFunction,
        info: noopLogFunction,
        warn: noopLogFunction,
        error: noopLogFunction,
    };
}
exports.createNoopDiagLogger = createNoopDiagLogger;
//# sourceMappingURL=noopLogger.js.map