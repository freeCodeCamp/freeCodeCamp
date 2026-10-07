// Type definitions for range-parser 1.2
// Project: https://github.com/jshttp/range-parser
// Definitions by: Tomek Łaziuk <https://github.com/tlaziuk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * When ranges are returned, the array has a "type" property which is the type of
 * range that is required (most commonly, "bytes"). Each array element is an object
 * with a "start" and "end" property for the portion of the range.
 *
 * @returns `-1` when unsatisfiable and `-2` when syntactically invalid, ranges otherwise.
 */
declare function RangeParser(
    size: number,
    str: string,
    options?: RangeParser.Options,
): RangeParser.Result | RangeParser.Ranges;

declare namespace RangeParser {
    interface Ranges extends Array<Range> {
        type: string;
    }
    interface Range {
        start: number;
        end: number;
    }
    interface Options {
        /**
         * The "combine" option can be set to `true` and overlapping & adjacent ranges
         * will be combined into a single range.
         */
        combine?: boolean | undefined;
    }
    type ResultUnsatisfiable = -1;
    type ResultInvalid = -2;
    type Result = ResultUnsatisfiable | ResultInvalid;
}

export = RangeParser;
