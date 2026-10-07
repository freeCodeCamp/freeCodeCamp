// Interface declaration for Float16Array, required in @types/node v24+.
// These definitions are specific to TS 5.7.

// This needs all of the "common" properties/methods of the TypedArrays,
// otherwise the type unions `TypedArray` and `ArrayBufferView` will be
// empty objects.
interface Float16Array<TArrayBuffer extends ArrayBufferLike = ArrayBufferLike> {
    readonly BYTES_PER_ELEMENT: number;
    readonly buffer: TArrayBuffer;
    readonly byteLength: number;
    readonly byteOffset: number;
    readonly length: number;
    readonly [Symbol.toStringTag]: "Float16Array";
    at(index: number): number | undefined;
    copyWithin(target: number, start: number, end?: number): this;
    entries(): ArrayIterator<[number, number]>;
    every(predicate: (value: number, index: number, array: this) => unknown, thisArg?: any): boolean;
    fill(value: number, start?: number, end?: number): this;
    filter(predicate: (value: number, index: number, array: this) => any, thisArg?: any): Float16Array<ArrayBuffer>;
    find(predicate: (value: number, index: number, obj: this) => boolean, thisArg?: any): number | undefined;
    findIndex(predicate: (value: number, index: number, obj: this) => boolean, thisArg?: any): number;
    findLast<S extends number>(
        predicate: (value: number, index: number, array: this) => value is S,
        thisArg?: any,
    ): S | undefined;
    findLast(predicate: (value: number, index: number, array: this) => unknown, thisArg?: any): number | undefined;
    findLastIndex(predicate: (value: number, index: number, array: this) => unknown, thisArg?: any): number;
    forEach(callbackfn: (value: number, index: number, array: this) => void, thisArg?: any): void;
    includes(searchElement: number, fromIndex?: number): boolean;
    indexOf(searchElement: number, fromIndex?: number): number;
    join(separator?: string): string;
    keys(): ArrayIterator<number>;
    lastIndexOf(searchElement: number, fromIndex?: number): number;
    map(callbackfn: (value: number, index: number, array: this) => number, thisArg?: any): Float16Array<ArrayBuffer>;
    reduce(
        callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: this) => number,
    ): number;
    reduce(
        callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: this) => number,
        initialValue: number,
    ): number;
    reduce<U>(
        callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: this) => U,
        initialValue: U,
    ): U;
    reduceRight(
        callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: this) => number,
    ): number;
    reduceRight(
        callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: this) => number,
        initialValue: number,
    ): number;
    reduceRight<U>(
        callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: this) => U,
        initialValue: U,
    ): U;
    reverse(): this;
    set(array: ArrayLike<number>, offset?: number): void;
    slice(start?: number, end?: number): Float16Array<ArrayBuffer>;
    some(predicate: (value: number, index: number, array: this) => unknown, thisArg?: any): boolean;
    sort(compareFn?: (a: number, b: number) => number): this;
    subarray(begin?: number, end?: number): Float16Array<TArrayBuffer>;
    toLocaleString(locales: string | string[], options?: Intl.NumberFormatOptions): string;
    toReversed(): Float16Array<ArrayBuffer>;
    toSorted(compareFn?: (a: number, b: number) => number): Float16Array<ArrayBuffer>;
    toString(): string;
    valueOf(): this;
    values(): ArrayIterator<number>;
    with(index: number, value: number): Float16Array<ArrayBuffer>;
    [Symbol.iterator](): ArrayIterator<number>;
    [index: number]: number;
}
