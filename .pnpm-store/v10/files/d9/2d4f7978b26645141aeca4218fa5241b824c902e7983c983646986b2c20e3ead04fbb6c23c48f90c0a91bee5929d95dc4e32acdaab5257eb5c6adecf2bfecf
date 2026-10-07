import type {IsNever} from './is-never.d.ts';

/**
An if-else-like type that resolves depending on whether the given type is `never`.

@deprecated This type will be removed in the next major version. Use the {@link If} type instead.

@see {@link IsNever}

@example
```
import type {IfNever} from 'type-fest';

type ShouldBeTrue = IfNever<never>;
//=> true

type ShouldBeBar = IfNever<'not never', 'foo', 'bar'>;
//=> 'bar'
```

@category Type Guard
@category Utilities
*/
export type IfNever<T, TypeIfNever = true, TypeIfNotNever = false> = (
	IsNever<T> extends true ? TypeIfNever : TypeIfNotNever
);

export {};
