import type { ReadableSpan } from '@opentelemetry/sdk-trace-base';
export interface SpanNode {
    id: string;
    span?: ReadableSpan;
    parentNode?: SpanNode | undefined;
    children: SpanNode[];
}
/**
 * This function runs through a list of OTEL Spans, and wraps them in an `SpanNode`
 * where each node holds a reference to their parent node.
 */
export declare function groupSpansWithParents(spans: ReadableSpan[]): SpanNode[];
/**
 * This returns the _local_ parent ID - `parentId` on the span may point to a remote span.
 */
export declare function getLocalParentId(span: ReadableSpan): string | undefined;
//# sourceMappingURL=groupSpansWithParents.d.ts.map