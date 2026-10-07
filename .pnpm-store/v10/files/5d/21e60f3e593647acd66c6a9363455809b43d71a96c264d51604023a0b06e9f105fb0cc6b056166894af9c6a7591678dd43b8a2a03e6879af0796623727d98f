// deno-lint-ignore-file ban-types
// deno-fmt-ignore-file
import { IsEnum } from '../../types/enum.mjs';
import { IsUnion } from '../../types/union.mjs';
import { Extends, ExtendsResult } from '../../extends/index.mjs';
import { EnumValuesToVariants } from '../enum/index.mjs';
import { EvaluateUnion, Flatten } from '../evaluate/index.mjs';
function ExcludeUnionLeft(types, right) {
    return types.reduce((result, head) => {
        return [...result, ...ExcludeTypeLeft(head, right)];
    }, []);
}
function ExcludeTypeLeft(left, right) {
    const check = Extends({}, left, right);
    const result = ExtendsResult.IsExtendsTrueLike(check) ? [] : [left];
    return result;
}
export function ExcludeOperation(left, right) {
    const remaining = (IsEnum(left) ? ExcludeUnionLeft(EnumValuesToVariants(left.enum), right) :
        IsUnion(left) ? ExcludeUnionLeft(Flatten(left.anyOf), right) :
            ExcludeTypeLeft(left, right));
    const result = EvaluateUnion(remaining);
    return result;
}
