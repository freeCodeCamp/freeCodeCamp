/**
 * GraphemerIterator
 *
 * Takes a string and a "BreakHandler" method during initialisation
 * and creates an iterable object that returns individual graphemes.
 *
 * @param str {string}
 * @return GraphemerIterator
 */
declare class GraphemerIterator implements Iterator<string> {
    private _index;
    private _str;
    private _nextBreak;
    constructor(str: string, nextBreak: (str: string, index: number) => number);
    [Symbol.iterator](): this;
    next(): {
        value: string;
        done: boolean;
    };
}
export default GraphemerIterator;
//# sourceMappingURL=GraphemerIterator.d.ts.map