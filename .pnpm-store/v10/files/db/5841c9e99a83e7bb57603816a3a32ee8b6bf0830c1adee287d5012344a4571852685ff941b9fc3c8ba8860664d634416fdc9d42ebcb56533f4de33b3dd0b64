/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { ContextAPI } from '../api/context';
import { getSpanContext, setSpan } from '../trace/context-utils';
import { NonRecordingSpan } from './NonRecordingSpan';
import { isSpanContextValid } from './spancontext-utils';
const contextApi = ContextAPI.getInstance();
/**
 * No-op implementations of {@link Tracer}.
 */
export class NoopTracer {
    // startSpan starts a noop span.
    startSpan(name, options, context = contextApi.active()) {
        const root = Boolean(options === null || options === void 0 ? void 0 : options.root);
        if (root) {
            return new NonRecordingSpan();
        }
        const parentFromContext = context && getSpanContext(context);
        if (isSpanContext(parentFromContext) &&
            isSpanContextValid(parentFromContext)) {
            return new NonRecordingSpan(parentFromContext);
        }
        else {
            return new NonRecordingSpan();
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
        const contextWithSpanSet = setSpan(parentContext, span);
        return contextApi.with(contextWithSpanSet, fn, undefined, span);
    }
}
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