// deno-fmt-ignore-file
import { Guard } from '../../guard/index.mjs';
// ------------------------------------------------------------------
// Guard
// ------------------------------------------------------------------
/**
 * Returns true if the schema contains a valid maxLength property
 * @specification Json Schema 7
 */
export function IsMaxLength(schema) {
    return Guard.HasPropertyKey(schema, 'maxLength')
        && Guard.IsNumber(schema.maxLength);
}
