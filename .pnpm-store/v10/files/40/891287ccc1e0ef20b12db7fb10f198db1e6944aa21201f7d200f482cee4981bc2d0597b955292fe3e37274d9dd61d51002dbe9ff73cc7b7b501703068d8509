// deno-fmt-ignore-file
import { Guard } from '../../guard/index.mjs';
import { IsSchema } from './schema.mjs';
// ------------------------------------------------------------------
// Guard
// ------------------------------------------------------------------
/**
 * Returns true if the schema contains a valid patternProperties property
 * @specification Json Schema 7
 */
export function IsPatternProperties(schema) {
    return Guard.HasPropertyKey(schema, 'patternProperties')
        && Guard.IsObject(schema.patternProperties)
        && Object.values(schema.patternProperties).every(value => IsSchema(value));
}
