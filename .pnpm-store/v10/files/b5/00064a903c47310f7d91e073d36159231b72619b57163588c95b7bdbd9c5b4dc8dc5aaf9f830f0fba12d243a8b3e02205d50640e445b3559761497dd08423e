// deno-fmt-ignore-file
import { Guard } from '../../guard/index.mjs';
import { IsExclusiveMinimum, IsMinimum } from '../../schema/types/index.mjs';
export function FromNumber(_context, type) {
    return (IsExclusiveMinimum(type) && Guard.IsNumber(type.exclusiveMinimum) ? type.exclusiveMinimum + 1 :
        IsMinimum(type) ? type.minimum :
            0);
}
