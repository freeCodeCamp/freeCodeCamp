// deno-fmt-ignore-file
import { Guard } from '../../guard/index.mjs';
// ------------------------------------------------------------------
// Guard
// ------------------------------------------------------------------
/**
 * Returns true if the schema contains a valid exclusiveMaximum property
 * @specification Json Schema 7
 */
export function IsExclusiveMaximum(schema) {
    return Guard.HasPropertyKey(schema, 'exclusiveMaximum')
        && (Guard.IsNumber(schema.exclusiveMaximum) || Guard.IsBigInt(schema.exclusiveMaximum));
}
