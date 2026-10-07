import { SpanAttributeValue, SpanContextData } from './span';
type SpanLinkAttributes = {
    /**
     * Setting the link type to 'previous_trace' helps the Sentry product linking to the previous trace
     */
    'sentry.link.type'?: string | 'previous_trace';
} & Record<string, SpanAttributeValue | undefined>;
export interface SpanLink {
    /**
     * Contains the SpanContext of the span to link to
     */
    context: SpanContextData;
    /**
     * A key-value pair with primitive values or an array of primitive values
     */
    attributes?: SpanLinkAttributes;
}
/**
 * Link interface for the event envelope item. It's a flattened representation of `SpanLink`.
 * Can include additional fields defined by OTel.
 */
export interface SpanLinkJSON<TAttributes = SpanLinkAttributes> extends Record<string, unknown> {
    span_id: string;
    trace_id: string;
    sampled?: boolean;
    attributes?: TAttributes;
}
export {};
//# sourceMappingURL=link.d.ts.map
