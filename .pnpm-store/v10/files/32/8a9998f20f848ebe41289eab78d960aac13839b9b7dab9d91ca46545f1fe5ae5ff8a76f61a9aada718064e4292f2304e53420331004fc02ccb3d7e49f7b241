/**
Returns the type that is wrapped inside a `Promise` type.
If the type is a nested Promise, it is unwrapped recursively until a non-Promise type is obtained.
If the type is not a `Promise`, the type itself is returned.

@example
```
import {PromiseValue} from 'type-fest';

type AsyncData = Promise<string>;
let asyncData: PromiseValue<AsyncData> = Promise.resolve('ABC');

type Data = PromiseValue<AsyncData>;
let data: Data = await asyncData;

// Here's an example that shows how this type reacts to non-Promise types.
type SyncData = PromiseValue<string>;
let syncData: SyncData = getSyncData();

// Here's an example that shows how this type reacts to recursive Promise types.
type RecursiveAsyncData = Promise<Promise<string> >;
let recursiveAsyncData: PromiseValue<RecursiveAsyncData> = Promise.resolve(Promise.resolve('ABC'));
```
*/
export type PromiseValue<PromiseType, Otherwise = PromiseType> = PromiseType extends Promise<infer Value>
	? { 0: PromiseValue<Value>; 1: Value }[PromiseType extends Promise<unknown> ? 0 : 1]
	: Otherwise;
