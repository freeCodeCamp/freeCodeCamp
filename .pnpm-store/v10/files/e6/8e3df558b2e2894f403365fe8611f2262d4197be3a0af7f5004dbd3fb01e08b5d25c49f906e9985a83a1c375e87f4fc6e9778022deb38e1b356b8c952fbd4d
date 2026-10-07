// deno-fmt-ignore-file
import { Iterator, IsIterator } from '../types/iterator.mjs';
import { ExtendsRight } from './extends_right.mjs';
import { ExtendsLeft } from './extends_left.mjs';
export function ExtendsIterator(inferred, left, right) {
    return (IsIterator(right)
        ? ExtendsLeft(inferred, left, right.iteratorItems)
        : ExtendsRight(inferred, Iterator(left), right));
}
