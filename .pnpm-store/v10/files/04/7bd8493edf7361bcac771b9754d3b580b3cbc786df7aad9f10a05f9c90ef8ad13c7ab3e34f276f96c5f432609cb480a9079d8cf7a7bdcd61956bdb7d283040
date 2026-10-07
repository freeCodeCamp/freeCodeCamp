"use strict";
/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.isTracingSuppressed = exports.unsuppressTracing = exports.suppressTracing = void 0;
const api_1 = require("@opentelemetry/api");
const SUPPRESS_TRACING_KEY = (0, api_1.createContextKey)('OpenTelemetry SDK Context Key SUPPRESS_TRACING');
function suppressTracing(context) {
    return context.setValue(SUPPRESS_TRACING_KEY, true);
}
exports.suppressTracing = suppressTracing;
function unsuppressTracing(context) {
    return context.deleteValue(SUPPRESS_TRACING_KEY);
}
exports.unsuppressTracing = unsuppressTracing;
function isTracingSuppressed(context) {
    return context.getValue(SUPPRESS_TRACING_KEY) === true;
}
exports.isTracingSuppressed = isTracingSuppressed;
//# sourceMappingURL=suppress-tracing.js.map