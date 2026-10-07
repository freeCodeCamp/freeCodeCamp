// deno-fmt-ignore-file
import { Guard } from '../../guard/index.mjs';
import { FromType } from './from_type.mjs';
export function FromObject(context, type) {
    const required = Guard.IsUndefined(type.required) ? [] : type.required;
    return required.reduce((result, key) => {
        return { ...result, [key]: FromType(context, type.properties[key]) };
    }, {});
}
