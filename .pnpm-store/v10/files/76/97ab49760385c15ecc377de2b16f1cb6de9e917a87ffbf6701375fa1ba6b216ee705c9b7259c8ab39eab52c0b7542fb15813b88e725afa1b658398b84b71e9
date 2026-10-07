/**
 * Sentry-internal base interface for build-time options used in Sentry's meta-framework SDKs (e.g., Next.js, Nuxt, SvelteKit).
 *
 * SDKs should extend this interface to add framework-specific configurations. To include bundler-specific
 * options, combine this type with one of the `Unstable[Bundler]PluginOptions` types, such as
 * `UnstableVitePluginOptions` or `UnstableWebpackPluginOptions`.
 *
 * If an option from this base interface doesn't apply to an SDK, use the `Omit` utility type to exclude it.
 *
 * @example
 * ```typescript
 * import type { BuildTimeOptionsBase, UnstableVitePluginOptions } from '@sentry/core';
 * import type { SentryVitePluginOptions } from '@sentry/vite-plugin';
 *
 * // Example of how a framework SDK would define its build-time options
 * type MyFrameworkBuildOptions =
 *   BuildTimeOptionsBase &
 *   UnstableVitePluginOptions<SentryVitePluginOptions> & {
 *     // Framework-specific options can be added here
 *     myFrameworkSpecificOption?: boolean;
 *   };
 * ```
 *
 * @internal Only meant for Sentry-internal SDK usage.
 * @hidden
 */
export interface BuildTimeOptionsBase {
    /**
     * The slug of the Sentry organization associated with the app.
     *
     * This value can also be specified via the `SENTRY_ORG` environment variable.
     */
    org?: string;
    /**
     * The slug of the Sentry project associated with the app.
     *
     * This value can also be specified via the `SENTRY_PROJECT` environment variable.
     */
    project?: string;
    /**
     * The authentication token to use for all communication with Sentry.
     * Can be obtained from https://sentry.io/orgredirect/organizations/:orgslug/settings/auth-tokens/.
     *
     * This value can also be specified via the `SENTRY_AUTH_TOKEN` environment variable.
     *
     * @see https://docs.sentry.io/product/accounts/auth-tokens/#organization-auth-tokens
     */
    authToken?: string;
    /**
     * The base URL of your Sentry instance. Use this if you are using a self-hosted
     * or Sentry instance other than sentry.io.
     *
     * This value can also be set via the `SENTRY_URL` environment variable.
     *
     * @default "https://sentry.io"
     */
    sentryUrl?: string;
    /**
     * Additional headers to send with every outgoing request to Sentry.
     */
    headers?: Record<string, string>;
    /**
     * If this flag is `true`, internal plugin errors and performance data will be sent to Sentry.
     * It will not collect any sensitive or user-specific data.
     *
     * At Sentry, we like to use Sentry ourselves to deliver faster and more stable products.
     * We're very careful of what we're sending. We won't collect anything other than error
     * and high-level performance data. We will never collect your code or any details of the
     * projects in which you're using this plugin.
     *
     * @default true
     */
    telemetry?: boolean;
    /**
     * Suppresses all Sentry SDK build logs.
     *
     * @default false
     */
    silent?: boolean;
    /**
     * When an error occurs during release creation or sourcemaps upload, the plugin will call this function.
     *
     * By default, the plugin will simply throw an error, thereby stopping the bundling process.
     * If an `errorHandler` callback is provided, compilation will continue unless an error is
     * thrown in the provided callback.
     *
     * To allow compilation to continue but still emit a warning, set this option to the following:
     *
     * ```js
     * (err) => {
     *   console.warn(err);
     * }
     * ```
     */
    errorHandler?: (err: Error) => void;
    /**
     * Enable debug information logs about the SDK during build-time.
     * Enabling this will give you, for example, logs about source maps.
     *
     * @default false
     */
    debug?: boolean;
    /**
     * Options related to source maps upload and processing.
     */
    sourcemaps?: SourceMapsOptions;
    /**
     * Options related to managing the Sentry releases for a build.
     *
     * More info: https://docs.sentry.io/product/releases/
     */
    release?: ReleaseOptions;
    /**
     * Options for bundle size optimizations by excluding certain features of the Sentry SDK.
     */
    bundleSizeOptimizations?: BundleSizeOptimizationsOptions;
    /**
     * A key that is used to identify the application in the Sentry bundler plugins.
     * This key is used by the `thirdPartyErrorFilterIntegration` to filter out errors
     * originating from third-party scripts.
     *
     * @see https://docs.sentry.io/platforms/javascript/configuration/filtering/#using-thirdpartyerrorfilterintegration
     */
    applicationKey?: string;
}
/**
 * Utility type for adding Vite plugin options to build-time configuration.
 * Use this type to extend your build-time options with Vite-specific plugin configurations.
 *
 * @template PluginOptionsType - The type of Vite plugin options to include
 *
 * @example
 * ```typescript
 * type SomeSDKsBuildOptions = BuildTimeOptionsBase & UnstableVitePluginOptions<SentryVitePluginOptions>;
 * ```
 *
 * @internal Only meant for Sentry-internal SDK usage.
 * @hidden
 */
export type UnstableVitePluginOptions<PluginOptionsType> = {
    /**
     * Options to be passed directly to the Sentry Vite Plugin (`@sentry/vite-plugin`) that ships with the Sentry SDK.
     * You can use this option to override any options the SDK passes to the Vite plugin.
     *
     * Please note that this option is unstable and may change in a breaking way in any release.
     */
    unstable_sentryVitePluginOptions?: PluginOptionsType;
};
/**
 * Utility type for adding Webpack plugin options to build-time configuration.
 * Use this type to extend your build-time options with Webpack-specific plugin configurations.
 *
 * @template PluginOptionsType - The type of Webpack plugin options to include
 *
 * @example
 * ```typescript
 * type SomeSDKsBuildOptions = BuildTimeOptionsBase & UnstableWebpackPluginOptions<SentryWebpackPluginOptions>;
 * ```
 *
 * @internal Only meant for Sentry-internal SDK usage.
 * @hidden
 */
export type UnstableWebpackPluginOptions<PluginOptionsType> = {
    /**
     * Options to be passed directly to the Sentry Webpack Plugin (`@sentry/webpack-plugin`) that ships with the Sentry SDK.
     * You can use this option to override any options the SDK passes to the Webpack plugin.
     *
     * Please note that this option is unstable and may change in a breaking way in any release.
     */
    unstable_sentryWebpackPluginOptions?: PluginOptionsType;
};
/**
 * Utility type for adding Rollup plugin options to build-time configuration.
 * Use this type to extend your build-time options with Rollup-specific plugin configurations.
 *
 * @template PluginOptionsType - The type of Rollup plugin options to include
 *
 * @example
 * ```typescript
 * type SomeSDKsBuildOptions = BuildTimeOptionsBase & UnstableRollupPluginOptions<SentryRollupPluginOptions>;
 * ```
 *
 * @internal Only meant for Sentry-internal SDK usage.
 * @hidden
 */
export type UnstableRollupPluginOptions<PluginOptionsType> = {
    /**
     * Options to be passed directly to the Sentry Rollup Plugin (`@sentry/rollup-plugin`) that ships with the Sentry SDK.
     * You can use this option to override any options the SDK passes to the Rollup plugin.
     *
     * Please note that this option is unstable and may change in a breaking way in any release.
     */
    unstable_sentryRollupPluginOptions?: PluginOptionsType;
};
interface SourceMapsOptions {
    /**
     * If this flag is `true`, any functionality related to source maps will be disabled. This includes the automatic upload of source maps.
     *
     * By default (`false`), the plugin automatically uploads source maps during a production build if a Sentry auth token is detected.
     *
     * If set to `"disable-upload"`, the plugin will not upload source maps to Sentry, but will inject debug IDs into the build artifacts.
     * This is useful if you want to manually upload source maps to Sentry at a later point in time.
     *
     * @default false
     */
    disable?: boolean | 'disable-upload';
    /**
     * A glob or an array of globs that specify the build artifacts and source maps that will be uploaded to Sentry.
     *
     * The globbing patterns must follow the implementation of the `glob` package: https://www.npmjs.com/package/glob#glob-primer
     *
     * If this option is not specified, the plugin will try to upload all JavaScript files and source map files that are created during build.
     * Use the `debug` option to print information about which files end up being uploaded.
     *
     */
    assets?: string | string[];
    /**
     * A glob or an array of globs that specifies which build artifacts should not be uploaded to Sentry.
     *
     * The globbing patterns must follow the implementation of the `glob` package: https://www.npmjs.com/package/glob#glob-primer
     *
     * Use the `debug` option to print information about which files end up being uploaded.
     *
     * @default []
     */
    ignore?: string | string[];
    /**
     * A glob or an array of globs that specifies the build artifacts that should be deleted after the artifact
     * upload to Sentry has been completed.
     *
     * The globbing patterns must follow the implementation of the `glob` package: https://www.npmjs.com/package/glob#glob-primer
     */
    filesToDeleteAfterUpload?: string | Array<string>;
    /**
     * Hook to rewrite the `sources` field inside the source map before being uploaded to Sentry. Does not modify the actual source map.
     *
     * The hook receives the following arguments:
     * - `source` - the source file path from the source map's `sources` field
     * - `map` - the source map object
     * - `context` - an optional object containing `mapDir`, the absolute path to the directory of the source map file
     *
     * Defaults to making all sources relative to `process.cwd()` while building.
     */
    rewriteSources?: (source: string, map: any, context?: {
        mapDir: string;
    }) => string;
}
type AutoSetCommitsOptions = {
    /**
     * Automatically sets `commit` and `previousCommit`. Sets `commit` to `HEAD`
     * and `previousCommit` as described in the option's documentation.
     *
     * If you set this to `true`, manually specified `commit` and `previousCommit`
     * options will be overridden. It is best to not specify them at all if you
     * set this option to `true`.
     */
    auto: true;
    repo?: undefined;
    commit?: undefined;
};
type ManualSetCommitsOptions = {
    auto?: false | undefined;
    /**
     * The full repo name as defined in Sentry.
     *
     * Required if the `auto` option is not set to `true`.
     */
    repo: string;
    /**
     * The current (last) commit in the release.
     *
     * Required if the `auto` option is not set to `true`.
     */
    commit: string;
};
interface ReleaseOptions {
    /**
     * Unique identifier for the release you want to create.
     *
     * This value can also be specified via the `SENTRY_RELEASE` environment variable.
     *
     * Defaults to automatically detecting a value for your environment.
     * This includes values for Cordova, Heroku, AWS CodeBuild, CircleCI, Xcode, and Gradle, and otherwise uses the git `HEAD`'s commit SHA
     * (the latter requires access to git CLI and for the root directory to be a valid repository).
     *
     * If no `name` is provided and the plugin can't automatically detect one, no release will be created.
     */
    name?: string;
    /**
     * Whether the plugin should inject release information into the build for the SDK to pick it up when sending events (recommended).
     *
     * @default true
     */
    inject?: boolean;
    /**
     * Whether to create a new release.
     *
     * Note that a release may still appear in Sentry even if this value is `false`. Any Sentry event that has a release value attached
     * will automatically create a release (for example, via the `inject` option).
     *
     * @default true
     */
    create?: boolean;
    /**
     * Whether to automatically finalize the release. The release is finalized by adding an end timestamp after the build ends.
     *
     * @default true
     */
    finalize?: boolean;
    /**
     * Unique distribution identifier for the release. Used to further segment the release.
     *
     * Usually your build number.
     */
    dist?: string;
    /**
     * Version control system (VCS) remote name.
     *
     * This value can also be specified via the `SENTRY_VSC_REMOTE` environment variable.
     *
     * @default "origin"
     */
    vcsRemote?: string;
    /**
     * Configuration for associating the release with its commits in Sentry.
     *
     * Set to `false` to disable commit association.
     *
     * @default { auto: true }
     */
    setCommits?: false | ((AutoSetCommitsOptions | ManualSetCommitsOptions) & {
        /**
         * The commit before the beginning of this release (in other words,
         * the last commit of the previous release).
         *
         * Defaults to the last commit of the previous release in Sentry.
         *
         * If there was no previous release, the last 10 commits will be used.
         */
        previousCommit?: string;
        /**
         * If the flag is to `true` and the previous release commit was not found
         * in the repository, the plugin creates a release with the default commits
         * count instead of failing the command.
         *
         * @default false
         */
        ignoreMissing?: boolean;
        /**
         * If this flag is set, the setCommits step will not fail and just exit
         * silently if no new commits for a given release have been found.
         *
         * @default false
         */
        ignoreEmpty?: boolean;
    });
    /**
     * Configuration for adding deployment information to the release in Sentry.
     *
     * Set to `false` to disable automatic deployment detection and creation.
     */
    deploy?: false | {
        /**
         * Environment for this release. Values that make sense here would
         * be `production` or `staging`.
         */
        env: string;
        /**
         * Deployment start time in Unix timestamp (in seconds) or ISO 8601 format.
         */
        started?: number | string;
        /**
         * Deployment finish time in Unix timestamp (in seconds) or ISO 8601 format.
         */
        finished?: number | string;
        /**
         * Deployment duration (in seconds). Can be used instead of started and finished.
         */
        time?: number;
        /**
         * Human-readable name for the deployment.
         */
        name?: string;
        /**
         * URL that points to the deployment.
         */
        url?: string;
    };
}
interface BundleSizeOptimizationsOptions {
    /**
     * Exclude debug statements from the bundle, thus disabling features like the SDK's `debug` option.
     *
     * If set to `true`, the Sentry SDK will attempt to tree-shake (remove) any debugging code within itself during the build.
     * Note that the success of this depends on tree shaking being enabled in your build tooling.
     *
     * @default false
     */
    excludeDebugStatements?: boolean;
    /**
     * Exclude tracing functionality from the bundle, thus disabling features like performance monitoring.
     *
     * If set to `true`, the Sentry SDK will attempt to tree-shake (remove) code within itself that is related to tracing and performance monitoring.
     * Note that the success of this depends on tree shaking being enabled in your build tooling.
     *
     * **Notice:** Do not enable this when you're using any performance monitoring-related SDK features (e.g. `Sentry.startTransaction()`).
  
     * @default false
     */
    excludeTracing?: boolean;
    /**
     * Exclude Replay Shadow DOM functionality from the bundle.
     *
     * If set to `true`, the Sentry SDK will attempt to tree-shake (remove) code related to the SDK's Session Replay Shadow DOM recording functionality.
     * Note that the success of this depends on tree shaking being enabled in your build tooling.
     *
     * This option is safe to be used when you do not want to capture any Shadow DOM activity via Sentry Session Replay.
     *
     * @default false
     */
    excludeReplayShadowDom?: boolean;
    /**
     * Exclude Replay iFrame functionality from the bundle.
     *
     * If set to `true`, the Sentry SDK will attempt to tree-shake (remove) code related to the SDK's Session Replay `iframe` recording functionality.
     * Note that the success of this depends on tree shaking being enabled in your build tooling.
     *
     * You can safely do this when you do not want to capture any `iframe` activity via Sentry Session Replay.
     *
     * @default false
     */
    excludeReplayIframe?: boolean;
    /**
     * Exclude Replay worker functionality from the bundle.
     *
     * If set to `true`, the Sentry SDK will attempt to tree-shake (remove) code related to the SDK's Session Replay's Compression Web Worker.
     * Note that the success of this depends on tree shaking being enabled in your build tooling.
     *
     * **Notice:** You should only use this option if you manually host a compression worker and configure it in your Sentry Session Replay integration config via the `workerUrl` option.
     *
     * @default false
     */
    excludeReplayWorker?: boolean;
}
export {};
//# sourceMappingURL=buildTimeOptionsBase.d.ts.map