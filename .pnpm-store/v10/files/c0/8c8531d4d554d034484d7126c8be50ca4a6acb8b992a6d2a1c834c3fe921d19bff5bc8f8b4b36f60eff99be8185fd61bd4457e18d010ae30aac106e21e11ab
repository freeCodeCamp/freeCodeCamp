import type { IntegrationIndex } from './integration';
import type { Scope } from './scope';
import type { Breadcrumb, BreadcrumbHint, FetchBreadcrumbHint, XhrBreadcrumbHint } from './types/breadcrumb';
import type { CheckIn, MonitorConfig } from './types/checkin';
import type { EventDropReason, Outcome } from './types/clientreport';
import type { DataCategory } from './types/datacategory';
import type { DsnComponents } from './types/dsn';
import type { DynamicSamplingContext, Envelope } from './types/envelope';
import type { Event, EventHint } from './types/event';
import type { EventProcessor } from './types/eventprocessor';
import type { FeedbackEvent } from './types/feedback';
import type { Integration } from './types/integration';
import type { Log } from './types/log';
import type { Metric } from './types/metric';
import type { ClientOptions } from './types/options';
import type { ParameterizedString } from './types/parameterize';
import type { ReplayEndEvent, ReplayStartEvent } from './types/replay';
import type { RequestEventData } from './types/request';
import type { SdkMetadata } from './types/sdkmetadata';
import type { Session, SessionAggregates } from './types/session';
import type { SeverityLevel } from './types/severity';
import type { Span, SpanAttributes, SpanContextData, StreamedSpanJSON } from './types/span';
import type { StartSpanOptions } from './types/startSpanOptions';
import type { Transport, TransportMakeRequestResponse } from './types/transport';
import type { ResolvedDataCollection } from './types/datacollection';
import { type PromiseBuffer } from './utils/promisebuffer';
/**
 * Base implementation for all JavaScript SDK clients.
 *
 * Call the constructor with the corresponding options
 * specific to the client subclass. To access these options later, use
 * {@link Client.getOptions}.
 *
 * If a Dsn is specified in the options, it will be parsed and stored. Use
 * {@link Client.getDsn} to retrieve the Dsn at any moment. In case the Dsn is
 * invalid, the constructor will throw a {@link SentryException}. Note that
 * without a valid Dsn, the SDK will not send any events to Sentry.
 *
 * Before sending an event, it is passed through
 * {@link Client._prepareEvent} to add SDK information and scope data
 * (breadcrumbs and context). To add more custom information, override this
 * method and extend the resulting prepared event.
 *
 * To issue automatically created events (e.g. via instrumentation), use
 * {@link Client.captureEvent}. It will prepare the event and pass it through
 * the callback lifecycle. To issue auto-breadcrumbs, use
 * {@link Client.addBreadcrumb}.
 *
 * @example
 * class NodeClient extends Client<NodeOptions> {
 *   public constructor(options: NodeOptions) {
 *     super(options);
 *   }
 *
 *   // ...
 * }
 */
export declare abstract class Client<O extends ClientOptions = ClientOptions> {
    /** Options passed to the SDK. */
    protected readonly _options: O;
    /** The client Dsn, if specified in options. Without this Dsn, the SDK will be disabled. */
    protected readonly _dsn?: DsnComponents;
    protected readonly _transport?: Transport;
    /** Array of set up integrations. */
    protected _integrations: IntegrationIndex;
    /** Number of calls being processed */
    protected _numProcessing: number;
    protected _eventProcessors: EventProcessor[];
    /** Holds flushable  */
    protected _outcomes: {
        [key: string]: number;
    };
    protected _hooks: Record<string, Set<Function>>;
    protected _promiseBuffer: PromiseBuffer<unknown>;
    protected readonly _dataCollection: ResolvedDataCollection;
    /**
     * Initializes this client instance.
     *
     * @param options Options for the client.
     */
    protected constructor(options: O);
    /**
     * Captures an exception event and sends it to Sentry.
     *
     * Unlike `captureException` exported from every SDK, this method requires that you pass it the current scope.
     */
    captureException(exception: unknown, hint?: EventHint, scope?: Scope): string;
    /**
     * Captures a message event and sends it to Sentry.
     *
     * Unlike `captureMessage` exported from every SDK, this method requires that you pass it the current scope.
     */
    captureMessage(message: ParameterizedString, level?: SeverityLevel, hint?: EventHint, currentScope?: Scope): string;
    /**
     * Captures a manually created event and sends it to Sentry.
     *
     * Unlike `captureEvent` exported from every SDK, this method requires that you pass it the current scope.
     */
    captureEvent(event: Event, hint?: EventHint, currentScope?: Scope): string;
    /**
     * Captures a session.
     */
    captureSession(session: Session): void;
    /**
     * Create a cron monitor check in and send it to Sentry. This method is not available on all clients.
     *
     * @param checkIn An object that describes a check in.
     * @param upsertMonitorConfig An optional object that describes a monitor config. Use this if you want
     * to create a monitor automatically when sending a check in.
     * @param scope An optional scope containing event metadata.
     * @returns A string representing the id of the check in.
     */
    captureCheckIn?(checkIn: CheckIn, monitorConfig?: MonitorConfig, scope?: Scope): string;
    /**
     * Get the current Dsn.
     */
    getDsn(): DsnComponents | undefined;
    /**
     * Get the current options.
     */
    getOptions(): O;
    /**
     * Get the resolved data collection configuration.
     */
    getDataCollectionOptions(): ResolvedDataCollection;
    /**
     * Get the SDK metadata.
     * @see SdkMetadata
     */
    getSdkMetadata(): SdkMetadata | undefined;
    /**
     * Returns the transport that is used by the client.
     * Please note that the transport gets lazy initialized so it will only be there once the first event has been sent.
     */
    getTransport(): Transport | undefined;
    /**
     * Wait for all events to be sent or the timeout to expire, whichever comes first.
     *
     * @param timeout Maximum time in ms the client should wait for events to be flushed. Omitting this parameter will
     *   cause the client to wait until all events are sent before resolving the promise.
     * @returns A promise that will resolve with `true` if all events are sent before the timeout, or `false` if there are
     * still events in the queue when the timeout is reached.
     */
    flush(timeout?: number): PromiseLike<boolean>;
    /**
     * Flush the event queue and set the client to `enabled = false`. See {@link Client.flush}.
     *
     * @param {number} timeout Maximum time in ms the client should wait before shutting down. Omitting this parameter will cause
     *   the client to wait until all events are sent before disabling itself.
     * @returns {Promise<boolean>} A promise which resolves to `true` if the flush completes successfully before the timeout, or `false` if
     * it doesn't.
     */
    close(timeout?: number): PromiseLike<boolean>;
    /**
     * Get all installed event processors.
     */
    getEventProcessors(): EventProcessor[];
    /**
     * Adds an event processor that applies to any event processed by this client.
     */
    addEventProcessor(eventProcessor: EventProcessor): void;
    /**
     * Initialize this client.
     * Call this after the client was set on a scope.
     */
    init(): void;
    /**
     * Gets an installed integration by its name.
     *
     * @returns {Integration|undefined} The installed integration or `undefined` if no integration with that `name` was installed.
     */
    getIntegrationByName<T extends Integration = Integration>(integrationName: string): T | undefined;
    /**
     * Returns the names of all installed integrations.
     */
    getIntegrationNames(): string[];
    /**
     * Add an integration to the client.
     * This can be used to e.g. lazy load integrations.
     * In most cases, this should not be necessary,
     * and you're better off just passing the integrations via `integrations: []` at initialization time.
     * However, if you find the need to conditionally load & add an integration, you can use `addIntegration` to do so.
     */
    addIntegration(integration: Integration): void;
    /**
     * Send a fully prepared event to Sentry.
     */
    sendEvent(event: Event, hint?: EventHint): void;
    /**
     * Send a session or session aggregrates to Sentry.
     */
    sendSession(session: Session | SessionAggregates): void;
    /**
     * Record on the client that an event got dropped (ie, an event that will not be sent to Sentry).
     */
    recordDroppedEvent(reason: EventDropReason, category: DataCategory, count?: number): void;
    /**
     * Register a callback for whenever a span is started.
     * Receives the span as argument.
     * @returns {() => void} A function that, when executed, removes the registered callback.
     */
    on(hook: 'spanStart', callback: (span: Span) => void): () => void;
    /**
     * Register a callback before span sampling runs. Receives a `samplingDecision` object argument with a `decision`
     * property that can be used to make a sampling decision that will be enforced, before any span sampling runs.
     * @returns {() => void} A function that, when executed, removes the registered callback.
     */
    on(hook: 'beforeSampling', callback: (samplingData: {
        spanAttributes: SpanAttributes;
        spanName: string;
        parentSampled?: boolean;
        parentSampleRate?: number;
        parentContext?: SpanContextData;
    }, samplingDecision: {
        decision: boolean;
    }) => void): void;
    /**
     * Register a callback for after a span is ended.
     * NOTE: The span cannot be mutated anymore in this callback.
     * Receives the span as argument.
     * @returns {() => void} A function that, when executed, removes the registered callback.
     */
    on(hook: 'spanEnd', callback: (span: Span) => void): () => void;
    /**
     * Register a callback for after a span is ended and the `spanEnd` hook has run.
     * NOTE: The span cannot be mutated anymore in this callback.
     */
    on(hook: 'afterSpanEnd', callback: (immutableSegmentSpan: Readonly<Span>) => void): () => void;
    /**
     * Register a callback for after a segment span is ended and the `segmentSpanEnd` hook has run.
     * NOTE: The segment span cannot be mutated anymore in this callback.
     */
    on(hook: 'afterSegmentSpanEnd', callback: (immutableSegmentSpan: Readonly<Span>) => void): () => void;
    /**
     * Register a callback for when a span JSON is processed, to add some data to the span JSON.
     */
    on(hook: 'processSpan', callback: (streamedSpanJSON: StreamedSpanJSON) => void): () => void;
    /**
     * Register a callback for when a segment span JSON is processed, to add some data to the segment span JSON.
     */
    on(hook: 'processSegmentSpan', callback: (streamedSpanJSON: StreamedSpanJSON) => void): () => void;
    /**
     * Register a callback for when an idle span is allowed to auto-finish.
     * @returns {() => void} A function that, when executed, removes the registered callback.
     */
    on(hook: 'idleSpanEnableAutoFinish', callback: (span: Span) => void): () => void;
    /**
     * Register a callback for transaction start and finish.
     * @returns {() => void} A function that, when executed, removes the registered callback.
     */
    on(hook: 'beforeEnvelope', callback: (envelope: Envelope) => void): () => void;
    /**
     * Register a callback that runs when stack frame metadata should be applied to an event.
     * @returns {() => void} A function that, when executed, removes the registered callback.
     */
    on(hook: 'applyFrameMetadata', callback: (event: Event) => void): () => void;
    /**
     * Register a callback for before sending an event.
     * This is called right before an event is sent and should not be used to mutate the event.
     * Receives an Event & EventHint as arguments.
     * @returns {() => void} A function that, when executed, removes the registered callback.
     */
    on(hook: 'beforeSendEvent', callback: (event: Event, hint?: EventHint | undefined) => void): () => void;
    /**
     * Register a callback for before sending a session or session aggregrates..
     * Receives the session/aggregate as second argument.
     * @returns {() => void} A function that, when executed, removes the registered callback.
     */
    on(hook: 'beforeSendSession', callback: (session: Session | SessionAggregates) => void): () => void;
    /**
     * Register a callback for preprocessing an event,
     * before it is passed to (global) event processors.
     * Receives an Event & EventHint as arguments.
     * @returns {() => void} A function that, when executed, removes the registered callback.
     */
    on(hook: 'preprocessEvent', callback: (event: Event, hint?: EventHint | undefined) => void): () => void;
    /**
     * Register a callback for postprocessing an event,
     * after it was passed to (global) event processors, before it is being sent.
     * Receives an Event & EventHint as arguments.
     * @returns {() => void} A function that, when executed, removes the registered callback.
     */
    on(hook: 'postprocessEvent', callback: (event: Event, hint?: EventHint | undefined) => void): () => void;
    /**
     * Register a callback for when an event has been sent.
     * @returns {() => void} A function that, when executed, removes the registered callback.
     */
    on(hook: 'afterSendEvent', callback: (event: Event, sendResponse: TransportMakeRequestResponse) => void): () => void;
    /**
     * Register a callback before a breadcrumb is added.
     * @returns {() => void} A function that, when executed, removes the registered callback.
     */
    on(hook: 'beforeAddBreadcrumb', callback: (breadcrumb: Breadcrumb, hint?: BreadcrumbHint) => void): () => void;
    /**
     * Register a callback when a DSC (Dynamic Sampling Context) is created.
     * @returns {() => void} A function that, when executed, removes the registered callback.
     */
    on(hook: 'createDsc', callback: (dsc: DynamicSamplingContext, rootSpan?: Span) => void): () => void;
    /**
     * Register a callback when a Feedback event has been prepared.
     * This should be used to mutate the event. The options argument can hint
     * about what kind of mutation it expects.
     * @returns {() => void} A function that, when executed, removes the registered callback.
     */
    on(hook: 'beforeSendFeedback', callback: (feedback: FeedbackEvent, options?: {
        includeReplay?: boolean;
    }) => void): () => void;
    /**
     * Register a callback when the feedback widget is opened in a user's browser
     */
    on(hook: 'openFeedbackWidget', callback: () => void): () => void;
    /**
     * A hook that is called when a replay session starts recording (either session or buffer mode).
     * @returns {() => void} A function that, when executed, removes the registered callback.
     */
    on(hook: 'replayStart', callback: (event: ReplayStartEvent) => void): () => void;
    /**
     * A hook that is called when a replay session stops recording, either manually or due to an
     * internal condition such as `maxReplayDuration` expiry, send failure, or mutation limit.
     * @returns {() => void} A function that, when executed, removes the registered callback.
     */
    on(hook: 'replayEnd', callback: (event: ReplayEndEvent) => void): () => void;
    /**
     * A hook for the browser tracing integrations to trigger a span start for a page load.
     * @returns {() => void} A function that, when executed, removes the registered callback.
     */
    on(hook: 'startPageLoadSpan', callback: (options: StartSpanOptions, traceOptions?: {
        sentryTrace?: string | undefined;
        baggage?: string | undefined;
    }) => void): () => void;
    /**
     * A hook for the browser tracing integrations to trigger the end of a page load span.
     * @returns {() => void} A function that, when executed, removes the registered callback.
     */
    on(hook: 'endPageloadSpan', callback: () => void): () => void;
    /**
     * A hook for the browser tracing integrations to trigger after the pageload span was started.
     * @returns {() => void} A function that, when executed, removes the registered callback.
     */
    on(hook: 'afterStartPageLoadSpan', callback: (span: Span) => void): () => void;
    /**
     * A hook for triggering right before a navigation span is started.
     * @returns {() => void} A function that, when executed, removes the registered callback.
     */
    on(hook: 'beforeStartNavigationSpan', callback: (options: StartSpanOptions, navigationOptions?: {
        isRedirect?: boolean;
    }) => void): () => void;
    /**
     * A hook for browser tracing integrations to trigger a span for a navigation.
     * @returns {() => void} A function that, when executed, removes the registered callback.
     */
    on(hook: 'startNavigationSpan', callback: (options: StartSpanOptions, navigationOptions?: {
        isRedirect?: boolean;
    }) => void): () => void;
    /**
     * A hook for GraphQL client integration to enhance a span with request data.
     * @returns A function that, when executed, removes the registered callback.
     */
    on(hook: 'beforeOutgoingRequestSpan', callback: (span: Span, hint: XhrBreadcrumbHint | FetchBreadcrumbHint) => void): () => void;
    /**
     * A hook for GraphQL client integration to enhance a breadcrumb with request data.
     * @returns A function that, when executed, removes the registered callback.
     */
    on(hook: 'beforeOutgoingRequestBreadcrumb', callback: (breadcrumb: Breadcrumb, hint: XhrBreadcrumbHint | FetchBreadcrumbHint) => void): () => void;
    /**
     * A hook that is called when the client is flushing
     * @returns {() => void} A function that, when executed, removes the registered callback.
     */
    on(hook: 'flush', callback: () => void): () => void;
    /**
     * A hook that is called when the client is closing
     * @returns {() => void} A function that, when executed, removes the registered callback.
     */
    on(hook: 'close', callback: () => void): () => void;
    /**
     * A hook that is called before a log is captured. This hooks runs before `beforeSendLog` is fired.
     *
     * @returns {() => void} A function that, when executed, removes the registered callback.
     */
    on(hook: 'beforeCaptureLog', callback: (log: Log) => void): () => void;
    /**
     * A hook that is called after a log is captured
     *
     * @returns {() => void} A function that, when executed, removes the registered callback.
     */
    on(hook: 'afterCaptureLog', callback: (log: Log) => void): () => void;
    /**
     * A hook that is called when the client is flushing logs
     *
     * @returns {() => void} A function that, when executed, removes the registered callback.
     */
    on(hook: 'flushLogs', callback: () => void): () => void;
    /**
     * A hook that is called after capturing a metric. This hooks runs after `beforeSendMetric` is fired.
     *
     * @returns {() => void} A function that, when executed, removes the registered callback.
     */
    on(hook: 'afterCaptureMetric', callback: (metric: Metric) => void): () => void;
    /**
     * A hook that is called when the client is flushing metrics
     *
     * @returns {() => void} A function that, when executed, removes the registered callback.
     */
    on(hook: 'flushMetrics', callback: () => void): () => void;
    /**
     * A hook that is called when a metric is processed before it is captured and before the `beforeSendMetric` callback is fired.
     *
     * @returns {() => void} A function that, when executed, removes the registered callback.
     */
    on(hook: 'processMetric', callback: (metric: Metric) => void): () => void;
    /**
     * A hook that is called when a http server request is started.
     * This hook is called after request isolation, but before the request is processed.
     *
     * @returns {() => void} A function that, when executed, removes the registered callback.
     */
    on(hook: 'httpServerRequest', callback: (request: unknown, response: unknown, normalizedRequest: RequestEventData) => void): () => void;
    /**
     * A hook that is called when the UI Profiler should start profiling.
     *
     * This hook is called when running `Sentry.uiProfiler.startProfiler()`.
     *
     * @returns {() => void} A function that, when executed, removes the registered callback.
     */
    on(hook: 'startUIProfiler', callback: () => void): () => void;
    /**
     * A hook that is called when the UI Profiler should stop profiling.
     *
     * This hook is called when running `Sentry.uiProfiler.stopProfiler()`.
     *
     * @returns {() => void} A function that, when executed, removes the registered callback.
     */
    on(hook: 'stopUIProfiler', callback: () => void): () => void;
    /** Fire a hook whenever a span starts. */
    emit(hook: 'spanStart', span: Span): void;
    /** A hook that is called every time before a span is sampled. */
    emit(hook: 'beforeSampling', samplingData: {
        spanAttributes: SpanAttributes;
        spanName: string;
        parentSampled?: boolean;
        parentSampleRate?: number;
        parentContext?: SpanContextData;
    }, samplingDecision: {
        decision: boolean;
    }): void;
    /** Fire a hook whenever a span ends. */
    emit(hook: 'spanEnd', span: Span): void;
    /**
     * Fire a hook event after a span ends and the `spanEnd` hook has run.
     */
    emit(hook: 'afterSpanEnd', immutableSpan: Readonly<Span>): void;
    /**
     * Fire a hook event after a segment span ends and the `spanEnd` hook has run.
     */
    emit(hook: 'afterSegmentSpanEnd', immutableSegmentSpan: Readonly<Span>): void;
    /**
     * Fire a hook event when a span JSON is processed, to add some data to the span JSON.
     */
    emit(hook: 'processSpan', streamedSpanJSON: StreamedSpanJSON): void;
    /**
     * Fire a hook event for when a segment span JSON is processed, to add some data to the segment span JSON.
     */
    emit(hook: 'processSegmentSpan', streamedSpanJSON: StreamedSpanJSON): void;
    /**
     * Fire a hook indicating that an idle span is allowed to auto finish.
     */
    emit(hook: 'idleSpanEnableAutoFinish', span: Span): void;
    /**
     * Fire a hook event for envelope creation and sending. Expects to be given an envelope as the
     * second argument.
     */
    emit(hook: 'beforeEnvelope', envelope: Envelope): void;
    /**
     * Fire a hook indicating that stack frame metadata should be applied to the event passed to the hook.
     */
    emit(hook: 'applyFrameMetadata', event: Event): void;
    /**
     * Fire a hook event before sending an event.
     * This is called right before an event is sent and should not be used to mutate the event.
     * Expects to be given an Event & EventHint as the second/third argument.
     */
    emit(hook: 'beforeSendEvent', event: Event, hint?: EventHint): void;
    /**
     * Fire a hook event before sending a session/aggregates.
     * Expects to be given the prepared session/aggregates as second argument.
     */
    emit(hook: 'beforeSendSession', session: Session | SessionAggregates): void;
    /**
     * Fire a hook event to process events before they are passed to (global) event processors.
     * Expects to be given an Event & EventHint as the second/third argument.
     */
    emit(hook: 'preprocessEvent', event: Event, hint?: EventHint): void;
    /**
     * Fire a hook event to process a user on an event before it is sent to Sentry, after all other processors have run.
     * Expects to be given an Event & EventHint as the second/third argument.
     */
    emit(hook: 'postprocessEvent', event: Event, hint?: EventHint): void;
    /**
     * Fire a hook event after sending an event. Expects to be given an Event as the
     * second argument.
     */
    emit(hook: 'afterSendEvent', event: Event, sendResponse: TransportMakeRequestResponse): void;
    /**
     * Fire a hook for when a breadcrumb is added. Expects the breadcrumb as second argument.
     */
    emit(hook: 'beforeAddBreadcrumb', breadcrumb: Breadcrumb, hint?: BreadcrumbHint): void;
    /**
     * Fire a hook for when a DSC (Dynamic Sampling Context) is created. Expects the DSC as second argument.
     */
    emit(hook: 'createDsc', dsc: DynamicSamplingContext, rootSpan?: Span): void;
    /**
     * Fire a hook event for after preparing a feedback event. Events to be given
     * a feedback event as the second argument, and an optional options object as
     * third argument.
     */
    emit(hook: 'beforeSendFeedback', feedback: FeedbackEvent, options?: {
        includeReplay?: boolean;
    }): void;
    /**
     * Fire a hook event for when the feedback widget is opened in a user's browser
     */
    emit(hook: 'openFeedbackWidget'): void;
    /**
     * Fire a hook event when a replay session starts recording.
     */
    emit(hook: 'replayStart', event: ReplayStartEvent): void;
    /**
     * Fire a hook event when a replay session stops recording.
     */
    emit(hook: 'replayEnd', event: ReplayEndEvent): void;
    /**
     * Emit a hook event for browser tracing integrations to trigger a span start for a page load.
     */
    emit(hook: 'startPageLoadSpan', options: StartSpanOptions, traceOptions?: {
        sentryTrace?: string | undefined;
        baggage?: string | undefined;
    }): void;
    /**
     * Emit a hook event for browser tracing integrations to trigger the end of a page load span.
     */
    emit(hook: 'endPageloadSpan'): void;
    /**
     * Emit a hook event for browser tracing integrations to trigger aafter the pageload span was started.
     */
    emit(hook: 'afterStartPageLoadSpan', span: Span): void;
    /**
     * Emit a hook event for triggering right before a navigation span is started.
     */
    emit(hook: 'beforeStartNavigationSpan', options: StartSpanOptions, navigationOptions?: {
        isRedirect?: boolean;
    }): void;
    /**
     * Emit a hook event for browser tracing integrations to trigger a span for a navigation.
     */
    emit(hook: 'startNavigationSpan', options: StartSpanOptions, navigationOptions?: {
        isRedirect?: boolean;
    }): void;
    /**
     * Emit a hook event for GraphQL client integration to enhance a span with request data.
     */
    emit(hook: 'beforeOutgoingRequestSpan', span: Span, hint: XhrBreadcrumbHint | FetchBreadcrumbHint): void;
    /**
     * Emit a hook event for GraphQL client integration to enhance a breadcrumb with request data.
     */
    emit(hook: 'beforeOutgoingRequestBreadcrumb', breadcrumb: Breadcrumb, hint: XhrBreadcrumbHint | FetchBreadcrumbHint): void;
    /**
     * Emit a hook event for client flush
     */
    emit(hook: 'flush'): void;
    /**
     * Emit a hook event for client close
     */
    emit(hook: 'close'): void;
    /**
     * Emit a hook event for client before capturing a log. This hooks runs before `beforeSendLog` is fired.
     */
    emit(hook: 'beforeCaptureLog', log: Log): void;
    /**
     * Emit a hook event for client after capturing a log.
     */
    emit(hook: 'afterCaptureLog', log: Log): void;
    /**
     * Emit a hook event for client flush logs
     */
    emit(hook: 'flushLogs'): void;
    /**
     * Emit a hook event for client after capturing a metric.
     */
    emit(hook: 'afterCaptureMetric', metric: Metric): void;
    /**
     * Emit a hook event for client flush metrics
     */
    emit(hook: 'flushMetrics'): void;
    /**
     *
     * Emit a hook event for client to process a metric before it is captured.
     * This hook is called before the `beforeSendMetric` callback is fired.
     */
    emit(hook: 'processMetric', metric: Metric): void;
    /**
     * Emit a hook event for client when a http server request is started.
     * This hook is called after request isolation, but before the request is processed.
     */
    emit(hook: 'httpServerRequest', request: unknown, response: unknown, normalizedRequest: RequestEventData): void;
    /**
     * Emit a hook event for starting the UI Profiler.
     */
    emit(hook: 'startUIProfiler'): void;
    /**
     * Emit a hook event for stopping the UI Profiler.
     */
    emit(hook: 'stopUIProfiler'): void;
    /**
     * Send an envelope to Sentry.
     */
    sendEnvelope(envelope: Envelope): PromiseLike<TransportMakeRequestResponse>;
    /**
     * Register a cleanup function to be called when the client is disposed.
     * This is useful for integrations that need to clean up global state.
     *
     * NOTE: This is a no-op in the base `Client` class. Subclasses like `ServerRuntimeClient`
     * override this method to actually register and execute cleanup callbacks.
     */
    registerCleanup(callback: () => void): void;
    /**
     * Disposes of the client and releases all resources.
     *
     * Subclasses should override this method to clean up their own resources, including invoking
     * any callbacks registered via {@link Client.registerCleanup}. The base implementation is a
     * no-op and does NOT execute registered cleanup callbacks.
     *
     * After calling dispose(), the client should not be used anymore.
     */
    dispose(): void;
    /** Setup integrations for this client. */
    protected _setupIntegrations(): void;
    /** Updates existing session based on the provided event */
    protected _updateSessionFromEvent(session: Session, event: Event): void;
    /**
     * Determine if the client is finished processing. Returns a promise because it will wait `timeout` ms before saying
     * "no" (resolving to `false`) in order to give the client a chance to potentially finish first.
     *
     * @param timeout The time, in ms, after which to resolve to `false` if the client is still busy. Passing `0` (or not
     * passing anything) will make the promise wait as long as it takes for processing to finish before resolving to
     * `true`.
     * @returns A promise which will resolve to `true` if processing is already done or finishes before the timeout, and
     * `false` otherwise
     */
    protected _isClientDoneProcessing(timeout?: number): Promise<boolean>;
    /** Determines whether this SDK is enabled and a transport is present. */
    protected _isEnabled(): boolean;
    /**
     * Adds common information to events.
     *
     * The information includes release and environment from `options`,
     * breadcrumbs and context (extra, tags and user) from the scope.
     *
     * Information that is already present in the event is never overwritten. For
     * nested objects, such as the context, keys are merged.
     *
     * @param event The original event.
     * @param hint May contain additional information about the original exception.
     * @param currentScope A scope containing event metadata.
     * @returns A new event with more information.
     */
    protected _prepareEvent(event: Event, hint: EventHint, currentScope: Scope, isolationScope: Scope): PromiseLike<Event | null>;
    /**
     * Processes the event and logs an error in case of rejection
     * @param event
     * @param hint
     * @param scope
     */
    protected _captureEvent(event: Event, hint?: EventHint, currentScope?: Scope, isolationScope?: Scope): PromiseLike<string | undefined>;
    /**
     * Processes an event (either error or message) and sends it to Sentry.
     *
     * This also adds breadcrumbs and context information to the event. However,
     * platform specific meta data (such as the User's IP address) must be added
     * by the SDK implementor.
     *
     *
     * @param event The event to send to Sentry.
     * @param hint May contain additional information about the original exception.
     * @param currentScope A scope containing event metadata.
     * @returns A SyncPromise that resolves with the event or rejects in case event was/will not be send.
     */
    protected _processEvent(event: Event, hint: EventHint, currentScope: Scope, isolationScope: Scope): PromiseLike<Event>;
    /**
     * Occupies the client with processing and event
     */
    protected _process<T>(taskProducer: () => PromiseLike<T>, dataCategory: DataCategory): void;
    /**
     * Clears outcomes on this client and returns them.
     */
    protected _clearOutcomes(): Outcome[];
    /**
     * Sends client reports as an envelope.
     */
    protected _flushOutcomes(): void;
    /**
     * Creates an {@link Event} from all inputs to `captureException` and non-primitive inputs to `captureMessage`.
     */
    abstract eventFromException(_exception: unknown, _hint?: EventHint): PromiseLike<Event>;
    /**
     * Creates an {@link Event} from primitive inputs to `captureMessage`.
     */
    abstract eventFromMessage(_message: ParameterizedString, _level?: SeverityLevel, _hint?: EventHint): PromiseLike<Event>;
}
//# sourceMappingURL=client.d.ts.map