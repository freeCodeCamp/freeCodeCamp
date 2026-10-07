// deno-fmt-ignore-file
import { Guard } from '../../guard/index.mjs';
// ------------------------------------------------------------------
// Guard
// ------------------------------------------------------------------
/**
 * Returns true if the schema contains a valid exclusiveMinimum property
 * @specification Json Schema 7
 */
export function IsExclusiveMinimum(schema) {
    return Guard.HasPropertyKey(schema, 'exclusiveMinimum')
        && (Guard.IsNumber(schema.exclusiveMinimum) || Guard.IsBigInt(schema.exclusiveMinimum));
}
