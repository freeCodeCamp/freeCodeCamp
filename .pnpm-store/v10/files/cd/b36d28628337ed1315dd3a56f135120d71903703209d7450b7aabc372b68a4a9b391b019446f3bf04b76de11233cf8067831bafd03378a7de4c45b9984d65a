"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlwaysShrinkableArbitrary = void 0;
const Arbitrary_1 = require("../../check/arbitrary/definition/Arbitrary");
const Stream_1 = require("../../stream/Stream");
const NoUndefinedAsContext_1 = require("./helpers/NoUndefinedAsContext");
class AlwaysShrinkableArbitrary extends Arbitrary_1.Arbitrary {
    constructor(arb) {
        super();
        this.arb = arb;
    }
    generate(mrng, biasFactor) {
        const value = this.arb.generate(mrng, biasFactor);
        return (0, NoUndefinedAsContext_1.noUndefinedAsContext)(value);
    }
    canShrinkWithoutContext(value) {
        return true;
    }
    shrink(value, context) {
        if (context === undefined && !this.arb.canShrinkWithoutContext(value)) {
            return Stream_1.Stream.nil();
        }
        const safeContext = context !== NoUndefinedAsContext_1.UndefinedContextPlaceholder ? context : undefined;
        return this.arb.shrink(value, safeContext).map(NoUndefinedAsContext_1.noUndefinedAsContext);
    }
}
exports.AlwaysShrinkableArbitrary = AlwaysShrinkableArbitrary;
