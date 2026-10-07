// deno-fmt-ignore-file
import { Guard } from '../../guard/index.mjs';
// ------------------------------------------------------------------
// Guard
// ------------------------------------------------------------------
/**
 * Returns true if the schema contains a valid required property
 * @specification Json Schema 7
 */
export function IsRequired(schema) {
    return Guard.HasPropertyKey(schema, 'required')
        && Guard.IsArray(schema.required)
        && schema.required.every(value => Guard.IsString(value));
}
