"use strict";
/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParentBasedSampler = void 0;
const api_1 = require("@opentelemetry/api");
const core_1 = require("@opentelemetry/core");
const AlwaysOffSampler_1 = require("./AlwaysOffSampler");
const AlwaysOnSampler_1 = require("./AlwaysOnSampler");
/**
 * A composite sampler that either respects the parent span's sampling decision
 * or delegates to `delegateSampler` for root spans.
 */
class ParentBasedSampler {
    _root;
    _remoteParentSampled;
    _remoteParentNotSampled;
    _localParentSampled;
    _localParentNotSampled;
    constructor(config) {
        this._root = config.root;
        if (!this._root) {
            (0, core_1.globalErrorHandler)(new Error('ParentBasedSampler must have a root sampler configured'));
            this._root = new AlwaysOnSampler_1.AlwaysOnSampler();
        }
        this._remoteParentSampled =
            config.remoteParentSampled ?? new AlwaysOnSampler_1.AlwaysOnSampler();
        this._remoteParentNotSampled =
            config.remoteParentNotSampled ?? new AlwaysOffSampler_1.AlwaysOffSampler();
        this._localParentSampled =
            config.localParentSampled ?? new AlwaysOnSampler_1.AlwaysOnSampler();
        this._localParentNotSampled =
            config.localParentNotSampled ?? new AlwaysOffSampler_1.AlwaysOffSampler();
    }
    shouldSample(context, traceId, spanName, spanKind, attributes, links) {
        const parentContext = api_1.trace.getSpanContext(context);
        if (!parentContext || !(0, api_1.isSpanContextValid)(parentContext)) {
            return this._root.shouldSample(context, traceId, spanName, spanKind, attributes, links);
        }
        if (parentContext.isRemote) {
            if (parentContext.traceFlags & api_1.TraceFlags.SAMPLED) {
                return this._remoteParentSampled.shouldSample(context, traceId, spanName, spanKind, attributes, links);
            }
            return this._remoteParentNotSampled.shouldSample(context, traceId, spanName, spanKind, attributes, links);
        }
        if (parentContext.traceFlags & api_1.TraceFlags.SAMPLED) {
            return this._localParentSampled.shouldSample(context, traceId, spanName, spanKind, attributes, links);
        }
        return this._localParentNotSampled.shouldSample(context, traceId, spanName, spanKind, attributes, links);
    }
    toString() {
        return `ParentBased{root=${this._root.toString()}, remoteParentSampled=${this._remoteParentSampled.toString()}, remoteParentNotSampled=${this._remoteParentNotSampled.toString()}, localParentSampled=${this._localParentSampled.toString()}, localParentNotSampled=${this._localParentNotSampled.toString()}}`;
    }
}
exports.ParentBasedSampler = ParentBasedSampler;
//# sourceMappingURL=ParentBasedSampler.js.map