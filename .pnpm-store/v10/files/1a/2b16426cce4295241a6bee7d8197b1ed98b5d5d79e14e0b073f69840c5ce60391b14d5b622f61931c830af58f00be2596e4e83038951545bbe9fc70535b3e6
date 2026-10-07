// deno-fmt-ignore-file
import { Guard } from '../../guard/index.mjs';
import { IsSchema } from './schema.mjs';
// ------------------------------------------------------------------
// Guard
// ------------------------------------------------------------------
/**
 * Returns true if the schema contains a valid prefixItems property
 */
export function IsPrefixItems(schema) {
    return Guard.HasPropertyKey(schema, 'prefixItems')
        && Guard.IsArray(schema.prefixItems)
        && schema.prefixItems.every(schema => IsSchema(schema));
}
