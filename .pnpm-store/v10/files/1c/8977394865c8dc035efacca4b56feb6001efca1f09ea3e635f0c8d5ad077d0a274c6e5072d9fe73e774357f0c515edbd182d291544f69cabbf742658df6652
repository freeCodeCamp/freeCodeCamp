/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { getGlobal } from '../internal/global-utils';
/**
 * Component Logger which is meant to be used as part of any component which
 * will add automatically additional namespace in front of the log message.
 * It will then forward all message to global diag logger
 * @example
 * const cLogger = diag.createComponentLogger({ namespace: '@opentelemetry/instrumentation-http' });
 * cLogger.debug('test');
 * // @opentelemetry/instrumentation-http test
 */
export class DiagComponentLogger {
    constructor(props) {
        this._namespace = props.namespace || 'DiagComponentLogger';
    }
    debug(...args) {
        return logProxy('debug', this._namespace, args);
    }
    error(...args) {
        return logProxy('error', this._namespace, args);
    }
    info(...args) {
        return logProxy('info', this._namespace, args);
    }
    warn(...args) {
        return logProxy('warn', this._namespace, args);
    }
    verbose(...args) {
        return logProxy('verbose', this._namespace, args);
    }
}
function logProxy(funcName, namespace, args) {
    const logger = getGlobal('diag');
    // shortcut if logger not set
    if (!logger) {
        return;
    }
    return logger[funcName](namespace, ...args);
}
//# sourceMappingURL=ComponentLogger.js.map