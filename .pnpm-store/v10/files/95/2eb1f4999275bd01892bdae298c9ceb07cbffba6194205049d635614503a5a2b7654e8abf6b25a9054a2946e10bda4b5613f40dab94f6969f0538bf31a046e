// deno-fmt-ignore-file
import { Guard } from '../../../guard/index.mjs';
import { IsAny } from '../../types/any.mjs';
import { Never, IsNever } from '../../types/never.mjs';
import { IsObject } from '../../types/object.mjs';
import { Union } from '../../types/union.mjs';
import { Compare, ResultRightInside, ResultLeftInside, ResultEqual } from './compare.mjs';
import { Flatten } from './flatten.mjs';
import { EvaluateType } from './evaluate.mjs';
function BroadFilter(type, types) {
    return types.filter(left => {
        return Compare(type, left) === ResultRightInside
            ? false
            : true;
    });
}
function IsBroadestType(type, types) {
    const result = types.some(left => {
        const result = Compare(type, left);
        return Guard.IsEqual(result, ResultLeftInside) || Guard.IsEqual(result, ResultEqual);
    });
    return Guard.IsEqual(result, false);
}
function BroadenType(type, types) {
    const evaluated = EvaluateType(type);
    return (IsAny(evaluated) ? [evaluated] :
        IsBroadestType(evaluated, types)
            ? [...BroadFilter(evaluated, types), evaluated]
            : types);
}
function BroadenTypes(types) {
    return types.reduce((result, left) => {
        return (IsObject(left) ? [...result, left] : // push
            IsNever(left) ? result : // ignore
                BroadenType(left, result) // broaden
        );
    }, []);
}
/** Broadens a set of types and returns either the most broad type, or union or disjoint types. */
export function Broaden(types) {
    const broadened = BroadenTypes(types);
    const flattened = Flatten(broadened);
    const result = (flattened.length === 0 ? Never() :
        flattened.length === 1 ? flattened[0] :
            Union(flattened));
    return result;
}
