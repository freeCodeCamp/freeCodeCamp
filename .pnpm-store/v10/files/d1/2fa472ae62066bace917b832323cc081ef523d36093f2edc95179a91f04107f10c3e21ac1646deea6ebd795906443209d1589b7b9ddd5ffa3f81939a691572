export interface MappingEntry {
    readonly pattern: string;
    readonly paths: ReadonlyArray<string>;
}
export interface Paths {
    readonly [key: string]: ReadonlyArray<string>;
}
/**
 * Converts an absolute baseUrl and paths to an array of absolute mapping entries.
 * The array is sorted by longest prefix.
 * Having an array with entries allows us to keep a sorting order rather than
 * sort by keys each time we use the mappings.
 * @param absoluteBaseUrl
 * @param paths
 * @param addMatchAll
 */
export declare function getAbsoluteMappingEntries(absoluteBaseUrl: string, paths: Paths, addMatchAll: boolean): ReadonlyArray<MappingEntry>;
