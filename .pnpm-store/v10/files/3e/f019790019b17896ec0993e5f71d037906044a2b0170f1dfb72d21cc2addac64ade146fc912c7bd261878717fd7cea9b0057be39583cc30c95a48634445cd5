/**
Returns a boolean for whether the given type is `never`.

@link https://github.com/microsoft/TypeScript/issues/31751#issuecomment-498526919
@link https://stackoverflow.com/a/53984913/10292952
@link https://www.zhenghao.io/posts/ts-never

Useful in type utilities, such as checking if something does not occur.

@example
```
import type {IsNever, And} from 'type-fest';

type A = IsNever<never>;
//=> true

type B = IsNever<any>;
//=> false

type C = IsNever<unknown>;
//=> false

type D = IsNever<never[]>;
//=> false

type E = IsNever<object>;
//=> false

type F = IsNever<string>;
//=> false
```

@example
```
import type {IsNever} from 'type-fest';

type IsTrue<T> = T extends true ? true : false;

// When a distributive conditional is instantiated with `never`, the entire conditional results in `never`.
type A = IsTrue<never>;
//=> never

// If you don't want that behaviour, you can explicitly add an `IsNever` check before the distributive conditional.
type IsTrueFixed<T> =
	IsNever<T> extends true ? false : T extends true ? true : false;

type B = IsTrueFixed<never>;
//=> false
```

@category Type Guard
@category Utilities
*/
export type IsNever<T> = [T] extends [never] ? true : false;

export {};
