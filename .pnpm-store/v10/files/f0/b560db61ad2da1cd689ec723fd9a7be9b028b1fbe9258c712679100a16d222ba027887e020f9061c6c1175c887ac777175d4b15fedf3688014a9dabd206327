// deno-fmt-ignore-file
import { Guard } from '../../guard/index.mjs';
// ------------------------------------------------------------------
// Guard
// ------------------------------------------------------------------
/**
 * Returns true if the schema contains a valid maxProperties property
 * @specification Json Schema 7
 */
export function IsMaxProperties(schema) {
    return Guard.HasPropertyKey(schema, 'maxProperties')
        && Guard.IsNumber(schema.maxProperties);
}
