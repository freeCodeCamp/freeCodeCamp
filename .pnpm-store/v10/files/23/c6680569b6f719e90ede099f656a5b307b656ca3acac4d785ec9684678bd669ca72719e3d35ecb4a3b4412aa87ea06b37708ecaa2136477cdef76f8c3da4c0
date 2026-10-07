// deno-fmt-ignore-file
import { Guard } from '../../guard/index.mjs';
import { IsSchema } from './schema.mjs';
// ------------------------------------------------------------------
// Guard
// ------------------------------------------------------------------
/**
 * Returns true if the schema contains a valid anyOf property
 * @specification Json Schema 7
 */
export function IsAnyOf(schema) {
    return Guard.HasPropertyKey(schema, 'anyOf')
        && Guard.IsArray(schema.anyOf)
        && schema.anyOf.every(value => IsSchema(value));
}
