// deno-lint-ignore-file ban-types
// deno-fmt-ignore-file
import { Unreachable } from '../../system/unreachable/index.mjs';
import { Memory } from '../../system/memory/index.mjs';
import { Guard } from '../../guard/index.mjs';
import { IsOptional } from '../types/_optional.mjs';
import { IsInfer } from '../types/infer.mjs';
import { IsNever } from '../types/never.mjs';
import { IsObject, Object } from '../types/object.mjs';
import { ExtendsLeft } from './extends_left.mjs';
import { ExtendsRight } from './extends_right.mjs';
import * as Result from './result.mjs';
function ExtendsPropertyOptional(inferred, left, right) {
    return (IsOptional(left)
        ? IsOptional(right)
            ? Result.ExtendsTrue(inferred)
            : Result.ExtendsFalse()
        : Result.ExtendsTrue(inferred));
}
function ExtendsProperty(inferred, left, right) {
    return (
    // Right TInfer<TNever> is TExtendsFalse
    (IsInfer(right) && IsNever(right.extends))
        ? Result.ExtendsFalse()
        : Result.Match(ExtendsLeft(inferred, left, right), inferred => ExtendsPropertyOptional(inferred, left, right), () => Result.ExtendsFalse()));
}
function ExtractInferredProperties(keys, properties) {
    return keys.reduce((result, key) => {
        return key in properties
            ? Result.IsExtendsTrueLike(properties[key])
                // @ts-ignore 5.0.4 cannot see `.inferred`
                ? { ...result, ...properties[key].inferred }
                : Unreachable() // result
            : Unreachable(); // result
    }, {});
}
function ExtendsPropertiesComparer(inferred, left, right) {
    const properties = {};
    for (const rightKey of Guard.Keys(right)) {
        properties[rightKey] = (rightKey in left
            // We don't consider the exterior Inferred as part of the property check as
            // we don't want the exterior Context to override the Inferred Context for
            // the Property Key. This override behavior is observed in the following
            // case we want the inferred A to shadow the exterior A.
            //
            // const A = Type.Script(`{ x: 1, y: 1 }`)
            // const S = Type.Script({ A }, `{
            //   [K in keyof A]: A extends { 
            //     x: infer A, 
            //     y: infer B 
            //   } ? [A, B]   <-- inferred 'A' shadows the exterior 'A'
            //     : never
            // }`)
            ? ExtendsProperty({}, left[rightKey], right[rightKey])
            // If the right key K is not in left, but the right property is optional
            // then we say this property is permissable. This is because an optional
            // property on right is the same as property missing in left. If the
            // right is infer, then we just assign the extend type to inferred.
            : IsOptional(right[rightKey])
                ? IsInfer(right[rightKey])
                    // @ts-ignore 5.0.1 - cannot observe extend in right[rightKey].extends
                    ? Result.ExtendsTrue(Memory.Assign(inferred, { [right[rightKey].name]: right[rightKey].extends }))
                    : Result.ExtendsTrue(inferred)
                : Result.ExtendsFalse());
    }
    // Check if all properties are ExtendsTrueLike
    const checked = Guard.Values(properties).every(result => Result.IsExtendsTrueLike(result));
    // Extract inferred results from properties, but only if the check is true.
    const extracted = checked ? ExtractInferredProperties(Guard.Keys(properties), properties) : {};
    return (checked
        ? Result.ExtendsTrue(extracted)
        : Result.ExtendsFalse());
}
function ExtendsProperties(inferred, left, right) {
    const compared = ExtendsPropertiesComparer(inferred, left, right);
    return (Result.IsExtendsTrueLike(compared)
        ? Result.ExtendsTrue(Memory.Assign(inferred, compared.inferred))
        : Result.ExtendsFalse());
}
function ExtendsObjectToObject(inferred, left, right) {
    return ExtendsProperties(inferred, left, right);
}
export function ExtendsObject(inferred, left, right) {
    return (IsObject(right)
        ? ExtendsObjectToObject(inferred, left, right.properties)
        : ExtendsRight(inferred, Object(left), right));
}
