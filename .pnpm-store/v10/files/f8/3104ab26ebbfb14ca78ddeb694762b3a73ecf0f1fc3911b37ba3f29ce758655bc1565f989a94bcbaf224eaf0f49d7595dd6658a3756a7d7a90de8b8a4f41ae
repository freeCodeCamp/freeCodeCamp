"use strict";
/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstrumentationAbstract = void 0;
const api_1 = require("@opentelemetry/api");
const api_logs_1 = require("@opentelemetry/api-logs");
const shimmer = require("./shimmer");
/**
 * Base abstract internal class for instrumenting node and web plugins
 */
class InstrumentationAbstract {
    _config = {};
    _tracer;
    _meter;
    _logger;
    _diag;
    instrumentationName;
    instrumentationVersion;
    constructor(instrumentationName, instrumentationVersion, config) {
        this.instrumentationName = instrumentationName;
        this.instrumentationVersion = instrumentationVersion;
        this.setConfig(config);
        this._diag = api_1.diag.createComponentLogger({
            namespace: instrumentationName,
        });
        this._tracer = api_1.trace.getTracer(instrumentationName, instrumentationVersion);
        this._meter = api_1.metrics.getMeter(instrumentationName, instrumentationVersion);
        this._logger = api_logs_1.logs.getLogger(instrumentationName, instrumentationVersion);
        this._updateMetricInstruments();
    }
    /* Api to wrap instrumented method */
    _wrap = shimmer.wrap;
    /* Api to unwrap instrumented methods */
    _unwrap = shimmer.unwrap;
    /* Api to mass wrap instrumented method */
    _massWrap = shimmer.massWrap;
    /* Api to mass unwrap instrumented methods */
    _massUnwrap = shimmer.massUnwrap;
    /* Returns meter */
    get meter() {
        return this._meter;
    }
    /**
     * Sets MeterProvider to this plugin
     * @param meterProvider
     */
    setMeterProvider(meterProvider) {
        this._meter = meterProvider.getMeter(this.instrumentationName, this.instrumentationVersion);
        this._updateMetricInstruments();
    }
    /* Returns logger */
    get logger() {
        return this._logger;
    }
    /**
     * Sets LoggerProvider to this plugin
     * @param loggerProvider
     */
    setLoggerProvider(loggerProvider) {
        this._logger = loggerProvider.getLogger(this.instrumentationName, this.instrumentationVersion);
    }
    /**
     * @experimental
     *
     * Get module definitions defined by {@link init}.
     * This can be used for experimental compile-time instrumentation.
     *
     * @returns an array of {@link InstrumentationModuleDefinition}
     */
    getModuleDefinitions() {
        const initResult = this.init() ?? [];
        if (!Array.isArray(initResult)) {
            return [initResult];
        }
        return initResult;
    }
    /**
     * Sets the new metric instruments with the current Meter.
     */
    _updateMetricInstruments() {
        return;
    }
    /* Returns InstrumentationConfig */
    getConfig() {
        return this._config;
    }
    /**
     * Sets InstrumentationConfig to this plugin
     * @param config
     */
    setConfig(config) {
        // copy config first level properties to ensure they are immutable.
        // nested properties are not copied, thus are mutable from the outside.
        this._config = {
            enabled: true,
            ...config,
        };
    }
    /**
     * Sets TraceProvider to this plugin
     * @param tracerProvider
     */
    setTracerProvider(tracerProvider) {
        this._tracer = tracerProvider.getTracer(this.instrumentationName, this.instrumentationVersion);
    }
    /* Returns tracer */
    get tracer() {
        return this._tracer;
    }
    /**
     * Execute span customization hook, if configured, and log any errors.
     * Any semantics of the trigger and info are defined by the specific instrumentation.
     * @param hookHandler The optional hook handler which the user has configured via instrumentation config
     * @param triggerName The name of the trigger for executing the hook for logging purposes
     * @param span The span to which the hook should be applied
     * @param info The info object to be passed to the hook, with useful data the hook may use
     */
    _runSpanCustomizationHook(hookHandler, triggerName, span, info) {
        if (!hookHandler) {
            return;
        }
        try {
            hookHandler(span, info);
        }
        catch (e) {
            this._diag.error(`Error running span customization hook due to exception in handler`, { triggerName }, e);
        }
    }
}
exports.InstrumentationAbstract = InstrumentationAbstract;
//# sourceMappingURL=instrumentation.js.map