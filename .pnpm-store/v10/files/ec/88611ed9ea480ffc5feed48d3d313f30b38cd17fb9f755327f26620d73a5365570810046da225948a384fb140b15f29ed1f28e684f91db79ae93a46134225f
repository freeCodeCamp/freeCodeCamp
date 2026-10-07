// deno-fmt-ignore-file
import { Guard } from '../../guard/index.mjs';
import { Memory } from '../../system/memory/index.mjs';
import { IsKind } from './schema.mjs';
// ------------------------------------------------------------------
// Factory
// ------------------------------------------------------------------
/** Creates a Cyclic type. */
export function Cyclic($defs, $ref, options) {
    // $defs require an $id per definition to enable Ajv to resolve correctly
    const defs = Guard.Keys($defs).reduce((result, key) => {
        return { ...result, [key]: Memory.Update($defs[key], {}, { $id: key }) };
    }, {});
    return Memory.Create({ ['~kind']: 'Cyclic' }, { $defs: defs, $ref }, options);
}
// ------------------------------------------------------------------
// Guard
// ------------------------------------------------------------------
/** Returns true if the given value is a TCyclic. */
export function IsCyclic(value) {
    return IsKind(value, 'Cyclic');
}
// ------------------------------------------------------------------
// Options
// ------------------------------------------------------------------
/** Extracts options from a TCyclic. */
export function CyclicOptions(type) {
    return Memory.Discard(type, ['~kind', '$defs', '$ref']);
}
