// deno-fmt-ignore-file
import { Guard } from '../../guard/index.mjs';
import { IsSchema } from './schema.mjs';
// ------------------------------------------------------------------
// Guard
// ------------------------------------------------------------------
/**
 * Returns true if the schema contains a valid items property
 * @specification Json Schema 7
 */
export function IsItems(schema) {
    return Guard.HasPropertyKey(schema, 'items')
        && (IsSchema(schema.items)
            || (Guard.IsArray(schema.items)
                && schema.items.every(value => {
                    return IsSchema(value);
                })));
}
/** Returns true if this schema is a sized items variant */
export function IsItemsSized(schema) {
    return IsItems(schema) && Guard.IsArray(schema.items);
}
/** Returns true if this schema is a unsized items variant */
export function IsItemsUnsized(schema) {
    return IsItems(schema) && !Guard.IsArray(schema.items);
}
