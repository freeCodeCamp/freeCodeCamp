"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildGeneratorValue = buildGeneratorValue;
const Value_1 = require("../../../check/arbitrary/definition/Value");
const symbols_1 = require("../../../check/symbols");
const globals_1 = require("../../../utils/globals");
const stringify_1 = require("../../../utils/stringify");
const safeObjectAssign = Object.assign;
function buildGeneratorValue(mrng, biasFactor, computePreBuiltValues, arbitraryCache) {
    const preBuiltValues = computePreBuiltValues();
    let localMrng = mrng.clone();
    const context = { mrng: mrng.clone(), biasFactor, history: [] };
    const valueFunction = (arb) => {
        const preBuiltValue = preBuiltValues[context.history.length];
        if (preBuiltValue !== undefined && preBuiltValue.arb === arb) {
            const value = preBuiltValue.value;
            (0, globals_1.safePush)(context.history, { arb, value, context: preBuiltValue.context, mrng: preBuiltValue.mrng });
            localMrng = preBuiltValue.mrng.clone();
            return value;
        }
        const g = arb.generate(localMrng, biasFactor);
        (0, globals_1.safePush)(context.history, { arb, value: g.value_, context: g.context, mrng: localMrng.clone() });
        return g.value;
    };
    const memoedValueFunction = (arb, ...args) => {
        return valueFunction(arbitraryCache(arb, args));
    };
    const valueMethods = {
        values() {
            return (0, globals_1.safeMap)(context.history, (c) => c.value);
        },
        [symbols_1.cloneMethod]() {
            return buildGeneratorValue(mrng, biasFactor, computePreBuiltValues, arbitraryCache).value;
        },
        [stringify_1.toStringMethod]() {
            return (0, stringify_1.stringify)((0, globals_1.safeMap)(context.history, (c) => c.value));
        },
    };
    const value = safeObjectAssign(memoedValueFunction, valueMethods);
    return new Value_1.Value(value, context);
}
