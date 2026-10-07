Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const SEQUENCE_ATTR_KEY = "sentry.timestamp.sequence";
let _sequenceNumber = 0;
let _previousTimestampMs;
function getSequenceAttribute(timestampInSeconds) {
  const nowMs = Math.floor(timestampInSeconds * 1e3);
  if (_previousTimestampMs !== void 0 && nowMs !== _previousTimestampMs) {
    _sequenceNumber = 0;
  }
  const value = _sequenceNumber;
  _sequenceNumber++;
  _previousTimestampMs = nowMs;
  return {
    key: SEQUENCE_ATTR_KEY,
    value: { value, type: "integer" }
  };
}

exports.getSequenceAttribute = getSequenceAttribute;
//# sourceMappingURL=timestampSequence.js.map
