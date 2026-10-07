/**
Simplifies a type while including and/or excluding certain types from being simplified.

Useful to improve type hints shown in editors. And also to transform an `interface` into a `type` to aid with assignability.

@example
```
import type {ConditionalSimplify} from 'type-fest';

type TypeA = {
	a: string;
};

type TypeB = {
	b: string;
};

type TypeAB = TypeA & TypeB;
//=> TypeA & TypeB

type SimplifyTypeAB = ConditionalSimplify<TypeAB, never, object>;
//=> {a: string; b: string}
```

@example
```
import type {ConditionalSimplify} from 'type-fest';

type Simplify<T> = ConditionalSimplify<T, Set<unknown> | Map<unknown, unknown> | unknown[], object>;

type A = Simplify<Set<number> & Set<string>>;
//=> Set<number> & Set<string>

type B = Simplify<Map<number, number> & Map<string, string>>;
//=> Map<number, number> & Map<string, string>

type C = Simplify<{a: number} & {b: string}>;
//=> {a: number; b: string}
```

@see {@link ConditionalSimplifyDeep}
@category Object
*/
export type ConditionalSimplify<Type, ExcludeType = never, IncludeType = unknown> = Type extends ExcludeType
	? Type
	: Type extends IncludeType
		? {[TypeKey in keyof Type]: Type[TypeKey]}
		: Type;

export {};
