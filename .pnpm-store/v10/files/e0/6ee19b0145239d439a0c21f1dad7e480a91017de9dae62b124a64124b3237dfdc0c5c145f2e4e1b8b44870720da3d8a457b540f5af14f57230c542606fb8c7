// deno-fmt-ignore-file
import { Unreachable } from '../../../system/unreachable/index.mjs';
import { Guard } from '../../../guard/index.mjs';
import { Literal, IsLiteralValue } from '../../types/literal.mjs';
import { ConvertToIntegerKey } from '../helpers/keys.mjs';
import { EvaluateUnionFast } from '../evaluate/evaluate.mjs';
function FromPropertyKeys(keys) {
    const result = keys.reduce((result, left) => {
        return IsLiteralValue(left)
            ? [...result, Literal(ConvertToIntegerKey(left))]
            : Unreachable();
    }, []);
    return result;
}
export function FromObject(properties) {
    const propertyKeys = Guard.Keys(properties);
    const variants = FromPropertyKeys(propertyKeys);
    const result = EvaluateUnionFast(variants);
    return result;
}
