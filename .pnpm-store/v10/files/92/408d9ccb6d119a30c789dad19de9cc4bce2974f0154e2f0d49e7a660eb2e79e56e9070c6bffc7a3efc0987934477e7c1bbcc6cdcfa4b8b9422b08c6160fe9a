import type {IsAny} from './is-any.d.ts';

/**
Returns a boolean for whether the given type includes `null`.

Note: The built-in `NonNullable` type removes both `null` and `undefined`, which is not accurate for the name.

@example
```ts
import type {IsNullable} from 'type-fest';

type A = IsNullable<string>;
//=> false

type B = IsNullable<string | null>;
//=> true

type C = IsNullable<string | undefined>;
//=> false

type D = IsNullable<string | null | undefined>;
//=> true
```

@category Type Guard
@category Utilities
*/
export type IsNullable<T> = IsAny<T> extends true ? true : Extract<T, null> extends never ? false : true;

export {};
