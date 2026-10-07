"use strict";
/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoopTracer = void 0;
const context_1 = require("../api/context");
const context_utils_1 = require("../trace/context-utils");
const NonRecordingSpan_1 = require("./NonRecordingSpan");
const spancontext_utils_1 = require("./spancontext-utils");
const contextApi = context_1.ContextAPI.getInstance();
/**
 * No-op implementations of {@link Tracer}.
 */
class NoopTracer {
    // startSpan starts a noop span.
    startSpan(name, options, context = contextApi.active()) {
        const root = Boolean(options === null || options === void 0 ? void 0 : options.root);
        if (root) {
            return new NonRecordingSpan_1.NonRecordingSpan();
        }
        const parentFromContext = context && (0, context_utils_1.getSpanContext)(context);
        if (isSpanContext(parentFromContext) &&
            (0, spancontext_utils_1.isSpanContextValid)(parentFromContext)) {
            return new NonRecordingSpan_1.NonRecordingSpan(parentFromContext);
        }
        else {
            return new NonRecordingSpan_1.NonRecordingSpan();
        }
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
        const parentContext = ctx !== null && ctx !== void 0 ? ctx : contextApi.active();
        const span = this.startSpan(name, opts, parentContext);
        const contextWithSpanSet = (0, context_utils_1.setSpan)(parentContext, span);
        return contextApi.with(contextWithSpanSet, fn, undefined, span);
    }
}
exports.NoopTracer = NoopTracer;
function isSpanContext(spanContext) {
    return (spanContext !== null &&
        typeof spanContext === 'object' &&
        'spanId' in spanContext &&
        typeof spanContext['spanId'] === 'string' &&
        'traceId' in spanContext &&
        typeof spanContext['traceId'] === 'string' &&
        'traceFlags' in spanContext &&
        typeof spanContext['traceFlags'] === 'number');
}
//# sourceMappingURL=NoopTracer.js.map