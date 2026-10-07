import type {If} from '../if.d.ts';
import type {IsAny} from '../is-any.d.ts';
import type {IsNever} from '../is-never.d.ts';
import type {Primitive} from '../primitive.d.ts';
import type {UnknownArray} from '../unknown-array.d.ts';
import type {UnionToIntersection} from '../union-to-intersection.d.ts';

/**
Matches any primitive, `void`, `Date`, or `RegExp` value.
*/
export type BuiltIns = Primitive | void | Date | RegExp;

/**
Matches non-recursive types.
*/
export type NonRecursiveType = BuiltIns | Function | (new (...arguments_: any[]) => unknown) | Promise<unknown>;

/**
Matches maps, sets, or arrays.
*/
export type MapsSetsOrArrays = ReadonlyMap<unknown, unknown> | WeakMap<WeakKey, unknown> | ReadonlySet<unknown> | WeakSet<WeakKey> | UnknownArray;

/**
Returns a boolean for whether the two given types extends the base type.
*/
export type IsBothExtends<BaseType, FirstType, SecondType> = FirstType extends BaseType
	? SecondType extends BaseType
		? true
		: false
	: false;

/**
Test if the given function has multiple call signatures.

Needed to handle the case of a single call signature with properties.

Multiple call signatures cannot currently be supported due to a TypeScript limitation.
@see https://github.com/microsoft/TypeScript/issues/29732
*/
export type HasMultipleCallSignatures<T extends (...arguments_: any[]) => unknown> =
	T extends {(...arguments_: infer A): unknown; (...arguments_: infer B): unknown}
		? B extends A
			? A extends B
				? false
				: true
			: true
		: false;

/**
Returns a boolean for whether the given `boolean` is not `false`.
*/
export type IsNotFalse<T extends boolean> = [T] extends [false] ? false : true;

/**
Returns a boolean for whether the given type is primitive value or primitive type.

@example
```
type A = IsPrimitive<'string'>;
//=> true

type B = IsPrimitive<string>;
//=> true

type C = IsPrimitive<Object>;
//=> false
```
*/
export type IsPrimitive<T> = [T] extends [Primitive] ? true : false;

/**
Returns a boolean for whether A is false.

@example
```
type A = Not<true>;
//=> false

type B = Not<false>;
//=> true
```
*/
export type Not<A extends boolean> = A extends true
	? false
	: A extends false
		? true
		: never;

/**
An if-else-like type that resolves depending on whether the given type is `any` or `never`.

@example
```
// When `T` is a NOT `any` or `never` (like `string`) => Returns `IfNotAnyOrNever` branch
type A = IfNotAnyOrNever<string, 'VALID', 'IS_ANY', 'IS_NEVER'>;
//=> 'VALID'

// When `T` is `any` => Returns `IfAny` branch
type B = IfNotAnyOrNever<any, 'VALID', 'IS_ANY', 'IS_NEVER'>;
//=> 'IS_ANY'

// When `T` is `never` => Returns `IfNever` branch
type C = IfNotAnyOrNever<never, 'VALID', 'IS_ANY', 'IS_NEVER'>;
//=> 'IS_NEVER'
```

Note: Wrapping a tail-recursive type with `IfNotAnyOrNever` makes the implementation non-tail-recursive. To fix this, move the recursion into a helper type. Refer to the following example:

@example
```ts
import type {StringRepeat} from 'type-fest';

type NineHundredNinetyNineSpaces = StringRepeat<' ', 999>;

// The following implementation is not tail recursive
type TrimLeft<S extends string> = IfNotAnyOrNever<S, S extends ` ${infer R}` ? TrimLeft<R> : S>;

// Hence, instantiations with long strings will fail
// @ts-expect-error
type T1 = TrimLeft<NineHundredNinetyNineSpaces>;
//        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Error: Type instantiation is excessively deep and possibly infinite.

// To fix this, move the recursion into a helper type
type TrimLeftOptimised<S extends string> = IfNotAnyOrNever<S, _TrimLeftOptimised<S>>;

type _TrimLeftOptimised<S extends string> = S extends ` ${infer R}` ? _TrimLeftOptimised<R> : S;

type T2 = TrimLeftOptimised<NineHundredNinetyNineSpaces>;
//=> ''
```
*/
export type IfNotAnyOrNever<T, IfNotAnyOrNever, IfAny = any, IfNever = never> =
	If<IsAny<T>, IfAny, If<IsNever<T>, IfNever, IfNotAnyOrNever>>;

/**
Returns a boolean for whether the given type is `any` or `never`.

This type can be better to use than {@link IfNotAnyOrNever `IfNotAnyOrNever`} in recursive types because it does not evaluate any branches.

@example
```
// When `T` is a NOT `any` or `never` (like `string`) => Returns `false`
type A = IsAnyOrNever<string>;
//=> false

// When `T` is `any` => Returns `true`
type B = IsAnyOrNever<any>;
//=> true

// When `T` is `never` => Returns `true`
type C = IsAnyOrNever<never>;
//=> true
```
*/
export type IsAnyOrNever<T> = IsNotFalse<IsAny<T> | IsNever<T>>;

/**
Indicates the value of `exactOptionalPropertyTypes` compiler option.
*/
export type IsExactOptionalPropertyTypesEnabled = [(string | undefined)?] extends [string?]
	? false
	: true;

export {};
