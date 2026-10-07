// deno-fmt-ignore-file
import { IsExclusiveMinimum, IsMinimum } from '../../schema/types/index.mjs';
export function FromBigInt(_context, type) {
    return (IsExclusiveMinimum(type) ? BigInt(type.exclusiveMinimum) + BigInt(1) :
        IsMinimum(type) ? BigInt(type.minimum) :
            BigInt(0));
}
