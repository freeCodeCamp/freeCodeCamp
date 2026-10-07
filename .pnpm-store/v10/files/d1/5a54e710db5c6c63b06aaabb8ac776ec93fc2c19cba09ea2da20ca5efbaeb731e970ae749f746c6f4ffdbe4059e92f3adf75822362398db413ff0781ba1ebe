/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { NoopTracer } from './NoopTracer';
const NOOP_TRACER = new NoopTracer();
/**
 * Proxy tracer provided by the proxy tracer provider
 *
 * @since 1.0.0
 */
export class ProxyTracer {
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
//# sourceMappingURL=ProxyTracer.js.map