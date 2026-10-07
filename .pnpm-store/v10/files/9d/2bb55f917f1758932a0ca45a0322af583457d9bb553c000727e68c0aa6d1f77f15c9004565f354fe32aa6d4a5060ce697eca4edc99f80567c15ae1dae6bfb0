declare module "node:assert/strict" {
    import {
        Assert,
        AssertionError,
        AssertionErrorOptions,
        AssertOptions,
        AssertPredicate,
        AssertStrict,
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
declare module "assert/strict" {
    import strict = require("node:assert/strict");
    export = strict;
}
