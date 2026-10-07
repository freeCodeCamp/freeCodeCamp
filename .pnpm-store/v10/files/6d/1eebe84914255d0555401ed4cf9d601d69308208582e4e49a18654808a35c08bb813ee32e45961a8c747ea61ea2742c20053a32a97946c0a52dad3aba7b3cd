/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { NOOP_LOGGER } from './NoopLogger';
export class ProxyLogger {
    constructor(provider, name, version, options) {
        this._provider = provider;
        this.name = name;
        this.version = version;
        this.options = options;
    }
    /**
     * Emit a log record. This method should only be used by log appenders.
     *
     * @param logRecord
     */
    emit(logRecord) {
        this._getLogger().emit(logRecord);
    }
    /**
     * Try to get a logger from the proxy logger provider.
     * If the proxy logger provider has no delegate, return a noop logger.
     */
    _getLogger() {
        if (this._delegate) {
            return this._delegate;
        }
        const logger = this._provider._getDelegateLogger(this.name, this.version, this.options);
        if (!logger) {
            return NOOP_LOGGER;
        }
        this._delegate = logger;
        return this._delegate;
    }
}
//# sourceMappingURL=ProxyLogger.js.map