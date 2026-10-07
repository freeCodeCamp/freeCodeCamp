import type {PromiseValue} from './promise-value';
import type {SetReturnType} from './set-return-type';

/**
Create an async version of the given function type, by boxing the return type in `Promise` while keeping the same parameter types.

Use-case: You have two functions, one synchronous and one asynchronous that do the same thing. Instead of having to duplicate the type definition, you can use `Asyncify` to reuse the synchronous type.

@example
```
import type {Asyncify} from 'type-fest';

// Synchronous function.
function getFooSync(someArg: SomeType): Foo {
	// …
}

type AsyncifiedFooGetter = Asyncify<typeof getFooSync>;
//=> type AsyncifiedFooGetter = (someArg: SomeType) => Promise<Foo>;

// Same as `getFooSync` but asynchronous.
const getFooAsync: AsyncifiedFooGetter = (someArg) => {
	// TypeScript now knows that `someArg` is `SomeType` automatically.
	// It also knows that this function must return `Promise<Foo>`.
	// If you have `@typescript-eslint/promise-function-async` linter rule enabled, it will even report that "Functions that return promises must be async.".

	// …
}
```

@category Async
*/
export type Asyncify<Fn extends (...args: any[]) => any> = SetReturnType<Fn, Promise<PromiseValue<ReturnType<Fn>>>>;
