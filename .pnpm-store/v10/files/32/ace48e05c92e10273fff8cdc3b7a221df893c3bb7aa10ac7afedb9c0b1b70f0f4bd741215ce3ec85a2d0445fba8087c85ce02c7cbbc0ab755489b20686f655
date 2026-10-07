// deno-fmt-ignore-file
import { Guard } from '../../guard/index.mjs';
// ------------------------------------------------------------------
// Guard
// ------------------------------------------------------------------
/**
 * Returns true if the schema contains a valid $dynamicRef property
 */
export function IsDynamicRef(schema) {
    return Guard.HasPropertyKey(schema, '$dynamicRef')
        && Guard.IsString(schema.$dynamicRef);
}
