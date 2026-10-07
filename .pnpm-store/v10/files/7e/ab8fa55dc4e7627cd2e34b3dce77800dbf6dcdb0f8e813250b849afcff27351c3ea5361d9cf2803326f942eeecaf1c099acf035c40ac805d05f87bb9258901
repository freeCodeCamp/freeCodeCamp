import { Span } from '../types/span';
import { SpanStatus } from '../types/spanStatus';
export declare const SPAN_STATUS_UNSET = 0;
export declare const SPAN_STATUS_OK = 1;
export declare const SPAN_STATUS_ERROR = 2;
/**
 * Converts a HTTP status code into a sentry status with a message.
 *
 * @param httpStatus The HTTP response status code.
 * @returns The span status or internal_error.
 */
export declare function getSpanStatusFromHttpCode(httpStatus: number): SpanStatus;
/**
 * Sets the Http status attributes on the current span based on the http code.
 * Additionally, the span's status is updated, depending on the http code.
 */
export declare function setHttpStatus(span: Span, httpStatus: number): void;
//# sourceMappingURL=spanstatus.d.ts.map
