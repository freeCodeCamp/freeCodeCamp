Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const currentScopes = require('../currentScopes.js');
const debugBuild = require('../debug-build.js');
const envelope = require('../envelope.js');
const semanticAttributes = require('../semanticAttributes.js');
const debugLogger = require('../utils/debug-logger.js');
const propagationContext = require('../utils/propagationContext.js');
const spanUtils = require('../utils/spanUtils.js');
const time = require('../utils/time.js');
const dynamicSamplingContext = require('./dynamicSamplingContext.js');
const logSpans = require('./logSpans.js');
const measurement = require('./measurement.js');
const hasSpanStreamingEnabled = require('./spans/hasSpanStreamingEnabled.js');
const utils = require('./utils.js');

const MAX_SPAN_COUNT = 1e3;
class SentrySpan {
  /**
   * You should never call the constructor manually, always use `Sentry.startSpan()`
   * or other span methods.
   * @internal
   * @hideconstructor
   * @hidden
   */
  constructor(spanContext = {}) {
    this._traceId = spanContext.traceId || propagationContext.generateTraceId();
    this._spanId = spanContext.spanId || propagationContext.generateSpanId();
    this._startTime = spanContext.startTimestamp || time.timestampInSeconds();
    this._links = spanContext.links;
    this._attributes = {};
    this.setAttributes({
      [semanticAttributes.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "manual",
      [semanticAttributes.SEMANTIC_ATTRIBUTE_SENTRY_OP]: spanContext.op,
      ...spanContext.attributes
    });
    this._name = spanContext.name;
    if (spanContext.parentSpanId) {
      this._parentSpanId = spanContext.parentSpanId;
    }
    if ("sampled" in spanContext) {
      this._sampled = spanContext.sampled;
    }
    if (spanContext.endTimestamp) {
      this._endTime = spanContext.endTimestamp;
    }
    this._events = [];
    this._isStandaloneSpan = spanContext.isStandalone;
    if (this._endTime) {
      this._onSpanEnded();
    }
  }
  /** @inheritDoc */
  addLink(link) {
    if (this._links) {
      this._links.push(link);
    } else {
      this._links = [link];
    }
    return this;
  }
  /** @inheritDoc */
  addLinks(links) {
    if (this._links) {
      this._links.push(...links);
    } else {
      this._links = links;
    }
    return this;
  }
  /**
   * This should generally not be used,
   * but it is needed for being compliant with the OTEL Span interface.
   *
   * @hidden
   * @internal
   */
  recordException(_exception, _time) {
  }
  /** @inheritdoc */
  spanContext() {
    const { _spanId: spanId, _traceId: traceId, _sampled: sampled } = this;
    return {
      spanId,
      traceId,
      traceFlags: sampled ? spanUtils.TRACE_FLAG_SAMPLED : spanUtils.TRACE_FLAG_NONE
    };
  }
  /** @inheritdoc */
  setAttribute(key, value) {
    if (value === void 0) {
      delete this._attributes[key];
    } else {
      this._attributes[key] = value;
    }
    return this;
  }
  /** @inheritdoc */
  setAttributes(attributes) {
    Object.keys(attributes).forEach((key) => this.setAttribute(key, attributes[key]));
    return this;
  }
  /**
   * This should generally not be used,
   * but we need it for browser tracing where we want to adjust the start time afterwards.
   * USE THIS WITH CAUTION!
   *
   * @hidden
   * @internal
   */
  updateStartTime(timeInput) {
    this._startTime = spanUtils.spanTimeInputToSeconds(timeInput);
  }
  /**
   * @inheritDoc
   */
  setStatus(value) {
    this._status = value;
    return this;
  }
  /**
   * @inheritDoc
   */
  updateName(name) {
    this._name = name;
    this.setAttribute(semanticAttributes.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, "custom");
    return this;
  }
  /** @inheritdoc */
  end(endTimestamp) {
    if (this._endTime) {
      return;
    }
    this._endTime = spanUtils.spanTimeInputToSeconds(endTimestamp);
    logSpans.logSpanEnd(this);
    this._onSpanEnded();
  }
  /**
   * Get JSON representation of this span.
   *
   * @hidden
   * @internal This method is purely for internal purposes and should not be used outside
   * of SDK code. If you need to get a JSON representation of a span,
   * use `spanToJSON(span)` instead.
   */
  getSpanJSON() {
    return {
      data: this._attributes,
      description: this._name,
      op: this._attributes[semanticAttributes.SEMANTIC_ATTRIBUTE_SENTRY_OP],
      parent_span_id: this._parentSpanId,
      span_id: this._spanId,
      start_timestamp: this._startTime,
      status: spanUtils.getStatusMessage(this._status),
      timestamp: this._endTime,
      trace_id: this._traceId,
      origin: this._attributes[semanticAttributes.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN],
      profile_id: this._attributes[semanticAttributes.SEMANTIC_ATTRIBUTE_PROFILE_ID],
      exclusive_time: this._attributes[semanticAttributes.SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME],
      measurements: measurement.timedEventsToMeasurements(this._events),
      is_segment: this._isStandaloneSpan && spanUtils.getRootSpan(this) === this || void 0,
      segment_id: this._isStandaloneSpan ? spanUtils.getRootSpan(this).spanContext().spanId : void 0,
      links: spanUtils.convertSpanLinksForEnvelope(this._links)
    };
  }
  /**
   * Get {@link StreamedSpanJSON} representation of this span.
   *
   * @hidden
   * @internal This method is purely for internal purposes and should not be used outside
   * of SDK code. If you need to get a JSON representation of a span,
   * use `spanToStreamedSpanJSON(span)` instead.
   */
  getStreamedSpanJSON() {
    return {
      name: this._name ?? "",
      span_id: this._spanId,
      trace_id: this._traceId,
      parent_span_id: this._parentSpanId,
      start_timestamp: this._startTime,
      // just in case _endTime is not set, we use the start time (i.e. duration 0)
      end_timestamp: this._endTime ?? this._startTime,
      is_segment: this._isStandaloneSpan || this === spanUtils.getRootSpan(this),
      status: spanUtils.getSimpleStatusMessage(this._status),
      attributes: this._attributes,
      links: spanUtils.getStreamedSpanLinks(this._links)
    };
  }
  /** @inheritdoc */
  isRecording() {
    return !this._endTime && !!this._sampled;
  }
  /**
   * @inheritdoc
   */
  addEvent(name, attributesOrStartTime, startTime) {
    debugBuild.DEBUG_BUILD && debugLogger.debug.log("[Tracing] Adding an event to span:", name);
    const time$1 = isSpanTimeInput(attributesOrStartTime) ? attributesOrStartTime : startTime || time.timestampInSeconds();
    const attributes = isSpanTimeInput(attributesOrStartTime) ? {} : attributesOrStartTime || {};
    const event = {
      name,
      time: spanUtils.spanTimeInputToSeconds(time$1),
      attributes
    };
    this._events.push(event);
    return this;
  }
  /**
   * This method should generally not be used,
   * but for now we need a way to publicly check if the `_isStandaloneSpan` flag is set.
   * USE THIS WITH CAUTION!
   * @internal
   * @hidden
   * @experimental
   */
  isStandaloneSpan() {
    return !!this._isStandaloneSpan;
  }
  /** Emit `spanEnd` when the span is ended. */
  _onSpanEnded() {
    const client = currentScopes.getClient();
    if (client) {
      client.emit("spanEnd", this);
      if (!this._isStandaloneSpan) {
        client.emit("afterSpanEnd", this);
      }
    }
    const isSegmentSpan = this._isStandaloneSpan || this === spanUtils.getRootSpan(this);
    if (!isSegmentSpan) {
      return;
    }
    if (this._isStandaloneSpan) {
      if (this._sampled) {
        sendSpanEnvelope(envelope.createSpanEnvelope([this], client));
      } else {
        debugBuild.DEBUG_BUILD && debugLogger.debug.log("[Tracing] Discarding standalone span because its trace was not chosen to be sampled.");
        if (client) {
          client.recordDroppedEvent("sample_rate", "span");
        }
      }
      return;
    } else if (client && hasSpanStreamingEnabled.hasSpanStreamingEnabled(client)) {
      client.emit("afterSegmentSpanEnd", this);
      return;
    }
    const transactionEvent = this._convertSpanToTransaction();
    if (transactionEvent) {
      const scope = utils.getCapturedScopesOnSpan(this).scope || currentScopes.getCurrentScope();
      scope.captureEvent(transactionEvent);
    }
  }
  /**
   * Finish the transaction & prepare the event to send to Sentry.
   */
  _convertSpanToTransaction() {
    if (!isFullFinishedSpan(spanUtils.spanToJSON(this))) {
      return void 0;
    }
    if (!this._name) {
      debugBuild.DEBUG_BUILD && debugLogger.debug.warn("Transaction has no name, falling back to `<unlabeled transaction>`.");
      this._name = "<unlabeled transaction>";
    }
    const { scope: capturedSpanScope, isolationScope: capturedSpanIsolationScope } = utils.getCapturedScopesOnSpan(this);
    const normalizedRequest = capturedSpanScope?.getScopeData().sdkProcessingMetadata?.normalizedRequest;
    if (this._sampled !== true) {
      return void 0;
    }
    const finishedSpans = spanUtils.getSpanDescendants(this).filter((span) => span !== this && !isStandaloneSpan(span));
    const spans = finishedSpans.map((span) => spanUtils.spanToJSON(span)).filter(isFullFinishedSpan);
    const source = this._attributes[semanticAttributes.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE];
    delete this._attributes[semanticAttributes.SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME];
    let hasGenAiSpans = false;
    spans.forEach((span) => {
      delete span.data[semanticAttributes.SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME];
      if (span.op?.startsWith("gen_ai.")) {
        hasGenAiSpans = true;
      }
    });
    const transaction = {
      contexts: {
        trace: spanUtils.spanToTransactionTraceContext(this)
      },
      spans: (
        // spans.sort() mutates the array, but `spans` is already a copy so we can safely do this here
        // we do not use spans anymore after this point
        spans.length > MAX_SPAN_COUNT ? spans.sort((a, b) => a.start_timestamp - b.start_timestamp).slice(0, MAX_SPAN_COUNT) : spans
      ),
      start_timestamp: this._startTime,
      timestamp: this._endTime,
      transaction: this._name,
      type: "transaction",
      sdkProcessingMetadata: {
        capturedSpanScope,
        capturedSpanIsolationScope,
        dynamicSamplingContext: dynamicSamplingContext.getDynamicSamplingContextFromSpan(this),
        hasGenAiSpans
      },
      request: normalizedRequest,
      ...source && {
        transaction_info: {
          source
        }
      }
    };
    const measurements = measurement.timedEventsToMeasurements(this._events);
    const hasMeasurements = measurements && Object.keys(measurements).length;
    if (hasMeasurements) {
      debugBuild.DEBUG_BUILD && debugLogger.debug.log(
        "[Measurements] Adding measurements to transaction event",
        JSON.stringify(measurements, void 0, 2)
      );
      transaction.measurements = measurements;
    }
    return transaction;
  }
}
function isSpanTimeInput(value) {
  return value && typeof value === "number" || value instanceof Date || Array.isArray(value);
}
function isFullFinishedSpan(input) {
  return !!input.start_timestamp && !!input.timestamp && !!input.span_id && !!input.trace_id;
}
function isStandaloneSpan(span) {
  return span instanceof SentrySpan && span.isStandaloneSpan();
}
function sendSpanEnvelope(envelope) {
  const client = currentScopes.getClient();
  if (!client) {
    return;
  }
  const spanItems = envelope[1];
  if (!spanItems || spanItems.length === 0) {
    client.recordDroppedEvent("before_send", "span");
    return;
  }
  client.sendEnvelope(envelope);
}

exports.SentrySpan = SentrySpan;
//# sourceMappingURL=sentrySpan.js.map
