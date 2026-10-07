/// <reference types="node" />
/// <reference lib="es2018" />
/// <reference lib="dom" />
import { Class, Falsy, TypedArray, ObservableLike, Primitive } from './types';
declare const objectTypeNames: readonly ["Function", "Generator", "AsyncGenerator", "GeneratorFunction", "AsyncGeneratorFunction", "AsyncFunction", "Observable", "Array", "Buffer", "Blob", "Object", "RegExp", "Date", "Error", "Map", "Set", "WeakMap", "WeakSet", "ArrayBuffer", "SharedArrayBuffer", "DataView", "Promise", "URL", "FormData", "URLSearchParams", "HTMLElement", ...("Int8Array" | "Uint8Array" | "Uint8ClampedArray" | "Int16Array" | "Uint16Array" | "Int32Array" | "Uint32Array" | "Float32Array" | "Float64Array" | "BigInt64Array" | "BigUint64Array")[]];
declare type ObjectTypeName = typeof objectTypeNames[number];
declare const primitiveTypeNames: readonly ["null", "undefined", "string", "number", "bigint", "boolean", "symbol"];
declare type PrimitiveTypeName = typeof primitiveTypeNames[number];
export declare type TypeName = ObjectTypeName | PrimitiveTypeName;
declare function is(value: unknown): TypeName;
declare namespace is {
    var undefined: (value: unknown) => value is undefined;
    var string: (value: unknown) => value is string;
    var number: (value: unknown) => value is number;
    var bigint: (value: unknown) => value is bigint;
    var function_: (value: unknown) => value is Function;
    var null_: (value: unknown) => value is null;
    var class_: (value: unknown) => value is Class<unknown, any[]>;
    var boolean: (value: unknown) => value is boolean;
    var symbol: (value: unknown) => value is symbol;
    var numericString: (value: unknown) => value is string;
    var array: <T = unknown>(value: unknown, assertion?: ((value: T) => value is T) | undefined) => value is T[];
    var buffer: (value: unknown) => value is Buffer;
    var blob: (value: unknown) => value is Blob;
    var nullOrUndefined: (value: unknown) => value is null | undefined;
    var object: (value: unknown) => value is object;
    var iterable: <T = unknown>(value: unknown) => value is Iterable<T>;
    var asyncIterable: <T = unknown>(value: unknown) => value is AsyncIterable<T>;
    var generator: (value: unknown) => value is Generator<unknown, any, unknown>;
    var asyncGenerator: (value: unknown) => value is AsyncGenerator<unknown, any, unknown>;
    var nativePromise: <T = unknown>(value: unknown) => value is Promise<T>;
    var promise: <T = unknown>(value: unknown) => value is Promise<T>;
    var generatorFunction: (value: unknown) => value is GeneratorFunction;
    var asyncGeneratorFunction: (value: unknown) => value is (...args: any[]) => Promise<unknown>;
    var asyncFunction: <T = unknown>(value: unknown) => value is (...args: any[]) => Promise<T>;
    var boundFunction: (value: unknown) => value is Function;
    var regExp: (value: unknown) => value is RegExp;
    var date: (value: unknown) => value is Date;
    var error: (value: unknown) => value is Error;
    var map: <Key = unknown, Value = unknown>(value: unknown) => value is Map<Key, Value>;
    var set: <T = unknown>(value: unknown) => value is Set<T>;
    var weakMap: <Key extends object = object, Value = unknown>(value: unknown) => value is WeakMap<Key, Value>;
    var weakSet: (value: unknown) => value is WeakSet<object>;
    var int8Array: (value: unknown) => value is Int8Array;
    var uint8Array: (value: unknown) => value is Uint8Array;
    var uint8ClampedArray: (value: unknown) => value is Uint8ClampedArray;
    var int16Array: (value: unknown) => value is Int16Array;
    var uint16Array: (value: unknown) => value is Uint16Array;
    var int32Array: (value: unknown) => value is Int32Array;
    var uint32Array: (value: unknown) => value is Uint32Array;
    var float32Array: (value: unknown) => value is Float32Array;
    var float64Array: (value: unknown) => value is Float64Array;
    var bigInt64Array: (value: unknown) => value is BigInt64Array;
    var bigUint64Array: (value: unknown) => value is BigUint64Array;
    var arrayBuffer: (value: unknown) => value is ArrayBuffer;
    var sharedArrayBuffer: (value: unknown) => value is SharedArrayBuffer;
    var dataView: (value: unknown) => value is DataView;
    var enumCase: <T = unknown>(value: unknown, targetEnum: T) => boolean;
    var directInstanceOf: <T>(instance: unknown, class_: Class<T, any[]>) => instance is T;
    var urlInstance: (value: unknown) => value is URL;
    var urlString: (value: unknown) => value is string;
    var truthy: <T>(value: false | "" | 0 | 0n | T | null | undefined) => value is T;
    var falsy: <T>(value: false | "" | 0 | 0n | T | null | undefined) => value is Falsy;
    var nan: (value: unknown) => boolean;
    var primitive: (value: unknown) => value is Primitive;
    var integer: (value: unknown) => value is number;
    var safeInteger: (value: unknown) => value is number;
    var plainObject: <Value = unknown>(value: unknown) => value is Record<string | number | symbol, Value>;
    var typedArray: (value: unknown) => value is TypedArray;
    var arrayLike: <T = unknown>(value: unknown) => value is ArrayLike<T>;
    var inRange: (value: number, range: number | number[]) => value is number;
    var domElement: (value: unknown) => value is HTMLElement;
    var observable: (value: unknown) => value is ObservableLike;
    var nodeStream: (value: unknown) => value is NodeStream;
    var infinite: (value: unknown) => value is number;
    var evenInteger: (value: number) => value is number;
    var oddInteger: (value: number) => value is number;
    var emptyArray: (value: unknown) => value is never[];
    var nonEmptyArray: (value: unknown) => value is unknown[];
    var emptyString: (value: unknown) => value is "";
    var emptyStringOrWhitespace: (value: unknown) => value is string;
    var nonEmptyString: (value: unknown) => value is string;
    var nonEmptyStringAndNotWhitespace: (value: unknown) => value is string;
    var emptyObject: <Key extends string | number | symbol = string>(value: unknown) => value is Record<Key, never>;
    var nonEmptyObject: <Key extends string | number | symbol = string, Value = unknown>(value: unknown) => value is Record<Key, Value>;
    var emptySet: (value: unknown) => value is Set<never>;
    var nonEmptySet: <T = unknown>(value: unknown) => value is Set<T>;
    var emptyMap: (value: unknown) => value is Map<never, never>;
    var nonEmptyMap: <Key = unknown, Value = unknown>(value: unknown) => value is Map<Key, Value>;
    var propertyKey: (value: unknown) => value is string | number | symbol;
    var formData: (value: unknown) => value is FormData;
    var urlSearchParams: (value: unknown) => value is URLSearchParams;
    var any: (predicate: Predicate | Predicate[], ...values: unknown[]) => boolean;
    var all: (predicate: Predicate, ...values: unknown[]) => boolean;
}
export interface ArrayLike<T> {
    readonly [index: number]: T;
    readonly length: number;
}
export interface NodeStream extends NodeJS.EventEmitter {
    pipe<T extends NodeJS.WritableStream>(destination: T, options?: {
        end?: boolean;
    }): T;
}
export declare type Predicate = (value: unknown) => boolean;
export declare const enum AssertionTypeDescription {
    class_ = "Class",
    numericString = "string with a number",
    nullOrUndefined = "null or undefined",
    iterable = "Iterable",
    asyncIterable = "AsyncIterable",
    nativePromise = "native Promise",
    urlString = "string with a URL",
    truthy = "truthy",
    falsy = "falsy",
    nan = "NaN",
    primitive = "primitive",
    integer = "integer",
    safeInteger = "integer",
    plainObject = "plain object",
    arrayLike = "array-like",
    typedArray = "TypedArray",
    domElement = "HTMLElement",
    nodeStream = "Node.js Stream",
    infinite = "infinite number",
    emptyArray = "empty array",
    nonEmptyArray = "non-empty array",
    emptyString = "empty string",
    emptyStringOrWhitespace = "empty string or whitespace",
    nonEmptyString = "non-empty string",
    nonEmptyStringAndNotWhitespace = "non-empty string and not whitespace",
    emptyObject = "empty object",
    nonEmptyObject = "non-empty object",
    emptySet = "empty set",
    nonEmptySet = "non-empty set",
    emptyMap = "empty map",
    nonEmptyMap = "non-empty map",
    evenInteger = "even integer",
    oddInteger = "odd integer",
    directInstanceOf = "T",
    inRange = "in range",
    any = "predicate returns truthy for any value",
    all = "predicate returns truthy for all values"
}
interface Assert {
    undefined: (value: unknown) => asserts value is undefined;
    string: (value: unknown) => asserts value is string;
    number: (value: unknown) => asserts value is number;
    bigint: (value: unknown) => asserts value is bigint;
    function_: (value: unknown) => asserts value is Function;
    null_: (value: unknown) => asserts value is null;
    class_: (value: unknown) => asserts value is Class;
    boolean: (value: unknown) => asserts value is boolean;
    symbol: (value: unknown) => asserts value is symbol;
    numericString: (value: unknown) => asserts value is string;
    array: <T = unknown>(value: unknown, assertion?: (element: unknown) => asserts element is T) => asserts value is T[];
    buffer: (value: unknown) => asserts value is Buffer;
    blob: (value: unknown) => asserts value is Blob;
    nullOrUndefined: (value: unknown) => asserts value is null | undefined;
    object: <Key extends keyof any = string, Value = unknown>(value: unknown) => asserts value is Record<Key, Value>;
    iterable: <T = unknown>(value: unknown) => asserts value is Iterable<T>;
    asyncIterable: <T = unknown>(value: unknown) => asserts value is AsyncIterable<T>;
    generator: (value: unknown) => asserts value is Generator;
    asyncGenerator: (value: unknown) => asserts value is AsyncGenerator;
    nativePromise: <T = unknown>(value: unknown) => asserts value is Promise<T>;
    promise: <T = unknown>(value: unknown) => asserts value is Promise<T>;
    generatorFunction: (value: unknown) => asserts value is GeneratorFunction;
    asyncGeneratorFunction: (value: unknown) => asserts value is AsyncGeneratorFunction;
    asyncFunction: (value: unknown) => asserts value is Function;
    boundFunction: (value: unknown) => asserts value is Function;
    regExp: (value: unknown) => asserts value is RegExp;
    date: (value: unknown) => asserts value is Date;
    error: (value: unknown) => asserts value is Error;
    map: <Key = unknown, Value = unknown>(value: unknown) => asserts value is Map<Key, Value>;
    set: <T = unknown>(value: unknown) => asserts value is Set<T>;
    weakMap: <Key extends object = object, Value = unknown>(value: unknown) => asserts value is WeakMap<Key, Value>;
    weakSet: <T extends object = object>(value: unknown) => asserts value is WeakSet<T>;
    int8Array: (value: unknown) => asserts value is Int8Array;
    uint8Array: (value: unknown) => asserts value is Uint8Array;
    uint8ClampedArray: (value: unknown) => asserts value is Uint8ClampedArray;
    int16Array: (value: unknown) => asserts value is Int16Array;
    uint16Array: (value: unknown) => asserts value is Uint16Array;
    int32Array: (value: unknown) => asserts value is Int32Array;
    uint32Array: (value: unknown) => asserts value is Uint32Array;
    float32Array: (value: unknown) => asserts value is Float32Array;
    float64Array: (value: unknown) => asserts value is Float64Array;
    bigInt64Array: (value: unknown) => asserts value is BigInt64Array;
    bigUint64Array: (value: unknown) => asserts value is BigUint64Array;
    arrayBuffer: (value: unknown) => asserts value is ArrayBuffer;
    sharedArrayBuffer: (value: unknown) => asserts value is SharedArrayBuffer;
    dataView: (value: unknown) => asserts value is DataView;
    enumCase: <T = unknown>(value: unknown, targetEnum: T) => asserts value is T[keyof T];
    urlInstance: (value: unknown) => asserts value is URL;
    urlString: (value: unknown) => asserts value is string;
    truthy: (value: unknown) => asserts value is unknown;
    falsy: (value: unknown) => asserts value is unknown;
    nan: (value: unknown) => asserts value is unknown;
    primitive: (value: unknown) => asserts value is Primitive;
    integer: (value: unknown) => asserts value is number;
    safeInteger: (value: unknown) => asserts value is number;
    plainObject: <Value = unknown>(value: unknown) => asserts value is Record<PropertyKey, Value>;
    typedArray: (value: unknown) => asserts value is TypedArray;
    arrayLike: <T = unknown>(value: unknown) => asserts value is ArrayLike<T>;
    domElement: (value: unknown) => asserts value is HTMLElement;
    observable: (value: unknown) => asserts value is ObservableLike;
    nodeStream: (value: unknown) => asserts value is NodeStream;
    infinite: (value: unknown) => asserts value is number;
    emptyArray: (value: unknown) => asserts value is never[];
    nonEmptyArray: (value: unknown) => asserts value is unknown[];
    emptyString: (value: unknown) => asserts value is '';
    emptyStringOrWhitespace: (value: unknown) => asserts value is string;
    nonEmptyString: (value: unknown) => asserts value is string;
    nonEmptyStringAndNotWhitespace: (value: unknown) => asserts value is string;
    emptyObject: <Key extends keyof any = string>(value: unknown) => asserts value is Record<Key, never>;
    nonEmptyObject: <Key extends keyof any = string, Value = unknown>(value: unknown) => asserts value is Record<Key, Value>;
    emptySet: (value: unknown) => asserts value is Set<never>;
    nonEmptySet: <T = unknown>(value: unknown) => asserts value is Set<T>;
    emptyMap: (value: unknown) => asserts value is Map<never, never>;
    nonEmptyMap: <Key = unknown, Value = unknown>(value: unknown) => asserts value is Map<Key, Value>;
    propertyKey: (value: unknown) => asserts value is PropertyKey;
    formData: (value: unknown) => asserts value is FormData;
    urlSearchParams: (value: unknown) => asserts value is URLSearchParams;
    evenInteger: (value: number) => asserts value is number;
    oddInteger: (value: number) => asserts value is number;
    directInstanceOf: <T>(instance: unknown, class_: Class<T>) => asserts instance is T;
    inRange: (value: number, range: number | number[]) => asserts value is number;
    any: (predicate: Predicate | Predicate[], ...values: unknown[]) => void | never;
    all: (predicate: Predicate, ...values: unknown[]) => void | never;
}
export declare const assert: Assert;
export default is;
export { Class, TypedArray, ObservableLike, Primitive } from './types';
