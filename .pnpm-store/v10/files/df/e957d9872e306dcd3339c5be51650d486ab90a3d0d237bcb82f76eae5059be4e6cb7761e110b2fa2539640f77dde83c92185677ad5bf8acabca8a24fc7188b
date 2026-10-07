// deno-fmt-ignore-file
import { IsBoolean } from '../types/boolean.mjs';
import { ExtendsRight } from './extends_right.mjs';
import * as Result from './result.mjs';
export function ExtendsBoolean(inferred, left, right) {
    return (IsBoolean(right)
        ? Result.ExtendsTrue(inferred)
        : ExtendsRight(inferred, left, right));
}
