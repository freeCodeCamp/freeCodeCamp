import type { SourceMapSegment, ReverseSegment } from './sourcemap-segment.cts';
export type MemoState = {
    lastKey: number;
    lastNeedle: number;
    lastIndex: number;
};
export declare let found: boolean;
/**
 * A binary search implementation that returns the index if a match is found.
 * If no match is found, then the left-index (the index associated with the item that comes just
 * before the desired index) is returned. To maintain proper sort order, a splice would happen at
 * the next index:
 *
 * ```js
 * const array = [1, 3];
 * const needle = 2;
 * const index = binarySearch(array, needle, (item, needle) => item - needle);
 *
 * assert.equal(index, 0);
 * array.splice(index + 1, 0, needle);
 * assert.deepEqual(array, [1, 2, 3]);
 * ```
 */
export declare function binarySearch(haystack: SourceMapSegment[] | ReverseSegment[], needle: number, low: number, high: number): number;
export declare function upperBound(haystack: SourceMapSegment[] | ReverseSegment[], needle: number, index: number): number;
export declare function lowerBound(haystack: SourceMapSegment[] | ReverseSegment[], needle: number, index: number): number;
export declare function memoizedState(): MemoState;
/**
 * This overly complicated beast is just to record the last tested line/column and the resulting
 * index, allowing us to skip a few tests if mappings are monotonically increasing.
 */
export declare function memoizedBinarySearch(haystack: SourceMapSegment[] | ReverseSegment[], needle: number, state: MemoState, key: number): number;
//# sourceMappingURL=binary-search.d.ts.map