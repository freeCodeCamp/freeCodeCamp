type AsyncFunction = (...arguments_: any[]) => PromiseLike<unknown>;

/**
Unwrap the return type of a function that returns a `Promise`.

There has been [discussion](https://github.com/microsoft/TypeScript/pull/35998) about implementing this type in TypeScript.

@example
```ts
import type {AsyncReturnType} from 'type-fest';

declare function asyncFunction(): Promise<{foo: string}>;

// This type resolves to the unwrapped return type of `asyncFunction`.
type Value = AsyncReturnType<typeof asyncFunction>;
//=> {foo: string}

declare function doSomething(value: Value): void;

const value = await asyncFunction();
doSomething(value);
```

@category Async
*/
export type AsyncReturnType<Target extends AsyncFunction> = Awaited<ReturnType<Target>>;

export {};
