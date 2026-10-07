/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { DiagComponentLogger } from '../diag/ComponentLogger';
import { createLogLevelDiagLogger } from '../diag/internal/logLevelLogger';
import { DiagLogLevel } from '../diag/types';
import { getGlobal, registerGlobal, unregisterGlobal, } from '../internal/global-utils';
const API_NAME = 'diag';
/**
 * Singleton object which represents the entry point to the OpenTelemetry internal
 * diagnostic API
 *
 * @since 1.0.0
 */
export class DiagAPI {
    /** Get the singleton instance of the DiagAPI API */
    static instance() {
        if (!this._instance) {
            this._instance = new DiagAPI();
        }
        return this._instance;
    }
    /**
     * Private internal constructor
     * @private
     */
    constructor() {
        function _logProxy(funcName) {
            return function (...args) {
                const logger = getGlobal('diag');
                // shortcut if logger not set
                if (!logger)
                    return;
                return logger[funcName](...args);
            };
        }
        // Using self local variable for minification purposes as 'this' cannot be minified
        const self = this;
        // DiagAPI specific functions
        const setLogger = (logger, optionsOrLogLevel = { logLevel: DiagLogLevel.INFO }) => {
            var _a, _b, _c;
            if (logger === self) {
                // There isn't much we can do here.
                // Logging to the console might break the user application.
                // Try to log to self. If a logger was previously registered it will receive the log.
                const err = new Error('Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation');
                self.error((_a = err.stack) !== null && _a !== void 0 ? _a : err.message);
                return false;
            }
            if (typeof optionsOrLogLevel === 'number') {
                optionsOrLogLevel = {
                    logLevel: optionsOrLogLevel,
                };
            }
            const oldLogger = getGlobal('diag');
            const newLogger = createLogLevelDiagLogger((_b = optionsOrLogLevel.logLevel) !== null && _b !== void 0 ? _b : DiagLogLevel.INFO, logger);
            // There already is an logger registered. We'll let it know before overwriting it.
            if (oldLogger && !optionsOrLogLevel.suppressOverrideMessage) {
                const stack = (_c = new Error().stack) !== null && _c !== void 0 ? _c : '<failed to generate stacktrace>';
                oldLogger.warn(`Current logger will be overwritten from ${stack}`);
                newLogger.warn(`Current logger will overwrite one already registered from ${stack}`);
            }
            return registerGlobal('diag', newLogger, self, true);
        };
        self.setLogger = setLogger;
        self.disable = () => {
            unregisterGlobal(API_NAME, self);
        };
        self.createComponentLogger = (options) => {
            return new DiagComponentLogger(options);
        };
        self.verbose = _logProxy('verbose');
        self.debug = _logProxy('debug');
        self.info = _logProxy('info');
        self.warn = _logProxy('warn');
        self.error = _logProxy('error');
    }
}
//# sourceMappingURL=diag.js.map