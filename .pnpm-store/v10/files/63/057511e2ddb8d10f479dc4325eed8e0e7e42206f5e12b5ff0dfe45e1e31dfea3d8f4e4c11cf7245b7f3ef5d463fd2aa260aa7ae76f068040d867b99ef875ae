export type SpanStatusType = 
/** The operation completed successfully. */
'ok'
/** Deadline expired before operation could complete. */
 | 'deadline_exceeded'
/** 401 Unauthorized (actually does mean unauthenticated according to RFC 7235) */
 | 'unauthenticated'
/** 403 Forbidden */
 | 'permission_denied'
/** 404 Not Found. Some requested entity (file or directory) was not found. */
 | 'not_found'
/** 429 Too Many Requests */
 | 'resource_exhausted'
/** Client specified an invalid argument. 4xx. */
 | 'invalid_argument'
/** 501 Not Implemented */
 | 'unimplemented'
/** 503 Service Unavailable */
 | 'unavailable'
/** Other/generic 5xx. */
 | 'internal_error'
/** Unknown. Any non-standard HTTP status code. */
 | 'unknown_error'
/** The operation was cancelled (typically by the user). */
 | 'cancelled'
/** Already exists (409) */
 | 'already_exists'
/** Operation was rejected because the system is not in a state required for the operation's */
 | 'failed_precondition'
/** The operation was aborted, typically due to a concurrency issue. */
 | 'aborted'
/** Operation was attempted past the valid range. */
 | 'out_of_range'
/** Unrecoverable data loss or corruption */
 | 'data_loss';
declare const SPAN_STATUS_UNSET = 0;
declare const SPAN_STATUS_OK = 1;
declare const SPAN_STATUS_ERROR = 2;
/** The status code of a span. */
export type SpanStatusCode = typeof SPAN_STATUS_UNSET | typeof SPAN_STATUS_OK | typeof SPAN_STATUS_ERROR;
/**
 * The status of a span.
 * This can optionally contain a human-readable message.
 */
export interface SpanStatus {
    /**
     * The status code of this message.
     * 0 = UNSET
     * 1 = OK
     * 2 = ERROR
     */
    code: SpanStatusCode;
    /**
     * A developer-facing error message.
     */
    message?: SpanStatusType | string;
}
export {};
//# sourceMappingURL=spanStatus.d.ts.map
