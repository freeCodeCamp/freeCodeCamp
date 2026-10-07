declare module "node:util/types" {
    import { KeyObject, webcrypto } from "node:crypto";
    /**
     * Returns `true` if the value is a built-in [`ArrayBuffer`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) or
     * [`SharedArrayBuffer`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer) instance.
     *
     * See also `util.types.isArrayBuffer()` and `util.types.isSharedArrayBuffer()`.
     *
     * ```js
     * util.types.isAnyArrayBuffer(new ArrayBuffer());  // Returns true
     * util.types.isAnyArrayBuffer(new SharedArrayBuffer());  // Returns true
     * ```
     * @since v10.0.0
     */
    function isAnyArrayBuffer(object: unknown): object is ArrayBufferLike;
    /**
     * Returns `true` if the value is an `arguments` object.
     *
     * ```js
     * function foo() {
     *   util.types.isArgumentsObject(arguments);  // Returns true
     * }
     * ```
     * @since v10.0.0
     */
    function isArgumentsObject(object: unknown): object is IArguments;
    /**
     * Returns `true` if the value is a built-in [`ArrayBuffer`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) instance.
     * This does _not_ include [`SharedArrayBuffer`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer) instances. Usually, it is
     * desirable to test for both; See `util.types.isAnyArrayBuffer()` for that.
     *
     * ```js
     * util.types.isArrayBuffer(new ArrayBuffer());  // Returns true
     * util.types.isArrayBuffer(new SharedArrayBuffer());  // Returns false
     * ```
     * @since v10.0.0
     */
    function isArrayBuffer(object: unknown): object is ArrayBuffer;
    /**
     * Returns `true` if the value is an instance of one of the [`ArrayBuffer`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) views, such as typed
     * array objects or [`DataView`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView). Equivalent to
     * [`ArrayBuffer.isView()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/isView).
     *
     * ```js
     * util.types.isArrayBufferView(new Int8Array());  // true
     * util.types.isArrayBufferView(Buffer.from('hello world')); // true
     * util.types.isArrayBufferView(new DataView(new ArrayBuffer(16)));  // true
     * util.types.isArrayBufferView(new ArrayBuffer());  // false
     * ```
     * @since v10.0.0
     */
    function isArrayBufferView(object: unknown): object is NodeJS.ArrayBufferView;
    /**
     * Returns `true` if the value is an [async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function).
     * This only reports back what the JavaScript engine is seeing;
     * in particular, the return value may not match the original source code if
     * a transpilation tool was used.
     *
     * ```js
     * util.types.isAsyncFunction(function foo() {});  // Returns false
     * util.types.isAsyncFunction(async function foo() {});  // Returns true
     * ```
     * @since v10.0.0
     */
    function isAsyncFunction(object: unknown): boolean;
    /**
     * Returns `true` if the value is a `BigInt64Array` instance.
     *
     * ```js
     * util.types.isBigInt64Array(new BigInt64Array());   // Returns true
     * util.types.isBigInt64Array(new BigUint64Array());  // Returns false
     * ```
     * @since v10.0.0
     */
    function isBigInt64Array(value: unknown): value is BigInt64Array;
    /**
     * Returns `true` if the value is a BigInt object, e.g. created
     * by `Object(BigInt(123))`.
     *
     * ```js
     * util.types.isBigIntObject(Object(BigInt(123)));   // Returns true
     * util.types.isBigIntObject(BigInt(123));   // Returns false
     * util.types.isBigIntObject(123);  // Returns false
     * ```
     * @since v10.4.0
     */
    function isBigIntObject(object: unknown): object is BigInt;
    /**
     * Returns `true` if the value is a `BigUint64Array` instance.
     *
     * ```js
     * util.types.isBigUint64Array(new BigInt64Array());   // Returns false
     * util.types.isBigUint64Array(new BigUint64Array());  // Returns true
     * ```
     * @since v10.0.0
     */
    function isBigUint64Array(value: unknown): value is BigUint64Array;
    /**
     * Returns `true` if the value is a boolean object, e.g. created
     * by `new Boolean()`.
     *
     * ```js
     * util.types.isBooleanObject(false);  // Returns false
     * util.types.isBooleanObject(true);   // Returns false
     * util.types.isBooleanObject(new Boolean(false)); // Returns true
     * util.types.isBooleanObject(new Boolean(true));  // Returns true
     * util.types.isBooleanObject(Boolean(false)); // Returns false
     * util.types.isBooleanObject(Boolean(true));  // Returns false
     * ```
     * @since v10.0.0
     */
    function isBooleanObject(object: unknown): object is Boolean;
    /**
     * Returns `true` if the value is any boxed primitive object, e.g. created
     * by `new Boolean()`, `new String()` or `Object(Symbol())`.
     *
     * For example:
     *
     * ```js
     * util.types.isBoxedPrimitive(false); // Returns false
     * util.types.isBoxedPrimitive(new Boolean(false)); // Returns true
     * util.types.isBoxedPrimitive(Symbol('foo')); // Returns false
     * util.types.isBoxedPrimitive(Object(Symbol('foo'))); // Returns true
     * util.types.isBoxedPrimitive(Object(BigInt(5))); // Returns true
     * ```
     * @since v10.11.0
     */
    function isBoxedPrimitive(object: unknown): object is String | Number | BigInt | Boolean | Symbol;
    /**
     * Returns `true` if the value is a built-in [`DataView`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView) instance.
     *
     * ```js
     * const ab = new ArrayBuffer(20);
     * util.types.isDataView(new DataView(ab));  // Returns true
     * util.types.isDataView(new Float64Array());  // Returns false
     * ```
     *
     * See also [`ArrayBuffer.isView()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/isView).
     * @since v10.0.0
     */
    function isDataView(object: unknown): object is DataView;
    /**
     * Returns `true` if the value is a built-in [`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) instance.
     *
     * ```js
     * util.types.isDate(new Date());  // Returns true
     * ```
     * @since v10.0.0
     */
    function isDate(object: unknown): object is Date;
    /**
     * Returns `true` if the value is a native `External` value.
     *
     * A native `External` value is a special type of object that contains a
     * raw C++ pointer (`void*`) for access from native code, and has no other
     * properties. Such objects are created either by Node.js internals or native
     * addons. In JavaScript, they are
     * [frozen](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) objects with a
     * `null` prototype.
     *
     * ```c
     * #include <js_native_api.h>
     * #include <stdlib.h>
     * napi_value result;
     * static napi_value MyNapi(napi_env env, napi_callback_info info) {
     *   int* raw = (int*) malloc(1024);
     *   napi_status status = napi_create_external(env, (void*) raw, NULL, NULL, &result);
     *   if (status != napi_ok) {
     *     napi_throw_error(env, NULL, "napi_create_external failed");
     *     return NULL;
     *   }
     *   return result;
     * }
     * ...
     * DECLARE_NAPI_PROPERTY("myNapi", MyNapi)
     * ...
     * ```
     *
     * ```js
     * import native from 'napi_addon.node';
     * import { types } from 'node:util';
     *
     * const data = native.myNapi();
     * types.isExternal(data); // returns true
     * types.isExternal(0); // returns false
     * types.isExternal(new String('foo')); // returns false
     * ```
     *
     * For further information on `napi_create_external`, refer to
     * [`napi_create_external()`](https://nodejs.org/docs/latest-v25.x/api/n-api.html#napi_create_external).
     * @since v10.0.0
     */
    function isExternal(object: unknown): boolean;
    /**
     * Returns `true` if the value is a built-in [`Float16Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float16Array) instance.
     *
     * ```js
     * util.types.isFloat16Array(new ArrayBuffer());  // Returns false
     * util.types.isFloat16Array(new Float16Array());  // Returns true
     * util.types.isFloat16Array(new Float32Array());  // Returns false
     * ```
     * @since v24.0.0
     */
    function isFloat16Array(object: unknown): object is Float16Array;
    /**
     * Returns `true` if the value is a built-in [`Float32Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float32Array) instance.
     *
     * ```js
     * util.types.isFloat32Array(new ArrayBuffer());  // Returns false
     * util.types.isFloat32Array(new Float32Array());  // Returns true
     * util.types.isFloat32Array(new Float64Array());  // Returns false
     * ```
     * @since v10.0.0
     */
    function isFloat32Array(object: unknown): object is Float32Array;
    /**
     * Returns `true` if the value is a built-in [`Float64Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float64Array) instance.
     *
     * ```js
     * util.types.isFloat64Array(new ArrayBuffer());  // Returns false
     * util.types.isFloat64Array(new Uint8Array());  // Returns false
     * util.types.isFloat64Array(new Float64Array());  // Returns true
     * ```
     * @since v10.0.0
     */
    function isFloat64Array(object: unknown): object is Float64Array;
    /**
     * Returns `true` if the value is a generator function.
     * This only reports back what the JavaScript engine is seeing;
     * in particular, the return value may not match the original source code if
     * a transpilation tool was used.
     *
     * ```js
     * util.types.isGeneratorFunction(function foo() {});  // Returns false
     * util.types.isGeneratorFunction(function* foo() {});  // Returns true
     * ```
     * @since v10.0.0
     */
    function isGeneratorFunction(object: unknown): object is GeneratorFunction;
    /**
     * Returns `true` if the value is a generator object as returned from a
     * built-in generator function.
     * This only reports back what the JavaScript engine is seeing;
     * in particular, the return value may not match the original source code if
     * a transpilation tool was used.
     *
     * ```js
     * function* foo() {}
     * const generator = foo();
     * util.types.isGeneratorObject(generator);  // Returns true
     * ```
     * @since v10.0.0
     */
    function isGeneratorObject(object: unknown): object is Generator;
    /**
     * Returns `true` if the value is a built-in [`Int8Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int8Array) instance.
     *
     * ```js
     * util.types.isInt8Array(new ArrayBuffer());  // Returns false
     * util.types.isInt8Array(new Int8Array());  // Returns true
     * util.types.isInt8Array(new Float64Array());  // Returns false
     * ```
     * @since v10.0.0
     */
    function isInt8Array(object: unknown): object is Int8Array;
    /**
     * Returns `true` if the value is a built-in [`Int16Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int16Array) instance.
     *
     * ```js
     * util.types.isInt16Array(new ArrayBuffer());  // Returns false
     * util.types.isInt16Array(new Int16Array());  // Returns true
     * util.types.isInt16Array(new Float64Array());  // Returns false
     * ```
     * @since v10.0.0
     */
    function isInt16Array(object: unknown): object is Int16Array;
    /**
     * Returns `true` if the value is a built-in [`Int32Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int32Array) instance.
     *
     * ```js
     * util.types.isInt32Array(new ArrayBuffer());  // Returns false
     * util.types.isInt32Array(new Int32Array());  // Returns true
     * util.types.isInt32Array(new Float64Array());  // Returns false
     * ```
     * @since v10.0.0
     */
    function isInt32Array(object: unknown): object is Int32Array;
    /**
     * Returns `true` if the value is a built-in [`Map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) instance.
     *
     * ```js
     * util.types.isMap(new Map());  // Returns true
     * ```
     * @since v10.0.0
     */
    function isMap<T>(
        object: T | {},
    ): object is T extends ReadonlyMap<any, any> ? (unknown extends T ? never : ReadonlyMap<any, any>)
        : Map<unknown, unknown>;
    /**
     * Returns `true` if the value is an iterator returned for a built-in [`Map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) instance.
     *
     * ```js
     * const map = new Map();
     * util.types.isMapIterator(map.keys());  // Returns true
     * util.types.isMapIterator(map.values());  // Returns true
     * util.types.isMapIterator(map.entries());  // Returns true
     * util.types.isMapIterator(map[Symbol.iterator]());  // Returns true
     * ```
     * @since v10.0.0
     */
    function isMapIterator(object: unknown): boolean;
    /**
     * Returns `true` if the value is an instance of a [Module Namespace Object](https://tc39.github.io/ecma262/#sec-module-namespace-exotic-objects).
     *
     * ```js
     * import * as ns from './a.js';
     *
     * util.types.isModuleNamespaceObject(ns);  // Returns true
     * ```
     * @since v10.0.0
     */
    function isModuleNamespaceObject(value: unknown): boolean;
    /**
     * Returns `true` if the value was returned by the constructor of a
     * [built-in `Error` type](https://tc39.es/ecma262/#sec-error-objects).
     *
     * ```js
     * console.log(util.types.isNativeError(new Error()));  // true
     * console.log(util.types.isNativeError(new TypeError()));  // true
     * console.log(util.types.isNativeError(new RangeError()));  // true
     * ```
     *
     * Subclasses of the native error types are also native errors:
     *
     * ```js
     * class MyError extends Error {}
     * console.log(util.types.isNativeError(new MyError()));  // true
     * ```
     *
     * A value being `instanceof` a native error class is not equivalent to `isNativeError()`
     * returning `true` for that value. `isNativeError()` returns `true` for errors
     * which come from a different [realm](https://tc39.es/ecma262/#realm) while `instanceof Error` returns `false`
     * for these errors:
     *
     * ```js
     * import { createContext, runInContext } from 'node:vm';
     * import { types } from 'node:util';
     *
     * const context = createContext({});
     * const myError = runInContext('new Error()', context);
     * console.log(types.isNativeError(myError)); // true
     * console.log(myError instanceof Error); // false
     * ```
     *
     * Conversely, `isNativeError()` returns `false` for all objects which were not
     * returned by the constructor of a native error. That includes values
     * which are `instanceof` native errors:
     *
     * ```js
     * const myError = { __proto__: Error.prototype };
     * console.log(util.types.isNativeError(myError)); // false
     * console.log(myError instanceof Error); // true
     * ```
     * @since v10.0.0
     * @deprecated The `util.types.isNativeError` API is deprecated. Please use `Error.isError` instead.
     */
    function isNativeError(object: unknown): object is Error;
    /**
     * Returns `true` if the value is a number object, e.g. created
     * by `new Number()`.
     *
     * ```js
     * util.types.isNumberObject(0);  // Returns false
     * util.types.isNumberObject(new Number(0));   // Returns true
     * ```
     * @since v10.0.0
     */
    function isNumberObject(object: unknown): object is Number;
    /**
     * Returns `true` if the value is a built-in [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).
     *
     * ```js
     * util.types.isPromise(Promise.resolve(42));  // Returns true
     * ```
     * @since v10.0.0
     */
    function isPromise(object: unknown): object is Promise<unknown>;
    /**
     * Returns `true` if the value is a [`Proxy`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) instance.
     *
     * ```js
     * const target = {};
     * const proxy = new Proxy(target, {});
     * util.types.isProxy(target);  // Returns false
     * util.types.isProxy(proxy);  // Returns true
     * ```
     * @since v10.0.0
     */
    function isProxy(object: unknown): boolean;
    /**
     * Returns `true` if the value is a regular expression object.
     *
     * ```js
     * util.types.isRegExp(/abc/);  // Returns true
     * util.types.isRegExp(new RegExp('abc'));  // Returns true
     * ```
     * @since v10.0.0
     */
    function isRegExp(object: unknown): object is RegExp;
    /**
     * Returns `true` if the value is a built-in [`Set`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) instance.
     *
     * ```js
     * util.types.isSet(new Set());  // Returns true
     * ```
     * @since v10.0.0
     */
    function isSet<T>(
        object: T | {},
    ): object is T extends ReadonlySet<any> ? (unknown extends T ? never : ReadonlySet<any>) : Set<unknown>;
    /**
     * Returns `true` if the value is an iterator returned for a built-in [`Set`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) instance.
     *
     * ```js
     * const set = new Set();
     * util.types.isSetIterator(set.keys());  // Returns true
     * util.types.isSetIterator(set.values());  // Returns true
     * util.types.isSetIterator(set.entries());  // Returns true
     * util.types.isSetIterator(set[Symbol.iterator]());  // Returns true
     * ```
     * @since v10.0.0
     */
    function isSetIterator(object: unknown): boolean;
    /**
     * Returns `true` if the value is a built-in [`SharedArrayBuffer`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer) instance.
     * This does _not_ include [`ArrayBuffer`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) instances. Usually, it is
     * desirable to test for both; See `util.types.isAnyArrayBuffer()` for that.
     *
     * ```js
     * util.types.isSharedArrayBuffer(new ArrayBuffer());  // Returns false
     * util.types.isSharedArrayBuffer(new SharedArrayBuffer());  // Returns true
     * ```
     * @since v10.0.0
     */
    function isSharedArrayBuffer(object: unknown): object is SharedArrayBuffer;
    /**
     * Returns `true` if the value is a string object, e.g. created
     * by `new String()`.
     *
     * ```js
     * util.types.isStringObject('foo');  // Returns false
     * util.types.isStringObject(new String('foo'));   // Returns true
     * ```
     * @since v10.0.0
     */
    function isStringObject(object: unknown): object is String;
    /**
     * Returns `true` if the value is a symbol object, created
     * by calling `Object()` on a `Symbol` primitive.
     *
     * ```js
     * const symbol = Symbol('foo');
     * util.types.isSymbolObject(symbol);  // Returns false
     * util.types.isSymbolObject(Object(symbol));   // Returns true
     * ```
     * @since v10.0.0
     */
    function isSymbolObject(object: unknown): object is Symbol;
    /**
     * Returns `true` if the value is a built-in [`TypedArray`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) instance.
     *
     * ```js
     * util.types.isTypedArray(new ArrayBuffer());  // Returns false
     * util.types.isTypedArray(new Uint8Array());  // Returns true
     * util.types.isTypedArray(new Float64Array());  // Returns true
     * ```
     *
     * See also [`ArrayBuffer.isView()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/isView).
     * @since v10.0.0
     */
    function isTypedArray(object: unknown): object is NodeJS.TypedArray;
    /**
     * Returns `true` if the value is a built-in [`Uint8Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) instance.
     *
     * ```js
     * util.types.isUint8Array(new ArrayBuffer());  // Returns false
     * util.types.isUint8Array(new Uint8Array());  // Returns true
     * util.types.isUint8Array(new Float64Array());  // Returns false
     * ```
     * @since v10.0.0
     */
    function isUint8Array(object: unknown): object is Uint8Array;
    /**
     * Returns `true` if the value is a built-in [`Uint8ClampedArray`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray) instance.
     *
     * ```js
     * util.types.isUint8ClampedArray(new ArrayBuffer());  // Returns false
     * util.types.isUint8ClampedArray(new Uint8ClampedArray());  // Returns true
     * util.types.isUint8ClampedArray(new Float64Array());  // Returns false
     * ```
     * @since v10.0.0
     */
    function isUint8ClampedArray(object: unknown): object is Uint8ClampedArray;
    /**
     * Returns `true` if the value is a built-in [`Uint16Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint16Array) instance.
     *
     * ```js
     * util.types.isUint16Array(new ArrayBuffer());  // Returns false
     * util.types.isUint16Array(new Uint16Array());  // Returns true
     * util.types.isUint16Array(new Float64Array());  // Returns false
     * ```
     * @since v10.0.0
     */
    function isUint16Array(object: unknown): object is Uint16Array;
    /**
     * Returns `true` if the value is a built-in [`Uint32Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint32Array) instance.
     *
     * ```js
     * util.types.isUint32Array(new ArrayBuffer());  // Returns false
     * util.types.isUint32Array(new Uint32Array());  // Returns true
     * util.types.isUint32Array(new Float64Array());  // Returns false
     * ```
     * @since v10.0.0
     */
    function isUint32Array(object: unknown): object is Uint32Array;
    /**
     * Returns `true` if the value is a built-in [`WeakMap`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap) instance.
     *
     * ```js
     * util.types.isWeakMap(new WeakMap());  // Returns true
     * ```
     * @since v10.0.0
     */
    function isWeakMap(object: unknown): object is WeakMap<object, unknown>;
    /**
     * Returns `true` if the value is a built-in [`WeakSet`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet) instance.
     *
     * ```js
     * util.types.isWeakSet(new WeakSet());  // Returns true
     * ```
     * @since v10.0.0
     */
    function isWeakSet(object: unknown): object is WeakSet<object>;
    /**
     * Returns `true` if `value` is a `KeyObject`, `false` otherwise.
     * @since v16.2.0
     */
    function isKeyObject(object: unknown): object is KeyObject;
    /**
     * Returns `true` if `value` is a `CryptoKey`, `false` otherwise.
     * @since v16.2.0
     */
    function isCryptoKey(object: unknown): object is webcrypto.CryptoKey;
}
declare module "util/types" {
    export * from "node:util/types";
}
