// deno-fmt-ignore-file
import { Memory } from '../../../system/memory/index.mjs';
import { Union } from '../../types/union.mjs';
import { Extends, ExtendsResult } from '../../extends/index.mjs';
import { InstantiateType, CanInstantiate } from '../instantiate.mjs';
import { ConditionalDeferred } from '../../action/conditional.mjs';
function ConditionalOperation(context, state, left, right, true_, false_) {
    const extendsResult = Extends(context, left, right);
    return (ExtendsResult.IsExtendsUnion(extendsResult) ? Union([InstantiateType(extendsResult.inferred, state, true_), InstantiateType(context, state, false_)]) :
        ExtendsResult.IsExtendsTrue(extendsResult) ? InstantiateType(extendsResult.inferred, state, true_) :
            InstantiateType(context, state, false_));
}
export function ConditionalAction(context, state, left, right, true_, false_, options) {
    const result = CanInstantiate([left, right])
        ? Memory.Update(ConditionalOperation(context, state, left, right, true_, false_), {}, options)
        : ConditionalDeferred(left, right, true_, false_, options);
    return result;
}
export function ConditionalInstantiate(context, state, left, right, true_, false_, options) {
    const instantiatedLeft = InstantiateType(context, state, left);
    const instantiatedRight = InstantiateType(context, state, right);
    return ConditionalAction(context, state, instantiatedLeft, instantiatedRight, true_, false_, options);
}
