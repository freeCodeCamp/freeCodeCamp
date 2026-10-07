// deno-fmt-ignore-file
import { IsBigInt } from '../types/bigint.mjs';
import { ExtendsRight } from './extends_right.mjs';
import * as Result from './result.mjs';
export function ExtendsBigInt(inferred, left, right) {
    return (IsBigInt(right)
        ? Result.ExtendsTrue(inferred)
        : ExtendsRight(inferred, left, right));
}
