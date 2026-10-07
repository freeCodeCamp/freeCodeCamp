/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { API_BACKWARDS_COMPATIBILITY_VERSION, GLOBAL_LOGS_API_KEY, _global, makeGetter, } from '../internal/global-utils';
import { NOOP_LOGGER_PROVIDER } from '../NoopLoggerProvider';
import { ProxyLoggerProvider } from '../ProxyLoggerProvider';
export class LogsAPI {
    constructor() {
        this._proxyLoggerProvider = new ProxyLoggerProvider();
    }
    static getInstance() {
        if (!this._instance) {
            this._instance = new LogsAPI();
        }
        return this._instance;
    }
    setGlobalLoggerProvider(provider) {
        if (_global[GLOBAL_LOGS_API_KEY]) {
            return this.getLoggerProvider();
        }
        _global[GLOBAL_LOGS_API_KEY] = makeGetter(API_BACKWARDS_COMPATIBILITY_VERSION, provider, NOOP_LOGGER_PROVIDER);
        this._proxyLoggerProvider._setDelegate(provider);
        return provider;
    }
    /**
     * Returns the global logger provider.
     *
     * @returns LoggerProvider
     */
    getLoggerProvider() {
        var _a, _b;
        return ((_b = (_a = _global[GLOBAL_LOGS_API_KEY]) === null || _a === void 0 ? void 0 : _a.call(_global, API_BACKWARDS_COMPATIBILITY_VERSION)) !== null && _b !== void 0 ? _b : this._proxyLoggerProvider);
    }
    /**
     * Returns a logger from the global logger provider.
     *
     * @returns Logger
     */
    getLogger(name, version, options) {
        return this.getLoggerProvider().getLogger(name, version, options);
    }
    /** Remove the global logger provider */
    disable() {
        delete _global[GLOBAL_LOGS_API_KEY];
        this._proxyLoggerProvider = new ProxyLoggerProvider();
    }
}
//# sourceMappingURL=logs.js.map