// deno-fmt-ignore-file
import { IsSymbol } from '../types/symbol.mjs';
import { ExtendsRight } from './extends_right.mjs';
import * as Result from './result.mjs';
export function ExtendsSymbol(inferred, left, right) {
    return (IsSymbol(right)
        ? Result.ExtendsTrue(inferred)
        : ExtendsRight(inferred, left, right));
}
