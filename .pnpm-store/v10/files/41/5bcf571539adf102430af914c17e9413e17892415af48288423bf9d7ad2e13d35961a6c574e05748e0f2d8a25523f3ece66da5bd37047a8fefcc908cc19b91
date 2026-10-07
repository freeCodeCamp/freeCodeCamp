// deno-fmt-ignore-file
// deno-lint-ignore-file
import { IsOptional } from '../../type/index.mjs';
import { Guard } from '../../guard/index.mjs';
import { FromType } from './from_type.mjs';
import { IsAdditionalProperties } from '../../schema/types/index.mjs';
export function FromObject(context, type, value) {
    if (!Guard.IsObject(value))
        return value;
    const knownPropertyKeys = Guard.Keys(type.properties);
    // Properties
    for (const key of knownPropertyKeys) {
        // Resolve Value for Property
        const propertyValue = FromType(context, type.properties[key], value[key]);
        // Ambiguious Undefined: If the value is undefined, the type is optional there's no default. ignore.
        const isUnassignableUndefined = Guard.IsUndefined(propertyValue) && (IsOptional(type.properties[key]) || !Guard.HasPropertyKey(type.properties[key], 'default'));
        if (isUnassignableUndefined)
            continue;
        // Assign
        value[key] = FromType(context, type.properties[key], value[key]);
    }
    // return if not additional properties
    if (!IsAdditionalProperties(type) || Guard.IsBoolean(type.additionalProperties))
        return value;
    // AdditionalProperties
    for (const key of Guard.Keys(value)) {
        if (knownPropertyKeys.includes(key))
            continue;
        value[key] = FromType(context, type.additionalProperties, value[key]);
    }
    return value;
}
