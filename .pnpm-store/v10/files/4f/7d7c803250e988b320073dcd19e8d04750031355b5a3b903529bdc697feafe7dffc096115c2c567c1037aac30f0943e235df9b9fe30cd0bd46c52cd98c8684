import { addNonEnumerableProperty } from '../../utils/object.js';

function withStreamedSpan(callback) {
  addNonEnumerableProperty(callback, "_streamed", true);
  return callback;
}
function isStreamedBeforeSendSpanCallback(callback) {
  return !!callback && typeof callback === "function" && "_streamed" in callback && !!callback._streamed;
}

export { isStreamedBeforeSendSpanCallback, withStreamedSpan };
//# sourceMappingURL=beforeSendSpan.js.map
