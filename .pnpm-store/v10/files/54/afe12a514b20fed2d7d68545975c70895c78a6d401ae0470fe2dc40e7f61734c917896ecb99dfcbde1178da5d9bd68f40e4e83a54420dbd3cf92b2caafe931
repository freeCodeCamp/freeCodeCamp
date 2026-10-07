import type {IsAny} from './is-any.d.ts';

/**
Returns a boolean for whether the given type includes `undefined`.

@example
```ts
import type {IsOptional} from 'type-fest';

type A = IsOptional<string>;
//=> false

type B = IsOptional<string | undefined>;
//=> true

type C = IsOptional<string | null>;
//=> false

type D = IsOptional<string | null | undefined>;
//=> true
```

@category Type Guard
@category Utilities
*/
export type IsOptional<T> = IsAny<T> extends true ? true : Extract<T, undefined> extends never ? false : true;

export {};
