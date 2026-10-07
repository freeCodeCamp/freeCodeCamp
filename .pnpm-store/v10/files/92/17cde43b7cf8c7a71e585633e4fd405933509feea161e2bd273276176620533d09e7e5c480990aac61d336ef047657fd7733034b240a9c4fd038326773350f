// deno-fmt-ignore-file
import { Guard } from '../../guard/index.mjs';
// ------------------------------------------------------------------
// Guard
// ------------------------------------------------------------------
/**
 * Returns true if the schema contains a valid minItems property
 * @specification Json Schema 7
 */
export function IsMinItems(schema) {
    return Guard.HasPropertyKey(schema, 'minItems')
        && Guard.IsNumber(schema.minItems);
}
