/**
Create a type that represents either the value or the value wrapped in `PromiseLike`.

Use-cases:
- A function accepts a callback that may either return a value synchronously or may return a promised value.
- This type could be the return type of `Promise#then()`, `Promise#catch()`, and `Promise#finally()` callbacks.

Please upvote [this issue](https://github.com/microsoft/TypeScript/issues/31394) if you want to have this type as a built-in in TypeScript.

@example
```
import type {Promisable} from 'type-fest';

async function logger(getLogEntry: () => Promisable<string>): Promise<void> {
	const entry = await getLogEntry();
	console.log(entry);
}

await logger(() => 'foo');
await logger(() => Promise.resolve('bar'));
```

@category Async
*/
export type Promisable<T> = T | PromiseLike<T>;

export {};
