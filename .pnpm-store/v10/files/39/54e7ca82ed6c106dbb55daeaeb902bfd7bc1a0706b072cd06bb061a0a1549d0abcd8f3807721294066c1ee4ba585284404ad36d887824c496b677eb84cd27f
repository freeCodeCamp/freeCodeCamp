"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MixedCaseArbitrary = void 0;
const bigUintN_1 = require("../bigUintN");
const Arbitrary_1 = require("../../check/arbitrary/definition/Arbitrary");
const Value_1 = require("../../check/arbitrary/definition/Value");
const LazyIterableIterator_1 = require("../../stream/LazyIterableIterator");
const ToggleFlags_1 = require("./helpers/ToggleFlags");
const globals_1 = require("../../utils/globals");
const globals_2 = require("../../utils/globals");
class MixedCaseArbitrary extends Arbitrary_1.Arbitrary {
    constructor(stringArb, toggleCase, untoggleAll) {
        super();
        this.stringArb = stringArb;
        this.toggleCase = toggleCase;
        this.untoggleAll = untoggleAll;
    }
    buildContextFor(rawStringValue, flagsValue) {
        return {
            rawString: rawStringValue.value,
            rawStringContext: rawStringValue.context,
            flags: flagsValue.value,
            flagsContext: flagsValue.context,
        };
    }
    generate(mrng, biasFactor) {
        const rawStringValue = this.stringArb.generate(mrng, biasFactor);
        const chars = [...rawStringValue.value];
        const togglePositions = (0, ToggleFlags_1.computeTogglePositions)(chars, this.toggleCase);
        const flagsArb = (0, bigUintN_1.bigUintN)(togglePositions.length);
        const flagsValue = flagsArb.generate(mrng, undefined);
        (0, ToggleFlags_1.applyFlagsOnChars)(chars, flagsValue.value, togglePositions, this.toggleCase);
        return new Value_1.Value((0, globals_1.safeJoin)(chars, ''), this.buildContextFor(rawStringValue, flagsValue));
    }
    canShrinkWithoutContext(value) {
        if (typeof value !== 'string') {
            return false;
        }
        return this.untoggleAll !== undefined
            ? this.stringArb.canShrinkWithoutContext(this.untoggleAll(value))
            :
                this.stringArb.canShrinkWithoutContext(value);
    }
    shrink(value, context) {
        let contextSafe;
        if (context !== undefined) {
            contextSafe = context;
        }
        else {
            if (this.untoggleAll !== undefined) {
                const untoggledValue = this.untoggleAll(value);
                const valueChars = [...value];
                const untoggledValueChars = [...untoggledValue];
                const togglePositions = (0, ToggleFlags_1.computeTogglePositions)(untoggledValueChars, this.toggleCase);
                contextSafe = {
                    rawString: untoggledValue,
                    rawStringContext: undefined,
                    flags: (0, ToggleFlags_1.computeFlagsFromChars)(untoggledValueChars, valueChars, togglePositions),
                    flagsContext: undefined,
                };
            }
            else {
                contextSafe = {
                    rawString: value,
                    rawStringContext: undefined,
                    flags: (0, globals_2.BigInt)(0),
                    flagsContext: undefined,
                };
            }
        }
        const rawString = contextSafe.rawString;
        const flags = contextSafe.flags;
        return this.stringArb
            .shrink(rawString, contextSafe.rawStringContext)
            .map((nRawStringValue) => {
            const nChars = [...nRawStringValue.value];
            const nTogglePositions = (0, ToggleFlags_1.computeTogglePositions)(nChars, this.toggleCase);
            const nFlags = (0, ToggleFlags_1.computeNextFlags)(flags, nTogglePositions.length);
            (0, ToggleFlags_1.applyFlagsOnChars)(nChars, nFlags, nTogglePositions, this.toggleCase);
            return new Value_1.Value((0, globals_1.safeJoin)(nChars, ''), this.buildContextFor(nRawStringValue, new Value_1.Value(nFlags, undefined)));
        })
            .join((0, LazyIterableIterator_1.makeLazy)(() => {
            const chars = [...rawString];
            const togglePositions = (0, ToggleFlags_1.computeTogglePositions)(chars, this.toggleCase);
            return (0, bigUintN_1.bigUintN)(togglePositions.length)
                .shrink(flags, contextSafe.flagsContext)
                .map((nFlagsValue) => {
                const nChars = (0, globals_1.safeSlice)(chars);
                (0, ToggleFlags_1.applyFlagsOnChars)(nChars, nFlagsValue.value, togglePositions, this.toggleCase);
                return new Value_1.Value((0, globals_1.safeJoin)(nChars, ''), this.buildContextFor(new Value_1.Value(rawString, contextSafe.rawStringContext), nFlagsValue));
            });
        }));
    }
}
exports.MixedCaseArbitrary = MixedCaseArbitrary;
