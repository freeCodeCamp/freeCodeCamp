// deno-fmt-ignore-file
import { Guard } from '../../guard/index.mjs';
import { FromType } from './from_type.mjs';
/**
 * Used by Object and Record Types. The entries are derived from the known
 * properties obtained from 'properties' and 'patternProperties' respectively.
 */
export function FromAdditionalProperties(context, entries, additionalProperties, value) {
    const keys = Guard.Keys(value);
    for (const [regexp, _] of entries) {
        for (const key of keys) {
            if (!regexp.test(key)) {
                value[key] = FromType(context, additionalProperties, value[key]);
            }
        }
    }
    return value;
}
