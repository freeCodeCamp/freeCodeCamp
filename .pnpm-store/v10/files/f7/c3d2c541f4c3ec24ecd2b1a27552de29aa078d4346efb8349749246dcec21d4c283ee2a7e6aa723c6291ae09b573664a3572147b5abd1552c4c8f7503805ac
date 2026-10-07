import type { Attributes, AttributeValue } from '@opentelemetry/api';
import { SpanKind } from '@opentelemetry/api';
import type { SpanAttributes, TransactionSource } from '@sentry/core';
import type { AbstractSpan } from '../types';
interface SpanDescription {
    op: string | undefined;
    description: string;
    source: TransactionSource;
    data?: Record<string, string | undefined>;
}
/**
 * Infer the op & description for a set of name, attributes and kind of a span.
 */
export declare function inferSpanData(spanName: string, attributes: SpanAttributes, kind: SpanKind): SpanDescription;
/**
 * Extract better op/description from an otel span.
 *
 * Does not overwrite the span name if the source is already set to custom to ensure
 * that user-updated span names are preserved. In this case, we only adjust the op but
 * leave span description and source unchanged.
 *
 * Based on https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/7422ce2a06337f68a59b552b8c5a2ac125d6bae5/exporter/sentryexporter/sentry_exporter.go#L306
 */
export declare function parseSpanDescription(span: AbstractSpan): SpanDescription;
/** Only exported for tests. */
export declare function descriptionForHttpMethod({ name, kind, attributes }: {
    name: string;
    attributes: Attributes;
    kind: SpanKind;
}, httpMethod: AttributeValue): SpanDescription;
/** Exported for tests only */
export declare function getSanitizedUrl(attributes: Attributes, kind: SpanKind): {
    url: string | undefined;
    urlPath: string | undefined;
    query: string | undefined;
    fragment: string | undefined;
    hasRoute: boolean;
};
/**
 * Because Otel instrumentation sometimes mutates span names via `span.updateName`, the only way
 * to ensure that a user-set span name is preserved is to store it as a tmp attribute on the span.
 * We delete this attribute once we're done with it when preparing the event envelope.
 *
 * This temp attribute always takes precedence over the original name.
 *
 * We also need to take care of setting the correct source. Users can always update the source
 * after updating the name, so we need to respect that.
 *
 * @internal exported only for testing
 */
export declare function getUserUpdatedNameAndSource(originalName: string, attributes: Attributes, fallbackSource?: TransactionSource): {
    description: string;
    source: TransactionSource;
};
export {};
//# sourceMappingURL=parseSpanDescription.d.ts.map