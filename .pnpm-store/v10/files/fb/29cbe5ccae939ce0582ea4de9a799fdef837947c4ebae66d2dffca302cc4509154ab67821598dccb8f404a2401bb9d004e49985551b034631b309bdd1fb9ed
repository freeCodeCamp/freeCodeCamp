import type {OmitIndexSignature} from './omit-index-signature.d.ts';
import type {PickIndexSignature} from './pick-index-signature.d.ts';
import type {Simplify} from './simplify.d.ts';
import type {If} from './if.d.ts';
import type {IsEqual} from './is-equal.d.ts';

// Merges two objects without worrying about index signatures.
type SimpleMerge<Destination, Source> = Simplify<{
	[Key in keyof Destination as Key extends keyof Source ? never : Key]: Destination[Key];
} & Source>;

/**
Merge two types into a new type. Keys of the second type overrides keys of the first type.

This is different from the TypeScript `&` (intersection) operator. With `&`, conflicting property types are intersected, which often results in `never`. For example, `{a: string} & {a: number}` makes `a` become `string & number`, which resolves to `never`. With `Merge`, the second type's keys cleanly override the first, so `Merge<{a: string}, {a: number}>` gives `{a: number}` as expected. `Merge` also produces a flattened type (via `Simplify`), making it more readable in IDE tooltips compared to `A & B`.

@example
```
import type {Merge} from 'type-fest';

type Foo = {
	a: string;
	b: number;
};

type Bar = {
	a: number; // Conflicts with Foo['a']
	c: boolean;
};

// With `&`, `a` becomes `string & number` which is `never`. Not what you want.
type WithIntersection = (Foo & Bar)['a'];
//=> never

// With `Merge`, `a` is cleanly overridden to `number`.
type WithMerge = Merge<Foo, Bar>['a'];
//=> number
```

@example
```
import type {Merge} from 'type-fest';

type Foo = {
	[x: string]: unknown;
	[x: number]: unknown;
	foo: string;
	bar: symbol;
};

type Bar = {
	[x: number]: number;
	[x: symbol]: unknown;
	bar: Date;
	baz: boolean;
};

export type FooBar = Merge<Foo, Bar>;
//=> {
// 	[x: string]: unknown;
// 	[x: number]: number;
// 	[x: symbol]: unknown;
// 	foo: string;
// 	bar: Date;
// 	baz: boolean;
// }
```

Note: If you want a merge type that more accurately reflects the runtime behavior of object spread or `Object.assign`, refer to the {@link ObjectMerge} type.

@see {@link ObjectMerge}
@category Object
*/
export type Merge<Destination, Source> =
	Destination extends unknown // For distributing `Destination`
		? Source extends unknown // For distributing `Source`
			? If<IsEqual<Destination, Source>, Destination, _Merge<Destination, Source>>
			: never // Should never happen
		: never; // Should never happen

export type _Merge<Destination, Source> =
	Simplify<
		SimpleMerge<PickIndexSignature<Destination>, PickIndexSignature<Source>>
		& SimpleMerge<OmitIndexSignature<Destination>, OmitIndexSignature<Source>>
	>;

export {};
