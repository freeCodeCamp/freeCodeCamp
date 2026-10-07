/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { createContextKey } from '@opentelemetry/api';
const SUPPRESS_TRACING_KEY = createContextKey('OpenTelemetry SDK Context Key SUPPRESS_TRACING');
export function suppressTracing(context) {
    return context.setValue(SUPPRESS_TRACING_KEY, true);
}
export function unsuppressTracing(context) {
    return context.deleteValue(SUPPRESS_TRACING_KEY);
}
export function isTracingSuppressed(context) {
    return context.getValue(SUPPRESS_TRACING_KEY) === true;
}
//# sourceMappingURL=suppress-tracing.js.map