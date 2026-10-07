"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncProperty = asyncProperty;
const Arbitrary_1 = require("../arbitrary/definition/Arbitrary");
const tuple_1 = require("../../arbitrary/tuple");
const AsyncProperty_generic_1 = require("./AsyncProperty.generic");
const AlwaysShrinkableArbitrary_1 = require("../../arbitrary/_internals/AlwaysShrinkableArbitrary");
const globals_1 = require("../../utils/globals");
function asyncProperty(...args) {
    if (args.length < 2) {
        throw new Error('asyncProperty expects at least two parameters');
    }
    const arbs = (0, globals_1.safeSlice)(args, 0, args.length - 1);
    const p = args[args.length - 1];
    (0, globals_1.safeForEach)(arbs, Arbitrary_1.assertIsArbitrary);
    const mappedArbs = (0, globals_1.safeMap)(arbs, (arb) => new AlwaysShrinkableArbitrary_1.AlwaysShrinkableArbitrary(arb));
    return new AsyncProperty_generic_1.AsyncProperty((0, tuple_1.tuple)(...mappedArbs), (t) => p(...t));
}
