// deno-fmt-ignore-file
import { Guard } from '../../guard/index.mjs';
// ------------------------------------------------------------------
// Guard
// ------------------------------------------------------------------
/**
 * Returns true if the schema contains a valid maxItems property
 * @specification Json Schema 7
 */
export function IsMaxItems(schema) {
    return Guard.HasPropertyKey(schema, 'maxItems')
        && Guard.IsNumber(schema.maxItems);
}
