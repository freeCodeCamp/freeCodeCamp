// deno-fmt-ignore-file
import { IsAny } from '../types/any.mjs';
import { IsUnknown } from '../types/unknown.mjs';
import { IsInfer } from '../types/infer.mjs';
import { ExtendsRight } from './extends_right.mjs';
import * as Result from './result.mjs';
export function ExtendsUnknown(inferred, left, right) {
    return (IsInfer(right) ? ExtendsRight(inferred, left, right) :
        IsAny(right) ? Result.ExtendsTrue(inferred) :
            IsUnknown(right) ? Result.ExtendsTrue(inferred) :
                Result.ExtendsFalse());
}
