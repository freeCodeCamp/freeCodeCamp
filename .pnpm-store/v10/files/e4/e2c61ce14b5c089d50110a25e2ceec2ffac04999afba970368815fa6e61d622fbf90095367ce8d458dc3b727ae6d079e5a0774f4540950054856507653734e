"use strict";
/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProxyLoggerProvider = void 0;
const NoopLoggerProvider_1 = require("./NoopLoggerProvider");
const ProxyLogger_1 = require("./ProxyLogger");
class ProxyLoggerProvider {
    getLogger(name, version, options) {
        var _a;
        return ((_a = this._getDelegateLogger(name, version, options)) !== null && _a !== void 0 ? _a : new ProxyLogger_1.ProxyLogger(this, name, version, options));
    }
    /**
     * Get the delegate logger provider.
     * Used by tests only.
     * @internal
     */
    _getDelegate() {
        var _a;
        return (_a = this._delegate) !== null && _a !== void 0 ? _a : NoopLoggerProvider_1.NOOP_LOGGER_PROVIDER;
    }
    /**
     * Set the delegate logger provider
     * @internal
     */
    _setDelegate(delegate) {
        this._delegate = delegate;
    }
    /**
     * @internal
     */
    _getDelegateLogger(name, version, options) {
        var _a;
        return (_a = this._delegate) === null || _a === void 0 ? void 0 : _a.getLogger(name, version, options);
    }
}
exports.ProxyLoggerProvider = ProxyLoggerProvider;
//# sourceMappingURL=ProxyLoggerProvider.js.map