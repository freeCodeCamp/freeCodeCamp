/**
@deprecated Use the built-in [`Awaited` type](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-5.html#the-awaited-type-and-promise-improvements) instead.

Returns the type that is wrapped inside a `Promise` type.
If the type is a nested Promise, it is unwrapped recursively until a non-Promise type is obtained.
If the type is not a `Promise`, the type itself is returned.

@example
```
import type {PromiseValue} from 'type-fest';

type AsyncData = Promise<string>;
let asyncData: AsyncData = Promise.resolve('ABC');

type Data = PromiseValue<AsyncData>;
let data: Data = await asyncData;

// Here's an example that shows how this type reacts to non-Promise types.
type SyncData = PromiseValue<string>;
let syncData: SyncData = getSyncData();

// Here's an example that shows how this type reacts to recursive Promise types.
type RecursiveAsyncData = Promise<Promise<string>>;
let recursiveAsyncData: PromiseValue<RecursiveAsyncData> = await Promise.resolve(Promise.resolve('ABC'));
```

@category Async
*/
export type PromiseValue<PromiseType> = PromiseType extends PromiseLike<infer Value> ? PromiseValue<Value> : PromiseType;
