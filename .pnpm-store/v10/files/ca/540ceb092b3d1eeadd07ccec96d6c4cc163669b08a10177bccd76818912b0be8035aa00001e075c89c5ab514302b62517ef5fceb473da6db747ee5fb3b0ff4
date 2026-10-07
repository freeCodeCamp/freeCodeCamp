import { SpanKind } from '@opentelemetry/api';
import type { AbstractSpan } from '../types';
/**
 * Get the span kind from a span.
 * For whatever reason, this is not public API on the generic "Span" type,
 * so we need to check if we actually have a `SDKTraceBaseSpan` where we can fetch this from.
 * Otherwise, we fall back to `SpanKind.INTERNAL`.
 */
export declare function getSpanKind(span: AbstractSpan): SpanKind;
//# sourceMappingURL=getSpanKind.d.ts.map