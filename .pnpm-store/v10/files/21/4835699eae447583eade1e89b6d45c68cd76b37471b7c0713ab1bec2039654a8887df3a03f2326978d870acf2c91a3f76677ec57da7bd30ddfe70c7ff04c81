// deno-fmt-ignore-file
import { Guard } from '../../guard/index.mjs';
import { IsSchema } from './schema.mjs';
// ------------------------------------------------------------------
// Guard
// ------------------------------------------------------------------
/**
 * Returns true if the schema contains a valid else property
 * @specification Json Schema 7
 */
export function IsElse(schema) {
    return Guard.HasPropertyKey(schema, 'else')
        && IsSchema(schema.else);
}
