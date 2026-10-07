// deno-fmt-ignore-file
import { IsNull } from '../types/null.mjs';
import { ExtendsRight } from './extends_right.mjs';
import * as Result from './result.mjs';
export function ExtendsNull(inferred, left, right) {
    return (IsNull(right)
        ? Result.ExtendsTrue(inferred)
        : ExtendsRight(inferred, left, right));
}
