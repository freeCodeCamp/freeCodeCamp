// deno-fmt-ignore-file
import { Guard } from '../../guard/index.mjs';
import { IsSchema } from './schema.mjs';
// ------------------------------------------------------------------
// Guard
// ------------------------------------------------------------------
/**
 * Returns true if the schema contains a valid not property
 * @specification Json Schema 7
 */
export function IsNot(schema) {
    return Guard.HasPropertyKey(schema, 'not')
        && IsSchema(schema.not);
}
