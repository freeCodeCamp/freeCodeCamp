// deno-fmt-ignore-file
import { IsUniqueItems, IsDefault, IsMinItems } from '../../schema/types/index.mjs';
import { FromType } from './from_type.mjs';
import { CreateError } from './error.mjs';
export function FromArray(context, type) {
    if (IsUniqueItems(type) && !IsDefault(type))
        throw new CreateError(type, 'Arrays with uniqueItems constraints must specify a default annotation');
    const length = IsMinItems(type) ? type.minItems : 0;
    return Array.from({ length }, () => FromType(context, type.items));
}
