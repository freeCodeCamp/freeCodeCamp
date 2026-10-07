declare class GraphemerHelper {
    /**
     * Check if the the character at the position {pos} of the string is surrogate
     * @param str {string}
     * @param pos {number}
     * @returns {boolean}
     */
    static isSurrogate(str: string, pos: number): boolean;
    /**
     * The String.prototype.codePointAt polyfill
     * Private function, gets a Unicode code point from a JavaScript UTF-16 string
     * handling surrogate pairs appropriately
     * @param str {string}
     * @param idx {number}
     * @returns {number}
     */
    static codePointAt(str: string, idx: number): number;
    /**
     * Private function, returns whether a break is allowed between the two given grapheme breaking classes
     * Implemented the UAX #29 3.1.1 Grapheme Cluster Boundary Rules on extended grapheme clusters
     * @param start {number}
     * @param mid {Array<number>}
     * @param end {number}
     * @param startEmoji {number}
     * @param midEmoji {Array<number>}
     * @param endEmoji {number}
     * @returns {number}
     */
    static shouldBreak(start: number, mid: number[], end: number, startEmoji: number, midEmoji: number[], endEmoji: number): number;
}
export default GraphemerHelper;
//# sourceMappingURL=GraphemerHelper.d.ts.map