import { HandlerDataFetch } from './types/instrument';
import { ResponseHookInfo } from './types/request';
import { Span, SpanOrigin } from './types/span';
type PolymorphicRequestHeaders = Record<string, unknown> | Array<[
    string,
    unknown
]> | Iterable<Iterable<unknown>> | {
    append: (key: string, value: string) => void;
    get: (key: string) => string | null | undefined;
};
interface InstrumentFetchRequestOptions {
    spanOrigin?: SpanOrigin;
    propagateTraceparent?: boolean;
    onRequestSpanEnd?: (span: Span, responseInformation: ResponseHookInfo) => void;
}
/**
 * Create and track fetch request spans for usage in combination with `addFetchInstrumentationHandler`.
 *
 * @deprecated pass an options object instead of the spanOrigin parameter
 *
 * @returns Span if a span was created, otherwise void.
 */
export declare function instrumentFetchRequest(handlerData: HandlerDataFetch, shouldCreateSpan: (url: string) => boolean, shouldAttachHeaders: (url: string) => boolean, spans: Record<string, Span>, spanOrigin: SpanOrigin): Span | undefined;
/**
 * Create and track fetch request spans for usage in combination with `addFetchInstrumentationHandler`.
 *
 * @returns Span if a span was created, otherwise void.
 */
export declare function instrumentFetchRequest(handlerData: HandlerDataFetch, shouldCreateSpan: (url: string) => boolean, shouldAttachHeaders: (url: string) => boolean, spans: Record<string, Span>, instrumentFetchRequestOptions: InstrumentFetchRequestOptions): Span | undefined;
/**
 * Calls the onRequestSpanEnd callback if it is defined.
 */
export declare function _callOnRequestSpanEnd(span: Span, handlerData: HandlerDataFetch, spanOriginOrOptions?: SpanOrigin | InstrumentFetchRequestOptions): void;
/**
 * Builds merged fetch headers that include `sentry-trace` and `baggage` (and optionally `traceparent`)
 * for the given request and init, without mutating the original request or options.
 * Returns `undefined` when there is no `sentry-trace` value to attach.
 *
 * @internal Exported for cross-package instrumentation (for example Cloudflare Workers fetcher bindings)
 * and unit tests
 *
 * Baggage handling:
 * 1. No previous baggage header → include Sentry baggage
 * 2. Previous baggage has no Sentry entries → merge Sentry baggage in
 * 3. Previous baggage already has Sentry entries → leave as-is (may be user-defined)
 */
export declare function _INTERNAL_getTracingHeadersForFetchRequest(request: string | URL | Request, fetchOptionsObj: {
    headers?: {
        [key: string]: string[] | string | undefined;
    } | PolymorphicRequestHeaders;
}, span?: Span, propagateTraceparent?: boolean): PolymorphicRequestHeaders | undefined;
export {};
//# sourceMappingURL=fetch.d.ts.map
