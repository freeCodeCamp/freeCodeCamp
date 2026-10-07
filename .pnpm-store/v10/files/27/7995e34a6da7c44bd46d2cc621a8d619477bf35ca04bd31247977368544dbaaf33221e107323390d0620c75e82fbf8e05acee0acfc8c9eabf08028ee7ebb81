import { generateTraceId, generateSpanId } from '../utils/propagationContext.js';
import { TRACE_FLAG_NONE } from '../utils/spanUtils.js';

class SentryNonRecordingSpan {
  constructor(spanContext = {}) {
    this._traceId = spanContext.traceId || generateTraceId();
    this._spanId = spanContext.spanId || generateSpanId();
    this.dropReason = spanContext.dropReason;
  }
  /** @inheritdoc */
  spanContext() {
    return {
      spanId: this._spanId,
      traceId: this._traceId,
      traceFlags: TRACE_FLAG_NONE
    };
  }
  /** @inheritdoc */
  end(_timestamp) {
  }
  /** @inheritdoc */
  setAttribute(_key, _value) {
    return this;
  }
  /** @inheritdoc */
  setAttributes(_values) {
    return this;
  }
  /** @inheritdoc */
  setStatus(_status) {
    return this;
  }
  /** @inheritdoc */
  updateName(_name) {
    return this;
  }
  /** @inheritdoc */
  isRecording() {
    return false;
  }
  /** @inheritdoc */
  addEvent(_name, _attributesOrStartTime, _startTime) {
    return this;
  }
  /** @inheritDoc */
  addLink(_link) {
    return this;
  }
  /** @inheritDoc */
  addLinks(_links) {
    return this;
  }
  /**
   * This should generally not be used,
   * but we need it for being compliant with the OTEL Span interface.
   *
   * @hidden
   * @internal
   */
  recordException(_exception, _time) {
  }
}

export { SentryNonRecordingSpan };
//# sourceMappingURL=sentryNonRecordingSpan.js.map
