import type {KeysOfUnion} from './keys-of-union.d.ts';

/**
Omits keys from a type, distributing the operation over a union.

TypeScript's `Omit` doesn't distribute over unions, leading to the erasure of unique properties from union members when omitting keys. This creates a type that only retains properties common to all union members, making it impossible to access member-specific properties after the Omit. Essentially, using `Omit` on a union type merges the types into a less specific one, hindering type narrowing and property access based on discriminants. This type solves that.

Example:

```
type A = {
	discriminant: 'A';
	foo: string;
	a: number;
};

type B = {
	discriminant: 'B';
	foo: string;
	b: string;
};

type Union = A | B;

type OmittedUnion = Omit<Union, 'foo'>;
//=> {discriminant: 'A' | 'B'}

declare const omittedUnion: OmittedUnion;

if (omittedUnion.discriminant === 'A') {
	// We would like to narrow `omittedUnion`'s type
	// to `A` here, but we can't because `Omit`
	// doesn't distribute over unions.

	// @ts-expect-error
	const aValue = omittedUnion.a;
	// Error: `a` is not a property of `{discriminant: 'A' | 'B'}`
}
```

While `Except` solves this problem, it restricts the keys you can omit to the ones that are present in **ALL** union members, where `DistributedOmit` allows you to omit keys that are present in **ANY** union member.

@example
```
import type {DistributedOmit} from 'type-fest';

type A = {
	discriminant: 'A';
	foo: string;
	a: number;
};

type B = {
	discriminant: 'B';
	foo: string;
	bar: string;
	b: string;
};

type C = {
	discriminant: 'C';
	bar: string;
	c: boolean;
};

// Notice that `foo` exists in `A` and `B`, but not in `C`, and
// `bar` exists in `B` and `C`, but not in `A`.

type Union = A | B | C;

type OmittedUnion = DistributedOmit<Union, 'foo' | 'bar'>;

declare const omittedUnion: OmittedUnion;

if (omittedUnion.discriminant === 'A') {
	const aValue = omittedUnion.a;
	// OK

	// @ts-expect-error
	const fooValue = omittedUnion.foo;
	// Error: `foo` is not a property of `{discriminant: 'A'; a: string}`

	// @ts-expect-error
	const barValue = omittedUnion.bar;
	// Error: `bar` is not a property of `{discriminant: 'A'; a: string}`
}
```

@category Object
*/
export type DistributedOmit<ObjectType, KeyType extends KeysOfUnion<ObjectType>> =
	ObjectType extends unknown
		? Omit<ObjectType, KeyType>
		: never;

export {};
