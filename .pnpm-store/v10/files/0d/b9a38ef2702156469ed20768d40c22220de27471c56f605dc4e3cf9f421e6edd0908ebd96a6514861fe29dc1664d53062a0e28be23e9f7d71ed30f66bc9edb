/**
 * @public
 */
export declare type ApplyHook = (opts: ApplyHookOptions) => any;

/**
 * @public
 */
declare interface ApplyHookOptions extends HookOptions {
    args: any[];
}

declare const ApplyPathKey: unique symbol;

/**
 * @public
 */
export declare type GetHook = (opts: GetHookOptions) => any;

/**
 * @public
 */
declare interface GetHookOptions extends HookOptions {
}

declare interface HookOptions {
    name: string;
    continue: Symbol;
    nodeName: string | undefined;
    constructor: string | undefined;
    instance: WorkerInstance;
    window: Window;
}

declare const InstanceDataKey: unique symbol;

declare type InstanceId = string;

declare const InstanceIdKey: unique symbol;

declare const InstanceStateKey: unique symbol;

declare const NamespaceKey: unique symbol;

/**
 * https://partytown.builder.io/configuration
 *
 * @public
 */
export declare interface PartytownConfig {
    /**
     * The `resolveUrl()` hook can be used to modify the URL about to be
     * requested, which could be used to rewrite urls so they go through a proxy.
     *
     * https://partytown.builder.io/proxying-requests
     *
     * @param url - The URL to be resolved. This is a URL https://developer.mozilla.org/en-US/docs/Web/API/URL, not a string.
     * @param location - The current window location.
     * @param type - The type of resource the url is being resolved for. For example, `fetch` is the value when resolving for `fetch()`, and `a` would be the value when resolving for an anchor element's `href`.
     * @returns The returned value must be a URL interface, otherwise the default resolved URL is used.
     */
    resolveUrl?(url: URL, location: Location, type: ResolveUrlType): URL | undefined | null;
    /**
     * When set to `true`, Partytown scripts are not inlined and not minified.
     *
     * https://partytown.builder.io/debugging
     */
    debug?: boolean;
    /**
     * Many third-party scripts provide a global variable which user code calls
     * in order to send data to the service. For example, Google Tag Manager uses
     * a [Data Layer](https://developers.google.com/tag-manager/devguide) array,
     * and by pushing data to the array, the data is then sent on to GTM. Because
     * we're moving third-party scripts to a web worker, the main thread needs to
     * know which variables to patch first, and when Partytown loads, it can then
     * forward the event data on to the service.
     *
     * Below is an example of Google Tag Manager and Facebook Pixel:
     *
     * ```js
     * ['dataLayer.push', 'fbq']
     * ```
     *
     * https://partytown.builder.io/forwarding-events
     */
    forward?: PartytownForwardProperty[];
    mainWindowAccessors?: string[];
    /**
     * Rarely, a script will add a named function to the global scope with the
     * intent that other scripts can call the named function (like Adobe Launch).
     * Due to how Partytown scopes each script, these named functions do not get
     * added to `window`. The `globalFns` config can be used to manually ensure
     * each function is added to the global scope. Consider this an escape hatch
     * when a third-party script rudely pollutes `window` with functions.
     */
    globalFns?: string[];
    /**
     * This array can be used to filter which script are executed via
     * Partytown and which you would like to execute on the main thread.
     *
     * @example loadScriptsOnMainThread:['https://test.com/analytics.js', 'inline-script-id']
     * // Loads the `https://test.com/analytics.js` script on the main thread
     */
    loadScriptsOnMainThread?: string[];
    get?: GetHook;
    set?: SetHook;
    apply?: ApplyHook;
    /**
     * An absolute path to the root directory which Partytown library files
     * can be found. The library path must start and end with a `/`.
     * By default the files will load from the server's `/~partytown/` directory.
     * Note that the library path must be on the same origin as the html document,
     * and is also used as the `scope` of the Partytown service worker.
     */
    lib?: string;
    /**
     * Log method calls (debug mode required)
     */
    logCalls?: boolean;
    /**
     * Log getter calls (debug mode required)
     */
    logGetters?: boolean;
    /**
     * Log setter calls (debug mode required)
     */
    logSetters?: boolean;
    /**
     * Log Image() src requests (debug mode required)
     */
    logImageRequests?: boolean;
    /**
     * Log calls to main access, which also shows how many tasks were sent per message (debug mode required)
     */
    logMainAccess?: boolean;
    /**
     * Log script executions (debug mode required)
     */
    logScriptExecution?: boolean;
    /**
     * Log navigator.sendBeacon() requests (debug mode required)
     */
    logSendBeaconRequests?: boolean;
    /**
     * Log stack traces (debug mode required)
     */
    logStackTraces?: boolean;
    /**
     * Path to the service worker file. Defaults to `partytown-sw.js`.
     */
    swPath?: string;
}

/**
 * A foward property to patch on `window`. The foward config property is an string,
 * representing the call to forward, such as `dataLayer.push` or `fbq`.
 *
 * https://partytown.builder.io/forwarding-events
 *
 * @public
 */
export declare type PartytownForwardProperty = string;

/**
 * Function that returns the Partytown snippet as a string, which can be
 * used as the innerHTML of the inlined Partytown script in the head.
 *
 * @public
 */
export declare const partytownSnippet: (config?: PartytownConfig | undefined) => string;

/**
 * @public
 */
export declare type ResolveUrlType = 'fetch' | 'xhr' | 'script' | 'iframe' | 'image';

/**
 * The `type` attribute for Partytown scripts, which does two things:
 *
 * 1. Prevents the `<script>` from executing on the main thread.
 * 2. Is used as a selector so the Partytown library can find all scripts to execute in a web worker.
 *
 * @public
 */
export declare const SCRIPT_TYPE = "text/partytown";

/**
 * @public
 */
export declare type SetHook = (opts: SetHookOptions) => any;

/**
 * @public
 */
declare interface SetHookOptions extends HookOptions {
    value: any;
    prevent: Symbol;
}

declare type WinId = string;

declare const WinIdKey: unique symbol;

declare interface WorkerInstance {
    [WinIdKey]: WinId;
    [InstanceIdKey]: InstanceId;
    [ApplyPathKey]: string[];
    [InstanceDataKey]: string | undefined;
    [NamespaceKey]: string | undefined;
    [InstanceStateKey]: {
        [key: string]: any;
    };
}

export { }
