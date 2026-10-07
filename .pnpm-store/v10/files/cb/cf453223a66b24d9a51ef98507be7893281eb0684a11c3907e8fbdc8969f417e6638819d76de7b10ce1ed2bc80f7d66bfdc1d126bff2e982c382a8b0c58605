import { Guard } from '../../guard/index.mjs';
import { Memory } from '../../system/memory/index.mjs';
export function ExtendsUnion(inferred) {
    return Memory.Create({ ['~kind']: 'ExtendsUnion' }, { inferred });
}
export function IsExtendsUnion(value) {
    return Guard.IsObject(value) &&
        Guard.HasPropertyKey(value, '~kind') &&
        Guard.HasPropertyKey(value, 'inferred') &&
        Guard.IsEqual(value['~kind'], 'ExtendsUnion') &&
        Guard.IsObject(value.inferred);
}
export function ExtendsTrue(inferred) {
    return Memory.Create({ ['~kind']: 'ExtendsTrue' }, { inferred });
}
export function IsExtendsTrue(value) {
    return Guard.IsObject(value) &&
        Guard.HasPropertyKey(value, '~kind') &&
        Guard.HasPropertyKey(value, 'inferred') &&
        Guard.IsEqual(value['~kind'], 'ExtendsTrue') &&
        Guard.IsObject(value.inferred);
}
export function ExtendsFalse() {
    return Memory.Create({ ['~kind']: 'ExtendsFalse' }, {});
}
export function IsExtendsFalse(value) {
    return Guard.IsObject(value) &&
        Guard.HasPropertyKey(value, '~kind') &&
        Guard.IsEqual(value['~kind'], 'ExtendsFalse');
}
export function IsExtendsTrueLike(value) {
    return IsExtendsUnion(value) || IsExtendsTrue(value);
}
export function Match(result, true_, false_) {
    return IsExtendsTrueLike(result) ? true_(result.inferred) : false_();
}
