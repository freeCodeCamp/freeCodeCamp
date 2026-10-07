/**
Tries to find the type of a global with the given name.

Limitations: Due to peculiarities with the behavior of `globalThis`, "globally defined" only includes `var` declarations in `declare global` blocks, not `let` or `const` declarations.

@example
```
import type {FindGlobalType} from 'type-fest';

declare global {
	const foo: number; // let and const don't work
	var bar: string; // var works
}

type FooType = FindGlobalType<'foo'>; //=> never (let/const don't work)
type BarType = FindGlobalType<'bar'>; //=> string
type OtherType = FindGlobalType<'other'>; //=> never (no global named 'other')
```

@category Utilities
*/
export type FindGlobalType<Name extends string> = typeof globalThis extends Record<Name, infer T> ? T : never;

/**
Tries to find one or more types from their globally-defined constructors.

Use-case: Conditionally referencing DOM types only when the DOM library present.

*Limitations:* Due to peculiarities with the behavior of `globalThis`, "globally defined" has a narrow definition in this case. Declaring a class in a `declare global` block won't work, instead you must declare its type using an interface and declare its constructor as a `var` (*not* `let`/`const`) inside the `declare global` block.

@example
```
import type {FindGlobalInstanceType} from 'type-fest';

class Point {
	constructor(public x: number, public y: number) {}
}

type PointLike = Point | FindGlobalInstanceType<'DOMPoint'>;
```

@example
```
import type {FindGlobalInstanceType} from 'type-fest';

declare global {
	// Class syntax won't add the key to `globalThis`
	class Foo {}

	// interface + constructor style works
	interface Bar {
		bar: string;
	}
	var Bar: new () => Bar; // Not let or const
}

type FindFoo = FindGlobalInstanceType<'Foo'>; // Doesn't work
type FindBar = FindGlobalInstanceType<'Bar'>; // Works
```

@category Utilities
*/
export type FindGlobalInstanceType<Name extends string> =
	Name extends string
		? typeof globalThis extends Record<Name, abstract new (...arguments_: any[]) => infer T> ? T : never
		: never;

export {};
