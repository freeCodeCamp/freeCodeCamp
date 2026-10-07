// deno-fmt-ignore-file
import { Guard } from '../../guard/index.mjs';
// ------------------------------------------------------------------
// Guard
// ------------------------------------------------------------------
/**
 * Returns true if the schema contains a valid $recursiveAnchor property
 */
export function IsRecursiveAnchor(schema) {
    return Guard.HasPropertyKey(schema, '$recursiveAnchor')
        && Guard.IsBoolean(schema.$recursiveAnchor);
}
/**
 * Returns true if the schema contains a valid $recursiveAnchor property that is true
 */
export function IsRecursiveAnchorTrue(schema) {
    return IsRecursiveAnchor(schema)
        && Guard.IsEqual(schema.$recursiveAnchor, true);
}
