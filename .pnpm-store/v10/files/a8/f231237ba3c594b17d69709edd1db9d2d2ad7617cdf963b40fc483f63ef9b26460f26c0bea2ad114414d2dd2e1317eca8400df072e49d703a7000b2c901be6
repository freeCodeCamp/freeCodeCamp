// deno-fmt-ignore-file
import { Arguments } from '../../system/arguments/index.mjs';
import { Memory } from '../../system/memory/index.mjs';
import { Guard } from '../../guard/index.mjs';
import { IsSchema } from './schema.mjs';
/** Applies a Refine check to the given type. */
export function RefineAdd(type, refinement) {
    const refinements = IsRefine(type) ? [...type['~refine'], refinement] : [refinement];
    return Memory.Update(type, { '~refine': refinements }, {});
}
/** Refines a type with an explicit check */
export function Refine(...args) {
    const [type, check, error_or_message] = Arguments.Match(args, {
        3: (type, check, error) => [type, check, error],
        2: (type, check) => [type, check, () => 'Refine Error'],
    });
    const error = Guard.IsString(error_or_message) ? () => error_or_message : error_or_message;
    return RefineAdd(type, { check, error });
}
// ------------------------------------------------------------------
// Guard
// ------------------------------------------------------------------
/** Returns true if the given value is a TRefinement. */
export function IsRefinement(value) {
    return Guard.IsObjectNotArray(value)
        && Guard.HasPropertyKey(value, 'check')
        && Guard.HasPropertyKey(value, 'error')
        && Guard.IsFunction(value.check)
        && Guard.IsFunction(value.error);
}
/** Returns true if the given value is a TRefine. */
export function IsRefine(value) {
    return IsSchema(value)
        && Guard.HasPropertyKey(value, '~refine')
        && Guard.IsArray(value['~refine'])
        && Guard.Every(value['~refine'], 0, value => IsRefinement(value));
}
