"use strict";
/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsAPI = void 0;
const global_utils_1 = require("../internal/global-utils");
const NoopLoggerProvider_1 = require("../NoopLoggerProvider");
const ProxyLoggerProvider_1 = require("../ProxyLoggerProvider");
class LogsAPI {
    constructor() {
        this._proxyLoggerProvider = new ProxyLoggerProvider_1.ProxyLoggerProvider();
    }
    static getInstance() {
        if (!this._instance) {
            this._instance = new LogsAPI();
        }
        return this._instance;
    }
    setGlobalLoggerProvider(provider) {
        if (global_utils_1._global[global_utils_1.GLOBAL_LOGS_API_KEY]) {
            return this.getLoggerProvider();
        }
        global_utils_1._global[global_utils_1.GLOBAL_LOGS_API_KEY] = (0, global_utils_1.makeGetter)(global_utils_1.API_BACKWARDS_COMPATIBILITY_VERSION, provider, NoopLoggerProvider_1.NOOP_LOGGER_PROVIDER);
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
        return ((_b = (_a = global_utils_1._global[global_utils_1.GLOBAL_LOGS_API_KEY]) === null || _a === void 0 ? void 0 : _a.call(global_utils_1._global, global_utils_1.API_BACKWARDS_COMPATIBILITY_VERSION)) !== null && _b !== void 0 ? _b : this._proxyLoggerProvider);
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
        delete global_utils_1._global[global_utils_1.GLOBAL_LOGS_API_KEY];
        this._proxyLoggerProvider = new ProxyLoggerProvider_1.ProxyLoggerProvider();
    }
}
exports.LogsAPI = LogsAPI;
//# sourceMappingURL=logs.js.map