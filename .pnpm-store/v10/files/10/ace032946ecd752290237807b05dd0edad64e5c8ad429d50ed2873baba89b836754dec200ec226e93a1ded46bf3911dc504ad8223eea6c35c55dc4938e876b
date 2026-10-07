// deno-fmt-ignore-file
import { Guard } from '../../guard/index.mjs';
// ------------------------------------------------------------------
// Guard
// ------------------------------------------------------------------
/**
 * Returns true if the schema contains a valid type property
 * @specification Json Schema 7
 */
export function IsType(schema) {
    return Guard.HasPropertyKey(schema, 'type')
        && (Guard.IsString(schema.type)
            || (Guard.IsArray(schema.type)
                && schema.type.every(value => Guard.IsString(value))));
}
