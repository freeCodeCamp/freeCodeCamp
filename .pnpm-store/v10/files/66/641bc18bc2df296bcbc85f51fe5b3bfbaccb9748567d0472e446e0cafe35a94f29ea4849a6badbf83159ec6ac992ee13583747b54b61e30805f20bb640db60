Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const object = require('../../utils/object.js');

function withStreamedSpan(callback) {
  object.addNonEnumerableProperty(callback, "_streamed", true);
  return callback;
}
function isStreamedBeforeSendSpanCallback(callback) {
  return !!callback && typeof callback === "function" && "_streamed" in callback && !!callback._streamed;
}

exports.isStreamedBeforeSendSpanCallback = isStreamedBeforeSendSpanCallback;
exports.withStreamedSpan = withStreamedSpan;
//# sourceMappingURL=beforeSendSpan.js.map
