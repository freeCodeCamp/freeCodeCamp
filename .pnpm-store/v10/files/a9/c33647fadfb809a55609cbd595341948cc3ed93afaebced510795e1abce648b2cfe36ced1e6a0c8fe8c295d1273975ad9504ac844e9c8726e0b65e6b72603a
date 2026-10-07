import * as Filesystem from "./filesystem";
import * as MappingEntry from "./mapping-entry";
/**
 * Function that can match a path
 */
export interface MatchPath {
    (requestedModule: string, readJson?: Filesystem.ReadJsonSync, fileExists?: (name: string) => boolean, extensions?: ReadonlyArray<string>): string | undefined;
}
/**
 * Creates a function that can resolve paths according to tsconfig paths property.
 * @param absoluteBaseUrl Absolute version of baseUrl as specified in tsconfig.
 * @param paths The paths as specified in tsconfig.
 * @param mainFields A list of package.json field names to try when resolving module files.
 * @param addMatchAll Add a match-all "*" rule if none is present
 * @returns a function that can resolve paths.
 */
export declare function createMatchPath(absoluteBaseUrl: string, paths: {
    [key: string]: Array<string>;
}, mainFields?: string[], addMatchAll?: boolean): MatchPath;
/**
 * Finds a path from tsconfig that matches a module load request.
 * @param absolutePathMappings The paths to try as specified in tsconfig but resolved to absolute form.
 * @param requestedModule The required module name.
 * @param readJson Function that can read json from a path (useful for testing).
 * @param fileExists Function that checks for existence of a file at a path (useful for testing).
 * @param extensions File extensions to probe for (useful for testing).
 * @param mainFields A list of package.json field names to try when resolving module files.
 * @returns the found path, or undefined if no path was found.
 */
export declare function matchFromAbsolutePaths(absolutePathMappings: ReadonlyArray<MappingEntry.MappingEntry>, requestedModule: string, readJson?: Filesystem.ReadJsonSync, fileExists?: Filesystem.FileExistsSync, extensions?: Array<string>, mainFields?: string[]): string | undefined;
