interface Options {
    /**
     * Keys that have been provided in the Sentry bundler plugin via the the `applicationKey` option, identifying your bundles.
     *
     * - Webpack plugin: https://www.npmjs.com/package/@sentry/webpack-plugin#applicationkey
     * - Vite plugin: https://www.npmjs.com/package/@sentry/vite-plugin#applicationkey
     * - Esbuild plugin: https://www.npmjs.com/package/@sentry/esbuild-plugin#applicationkey
     * - Rollup plugin: https://www.npmjs.com/package/@sentry/rollup-plugin#applicationkey
     */
    filterKeys: string[];
    /**
     * Defines how the integration should behave. "Third-Party Stack Frames" are stack frames that did not come from files marked with a matching bundle key.
     *
     * You can define the behaviour with one of 4 modes:
     * - `drop-error-if-contains-third-party-frames`: Drop error events that contain at least one third-party stack frame.
     * - `drop-error-if-exclusively-contains-third-party-frames`: Drop error events that exclusively contain third-party stack frames.
     * - `apply-tag-if-contains-third-party-frames`: Keep all error events, but apply a `third_party_code: true` tag in case the error contains at least one third-party stack frame.
     * - `apply-tag-if-exclusively-contains-third-party-frames`: Keep all error events, but apply a `third_party_code: true` tag in case the error contains exclusively third-party stack frames.
     *
     * If you chose the mode to only apply tags, the tags can then be used in Sentry to filter your issue stream by entering `!third_party_code:True` in the search bar.
     */
    behaviour: 'drop-error-if-contains-third-party-frames' | 'drop-error-if-exclusively-contains-third-party-frames' | 'apply-tag-if-contains-third-party-frames' | 'apply-tag-if-exclusively-contains-third-party-frames';
    /**
     * @experimental
     * If set to true, the integration will ignore frames that are internal to the Sentry SDK from the third-party frame detection.
     * Note that enabling this option might lead to errors being misclassified as third-party errors.
     */
    ignoreSentryInternalFrames?: boolean;
}
/**
 * This integration allows you to filter out, or tag error events that do not come from user code marked with a bundle key via the Sentry bundler plugins.
 */
export declare const thirdPartyErrorFilterIntegration: (options: Options) => import("..").Integration;
export {};
//# sourceMappingURL=third-party-errors-filter.d.ts.map