/**
 * Data pulled from a `sentry-trace` header
 */
export interface TraceparentData {
    /**
     * Trace ID
     */
    traceId?: string | undefined;
    /**
     * Parent Span ID
     */
    parentSpanId?: string | undefined;
    /**
     * If this transaction has a parent, the parent's sampling decision
     */
    parentSampled?: boolean | undefined;
}
/**
 * Contains information about how the name of the transaction was determined. This will be used by the server to decide
 * whether or not to scrub identifiers from the transaction name, or replace the entire name with a placeholder.
 */
export type TransactionSource = 
/** User-defined name */
'custom'
/** Raw URL, potentially containing identifiers */
 | 'url'
/** Parametrized URL / route */
 | 'route'
/** Name of the view handling the request */
 | 'view'
/** Named after a software component, such as a function or class name. */
 | 'component'
/** Name of a background task (e.g. a Celery task) */
 | 'task';
//# sourceMappingURL=transaction.d.ts.map