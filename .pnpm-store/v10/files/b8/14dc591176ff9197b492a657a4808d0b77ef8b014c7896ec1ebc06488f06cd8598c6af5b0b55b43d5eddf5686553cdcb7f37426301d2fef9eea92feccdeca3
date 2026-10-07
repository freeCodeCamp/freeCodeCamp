import type {CollapseRestElement} from './internal/array.d.ts';
import type {ApplyDefaultOptions} from './internal/object.d.ts';
import type {IfNotAnyOrNever, Not} from './internal/type.d.ts';
import type {IsAny} from './is-any.d.ts';
import type {IsNever} from './is-never.d.ts';
import type {Or} from './or.d.ts';
import type {UnknownArray} from './unknown-array.d.ts';

/**
@see {@link AllExtend}
*/
export type AllExtendOptions = {
	/**
	Consider `never` elements to match the target type only if the target type itself is `never` (or `any`).

	- When set to `true` (default), `never` is _not_ treated as a bottom type, instead, it is treated as a type that matches only itself (or `any`).
	- When set to `false`, `never` is treated as a bottom type, and behaves as it normally would.

	@default true

	@example
	```
	import type {AllExtend} from 'type-fest';

	type A = AllExtend<[1, 2, never], number, {strictNever: true}>;
	//=> false

	type B = AllExtend<[1, 2, never], number, {strictNever: false}>;
	//=> true

	type C = AllExtend<[never, never], never, {strictNever: true}>;
	//=> true

	type D = AllExtend<[never, never], never, {strictNever: false}>;
	//=> true

	type E = AllExtend<['a', 'b', never], any, {strictNever: true}>;
	//=> true

	type F = AllExtend<['a', 'b', never], any, {strictNever: false}>;
	//=> true

	type G = AllExtend<[never, 1], never, {strictNever: true}>;
	//=> false

	type H = AllExtend<[never, 1], never, {strictNever: false}>;
	//=> false
	```
	*/
	strictNever?: boolean;
};

type DefaultAllExtendOptions = {
	strictNever: true;
};

/**
Returns a boolean for whether every element in an array type extends another type.

@example
```
import type {AllExtend} from 'type-fest';

type A = AllExtend<[1, 2, 3], number>;
//=> true

type B = AllExtend<[1, 2, '3'], number>;
//=> false

type C = AllExtend<[number, number | string], number>;
//=> boolean

type D = AllExtend<[true, boolean, true], true>;
//=> boolean
```

Note: Behaviour of optional elements depend on the `exactOptionalPropertyTypes` compiler option. When the option is disabled, the target type must include `undefined` for a successful match.

```
// @exactOptionalPropertyTypes: true
import type {AllExtend} from 'type-fest';

type A = AllExtend<[1?, 2?, 3?], number>;
//=> true
```

```
// @exactOptionalPropertyTypes: false
import type {AllExtend} from 'type-fest';

type A = AllExtend<[1?, 2?, 3?], number>;
//=> boolean

type B = AllExtend<[1?, 2?, 3?], number | undefined>;
//=> true
```

@see {@link AllExtendOptions}

@category Utilities
@category Array
*/
export type AllExtend<TArray extends UnknownArray, Type, Options extends AllExtendOptions = {}> =
	_AllExtend<CollapseRestElement<TArray>, Type, ApplyDefaultOptions<AllExtendOptions, DefaultAllExtendOptions, Options>>;

type _AllExtend<TArray extends UnknownArray, Type, Options extends Required<AllExtendOptions>> = IfNotAnyOrNever<TArray,
	TArray extends readonly [infer First, ...infer Rest]
		? IsNever<First> extends true
			? Or<Or<IsNever<Type>, IsAny<Type>>, Not<Options['strictNever']>> extends true
				// If target `Type` is also `never`, or is `any`, or `strictNever` is disabled, recurse further.
				? _AllExtend<Rest, Type, Options>
				: false
			: First extends Type
				? _AllExtend<Rest, Type, Options>
				: false
		: true,
	false, false>;

export {};
