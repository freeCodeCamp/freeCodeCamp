import type {CollapseRestElement} from './internal/array.d.ts';
import type {ApplyDefaultOptions} from './internal/object.d.ts';
import type {IfNotAnyOrNever, Not} from './internal/type.d.ts';
import type {IsAny} from './is-any.d.ts';
import type {IsNever} from './is-never.d.ts';
import type {Or} from './or.d.ts';
import type {UnknownArray} from './unknown-array.d.ts';

/**
@see {@link SomeExtend}
*/
export type SomeExtendOptions = {
	/**
	Consider `never` elements to match the target type only if the target type itself is `never` (or `any`).

	- When set to `true` (default), `never` is _not_ treated as a bottom type, instead, it is treated as a type that matches only itself (or `any`).
	- When set to `false`, `never` is treated as a bottom type, and behaves as it normally would.

	@default true

	@example
	```
	import type {SomeExtend} from 'type-fest';

	type A = SomeExtend<[1, 2, never], string, {strictNever: true}>;
	//=> false

	type B = SomeExtend<[1, 2, never], string, {strictNever: false}>;
	//=> true

	type C = SomeExtend<[1, never], never, {strictNever: true}>;
	//=> true

	type D = SomeExtend<[1, never], never, {strictNever: false}>;
	//=> true

	type E = SomeExtend<[never], any, {strictNever: true}>;
	//=> true

	type F = SomeExtend<[never], any, {strictNever: false}>;
	//=> true
	```
	*/
	strictNever?: boolean;
};

type DefaultSomeExtendOptions = {
	strictNever: true;
};

/**
Returns a boolean for whether some element in an array type extends another type.

@example
```
import type {SomeExtend} from 'type-fest';

type A = SomeExtend<['1', '2', 3], number>;
//=> true

type B = SomeExtend<[1, 2, 3], string>;
//=> false

type C = SomeExtend<[string, number | string], number>;
//=> boolean

type D = SomeExtend<[true, boolean, true], false>;
//=> boolean
```

Note: Behaviour of optional elements depend on the `exactOptionalPropertyTypes` compiler option. When the option is disabled, the target type must include `undefined` for a successful match.

```
// @exactOptionalPropertyTypes: true
import type {SomeExtend} from 'type-fest';

type A = SomeExtend<[1?, 2?, '3'?], string>;
//=> true
```

```
// @exactOptionalPropertyTypes: false
import type {SomeExtend} from 'type-fest';

type A = SomeExtend<[1?, 2?, '3'?], string>;
//=> boolean

type B = SomeExtend<[1?, 2?, '3'?], string | undefined>;
//=> true
```

@see {@link SomeExtendOptions}

@category Utilities
@category Array
*/
export type SomeExtend<TArray extends UnknownArray, Type, Options extends SomeExtendOptions = {}> =
	_SomeExtend<CollapseRestElement<TArray>, Type, ApplyDefaultOptions<SomeExtendOptions, DefaultSomeExtendOptions, Options>>;

type _SomeExtend<TArray extends UnknownArray, Type, Options extends Required<SomeExtendOptions>> = IfNotAnyOrNever<TArray,
	TArray extends readonly [infer First, ...infer Rest]
		? IsNever<First> extends true
			? Or<Or<IsNever<Type>, IsAny<Type>>, Not<Options['strictNever']>> extends true
				// If target `Type` is also `never`, or is `any`, or `strictNever` is disabled, return `true`.
				? true
				: _SomeExtend<Rest, Type, Options>
			: First extends Type
				? true
				: _SomeExtend<Rest, Type, Options>
		: false,
	false, false>;

export {};
