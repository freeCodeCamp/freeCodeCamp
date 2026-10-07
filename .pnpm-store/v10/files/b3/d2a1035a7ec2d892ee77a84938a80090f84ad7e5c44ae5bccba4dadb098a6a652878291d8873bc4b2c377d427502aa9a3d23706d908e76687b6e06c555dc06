// deno-fmt-ignore-file
import { IsInfer } from '../types/infer.mjs';
import { ExtendsRight } from './extends_right.mjs';
import * as Result from './result.mjs';
export function ExtendsNever(inferred, left, right) {
    return (IsInfer(right)
        ? ExtendsRight(inferred, left, right)
        : Result.ExtendsTrue(inferred));
}
