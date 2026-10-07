import type reporter from "gatsby-cli/lib/reporter";
import type { TrailingSlash } from "gatsby-page-utils";
import type { IHeader, HttpStatusCode } from "../../redux/types";
import type { ImageCdnUrlGeneratorFn, ImageCdnSourceImage, ImageCdnTransformArgs, FileCdnUrlGeneratorFn, FileCdnSourceImage } from "gatsby-plugin-utils/dist/polyfill-remote-file/types";
export type { ImageCdnUrlGeneratorFn, ImageCdnSourceImage, ImageCdnTransformArgs, FileCdnUrlGeneratorFn, FileCdnSourceImage, };
interface IBaseRoute {
    /**
     * Request path that should be matched for this route.
     * It can be:
     *  - static: `/about/`
     *  - dynamic:
     *    - parameterized: `/blog/:slug/`
     *    - catch-all / wildcard: `/app/*`
     */
    path: string;
}
export interface IStaticRoute extends IBaseRoute {
    type: `static`;
    /**
     * Location of the file that should be served for this route.
     */
    filePath: string;
    /**
     * HTTP headers that should be set for this route.
     * @see http://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/headers/
     */
    headers: IHeader["headers"];
}
export interface IFunctionRoute extends IBaseRoute {
    type: `function`;
    /**
     * Unique identifier of this function. Corresponds to the `functionId` inside the `functionsManifest`.
     * Some functions will be shared for multiple routes, e.g. SSR or DSG functions.
     */
    functionId: string;
    /**
     * If `cache` is true, response of function should be cached for current deployment and served on subsequent requests for this route.
     */
    cache?: true;
}
/**
 * Redirects are being created through the `createRedirect` action.
 * @see https://www.gatsbyjs.com/docs/reference/config-files/actions/#createRedirect
 */
export interface IRedirectRoute extends IBaseRoute {
    type: `redirect`;
    /**
     * The redirect should happen from `path` to `toPath`.
     */
    toPath: string;
    /**
     * HTTP status code that should be used for this redirect.
     */
    status: HttpStatusCode;
    ignoreCase?: boolean;
    /**
     * HTTP headers that should be used for this redirect.
     * @see http://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/headers/
     */
    headers: IHeader["headers"];
    [key: string]: unknown;
}
export type Route = IStaticRoute | IFunctionRoute | IRedirectRoute;
export type RoutesManifest = Array<Route>;
export interface IHeaderRoute extends IBaseRoute {
    headers: IHeader["headers"];
}
export type HeaderRoutes = Array<IHeaderRoute>;
export interface IFunctionDefinition {
    /**
     * Unique identifier of this function. Corresponds to the `functionId` inside the `routesManifest`.
     */
    functionId: string;
    /**
     * Unique name of this function. Use this as a display name for the function.
     */
    name: string;
    /**
     * Path to function entrypoint that will be used to create function
     */
    pathToEntryPoint: string;
    /**
     * List of all required files that this function needs to run
     */
    requiredFiles: Array<string>;
}
export type FunctionsManifest = Array<IFunctionDefinition>;
interface IDefaultContext {
    /**
     * Reporter instance that can be used to log messages to terminal
     * @see https://www.gatsbyjs.com/docs/reference/config-files/node-api-helpers/#reporter
     */
    reporter: typeof reporter;
}
export type RemoteFileAllowedUrls = Array<{
    /**
     * Allowed url in URLPattern format. In particular it uses wildcard `*` and param `:param` syntax.
     */
    urlPattern: string;
    /**
     *Allowed url in regex source format
     */
    regexSource: string;
}>;
export interface IAdaptContext extends IDefaultContext {
    routesManifest: RoutesManifest;
    functionsManifest: FunctionsManifest;
    headerRoutes: HeaderRoutes;
    /**
     * @see https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/#pathprefix
     */
    pathPrefix: string;
    /**
     * @see https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/#trailingslash
     */
    trailingSlash: TrailingSlash;
    /**
     * List of allowed remote file URLs represented in URLPattern and Regex formats.
     * Allowed urls are provided by user or plugins using `addRemoteFileAllowedUrl` action.
     * @see https://www.gatsbyjs.com/docs/reference/config-files/actions/#addRemoteFileAllowedUrl
     */
    remoteFileAllowedUrls: RemoteFileAllowedUrls;
}
export interface ICacheContext extends IDefaultContext {
    directories: Array<string>;
}
export interface IAdapterConfig {
    /**
     * URL representing the unique URL for an individual deploy
     */
    deployURL?: string;
    /**
     * If `true`, Gatsby will not include the LMDB datastore in the serverless functions used for SSR/DSG.
     * Instead, it will try to download the datastore from the given `deployURL`.
     */
    excludeDatastoreFromEngineFunction?: boolean;
    /**
     * Adapters can optionally describe which features they support to prevent potentially faulty deployments
     */
    supports?: {
        /**
         * If `false`, Gatsby will fail the build if user tries to use pathPrefix.
         */
        pathPrefix?: boolean;
        /**
         * Provide array of supported traling slash options
         * @example [`always`]
         */
        trailingSlash?: Array<TrailingSlash>;
    };
    /**
     * List of plugins that should be disabled when using this adapter. Purpose of this is to disable
     * any potential plugins that serve similar role as adapter that would cause conflicts when both
     * plugin and adapter is used at the same time.
     */
    pluginsToDisable?: Array<string>;
    /**
     * Path to a CommonJS module that implements an image CDN URL generation function. The function
     * is used to optimize image delivery by generating URLs that leverage CDN capabilities. This module
     * should have a default export function that conforms to the {@link ImageCdnUrlGeneratorFn} type:
     *
     * Adapters should provide an absolute path to this module.
     * See 'packages/gatsby-adapter-netlify/src/image-cdn-url-generator.ts' as an implementation
     * example for the Netlify adapter.
     */
    imageCDNUrlGeneratorModulePath?: string;
    /**
     * Path to a CommonJS module that implements an file CDN URL generation function. This module
     * should have a default export function that conforms to the {@link FileCdnUrlGeneratorFn} type:
     *
     * Adapters should provide an absolute path to this module.
     * See 'packages/gatsby-adapter-netlify/src/file-cdn-url-generator.ts' as an implementation
     * example for the Netlify adapter.
     */
    fileCDNUrlGeneratorModulePath?: string;
    /**
     * The platform bundled functions will execute on. Usually should be `linux`.
     * This will be used if user didn't specify `GATSBY_FUNCTIONS_PLATFORM` environment variable
     * or used `-functions-platform` CLI toggle. If none is defined current platform (process.platform) will be used.
     */
    functionsPlatform?: string;
    /**
     * The architecture bundled functions will execute on. Usually should be `x64`.
     * This will be used if user didn't specify `GATSBY_FUNCTIONS_ARCH` environment variable
     * or used `-functions-arch` CLI toggle. If none is defined current arch (process.arch) will be used.
     */
    functionsArch?: string;
}
type WithRequired<T, K extends keyof T> = T & {
    [P in K]-?: T[P];
};
/**
 * This is the internal version of "IAdapterConfig" to enforce that certain keys must be present.
 * Authors of adapters will only see "IAdapterConfig".
 */
export type IAdapterFinalConfig = WithRequired<IAdapterConfig, "excludeDatastoreFromEngineFunction" | "pluginsToDisable">;
export interface IAdapter {
    /**
     * Unique name of the adapter. Used to identify adapter in manifest.
     */
    name: string;
    cache?: {
        /**
         * Hook to restore `directories` from previous builds. This is executed very early on in the build process. If `false` is returned Gatsby will skip its cache restoration.
         */
        restore: (context: ICacheContext) => Promise<boolean | void> | boolean | void;
        /**
         * Hook to store `directories` for the current build. Executed as one of the last steps in the build process.
         */
        store: (context: ICacheContext) => Promise<void> | void;
    };
    /**
     * Hook to take Gatsby’s output and preparing it for deployment on the adapter’s platform. Executed as one of the last steps in the build process.
     *
     * The `adapt` hook should do the following things:
     * - Apply HTTP headers to assets
     * - Apply redirects and rewrites. The adapter should can also create its own redirects/rewrites if necessary (e.g. mapping serverless functions to internal URLs).
     * - Wrap serverless functions coming from Gatsby with platform-specific code (if necessary). Gatsby will produce [Express-like](https://expressjs.com/) handlers.
     * - Apply trailing slash behavior and path prefix to URLs
     * - Possibly upload assets to CDN
     *
     * @see http://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/creating-an-adapter/
     */
    adapt: (context: IAdaptContext) => Promise<void> | void;
    /**
     * Hook to pass information from the adapter to Gatsby. You must return an object with a predefined shape.
     * Gatsby uses this information to adjust its build process. The information can be e.g. things that are only known once the project is deployed.
     *
     * This hook can enable advanced feature of adapters and it is not required to implement it.
     *
     * @see http://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/creating-an-adapter/
     */
    config?: (context: IDefaultContext) => Promise<IAdapterConfig> | IAdapterConfig;
}
/**
 * Adapter initialization function that returns an instance of the adapter.
 * @see http://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/creating-an-adapter/
 */
export type AdapterInit<T = Record<string, unknown>> = (adapterOptions?: T) => IAdapter;
export interface IAdapterManager {
    restoreCache: () => Promise<void> | void;
    storeCache: () => Promise<void> | void;
    adapt: () => Promise<void> | void;
    config: () => Promise<IAdapterFinalConfig>;
}
/**
 * Types for gatsby/adapters.js
 * @see http://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/zero-configuration-deployments/
 */
export interface IAdapterManifestEntry {
    /**
     * Name of the adapter
     */
    name: string;
    /**
     * Test function to determine if adapter should be used
     */
    test: () => boolean;
    /**
     * npm module name of the adapter
     */
    module: string;
    /**
     * List of version pairs that are supported by the adapter.
     * This allows to have multiple versions of the adapter for different versions of Gatsby.
     * This is useful for when APIs change or bugs are fixed that require different implementations.
     */
    versions: Array<{
        /**
         * Version of the `gatsby` package. This is a semver range.
         */
        gatsbyVersion: string;
        /**
         * Version of the adapter. This is a semver range.
         */
        moduleVersion: string;
        /**
         * Can override the module defined in the parent manifest entry - useful for when the adapter is renamed.
         */
        module?: string;
    }>;
}
