// deno-fmt-ignore-file
import { Guard } from '../../guard/index.mjs';
import { IsOptional } from '../../type/index.mjs';
// ------------------------------------------------------------------
// IsOptionalUndefined
//
// Indicates whether a key should be excluded from processing when it is 
// defined as optional in the schema and its corresponding value is undefined. 
// This case cannot be reliably distinguished from an omitted key, and therefore 
// introduces ambiguity between a key that is not provided and one that is 
// explicitly assigned an undefined value.
// ------------------------------------------------------------------
export function IsOptionalUndefined(property, key, value) {
    return IsOptional(property) && Guard.IsUndefined(value[key]);
}
