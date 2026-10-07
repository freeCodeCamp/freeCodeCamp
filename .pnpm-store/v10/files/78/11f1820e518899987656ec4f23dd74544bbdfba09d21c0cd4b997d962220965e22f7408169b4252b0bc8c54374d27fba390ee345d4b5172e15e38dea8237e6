// deno-lint-ignore-file ban-types
// deno-fmt-ignore-file
import { IsEnum } from '../../types/enum.mjs';
import { IsUnion } from '../../types/union.mjs';
import { Extends, ExtendsResult } from '../../extends/index.mjs';
import { EnumValuesToVariants } from '../enum/index.mjs';
import { EvaluateUnion, Flatten } from '../evaluate/index.mjs';
function ExtractUnionLeft(types, right) {
    return types.reduce((result, head) => {
        return [...result, ...ExtractTypeLeft(head, right)];
    }, []);
}
function ExtractTypeLeft(left, right) {
    const check = Extends({}, left, right);
    const result = ExtendsResult.IsExtendsTrueLike(check) ? [left] : [];
    return result;
}
export function ExtractOperation(left, right) {
    const remaining = (IsEnum(left) ? ExtractUnionLeft(EnumValuesToVariants(left.enum), right) :
        IsUnion(left) ? ExtractUnionLeft(Flatten(left.anyOf), right) :
            ExtractTypeLeft(left, right));
    const result = EvaluateUnion(remaining);
    return result;
}
