// deno-fmt-ignore-file
import { Guard } from '../../guard/index.mjs';
import { Check } from '../check/index.mjs';
import { Create } from '../create/index.mjs';
import { IsAdditionalProperties } from '../../schema/types/index.mjs';
import { FromType } from './from_type.mjs';
export function FromObject(context, type, value) {
    if (Check(context, type, value))
        return value;
    if (!Guard.IsObjectNotArray(value))
        return Create(context, type);
    // Dependencies
    const required = new Set(Guard.IsUndefined(type.required) ? [] : type.required);
    // Properties
    const result = {};
    for (const [key, schema] of Guard.Entries(type.properties)) {
        if (!required.has(key) && Guard.IsUndefined(value[key]))
            continue;
        result[key] = key in value
            ? FromType(context, schema, value[key])
            : Create(context, schema);
    }
    // AdditionalProperties
    const evaluatedKeys = Guard.Keys(type.properties);
    if (IsAdditionalProperties(type) && Guard.IsObject(type.additionalProperties)) {
        for (const key of Guard.Keys(value)) {
            if (evaluatedKeys.includes(key))
                continue;
            result[key] = FromType(context, type.additionalProperties, value[key]);
        }
    }
    return result;
}
