Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const api = require('./api.js');
const constants = require('./constants.js');
const currentScopes = require('./currentScopes.js');
const debugBuild = require('./debug-build.js');
const envelope = require('./envelope.js');
const integration = require('./integration.js');
const internal = require('./logs/internal.js');
const internal$1 = require('./metrics/internal.js');
const session = require('./session.js');
const dynamicSamplingContext = require('./tracing/dynamicSamplingContext.js');
const beforeSendSpan = require('./tracing/spans/beforeSendSpan.js');
const extractGenAiSpans = require('./tracing/spans/extractGenAiSpans.js');
const base = require('./transports/base.js');
const clientreport = require('./utils/clientreport.js');
const debugLogger = require('./utils/debug-logger.js');
const dsn = require('./utils/dsn.js');
const envelope$1 = require('./utils/envelope.js');
const eventUtils = require('./utils/eventUtils.js');
const is = require('./utils/is.js');
const merge = require('./utils/merge.js');
const misc = require('./utils/misc.js');
const parseSampleRate = require('./utils/parseSampleRate.js');
const prepareEvent = require('./utils/prepareEvent.js');
const promisebuffer = require('./utils/promisebuffer.js');
const randomSafeContext = require('./utils/randomSafeContext.js');
const shouldIgnoreSpan = require('./utils/should-ignore-span.js');
const spanUtils = require('./utils/spanUtils.js');
const syncpromise = require('./utils/syncpromise.js');
const timer = require('./utils/timer.js');
const transactionEvent = require('./utils/transactionEvent.js');
const resolveDataCollectionOptions = require('./utils/data-collection/resolveDataCollectionOptions.js');

const ALREADY_SEEN_ERROR = "Not capturing exception because it's already been captured.";
const MISSING_RELEASE_FOR_SESSION_ERROR = "Discarded session because of missing or non-string release";
const INTERNAL_ERROR_SYMBOL = /* @__PURE__ */ Symbol.for("SentryInternalError");
const DO_NOT_SEND_EVENT_SYMBOL = /* @__PURE__ */ Symbol.for("SentryDoNotSendEventError");
const DEFAULT_FLUSH_INTERVAL = 5e3;
function _makeInternalError(message) {
  return {
    message,
    [INTERNAL_ERROR_SYMBOL]: true
  };
}
function _makeDoNotSendEventError(message) {
  return {
    message,
    [DO_NOT_SEND_EVENT_SYMBOL]: true
  };
}
function _isInternalError(error) {
  return !!error && typeof error === "object" && INTERNAL_ERROR_SYMBOL in error;
}
function _isDoNotSendEventError(error) {
  return !!error && typeof error === "object" && DO_NOT_SEND_EVENT_SYMBOL in error;
}
function setupWeightBasedFlushing(client, afterCaptureHook, flushHook, estimateSizeFn, flushFn) {
  let weight = 0;
  let flushTimeout;
  let isTimerActive = false;
  client.on(flushHook, () => {
    weight = 0;
    clearTimeout(flushTimeout);
    isTimerActive = false;
  });
  client.on(afterCaptureHook, (item) => {
    weight += estimateSizeFn(item);
    if (weight >= 8e5) {
      flushFn(client);
    } else if (!isTimerActive) {
      const flushInterval = client.getOptions()._flushInterval ?? DEFAULT_FLUSH_INTERVAL;
      if (flushInterval > 0) {
        isTimerActive = true;
        flushTimeout = timer.safeUnref(
          setTimeout(() => {
            flushFn(client);
          }, flushInterval)
        );
      }
    }
  });
  client.on("flush", () => {
    flushFn(client);
  });
}
class Client {
  /**
   * Initializes this client instance.
   *
   * @param options Options for the client.
   */
  constructor(options) {
    this._options = options;
    this._integrations = {};
    this._numProcessing = 0;
    this._outcomes = {};
    this._hooks = {};
    this._eventProcessors = [];
    this._promiseBuffer = promisebuffer.makePromiseBuffer(options.transportOptions?.bufferSize ?? base.DEFAULT_TRANSPORT_BUFFER_SIZE);
    this._dataCollection = resolveDataCollectionOptions.resolveDataCollectionOptions(options);
    if (options.dsn) {
      this._dsn = dsn.makeDsn(options.dsn);
    } else {
      debugBuild.DEBUG_BUILD && debugLogger.debug.warn("No DSN provided, client will not send events.");
    }
    if (this._dsn) {
      const url = api.getEnvelopeEndpointWithUrlEncodedAuth(
        this._dsn,
        options.tunnel,
        options._metadata ? options._metadata.sdk : void 0
      );
      this._transport = options.transport({
        tunnel: this._options.tunnel,
        recordDroppedEvent: this.recordDroppedEvent.bind(this),
        ...options.transportOptions,
        url
      });
    }
    this._options.enableLogs = this._options.enableLogs ?? this._options._experiments?.enableLogs;
    if (this._options.enableLogs) {
      setupWeightBasedFlushing(this, "afterCaptureLog", "flushLogs", estimateLogSizeInBytes, internal._INTERNAL_flushLogsBuffer);
    }
    const enableMetrics = this._options.enableMetrics ?? this._options._experiments?.enableMetrics ?? true;
    if (enableMetrics) {
      setupWeightBasedFlushing(
        this,
        "afterCaptureMetric",
        "flushMetrics",
        estimateMetricSizeInBytes,
        internal$1._INTERNAL_flushMetricsBuffer
      );
    }
  }
  /**
   * Captures an exception event and sends it to Sentry.
   *
   * Unlike `captureException` exported from every SDK, this method requires that you pass it the current scope.
   */
  captureException(exception, hint, scope) {
    const eventId = misc.uuid4();
    if (misc.checkOrSetAlreadyCaught(exception)) {
      debugBuild.DEBUG_BUILD && debugLogger.debug.log(ALREADY_SEEN_ERROR);
      return eventId;
    }
    const hintWithEventId = {
      event_id: eventId,
      ...hint
    };
    this._process(
      () => this.eventFromException(exception, hintWithEventId).then((event) => this._captureEvent(event, hintWithEventId, scope)).then((res) => res),
      "error"
    );
    return hintWithEventId.event_id;
  }
  /**
   * Captures a message event and sends it to Sentry.
   *
   * Unlike `captureMessage` exported from every SDK, this method requires that you pass it the current scope.
   */
  captureMessage(message, level, hint, currentScope) {
    const hintWithEventId = {
      event_id: misc.uuid4(),
      ...hint
    };
    const eventMessage = is.isParameterizedString(message) ? message : String(message);
    const isMessage = is.isPrimitive(message);
    const promisedEvent = isMessage ? this.eventFromMessage(eventMessage, level, hintWithEventId) : this.eventFromException(message, hintWithEventId);
    this._process(
      () => promisedEvent.then((event) => this._captureEvent(event, hintWithEventId, currentScope)),
      isMessage ? "unknown" : "error"
    );
    return hintWithEventId.event_id;
  }
  /**
   * Captures a manually created event and sends it to Sentry.
   *
   * Unlike `captureEvent` exported from every SDK, this method requires that you pass it the current scope.
   */
  captureEvent(event, hint, currentScope) {
    const eventId = misc.uuid4();
    if (hint?.originalException && misc.checkOrSetAlreadyCaught(hint.originalException)) {
      debugBuild.DEBUG_BUILD && debugLogger.debug.log(ALREADY_SEEN_ERROR);
      return eventId;
    }
    const hintWithEventId = {
      event_id: eventId,
      ...hint
    };
    const sdkProcessingMetadata = event.sdkProcessingMetadata || {};
    const capturedSpanScope = sdkProcessingMetadata.capturedSpanScope;
    const capturedSpanIsolationScope = sdkProcessingMetadata.capturedSpanIsolationScope;
    const dataCategory = getDataCategoryByType(event.type);
    this._process(
      () => this._captureEvent(event, hintWithEventId, capturedSpanScope || currentScope, capturedSpanIsolationScope),
      dataCategory
    );
    return hintWithEventId.event_id;
  }
  /**
   * Captures a session.
   */
  captureSession(session$1) {
    this.sendSession(session$1);
    session.updateSession(session$1, { init: false });
  }
  /**
   * Get the current Dsn.
   */
  getDsn() {
    return this._dsn;
  }
  /**
   * Get the current options.
   */
  getOptions() {
    return this._options;
  }
  /**
   * Get the resolved data collection configuration.
   */
  getDataCollectionOptions() {
    return this._dataCollection;
  }
  /**
   * Get the SDK metadata.
   * @see SdkMetadata
   */
  getSdkMetadata() {
    return this._options._metadata;
  }
  /**
   * Returns the transport that is used by the client.
   * Please note that the transport gets lazy initialized so it will only be there once the first event has been sent.
   */
  getTransport() {
    return this._transport;
  }
  /**
   * Wait for all events to be sent or the timeout to expire, whichever comes first.
   *
   * @param timeout Maximum time in ms the client should wait for events to be flushed. Omitting this parameter will
   *   cause the client to wait until all events are sent before resolving the promise.
   * @returns A promise that will resolve with `true` if all events are sent before the timeout, or `false` if there are
   * still events in the queue when the timeout is reached.
   */
  // @ts-expect-error - PromiseLike is a subset of Promise
  async flush(timeout) {
    const transport = this._transport;
    this.emit("flush");
    if (!transport) {
      return true;
    }
    const clientFinished = await this._isClientDoneProcessing(timeout);
    const transportFlushed = await transport.flush(timeout);
    return clientFinished && transportFlushed;
  }
  /**
   * Flush the event queue and set the client to `enabled = false`. See {@link Client.flush}.
   *
   * @param {number} timeout Maximum time in ms the client should wait before shutting down. Omitting this parameter will cause
   *   the client to wait until all events are sent before disabling itself.
   * @returns {Promise<boolean>} A promise which resolves to `true` if the flush completes successfully before the timeout, or `false` if
   * it doesn't.
   */
  // @ts-expect-error - PromiseLike is a subset of Promise
  async close(timeout) {
    internal._INTERNAL_flushLogsBuffer(this);
    const result = await this.flush(timeout);
    this.getOptions().enabled = false;
    this.emit("close");
    return result;
  }
  /**
   * Get all installed event processors.
   */
  getEventProcessors() {
    return this._eventProcessors;
  }
  /**
   * Adds an event processor that applies to any event processed by this client.
   */
  addEventProcessor(eventProcessor) {
    this._eventProcessors.push(eventProcessor);
  }
  /**
   * Initialize this client.
   * Call this after the client was set on a scope.
   */
  init() {
    if (this._isEnabled() || // Force integrations to be setup even if no DSN was set when we have
    // Spotlight enabled. This is particularly important for browser as we
    // don't support the `spotlight` option there and rely on the users
    // adding the `spotlightBrowserIntegration()` to their integrations which
    // wouldn't get initialized with the check below when there's no DSN set.
    this._options.integrations.some(({ name }) => name.startsWith("Spotlight"))) {
      this._setupIntegrations();
    }
  }
  /**
   * Gets an installed integration by its name.
   *
   * @returns {Integration|undefined} The installed integration or `undefined` if no integration with that `name` was installed.
   */
  getIntegrationByName(integrationName) {
    return this._integrations[integrationName];
  }
  /**
   * Returns the names of all installed integrations.
   */
  getIntegrationNames() {
    return Object.keys(this._integrations);
  }
  /**
   * Add an integration to the client.
   * This can be used to e.g. lazy load integrations.
   * In most cases, this should not be necessary,
   * and you're better off just passing the integrations via `integrations: []` at initialization time.
   * However, if you find the need to conditionally load & add an integration, you can use `addIntegration` to do so.
   */
  addIntegration(integration$1) {
    const isAlreadyInstalled = this._integrations[integration$1.name];
    if (!isAlreadyInstalled && integration$1.beforeSetup) {
      integration$1.beforeSetup(this);
    }
    integration.setupIntegration(this, integration$1, this._integrations);
    if (!isAlreadyInstalled) {
      integration.afterSetupIntegrations(this, [integration$1]);
    }
  }
  /**
   * Send a fully prepared event to Sentry.
   */
  sendEvent(event, hint = {}) {
    this.emit("beforeSendEvent", event, hint);
    const genAiSpanItem = extractGenAiSpans.extractGenAiSpansFromEvent(event, this);
    let env = envelope.createEventEnvelope(event, this._dsn, this._options._metadata, this._options.tunnel);
    for (const attachment of hint.attachments || []) {
      env = envelope$1.addItemToEnvelope(env, envelope$1.createAttachmentEnvelopeItem(attachment));
    }
    if (genAiSpanItem) {
      env = envelope$1.addItemToEnvelope(env, genAiSpanItem);
    }
    this.sendEnvelope(env).then((sendResponse) => this.emit("afterSendEvent", event, sendResponse));
  }
  /**
   * Send a session or session aggregrates to Sentry.
   */
  sendSession(session) {
    const { release: clientReleaseOption, environment: clientEnvironmentOption = constants.DEFAULT_ENVIRONMENT } = this._options;
    if ("aggregates" in session) {
      const sessionAttrs = session.attrs || {};
      if (!sessionAttrs.release && !clientReleaseOption) {
        debugBuild.DEBUG_BUILD && debugLogger.debug.warn(MISSING_RELEASE_FOR_SESSION_ERROR);
        return;
      }
      sessionAttrs.release = sessionAttrs.release || clientReleaseOption;
      sessionAttrs.environment = sessionAttrs.environment || clientEnvironmentOption;
      session.attrs = sessionAttrs;
    } else {
      if (!session.release && !clientReleaseOption) {
        debugBuild.DEBUG_BUILD && debugLogger.debug.warn(MISSING_RELEASE_FOR_SESSION_ERROR);
        return;
      }
      session.release = session.release || clientReleaseOption;
      session.environment = session.environment || clientEnvironmentOption;
    }
    this.emit("beforeSendSession", session);
    const env = envelope.createSessionEnvelope(session, this._dsn, this._options._metadata, this._options.tunnel);
    this.sendEnvelope(env);
  }
  /**
   * Record on the client that an event got dropped (ie, an event that will not be sent to Sentry).
   */
  recordDroppedEvent(reason, category, count = 1) {
    if (this._options.sendClientReports) {
      const key = `${reason}:${category}`;
      debugBuild.DEBUG_BUILD && debugLogger.debug.log(`Recording outcome: "${key}"${count > 1 ? ` (${count} times)` : ""}`);
      this._outcomes[key] = (this._outcomes[key] || 0) + count;
    }
  }
  /**
   * Register a hook on this client.
   */
  on(hook, callback) {
    const hookCallbacks = this._hooks[hook] = this._hooks[hook] || /* @__PURE__ */ new Set();
    const uniqueCallback = (...args) => callback(...args);
    hookCallbacks.add(uniqueCallback);
    return () => {
      hookCallbacks.delete(uniqueCallback);
    };
  }
  /**
   * Emit a hook that was previously registered via `on()`.
   */
  emit(hook, ...rest) {
    const callbacks = this._hooks[hook];
    if (callbacks) {
      callbacks.forEach((callback) => callback(...rest));
    }
  }
  /**
   * Send an envelope to Sentry.
   */
  // @ts-expect-error - PromiseLike is a subset of Promise
  async sendEnvelope(envelope) {
    this.emit("beforeEnvelope", envelope);
    if (this._isEnabled() && this._transport) {
      try {
        return await this._transport.send(envelope);
      } catch (reason) {
        debugBuild.DEBUG_BUILD && debugLogger.debug.error("Error while sending envelope:", reason);
        return {};
      }
    }
    debugBuild.DEBUG_BUILD && debugLogger.debug.error("Transport disabled");
    return {};
  }
  /**
   * Register a cleanup function to be called when the client is disposed.
   * This is useful for integrations that need to clean up global state.
   *
   * NOTE: This is a no-op in the base `Client` class. Subclasses like `ServerRuntimeClient`
   * override this method to actually register and execute cleanup callbacks.
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  registerCleanup(callback) {
  }
  /**
   * Disposes of the client and releases all resources.
   *
   * Subclasses should override this method to clean up their own resources, including invoking
   * any callbacks registered via {@link Client.registerCleanup}. The base implementation is a
   * no-op and does NOT execute registered cleanup callbacks.
   *
   * After calling dispose(), the client should not be used anymore.
   */
  dispose() {
  }
  /* eslint-enable @typescript-eslint/unified-signatures */
  /** Setup integrations for this client. */
  _setupIntegrations() {
    const { integrations } = this._options;
    this._integrations = integration.setupIntegrations(this, integrations);
    integration.afterSetupIntegrations(this, integrations);
  }
  /** Updates existing session based on the provided event */
  _updateSessionFromEvent(session$1, event) {
    let crashed = event.level === "fatal";
    let errored = false;
    const exceptions = event.exception?.values;
    if (exceptions) {
      errored = true;
      crashed = false;
      for (const ex of exceptions) {
        if (ex.mechanism?.handled === false) {
          crashed = true;
          break;
        }
      }
    }
    const sessionNonTerminal = session$1.status === "ok";
    const shouldUpdateAndSend = sessionNonTerminal && session$1.errors === 0 || sessionNonTerminal && crashed;
    if (shouldUpdateAndSend) {
      session.updateSession(session$1, {
        ...crashed && { status: "crashed" },
        errors: session$1.errors || Number(errored || crashed)
      });
      this.captureSession(session$1);
    }
  }
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
  async _isClientDoneProcessing(timeout) {
    let ticked = 0;
    while (!timeout || ticked < timeout) {
      await new Promise((resolve) => setTimeout(resolve, 1));
      if (!this._numProcessing) {
        return true;
      }
      ticked++;
    }
    return false;
  }
  /** Determines whether this SDK is enabled and a transport is present. */
  _isEnabled() {
    return this.getOptions().enabled !== false && this._transport !== void 0;
  }
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
  _prepareEvent(event, hint, currentScope, isolationScope) {
    const options = this.getOptions();
    const integrations = this.getIntegrationNames();
    if (!hint.integrations && integrations.length) {
      hint.integrations = integrations;
    }
    this.emit("preprocessEvent", event, hint);
    if (!event.type) {
      isolationScope.setLastEventId(event.event_id || hint.event_id);
    }
    return prepareEvent.prepareEvent(options, event, hint, currentScope, this, isolationScope).then((evt) => {
      if (evt === null) {
        return evt;
      }
      this.emit("postprocessEvent", evt, hint);
      evt.contexts = {
        trace: { ...evt.contexts?.trace, ...currentScopes.getTraceContextFromScope(currentScope) },
        ...evt.contexts
      };
      const dynamicSamplingContext$1 = dynamicSamplingContext.getDynamicSamplingContextFromScope(this, currentScope);
      evt.sdkProcessingMetadata = {
        dynamicSamplingContext: dynamicSamplingContext$1,
        ...evt.sdkProcessingMetadata
      };
      return evt;
    });
  }
  /**
   * Processes the event and logs an error in case of rejection
   * @param event
   * @param hint
   * @param scope
   */
  _captureEvent(event, hint = {}, currentScope = currentScopes.getCurrentScope(), isolationScope = currentScopes.getIsolationScope()) {
    if (debugBuild.DEBUG_BUILD && isErrorEvent(event)) {
      debugLogger.debug.log(`Captured error event \`${eventUtils.getPossibleEventMessages(event)[0] || "<unknown>"}\``);
    }
    return this._processEvent(event, hint, currentScope, isolationScope).then(
      (finalEvent) => {
        return finalEvent.event_id;
      },
      (reason) => {
        if (debugBuild.DEBUG_BUILD) {
          if (_isDoNotSendEventError(reason)) {
            debugLogger.debug.log(reason.message);
          } else if (_isInternalError(reason)) {
            debugLogger.debug.warn(reason.message);
          } else {
            debugLogger.debug.warn(reason);
          }
        }
        return void 0;
      }
    );
  }
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
  _processEvent(event, hint, currentScope, isolationScope) {
    const options = this.getOptions();
    const { sampleRate } = options;
    const isTransaction = isTransactionEvent(event);
    const isError = isErrorEvent(event);
    const eventType = event.type || "error";
    const beforeSendLabel = `before send for type \`${eventType}\``;
    const parsedSampleRate = typeof sampleRate === "undefined" ? void 0 : parseSampleRate.parseSampleRate(sampleRate);
    if (isError && typeof parsedSampleRate === "number" && randomSafeContext.safeMathRandom() > parsedSampleRate) {
      this.recordDroppedEvent("sample_rate", "error");
      return syncpromise.rejectedSyncPromise(
        _makeDoNotSendEventError(
          `Discarding event because it's not included in the random sample (sampling rate = ${sampleRate})`
        )
      );
    }
    const dataCategory = getDataCategoryByType(event.type);
    return this._prepareEvent(event, hint, currentScope, isolationScope).then((prepared) => {
      if (prepared === null) {
        this.recordDroppedEvent("event_processor", dataCategory);
        throw _makeDoNotSendEventError("An event processor returned `null`, will not send event.");
      }
      const isInternalException = hint.data?.__sentry__ === true;
      if (isInternalException) {
        return prepared;
      }
      const result = processBeforeSend(this, options, prepared, hint);
      return _validateBeforeSendResult(result, beforeSendLabel);
    }).then((processedEvent) => {
      if (processedEvent === null) {
        this.recordDroppedEvent("before_send", dataCategory);
        if (isTransaction) {
          const spans = event.spans || [];
          const spanCount = 1 + spans.length;
          this.recordDroppedEvent("before_send", "span", spanCount);
        }
        throw _makeDoNotSendEventError(`${beforeSendLabel} returned \`null\`, will not send event.`);
      }
      const session = currentScope.getSession() || isolationScope.getSession();
      if (isError && session) {
        this._updateSessionFromEvent(session, processedEvent);
      }
      if (isTransaction) {
        const spanCountBefore = processedEvent.sdkProcessingMetadata?.spanCountBeforeProcessing || 0;
        const spanCountAfter = processedEvent.spans ? processedEvent.spans.length : 0;
        const droppedSpanCount = spanCountBefore - spanCountAfter;
        if (droppedSpanCount > 0) {
          this.recordDroppedEvent("before_send", "span", droppedSpanCount);
        }
      }
      const transactionInfo = processedEvent.transaction_info;
      if (isTransaction && transactionInfo && processedEvent.transaction !== event.transaction) {
        const source = "custom";
        processedEvent.transaction_info = {
          ...transactionInfo,
          source
        };
      }
      this.sendEvent(processedEvent, hint);
      return processedEvent;
    }).then(null, (reason) => {
      if (_isDoNotSendEventError(reason) || _isInternalError(reason)) {
        throw reason;
      }
      this.captureException(reason, {
        mechanism: {
          handled: false,
          type: "internal"
        },
        data: {
          __sentry__: true
        },
        originalException: reason
      });
      throw _makeInternalError(
        `Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${reason}`
      );
    });
  }
  /**
   * Occupies the client with processing and event
   */
  _process(taskProducer, dataCategory) {
    this._numProcessing++;
    void this._promiseBuffer.add(taskProducer).then(
      (value) => {
        this._numProcessing--;
        return value;
      },
      (reason) => {
        this._numProcessing--;
        if (reason === promisebuffer.SENTRY_BUFFER_FULL_ERROR) {
          this.recordDroppedEvent("queue_overflow", dataCategory);
        }
        return reason;
      }
    );
  }
  /**
   * Clears outcomes on this client and returns them.
   */
  _clearOutcomes() {
    const outcomes = this._outcomes;
    this._outcomes = {};
    return Object.entries(outcomes).map(([key, quantity]) => {
      const [reason, category] = key.split(":");
      return {
        reason,
        category,
        quantity
      };
    });
  }
  /**
   * Sends client reports as an envelope.
   */
  _flushOutcomes() {
    debugBuild.DEBUG_BUILD && debugLogger.debug.log("Flushing outcomes...");
    const outcomes = this._clearOutcomes();
    if (outcomes.length === 0) {
      debugBuild.DEBUG_BUILD && debugLogger.debug.log("No outcomes to send");
      return;
    }
    if (!this._dsn) {
      debugBuild.DEBUG_BUILD && debugLogger.debug.log("No dsn provided, will not send outcomes");
      return;
    }
    debugBuild.DEBUG_BUILD && debugLogger.debug.log("Sending outcomes:", outcomes);
    const envelope = clientreport.createClientReportEnvelope(outcomes, this._options.tunnel && dsn.dsnToString(this._dsn));
    this.sendEnvelope(envelope);
  }
}
function getDataCategoryByType(type) {
  return type === "replay_event" ? "replay" : type || "error";
}
function _validateBeforeSendResult(beforeSendResult, beforeSendLabel) {
  const invalidValueError = `${beforeSendLabel} must return \`null\` or a valid event.`;
  if (is.isThenable(beforeSendResult)) {
    return beforeSendResult.then(
      (event) => {
        if (!is.isPlainObject(event) && event !== null) {
          throw _makeInternalError(invalidValueError);
        }
        return event;
      },
      (e) => {
        throw _makeInternalError(`${beforeSendLabel} rejected with ${e}`);
      }
    );
  } else if (!is.isPlainObject(beforeSendResult) && beforeSendResult !== null) {
    throw _makeInternalError(invalidValueError);
  }
  return beforeSendResult;
}
function processBeforeSend(client, options, event, hint) {
  const { beforeSend, beforeSendTransaction, ignoreSpans } = options;
  const beforeSendSpan$1 = !beforeSendSpan.isStreamedBeforeSendSpanCallback(options.beforeSendSpan) && options.beforeSendSpan;
  let processedEvent = event;
  if (isErrorEvent(processedEvent) && beforeSend) {
    return beforeSend(processedEvent, hint);
  }
  if (isTransactionEvent(processedEvent)) {
    if (beforeSendSpan$1 || ignoreSpans) {
      const rootSpanJson = transactionEvent.convertTransactionEventToSpanJson(processedEvent);
      if (ignoreSpans?.length && shouldIgnoreSpan.shouldIgnoreSpan(
        { description: rootSpanJson.description, op: rootSpanJson.op, attributes: rootSpanJson.data },
        ignoreSpans
      )) {
        return null;
      }
      if (beforeSendSpan$1) {
        const processedRootSpanJson = beforeSendSpan$1(rootSpanJson);
        if (!processedRootSpanJson) {
          spanUtils.showSpanDropWarning();
        } else {
          processedEvent = merge.merge(event, transactionEvent.convertSpanJsonToTransactionEvent(processedRootSpanJson));
        }
      }
      if (processedEvent.spans) {
        const processedSpans = [];
        const initialSpans = processedEvent.spans;
        for (const span of initialSpans) {
          if (ignoreSpans?.length && shouldIgnoreSpan.shouldIgnoreSpan({ description: span.description, op: span.op, attributes: span.data }, ignoreSpans)) {
            shouldIgnoreSpan.reparentChildSpans(initialSpans, span);
            continue;
          }
          if (beforeSendSpan$1) {
            const processedSpan = beforeSendSpan$1(span);
            if (!processedSpan) {
              spanUtils.showSpanDropWarning();
              processedSpans.push(span);
            } else {
              processedSpans.push(processedSpan);
            }
          } else {
            processedSpans.push(span);
          }
        }
        const droppedSpans = processedEvent.spans.length - processedSpans.length;
        if (droppedSpans) {
          client.recordDroppedEvent("before_send", "span", droppedSpans);
        }
        processedEvent.spans = processedSpans;
      }
    }
    if (beforeSendTransaction) {
      if (processedEvent.spans) {
        const spanCountBefore = processedEvent.spans.length;
        processedEvent.sdkProcessingMetadata = {
          ...event.sdkProcessingMetadata,
          spanCountBeforeProcessing: spanCountBefore
        };
      }
      return beforeSendTransaction(processedEvent, hint);
    }
  }
  return processedEvent;
}
function isErrorEvent(event) {
  return event.type === void 0;
}
function isTransactionEvent(event) {
  return event.type === "transaction";
}
function estimateMetricSizeInBytes(metric) {
  let weight = 0;
  if (metric.name) {
    weight += metric.name.length * 2;
  }
  weight += 8;
  return weight + estimateAttributesSizeInBytes(metric.attributes);
}
function estimateLogSizeInBytes(log) {
  let weight = 0;
  if (log.message) {
    weight += log.message.length * 2;
  }
  return weight + estimateAttributesSizeInBytes(log.attributes);
}
function estimateAttributesSizeInBytes(attributes) {
  if (!attributes) {
    return 0;
  }
  let weight = 0;
  Object.values(attributes).forEach((value) => {
    if (Array.isArray(value)) {
      weight += value.length * estimatePrimitiveSizeInBytes(value[0]);
    } else if (is.isPrimitive(value)) {
      weight += estimatePrimitiveSizeInBytes(value);
    } else {
      weight += 100;
    }
  });
  return weight;
}
function estimatePrimitiveSizeInBytes(value) {
  if (typeof value === "string") {
    return value.length * 2;
  } else if (typeof value === "number") {
    return 8;
  } else if (typeof value === "boolean") {
    return 4;
  }
  return 0;
}

exports.Client = Client;
//# sourceMappingURL=client.js.map
