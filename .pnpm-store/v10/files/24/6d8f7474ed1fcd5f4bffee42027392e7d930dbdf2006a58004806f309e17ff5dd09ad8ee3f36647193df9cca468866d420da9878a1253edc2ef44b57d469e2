// deno-fmt-ignore-file
import { Guard } from '../../guard/index.mjs';
// ------------------------------------------------------------------
// Guard
// ------------------------------------------------------------------
/**
 * Returns true if the schema contains a valid uniqueItems property
 * @specification Json Schema 7
 */
export function IsUniqueItems(schema) {
    return Guard.HasPropertyKey(schema, 'uniqueItems')
        && Guard.IsBoolean(schema.uniqueItems);
}
