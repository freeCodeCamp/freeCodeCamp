import GraphemerIterator from './GraphemerIterator';
export default class Graphemer {
    /**
     * Returns the next grapheme break in the string after the given index
     * @param string {string}
     * @param index {number}
     * @returns {number}
     */
    static nextBreak(string: string, index: number): number;
    /**
     * Breaks the given string into an array of grapheme clusters
     * @param str {string}
     * @returns {string[]}
     */
    splitGraphemes(str: string): string[];
    /**
     * Returns an iterator of grapheme clusters in the given string
     * @param str {string}
     * @returns {GraphemerIterator}
     */
    iterateGraphemes(str: string): GraphemerIterator;
    /**
     * Returns the number of grapheme clusters in the given string
     * @param str {string}
     * @returns {number}
     */
    countGraphemes(str: string): number;
    /**
     * Given a Unicode code point, determines this symbol's grapheme break property
     * @param code {number} Unicode code point
     * @returns {number}
     */
    static getGraphemeBreakProperty(code: number): number;
    /**
     * Given a Unicode code point, returns if symbol is an extended pictographic or some other break
     * @param code {number} Unicode code point
     * @returns {number}
     */
    static getEmojiProperty(code: number): number;
}
//# sourceMappingURL=Graphemer.d.ts.map