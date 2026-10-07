// deno-fmt-ignore-file
import { IsInteger } from '../types/integer.mjs';
import { IsNumber } from '../types/number.mjs';
import { ExtendsRight } from './extends_right.mjs';
import * as Result from './result.mjs';
export function ExtendsInteger(inferred, left, right) {
    return (IsInteger(right) ? Result.ExtendsTrue(inferred) :
        IsNumber(right) ? Result.ExtendsTrue(inferred) :
            ExtendsRight(inferred, left, right));
}
