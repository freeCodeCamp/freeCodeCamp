// deno-fmt-ignore-file
import { Guard } from '../../guard/index.mjs';
// ------------------------------------------------------------------
// Guard
// ------------------------------------------------------------------
/**
 * Returns true if the schema contains a valid enum property
 * @specification Json Schema 7
 */
export function IsEnum(schema) {
    return Guard.HasPropertyKey(schema, 'enum')
        && Guard.IsArray(schema.enum);
}
