"use strict";
/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tracer = void 0;
const api = require("@opentelemetry/api");
const core_1 = require("@opentelemetry/core");
const Span_1 = require("./Span");
const utility_1 = require("./utility");
const platform_1 = require("./platform");
const TracerMetrics_1 = require("./TracerMetrics");
const version_1 = require("./version");
const inspect_1 = require("./inspect");
/**
 * This class represents a basic tracer.
 */
class Tracer {
    _sampler;
    _generalLimits;
    _spanLimits;
    _idGenerator;
    instrumentationScope;
    _resource;
    _spanProcessor;
    _tracerMetrics;
    /**
     * Constructs a new Tracer instance.
     */
    constructor(instrumentationScope, config, resource, spanProcessor) {
        const localConfig = (0, utility_1.mergeConfig)(config);
        this._sampler = localConfig.sampler;
        this._generalLimits = localConfig.generalLimits;
        this._spanLimits = localConfig.spanLimits;
        this._idGenerator = config.idGenerator || new platform_1.RandomIdGenerator();
        this._resource = resource;
        this._spanProcessor = spanProcessor;
        this.instrumentationScope = instrumentationScope;
        const meter = localConfig.meterProvider
            ? localConfig.meterProvider.getMeter('@opentelemetry/sdk-trace', version_1.VERSION)
            : api.createNoopMeter();
        this._tracerMetrics = new TracerMetrics_1.TracerMetrics(meter);
    }
    /**
     * Starts a new Span or returns the default NoopSpan based on the sampling
     * decision.
     */
    startSpan(name, options = {}, context = api.context.active()) {
        // remove span from context in case a root span is requested via options
        if (options.root) {
            context = api.trace.deleteSpan(context);
        }
        const parentSpan = api.trace.getSpan(context);
        if ((0, core_1.isTracingSuppressed)(context)) {
            api.diag.debug('Instrumentation suppressed, returning Noop Span');
            const nonRecordingSpan = api.trace.wrapSpanContext(api.INVALID_SPAN_CONTEXT);
            return nonRecordingSpan;
        }
        const parentSpanContext = parentSpan?.spanContext();
        const spanId = this._idGenerator.generateSpanId();
        let validParentSpanContext;
        let traceId;
        let traceState;
        if (!parentSpanContext ||
            !api.trace.isSpanContextValid(parentSpanContext)) {
            // New root span.
            traceId = this._idGenerator.generateTraceId();
        }
        else {
            // New child span.
            traceId = parentSpanContext.traceId;
            traceState = parentSpanContext.traceState;
            validParentSpanContext = parentSpanContext;
        }
        const spanKind = options.kind ?? api.SpanKind.INTERNAL;
        const links = (options.links ?? []).map(link => {
            return {
                context: link.context,
                attributes: (0, core_1.sanitizeAttributes)(link.attributes),
            };
        });
        const attributes = (0, core_1.sanitizeAttributes)(options.attributes);
        // make sampling decision
        const samplingResult = this._sampler.shouldSample(context, traceId, name, spanKind, attributes, links);
        const recordEndMetrics = this._tracerMetrics.startSpan(parentSpanContext, samplingResult.decision);
        traceState = samplingResult.traceState ?? traceState;
        const traceFlags = samplingResult.decision === api.SamplingDecision.RECORD_AND_SAMPLED
            ? api.TraceFlags.SAMPLED
            : api.TraceFlags.NONE;
        const spanContext = { traceId, spanId, traceFlags, traceState };
        if (samplingResult.decision === api.SamplingDecision.NOT_RECORD) {
            api.diag.debug('Recording is off, propagating context in a non-recording span');
            const nonRecordingSpan = api.trace.wrapSpanContext(spanContext);
            return nonRecordingSpan;
        }
        // Set initial span attributes. The attributes object may have been mutated
        // by the sampler, so we sanitize the merged attributes before setting them.
        const initAttributes = (0, core_1.sanitizeAttributes)(Object.assign(attributes, samplingResult.attributes));
        const span = new Span_1.SpanImpl({
            resource: this._resource,
            scope: this.instrumentationScope,
            context,
            spanContext,
            name,
            kind: spanKind,
            links,
            parentSpanContext: validParentSpanContext,
            attributes: initAttributes,
            startTime: options.startTime,
            spanProcessor: this._spanProcessor,
            spanLimits: this._spanLimits,
            recordEndMetrics,
        });
        return span;
    }
    startActiveSpan(name, arg2, arg3, arg4) {
        let opts;
        let ctx;
        let fn;
        if (arguments.length < 2) {
            return;
        }
        else if (arguments.length === 2) {
            fn = arg2;
        }
        else if (arguments.length === 3) {
            opts = arg2;
            fn = arg3;
        }
        else {
            opts = arg2;
            ctx = arg3;
            fn = arg4;
        }
        const parentContext = ctx ?? api.context.active();
        const span = this.startSpan(name, opts, parentContext);
        const contextWithSpanSet = api.trace.setSpan(parentContext, span);
        return api.context.with(contextWithSpanSet, fn, undefined, span);
    }
    /** Returns the active {@link GeneralLimits}. */
    getGeneralLimits() {
        return this._generalLimits;
    }
    /** Returns the active {@link SpanLimits}. */
    getSpanLimits() {
        return this._spanLimits;
    }
    [inspect_1.inspectCustom](depth, options, inspect) {
        const payload = {
            instrumentationScope: this.instrumentationScope,
            resource: { attributes: (0, inspect_1.settledResourceAttributes)(this._resource) },
            spanLimits: this._spanLimits,
            generalLimits: this._generalLimits,
        };
        return (0, inspect_1.formatInspect)('Tracer', payload, depth, options, inspect);
    }
}
exports.Tracer = Tracer;
//# sourceMappingURL=Tracer.js.map