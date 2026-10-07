import type { CanonicalPath } from '../create-program/shared';
import type { TSESTreeOptions } from '../parser-options';
export declare function clearGlobCache(): void;
/**
 * Normalizes, sanitizes, resolves and filters the provided project paths
 */
export declare function resolveProjectList(options: Readonly<{
    cacheLifetime?: TSESTreeOptions['cacheLifetime'];
    project: string[] | null;
    projectFolderIgnoreList: TSESTreeOptions['projectFolderIgnoreList'];
    singleRun: boolean;
    tsconfigRootDir: string;
}>): ReadonlyMap<CanonicalPath, string>;
/**
 * Exported for testing purposes only
 * @internal
 */
export declare function clearGlobResolutionCache(): void;
