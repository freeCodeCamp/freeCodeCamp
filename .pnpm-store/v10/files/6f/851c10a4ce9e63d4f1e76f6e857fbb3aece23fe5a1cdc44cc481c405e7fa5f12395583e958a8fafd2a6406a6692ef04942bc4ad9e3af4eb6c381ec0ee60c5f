import { getClient, getCurrentScope } from '../currentScopes.js';
import { DEBUG_BUILD } from '../debug-build.js';
import { SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON } from '../semanticAttributes.js';
import { debug } from '../utils/debug-logger.js';
import { hasSpansEnabled } from '../utils/hasSpansEnabled.js';
import { shouldIgnoreSpan } from '../utils/should-ignore-span.js';
import { _setSpanForScope } from '../utils/spanOnScope.js';
import { getActiveSpan, spanTimeInputToSeconds, getSpanDescendants, spanToJSON, removeChildSpanFromSpan } from '../utils/spanUtils.js';
import { timestampInSeconds } from '../utils/time.js';
import { getDynamicSamplingContextFromSpan, freezeDscOnSpan } from './dynamicSamplingContext.js';
import { SentryNonRecordingSpan } from './sentryNonRecordingSpan.js';
import { SentrySpan } from './sentrySpan.js';
import { SPAN_STATUS_OK, SPAN_STATUS_ERROR } from './spanstatus.js';
import { startInactiveSpan } from './trace.js';

const TRACING_DEFAULTS = {
  idleTimeout: 1e3,
  finalTimeout: 3e4,
  childSpanTimeout: 15e3
};
const FINISH_REASON_HEARTBEAT_FAILED = "heartbeatFailed";
const FINISH_REASON_IDLE_TIMEOUT = "idleTimeout";
const FINISH_REASON_FINAL_TIMEOUT = "finalTimeout";
const FINISH_REASON_EXTERNAL_FINISH = "externalFinish";
function startIdleSpan(startSpanOptions, options = {}) {
  const activities = /* @__PURE__ */ new Map();
  let _finished = false;
  let _idleTimeoutID;
  let _finishReason = FINISH_REASON_EXTERNAL_FINISH;
  let _autoFinishAllowed = !options.disableAutoFinish;
  const _cleanupHooks = [];
  const {
    idleTimeout = TRACING_DEFAULTS.idleTimeout,
    finalTimeout = TRACING_DEFAULTS.finalTimeout,
    childSpanTimeout = TRACING_DEFAULTS.childSpanTimeout,
    beforeSpanEnd,
    trimIdleSpanEndTimestamp = true
  } = options;
  const client = getClient();
  if (!client || !hasSpansEnabled()) {
    const span2 = new SentryNonRecordingSpan();
    const dsc = {
      sample_rate: "0",
      sampled: "false",
      ...getDynamicSamplingContextFromSpan(span2)
    };
    freezeDscOnSpan(span2, dsc);
    return span2;
  }
  const scope = getCurrentScope();
  const previousActiveSpan = getActiveSpan();
  const span = _startIdleSpan(startSpanOptions);
  span.end = new Proxy(span.end, {
    apply(target, thisArg, args) {
      if (beforeSpanEnd) {
        beforeSpanEnd(span);
      }
      if (thisArg instanceof SentryNonRecordingSpan) {
        return;
      }
      const [definedEndTimestamp, ...rest] = args;
      const timestamp = definedEndTimestamp || timestampInSeconds();
      const spanEndTimestamp = spanTimeInputToSeconds(timestamp);
      const spans = getSpanDescendants(span).filter((child) => child !== span);
      const spanJson = spanToJSON(span);
      if (!spans.length || !trimIdleSpanEndTimestamp) {
        onIdleSpanEnded(spanEndTimestamp);
        return Reflect.apply(target, thisArg, [spanEndTimestamp, ...rest]);
      }
      const ignoreSpans = client.getOptions().ignoreSpans;
      const latestSpanEndTimestamp = spans?.reduce((acc, current) => {
        const currentSpanJson = spanToJSON(current);
        if (!currentSpanJson.timestamp) {
          return acc;
        }
        if (ignoreSpans && shouldIgnoreSpan(
          { description: currentSpanJson.description, op: currentSpanJson.op, attributes: currentSpanJson.data },
          ignoreSpans
        )) {
          return acc;
        }
        return acc ? Math.max(acc, currentSpanJson.timestamp) : currentSpanJson.timestamp;
      }, void 0);
      const spanStartTimestamp = spanJson.start_timestamp;
      const endTimestamp = Math.min(
        spanStartTimestamp ? spanStartTimestamp + finalTimeout / 1e3 : Infinity,
        Math.max(spanStartTimestamp || -Infinity, Math.min(spanEndTimestamp, latestSpanEndTimestamp || Infinity))
      );
      onIdleSpanEnded(endTimestamp);
      return Reflect.apply(target, thisArg, [endTimestamp, ...rest]);
    }
  });
  function _cancelIdleTimeout() {
    if (_idleTimeoutID) {
      clearTimeout(_idleTimeoutID);
      _idleTimeoutID = void 0;
    }
  }
  function _restartIdleTimeout(endTimestamp) {
    _cancelIdleTimeout();
    _idleTimeoutID = setTimeout(() => {
      if (!_finished && activities.size === 0 && _autoFinishAllowed) {
        _finishReason = FINISH_REASON_IDLE_TIMEOUT;
        span.end(endTimestamp);
      }
    }, idleTimeout);
  }
  function _restartChildSpanTimeout(endTimestamp) {
    _idleTimeoutID = setTimeout(() => {
      if (!_finished && _autoFinishAllowed) {
        _finishReason = FINISH_REASON_HEARTBEAT_FAILED;
        span.end(endTimestamp);
      }
    }, childSpanTimeout);
  }
  function _pushActivity(spanId) {
    _cancelIdleTimeout();
    activities.set(spanId, true);
    const endTimestamp = timestampInSeconds();
    _restartChildSpanTimeout(endTimestamp + childSpanTimeout / 1e3);
  }
  function _popActivity(spanId) {
    if (activities.has(spanId)) {
      activities.delete(spanId);
    }
    if (activities.size === 0) {
      const endTimestamp = timestampInSeconds();
      _restartIdleTimeout(endTimestamp + idleTimeout / 1e3);
    }
  }
  function onIdleSpanEnded(endTimestamp) {
    _finished = true;
    activities.clear();
    _cleanupHooks.forEach((cleanup) => cleanup());
    _setSpanForScope(scope, previousActiveSpan);
    const spanJSON = spanToJSON(span);
    const { start_timestamp: startTimestamp } = spanJSON;
    if (!startTimestamp) {
      return;
    }
    const attributes = spanJSON.data;
    if (!attributes[SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON]) {
      span.setAttribute(SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON, _finishReason);
    }
    const currentStatus = spanJSON.status;
    if (!currentStatus || currentStatus === "unknown") {
      span.setStatus({ code: SPAN_STATUS_OK });
    }
    debug.log(`[Tracing] Idle span "${spanJSON.op}" finished`);
    const childSpans = getSpanDescendants(span).filter((child) => child !== span);
    let discardedSpans = 0;
    childSpans.forEach((childSpan) => {
      if (childSpan.isRecording()) {
        childSpan.setStatus({ code: SPAN_STATUS_ERROR, message: "cancelled" });
        childSpan.end(endTimestamp);
        DEBUG_BUILD && debug.log("[Tracing] Cancelling span since span ended early", JSON.stringify(childSpan, void 0, 2));
      }
      const childSpanJSON = spanToJSON(childSpan);
      const { timestamp: childEndTimestamp = 0, start_timestamp: childStartTimestamp = 0 } = childSpanJSON;
      const spanStartedBeforeIdleSpanEnd = childStartTimestamp <= endTimestamp;
      const timeoutWithMarginOfError = (finalTimeout + idleTimeout) / 1e3;
      const spanEndedBeforeFinalTimeout = childEndTimestamp - childStartTimestamp <= timeoutWithMarginOfError;
      if (DEBUG_BUILD) {
        const stringifiedSpan = JSON.stringify(childSpan, void 0, 2);
        if (!spanStartedBeforeIdleSpanEnd) {
          debug.log("[Tracing] Discarding span since it happened after idle span was finished", stringifiedSpan);
        } else if (!spanEndedBeforeFinalTimeout) {
          debug.log("[Tracing] Discarding span since it finished after idle span final timeout", stringifiedSpan);
        }
      }
      if (!spanEndedBeforeFinalTimeout || !spanStartedBeforeIdleSpanEnd) {
        removeChildSpanFromSpan(span, childSpan);
        discardedSpans++;
      }
    });
    if (discardedSpans > 0) {
      span.setAttribute("sentry.idle_span_discarded_spans", discardedSpans);
    }
  }
  _cleanupHooks.push(
    client.on("spanStart", (startedSpan) => {
      if (_finished || startedSpan === span || !!spanToJSON(startedSpan).timestamp || startedSpan instanceof SentrySpan && startedSpan.isStandaloneSpan()) {
        return;
      }
      const allSpans = getSpanDescendants(span);
      if (allSpans.includes(startedSpan)) {
        _pushActivity(startedSpan.spanContext().spanId);
      }
    })
  );
  _cleanupHooks.push(
    client.on("spanEnd", (endedSpan) => {
      if (_finished) {
        return;
      }
      _popActivity(endedSpan.spanContext().spanId);
    })
  );
  _cleanupHooks.push(
    client.on("idleSpanEnableAutoFinish", (spanToAllowAutoFinish) => {
      if (spanToAllowAutoFinish === span) {
        _autoFinishAllowed = true;
        _restartIdleTimeout();
        if (activities.size) {
          _restartChildSpanTimeout();
        }
      }
    })
  );
  if (!options.disableAutoFinish) {
    _restartIdleTimeout();
  }
  setTimeout(() => {
    if (!_finished) {
      span.setStatus({ code: SPAN_STATUS_ERROR, message: "deadline_exceeded" });
      _finishReason = FINISH_REASON_FINAL_TIMEOUT;
      span.end();
    }
  }, finalTimeout);
  return span;
}
function _startIdleSpan(options) {
  const span = startInactiveSpan(options);
  _setSpanForScope(getCurrentScope(), span);
  DEBUG_BUILD && debug.log("[Tracing] Started span is an idle span");
  return span;
}

export { TRACING_DEFAULTS, startIdleSpan };
//# sourceMappingURL=idleSpan.js.map
