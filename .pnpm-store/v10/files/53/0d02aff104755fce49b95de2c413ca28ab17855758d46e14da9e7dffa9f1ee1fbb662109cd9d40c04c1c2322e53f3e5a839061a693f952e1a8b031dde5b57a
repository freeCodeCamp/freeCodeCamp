import type { SeverityLevel } from './severity';
/**
 * Sentry uses breadcrumbs to create a trail of events that happened prior to an issue.
 * These events are very similar to traditional logs but can record more rich structured data.
 *
 * @link https://develop.sentry.dev/sdk/event-payloads/breadcrumbs/
 */
export interface Breadcrumb {
    /**
     * By default, all breadcrumbs are recorded as default, which makes them appear as a Debug entry, but Sentry provides
     * other types that influence how the breadcrumbs are rendered. For more information, see the description of
     * recognized breadcrumb types.
     *
     * @summary The type of breadcrumb.
     * @link https://develop.sentry.dev/sdk/event-payloads/breadcrumbs/#breadcrumb-types
     */
    type?: string;
    /**
     * Allowed values are, from highest to lowest:
     * `fatal`, `error`, `warning`, `info`, and `debug`.
     * Levels are used in the UI to emphasize and deemphasize the crumb. The default is `info`.
     *
     * @summary This defines the severity level of the breadcrumb.
     */
    level?: SeverityLevel;
    event_id?: string;
    /**
     * Typically it is a module name or a descriptive string. For instance, `ui.click` could be used to
     * indicate that a click happened in the UI or flask could be used to indicate that the event originated in
     * the Flask framework.
     * @private Internally we render some crumbs' color and icon based on the provided category.
     *          For more information, see the description of recognized breadcrumb types.
     * @summary A dotted string indicating what the crumb is or from where it comes.
     * @link    https://develop.sentry.dev/sdk/event-payloads/breadcrumbs/#breadcrumb-types
     */
    category?: string;
    /**
     * If a message is provided, it is rendered as text with all whitespace preserved.
     *
     * @summary Human-readable message for the breadcrumb.
     */
    message?: string;
    /**
     * Contains a dictionary whose contents depend on the breadcrumb type.
     * Additional parameters that are unsupported by the type are rendered as a key/value table.
     *
     * @summary Arbitrary data associated with this breadcrumb.
     */
    data?: {
        [key: string]: any;
    };
    /**
     * The format is a numeric (integer or float) value representing
     * the number of seconds that have elapsed since the Unixepoch.
     * Breadcrumbs are most useful when they include a timestamp, as it creates a timeline
     * leading up to an event expection/error.
     *
     * @note The API supports a string as defined in RFC 3339, but the SDKs only support a numeric value for now.
     *
     * @summary A timestamp representing when the breadcrumb occurred.
     * @link https://develop.sentry.dev/sdk/event-payloads/breadcrumbs/#:~:text=is%20info.-,timestamp,-(recommended)
     */
    timestamp?: number;
}
/** JSDoc */
export interface BreadcrumbHint {
    [key: string]: any;
}
export interface FetchBreadcrumbData {
    method: string;
    url: string;
    status_code?: number;
    request_body_size?: number;
    response_body_size?: number;
}
export interface XhrBreadcrumbData {
    method?: string;
    url?: string;
    status_code?: number;
    request_body_size?: number;
    response_body_size?: number;
}
export interface FetchBreadcrumbHint {
    input: any[];
    data?: unknown;
    response?: unknown;
    startTimestamp: number;
    endTimestamp?: number;
}
export interface XhrBreadcrumbHint {
    xhr: unknown;
    input: unknown;
    startTimestamp: number;
    endTimestamp: number;
}
//# sourceMappingURL=breadcrumb.d.ts.map