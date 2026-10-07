// deno-fmt-ignore-file
import { Guard } from '../../guard/index.mjs';
import { IsSchema } from './schema.mjs';
// ------------------------------------------------------------------
// Guard
// ------------------------------------------------------------------
/**
 * Returns true if the schema contains a valid contains property
 * @specification Json Schema 7
 */
export function IsContains(schema) {
    return Guard.HasPropertyKey(schema, 'contains')
        && IsSchema(schema.contains);
}
