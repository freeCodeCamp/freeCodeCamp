// deno-fmt-ignore-file
import { AsyncIterator, IsAsyncIterator } from '../types/async_iterator.mjs';
import { ExtendsRight } from './extends_right.mjs';
import { ExtendsLeft } from './extends_left.mjs';
export function ExtendsAsyncIterator(inferred, left, right) {
    return (IsAsyncIterator(right)
        ? ExtendsLeft(inferred, left, right.iteratorItems)
        : ExtendsRight(inferred, AsyncIterator(left), right));
}
