// deno-fmt-ignore-file
import { Generic, IsGeneric } from '../../types/generic.mjs';
import { IsRef } from '../../types/ref.mjs';
import { Never } from '../../types/never.mjs';
function FromNotResolvable() {
    return ['(not-resolvable)', Never()];
}
function FromNotGeneric() {
    return ['(not-generic)', Never()];
}
function FromGeneric(name, parameters, expression) {
    return [name, Generic(parameters, expression)];
}
function FromRef(context, ref, arguments_) {
    return (ref in context
        ? FromType(context, ref, context[ref], arguments_)
        : FromNotResolvable());
}
function FromType(context, name, target, arguments_) {
    return (IsGeneric(target) ? FromGeneric(name, target.parameters, target.expression) :
        IsRef(target) ? FromRef(context, target.$ref, arguments_) :
            FromNotGeneric());
}
/** Resolves a named generic target from the context, or returns TNever if it cannot be resolved or is not generic. */
export function ResolveTarget(context, target, arguments_) {
    return FromType(context, '(anonymous)', target, arguments_);
}
