// deno-fmt-ignore-file
import { IsSchema } from '../../type/index.mjs';
import { Guard } from '../../guard/index.mjs';
import { FromType } from './from_type.mjs';
import { Check } from '../check/index.mjs';
import { GetAdditionalProperties } from './additional.mjs';
// ------------------------------------------------------------------
// FromObject
// ------------------------------------------------------------------
export function FromObject(context, type, value) {
    if (!Guard.IsObject(value) || Guard.IsArray(value))
        return value;
    const additionalProperties = GetAdditionalProperties(type);
    for (const key of Guard.Keys(value)) {
        if (Guard.HasPropertyKey(type.properties, key)) {
            value[key] = FromType(context, type.properties[key], value[key]);
            continue;
        }
        const unknownCheck = 
        // 1. additionalProperties: true
        (Guard.IsBoolean(additionalProperties) && Guard.IsEqual(additionalProperties, true))
            // 2. additionalProperties: TSchema
            || IsSchema(additionalProperties) && Check(context, additionalProperties, value[key]);
        if (unknownCheck) {
            value[key] = FromType(context, additionalProperties, value[key]);
            continue;
        }
        delete value[key];
    }
    return value;
}
