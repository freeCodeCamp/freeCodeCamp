// deno-fmt-ignore-file
import { Object } from '../../types/object.mjs';
import { FromType } from './from_type.mjs';
/**
 * Collapses a type into a TObject schema. This is a lossy fast path used to
 * normalize arbitrary TSchema types into a TObject structure. This function is
 * primarily used in indexing operations where a normalized object structure
 * is required. If the type cannot be collapsed, an empty object schema is returned.
 */
export function CollapseToObject(type) {
    const properties = FromType(type);
    const result = Object(properties);
    return result;
}
