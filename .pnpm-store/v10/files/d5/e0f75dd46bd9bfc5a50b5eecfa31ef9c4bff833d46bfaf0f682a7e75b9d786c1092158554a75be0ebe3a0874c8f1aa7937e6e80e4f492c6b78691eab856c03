// deno-fmt-ignore-file
import { Guard } from '../../guard/index.mjs';
// ------------------------------------------------------------------
// Guard
// ------------------------------------------------------------------
/**
 * Returns true if the schema contains a valid contentMediaType property
 * @specification Json Schema 7
 */
export function IsContentMediaType(schema) {
    return Guard.HasPropertyKey(schema, 'contentMediaType')
        && Guard.IsString(schema.contentMediaType);
}
