// deno-fmt-ignore-file
import { Memory } from '../../system/memory/index.mjs';
import { IsKind } from './schema.mjs';
// ------------------------------------------------------------------
// Factory
// ------------------------------------------------------------------
/** Creates a Constructor type. */
export function Constructor(parameters, instanceType, options = {}) {
    return Memory.Create({ '~kind': 'Constructor' }, { type: 'constructor', parameters, instanceType }, options);
}
// ------------------------------------------------------------------
// Guard
// ------------------------------------------------------------------
/** Returns true if the given value is a TConstructor. */
export function IsConstructor(value) {
    return IsKind(value, 'Constructor');
}
// ------------------------------------------------------------------
// Options
// ------------------------------------------------------------------
/** Extracts options from a TConstructor. */
export function ConstructorOptions(type) {
    return Memory.Discard(type, ['~kind', 'type', 'parameters', 'instanceType']);
}
