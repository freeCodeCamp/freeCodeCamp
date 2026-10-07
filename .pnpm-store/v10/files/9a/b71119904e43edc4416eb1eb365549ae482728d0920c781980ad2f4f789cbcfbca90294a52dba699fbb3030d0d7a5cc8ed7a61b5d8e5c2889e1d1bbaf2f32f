/**
Returns a boolean for whether the given type is `null`.

@example
```
import type {IsNull} from 'type-fest';

type NonNullFallback<T, Fallback> = IsNull<T> extends true ? Fallback : T;

type Example1 = NonNullFallback<null, string>;
//=> string

type Example2 = NonNullFallback<number, string>;
//=> number
```

@category Type Guard
@category Utilities
*/
export type IsNull<T> = [T] extends [null] ? true : false;

export {};
