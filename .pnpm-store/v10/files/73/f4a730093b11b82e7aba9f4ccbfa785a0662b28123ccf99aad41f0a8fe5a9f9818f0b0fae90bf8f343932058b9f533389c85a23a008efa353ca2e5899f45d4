// deno-fmt-ignore-file
import { Guard } from '../../guard/index.mjs';
import { IsSchema } from './schema.mjs';
// ------------------------------------------------------------------
// Guard
// ------------------------------------------------------------------
/**
 * Returns true if the schema contains a valid $id property
 * @specification Json Schema 7
 */
export function IsIf(schema) {
    return Guard.HasPropertyKey(schema, 'if')
        && IsSchema(schema.if);
}
