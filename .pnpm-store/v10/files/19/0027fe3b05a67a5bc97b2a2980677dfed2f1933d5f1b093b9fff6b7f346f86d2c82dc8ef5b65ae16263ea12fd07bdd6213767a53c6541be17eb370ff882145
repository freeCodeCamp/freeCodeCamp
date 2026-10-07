// Interface declaration for Float16Array, required in @types/node v24+.
// These definitions are specific to TS <=5.6.

// This needs all of the "common" properties/methods of the TypedArrays,
// otherwise the type unions `TypedArray` and `ArrayBufferView` will be
// empty objects.
interface Float16Array extends Pick<Float32Array, typeof Symbol.iterator | "entries" | "keys" | "values"> {
    readonly BYTES_PER_ELEMENT: number;
    readonly buffer: ArrayBufferLike;
    readonly byteLength: number;
    readonly byteOffset: number;
    readonly length: number;
    readonly [Symbol.toStringTag]: "Float16Array";
    at(index: number): number | undefined;
    copyWithin(target: number, start: number, end?: number): this;
    every(predicate: (value: number, index: number, array: Float16Array) => unknown, thisArg?: any): boolean;
    fill(value: number, start?: number, end?: number): this;
    filter(predicate: (value: number, index: number, array: Float16Array) => any, thisArg?: any): Float16Array;
    find(predicate: (value: number, index: number, obj: Float16Array) => boolean, thisArg?: any): number | undefined;
    findIndex(predicate: (value: number, index: number, obj: Float16Array) => boolean, thisArg?: any): number;
    findLast<S extends number>(
        predicate: (value: number, index: number, array: Float16Array) => value is S,
        thisArg?: any,
    ): S | undefined;
    findLast(
        predicate: (value: number, index: number, array: Float16Array) => unknown,
        thisArg?: any,
    ): number | undefined;
    findLastIndex(predicate: (value: number, index: number, array: Float16Array) => unknown, thisArg?: any): number;
    forEach(callbackfn: (value: number, index: number, array: Float16Array) => void, thisArg?: any): void;
    includes(searchElement: number, fromIndex?: number): boolean;
    indexOf(searchElement: number, fromIndex?: number): number;
    join(separator?: string): string;
    lastIndexOf(searchElement: number, fromIndex?: number): number;
    map(callbackfn: (value: number, index: number, array: Float16Array) => number, thisArg?: any): Float16Array;
    reduce(
        callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Float16Array) => number,
    ): number;
    reduce(
        callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Float16Array) => number,
        initialValue: number,
    ): number;
    reduce<U>(
        callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Float16Array) => U,
        initialValue: U,
    ): U;
    reduceRight(
        callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Float16Array) => number,
    ): number;
    reduceRight(
        callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Float16Array) => number,
        initialValue: number,
    ): number;
    reduceRight<U>(
        callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Float16Array) => U,
        initialValue: U,
    ): U;
    reverse(): Float16Array;
    set(array: ArrayLike<number>, offset?: number): void;
    slice(start?: number, end?: number): Float16Array;
    some(predicate: (value: number, index: number, array: Float16Array) => unknown, thisArg?: any): boolean;
    sort(compareFn?: (a: number, b: number) => number): this;
    subarray(begin?: number, end?: number): Float16Array;
    toLocaleString(locales: string | string[], options?: Intl.NumberFormatOptions): string;
    toReversed(): Float16Array;
    toSorted(compareFn?: (a: number, b: number) => number): Float16Array;
    toString(): string;
    valueOf(): Float16Array;
    with(index: number, value: number): Float16Array;
    [index: number]: number;
}
