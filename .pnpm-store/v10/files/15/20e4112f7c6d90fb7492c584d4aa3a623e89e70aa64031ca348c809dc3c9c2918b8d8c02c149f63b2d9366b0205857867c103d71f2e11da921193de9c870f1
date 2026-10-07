// deno-fmt-ignore-file
import { Guard } from '../../guard/index.mjs';
import { IsSchema } from './schema.mjs';
// ------------------------------------------------------------------
// Guard
// ------------------------------------------------------------------
/**
 * Returns true if the schema contains a valid dependentRequired property
 * @specification Json Schema 2019-09
 */
export function IsDependentSchemas(schema) {
    return Guard.HasPropertyKey(schema, 'dependentSchemas')
        && Guard.IsObject(schema.dependentSchemas)
        && Object.values(schema.dependentSchemas).every(value => IsSchema(value));
}
