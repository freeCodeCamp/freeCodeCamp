"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.boxedArbitraryBuilder = boxedArbitraryBuilder;
const UnboxedToBoxed_1 = require("../mappers/UnboxedToBoxed");
function boxedArbitraryBuilder(arb) {
    return arb.map(UnboxedToBoxed_1.unboxedToBoxedMapper, UnboxedToBoxed_1.unboxedToBoxedUnmapper);
}
