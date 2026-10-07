/**
 * Use this attribute to represent the source of a span name.
 * Must be one of: custom, url, route, view, component, task
 * TODO(v11): rename this to sentry.span.source'
 */
export declare const SEMANTIC_ATTRIBUTE_SENTRY_SOURCE = "sentry.source";
/**
 * Attributes that holds the sample rate that was locally applied to a span.
 * If this attribute is not defined, it means that the span inherited a sampling decision.
 *
 * NOTE: Is only defined on root spans.
 */
export declare const SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE = "sentry.sample_rate";
/**
 * Attribute holding the sample rate of the previous trace.
 * This is used to sample consistently across subsequent traces in the browser SDK.
 *
 * Note: Only defined on root spans, if opted into consistent sampling
 */
export declare const SEMANTIC_ATTRIBUTE_SENTRY_PREVIOUS_TRACE_SAMPLE_RATE = "sentry.previous_trace_sample_rate";
/**
 * Use this attribute to represent the operation of a span.
 */
export declare const SEMANTIC_ATTRIBUTE_SENTRY_OP = "sentry.op";
/**
 * Use this attribute to represent the origin of a span.
 */
export declare const SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN = "sentry.origin";
/** The reason why an idle span finished. */
export declare const SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON = "sentry.idle_span_finish_reason";
/** The unit of a measurement, which may be stored as a TimedEvent. */
export declare const SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT = "sentry.measurement_unit";
/** The value of a measurement, which may be stored as a TimedEvent. */
export declare const SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE = "sentry.measurement_value";
/** The release version of the application */
export declare const SEMANTIC_ATTRIBUTE_SENTRY_RELEASE = "sentry.release";
/** The environment name (e.g., "production", "staging", "development") */
export declare const SEMANTIC_ATTRIBUTE_SENTRY_ENVIRONMENT = "sentry.environment";
/** The segment name (e.g., "GET /users") */
export declare const SEMANTIC_ATTRIBUTE_SENTRY_SEGMENT_NAME = "sentry.segment.name";
/** The id of the segment that this span belongs to. */
export declare const SEMANTIC_ATTRIBUTE_SENTRY_SEGMENT_ID = "sentry.segment.id";
/** The name of the Sentry SDK (e.g., "sentry.php", "sentry.javascript") */
export declare const SEMANTIC_ATTRIBUTE_SENTRY_SDK_NAME = "sentry.sdk.name";
/** The version of the Sentry SDK */
export declare const SEMANTIC_ATTRIBUTE_SENTRY_SDK_VERSION = "sentry.sdk.version";
/** The list of integrations enabled in the Sentry SDK (e.g., ["InboundFilters", "BrowserTracing"]) */
export declare const SEMANTIC_ATTRIBUTE_SENTRY_SDK_INTEGRATIONS = "sentry.sdk.integrations";
/** The user ID */
export declare const SEMANTIC_ATTRIBUTE_USER_ID = "user.id";
/** The user email */
export declare const SEMANTIC_ATTRIBUTE_USER_EMAIL = "user.email";
/** The user IP address */
export declare const SEMANTIC_ATTRIBUTE_USER_IP_ADDRESS = "user.ip_address";
/** The user username */
export declare const SEMANTIC_ATTRIBUTE_USER_USERNAME = "user.name";
/**
 * A custom span name set by users guaranteed to be taken over any automatically
 * inferred name. This attribute is removed before the span is sent.
 *
 * @internal only meant for internal SDK usage
 * @hidden
 */
export declare const SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME = "sentry.custom_span_name";
/**
 * The id of the profile that this span occurred in.
 */
export declare const SEMANTIC_ATTRIBUTE_PROFILE_ID = "sentry.profile_id";
export declare const SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME = "sentry.exclusive_time";
export declare const SEMANTIC_ATTRIBUTE_CACHE_HIT = "cache.hit";
export declare const SEMANTIC_ATTRIBUTE_CACHE_KEY = "cache.key";
export declare const SEMANTIC_ATTRIBUTE_CACHE_ITEM_SIZE = "cache.item_size";
/** TODO: Remove these once we update to latest semantic conventions */
export declare const SEMANTIC_ATTRIBUTE_HTTP_REQUEST_METHOD = "http.request.method";
export declare const SEMANTIC_ATTRIBUTE_URL_FULL = "url.full";
/**
 * A span link attribute to mark the link as a special span link.
 *
 * Known values:
 * - `previous_trace`: The span links to the frontend root span of the previous trace.
 * - `next_trace`: The span links to the frontend root span of the next trace. (Not set by the SDK)
 *
 * Other values may be set as appropriate.
 * @see https://develop.sentry.dev/sdk/telemetry/traces/span-links/#link-types
 */
export declare const SEMANTIC_LINK_ATTRIBUTE_LINK_TYPE = "sentry.link.type";
/**
 * =============================================================================
 * GEN AI ATTRIBUTES
 * Based on OpenTelemetry Semantic Conventions for Generative AI
 * @see https://opentelemetry.io/docs/specs/semconv/gen-ai/
 * =============================================================================
 */
/**
 * The conversation ID for linking messages across API calls.
 * For OpenAI Assistants API: thread_id
 * For LangGraph: configurable.thread_id
 */
export declare const GEN_AI_CONVERSATION_ID_ATTRIBUTE = "gen_ai.conversation.id";
//# sourceMappingURL=semanticAttributes.d.ts.map
