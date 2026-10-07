"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.property = property;
const Arbitrary_1 = require("../arbitrary/definition/Arbitrary");
const tuple_1 = require("../../arbitrary/tuple");
const Property_generic_1 = require("./Property.generic");
const AlwaysShrinkableArbitrary_1 = require("../../arbitrary/_internals/AlwaysShrinkableArbitrary");
const globals_1 = require("../../utils/globals");
function property(...args) {
    if (args.length < 2) {
        throw new Error('property expects at least two parameters');
    }
    const arbs = (0, globals_1.safeSlice)(args, 0, args.length - 1);
    const p = args[args.length - 1];
    (0, globals_1.safeForEach)(arbs, Arbitrary_1.assertIsArbitrary);
    const mappedArbs = (0, globals_1.safeMap)(arbs, (arb) => new AlwaysShrinkableArbitrary_1.AlwaysShrinkableArbitrary(arb));
    return new Property_generic_1.Property((0, tuple_1.tuple)(...mappedArbs), (t) => p(...t));
}
