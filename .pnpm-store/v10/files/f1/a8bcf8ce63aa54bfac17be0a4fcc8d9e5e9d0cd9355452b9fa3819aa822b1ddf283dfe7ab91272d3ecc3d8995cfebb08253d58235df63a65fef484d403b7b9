/**
 * In strict assertion mode, non-strict methods behave like their corresponding
 * strict methods. For example, `assert.deepEqual()` will behave like
 * `assert.deepStrictEqual()`.
 *
 * In strict assertion mode, error messages for objects display a diff. In legacy
 * assertion mode, error messages for objects display the objects, often truncated.
 *
 * To use strict assertion mode:
 *
 * ```js
 * import { strict as assert } from 'node:assert';
 * ```
 *
 * ```js
 * import assert from 'node:assert/strict';
 * ```
 *
 * Example error diff:
 *
 * ```js
 * import { strict as assert } from 'node:assert';
 *
 * assert.deepEqual([[[1, 2, 3]], 4, 5], [[[1, 2, '3']], 4, 5]);
 * // AssertionError: Expected inputs to be strictly deep-equal:
 * // + actual - expected ... Lines skipped
 * //
 * //   [
 * //     [
 * // ...
 * //       2,
 * // +     3
 * // -     '3'
 * //     ],
 * // ...
 * //     5
 * //   ]
 * ```
 *
 * To deactivate the colors, use the `NO_COLOR` or `NODE_DISABLE_COLORS`
 * environment variables. This will also deactivate the colors in the REPL. For
 * more on color support in terminal environments, read the tty
 * [`getColorDepth()`](https://nodejs.org/docs/latest-v24.x/api/tty.html#writestreamgetcolordepthenv) documentation.
 * @since v15.0.0
 * @see [source](https://github.com/nodejs/node/blob/v24.x/lib/assert/strict.js)
 */
declare module "assert/strict" {
    import {
        Assert,
        AssertionError,
        AssertionErrorOptions,
        AssertOptions,
        AssertPredicate,
        AssertStrict,
        CallTracker,
        CallTrackerCall,
        CallTrackerReportInformation,
        deepStrictEqual,
        doesNotMatch,
        doesNotReject,
        doesNotThrow,
        fail,
        ifError,
        match,
        notDeepStrictEqual,
        notStrictEqual,
        ok,
        partialDeepStrictEqual,
        rejects,
        strictEqual,
        throws,
    } from "node:assert";
    function strict(value: unknown, message?: string | Error): asserts value;
    namespace strict {
        export {
            Assert,
            AssertionError,
            AssertionErrorOptions,
            AssertOptions,
            AssertPredicate,
            AssertStrict,
            CallTracker,
            CallTrackerCall,
            CallTrackerReportInformation,
            deepStrictEqual,
            deepStrictEqual as deepEqual,
            doesNotMatch,
            doesNotReject,
            doesNotThrow,
            fail,
            ifError,
            match,
            notDeepStrictEqual,
            notDeepStrictEqual as notDeepEqual,
            notStrictEqual,
            notStrictEqual as notEqual,
            ok,
            partialDeepStrictEqual,
            rejects,
            strict,
            strictEqual,
            strictEqual as equal,
            throws,
        };
    }
    export = strict;
}
declare module "node:assert/strict" {
    import strict = require("assert/strict");
    export = strict;
}
