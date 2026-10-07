import * as MappingEntry from "./mapping-entry";
import * as Filesystem from "./filesystem";
/**
 * Function that can match a path async
 */
export interface MatchPathAsync {
    (requestedModule: string, readJson: Filesystem.ReadJsonAsync | undefined, fileExists: Filesystem.FileExistsAsync | undefined, extensions: ReadonlyArray<string> | undefined, callback: MatchPathAsyncCallback): void;
}
export interface MatchPathAsyncCallback {
    (err?: Error, path?: string): void;
}
/**
 * See the sync version for docs.
 */
export declare function createMatchPathAsync(absoluteBaseUrl: string, paths: {
    [key: string]: Array<string>;
}, mainFields?: string[], addMatchAll?: boolean): MatchPathAsync;
/**
 * See the sync version for docs.
 */
export declare function matchFromAbsolutePathsAsync(absolutePathMappings: ReadonlyArray<MappingEntry.MappingEntry>, requestedModule: string, readJson: Filesystem.ReadJsonAsync | undefined, fileExists: Filesystem.FileExistsAsync | undefined, extensions: readonly string[] | undefined, callback: MatchPathAsyncCallback, mainFields?: string[]): void;
