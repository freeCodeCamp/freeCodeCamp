// deno-fmt-ignore-file
import { Guard } from '../../guard/index.mjs';
import { IsSchema } from './schema.mjs';
// ------------------------------------------------------------------
// Guard
// ------------------------------------------------------------------
/**
 * Returns true if the schema contains a valid then property
 * @specification Json Schema 7
 */
export function IsThen(schema) {
    return Guard.HasPropertyKey(schema, 'then')
        && IsSchema(schema.then);
}
