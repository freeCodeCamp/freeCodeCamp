import { Hashable } from './hasher';
declare namespace objectSorter {
    /**
     * Advanced coerce options
     */
    interface CoerceOptions {
        /**
         * If `true` converts booleans to string `1` and `0`
         * @example
         * // coerce.boolean = true
         * true === 1;
         * false === '0';
         * @example
         * // coerce.boolean = true
         * true !== 1;
         * false !== '0'
         * @default true
         */
        boolean?: boolean;
        /**
         * If `true` converts numbers to strings
         * @example
         * // coerce.number = true
         * 1 === '1';
         * @example
         * // coerce.number = false
         * 1 !== '1';
         * @default true
         */
        number?: boolean;
        /**
         * If `true` converts BigInt to string
         * @example
         * // coerce.bigint = true
         * 1n === '1';
         * @example
         * // coerce.bigint = false
         * 1n !== '1';
         * @default true
         */
        bigint?: boolean;
        /**
         * If `true` strings and coerced string will be equal to coerced numbers, booleans, etc
         * @example
         * // coerce.string = true
         * '1' === true
         * @example
         * // coerce.string = false
         * '1' !== 1
         * @default true
         */
        string?: boolean;
        /**
         * If `true` undefined will be equal to empty string
         * @example
         * // coerce.undefined = true
         * undefined === ''
         * @example
         * // coerce.undefined = false
         * undefined !== ''
         * @default true
         */
        undefined?: boolean;
        /**
         * If `true` null will be equal to empty string
         * @example
         * // coerce.null = true
         * null === ''
         * @example
         * // coerce.null = false
         * null !== ''
         * @default true
         */
        null?: boolean;
        /**
         * If `true` all symbols will have eual representation
         * @example
         * // coerce.symbol = true
         * Symbol.for('a') === Symbol.for('b')
         * @example
         * // coerce.symbol = false
         * Symbol.for('a') !== Symbol.for('b')
         * @default true
         */
        symbol?: boolean;
        /**
         * If `true` functions may equal the same formatted strings
         * @example
         * // coerce.function = true
         * @example
         * // coerce.function = false
         * @default true
         */
        function?: boolean;
        /**
         * If `true` dates may equal the same formatted strings
         * @example
         * // coerce.date = true
         * @example
         * // coerce.date = false
         * @default true
         */
        date?: boolean;
        /**
         * If `true` set will be coerced to array
         * @example
         * // coerce.set = true
         * @example
         * // coerce.set = false
         * @default true
         */
        set?: boolean;
    }
    /**
     * Advanced sort options
     */
    interface SortOptions {
        /**
         * If `true` sort array entries before hash
         */
        array?: boolean;
        /**
         * If `true` sort TypedArray entries before hash
         */
        typedArray?: boolean;
        /**
         * If `true` sort object entries before hash
         */
        object?: boolean;
        /**
         * If `true` sort set entries before hash
         */
        set?: boolean;
        /**
         * If `true` sort map entries before hash
         */
        map?: boolean;
        /**
         * If `true` sort BigInt entries before hash
         */
        bigint?: boolean;
    }
    /**
     * Advanced trim options
     */
    interface TrimOptions {
        /**
         * If `true` replaces multiple space with one and trims whitespaces in strings
         */
        string?: boolean;
        /**
         * If `true` replaces multiple space with one and trims whitespaces in function body
         */
        function?: boolean;
    }
    /**
     * Object sorter options
     */
    interface SorterOptions {
        /**
         * If `true` enables type coercion.
         * Advanced coerce options could be provided as object
         * @default true
         */
        coerce?: boolean | CoerceOptions;
        /**
         * If `true` enables sorting.
         * Advanced sorting options could be provided as object
         * @default true
         */
        sort?: boolean | SortOptions;
        /**
         * If `true` enables trimming and multiple whitespace replacement.
         * Advanced sorting options could be provided as object.
         * @default false
         */
        trim?: boolean | TrimOptions;
    }
    type StringifyFn = (obj: Hashable | any) => string;
}
/**
 * Object sorter consturctor
 * @param options object transformation options
 * @return function that transforms object to strings
 */
declare function objectSorter(options?: objectSorter.SorterOptions): objectSorter.StringifyFn;
export = objectSorter;
//# sourceMappingURL=objectSorter.d.ts.map