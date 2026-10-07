import type { SpanKind, SpanStatus, Attributes, HrTime, Link, SpanContext } from '@opentelemetry/api';
import type { Resource } from '@opentelemetry/resources';
import type { InstrumentationScope } from '@opentelemetry/core';
import type { TimedEvent } from '../TimedEvent';
export interface ReadableSpan {
    readonly name: string;
    readonly kind: SpanKind;
    readonly spanContext: () => SpanContext;
    readonly parentSpanContext?: SpanContext;
    readonly startTime: HrTime;
    readonly endTime: HrTime;
    readonly status: SpanStatus;
    readonly attributes: Attributes;
    readonly links: Link[];
    readonly events: TimedEvent[];
    readonly duration: HrTime;
    readonly ended: boolean;
    readonly resource: Resource;
    readonly instrumentationScope: InstrumentationScope;
    readonly droppedAttributesCount: number;
    readonly droppedEventsCount: number;
    readonly droppedLinksCount: number;
}
//# sourceMappingURL=ReadableSpan.d.ts.map