import { Event, StackFrame } from '@sentry/core';
export declare const MAX_CONTEXTLINES_COLNO: number;
export declare const MAX_CONTEXTLINES_LINENO: number;
interface ContextLinesOptions {
    /**
     * Sets the number of context lines for each frame when loading a file.
     * Defaults to 7.
     *
     * Set to 0 to disable loading and inclusion of source files.
     **/
    frameContextLines?: number;
}
/**
 * Exported for testing purposes.
 */
export declare function resetFileContentCache(): void;
/**
 * Resolves context lines before and after the given line number and appends them to the frame;
 */
export declare function addContextToFrame(lineno: number, frame: StackFrame, contextLines: number, contents: Record<number, string> | undefined): void;
/** Exported only for tests, as a type-safe variant. */
export declare const _contextLinesIntegration: (options?: ContextLinesOptions) => {
    name: string;
    processEvent(event: Event): Promise<Event>;
};
/**
 * Capture the lines before and after the frame's context.
 */
export declare const contextLinesIntegration: (options?: ContextLinesOptions | undefined) => import("@sentry/core").Integration;
export {};
//# sourceMappingURL=contextlines.d.ts.map
