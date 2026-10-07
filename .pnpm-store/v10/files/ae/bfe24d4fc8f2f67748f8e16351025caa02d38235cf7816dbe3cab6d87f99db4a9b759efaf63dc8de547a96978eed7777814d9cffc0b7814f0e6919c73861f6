// deno-fmt-ignore-file
import { Guard } from '../../guard/index.mjs';
// ------------------------------------------------------------------
// Guard
// ------------------------------------------------------------------
/**
 * Returns true if the schema contains a valid contentMediaType property
 * @specification Json Schema 7
 */
export function IsDefault(schema) {
    return Guard.HasPropertyKey(schema, 'default');
}
