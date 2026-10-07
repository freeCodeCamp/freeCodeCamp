// deno-fmt-ignore-file
import { Guard, GlobalsGuard } from '../../guard/index.mjs';
import { MutateError } from './error.mjs';
import { FromValue } from './from_value.mjs';
// ------------------------------------------------------------------
// IsNonMutableValue
// ------------------------------------------------------------------
function IsNonMutableValue(value) {
    return GlobalsGuard.IsTypeArray(value)
        || GlobalsGuard.IsDate(value)
        || GlobalsGuard.IsMap(value)
        || GlobalsGuard.IsSet(value)
        || Guard.IsNumber(value)
        || Guard.IsString(value)
        || Guard.IsBoolean(value)
        || Guard.IsSymbol(value);
}
// ------------------------------------------------------------------
// IsTrueObject
// ------------------------------------------------------------------
function IsMismatchedValue(left, right) {
    return ((Guard.IsObjectNotArray(left) && Guard.IsArray(right)) ||
        (Guard.IsArray(left) && Guard.IsObjectNotArray(right)));
}
// ------------------------------------------------------------------
// Mutate
// ------------------------------------------------------------------
/**
 * Performs a deep structural assignment, applying values from next to current while retaining internal references. This function
 * is written for use in infrastructure that interprets reference changes as a signal to perform some action (i.e. React redraw), this
 * function can mitigate this by applying mutable updates deep within a value, ensuring parent references are retained.
 *
 * @deprecated This function is being removed in the next version but will be retained as a reference under examples.
 */
export function Mutate(current, next) {
    if (IsNonMutableValue(current) || IsNonMutableValue(next))
        throw new MutateError('Only object and array types can be mutated at the root level');
    if (IsMismatchedValue(current, next))
        throw new MutateError('Cannot assign due type mismatch of assignable values');
    FromValue(current, '', current, next);
}
