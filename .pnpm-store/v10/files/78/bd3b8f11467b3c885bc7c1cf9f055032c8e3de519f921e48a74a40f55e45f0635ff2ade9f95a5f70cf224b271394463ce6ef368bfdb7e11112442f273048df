/**
 * The `node:util` module supports the needs of Node.js internal APIs. Many of the
 * utilities are useful for application and module developers as well. To access
 * it:
 *
 * ```js
 * import util from 'node:util';
 * ```
 * @see [source](https://github.com/nodejs/node/blob/v24.x/lib/util.js)
 */
declare module "util" {
    import * as types from "node:util/types";
    export interface InspectOptions {
        /**
         * If `true`, object's non-enumerable symbols and properties are included in the formatted result.
         * `WeakMap` and `WeakSet` entries are also included as well as user defined prototype properties (excluding method properties).
         * @default false
         */
        showHidden?: boolean | undefined;
        /**
         * Specifies the number of times to recurse while formatting object.
         * This is useful for inspecting large objects.
         * To recurse up to the maximum call stack size pass `Infinity` or `null`.
         * @default 2
         */
        depth?: number | null | undefined;
        /**
         * If `true`, the output is styled with ANSI color codes. Colors are customizable.
         */
        colors?: boolean | undefined;
        /**
         * If `false`, `[util.inspect.custom](depth, opts, inspect)` functions are not invoked.
         * @default true
         */
        customInspect?: boolean | undefined;
        /**
         * If `true`, `Proxy` inspection includes the target and handler objects.
         * @default false
         */
        showProxy?: boolean | undefined;
        /**
         * Specifies the maximum number of `Array`, `TypedArray`, `WeakMap`, and `WeakSet` elements
         * to include when formatting. Set to `null` or `Infinity` to show all elements.
         * Set to `0` or negative to show no elements.
         * @default 100
         */
        maxArrayLength?: number | null | undefined;
        /**
         * Specifies the maximum number of characters to
         * include when formatting. Set to `null` or `Infinity` to show all elements.
         * Set to `0` or negative to show no characters.
         * @default 10000
         */
        maxStringLength?: number | null | undefined;
        /**
         * The length at which input values are split across multiple lines.
         * Set to `Infinity` to format the input as a single line
         * (in combination with `compact` set to `true` or any number >= `1`).
         * @default 80
         */
        breakLength?: number | undefined;
        /**
         * Setting this to `false` causes each object key
         * to be displayed on a new line. It will also add new lines to text that is
         * longer than `breakLength`. If set to a number, the most `n` inner elements
         * are united on a single line as long as all properties fit into
         * `breakLength`. Short array elements are also grouped together. Note that no
         * text will be reduced below 16 characters, no matter the `breakLength` size.
         * For more information, see the example below.
         * @default true
         */
        compact?: boolean | number | undefined;
        /**
         * If set to `true` or a function, all properties of an object, and `Set` and `Map`
         * entries are sorted in the resulting string.
         * If set to `true` the default sort is used.
         * If set to a function, it is used as a compare function.
         */
        sorted?: boolean | ((a: string, b: string) => number) | undefined;
        /**
         * If set to `true`, getters are going to be
         * inspected as well. If set to `'get'` only getters without setter are going
         * to be inspected. If set to `'set'` only getters having a corresponding
         * setter are going to be inspected. This might cause side effects depending on
         * the getter function.
         * @default false
         */
        getters?: "get" | "set" | boolean | undefined;
        /**
         * If set to `true`, an underscore is used to separate every three digits in all bigints and numbers.
         * @default false
         */
        numericSeparator?: boolean | undefined;
    }
    export type Style =
        | "special"
        | "number"
        | "bigint"
        | "boolean"
        | "undefined"
        | "null"
        | "string"
        | "symbol"
        | "date"
        | "regexp"
        | "module";
    export type CustomInspectFunction = (depth: number, options: InspectOptionsStylized) => any; // TODO: , inspect: inspect
    export interface InspectOptionsStylized extends InspectOptions {
        stylize(text: string, styleType: Style): string;
    }
    export interface CallSiteObject {
        /**
         * Returns the name of the function associated with this call site.
         */
        functionName: string;
        /**
         * Returns the name of the resource that contains the script for the
         * function for this call site.
         */
        scriptName: string;
        /**
         * Returns the unique id of the script, as in Chrome DevTools protocol
         * [`Runtime.ScriptId`](https://chromedevtools.github.io/devtools-protocol/1-3/Runtime/#type-ScriptId).
         * @since v22.14.0
         */
        scriptId: string;
        /**
         * Returns the number, 1-based, of the line for the associate function call.
         */
        lineNumber: number;
        /**
         * Returns the 1-based column offset on the line for the associated function call.
         */
        columnNumber: number;
    }
    export type DiffEntry = [operation: -1 | 0 | 1, value: string];
    /**
     * `util.diff()` compares two string or array values and returns an array of difference entries.
     * It uses the Myers diff algorithm to compute minimal differences, which is the same algorithm
     * used internally by assertion error messages.
     *
     * If the values are equal, an empty array is returned.
     *
     * ```js
     * const { diff } = require('node:util');
     *
     * // Comparing strings
     * const actualString = '12345678';
     * const expectedString = '12!!5!7!';
     * console.log(diff(actualString, expectedString));
     * // [
     * //   [0, '1'],
     * //   [0, '2'],
     * //   [1, '3'],
     * //   [1, '4'],
     * //   [-1, '!'],
     * //   [-1, '!'],
     * //   [0, '5'],
     * //   [1, '6'],
     * //   [-1, '!'],
     * //   [0, '7'],
     * //   [1, '8'],
     * //   [-1, '!'],
     * // ]
     * // Comparing arrays
     * const actualArray = ['1', '2', '3'];
     * const expectedArray = ['1', '3', '4'];
     * console.log(diff(actualArray, expectedArray));
     * // [
     * //   [0, '1'],
     * //   [1, '2'],
     * //   [0, '3'],
     * //   [-1, '4'],
     * // ]
     * // Equal values return empty array
     * console.log(diff('same', 'same'));
     * // []
     * ```
     * @since v22.15.0
     * @experimental
     * @param actual The first value to compare
     * @param expected The second value to compare
     * @returns An array of difference entries. Each entry is an array with two elements:
     * * Index 0: `number` Operation code: `-1` for delete, `0` for no-op/unchanged, `1` for insert
     * * Index 1: `string` The value associated with the operation
     */
    export function diff(actual: string | readonly string[], expected: string | readonly string[]): DiffEntry[];
    /**
     * The `util.format()` method returns a formatted string using the first argument
     * as a `printf`-like format string which can contain zero or more format
     * specifiers. Each specifier is replaced with the converted value from the
     * corresponding argument. Supported specifiers are:
     *
     * If a specifier does not have a corresponding argument, it is not replaced:
     *
     * ```js
     * util.format('%s:%s', 'foo');
     * // Returns: 'foo:%s'
     * ```
     *
     * Values that are not part of the format string are formatted using `util.inspect()` if their type is not `string`.
     *
     * If there are more arguments passed to the `util.format()` method than the
     * number of specifiers, the extra arguments are concatenated to the returned
     * string, separated by spaces:
     *
     * ```js
     * util.format('%s:%s', 'foo', 'bar', 'baz');
     * // Returns: 'foo:bar baz'
     * ```
     *
     * If the first argument does not contain a valid format specifier, `util.format()` returns a string that is the concatenation of all arguments separated by spaces:
     *
     * ```js
     * util.format(1, 2, 3);
     * // Returns: '1 2 3'
     * ```
     *
     * If only one argument is passed to `util.format()`, it is returned as it is
     * without any formatting:
     *
     * ```js
     * util.format('%% %s');
     * // Returns: '%% %s'
     * ```
     *
     * `util.format()` is a synchronous method that is intended as a debugging tool.
     * Some input values can have a significant performance overhead that can block the
     * event loop. Use this function with care and never in a hot code path.
     * @since v0.5.3
     * @param format A `printf`-like format string.
     */
    export function format(format?: any, ...param: any[]): string;
    /**
     * This function is identical to {@link format}, except in that it takes
     * an `inspectOptions` argument which specifies options that are passed along to {@link inspect}.
     *
     * ```js
     * util.formatWithOptions({ colors: true }, 'See object %O', { foo: 42 });
     * // Returns 'See object { foo: 42 }', where `42` is colored as a number
     * // when printed to a terminal.
     * ```
     * @since v10.0.0
     */
    export function formatWithOptions(inspectOptions: InspectOptions, format?: any, ...param: any[]): string;
    interface GetCallSitesOptions {
        /**
         * Reconstruct the original location in the stacktrace from the source-map.
         * Enabled by default with the flag `--enable-source-maps`.
         */
        sourceMap?: boolean | undefined;
    }
    /**
     * Returns an array of call site objects containing the stack of
     * the caller function.
     *
     * ```js
     * import { getCallSites } from 'node:util';
     *
     * function exampleFunction() {
     *   const callSites = getCallSites();
     *
     *   console.log('Call Sites:');
     *   callSites.forEach((callSite, index) => {
     *     console.log(`CallSite ${index + 1}:`);
     *     console.log(`Function Name: ${callSite.functionName}`);
     *     console.log(`Script Name: ${callSite.scriptName}`);
     *     console.log(`Line Number: ${callSite.lineNumber}`);
     *     console.log(`Column Number: ${callSite.column}`);
     *   });
     *   // CallSite 1:
     *   // Function Name: exampleFunction
     *   // Script Name: /home/example.js
     *   // Line Number: 5
     *   // Column Number: 26
     *
     *   // CallSite 2:
     *   // Function Name: anotherFunction
     *   // Script Name: /home/example.js
     *   // Line Number: 22
     *   // Column Number: 3
     *
     *   // ...
     * }
     *
     * // A function to simulate another stack layer
     * function anotherFunction() {
     *   exampleFunction();
     * }
     *
     * anotherFunction();
     * ```
     *
     * It is possible to reconstruct the original locations by setting the option `sourceMap` to `true`.
     * If the source map is not available, the original location will be the same as the current location.
     * When the `--enable-source-maps` flag is enabled, for example when using `--experimental-transform-types`,
     * `sourceMap` will be true by default.
     *
     * ```ts
     * import { getCallSites } from 'node:util';
     *
     * interface Foo {
     *   foo: string;
     * }
     *
     * const callSites = getCallSites({ sourceMap: true });
     *
     * // With sourceMap:
     * // Function Name: ''
     * // Script Name: example.js
     * // Line Number: 7
     * // Column Number: 26
     *
     * // Without sourceMap:
     * // Function Name: ''
     * // Script Name: example.js
     * // Line Number: 2
     * // Column Number: 26
     * ```
     * @param frameCount Number of frames to capture as call site objects.
     * **Default:** `10`. Allowable range is between 1 and 200.
     * @return An array of call site objects
     * @since v22.9.0
     */
    export function getCallSites(frameCount?: number, options?: GetCallSitesOptions): CallSiteObject[];
    export function getCallSites(options: GetCallSitesOptions): CallSiteObject[];
    /**
     * Returns the string name for a numeric error code that comes from a Node.js API.
     * The mapping between error codes and error names is platform-dependent.
     * See `Common System Errors` for the names of common errors.
     *
     * ```js
     * fs.access('file/that/does/not/exist', (err) => {
     *   const name = util.getSystemErrorName(err.errno);
     *   console.error(name);  // ENOENT
     * });
     * ```
     * @since v9.7.0
     */
    export function getSystemErrorName(err: number): string;
    /**
     * Enable or disable printing a stack trace on `SIGINT`. The API is only available on the main thread.
     * @since 24.6.0
     */
    export function setTraceSigInt(enable: boolean): void;
    /**
     * Returns a Map of all system error codes available from the Node.js API.
     * The mapping between error codes and error names is platform-dependent.
     * See `Common System Errors` for the names of common errors.
     *
     * ```js
     * fs.access('file/that/does/not/exist', (err) => {
     *   const errorMap = util.getSystemErrorMap();
     *   const name = errorMap.get(err.errno);
     *   console.error(name);  // ENOENT
     * });
     * ```
     * @since v16.0.0, v14.17.0
     */
    export function getSystemErrorMap(): Map<number, [string, string]>;
    /**
     * Returns the string message for a numeric error code that comes from a Node.js
     * API.
     * The mapping between error codes and string messages is platform-dependent.
     *
     * ```js
     * fs.access('file/that/does/not/exist', (err) => {
     *   const message = util.getSystemErrorMessage(err.errno);
     *   console.error(message);  // no such file or directory
     * });
     * ```
     * @since v22.12.0
     */
    export function getSystemErrorMessage(err: number): string;
    /**
     * Returns the `string` after replacing any surrogate code points
     * (or equivalently, any unpaired surrogate code units) with the
     * Unicode "replacement character" U+FFFD.
     * @since v16.8.0, v14.18.0
     */
    export function toUSVString(string: string): string;
    /**
     * Creates and returns an `AbortController` instance whose `AbortSignal` is marked
     * as transferable and can be used with `structuredClone()` or `postMessage()`.
     * @since v18.11.0
     * @returns A transferable AbortController
     */
    export function transferableAbortController(): AbortController;
    /**
     * Marks the given `AbortSignal` as transferable so that it can be used with`structuredClone()` and `postMessage()`.
     *
     * ```js
     * const signal = transferableAbortSignal(AbortSignal.timeout(100));
     * const channel = new MessageChannel();
     * channel.port2.postMessage(signal, [signal]);
     * ```
     * @since v18.11.0
     * @param signal The AbortSignal
     * @returns The same AbortSignal
     */
    export function transferableAbortSignal(signal: AbortSignal): AbortSignal;
    /**
     * Listens to abort event on the provided `signal` and returns a promise that resolves when the `signal` is aborted.
     * If `resource` is provided, it weakly references the operation's associated object,
     * so if `resource` is garbage collected before the `signal` aborts,
     * then returned promise shall remain pending.
     * This prevents memory leaks in long-running or non-cancelable operations.
     *
     * ```js
     * import { aborted } from 'node:util';
     *
     * // Obtain an object with an abortable signal, like a custom resource or operation.
     * const dependent = obtainSomethingAbortable();
     *
     * // Pass `dependent` as the resource, indicating the promise should only resolve
     * // if `dependent` is still in memory when the signal is aborted.
     * aborted(dependent.signal, dependent).then(() => {
     *   // This code runs when `dependent` is aborted.
     *   console.log('Dependent resource was aborted.');
     * });
     *
     * // Simulate an event that triggers the abort.
     * dependent.on('event', () => {
     *   dependent.abort(); // This will cause the `aborted` promise to resolve.
     * });
     * ```
     * @since v19.7.0
     * @param resource Any non-null object tied to the abortable operation and held weakly.
     * If `resource` is garbage collected before the `signal` aborts, the promise remains pending,
     * allowing Node.js to stop tracking it.
     * This helps prevent memory leaks in long-running or non-cancelable operations.
     */
    export function aborted(signal: AbortSignal, resource: any): Promise<void>;
    /**
     * The `util.inspect()` method returns a string representation of `object` that is
     * intended for debugging. The output of `util.inspect` may change at any time
     * and should not be depended upon programmatically. Additional `options` may be
     * passed that alter the result.
     * `util.inspect()` will use the constructor's name and/or `Symbol.toStringTag`
     * property to make an identifiable tag for an inspected value.
     *
     * ```js
     * class Foo {
     *   get [Symbol.toStringTag]() {
     *     return 'bar';
     *   }
     * }
     *
     * class Bar {}
     *
     * const baz = Object.create(null, { [Symbol.toStringTag]: { value: 'foo' } });
     *
     * util.inspect(new Foo()); // 'Foo [bar] {}'
     * util.inspect(new Bar()); // 'Bar {}'
     * util.inspect(baz);       // '[foo] {}'
     * ```
     *
     * Circular references point to their anchor by using a reference index:
     *
     * ```js
     * import { inspect } from 'node:util';
     *
     * const obj = {};
     * obj.a = [obj];
     * obj.b = {};
     * obj.b.inner = obj.b;
     * obj.b.obj = obj;
     *
     * console.log(inspect(obj));
     * // <ref *1> {
     * //   a: [ [Circular *1] ],
     * //   b: <ref *2> { inner: [Circular *2], obj: [Circular *1] }
     * // }
     * ```
     *
     * The following example inspects all properties of the `util` object:
     *
     * ```js
     * import util from 'node:util';
     *
     * console.log(util.inspect(util, { showHidden: true, depth: null }));
     * ```
     *
     * The following example highlights the effect of the `compact` option:
     *
     * ```js
     * import { inspect } from 'node:util';
     *
     * const o = {
     *   a: [1, 2, [[
     *     'Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit, sed do ' +
     *       'eiusmod \ntempor incididunt ut labore et dolore magna aliqua.',
     *     'test',
     *     'foo']], 4],
     *   b: new Map([['za', 1], ['zb', 'test']]),
     * };
     * console.log(inspect(o, { compact: true, depth: 5, breakLength: 80 }));
     *
     * // { a:
     * //   [ 1,
     * //     2,
     * //     [ [ 'Lorem ipsum dolor sit amet,\nconsectetur [...]', // A long line
     * //           'test',
     * //           'foo' ] ],
     * //     4 ],
     * //   b: Map(2) { 'za' => 1, 'zb' => 'test' } }
     *
     * // Setting `compact` to false or an integer creates more reader friendly output.
     * console.log(inspect(o, { compact: false, depth: 5, breakLength: 80 }));
     *
     * // {
     * //   a: [
     * //     1,
     * //     2,
     * //     [
     * //       [
     * //         'Lorem ipsum dolor sit amet,\n' +
     * //           'consectetur adipiscing elit, sed do eiusmod \n' +
     * //           'tempor incididunt ut labore et dolore magna aliqua.',
     * //         'test',
     * //         'foo'
     * //       ]
     * //     ],
     * //     4
     * //   ],
     * //   b: Map(2) {
     * //     'za' => 1,
     * //     'zb' => 'test'
     * //   }
     * // }
     *
     * // Setting `breakLength` to e.g. 150 will print the "Lorem ipsum" text in a
     * // single line.
     * ```
     *
     * The `showHidden` option allows `WeakMap` and `WeakSet` entries to be
     * inspected. If there are more entries than `maxArrayLength`, there is no
     * guarantee which entries are displayed. That means retrieving the same
     * `WeakSet` entries twice may result in different output. Furthermore, entries
     * with no remaining strong references may be garbage collected at any time.
     *
     * ```js
     * import { inspect } from 'node:util';
     *
     * const obj = { a: 1 };
     * const obj2 = { b: 2 };
     * const weakSet = new WeakSet([obj, obj2]);
     *
     * console.log(inspect(weakSet, { showHidden: true }));
     * // WeakSet { { a: 1 }, { b: 2 } }
     * ```
     *
     * The `sorted` option ensures that an object's property insertion order does not
     * impact the result of `util.inspect()`.
     *
     * ```js
     * import { inspect } from 'node:util';
     * import assert from 'node:assert';
     *
     * const o1 = {
     *   b: [2, 3, 1],
     *   a: '`a` comes before `b`',
     *   c: new Set([2, 3, 1]),
     * };
     * console.log(inspect(o1, { sorted: true }));
     * // { a: '`a` comes before `b`', b: [ 2, 3, 1 ], c: Set(3) { 1, 2, 3 } }
     * console.log(inspect(o1, { sorted: (a, b) => b.localeCompare(a) }));
     * // { c: Set(3) { 3, 2, 1 }, b: [ 2, 3, 1 ], a: '`a` comes before `b`' }
     *
     * const o2 = {
     *   c: new Set([2, 1, 3]),
     *   a: '`a` comes before `b`',
     *   b: [2, 3, 1],
     * };
     * assert.strict.equal(
     *   inspect(o1, { sorted: true }),
     *   inspect(o2, { sorted: true }),
     * );
     * ```
     *
     * The `numericSeparator` option adds an underscore every three digits to all
     * numbers.
     *
     * ```js
     * import { inspect } from 'node:util';
     *
     * const thousand = 1000;
     * const million = 1000000;
     * const bigNumber = 123456789n;
     * const bigDecimal = 1234.12345;
     *
     * console.log(inspect(thousand, { numericSeparator: true }));
     * // 1_000
     * console.log(inspect(million, { numericSeparator: true }));
     * // 1_000_000
     * console.log(inspect(bigNumber, { numericSeparator: true }));
     * // 123_456_789n
     * console.log(inspect(bigDecimal, { numericSeparator: true }));
     * // 1_234.123_45
     * ```
     *
     * `util.inspect()` is a synchronous method intended for debugging. Its maximum
     * output length is approximately 128 MiB. Inputs that result in longer output will
     * be truncated.
     * @since v0.3.0
     * @param object Any JavaScript primitive or `Object`.
     * @return The representation of `object`.
     */
    export function inspect(object: any, showHidden?: boolean, depth?: number | null, color?: boolean): string;
    export function inspect(object: any, options?: InspectOptions): string;
    export namespace inspect {
        let colors: NodeJS.Dict<[number, number]>;
        let styles: {
            [K in Style]: string;
        };
        let defaultOptions: InspectOptions;
        /**
         * Allows changing inspect settings from the repl.
         */
        let replDefaults: InspectOptions;
        /**
         * That can be used to declare custom inspect functions.
         */
        const custom: unique symbol;
    }
    /**
     * Alias for [`Array.isArray()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray).
     *
     * Returns `true` if the given `object` is an `Array`. Otherwise, returns `false`.
     *
     * ```js
     * import util from 'node:util';
     *
     * util.isArray([]);
     * // Returns: true
     * util.isArray(new Array());
     * // Returns: true
     * util.isArray({});
     * // Returns: false
     * ```
     * @since v0.6.0
     * @deprecated Since v4.0.0 - Use `isArray` instead.
     */
    export function isArray(object: unknown): object is unknown[];
    /**
     * Usage of `util.inherits()` is discouraged. Please use the ES6 `class` and
     * `extends` keywords to get language level inheritance support. Also note
     * that the two styles are [semantically incompatible](https://github.com/nodejs/node/issues/4179).
     *
     * Inherit the prototype methods from one
     * [constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor) into another. The
     * prototype of `constructor` will be set to a new object created from
     * `superConstructor`.
     *
     * This mainly adds some input validation on top of
     * `Object.setPrototypeOf(constructor.prototype, superConstructor.prototype)`.
     * As an additional convenience, `superConstructor` will be accessible
     * through the `constructor.super_` property.
     *
     * ```js
     * const util = require('node:util');
     * const EventEmitter = require('node:events');
     *
     * function MyStream() {
     *   EventEmitter.call(this);
     * }
     *
     * util.inherits(MyStream, EventEmitter);
     *
     * MyStream.prototype.write = function(data) {
     *   this.emit('data', data);
     * };
     *
     * const stream = new MyStream();
     *
     * console.log(stream instanceof EventEmitter); // true
     * console.log(MyStream.super_ === EventEmitter); // true
     *
     * stream.on('data', (data) => {
     *   console.log(`Received data: "${data}"`);
     * });
     * stream.write('It works!'); // Received data: "It works!"
     * ```
     *
     * ES6 example using `class` and `extends`:
     *
     * ```js
     * import EventEmitter from 'node:events';
     *
     * class MyStream extends EventEmitter {
     *   write(data) {
     *     this.emit('data', data);
     *   }
     * }
     *
     * const stream = new MyStream();
     *
     * stream.on('data', (data) => {
     *   console.log(`Received data: "${data}"`);
     * });
     * stream.write('With ES6');
     * ```
     * @since v0.3.0
     * @legacy Use ES2015 class syntax and `extends` keyword instead.
     */
    export function inherits(constructor: unknown, superConstructor: unknown): void;
    export type DebugLoggerFunction = (msg: string, ...param: unknown[]) => void;
    export interface DebugLogger extends DebugLoggerFunction {
        /**
         * The `util.debuglog().enabled` getter is used to create a test that can be used
         * in conditionals based on the existence of the `NODE_DEBUG` environment variable.
         * If the `section` name appears within the value of that environment variable,
         * then the returned value will be `true`. If not, then the returned value will be
         * `false`.
         *
         * ```js
         * import { debuglog } from 'node:util';
         * const enabled = debuglog('foo').enabled;
         * if (enabled) {
         *   console.log('hello from foo [%d]', 123);
         * }
         * ```
         *
         * If this program is run with `NODE_DEBUG=foo` in the environment, then it will
         * output something like:
         *
         * ```console
         * hello from foo [123]
         * ```
         */
        enabled: boolean;
    }
    /**
     * The `util.debuglog()` method is used to create a function that conditionally
     * writes debug messages to `stderr` based on the existence of the `NODE_DEBUG`
     * environment variable. If the `section` name appears within the value of that
     * environment variable, then the returned function operates similar to
     * `console.error()`. If not, then the returned function is a no-op.
     *
     * ```js
     * import { debuglog } from 'node:util';
     * const log = debuglog('foo');
     *
     * log('hello from foo [%d]', 123);
     * ```
     *
     * If this program is run with `NODE_DEBUG=foo` in the environment, then
     * it will output something like:
     *
     * ```console
     * FOO 3245: hello from foo [123]
     * ```
     *
     * where `3245` is the process id. If it is not run with that
     * environment variable set, then it will not print anything.
     *
     * The `section` supports wildcard also:
     *
     * ```js
     * import { debuglog } from 'node:util';
     * const log = debuglog('foo');
     *
     * log('hi there, it\'s foo-bar [%d]', 2333);
     * ```
     *
     * if it is run with `NODE_DEBUG=foo*` in the environment, then it will output
     * something like:
     *
     * ```console
     * FOO-BAR 3257: hi there, it's foo-bar [2333]
     * ```
     *
     * Multiple comma-separated `section` names may be specified in the `NODE_DEBUG`
     * environment variable: `NODE_DEBUG=fs,net,tls`.
     *
     * The optional `callback` argument can be used to replace the logging function
     * with a different function that doesn't have any initialization or
     * unnecessary wrapping.
     *
     * ```js
     * import { debuglog } from 'node:util';
     * let log = debuglog('internals', (debug) => {
     *   // Replace with a logging function that optimizes out
     *   // testing if the section is enabled
     *   log = debug;
     * });
     * ```
     * @since v0.11.3
     * @param section A string identifying the portion of the application for which the `debuglog` function is being created.
     * @param callback A callback invoked the first time the logging function is called with a function argument that is a more optimized logging function.
     * @return The logging function
     */
    export function debuglog(section: string, callback?: (fn: DebugLoggerFunction) => void): DebugLogger;
    export { debuglog as debug };
    export interface DeprecateOptions {
        /**
         * When false do not change the prototype of object while emitting the deprecation warning.
         * @since v24.12.0
         * @default true
         */
        modifyPrototype?: boolean | undefined;
    }
    /**
     * The `util.deprecate()` method wraps `fn` (which may be a function or class) in
     * such a way that it is marked as deprecated.
     *
     * ```js
     * import { deprecate } from 'node:util';
     *
     * export const obsoleteFunction = deprecate(() => {
     *   // Do something here.
     * }, 'obsoleteFunction() is deprecated. Use newShinyFunction() instead.');
     * ```
     *
     * When called, `util.deprecate()` will return a function that will emit a
     * `DeprecationWarning` using the `'warning'` event. The warning will
     * be emitted and printed to `stderr` the first time the returned function is
     * called. After the warning is emitted, the wrapped function is called without
     * emitting a warning.
     *
     * If the same optional `code` is supplied in multiple calls to `util.deprecate()`,
     * the warning will be emitted only once for that `code`.
     *
     * ```js
     * import { deprecate } from 'node:util';
     *
     * const fn1 = deprecate(
     *   () => 'a value',
     *   'deprecation message',
     *   'DEP0001',
     * );
     * const fn2 = deprecate(
     *   () => 'a  different value',
     *   'other dep message',
     *   'DEP0001',
     * );
     * fn1(); // Emits a deprecation warning with code DEP0001
     * fn2(); // Does not emit a deprecation warning because it has the same code
     * ```
     *
     * If either the `--no-deprecation` or `--no-warnings` command-line flags are
     * used, or if the `process.noDeprecation` property is set to `true` _prior_ to
     * the first deprecation warning, the `util.deprecate()` method does nothing.
     *
     * If the `--trace-deprecation` or `--trace-warnings` command-line flags are set,
     * or the `process.traceDeprecation` property is set to `true`, a warning and a
     * stack trace are printed to `stderr` the first time the deprecated function is
     * called.
     *
     * If the `--throw-deprecation` command-line flag is set, or the
     * `process.throwDeprecation` property is set to `true`, then an exception will be
     * thrown when the deprecated function is called.
     *
     * The `--throw-deprecation` command-line flag and `process.throwDeprecation`
     * property take precedence over `--trace-deprecation` and
     * `process.traceDeprecation`.
     * @since v0.8.0
     * @param fn The function that is being deprecated.
     * @param msg A warning message to display when the deprecated function is invoked.
     * @param code A deprecation code. See the `list of deprecated APIs` for a list of codes.
     * @return The deprecated function wrapped to emit a warning.
     */
    export function deprecate<T extends Function>(fn: T, msg: string, code?: string, options?: DeprecateOptions): T;
    export interface IsDeepStrictEqualOptions {
        /**
         * If `true`, prototype and constructor
         * comparison is skipped during deep strict equality check.
         * @since v24.9.0
         * @default false
         */
        skipPrototype?: boolean | undefined;
    }
    /**
     * Returns `true` if there is deep strict equality between `val1` and `val2`.
     * Otherwise, returns `false`.
     *
     * See `assert.deepStrictEqual()` for more information about deep strict
     * equality.
     * @since v9.0.0
     */
    export function isDeepStrictEqual(val1: unknown, val2: unknown, options?: IsDeepStrictEqualOptions): boolean;
    /**
     * Returns `str` with any ANSI escape codes removed.
     *
     * ```js
     * console.log(util.stripVTControlCharacters('\u001B[4mvalue\u001B[0m'));
     * // Prints "value"
     * ```
     * @since v16.11.0
     */
    export function stripVTControlCharacters(str: string): string;
    /**
     * Takes an `async` function (or a function that returns a `Promise`) and returns a
     * function following the error-first callback style, i.e. taking
     * an `(err, value) => ...` callback as the last argument. In the callback, the
     * first argument will be the rejection reason (or `null` if the `Promise`
     * resolved), and the second argument will be the resolved value.
     *
     * ```js
     * import { callbackify } from 'node:util';
     *
     * async function fn() {
     *   return 'hello world';
     * }
     * const callbackFunction = callbackify(fn);
     *
     * callbackFunction((err, ret) => {
     *   if (err) throw err;
     *   console.log(ret);
     * });
     * ```
     *
     * Will print:
     *
     * ```text
     * hello world
     * ```
     *
     * The callback is executed asynchronously, and will have a limited stack trace.
     * If the callback throws, the process will emit an `'uncaughtException'`
     * event, and if not handled will exit.
     *
     * Since `null` has a special meaning as the first argument to a callback, if a
     * wrapped function rejects a `Promise` with a falsy value as a reason, the value
     * is wrapped in an `Error` with the original value stored in a field named
     * `reason`.
     *
     * ```js
     * function fn() {
     *   return Promise.reject(null);
     * }
     * const callbackFunction = util.callbackify(fn);
     *
     * callbackFunction((err, ret) => {
     *   // When the Promise was rejected with `null` it is wrapped with an Error and
     *   // the original value is stored in `reason`.
     *   err && Object.hasOwn(err, 'reason') && err.reason === null;  // true
     * });
     * ```
     * @since v8.2.0
     * @param fn An `async` function
     * @return a callback style function
     */
    export function callbackify(fn: () => Promise<void>): (callback: (err: NodeJS.ErrnoException) => void) => void;
    export function callbackify<TResult>(
        fn: () => Promise<TResult>,
    ): (callback: (err: NodeJS.ErrnoException, result: TResult) => void) => void;
    export function callbackify<T1>(
        fn: (arg1: T1) => Promise<void>,
    ): (arg1: T1, callback: (err: NodeJS.ErrnoException) => void) => void;
    export function callbackify<T1, TResult>(
        fn: (arg1: T1) => Promise<TResult>,
    ): (arg1: T1, callback: (err: NodeJS.ErrnoException, result: TResult) => void) => void;
    export function callbackify<T1, T2>(
        fn: (arg1: T1, arg2: T2) => Promise<void>,
    ): (arg1: T1, arg2: T2, callback: (err: NodeJS.ErrnoException) => void) => void;
    export function callbackify<T1, T2, TResult>(
        fn: (arg1: T1, arg2: T2) => Promise<TResult>,
    ): (arg1: T1, arg2: T2, callback: (err: NodeJS.ErrnoException | null, result: TResult) => void) => void;
    export function callbackify<T1, T2, T3>(
        fn: (arg1: T1, arg2: T2, arg3: T3) => Promise<void>,
    ): (arg1: T1, arg2: T2, arg3: T3, callback: (err: NodeJS.ErrnoException) => void) => void;
    export function callbackify<T1, T2, T3, TResult>(
        fn: (arg1: T1, arg2: T2, arg3: T3) => Promise<TResult>,
    ): (arg1: T1, arg2: T2, arg3: T3, callback: (err: NodeJS.ErrnoException | null, result: TResult) => void) => void;
    export function callbackify<T1, T2, T3, T4>(
        fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => Promise<void>,
    ): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, callback: (err: NodeJS.ErrnoException) => void) => void;
    export function callbackify<T1, T2, T3, T4, TResult>(
        fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => Promise<TResult>,
    ): (
        arg1: T1,
        arg2: T2,
        arg3: T3,
        arg4: T4,
        callback: (err: NodeJS.ErrnoException | null, result: TResult) => void,
    ) => void;
    export function callbackify<T1, T2, T3, T4, T5>(
        fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => Promise<void>,
    ): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, callback: (err: NodeJS.ErrnoException) => void) => void;
    export function callbackify<T1, T2, T3, T4, T5, TResult>(
        fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => Promise<TResult>,
    ): (
        arg1: T1,
        arg2: T2,
        arg3: T3,
        arg4: T4,
        arg5: T5,
        callback: (err: NodeJS.ErrnoException | null, result: TResult) => void,
    ) => void;
    export function callbackify<T1, T2, T3, T4, T5, T6>(
        fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6) => Promise<void>,
    ): (
        arg1: T1,
        arg2: T2,
        arg3: T3,
        arg4: T4,
        arg5: T5,
        arg6: T6,
        callback: (err: NodeJS.ErrnoException) => void,
    ) => void;
    export function callbackify<T1, T2, T3, T4, T5, T6, TResult>(
        fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6) => Promise<TResult>,
    ): (
        arg1: T1,
        arg2: T2,
        arg3: T3,
        arg4: T4,
        arg5: T5,
        arg6: T6,
        callback: (err: NodeJS.ErrnoException | null, result: TResult) => void,
    ) => void;
    export interface CustomPromisifyLegacy<TCustom extends Function> extends Function {
        __promisify__: TCustom;
    }
    export interface CustomPromisifySymbol<TCustom extends Function> extends Function {
        [promisify.custom]: TCustom;
    }
    export type CustomPromisify<TCustom extends Function> =
        | CustomPromisifySymbol<TCustom>
        | CustomPromisifyLegacy<TCustom>;
    /**
     * Takes a function following the common error-first callback style, i.e. taking
     * an `(err, value) => ...` callback as the last argument, and returns a version
     * that returns promises.
     *
     * ```js
     * import { promisify } from 'node:util';
     * import { stat } from 'node:fs';
     *
     * const promisifiedStat = promisify(stat);
     * promisifiedStat('.').then((stats) => {
     *   // Do something with `stats`
     * }).catch((error) => {
     *   // Handle the error.
     * });
     * ```
     *
     * Or, equivalently using `async function`s:
     *
     * ```js
     * import { promisify } from 'node:util';
     * import { stat } from 'node:fs';
     *
     * const promisifiedStat = promisify(stat);
     *
     * async function callStat() {
     *   const stats = await promisifiedStat('.');
     *   console.log(`This directory is owned by ${stats.uid}`);
     * }
     *
     * callStat();
     * ```
     *
     * If there is an `original[util.promisify.custom]` property present, `promisify`
     * will return its value, see [Custom promisified functions](https://nodejs.org/docs/latest-v24.x/api/util.html#custom-promisified-functions).
     *
     * `promisify()` assumes that `original` is a function taking a callback as its
     * final argument in all cases. If `original` is not a function, `promisify()`
     * will throw an error. If `original` is a function but its last argument is not
     * an error-first callback, it will still be passed an error-first
     * callback as its last argument.
     *
     * Using `promisify()` on class methods or other methods that use `this` may not
     * work as expected unless handled specially:
     *
     * ```js
     * import { promisify } from 'node:util';
     *
     * class Foo {
     *   constructor() {
     *     this.a = 42;
     *   }
     *
     *   bar(callback) {
     *     callback(null, this.a);
     *   }
     * }
     *
     * const foo = new Foo();
     *
     * const naiveBar = promisify(foo.bar);
     * // TypeError: Cannot read properties of undefined (reading 'a')
     * // naiveBar().then(a => console.log(a));
     *
     * naiveBar.call(foo).then((a) => console.log(a)); // '42'
     *
     * const bindBar = naiveBar.bind(foo);
     * bindBar().then((a) => console.log(a)); // '42'
     * ```
     * @since v8.0.0
     */
    export function promisify<TCustom extends Function>(fn: CustomPromisify<TCustom>): TCustom;
    export function promisify<TResult>(
        fn: (callback: (err: any, result: TResult) => void) => void,
    ): () => Promise<TResult>;
    export function promisify(fn: (callback: (err?: any) => void) => void): () => Promise<void>;
    export function promisify<T1, TResult>(
        fn: (arg1: T1, callback: (err: any, result: TResult) => void) => void,
    ): (arg1: T1) => Promise<TResult>;
    export function promisify<T1>(fn: (arg1: T1, callback: (err?: any) => void) => void): (arg1: T1) => Promise<void>;
    export function promisify<T1, T2, TResult>(
        fn: (arg1: T1, arg2: T2, callback: (err: any, result: TResult) => void) => void,
    ): (arg1: T1, arg2: T2) => Promise<TResult>;
    export function promisify<T1, T2>(
        fn: (arg1: T1, arg2: T2, callback: (err?: any) => void) => void,
    ): (arg1: T1, arg2: T2) => Promise<void>;
    export function promisify<T1, T2, T3, TResult>(
        fn: (arg1: T1, arg2: T2, arg3: T3, callback: (err: any, result: TResult) => void) => void,
    ): (arg1: T1, arg2: T2, arg3: T3) => Promise<TResult>;
    export function promisify<T1, T2, T3>(
        fn: (arg1: T1, arg2: T2, arg3: T3, callback: (err?: any) => void) => void,
    ): (arg1: T1, arg2: T2, arg3: T3) => Promise<void>;
    export function promisify<T1, T2, T3, T4, TResult>(
        fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, callback: (err: any, result: TResult) => void) => void,
    ): (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => Promise<TResult>;
    export function promisify<T1, T2, T3, T4>(
        fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, callback: (err?: any) => void) => void,
    ): (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => Promise<void>;
    export function promisify<T1, T2, T3, T4, T5, TResult>(
        fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, callback: (err: any, result: TResult) => void) => void,
    ): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => Promise<TResult>;
    export function promisify<T1, T2, T3, T4, T5>(
        fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, callback: (err?: any) => void) => void,
    ): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => Promise<void>;
    export function promisify(fn: Function): Function;
    export namespace promisify {
        /**
         * That can be used to declare custom promisified variants of functions.
         */
        const custom: unique symbol;
    }
    /**
     * Stability: 1.1 - Active development
     * Given an example `.env` file:
     *
     * ```js
     * import { parseEnv } from 'node:util';
     *
     * parseEnv('HELLO=world\nHELLO=oh my\n');
     * // Returns: { HELLO: 'oh my' }
     * ```
     * @param content The raw contents of a `.env` file.
     * @since v20.12.0
     */
    export function parseEnv(content: string): NodeJS.Dict<string>;
    // https://nodejs.org/docs/latest/api/util.html#foreground-colors
    type ForegroundColors =
        | "black"
        | "blackBright"
        | "blue"
        | "blueBright"
        | "cyan"
        | "cyanBright"
        | "gray"
        | "green"
        | "greenBright"
        | "grey"
        | "magenta"
        | "magentaBright"
        | "red"
        | "redBright"
        | "white"
        | "whiteBright"
        | "yellow"
        | "yellowBright";
    // https://nodejs.org/docs/latest/api/util.html#background-colors
    type BackgroundColors =
        | "bgBlack"
        | "bgBlackBright"
        | "bgBlue"
        | "bgBlueBright"
        | "bgCyan"
        | "bgCyanBright"
        | "bgGray"
        | "bgGreen"
        | "bgGreenBright"
        | "bgGrey"
        | "bgMagenta"
        | "bgMagentaBright"
        | "bgRed"
        | "bgRedBright"
        | "bgWhite"
        | "bgWhiteBright"
        | "bgYellow"
        | "bgYellowBright";
    // https://nodejs.org/docs/latest/api/util.html#modifiers
    type Modifiers =
        | "blink"
        | "bold"
        | "dim"
        | "doubleunderline"
        | "framed"
        | "hidden"
        | "inverse"
        | "italic"
        | "none"
        | "overlined"
        | "reset"
        | "strikethrough"
        | "underline";
    export interface StyleTextOptions {
        /**
         * When true, `stream` is checked to see if it can handle colors.
         * @default true
         */
        validateStream?: boolean | undefined;
        /**
         * A stream that will be validated if it can be colored.
         * @default process.stdout
         */
        stream?: NodeJS.WritableStream | undefined;
    }
    /**
     * This function returns a formatted text considering the `format` passed
     * for printing in a terminal. It is aware of the terminal's capabilities
     * and acts according to the configuration set via `NO_COLOR`,
     * `NODE_DISABLE_COLORS` and `FORCE_COLOR` environment variables.
     *
     * ```js
     * import { styleText } from 'node:util';
     * import { stderr } from 'node:process';
     *
     * const successMessage = styleText('green', 'Success!');
     * console.log(successMessage);
     *
     * const errorMessage = styleText(
     *   'red',
     *   'Error! Error!',
     *   // Validate if process.stderr has TTY
     *   { stream: stderr },
     * );
     * console.error(errorMessage);
     * ```
     *
     * `util.inspect.colors` also provides text formats such as `italic`, and
     * `underline` and you can combine both:
     *
     * ```js
     * console.log(
     *   util.styleText(['underline', 'italic'], 'My italic underlined message'),
     * );
     * ```
     *
     * When passing an array of formats, the order of the format applied
     * is left to right so the following style might overwrite the previous one.
     *
     * ```js
     * console.log(
     *   util.styleText(['red', 'green'], 'text'), // green
     * );
     * ```
     *
     * The special format value `none` applies no additional styling to the text.
     *
     * The full list of formats can be found in [modifiers](https://nodejs.org/docs/latest-v24.x/api/util.html#modifiers).
     * @param format A text format or an Array of text formats defined in `util.inspect.colors`.
     * @param text The text to to be formatted.
     * @since v20.12.0
     */
    export function styleText(
        format:
            | ForegroundColors
            | BackgroundColors
            | Modifiers
            | Array<ForegroundColors | BackgroundColors | Modifiers>,
        text: string,
        options?: StyleTextOptions,
    ): string;
    /**
     * An implementation of the [WHATWG Encoding Standard](https://encoding.spec.whatwg.org/) `TextDecoder` API.
     *
     * ```js
     * const decoder = new TextDecoder();
     * const u8arr = new Uint8Array([72, 101, 108, 108, 111]);
     * console.log(decoder.decode(u8arr)); // Hello
     * ```
     * @since v8.3.0
     */
    export class TextDecoder {
        /**
         * The encoding supported by the `TextDecoder` instance.
         */
        readonly encoding: string;
        /**
         * The value will be `true` if decoding errors result in a `TypeError` being
         * thrown.
         */
        readonly fatal: boolean;
        /**
         * The value will be `true` if the decoding result will include the byte order
         * mark.
         */
        readonly ignoreBOM: boolean;
        constructor(
            encoding?: string,
            options?: {
                fatal?: boolean | undefined;
                ignoreBOM?: boolean | undefined;
            },
        );
        /**
         * Decodes the `input` and returns a string. If `options.stream` is `true`, any
         * incomplete byte sequences occurring at the end of the `input` are buffered
         * internally and emitted after the next call to `textDecoder.decode()`.
         *
         * If `textDecoder.fatal` is `true`, decoding errors that occur will result in a `TypeError` being thrown.
         * @param input An `ArrayBuffer`, `DataView`, or `TypedArray` instance containing the encoded data.
         */
        decode(
            input?: NodeJS.ArrayBufferView | ArrayBuffer | null,
            options?: {
                stream?: boolean | undefined;
            },
        ): string;
    }
    export interface EncodeIntoResult {
        /**
         * The read Unicode code units of input.
         */
        read: number;
        /**
         * The written UTF-8 bytes of output.
         */
        written: number;
    }
    export { types };

    //// TextEncoder/Decoder
    /**
     * An implementation of the [WHATWG Encoding Standard](https://encoding.spec.whatwg.org/) `TextEncoder` API. All
     * instances of `TextEncoder` only support UTF-8 encoding.
     *
     * ```js
     * const encoder = new TextEncoder();
     * const uint8array = encoder.encode('this is some data');
     * ```
     *
     * The `TextEncoder` class is also available on the global object.
     * @since v8.3.0
     */
    export class TextEncoder {
        /**
         * The encoding supported by the `TextEncoder` instance. Always set to `'utf-8'`.
         */
        readonly encoding: string;
        /**
         * UTF-8 encodes the `input` string and returns a `Uint8Array` containing the
         * encoded bytes.
         * @param [input='an empty string'] The text to encode.
         */
        encode(input?: string): NodeJS.NonSharedUint8Array;
        /**
         * UTF-8 encodes the `src` string to the `dest` Uint8Array and returns an object
         * containing the read Unicode code units and written UTF-8 bytes.
         *
         * ```js
         * const encoder = new TextEncoder();
         * const src = 'this is some data';
         * const dest = new Uint8Array(10);
         * const { read, written } = encoder.encodeInto(src, dest);
         * ```
         * @param src The text to encode.
         * @param dest The array to hold the encode result.
         */
        encodeInto(src: string, dest: Uint8Array): EncodeIntoResult;
    }
    import { TextDecoder as _TextDecoder, TextEncoder as _TextEncoder } from "util";
    global {
        /**
         * `TextDecoder` class is a global reference for `import { TextDecoder } from 'node:util'`
         * https://nodejs.org/api/globals.html#textdecoder
         * @since v11.0.0
         */
        var TextDecoder: typeof globalThis extends {
            onmessage: any;
            TextDecoder: infer TextDecoder;
        } ? TextDecoder
            : typeof _TextDecoder;
        /**
         * `TextEncoder` class is a global reference for `import { TextEncoder } from 'node:util'`
         * https://nodejs.org/api/globals.html#textencoder
         * @since v11.0.0
         */
        var TextEncoder: typeof globalThis extends {
            onmessage: any;
            TextEncoder: infer TextEncoder;
        } ? TextEncoder
            : typeof _TextEncoder;
    }

    //// parseArgs
    /**
     * Provides a higher level API for command-line argument parsing than interacting
     * with `process.argv` directly. Takes a specification for the expected arguments
     * and returns a structured object with the parsed options and positionals.
     *
     * ```js
     * import { parseArgs } from 'node:util';
     * const args = ['-f', '--bar', 'b'];
     * const options = {
     *   foo: {
     *     type: 'boolean',
     *     short: 'f',
     *   },
     *   bar: {
     *     type: 'string',
     *   },
     * };
     * const {
     *   values,
     *   positionals,
     * } = parseArgs({ args, options });
     * console.log(values, positionals);
     * // Prints: [Object: null prototype] { foo: true, bar: 'b' } []
     * ```
     * @since v18.3.0, v16.17.0
     * @param config Used to provide arguments for parsing and to configure the parser. `config` supports the following properties:
     * @return The parsed command line arguments:
     */
    export function parseArgs<T extends ParseArgsConfig>(config?: T): ParsedResults<T>;

    /**
     * Type of argument used in {@link parseArgs}.
     */
    export type ParseArgsOptionsType = "boolean" | "string";

    export interface ParseArgsOptionDescriptor {
        /**
         * Type of argument.
         */
        type: ParseArgsOptionsType;
        /**
         * Whether this option can be provided multiple times.
         * If `true`, all values will be collected in an array.
         * If `false`, values for the option are last-wins.
         * @default false.
         */
        multiple?: boolean | undefined;
        /**
         * A single character alias for the option.
         */
        short?: string | undefined;
        /**
         * The value to assign to
         * the option if it does not appear in the arguments to be parsed. The value
         * must match the type specified by the `type` property. If `multiple` is
         * `true`, it must be an array. No default value is applied when the option
         * does appear in the arguments to be parsed, even if the provided value
         * is falsy.
         * @since v18.11.0
         */
        default?: string | boolean | string[] | boolean[] | undefined;
    }
    export interface ParseArgsOptionsConfig {
        [longOption: string]: ParseArgsOptionDescriptor;
    }
    export interface ParseArgsConfig {
        /**
         * Array of argument strings.
         */
        args?: readonly string[] | undefined;
        /**
         * Used to describe arguments known to the parser.
         */
        options?: ParseArgsOptionsConfig | undefined;
        /**
         * Should an error be thrown when unknown arguments are encountered,
         * or when arguments are passed that do not match the `type` configured in `options`.
         * @default true
         */
        strict?: boolean | undefined;
        /**
         * Whether this command accepts positional arguments.
         */
        allowPositionals?: boolean | undefined;
        /**
         * If `true`, allows explicitly setting boolean options to `false` by prefixing the option name with `--no-`.
         * @default false
         * @since v22.4.0
         */
        allowNegative?: boolean | undefined;
        /**
         * Return the parsed tokens. This is useful for extending the built-in behavior,
         * from adding additional checks through to reprocessing the tokens in different ways.
         * @default false
         */
        tokens?: boolean | undefined;
    }
    /*
    IfDefaultsTrue and IfDefaultsFalse are helpers to handle default values for missing boolean properties.
    TypeScript does not have exact types for objects: https://github.com/microsoft/TypeScript/issues/12936
    This means it is impossible to distinguish between "field X is definitely not present" and "field X may or may not be present".
    But we expect users to generally provide their config inline or `as const`, which means TS will always know whether a given field is present.
    So this helper treats "not definitely present" (i.e., not `extends boolean`) as being "definitely not present", i.e. it should have its default value.
    This is technically incorrect but is a much nicer UX for the common case.
    The IfDefaultsTrue version is for things which default to true; the IfDefaultsFalse version is for things which default to false.
    */
    type IfDefaultsTrue<T, IfTrue, IfFalse> = T extends true ? IfTrue
        : T extends false ? IfFalse
        : IfTrue;

    // we put the `extends false` condition first here because `undefined` compares like `any` when `strictNullChecks: false`
    type IfDefaultsFalse<T, IfTrue, IfFalse> = T extends false ? IfFalse
        : T extends true ? IfTrue
        : IfFalse;

    type ExtractOptionValue<T extends ParseArgsConfig, O extends ParseArgsOptionDescriptor> = IfDefaultsTrue<
        T["strict"],
        O["type"] extends "string" ? string : O["type"] extends "boolean" ? boolean : string | boolean,
        string | boolean
    >;

    type ApplyOptionalModifiers<O extends ParseArgsOptionsConfig, V extends Record<keyof O, unknown>> = (
        & { -readonly [LongOption in keyof O]?: V[LongOption] }
        & { [LongOption in keyof O as O[LongOption]["default"] extends {} ? LongOption : never]: V[LongOption] }
    ) extends infer P ? { [K in keyof P]: P[K] } : never; // resolve intersection to object

    type ParsedValues<T extends ParseArgsConfig> =
        & IfDefaultsTrue<T["strict"], unknown, { [longOption: string]: undefined | string | boolean }>
        & (T["options"] extends ParseArgsOptionsConfig ? ApplyOptionalModifiers<
                T["options"],
                {
                    [LongOption in keyof T["options"]]: IfDefaultsFalse<
                        T["options"][LongOption]["multiple"],
                        Array<ExtractOptionValue<T, T["options"][LongOption]>>,
                        ExtractOptionValue<T, T["options"][LongOption]>
                    >;
                }
            >
            : {});

    type ParsedPositionals<T extends ParseArgsConfig> = IfDefaultsTrue<
        T["strict"],
        IfDefaultsFalse<T["allowPositionals"], string[], []>,
        IfDefaultsTrue<T["allowPositionals"], string[], []>
    >;

    type PreciseTokenForOptions<
        K extends string,
        O extends ParseArgsOptionDescriptor,
    > = O["type"] extends "string" ? {
            kind: "option";
            index: number;
            name: K;
            rawName: string;
            value: string;
            inlineValue: boolean;
        }
        : O["type"] extends "boolean" ? {
                kind: "option";
                index: number;
                name: K;
                rawName: string;
                value: undefined;
                inlineValue: undefined;
            }
        : OptionToken & { name: K };

    type TokenForOptions<
        T extends ParseArgsConfig,
        K extends keyof T["options"] = keyof T["options"],
    > = K extends unknown
        ? T["options"] extends ParseArgsOptionsConfig ? PreciseTokenForOptions<K & string, T["options"][K]>
        : OptionToken
        : never;

    type ParsedOptionToken<T extends ParseArgsConfig> = IfDefaultsTrue<T["strict"], TokenForOptions<T>, OptionToken>;

    type ParsedPositionalToken<T extends ParseArgsConfig> = IfDefaultsTrue<
        T["strict"],
        IfDefaultsFalse<T["allowPositionals"], { kind: "positional"; index: number; value: string }, never>,
        IfDefaultsTrue<T["allowPositionals"], { kind: "positional"; index: number; value: string }, never>
    >;

    type ParsedTokens<T extends ParseArgsConfig> = Array<
        ParsedOptionToken<T> | ParsedPositionalToken<T> | { kind: "option-terminator"; index: number }
    >;

    type PreciseParsedResults<T extends ParseArgsConfig> = IfDefaultsFalse<
        T["tokens"],
        {
            values: ParsedValues<T>;
            positionals: ParsedPositionals<T>;
            tokens: ParsedTokens<T>;
        },
        {
            values: ParsedValues<T>;
            positionals: ParsedPositionals<T>;
        }
    >;

    type OptionToken =
        | { kind: "option"; index: number; name: string; rawName: string; value: string; inlineValue: boolean }
        | {
            kind: "option";
            index: number;
            name: string;
            rawName: string;
            value: undefined;
            inlineValue: undefined;
        };

    type Token =
        | OptionToken
        | { kind: "positional"; index: number; value: string }
        | { kind: "option-terminator"; index: number };

    // If ParseArgsConfig extends T, then the user passed config constructed elsewhere.
    // So we can't rely on the `"not definitely present" implies "definitely not present"` assumption mentioned above.
    type ParsedResults<T extends ParseArgsConfig> = ParseArgsConfig extends T ? {
            values: {
                [longOption: string]: undefined | string | boolean | Array<string | boolean>;
            };
            positionals: string[];
            tokens?: Token[];
        }
        : PreciseParsedResults<T>;

    /**
     * An implementation of [the MIMEType class](https://bmeck.github.io/node-proposal-mime-api/).
     *
     * In accordance with browser conventions, all properties of `MIMEType` objects
     * are implemented as getters and setters on the class prototype, rather than as
     * data properties on the object itself.
     *
     * A MIME string is a structured string containing multiple meaningful
     * components. When parsed, a `MIMEType` object is returned containing
     * properties for each of these components.
     * @since v19.1.0, v18.13.0
     */
    export class MIMEType {
        /**
         * Creates a new MIMEType object by parsing the input.
         *
         * A `TypeError` will be thrown if the `input` is not a valid MIME.
         * Note that an effort will be made to coerce the given values into strings.
         * @param input The input MIME to parse.
         */
        constructor(input: string | { toString: () => string });

        /**
         * Gets and sets the type portion of the MIME.
         *
         * ```js
         * import { MIMEType } from 'node:util';
         *
         * const myMIME = new MIMEType('text/javascript');
         * console.log(myMIME.type);
         * // Prints: text
         * myMIME.type = 'application';
         * console.log(myMIME.type);
         * // Prints: application
         * console.log(String(myMIME));
         * // Prints: application/javascript
         * ```
         */
        type: string;
        /**
         * Gets and sets the subtype portion of the MIME.
         *
         * ```js
         * import { MIMEType } from 'node:util';
         *
         * const myMIME = new MIMEType('text/ecmascript');
         * console.log(myMIME.subtype);
         * // Prints: ecmascript
         * myMIME.subtype = 'javascript';
         * console.log(myMIME.subtype);
         * // Prints: javascript
         * console.log(String(myMIME));
         * // Prints: text/javascript
         * ```
         */
        subtype: string;
        /**
         * Gets the essence of the MIME. This property is read only.
         * Use `mime.type` or `mime.subtype` to alter the MIME.
         *
         * ```js
         * import { MIMEType } from 'node:util';
         *
         * const myMIME = new MIMEType('text/javascript;key=value');
         * console.log(myMIME.essence);
         * // Prints: text/javascript
         * myMIME.type = 'application';
         * console.log(myMIME.essence);
         * // Prints: application/javascript
         * console.log(String(myMIME));
         * // Prints: application/javascript;key=value
         * ```
         */
        readonly essence: string;
        /**
         * Gets the `MIMEParams` object representing the
         * parameters of the MIME. This property is read-only. See `MIMEParams` documentation for details.
         */
        readonly params: MIMEParams;
        /**
         * The `toString()` method on the `MIMEType` object returns the serialized MIME.
         *
         * Because of the need for standard compliance, this method does not allow users
         * to customize the serialization process of the MIME.
         */
        toString(): string;
    }
    /**
     * The `MIMEParams` API provides read and write access to the parameters of a `MIMEType`.
     * @since v19.1.0, v18.13.0
     */
    export class MIMEParams {
        /**
         * Remove all name-value pairs whose name is `name`.
         */
        delete(name: string): void;
        /**
         * Returns an iterator over each of the name-value pairs in the parameters.
         * Each item of the iterator is a JavaScript `Array`. The first item of the array
         * is the `name`, the second item of the array is the `value`.
         */
        entries(): NodeJS.Iterator<[name: string, value: string]>;
        /**
         * Returns the value of the first name-value pair whose name is `name`. If there
         * are no such pairs, `null` is returned.
         * @return or `null` if there is no name-value pair with the given `name`.
         */
        get(name: string): string | null;
        /**
         * Returns `true` if there is at least one name-value pair whose name is `name`.
         */
        has(name: string): boolean;
        /**
         * Returns an iterator over the names of each name-value pair.
         *
         * ```js
         * import { MIMEType } from 'node:util';
         *
         * const { params } = new MIMEType('text/plain;foo=0;bar=1');
         * for (const name of params.keys()) {
         *   console.log(name);
         * }
         * // Prints:
         * //   foo
         * //   bar
         * ```
         */
        keys(): NodeJS.Iterator<string>;
        /**
         * Sets the value in the `MIMEParams` object associated with `name` to `value`. If there are any pre-existing name-value pairs whose names are `name`,
         * set the first such pair's value to `value`.
         *
         * ```js
         * import { MIMEType } from 'node:util';
         *
         * const { params } = new MIMEType('text/plain;foo=0;bar=1');
         * params.set('foo', 'def');
         * params.set('baz', 'xyz');
         * console.log(params.toString());
         * // Prints: foo=def;bar=1;baz=xyz
         * ```
         */
        set(name: string, value: string): void;
        /**
         * Returns an iterator over the values of each name-value pair.
         */
        values(): NodeJS.Iterator<string>;
        /**
         * Returns an iterator over each of the name-value pairs in the parameters.
         */
        [Symbol.iterator](): NodeJS.Iterator<[name: string, value: string]>;
    }
}
declare module "util/types" {
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
     * [`napi_create_external()`](https://nodejs.org/docs/latest-v24.x/api/n-api.html#napi_create_external).
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
declare module "node:util" {
    export * from "util";
}
declare module "node:util/types" {
    export * from "util/types";
}
