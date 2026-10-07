/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { isSpanContextValid, TraceFlags, trace } from '@opentelemetry/api';
import { globalErrorHandler } from '@opentelemetry/core';
import { AlwaysOffSampler } from './AlwaysOffSampler';
import { AlwaysOnSampler } from './AlwaysOnSampler';
/**
 * A composite sampler that either respects the parent span's sampling decision
 * or delegates to `delegateSampler` for root spans.
 */
export class ParentBasedSampler {
    _root;
    _remoteParentSampled;
    _remoteParentNotSampled;
    _localParentSampled;
    _localParentNotSampled;
    constructor(config) {
        this._root = config.root;
        if (!this._root) {
            globalErrorHandler(new Error('ParentBasedSampler must have a root sampler configured'));
            this._root = new AlwaysOnSampler();
        }
        this._remoteParentSampled =
            config.remoteParentSampled ?? new AlwaysOnSampler();
        this._remoteParentNotSampled =
            config.remoteParentNotSampled ?? new AlwaysOffSampler();
        this._localParentSampled =
            config.localParentSampled ?? new AlwaysOnSampler();
        this._localParentNotSampled =
            config.localParentNotSampled ?? new AlwaysOffSampler();
    }
    shouldSample(context, traceId, spanName, spanKind, attributes, links) {
        const parentContext = trace.getSpanContext(context);
        if (!parentContext || !isSpanContextValid(parentContext)) {
            return this._root.shouldSample(context, traceId, spanName, spanKind, attributes, links);
        }
        if (parentContext.isRemote) {
            if (parentContext.traceFlags & TraceFlags.SAMPLED) {
                return this._remoteParentSampled.shouldSample(context, traceId, spanName, spanKind, attributes, links);
            }
            return this._remoteParentNotSampled.shouldSample(context, traceId, spanName, spanKind, attributes, links);
        }
        if (parentContext.traceFlags & TraceFlags.SAMPLED) {
            return this._localParentSampled.shouldSample(context, traceId, spanName, spanKind, attributes, links);
        }
        return this._localParentNotSampled.shouldSample(context, traceId, spanName, spanKind, attributes, links);
    }
    toString() {
        return `ParentBased{root=${this._root.toString()}, remoteParentSampled=${this._remoteParentSampled.toString()}, remoteParentNotSampled=${this._remoteParentNotSampled.toString()}, localParentSampled=${this._localParentSampled.toString()}, localParentNotSampled=${this._localParentNotSampled.toString()}}`;
    }
}
//# sourceMappingURL=ParentBasedSampler.js.map