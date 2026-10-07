// deno-fmt-ignore-file
import { Memory } from '../../../system/memory/index.mjs';
import { FromType } from './from_type.mjs';
import { InstantiateType, CanInstantiate } from '../instantiate.mjs';
import { CapitalizeDeferred } from '../../action/capitalize.mjs';
import { LowercaseDeferred } from '../../action/lowercase.mjs';
import { UncapitalizeDeferred } from '../../action/uncapitalize.mjs';
import { UppercaseDeferred } from '../../action/uppercase.mjs';
const CapitalizeMapping = (input) => input[0].toUpperCase() + input.slice(1);
const LowercaseMapping = (input) => input.toLowerCase();
const UncapitalizeMapping = (input) => input[0].toLowerCase() + input.slice(1);
const UppercaseMapping = (input) => input.toUpperCase();
export function CapitalizeAction(type, options) {
    const result = CanInstantiate([type])
        ? Memory.Update(FromType(CapitalizeMapping, type), {}, options)
        : CapitalizeDeferred(type, options);
    return result;
}
export function LowercaseAction(type, options) {
    const result = CanInstantiate([type])
        ? Memory.Update(FromType(LowercaseMapping, type), {}, options)
        : LowercaseDeferred(type, options);
    return result;
}
export function UncapitalizeAction(type, options) {
    const result = CanInstantiate([type])
        ? Memory.Update(FromType(UncapitalizeMapping, type), {}, options)
        : UncapitalizeDeferred(type, options);
    return result;
}
export function UppercaseAction(type, options) {
    const result = CanInstantiate([type])
        ? Memory.Update(FromType(UppercaseMapping, type), {}, options)
        : UppercaseDeferred(type, options);
    return result;
}
export function CapitalizeInstantiate(context, state, type, options) {
    const instantiatedType = InstantiateType(context, state, type);
    return CapitalizeAction(instantiatedType, options);
}
export function LowercaseInstantiate(context, state, type, options) {
    const instantiatedType = InstantiateType(context, state, type);
    return LowercaseAction(instantiatedType, options);
}
export function UncapitalizeInstantiate(context, state, type, options) {
    const instantiatedType = InstantiateType(context, state, type);
    return UncapitalizeAction(instantiatedType, options);
}
export function UppercaseInstantiate(context, state, type, options) {
    const instantiatedType = InstantiateType(context, state, type);
    return UppercaseAction(instantiatedType, options);
}
