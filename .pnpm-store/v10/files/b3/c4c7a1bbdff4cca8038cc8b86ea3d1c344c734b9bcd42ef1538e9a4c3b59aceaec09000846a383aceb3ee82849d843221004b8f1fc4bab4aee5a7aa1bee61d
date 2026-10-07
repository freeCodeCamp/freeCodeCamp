export declare function _resetHasWarned(): void;
type BrowserVersion = {
    browser: string;
    version: string;
    release_date?: string;
    engine?: string;
    engine_version?: string;
};
interface AllBrowsersBrowserVersion extends BrowserVersion {
    year: number | string;
    supports?: string;
    wa_compatible?: boolean;
}
type NestedBrowserVersions = {
    [browser: string]: {
        [version: string]: AllBrowsersBrowserVersion;
    };
};
type Options = {
    /**
     * Whether to include only the minimum compatible browser versions or all compatible versions.
     * Defaults to `false`.
     */
    listAllCompatibleVersions?: boolean;
    /**
     * Whether to include browsers that use the same engines as a core Baseline browser.
     * Defaults to `false`.
     */
    includeDownstreamBrowsers?: boolean;
    /**
     * Pass a date in the format 'YYYY-MM-DD' to get versions compatible with Widely available on the specified date.
     * If left undefined and a `targetYear` is not passed, defaults to Widely available as of the current date.
     * > NOTE: cannot be used with `targetYear`.
     */
    widelyAvailableOnDate?: string | number;
    /**
     * Pass a year between 2015 and the current year to get browser versions compatible with all
     * Newly Available features as of the end of the year specified.
     * > NOTE: cannot be used with `widelyAvailableOnDate`.
     */
    targetYear?: number;
    /**
     * Pass a boolean that determines whether KaiOS is included in browser mappings.  KaiOS implements
     * the Gecko engine used in Firefox.  However, KaiOS also has a different interaction paradigm to
     * other browsers and requires extra consideration beyond simple feature compatibility to provide
     * an optimal user experience.  Defaults to `false`.
     */
    includeKaiOS?: boolean;
    overrideLastUpdated?: number;
    /**
     * Pass a boolean to suppress the warning about stale data.
     * Defaults to `false`.
     */
    suppressWarnings?: boolean;
};
/**
 * Returns browser versions compatible with specified Baseline targets.
 * Defaults to returning the minimum versions of the core browser set that support Baseline Widely available.
 * Takes an optional configuration `Object` with four optional properties:
 * - `listAllCompatibleVersions`: `false` (default) or `true`
 * - `includeDownstreamBrowsers`: `false` (default) or `true`
 * - `widelyAvailableOnDate`: date in format `YYYY-MM-DD`
 * - `targetYear`: year in format `YYYY`
 * - `supressWarnings`: `false` (default) or `true`
 */
export declare function getCompatibleVersions(userOptions?: Options): BrowserVersion[];
type AllVersionsOptions = {
    /**
     * Whether to return the output as a JavaScript `Array` (`"array"`), `Object` (`"object"`) or a CSV string (`"csv"`).
     * Defaults to `"array"`.
     */
    outputFormat?: string;
    /**
     * Whether to include browsers that use the same engines as a core Baseline browser.
     * Defaults to `false`.
     */
    includeDownstreamBrowsers?: boolean;
    /**
     * Whether to use the new "supports" property in place of "wa_compatible"
     * Defaults to `false`
     */
    useSupports?: boolean;
    /**
     * Whether to include KaiOS in the output. KaiOS implements the Gecko engine used in Firefox.
     * However, KaiOS also has a different interaction paradigm to other browsers and requires extra
     * consideration beyond simple feature compatibility to provide an optimal user experience.
     */
    includeKaiOS?: boolean;
    /**
     * Pass a boolean to suppress the warning about old data.
     * Defaults to `false`.
     */
    suppressWarnings?: boolean;
};
/**
 * Returns all browser versions known to this module with their level of Baseline support as a JavaScript `Array` (`"array"`), `Object` (`"object"`) or a CSV string (`"csv"`).
 * Takes an optional configuration `Object` with three optional properties:
 * - `includeDownstreamBrowsers`: `false` (default) or `true`
 * - `outputFormat`: `"array"` (default), `"object"` or `"csv"`
 * - `useSupports`: `false` (default) or `true`, replaces `wa_compatible` property with optional `supports` property which returns `widely` or `newly` available when present.
 * - `supressWarnings`: `false` (default) or `true`
 */
export declare function getAllVersions(userOptions?: AllVersionsOptions): AllBrowsersBrowserVersion[] | NestedBrowserVersions | string;
export {};
