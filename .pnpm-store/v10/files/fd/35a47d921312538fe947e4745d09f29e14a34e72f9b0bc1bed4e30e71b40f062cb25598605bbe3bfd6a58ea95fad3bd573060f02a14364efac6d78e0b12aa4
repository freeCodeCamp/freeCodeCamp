// deno-fmt-ignore-file
import { Guard } from '../../guard/index.mjs';
import { IsSchema } from '../types/schema.mjs';
// ------------------------------------------------------------------
// Guard
// ------------------------------------------------------------------
/**
 * Returns true if the schema contains a valid additionalItems property
 * @specification Json Schema 7
 */
export function IsAdditionalItems(schema) {
    return Guard.HasPropertyKey(schema, 'additionalItems')
        && IsSchema(schema.additionalItems);
}
