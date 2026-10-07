/**
Matches any non-empty string.

This is useful when you need a string that is not empty, for example, as a function parameter.

NOTE:
- This returns `never` not just when instantiated with an empty string, but also when an empty string is a subtype of the instantiated type, like `string` or `Uppercase<string>`.

@example
```
import type {NonEmptyString} from 'type-fest';

declare function foo<T extends string>(string: NonEmptyString<T>): void;

foo('a');
// OK

// @ts-expect-error
foo('');
// Error: Argument of type '""' is not assignable to parameter of type 'never'.

declare const someString: string;
// @ts-expect-error
foo(someString);
// Error: Argument of type 'string' is not assignable to parameter of type 'never'.
```

@category String
*/
export type NonEmptyString<T extends string> = '' extends T ? never : T;

export {};
