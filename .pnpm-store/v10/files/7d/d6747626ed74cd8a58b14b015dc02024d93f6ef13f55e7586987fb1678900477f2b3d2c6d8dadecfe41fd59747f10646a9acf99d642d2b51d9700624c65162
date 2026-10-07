// deno-fmt-ignore-file
import { IsVoid } from '../types/void.mjs';
import { ExtendsRight } from './extends_right.mjs';
import * as Result from './result.mjs';
export function ExtendsVoid(inferred, left, right) {
    return (IsVoid(right)
        ? Result.ExtendsTrue(inferred)
        : ExtendsRight(inferred, left, right));
}
