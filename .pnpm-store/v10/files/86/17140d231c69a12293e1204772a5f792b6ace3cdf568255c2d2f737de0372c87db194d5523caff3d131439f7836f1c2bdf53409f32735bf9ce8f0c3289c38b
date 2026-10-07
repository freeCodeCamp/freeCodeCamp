import { bigUintN } from '../bigUintN.js';
import { Arbitrary } from '../../check/arbitrary/definition/Arbitrary.js';
import { Value } from '../../check/arbitrary/definition/Value.js';
import { makeLazy } from '../../stream/LazyIterableIterator.js';
import { applyFlagsOnChars, computeFlagsFromChars, computeNextFlags, computeTogglePositions, } from './helpers/ToggleFlags.js';
import { safeJoin, safeSlice } from '../../utils/globals.js';
import { BigInt } from '../../utils/globals.js';
export class MixedCaseArbitrary extends Arbitrary {
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
        const togglePositions = computeTogglePositions(chars, this.toggleCase);
        const flagsArb = bigUintN(togglePositions.length);
        const flagsValue = flagsArb.generate(mrng, undefined);
        applyFlagsOnChars(chars, flagsValue.value, togglePositions, this.toggleCase);
        return new Value(safeJoin(chars, ''), this.buildContextFor(rawStringValue, flagsValue));
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
                const togglePositions = computeTogglePositions(untoggledValueChars, this.toggleCase);
                contextSafe = {
                    rawString: untoggledValue,
                    rawStringContext: undefined,
                    flags: computeFlagsFromChars(untoggledValueChars, valueChars, togglePositions),
                    flagsContext: undefined,
                };
            }
            else {
                contextSafe = {
                    rawString: value,
                    rawStringContext: undefined,
                    flags: BigInt(0),
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
            const nTogglePositions = computeTogglePositions(nChars, this.toggleCase);
            const nFlags = computeNextFlags(flags, nTogglePositions.length);
            applyFlagsOnChars(nChars, nFlags, nTogglePositions, this.toggleCase);
            return new Value(safeJoin(nChars, ''), this.buildContextFor(nRawStringValue, new Value(nFlags, undefined)));
        })
            .join(makeLazy(() => {
            const chars = [...rawString];
            const togglePositions = computeTogglePositions(chars, this.toggleCase);
            return bigUintN(togglePositions.length)
                .shrink(flags, contextSafe.flagsContext)
                .map((nFlagsValue) => {
                const nChars = safeSlice(chars);
                applyFlagsOnChars(nChars, nFlagsValue.value, togglePositions, this.toggleCase);
                return new Value(safeJoin(nChars, ''), this.buildContextFor(new Value(rawString, contextSafe.rawStringContext), nFlagsValue));
            });
        }));
    }
}
