import { MappingEntry } from "./mapping-entry";
export interface TryPath {
    readonly type: "file" | "extension" | "index" | "package";
    readonly path: string;
}
/**
 * Builds a list of all physical paths to try by:
 * 1. Check for file named exactly as request.
 * 2. Check for files named as request ending in any of the extensions.
 * 3. Check for file specified in package.json's main property.
 * 4. Check for files named as request ending in "index" with any of the extensions.
 */
export declare function getPathsToTry(extensions: ReadonlyArray<string>, absolutePathMappings: ReadonlyArray<MappingEntry>, requestedModule: string): ReadonlyArray<TryPath> | undefined;
export declare function getStrippedPath(tryPath: TryPath): string;
export declare function exhaustiveTypeException(check: never): never;
