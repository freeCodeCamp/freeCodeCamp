/***
 * Jobs of this module
 * - Maintain the list of components in the Redux store. So monitor new components
 *   and add/remove components.
 * - Watch components for query changes and extract these and update the store.
 * - Ensure all page queries are run as part of bootstrap and report back when
 *   this is done
 * - Whenever a query changes, re-run all pages that rely on this query.
 ***/
import { Span } from "opentracing";
export declare const startWatchDeletePage: () => void;
export declare const updateStateAndRunQueries: (isFirstRun: boolean, { parentSpan }?: {
    parentSpan?: Span | undefined;
}) => Promise<void>;
export declare const extractQueries: ({ parentSpan, }?: {
    parentSpan?: Span | undefined;
}) => Promise<void>;
