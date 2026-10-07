// deno-fmt-ignore-file
import { Guard } from '../../guard/index.mjs';
import { IsSchema } from './schema.mjs';
// ------------------------------------------------------------------
// Guard
// ------------------------------------------------------------------
/**
 * Returns true if the schema contains a valid unevaluatedItems property
 * @specification Json Schema 2019-09
 */
export function IsUnevaluatedItems(schema) {
    return Guard.HasPropertyKey(schema, 'unevaluatedItems')
        && IsSchema(schema.unevaluatedItems);
}
