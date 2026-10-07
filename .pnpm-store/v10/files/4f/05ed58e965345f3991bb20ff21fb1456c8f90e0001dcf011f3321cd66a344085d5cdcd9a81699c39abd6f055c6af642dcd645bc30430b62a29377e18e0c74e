/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
function noopLogFunction() { }
/**
 * Returns a No-Op Diagnostic logger where all messages do nothing.
 * @implements {@link DiagLogger}
 * @returns {DiagLogger}
 */
export function createNoopDiagLogger() {
    return {
        verbose: noopLogFunction,
        debug: noopLogFunction,
        info: noopLogFunction,
        warn: noopLogFunction,
        error: noopLogFunction,
    };
}
//# sourceMappingURL=noopLogger.js.map