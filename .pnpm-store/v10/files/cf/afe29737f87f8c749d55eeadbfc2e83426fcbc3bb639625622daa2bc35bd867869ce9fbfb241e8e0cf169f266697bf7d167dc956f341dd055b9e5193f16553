// deno-fmt-ignore-file
import { IsInfer } from '../../types/infer.mjs';
import { Never } from '../../types/never.mjs';
import { IsRest } from '../../types/rest.mjs';
import { IsRef } from '../../types/ref.mjs';
import { IsTuple } from '../../types/tuple.mjs';
function SpreadElement(type) {
    const result = (IsRest(type) ? (IsTuple(type.items) ? RestSpread(type.items.items) :
        IsInfer(type.items) ? [type] :
            IsRef(type.items) ? [type] :
                [Never()]) : [type]);
    return result;
}
export function RestSpread(types) {
    const result = types.reduce((result, left) => {
        return [...result, ...SpreadElement(left)];
    }, []);
    return result;
}
