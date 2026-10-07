// deno-fmt-ignore-file
import { IsCyclic } from '../types/cyclic.mjs';
import { Unknown } from '../types/unknown.mjs';
import { IsUnsafe } from '../types/unsafe.mjs';
import { ExtendsLeft } from './extends_left.mjs';
import { CyclicExtends } from '../engine/cyclic/index.mjs';
function Canonical(type) {
    return (IsCyclic(type) ? CyclicExtends(type) :
        IsUnsafe(type) ? Unknown() :
            type);
}
/** Performs a structural extends check on left and right types and yields inferred types on right if specified. */
export function Extends(inferred, left, right) {
    const canonicalLeft = Canonical(left);
    const canonicalRight = Canonical(right);
    return ExtendsLeft(inferred, canonicalLeft, canonicalRight);
}
