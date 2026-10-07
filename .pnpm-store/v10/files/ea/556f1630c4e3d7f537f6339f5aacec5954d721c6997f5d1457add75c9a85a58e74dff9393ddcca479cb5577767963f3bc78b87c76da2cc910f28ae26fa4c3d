/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { createContextKey } from '../context/context';
import { NonRecordingSpan } from './NonRecordingSpan';
import { ContextAPI } from '../api/context';
/**
 * span key
 */
const SPAN_KEY = createContextKey('OpenTelemetry Context Key SPAN');
/**
 * Return the span if one exists
 *
 * @param context context to get span from
 */
export function getSpan(context) {
    return context.getValue(SPAN_KEY) || undefined;
}
/**
 * Gets the span from the current context, if one exists.
 */
export function getActiveSpan() {
    return getSpan(ContextAPI.getInstance().active());
}
/**
 * Set the span on a context
 *
 * @param context context to use as parent
 * @param span span to set active
 */
export function setSpan(context, span) {
    return context.setValue(SPAN_KEY, span);
}
/**
 * Remove current span stored in the context
 *
 * @param context context to delete span from
 */
export function deleteSpan(context) {
    return context.deleteValue(SPAN_KEY);
}
/**
 * Wrap span context in a NoopSpan and set as span in a new
 * context
 *
 * @param context context to set active span on
 * @param spanContext span context to be wrapped
 */
export function setSpanContext(context, spanContext) {
    return setSpan(context, new NonRecordingSpan(spanContext));
}
/**
 * Get the span context of the span if it exists.
 *
 * @param context context to get values from
 */
export function getSpanContext(context) {
    var _a;
    return (_a = getSpan(context)) === null || _a === void 0 ? void 0 : _a.spanContext();
}
//# sourceMappingURL=context-utils.js.map