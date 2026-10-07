// deno-fmt-ignore-file
import { IsArray } from '../types/array.mjs';
import { IsImmutable } from '../types/_immutable.mjs';
import { ExtendsRight } from './extends_right.mjs';
import { ExtendsLeft } from './extends_left.mjs';
import * as Result from './result.mjs';
function ExtendsImmutable(left, right) {
    const isImmutableLeft = IsImmutable(left);
    const isImmutableRight = IsImmutable(right);
    return (isImmutableLeft && isImmutableRight ? true :
        !isImmutableLeft && isImmutableRight ? true :
            isImmutableLeft && !isImmutableRight ? false :
                true);
}
export function ExtendsArray(inferred, arrayLeft, left, right) {
    return (IsArray(right)
        ? ExtendsImmutable(arrayLeft, right)
            ? ExtendsLeft(inferred, left, right.items)
            : Result.ExtendsFalse()
        : ExtendsRight(inferred, arrayLeft, right));
}
