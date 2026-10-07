/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
const consoleMap = [
    { n: 'error', c: 'error' },
    { n: 'warn', c: 'warn' },
    { n: 'info', c: 'info' },
    { n: 'debug', c: 'debug' },
    { n: 'verbose', c: 'trace' },
];
// Save original console methods at module load time, before any instrumentation
// can wrap them. This ensures DiagConsoleLogger calls the unwrapped originals.
// Exported for testing only — not part of the public API.
export const _originalConsoleMethods = {};
if (typeof console !== 'undefined') {
    const keys = [
        'error',
        'warn',
        'info',
        'debug',
        'trace',
        'log',
    ];
    for (const key of keys) {
        // eslint-disable-next-line no-console
        if (typeof console[key] === 'function') {
            // eslint-disable-next-line no-console
            _originalConsoleMethods[key] = console[key];
        }
    }
}
/**
 * A simple Immutable Console based diagnostic logger which will output any messages to the Console.
 * If you want to limit the amount of logging to a specific level or lower use the
 * {@link createLogLevelDiagLogger}
 *
 * @since 1.0.0
 */
export class DiagConsoleLogger {
    constructor() {
        function _consoleFunc(funcName) {
            return function (...args) {
                // Prefer original (pre-instrumentation) methods saved at module load time.
                let theFunc = _originalConsoleMethods[funcName];
                // Some environments only expose the console when the F12 developer console is open
                if (typeof theFunc !== 'function') {
                    theFunc = _originalConsoleMethods['log'];
                }
                // Fall back in case console was not available at module load time but became available later.
                if (typeof theFunc !== 'function' && console) {
                    // eslint-disable-next-line no-console
                    theFunc = console[funcName];
                    if (typeof theFunc !== 'function') {
                        // eslint-disable-next-line no-console
                        theFunc = console.log;
                    }
                }
                if (typeof theFunc === 'function') {
                    return theFunc.apply(console, args);
                }
            };
        }
        for (let i = 0; i < consoleMap.length; i++) {
            this[consoleMap[i].n] = _consoleFunc(consoleMap[i].c);
        }
    }
}
//# sourceMappingURL=consoleLogger.js.map