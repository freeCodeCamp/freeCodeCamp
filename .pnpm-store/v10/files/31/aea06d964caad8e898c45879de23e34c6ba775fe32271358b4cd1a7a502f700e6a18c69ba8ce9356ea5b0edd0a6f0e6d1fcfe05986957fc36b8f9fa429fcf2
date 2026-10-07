// deno-fmt-ignore-file
import { Guard } from '../../guard/index.mjs';
import { IsSchema } from './schema.mjs';
// ------------------------------------------------------------------
// Guard
// ------------------------------------------------------------------
/**
 * Returns true if the schema contains a valid additionalProperties property
 * @specification Json Schema 7
 */
export function IsAdditionalProperties(schema) {
    return Guard.HasPropertyKey(schema, 'additionalProperties')
        && IsSchema(schema.additionalProperties);
}
