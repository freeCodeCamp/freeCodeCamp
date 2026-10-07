// deno-fmt-ignore-file
import { Guard } from '../../guard/index.mjs';
// ------------------------------------------------------------------
// Guard
// ------------------------------------------------------------------
/**
 * Returns true if the schema contains a valid minLength property
 * @specification Json Schema 7
 */
export function IsMinLength(schema) {
    return Guard.HasPropertyKey(schema, 'minLength')
        && Guard.IsNumber(schema.minLength);
}
