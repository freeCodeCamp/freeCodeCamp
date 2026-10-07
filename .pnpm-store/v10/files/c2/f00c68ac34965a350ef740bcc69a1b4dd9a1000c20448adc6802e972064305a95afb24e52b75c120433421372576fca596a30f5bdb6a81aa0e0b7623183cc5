// deno-fmt-ignore-file
import { Guard } from '../../guard/index.mjs';
import { IsSchema } from './schema.mjs';
// ------------------------------------------------------------------
// Guard
// ------------------------------------------------------------------
/**
 * Returns true if the schema contains a valid unevaluatedProperties property
 * @specification Json Schema 2019-09
 */
export function IsUnevaluatedProperties(schema) {
    return Guard.HasPropertyKey(schema, 'unevaluatedProperties')
        && IsSchema(schema.unevaluatedProperties);
}
