Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const SPAN_STATUS_UNSET = 0;
const SPAN_STATUS_OK = 1;
const SPAN_STATUS_ERROR = 2;
function getSpanStatusFromHttpCode(httpStatus) {
  if (httpStatus < 400 && httpStatus >= 100) {
    return { code: SPAN_STATUS_OK };
  }
  if (httpStatus >= 400 && httpStatus < 500) {
    switch (httpStatus) {
      case 401:
        return { code: SPAN_STATUS_ERROR, message: "unauthenticated" };
      case 403:
        return { code: SPAN_STATUS_ERROR, message: "permission_denied" };
      case 404:
        return { code: SPAN_STATUS_ERROR, message: "not_found" };
      case 409:
        return { code: SPAN_STATUS_ERROR, message: "already_exists" };
      case 413:
        return { code: SPAN_STATUS_ERROR, message: "failed_precondition" };
      case 429:
        return { code: SPAN_STATUS_ERROR, message: "resource_exhausted" };
      case 499:
        return { code: SPAN_STATUS_ERROR, message: "cancelled" };
      default:
        return { code: SPAN_STATUS_ERROR, message: "invalid_argument" };
    }
  }
  if (httpStatus >= 500 && httpStatus < 600) {
    switch (httpStatus) {
      case 501:
        return { code: SPAN_STATUS_ERROR, message: "unimplemented" };
      case 503:
        return { code: SPAN_STATUS_ERROR, message: "unavailable" };
      case 504:
        return { code: SPAN_STATUS_ERROR, message: "deadline_exceeded" };
      default:
        return { code: SPAN_STATUS_ERROR, message: "internal_error" };
    }
  }
  return { code: SPAN_STATUS_ERROR, message: "internal_error" };
}
function setHttpStatus(span, httpStatus) {
  span.setAttribute("http.response.status_code", httpStatus);
  const spanStatus = getSpanStatusFromHttpCode(httpStatus);
  if (spanStatus.message !== "unknown_error") {
    span.setStatus(spanStatus);
  }
}

exports.SPAN_STATUS_ERROR = SPAN_STATUS_ERROR;
exports.SPAN_STATUS_OK = SPAN_STATUS_OK;
exports.SPAN_STATUS_UNSET = SPAN_STATUS_UNSET;
exports.getSpanStatusFromHttpCode = getSpanStatusFromHttpCode;
exports.setHttpStatus = setHttpStatus;
//# sourceMappingURL=spanstatus.js.map
