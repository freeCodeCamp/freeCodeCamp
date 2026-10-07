// deno-fmt-ignore-file
import { Guard } from '../../guard/index.mjs';
// ------------------------------------------------------------------
// Guard
// ------------------------------------------------------------------
/**
 * Returns true if the schema contains a valid minimum property
 * @specification Json Schema 7
 */
export function IsMinimum(schema) {
    return Guard.HasPropertyKey(schema, 'minimum')
        && (Guard.IsNumber(schema.minimum) || Guard.IsBigInt(schema.minimum));
}
