// deno-fmt-ignore-file
import { Guard } from '../../guard/index.mjs';
// ------------------------------------------------------------------
// Guard
// ------------------------------------------------------------------
/**
 * Returns true if the schema contains a valid format property
 * @specification Json Schema 7
 */
export function IsFormat(schema) {
    return Guard.HasPropertyKey(schema, 'format')
        && Guard.IsString(schema.format);
}
