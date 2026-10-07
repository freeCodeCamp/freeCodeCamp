import type { ClientOptions } from '../types/options';
import type { SpanJSON } from '../types/span';
/**
 * Check if a span should be ignored based on the ignoreSpans configuration.
 */
export declare function shouldIgnoreSpan(span: Pick<SpanJSON, 'description' | 'op'> & {
    attributes?: Record<string, unknown>;
}, ignoreSpans: Required<ClientOptions>['ignoreSpans']): boolean;
/**
 * Takes a list of spans, and a span that was dropped, and re-parents the child spans of the dropped span to the parent of the dropped span, if possible.
 * This mutates the spans array in place!
 */
export declare function reparentChildSpans(spans: SpanJSON[], dropSpan: SpanJSON): void;
//# sourceMappingURL=should-ignore-span.d.ts.map