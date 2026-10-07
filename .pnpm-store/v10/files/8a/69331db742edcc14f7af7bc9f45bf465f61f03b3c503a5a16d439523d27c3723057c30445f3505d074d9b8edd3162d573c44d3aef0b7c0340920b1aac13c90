"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adapter = adapter;
const Arbitrary_1 = require("../../check/arbitrary/definition/Arbitrary");
const Value_1 = require("../../check/arbitrary/definition/Value");
const Stream_1 = require("../../stream/Stream");
const AdaptedValue = Symbol('adapted-value');
function toAdapterValue(rawValue, adapter) {
    const adapted = adapter(rawValue.value_);
    if (!adapted.adapted) {
        return rawValue;
    }
    return new Value_1.Value(adapted.value, AdaptedValue);
}
class AdapterArbitrary extends Arbitrary_1.Arbitrary {
    constructor(sourceArb, adapter) {
        super();
        this.sourceArb = sourceArb;
        this.adapter = adapter;
        this.adaptValue = (rawValue) => toAdapterValue(rawValue, adapter);
    }
    generate(mrng, biasFactor) {
        const rawValue = this.sourceArb.generate(mrng, biasFactor);
        return this.adaptValue(rawValue);
    }
    canShrinkWithoutContext(value) {
        return this.sourceArb.canShrinkWithoutContext(value) && !this.adapter(value).adapted;
    }
    shrink(value, context) {
        if (context === AdaptedValue) {
            if (!this.sourceArb.canShrinkWithoutContext(value)) {
                return Stream_1.Stream.nil();
            }
            return this.sourceArb.shrink(value, undefined).map(this.adaptValue);
        }
        return this.sourceArb.shrink(value, context).map(this.adaptValue);
    }
}
function adapter(sourceArb, adapter) {
    return new AdapterArbitrary(sourceArb, adapter);
}
