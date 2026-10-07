import type { SpanKind, SpanStatus } from '@opentelemetry/api';
import type { ReadableSpan, TimedEvent } from '@opentelemetry/sdk-trace-base';
import type { AbstractSpan } from '../types';
/**
 * Check if a given span has attributes.
 * This is necessary because the base `Span` type does not have attributes,
 * so in places where we are passed a generic span, we need to check if we want to access them.
 */
export declare function spanHasAttributes<SpanType extends AbstractSpan>(span: SpanType): span is SpanType & {
    attributes: ReadableSpan['attributes'];
};
/**
 * Check if a given span has a kind.
 * This is necessary because the base `Span` type does not have a kind,
 * so in places where we are passed a generic span, we need to check if we want to access it.
 */
export declare function spanHasKind<SpanType extends AbstractSpan>(span: SpanType): span is SpanType & {
    kind: SpanKind;
};
/**
 * Check if a given span has a status.
 * This is necessary because the base `Span` type does not have a status,
 * so in places where we are passed a generic span, we need to check if we want to access it.
 */
export declare function spanHasStatus<SpanType extends AbstractSpan>(span: SpanType): span is SpanType & {
    status: SpanStatus;
};
/**
 * Check if a given span has a name.
 * This is necessary because the base `Span` type does not have a name,
 * so in places where we are passed a generic span, we need to check if we want to access it.
 */
export declare function spanHasName<SpanType extends AbstractSpan>(span: SpanType): span is SpanType & {
    name: string;
};
/**
 * Check if a given span has a kind.
 * This is necessary because the base `Span` type does not have a kind,
 * so in places where we are passed a generic span, we need to check if we want to access it.
 */
export declare function spanHasParentId<SpanType extends AbstractSpan>(span: SpanType): span is SpanType & {
    parentSpanId: string;
};
/**
 * Check if a given span has events.
 * This is necessary because the base `Span` type does not have events,
 * so in places where we are passed a generic span, we need to check if we want to access it.
 */
export declare function spanHasEvents<SpanType extends AbstractSpan>(span: SpanType): span is SpanType & {
    events: TimedEvent[];
};
//# sourceMappingURL=spanTypes.d.ts.map