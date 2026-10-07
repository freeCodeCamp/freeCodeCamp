import type {IsAny} from './is-any.d.ts';

/**
An if-else-like type that resolves depending on whether the given type is `any`.

@deprecated This type will be removed in the next major version. Use the {@link If} type instead.

@see {@link IsAny}

@example
```
import type {IfAny} from 'type-fest';

type ShouldBeTrue = IfAny<any>;
//=> true

type ShouldBeBar = IfAny<'not any', 'foo', 'bar'>;
//=> 'bar'
```

@category Type Guard
@category Utilities
*/
export type IfAny<T, TypeIfAny = true, TypeIfNotAny = false> = (
	IsAny<T> extends true ? TypeIfAny : TypeIfNotAny
);

export {};
