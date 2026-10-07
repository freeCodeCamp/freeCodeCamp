/** Options for the EventFilters integration */
export interface EventFiltersOptions {
    allowUrls: Array<string | RegExp>;
    denyUrls: Array<string | RegExp>;
    ignoreErrors: Array<string | RegExp>;
    ignoreTransactions: Array<string | RegExp>;
    ignoreInternal: boolean;
    disableErrorDefaults: boolean;
}
/**
 * An integration that filters out events (errors and transactions) based on:
 *
 * - (Errors) A curated list of known low-value or irrelevant errors (see {@link DEFAULT_IGNORE_ERRORS})
 * - (Errors) A list of error messages or urls/filenames passed in via
 *   - Top level Sentry.init options (`ignoreErrors`, `denyUrls`, `allowUrls`)
 *   - The same options passed to the integration directly via @param options
 * - (Transactions/Spans) A list of root span (transaction) names passed in via
 *   - Top level Sentry.init option (`ignoreTransactions`)
 *   - The same option passed to the integration directly via @param options
 *
 * Events filtered by this integration will not be sent to Sentry.
 */
export declare const eventFiltersIntegration: (options?: Partial<EventFiltersOptions> | undefined) => import("..").Integration;
/**
 * An integration that filters out events (errors and transactions) based on:
 *
 * - (Errors) A curated list of known low-value or irrelevant errors (see {@link DEFAULT_IGNORE_ERRORS})
 * - (Errors) A list of error messages or urls/filenames passed in via
 *   - Top level Sentry.init options (`ignoreErrors`, `denyUrls`, `allowUrls`)
 *   - The same options passed to the integration directly via @param options
 * - (Transactions/Spans) A list of root span (transaction) names passed in via
 *   - Top level Sentry.init option (`ignoreTransactions`)
 *   - The same option passed to the integration directly via @param options
 *
 * Events filtered by this integration will not be sent to Sentry.
 *
 * @deprecated this integration was renamed and will be removed in a future major version.
 * Use `eventFiltersIntegration` instead.
 */
export declare const inboundFiltersIntegration: (options?: Partial<EventFiltersOptions> | undefined) => import("..").Integration;
//# sourceMappingURL=eventFilters.d.ts.map
