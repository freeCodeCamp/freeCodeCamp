/**
 * Tracks newlines during parsing in order to provide an efficient API for
 * determining the one-indexed `{ line, col }` position for any offset
 * within the input.
 */
export declare class LineCounter {
    lineStarts: number[];
    /**
     * Should be called in ascending order. Otherwise, call
     * `lineCounter.lineStarts.sort()` before calling `linePos()`.
     */
    addNewLine: (offset: number) => number;
    /**
     * Performs a binary search and returns the 1-indexed { line, col }
     * position of `offset`. If `line === 0`, `addNewLine` has never been
     * called or `offset` is before the first known newline.
     */
    linePos: (offset: number) => {
        line: number;
        col: number;
    };
}
