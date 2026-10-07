import {PromiseValue} from './promise-value';

type AsyncFunction = (...args: any[]) => Promise<unknown>;

/**
Unwrap the return type of a function that returns a `Promise`.

There has been [discussion](https://github.com/microsoft/TypeScript/pull/35998) about implementing this type in TypeScript.

@example
```ts
import {AsyncReturnType} from 'type-fest';
import {asyncFunction} from 'api';

// This type resolves to the unwrapped return type of `asyncFunction`.
type Value = AsyncReturnType<typeof asyncFunction>;

async function doSomething(value: Value) {}

asyncFunction().then(value => doSomething(value));
```
*/
export type AsyncReturnType<Target extends AsyncFunction> = PromiseValue<ReturnType<Target>>;
