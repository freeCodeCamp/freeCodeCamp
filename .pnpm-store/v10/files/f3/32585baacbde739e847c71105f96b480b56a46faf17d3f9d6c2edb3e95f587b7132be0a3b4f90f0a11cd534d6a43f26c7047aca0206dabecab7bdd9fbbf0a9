/**
Matches any [primitive value](https://developer.mozilla.org/en-US/docs/Glossary/Primitive).
*/
export type Primitive = null | undefined | string | number | boolean | symbol | bigint;
/**
Matches a [`class` constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes).
*/
/**
Matches a [`class`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes).
*/
export type Class<T = unknown, Arguments extends any[] = any[]> = new (...arguments_: Arguments) => T;
/**
Matches any [typed array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray), like `Uint8Array` or `Float64Array`.
*/
export type TypedArray = Int8Array | Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array | BigInt64Array | BigUint64Array;
declare global {
    interface SymbolConstructor {
        readonly observable: symbol;
    }
}
/**
Matches a value that is like an [Observable](https://github.com/tc39/proposal-observable).
*/
export type ObservableLike = {
    subscribe(observer: (value: unknown) => void): void;
    [Symbol.observable](): ObservableLike;
};
export type Falsy = false | 0 | 0n | '' | null | undefined;
export type WeakRef<T extends object> = {
    readonly [Symbol.toStringTag]: 'WeakRef';
    deref(): T | undefined;
};
