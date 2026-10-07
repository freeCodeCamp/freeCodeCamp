// deno-fmt-ignore-file
import { Guard } from '../../guard/index.mjs';
// ------------------------------------------------------------------
// Guard
// ------------------------------------------------------------------
/**
 * Returns true if the schema contains a valid $anchor property
 */
export function IsAnchor(schema) {
    return Guard.HasPropertyKey(schema, '$anchor')
        && Guard.IsString(schema.$anchor);
}
