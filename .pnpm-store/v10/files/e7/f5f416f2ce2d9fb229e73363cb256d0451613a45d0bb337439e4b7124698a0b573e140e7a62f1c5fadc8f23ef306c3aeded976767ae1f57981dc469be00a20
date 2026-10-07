import type { DebugImage } from '../types/debugMeta';
import type { StackParser } from '../types/stacktrace';
/**
 * Clears the cached debug ID mappings.
 * Useful for testing or when the global debug ID state changes.
 */
export declare function clearDebugIdCache(): void;
/**
 * Returns a map of filenames to debug identifiers.
 * Supports both proprietary _sentryDebugIds and native _debugIds (e.g., from Vercel) formats.
 */
export declare function getFilenameToDebugIdMap(stackParser: StackParser): Record<string, string>;
/**
 * Returns a list of debug images for the given resources.
 */
export declare function getDebugImagesForResources(stackParser: StackParser, resource_paths: ReadonlyArray<string>): DebugImage[];
//# sourceMappingURL=debug-ids.d.ts.map