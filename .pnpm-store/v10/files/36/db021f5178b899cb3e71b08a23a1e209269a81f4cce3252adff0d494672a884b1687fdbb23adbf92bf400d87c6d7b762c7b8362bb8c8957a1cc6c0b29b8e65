// deno-fmt-ignore-file
import { Memory } from '../../system/memory/index.mjs';
import { IsKind } from './schema.mjs';
// ------------------------------------------------------------------
// Factory
// ------------------------------------------------------------------
/** Creates a Function type. */
export function _Function_(parameters, returnType, options = {}) {
    return Memory.Create({ ['~kind']: 'Function' }, { type: 'function', parameters, returnType }, options);
}
export { _Function_ as Function }; // Prevent Collision With Global Scope
// ------------------------------------------------------------------
// Guard
// ------------------------------------------------------------------
/** Returns true if the given value is TFunction. */
export function IsFunction(value) {
    return IsKind(value, 'Function');
}
// ------------------------------------------------------------------
// Options
// ------------------------------------------------------------------
/** Extracts options from a TFunction. */
export function FunctionOptions(type) {
    return Memory.Discard(type, ['~kind', 'type', 'parameters', 'returnType']);
}
