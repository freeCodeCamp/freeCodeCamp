// deno-fmt-ignore-file
import { Guard } from '../../guard/index.mjs';
// ------------------------------------------------------------------
// Guard
// ------------------------------------------------------------------
/**
 * Returns true if the schema contains a valid $recursiveRef property
 */
export function IsRecursiveRef(schema) {
    return Guard.HasPropertyKey(schema, '$recursiveRef')
        && Guard.IsString(schema.$recursiveRef);
}
