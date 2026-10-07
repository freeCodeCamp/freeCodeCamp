// deno-fmt-ignore-file
import { Guard } from '../../guard/index.mjs';
// ------------------------------------------------------------------
// Guard
// ------------------------------------------------------------------
/**
 * Returns true if the schema contains a valid maximum property
 * @specification Json Schema 7
 */
export function IsMaximum(schema) {
    return Guard.HasPropertyKey(schema, 'maximum')
        && (Guard.IsNumber(schema.maximum) || Guard.IsBigInt(schema.maximum));
}
