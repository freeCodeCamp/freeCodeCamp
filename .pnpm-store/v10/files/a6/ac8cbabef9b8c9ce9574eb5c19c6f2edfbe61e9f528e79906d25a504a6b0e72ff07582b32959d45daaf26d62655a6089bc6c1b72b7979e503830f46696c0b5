"use strict";
/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProxyTracer = void 0;
const NoopTracer_1 = require("./NoopTracer");
const NOOP_TRACER = new NoopTracer_1.NoopTracer();
/**
 * Proxy tracer provided by the proxy tracer provider
 *
 * @since 1.0.0
 */
class ProxyTracer {
    constructor(provider, name, version, options) {
        this._provider = provider;
        this.name = name;
        this.version = version;
        this.options = options;
    }
    startSpan(name, options, context) {
        return this._getTracer().startSpan(name, options, context);
    }
    startActiveSpan(_name, _options, _context, _fn) {
        const tracer = this._getTracer();
        return Reflect.apply(tracer.startActiveSpan, tracer, arguments);
    }
    /**
     * Try to get a tracer from the proxy tracer provider.
     * If the proxy tracer provider has no delegate, return a noop tracer.
     */
    _getTracer() {
        if (this._delegate) {
            return this._delegate;
        }
        const tracer = this._provider.getDelegateTracer(this.name, this.version, this.options);
        if (!tracer) {
            return NOOP_TRACER;
        }
        this._delegate = tracer;
        return this._delegate;
    }
}
exports.ProxyTracer = ProxyTracer;
//# sourceMappingURL=ProxyTracer.js.map