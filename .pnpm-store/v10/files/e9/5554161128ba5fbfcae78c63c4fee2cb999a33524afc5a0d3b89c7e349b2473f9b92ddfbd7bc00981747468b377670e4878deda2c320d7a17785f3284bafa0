// deno-fmt-ignore-file
import { Guard } from '../../guard/index.mjs';
// ------------------------------------------------------------------
// Guard
// ------------------------------------------------------------------
/**
 * Returns true if the schema contains a valid pattern property
 * @specification Json Schema 7
 */
export function IsPattern(schema) {
    return Guard.HasPropertyKey(schema, 'pattern')
        && (Guard.IsString(schema.pattern)
            || schema.pattern instanceof RegExp);
}
