import type { ContextManager, MeterProvider, TextMapPropagator } from '@opentelemetry/api';
import type { Resource } from '@opentelemetry/resources';
import type { IdGenerator } from './IdGenerator';
import type { Sampler } from './Sampler';
import type { SpanProcessor } from './SpanProcessor';
/**
 * TracerConfig provides an interface for configuring a Basic Tracer.
 */
export interface TracerConfig {
    /**
     * Sampler determines if a span should be recorded or should be a NoopSpan.
     */
    sampler?: Sampler;
    /** General Limits */
    generalLimits?: GeneralLimits;
    /** Span Limits */
    spanLimits?: SpanLimits;
    /** Resource associated with trace telemetry  */
    resource?: Resource;
    /**
     * Generator of trace and span IDs
     * The default idGenerator generates random ids
     */
    idGenerator?: IdGenerator;
    /**
     * How long the forceFlush can run before it is cancelled.
     * The default value is 30000ms
     */
    forceFlushTimeoutMillis?: number;
    /**
     * List of SpanProcessor for the tracer
     */
    spanProcessors?: SpanProcessor[];
    /**
     * A meter provider to record trace SDK metrics to.
     * @experimental This option is experimental and is subject to breaking changes in minor releases.
     */
    meterProvider?: MeterProvider;
}
/**
 * Configuration options for registering the API with the SDK.
 * Undefined values may be substituted for defaults, and null
 * values will not be registered.
 */
export interface SDKRegistrationConfig {
    /** Propagator to register as the global propagator */
    propagator?: TextMapPropagator | null;
    /** Context manager to register as the global context manager */
    contextManager?: ContextManager | null;
}
/** Global configuration limits of trace service */
export interface GeneralLimits {
    /** attributeValueLengthLimit is maximum allowed attribute value size */
    attributeValueLengthLimit?: number;
    /** attributeCountLimit is number of attributes per trace */
    attributeCountLimit?: number;
}
/** Global configuration of trace service */
export interface SpanLimits {
    /** attributeValueLengthLimit is maximum allowed attribute value size */
    attributeValueLengthLimit?: number;
    /** attributeCountLimit is number of attributes per span */
    attributeCountLimit?: number;
    /** linkCountLimit is number of links per span */
    linkCountLimit?: number;
    /** eventCountLimit is number of message events per span */
    eventCountLimit?: number;
    /** attributePerEventCountLimit is the maximum number of attributes allowed per span event */
    attributePerEventCountLimit?: number;
    /** attributePerLinkCountLimit is the maximum number of attributes allowed per span link */
    attributePerLinkCountLimit?: number;
}
/** Interface configuration for a buffer. */
export interface BufferConfig {
    /** The maximum batch size of every export. It must be smaller or equal to
     * maxQueueSize. The default value is 512. */
    maxExportBatchSize?: number;
    /** The delay interval in milliseconds between two consecutive exports.
     *  The default value is 5000ms. */
    scheduledDelayMillis?: number;
    /** How long the export can run before it is cancelled.
     * The default value is 30000ms */
    exportTimeoutMillis?: number;
    /** The maximum queue size. After the size is reached spans are dropped.
     * The default value is 2048. */
    maxQueueSize?: number;
}
/** Interface configuration for BatchSpanProcessor on browser */
export interface BatchSpanProcessorBrowserConfig extends BufferConfig {
    /** Disable flush when a user navigates to a new page, closes the tab or the browser, or,
     * on mobile, switches to a different app. Auto flush is enabled by default. */
    disableAutoFlushOnDocumentHide?: boolean;
}
//# sourceMappingURL=types.d.ts.map