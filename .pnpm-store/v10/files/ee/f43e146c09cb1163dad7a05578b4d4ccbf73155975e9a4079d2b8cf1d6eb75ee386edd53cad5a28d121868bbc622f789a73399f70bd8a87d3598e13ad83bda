// deno-fmt-ignore-file
import { Guard } from '../../guard/index.mjs';
import { IsSchema } from './schema.mjs';
// ------------------------------------------------------------------
// Guard
// ------------------------------------------------------------------
/**
 * Returns true if the schema contains a valid oneOf property
 * @specification Json Schema 7
 */
export function IsOneOf(schema) {
    return Guard.HasPropertyKey(schema, 'oneOf')
        && Guard.IsArray(schema.oneOf)
        && schema.oneOf.every(value => IsSchema(value));
}
