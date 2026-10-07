/**
 * This integration will create spans for `fs` API operations, like reading and writing files.
 *
 * **WARNING:** This integration may add significant overhead to your application. Especially in scenarios with a lot of
 * file I/O, like for example when running a framework dev server, including this integration can massively slow down
 * your application.
 *
 * @param options Configuration for this integration.
 */
export declare const fsIntegration: (options?: {
    /**
     * Setting this option to `true` will include any filepath arguments from your `fs` API calls as span attributes.
     *
     * Defaults to `false`.
     */
    recordFilePaths?: boolean;
    /**
     * Setting this option to `true` will include the error messages of failed `fs` API calls as a span attribute.
     *
     * Defaults to `false`.
     */
    recordErrorMessagesAsSpanAttributes?: boolean;
} | undefined) => import("@sentry/core").Integration;
//# sourceMappingURL=index.d.ts.map
