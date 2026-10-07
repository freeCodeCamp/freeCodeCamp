// deno-fmt-ignore-file
import { IsAny } from '../types/any.mjs';
import { IsConstructor } from '../types/constructor.mjs';
import { IsUnknown } from '../types/unknown.mjs';
import * as Result from './result.mjs';
// ------------------------------------------------------------------
// Parameters | ReturnType
// ------------------------------------------------------------------ 
import { ExtendsParameters } from './parameters.mjs';
import { ExtendsReturnType } from './return_type.mjs';
export function ExtendsConstructor(inferred, parameters, returnType, right) {
    return (IsAny(right) ? Result.ExtendsTrue(inferred) :
        IsUnknown(right) ? Result.ExtendsTrue(inferred) :
            IsConstructor(right) ? Result.Match(ExtendsParameters(inferred, parameters, right['parameters']), inferred => ExtendsReturnType(inferred, returnType, right['instanceType']), () => Result.ExtendsFalse()) // 'not-a-parameter-match'
                : Result.ExtendsFalse() // 'not-a-constructor'
    );
}
