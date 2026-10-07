// deno-fmt-ignore-file
import { Guard } from '../../guard/index.mjs';
// ------------------------------------------------------------------
// Guard
// ------------------------------------------------------------------
/**
 * Returns true if the schema contains a valid $ref property
 * @specification Json Schema 7
 */
export function IsRef(schema) {
    return Guard.HasPropertyKey(schema, '$ref')
        && Guard.IsString(schema.$ref);
}
