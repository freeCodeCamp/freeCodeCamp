// deno-fmt-ignore-file
import { Guard } from '../../guard/index.mjs';
import { IsSchema } from './schema.mjs';
// ------------------------------------------------------------------
// Guard
// ------------------------------------------------------------------
/**
 * Returns true if the schema contains a valid allOf property
 * @specification Json Schema 7
 */
export function IsAllOf(schema) {
    return Guard.HasPropertyKey(schema, 'allOf')
        && Guard.IsArray(schema.allOf)
        && schema.allOf.every(value => IsSchema(value));
}
