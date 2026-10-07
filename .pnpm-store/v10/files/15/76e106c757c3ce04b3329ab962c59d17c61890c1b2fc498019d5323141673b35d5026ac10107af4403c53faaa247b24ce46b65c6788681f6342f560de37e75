// deno-fmt-ignore-file
import { Guard } from '../../guard/index.mjs';
import { Check } from '../check/index.mjs';
import { Create } from '../create/index.mjs';
import { FromType } from './from_type.mjs';
export function FromTuple(context, schema, value) {
    if (Check(context, schema, value))
        return value;
    if (!Guard.IsArray(value))
        return Create(context, schema);
    return schema.items.map((schema, index) => FromType(context, schema, value[index]));
}
