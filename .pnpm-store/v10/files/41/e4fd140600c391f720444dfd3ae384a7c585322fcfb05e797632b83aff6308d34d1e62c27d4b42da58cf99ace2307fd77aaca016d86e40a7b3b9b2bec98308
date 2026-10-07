declare module "node:trace_events" {
    /**
     * The `Tracing` object is used to enable or disable tracing for sets of
     * categories. Instances are created using the
     * `trace_events.createTracing()` method.
     *
     * When created, the `Tracing` object is disabled. Calling the
     * `tracing.enable()` method adds the categories to the set of enabled trace
     * event categories. Calling `tracing.disable()` will remove the categories
     * from the set of enabled trace event categories.
     */
    interface Tracing {
        /**
         * A comma-separated list of the trace event categories covered by this
         * `Tracing` object.
         * @since v10.0.0
         */
        readonly categories: string;
        /**
         * Disables this `Tracing` object.
         *
         * Only trace event categories _not_ covered by other enabled `Tracing`
         * objects and _not_ specified by the `--trace-event-categories` flag
         * will be disabled.
         *
         * ```js
         * import trace_events from 'node:trace_events';
         * const t1 = trace_events.createTracing({ categories: ['node', 'v8'] });
         * const t2 = trace_events.createTracing({ categories: ['node.perf', 'node'] });
         * t1.enable();
         * t2.enable();
         *
         * // Prints 'node,node.perf,v8'
         * console.log(trace_events.getEnabledCategories());
         *
         * t2.disable(); // Will only disable emission of the 'node.perf' category
         *
         * // Prints 'node,v8'
         * console.log(trace_events.getEnabledCategories());
         * ```
         * @since v10.0.0
         */
        disable(): void;
        /**
         * Enables this `Tracing` object for the set of categories covered by
         * the `Tracing` object.
         * @since v10.0.0
         */
        enable(): void;
        /**
         * `true` only if the `Tracing` object has been enabled.
         * @since v10.0.0
         */
        readonly enabled: boolean;
    }
    interface CreateTracingOptions {
        /**
         * An array of trace category names. Values included in the array are
         * coerced to a string when possible. An error will be thrown if the
         * value cannot be coerced.
         */
        categories: string[];
    }
    /**
     * Creates and returns a `Tracing` object for the given set of `categories`.
     *
     * ```js
     * import trace_events from 'node:trace_events';
     * const categories = ['node.perf', 'node.async_hooks'];
     * const tracing = trace_events.createTracing({ categories });
     * tracing.enable();
     * // do stuff
     * tracing.disable();
     * ```
     * @since v10.0.0
     */
    function createTracing(options: CreateTracingOptions): Tracing;
    /**
     * Returns a comma-separated list of all currently-enabled trace event
     * categories. The current set of enabled trace event categories is determined
     * by the _union_ of all currently-enabled `Tracing` objects and any categories
     * enabled using the `--trace-event-categories` flag.
     *
     * Given the file `test.js` below, the command `node --trace-event-categories node.perf test.js` will print `'node.async_hooks,node.perf'` to the console.
     *
     * ```js
     * import trace_events from 'node:trace_events';
     * const t1 = trace_events.createTracing({ categories: ['node.async_hooks'] });
     * const t2 = trace_events.createTracing({ categories: ['node.perf'] });
     * const t3 = trace_events.createTracing({ categories: ['v8'] });
     *
     * t1.enable();
     * t2.enable();
     *
     * console.log(trace_events.getEnabledCategories());
     * ```
     * @since v10.0.0
     */
    function getEnabledCategories(): string | undefined;
}
declare module "trace_events" {
    export * from "node:trace_events";
}
