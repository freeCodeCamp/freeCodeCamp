// deno-fmt-ignore-file
import { Guard } from '../../guard/index.mjs';
import { IsSchema } from './schema.mjs';
// ------------------------------------------------------------------
// Guard
// ------------------------------------------------------------------
/**
 * Returns true if the schema contains a valid propertyNames property
 * @specification Json Schema 7
 */
export function IsPropertyNames(schema) {
    return Guard.HasPropertyKey(schema, 'propertyNames')
        && (Guard.IsObject(schema.propertyNames)
            || IsSchema(schema.propertyNames));
}
