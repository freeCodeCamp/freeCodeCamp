// deno-fmt-ignore-file
import { IsUndefined } from '../types/undefined.mjs';
import { IsVoid } from '../types/void.mjs';
import { ExtendsRight } from './extends_right.mjs';
import * as Result from './result.mjs';
export function ExtendsUndefined(inferred, left, right) {
    return (IsVoid(right) ? Result.ExtendsTrue(inferred) :
        IsUndefined(right) ? Result.ExtendsTrue(inferred) :
            ExtendsRight(inferred, left, right));
}
