// deno-fmt-ignore-file
import { Guard } from '../../guard/index.mjs';
// ------------------------------------------------------------------
// Guard
// ------------------------------------------------------------------
/**
 * Returns true if the schema contains a valid multipleOf property
 * @specification Json Schema 7
 */
export function IsMultipleOf(schema) {
    return Guard.HasPropertyKey(schema, 'multipleOf')
        && (Guard.IsNumber(schema.multipleOf) || Guard.IsBigInt(schema.multipleOf));
}
