// deno-fmt-ignore-file
import { Guard } from '../../guard/index.mjs';
import { FromType } from './from_type.mjs';
import { FromAdditionalProperties } from './from_additional.mjs';
import { IsOptionalUndefined } from '../shared/optional_undefined.mjs';
// ------------------------------------------------------------------
// FromProperties
// ------------------------------------------------------------------
function FromProperties(context, type, value) {
    const entries = Guard.EntriesRegExp(type.properties);
    const keys = Guard.Keys(value);
    for (const [regexp, property] of entries) {
        for (const key of keys) {
            // Ignore for non-present or optional-undefined
            if (!regexp.test(key) || IsOptionalUndefined(property, key, value))
                continue;
            value[key] = FromType(context, property, value[key]);
        }
    }
    return (Guard.HasPropertyKey(type, 'additionalProperties') && Guard.IsObject(type.additionalProperties)
        ? FromAdditionalProperties(context, entries, type.additionalProperties, value)
        : value);
}
export function FromObject(context, type, value) {
    return Guard.IsObjectNotArray(value)
        ? FromProperties(context, type, value)
        : value;
}
