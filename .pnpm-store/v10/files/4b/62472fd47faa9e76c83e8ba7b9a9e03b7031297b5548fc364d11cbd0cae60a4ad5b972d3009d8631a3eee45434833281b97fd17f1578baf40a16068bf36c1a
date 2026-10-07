// deno-fmt-ignore-file
import { Guard } from '../../guard/index.mjs';
// ------------------------------------------------------------------
// Guard
// ------------------------------------------------------------------
/**
 * Returns true if the schema contains a valid dependentRequired property
 * @specification Json Schema 2019-09
 */
export function IsDependentRequired(schema) {
    return Guard.HasPropertyKey(schema, 'dependentRequired')
        && Guard.IsObject(schema.dependentRequired)
        && Object.values(schema.dependentRequired).every(value => Guard.IsArray(value)
            && value.every(value => Guard.IsString(value)));
}
