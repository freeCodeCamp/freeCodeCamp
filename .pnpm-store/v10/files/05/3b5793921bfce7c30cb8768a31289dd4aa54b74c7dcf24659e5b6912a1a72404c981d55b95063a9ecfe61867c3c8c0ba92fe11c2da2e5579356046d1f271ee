/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { getGlobal, registerGlobal, unregisterGlobal, } from '../internal/global-utils';
import { ProxyTracerProvider } from '../trace/ProxyTracerProvider';
import { isSpanContextValid, wrapSpanContext, } from '../trace/spancontext-utils';
import { deleteSpan, getActiveSpan, getSpan, getSpanContext, setSpan, setSpanContext, } from '../trace/context-utils';
import { DiagAPI } from './diag';
const API_NAME = 'trace';
/**
 * Singleton object which represents the entry point to the OpenTelemetry Tracing API
 *
 * @since 1.0.0
 */
export class TraceAPI {
    /** Empty private constructor prevents end users from constructing a new instance of the API */
    constructor() {
        this._proxyTracerProvider = new ProxyTracerProvider();
        this.wrapSpanContext = wrapSpanContext;
        this.isSpanContextValid = isSpanContextValid;
        this.deleteSpan = deleteSpan;
        this.getSpan = getSpan;
        this.getActiveSpan = getActiveSpan;
        this.getSpanContext = getSpanContext;
        this.setSpan = setSpan;
        this.setSpanContext = setSpanContext;
    }
    /** Get the singleton instance of the Trace API */
    static getInstance() {
        if (!this._instance) {
            this._instance = new TraceAPI();
        }
        return this._instance;
    }
    /**
     * Set the current global tracer.
     *
     * @returns true if the tracer provider was successfully registered, else false
     */
    setGlobalTracerProvider(provider) {
        const success = registerGlobal(API_NAME, this._proxyTracerProvider, DiagAPI.instance());
        if (success) {
            this._proxyTracerProvider.setDelegate(provider);
        }
        return success;
    }
    /**
     * Returns the global tracer provider.
     */
    getTracerProvider() {
        return getGlobal(API_NAME) || this._proxyTracerProvider;
    }
    /**
     * Returns a tracer from the global tracer provider.
     */
    getTracer(name, version) {
        return this.getTracerProvider().getTracer(name, version);
    }
    /** Remove the global tracer provider */
    disable() {
        unregisterGlobal(API_NAME, DiagAPI.instance());
        this._proxyTracerProvider = new ProxyTracerProvider();
    }
}
//# sourceMappingURL=trace.js.map