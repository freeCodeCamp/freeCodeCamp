/**
 * Metadata about a captured exception, intended to provide a hint as to the means by which it was captured.
 */
export interface Mechanism {
    /**
     * For now, restricted to `onerror`, `onunhandledrejection` (both obvious), `instrument` (the result of
     * auto-instrumentation), and `generic` (everything else). Converted to a tag on ingest.
     */
    type: string;
    /**
     * In theory, whether or not the exception has been handled by the user. In practice, whether or not we see it before
     * it hits the global error/rejection handlers, whether through explicit handling by the user or auto instrumentation.
     * Converted to a tag on ingest and used in various ways in the UI.
     */
    handled?: boolean;
    /**
     * Arbitrary data to be associated with the mechanism (for example, errors coming from event handlers include the
     * handler name and the event target. Will show up in the UI directly above the stacktrace.
     */
    data?: {
        [key: string]: string | boolean;
    };
    /**
     * True when `captureException` is called with anything other than an instance of `Error` (or, in the case of browser,
     * an instance of `ErrorEvent`, `DOMError`, or `DOMException`). causing us to create a synthetic error in an attempt
     * to recreate the stacktrace.
     */
    synthetic?: boolean;
    /**
     * Describes the source of the exception, in the case that this is a derived (linked or aggregate) error.
     *
     * This should be populated with the name of the property where the exception was found on the parent exception.
     * E.g. "cause", "errors[0]", "errors[1]"
     */
    source?: string;
    /**
     * Indicates whether the exception is an `AggregateException`.
     */
    is_exception_group?: boolean;
    /**
     * An identifier for the exception inside the `event.exception.values` array. This identifier is referenced to via the
     * `parent_id` attribute to link and aggregate errors.
     */
    exception_id?: number;
    /**
     * References another exception via the `exception_id` field to indicate that this exception is a child of that
     * exception in the case of aggregate or linked errors.
     */
    parent_id?: number;
}
//# sourceMappingURL=mechanism.d.ts.map