/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { diag, DiagLogLevel } from '@opentelemetry/api';
const logLevelMap = {
    ALL: DiagLogLevel.ALL,
    VERBOSE: DiagLogLevel.VERBOSE,
    DEBUG: DiagLogLevel.DEBUG,
    INFO: DiagLogLevel.INFO,
    WARN: DiagLogLevel.WARN,
    ERROR: DiagLogLevel.ERROR,
    NONE: DiagLogLevel.NONE,
};
/**
 * Convert a string to a {@link DiagLogLevel}, defaults to {@link DiagLogLevel} if the log level does not exist or undefined if the input is undefined.
 * @param value
 */
export function diagLogLevelFromString(value) {
    if (value == null) {
        // don't fall back to default - no value set has different semantics for ús than an incorrect value (do not set vs. fall back to default)
        return undefined;
    }
    const resolvedLogLevel = logLevelMap[value.toUpperCase()];
    if (resolvedLogLevel == null) {
        diag.warn(`Unknown log level "${value}", expected one of ${Object.keys(logLevelMap)}, using default`);
        return DiagLogLevel.INFO;
    }
    return resolvedLogLevel;
}
//# sourceMappingURL=configuration.js.map