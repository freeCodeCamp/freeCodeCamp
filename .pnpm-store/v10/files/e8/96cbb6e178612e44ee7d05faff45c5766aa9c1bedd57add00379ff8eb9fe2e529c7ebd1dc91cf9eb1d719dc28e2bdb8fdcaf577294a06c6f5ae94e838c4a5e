import { Scope } from '../scope';
import { SpanLink } from './link';
import { Span, SpanAttributes, SpanTimeInput } from './span';
export interface StartSpanOptions {
    /** A manually specified start time for the created `Span` object. */
    startTime?: SpanTimeInput;
    /**
     * If set, start the span on a fork of this scope instead of on the current scope.
     * To ensure proper span cleanup, the passed scope is cloned for the duration of the span.
     *
     * If you want to modify the passed scope inside the callback, calling `getCurrentScope()`
     * will return the cloned scope, meaning all scope modifications will be reset once the
     * callback finishes
     *
     * If you want to modify the passed scope and have the changes persist after the callback ends,
     * modify the scope directly instead of using `getCurrentScope()`
     */
    scope?: Scope;
    /** The name of the span. */
    name: string;
    /** If set to true, only start a span if a parent span exists. */
    onlyIfParent?: boolean;
    /** An op for the span. This is a categorization for spans. */
    op?: string;
    /**
     * The kind of the span, following OpenTelemetry's SpanKind enum.
     * - 0 = INTERNAL (default)
     * - 1 = SERVER
     * - 2 = CLIENT
     * - 3 = PRODUCER
     * - 4 = CONSUMER
     *
     * This is used by OpenTelemetry-based SDK implementations to set the correct
     * span kind on the underlying OTel span, which affects how the span is
     * displayed and sampled.
     */
    kind?: 0 | 1 | 2 | 3 | 4;
    /**
     * If provided, make the new span a child of this span.
     * If this is not provided, the new span will be a child of the currently active span.
     * If this is set to `null`, the new span will have no parent span.
     */
    parentSpan?: Span | null;
    /**
     * If set to true, this span will be forced to be treated as a transaction in the Sentry UI, if possible and applicable.
     * Note that it is up to the SDK to decide how exactly the span will be sent, which may change in future SDK versions.
     * It is not guaranteed that a span started with this flag set to `true` will be sent as a transaction.
     */
    forceTransaction?: boolean;
    /** Attributes for the span. */
    attributes?: SpanAttributes;
    /**
     * Links to associate with the new span. Setting links here is preferred over addLink()
     * as it allows sampling decisions to consider the link information.
     */
    links?: SpanLink[];
    /**
     * Experimental options without any stability guarantees. Use with caution!
     */
    experimental?: {
        /**
         * If set to true, always start a standalone span which will be sent as a
         * standalone segment span envelope instead of a transaction envelope.
         *
         * @internal this option is currently experimental and should only be
         * used within SDK code. It might be removed or changed in the future.
         * The payload ("envelope") of the resulting request sending the span to
         * Sentry might change at any time.
         *
         * @hidden
         */
        standalone?: boolean;
    };
}
//# sourceMappingURL=startSpanOptions.d.ts.map
