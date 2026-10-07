// deno-fmt-ignore-file
import { Guard } from '../../guard/index.mjs';
// ------------------------------------------------------------------
// Guard
// ------------------------------------------------------------------
/**
 * Returns true if the schema contains a valid $id property
 * @specification Json Schema 7
 */
export function IsId(schema) {
    return Guard.HasPropertyKey(schema, '$id')
        && Guard.IsString(schema.$id);
}
