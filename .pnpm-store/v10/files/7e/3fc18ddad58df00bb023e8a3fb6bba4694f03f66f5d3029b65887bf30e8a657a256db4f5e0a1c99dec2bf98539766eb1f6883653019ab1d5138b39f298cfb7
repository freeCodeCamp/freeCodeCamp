"use strict";
/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSpanContext = exports.setSpanContext = exports.deleteSpan = exports.setSpan = exports.getActiveSpan = exports.getSpan = void 0;
const context_1 = require("../context/context");
const NonRecordingSpan_1 = require("./NonRecordingSpan");
const context_2 = require("../api/context");
/**
 * span key
 */
const SPAN_KEY = (0, context_1.createContextKey)('OpenTelemetry Context Key SPAN');
/**
 * Return the span if one exists
 *
 * @param context context to get span from
 */
function getSpan(context) {
    return context.getValue(SPAN_KEY) || undefined;
}
exports.getSpan = getSpan;
/**
 * Gets the span from the current context, if one exists.
 */
function getActiveSpan() {
    return getSpan(context_2.ContextAPI.getInstance().active());
}
exports.getActiveSpan = getActiveSpan;
/**
 * Set the span on a context
 *
 * @param context context to use as parent
 * @param span span to set active
 */
function setSpan(context, span) {
    return context.setValue(SPAN_KEY, span);
}
exports.setSpan = setSpan;
/**
 * Remove current span stored in the context
 *
 * @param context context to delete span from
 */
function deleteSpan(context) {
    return context.deleteValue(SPAN_KEY);
}
exports.deleteSpan = deleteSpan;
/**
 * Wrap span context in a NoopSpan and set as span in a new
 * context
 *
 * @param context context to set active span on
 * @param spanContext span context to be wrapped
 */
function setSpanContext(context, spanContext) {
    return setSpan(context, new NonRecordingSpan_1.NonRecordingSpan(spanContext));
}
exports.setSpanContext = setSpanContext;
/**
 * Get the span context of the span if it exists.
 *
 * @param context context to get values from
 */
function getSpanContext(context) {
    var _a;
    return (_a = getSpan(context)) === null || _a === void 0 ? void 0 : _a.spanContext();
}
exports.getSpanContext = getSpanContext;
//# sourceMappingURL=context-utils.js.map