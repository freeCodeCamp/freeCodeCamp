// deno-fmt-ignore-file
import { Guard } from '../../guard/index.mjs';
// ------------------------------------------------------------------
// Guard
// ------------------------------------------------------------------
/**
 * Returns true if the schema contains a valid $dynamicAnchor property
 */
export function IsDynamicAnchor(schema) {
    return Guard.HasPropertyKey(schema, '$dynamicAnchor')
        && Guard.IsString(schema.$dynamicAnchor);
}
