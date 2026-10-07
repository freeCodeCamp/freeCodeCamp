// deno-fmt-ignore-file
import { IsString } from '../types/string.mjs';
import { ExtendsRight } from './extends_right.mjs';
import * as Result from './result.mjs';
export function ExtendsString(inferred, left, right) {
    return (IsString(right)
        ? Result.ExtendsTrue(inferred)
        : ExtendsRight(inferred, left, right));
}
