// deno-fmt-ignore-file
import { Guard } from '../../guard/index.mjs';
import { IsSchema } from './schema.mjs';
// ------------------------------------------------------------------
// Guard
// ------------------------------------------------------------------
/**
 * Returns true if the schema contains a valid dependencies property
 * @specification Json Schema 7
 */
export function IsDependencies(schema) {
    return Guard.HasPropertyKey(schema, 'dependencies')
        && Guard.IsObject(schema.dependencies)
        && Object.values(schema.dependencies).every(value => IsSchema(value)
            || Guard.IsArray(value) && value.every(value => Guard.IsString(value)));
}
