// deno-fmt-ignore-file
import { Guard } from '../../guard/index.mjs';
import { IsSchema } from './schema.mjs';
// ------------------------------------------------------------------
// Guard
// ------------------------------------------------------------------
/**
 * Returns true if the schema contains a valid properties property
 * @specification Json Schema 7
 */
export function IsProperties(schema) {
    return Guard.HasPropertyKey(schema, 'properties')
        && Guard.IsObject(schema.properties)
        && Object.values(schema.properties).every(value => IsSchema(value));
}
