import type { Event } from './types/event';
import type { StackParser } from './types/stacktrace';
/**
 * Builds a map of filenames to module metadata from the global _sentryModuleMetadata object.
 * This is useful for forwarding metadata from web workers to the main thread.
 *
 * @param parser - Stack parser to use for extracting filenames from stack traces
 * @returns A map of filename to metadata object
 */
export declare function getFilenameToMetadataMap(parser: StackParser): Record<string, any>;
/**
 * Retrieve metadata for a specific JavaScript file URL.
 *
 * Metadata is injected by the Sentry bundler plugins using the `_experiments.moduleMetadata` config option.
 */
export declare function getMetadataForUrl(parser: StackParser, filename: string): any | undefined;
/**
 * Adds metadata to stack frames.
 *
 * Metadata is injected by the Sentry bundler plugins using the `_experiments.moduleMetadata` config option.
 */
export declare function addMetadataToStackFrames(parser: StackParser, event: Event): void;
/**
 * Strips metadata from stack frames.
 */
export declare function stripMetadataFromStackFrames(event: Event): void;
//# sourceMappingURL=metadata.d.ts.map