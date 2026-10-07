// deno-fmt-ignore-file
import { Guard } from '../../guard/index.mjs';
// ------------------------------------------------------------------
// Guard
// ------------------------------------------------------------------
/**
 * Returns true if the schema contains a valid minProperties property
 * @specification Json Schema 7
 */
export function IsMinProperties(schema) {
    return Guard.HasPropertyKey(schema, 'minProperties')
        && Guard.IsNumber(schema.minProperties);
}
