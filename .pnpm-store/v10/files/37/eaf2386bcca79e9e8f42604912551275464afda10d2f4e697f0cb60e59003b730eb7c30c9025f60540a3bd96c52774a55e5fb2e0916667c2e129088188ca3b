// deno-fmt-ignore-file
import { Guard } from '../../guard/index.mjs';
import { FromType } from './from_type.mjs';
import { FromAdditionalProperties } from './from_additional.mjs';
function FromPatternProperties(context, type, value) {
    const entries = Guard.EntriesRegExp(type.patternProperties);
    const keys = Guard.Keys(value);
    for (const [regexp, schema] of entries) {
        for (const key of keys) {
            if (regexp.test(key)) {
                value[key] = FromType(context, schema, value[key]);
            }
        }
    }
    return (Guard.HasPropertyKey(type, 'additionalProperties') && Guard.IsObject(type.additionalProperties)
        ? FromAdditionalProperties(context, entries, type.additionalProperties, value)
        : value);
}
export function FromRecord(context, type, value) {
    return Guard.IsObjectNotArray(value)
        ? FromPatternProperties(context, type, value)
        : value;
}
