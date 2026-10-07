// deno-fmt-ignore-file
import { Guard } from '../../guard/index.mjs';
import { IsSchema } from './schema.mjs';
// ------------------------------------------------------------------
// Guard
// ------------------------------------------------------------------
/** Returns true if the schema contains a valid $defs property */
export function IsDefs(schema) {
    return Guard.HasPropertyKey(schema, '$defs')
        && Guard.IsObject(schema.$defs)
        && Object.values(schema.$defs).every(value => IsSchema(value));
}
