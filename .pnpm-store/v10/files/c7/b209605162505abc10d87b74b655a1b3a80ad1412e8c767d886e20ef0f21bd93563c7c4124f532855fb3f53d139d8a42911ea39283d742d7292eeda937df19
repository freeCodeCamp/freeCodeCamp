// deno-fmt-ignore-file
import { IsNumber } from '../types/number.mjs';
import { ExtendsRight } from './extends_right.mjs';
import * as Result from './result.mjs';
export function ExtendsNumber(inferred, left, right) {
    return (IsNumber(right)
        ? Result.ExtendsTrue(inferred)
        : ExtendsRight(inferred, left, right));
}
