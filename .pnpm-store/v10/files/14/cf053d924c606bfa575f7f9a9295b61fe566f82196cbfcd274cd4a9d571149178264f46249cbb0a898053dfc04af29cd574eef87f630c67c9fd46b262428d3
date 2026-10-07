import type {If} from './if.d.ts';
import type {NormalizedKeys} from './internal/object.d.ts';
import type {IfNotAnyOrNever, IsExactOptionalPropertyTypesEnabled, MapsSetsOrArrays} from './internal/type.d.ts';
import type {IsNever} from './is-never.d.ts';
import type {IsOptionalKeyOf} from './is-optional-key-of.d.ts';
import type {OmitIndexSignature} from './omit-index-signature.d.ts';
import type {PickIndexSignature} from './pick-index-signature.d.ts';
import type {RequiredKeysOf} from './required-keys-of.d.ts';
import type {Simplify} from './simplify.d.ts';

/**
Merge two object types into a new object type, where keys from the second override keys from the first.

@example
```ts
import type {ObjectMerge} from 'type-fest';

type PartialOverride = ObjectMerge<{foo: string; bar: string}, {foo: number; baz: number}>;
//=> {foo: number; baz: number; bar: string}

type CompleteOverride = ObjectMerge<{foo: string; bar: number}, {foo: number; bar: string; baz: boolean}>;
//=> {foo: number; bar: string; baz: boolean}

type NoOverride = ObjectMerge<{foo: string; bar: number}, {baz: boolean; qux: bigint}>;
//=> {baz: boolean; qux: bigint; foo: string; bar: number}
```

Use-cases:

Can be used to accurately type object spread and `Object.assign`. The built-in inference for these operations can sometimes be unsound, especially when index signatures are involved.

In the following example, both object spread and `Object.assign` produce a type that allows unsafe usage, whereas `ObjectMerge` produces a type that prevents this unsafe access.

@example
```ts
import type {ObjectMerge} from 'type-fest';

const left: {a: string} = {a: '1'};
const right: {[x: string]: number} = {a: 1};

const inferred = {...left, ...right};
//=> {a: string}

inferred.a.toUpperCase(); // No compile time error, but fails at runtime.

const objectAssign = Object.assign(left, right);
//=> {a: string} & {[x: string]: number}

objectAssign.a.toUpperCase(); // No compile time error, but fails at runtime.

declare const objectMerge: ObjectMerge<typeof left, typeof right>;
//=> {[x: string]: string | number; a: string | number}

// @ts-expect-error
objectMerge.a.toUpperCase(); // Correctly errors at compile time.
```

Can be used to merge generic type arguments.

In the following example, object spread without `ObjectMerge` produces an intersection type that is not particularly usable, whereas `ObjectMerge` produces a correctly merged and usable result.

@example
```ts
import type {ObjectMerge} from 'type-fest';

function withoutObjectMerge<T extends object, U extends object>(left: T, right: U) {
	return {...left, ...right};
}

const result1 = withoutObjectMerge({a: 1}, {a: 'one'});
//=> {a: number} & {a: string}

const {a} = result1;
//=> never

function withObjectMerge<T extends object, U extends object>(left: T, right: U) {
	return {...left, ...right} as unknown as ObjectMerge<T, U>;
}

const result2 = withObjectMerge({b: 1}, {b: 'one'});
//=> {b: string}

const {b} = result2;
//=> string
```

Note: If you want a simple merge where properties from the second object always override properties from the first object without considering runtime implications, refer to the {@link Merge} type.

@see {@link Merge}
@category Object
*/
export type ObjectMerge<First extends object, Second extends object> =
	IfNotAnyOrNever<First, IfNotAnyOrNever<Second, First extends unknown // For distributing `First`
		? Second extends unknown // For distributing `Second`
			? First extends MapsSetsOrArrays
				? unknown
				: Second extends MapsSetsOrArrays
					? unknown
					: _ObjectMerge<
						First,
						Second,
						NormalizedLiteralKeys<First>,
						NormalizedLiteralKeys<Second>,
						IsExactOptionalPropertyTypesEnabled extends true ? Required<First> : First,
						IsExactOptionalPropertyTypesEnabled extends true ? Required<Second> : Second
					>
			: never // Should never happen
		: never>, First & Second>; // Should never happen

type _ObjectMerge<
	First extends object,
	Second extends object,
	NormalizedFirstLiteralKeys extends PropertyKey,
	NormalizedSecondLiteralKeys extends PropertyKey,
	NormalizedFirst extends object,
	NormalizedSecond extends object,
> = Simplify<{
	// Map over literal keys of `Second`, except those that are optional and also present in `First`.
	-readonly [P in keyof Second as P extends NormalizedSecondLiteralKeys
		? P extends NormalizedFirstLiteralKeys
			? If<IsOptionalKeyOf<Second, P>, never, P>
			: P
		: never]:
			| Second[P]
			| (P extends NormalizedKeys<keyof PickIndexSignature<First>>
				? If<IsOptionalKeyOf<Second, P>, First[NormalizedKeys<P> & keyof First], never>
				: never)
} & {
	// Map over literal keys of `First`, except those that are not present in `Second`.
	-readonly [P in keyof First as P extends NormalizedFirstLiteralKeys
		? P extends NormalizedSecondLiteralKeys
			? never
			: P
		: never]:
			| First[P]
				// If there's a matching index signature in `Second`, then add the type for it as well,
				// for example, in `ObjectMerge<{a: string}, {[x: string]: number}>`, `a` is of type `string | number`.
			| (P extends NormalizedKeys<keyof Second>
				? Second[NormalizedKeys<P> & keyof Second]
				: never);
} & {
	// Map over non-literal keys of `Second`.
	-readonly [P in keyof Second as P extends NormalizedSecondLiteralKeys ? never : P]:
		| Second[P]
			// If there's a matching key in `First`, then add the type for it as well,
			// for example, in `ObjectMerge<{a: number}, {[x: string]: string}>`,
			// the resulting type is `{[x: string]: number | string; a: number | string}`.
			// But, exclude keys from `First` that would surely get overwritten,
			// for example, in `ObjectMerge<{a: number}, {[x: string]: string; a: string}>`,
			// `a` from `First` would get overwritten by `a` from `Second`, so don't add type for it.
		| (NormalizedKeys<P> & Exclude<keyof First, NormalizedKeys<RequiredKeysOf<OmitIndexSignature<Second>>>> extends infer NonOverwrittenKeysOfFirst
			? If<IsNever<NonOverwrittenKeysOfFirst>, // This check is required because indexing with `never` doesn't always yield `never`, for example, `{[x: string]: number}[never]` results in `number`.
				never,
				NormalizedFirst[NonOverwrittenKeysOfFirst & keyof NormalizedFirst]>
			: never); // Should never happen
} & {
	// Map over non-literal keys of `First`.
	-readonly [P in keyof First as P extends NormalizedFirstLiteralKeys ? never : P]:
		| First[P]
		| If<IsNever<NormalizedKeys<P> & keyof Second>, // This check is required because indexing with `never` doesn't always yield `never`, for example, `{[x: string]: number}[never]` results in `number`.
			never,
			NormalizedSecond[NormalizedKeys<P> & keyof NormalizedSecond]>;
} & {
	// Handle optional keys of `Second` that are also present in `First`.
	// Map over `First` instead of `Second` because the modifier is in accordance with `First`.
	-readonly [P in keyof First as P extends NormalizedFirstLiteralKeys
		? P extends NormalizedSecondLiteralKeys
			? If<IsOptionalKeyOf<Second, NormalizedKeys<P> & keyof Second>, P, never>
			: never
		: never]:
			| First[P]
			| NormalizedSecond[NormalizedKeys<P> & keyof NormalizedSecond]
}>;

/**
Get literal keys of a type, including both string and number representations wherever applicable.

@example
```ts
type A = NormalizedLiteralKeys<{0: string; '1'?: number; foo: boolean}>;
//=> 0 | '0' | 1 | '1' | 'foo'

type B = NormalizedLiteralKeys<{[x: string]: string | number; 0: string; '1'?: number}>;
//=> 0 | '0' | 1 | '1'

type C = NormalizedLiteralKeys<{[x: string]: unknown}>;
//=> never
```
*/
type NormalizedLiteralKeys<Type> = Type extends unknown // For distributing `Type`
	? NormalizedKeys<keyof OmitIndexSignature<Type>>
	: never; // Should never happen

export {};
