// deno-fmt-ignore-file
import { Guard } from '../../guard/index.mjs';
// ------------------------------------------------------------------
// Guard
// ------------------------------------------------------------------
/**
 * Returns true if the schema contains a valid maxContains property
 * @specification Json Schema 2019-09
 */
export function IsMaxContains(schema) {
    return Guard.HasPropertyKey(schema, 'maxContains')
        && Guard.IsNumber(schema.maxContains);
}
