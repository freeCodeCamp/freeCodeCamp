import type {UnionToIntersection} from './union-to-intersection.d.ts';
import type {IsNever} from './is-never.d.ts';

/**
Returns an arbitrary member of a union type.

Use-cases:
- Implementing recursive type functions that accept a union type.

@example
```
import type {UnionMember, IsNever} from 'type-fest';

type UnionLength<T, Acc extends any[] = []> =
	UnionMember<T> extends infer Member
		? IsNever<Member> extends false
			? UnionLength<Exclude<T, Member>, [...Acc, Member]>
			: Acc['length']
		: never;

type T1 = UnionLength<'foo' | 'bar' | 'baz'>;
//=> 3

type T2 = UnionLength<{a: string}>;
//=> 1
```

- Picking an arbitrary member from a union

@example
```
import type {UnionMember, Primitive, LiteralToPrimitive} from 'type-fest';

type IsHomogenous<T extends Primitive> = [T] extends [LiteralToPrimitive<UnionMember<T>>] ? true : false;

type T1 = IsHomogenous<1 | 2 | 3 | 4>;
//=> true

type T2 = IsHomogenous<'foo' | 'bar'>;
//=> true

type T3 = IsHomogenous<'foo' | 'bar' | 1>;
//=> false
```

Returns `never` when the input is `never`.

@example
```
import type {UnionMember} from 'type-fest';

type LastNever = UnionMember<never>;
//=> never
```

@category Type
*/
export type UnionMember<T> =
	IsNever<T> extends true
		? never
		: UnionToIntersection<T extends any ? () => T : never> extends () => (infer R)
			? R
			: never;

export {};
