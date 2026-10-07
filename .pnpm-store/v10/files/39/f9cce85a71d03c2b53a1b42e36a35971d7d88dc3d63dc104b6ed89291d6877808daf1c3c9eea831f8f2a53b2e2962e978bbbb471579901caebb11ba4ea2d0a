// deno-fmt-ignore-file
import { Guard } from '../../guard/index.mjs';
// ------------------------------------------------------------------
// Guard
// ------------------------------------------------------------------
/**
 * Returns true if the schema contains a valid maxContains property
 * @specification Json Schema 2019-09
 */
export function IsMinContains(schema) {
    return Guard.HasPropertyKey(schema, 'minContains')
        && Guard.IsNumber(schema.minContains);
}
