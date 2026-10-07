import { InstrumentationConfig } from '@opentelemetry/instrumentation';
import { InstrumentationBase, InstrumentationNodeModuleDefinition } from '@opentelemetry/instrumentation';
import { ClientRequest, IncomingMessage, ServerResponse } from 'node:http';
import { HttpClientRequest, HttpIncomingMessage, Span } from '@sentry/core';
import * as http from 'node:http';
export type SentryHttpInstrumentationOptions = InstrumentationConfig & {
    /**
     * Whether breadcrumbs should be recorded for outgoing requests.
     *
     * @default `true`
     */
    breadcrumbs?: boolean;
    /**
     * Whether to propagate Sentry trace headers in outgoing requests.
     * By default this is done by the HttpInstrumentation, but if that is not added (e.g. because tracing is disabled)
     * then this instrumentation can take over.
     *
     * @default `false`
     */
    propagateTraceInOutgoingRequests?: boolean;
    /**
     * Whether to enable the capability to create spans for outgoing requests via diagnostic channels.
     * If enabled, spans will only be created if the `spans` option is also enabled (default: true).
     *
     * This is a feature flag that should be enabled by SDKs when the runtime supports it (Node 22.12+).
     * Individual users should not need to configure this directly.
     *
     * @default `false`
     */
    createSpansForOutgoingRequests?: boolean;
    /**
     * Whether to create spans for outgoing requests (user preference).
     * This only takes effect if `createSpansForOutgoingRequests` is also enabled.
     * If `createSpansForOutgoingRequests` is not enabled, this option is ignored.
     *
     * @default `true`
     */
    spans?: boolean;
    /**
     * Do not capture breadcrumbs for outgoing HTTP requests to URLs where the given callback returns `true`.
     * For the scope of this instrumentation, this callback only controls breadcrumb creation.
     * The same option can be passed to the top-level httpIntegration where it controls both, breadcrumb and
     * span creation.
     *
     * @param url Contains the entire URL, including query string (if any), protocol, host, etc. of the outgoing request.
     * @param request Contains the {@type RequestOptions} object used to make the outgoing request.
     */
    ignoreOutgoingRequests?: (url: string, request: http.RequestOptions) => boolean;
    /**
     * Hooks for outgoing request spans, called when `createSpansForOutgoingRequests` is enabled.
     * These mirror the OTEL HttpInstrumentation hooks for backwards compatibility.
     */
    outgoingRequestHook?: (span: Span, request: ClientRequest | HttpClientRequest) => void;
    outgoingResponseHook?: (span: Span, response: IncomingMessage | HttpIncomingMessage) => void;
    outgoingRequestApplyCustomAttributes?: (span: Span, request: HttpClientRequest, response: HttpIncomingMessage) => void;
    /**
     * @deprecated This no longer does anything.
     */
    extractIncomingTraceFromHeader?: boolean;
    /**
     * @deprecated This no longer does anything.
     */
    ignoreStaticAssets?: boolean;
    /**
     * @deprecated This no longer does anything.
     */
    disableIncomingRequestSpans?: boolean;
    /**
     * @deprecated This no longer does anything.
     */
    ignoreSpansForIncomingRequests?: (urlPath: string, request: IncomingMessage) => boolean;
    /**
     * @deprecated This no longer does anything.
     */
    ignoreIncomingRequestBody?: (url: string, request: http.RequestOptions) => boolean;
    /**
     * @deprecated This no longer does anything.
     */
    maxIncomingRequestBodySize?: 'none' | 'small' | 'medium' | 'always';
    /**
     * @deprecated This no longer does anything.
     */
    trackIncomingRequestsAsSessions?: boolean;
    /**
     * @deprecated This no longer does anything.
     */
    instrumentation?: {
        requestHook?: (span: Span, req: ClientRequest | IncomingMessage) => void;
        responseHook?: (span: Span, response: IncomingMessage | ServerResponse) => void;
        applyCustomAttributesOnSpan?: (span: Span, request: ClientRequest | IncomingMessage, response: IncomingMessage | ServerResponse) => void;
    };
    /**
     * @deprecated This no longer does anything.
     */
    sessionFlushingDelayMS?: number;
};
/**
 * This custom HTTP instrumentation handles outgoing HTTP requests.
 *
 * It provides:
 * - Breadcrumbs for all outgoing requests
 * - Trace propagation headers (when enabled)
 * - Span creation for outgoing requests (when createSpansForOutgoingRequests is enabled)
 *
 * Span creation requires Node 22+ and uses diagnostic channels to avoid monkey-patching.
 * By default, this is only enabled in the node SDK, not in node-core or other runtime SDKs.
 *
 * Important note: Contrary to other OTEL instrumentation, this one cannot be unwrapped.
 *
 * This is heavily inspired & adapted from:
 * https://github.com/open-telemetry/opentelemetry-js/blob/f8ab5592ddea5cba0a3b33bf8d74f27872c0367f/experimental/packages/opentelemetry-instrumentation-http/src/http.ts
 */
export declare class SentryHttpInstrumentation extends InstrumentationBase<SentryHttpInstrumentationOptions> {
    constructor(config?: SentryHttpInstrumentationOptions);
    /** @inheritdoc */
    init(): [
        InstrumentationNodeModuleDefinition,
        InstrumentationNodeModuleDefinition
    ];
}
//# sourceMappingURL=SentryHttpInstrumentation.d.ts.map
