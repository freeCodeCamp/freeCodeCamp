// deno-fmt-ignore-file
import { IsInfer } from '../types/infer.mjs';
import { IsAny } from '../types/any.mjs';
import { IsUnknown } from '../types/unknown.mjs';
import { ExtendsRight } from './extends_right.mjs';
import * as Result from './result.mjs';
export function ExtendsAny(inferred, left, right) {
    return (IsInfer(right) ? ExtendsRight(inferred, left, right) :
        IsAny(right) ? Result.ExtendsTrue(inferred) :
            IsUnknown(right) ? Result.ExtendsTrue(inferred) :
                Result.ExtendsUnion(inferred));
}
