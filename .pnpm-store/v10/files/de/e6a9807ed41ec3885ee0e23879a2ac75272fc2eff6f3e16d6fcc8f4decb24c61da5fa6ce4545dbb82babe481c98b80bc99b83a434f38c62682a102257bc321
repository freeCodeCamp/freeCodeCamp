// deno-fmt-ignore-file
// deno-lint-ignore-file
import { Unreachable } from '../../../system/unreachable/index.mjs';
import { Guard } from '../../../guard/index.mjs';
import { ReadonlyAdd, ReadonlyRemove, IsReadonly } from '../../types/_readonly.mjs';
import { OptionalAdd, OptionalRemove, IsOptional } from '../../types/_optional.mjs';
import { Object, IsObject } from '../../types/object.mjs';
import { Never } from '../../types/never.mjs';
import { IsTuple } from '../../types/tuple.mjs';
import { TupleElementsToProperties } from '../tuple/to_object.mjs';
import { EvaluateIntersect } from './evaluate.mjs';
function IsReadonlyProperty(left, right) {
    return (IsReadonly(left) ? IsReadonly(right) ? true : false : false);
}
function IsOptionalProperty(left, right) {
    return (IsOptional(left) ? IsOptional(right) ? true : false : false);
}
function CompositeProperty(left, right) {
    const isReadonly = IsReadonlyProperty(left, right);
    const isOptional = IsOptionalProperty(left, right);
    const evaluated = EvaluateIntersect([left, right]);
    // Modifiers need to be discarded and re-applied
    const property = ReadonlyRemove(OptionalRemove(evaluated));
    return (isReadonly && isOptional ? ReadonlyAdd(OptionalAdd(property)) :
        isReadonly && !isOptional ? ReadonlyAdd(property) :
            !isReadonly && isOptional ? OptionalAdd(property) :
                property);
}
function CompositePropertyKey(left, right, key) {
    return (key in left
        ? key in right
            ? CompositeProperty(left[key], right[key])
            : left[key]
        : key in right
            ? right[key]
            : Never());
}
function CompositeProperties(left, right) {
    const keys = new Set([...Guard.Keys(right), ...Guard.Keys(left)]);
    return [...keys].reduce((result, key) => {
        return { ...result, [key]: CompositePropertyKey(left, right, key) };
    }, {});
}
// ------------------------------------------------------------------
// deno-coverage-ignore-start - symmetric unreachable | internal
//
// Composite is called by Distribute which provisions the type as
// either TObject ot TTuple. Fall-through unreachable.
//
// ------------------------------------------------------------------
function GetProperties(type) {
    const result = (IsObject(type) ? type.properties :
        IsTuple(type) ? TupleElementsToProperties(type.items) :
            Unreachable() // {}
    );
    return result;
}
export function Composite(left, right) {
    const leftProperties = GetProperties(left);
    const rightProperties = GetProperties(right);
    const properties = CompositeProperties(leftProperties, rightProperties);
    return Object(properties);
}
