import type {ExcludeExactly} from './exclude-exactly.d.ts';
import type {IsNever} from './is-never.d.ts';
import type {UnionMember} from './union-member.d.ts';
import type {UnknownArray} from './unknown-array.d.ts';

/**
Convert a union type into an unordered tuple type of its elements.

"Unordered" means the elements of the tuple are not guaranteed to be in the same order as in the union type. The arrangement can appear random and may change at any time.

This can be useful when you have objects with a finite set of keys and want a type defining only the allowed keys, but do not want to repeat yourself.

@example
```
import type {UnionToTuple} from 'type-fest';

type Numbers = 1 | 2 | 3;
type NumbersTuple = UnionToTuple<Numbers>;
//=> [1, 2, 3]
```

@example
```
import type {UnionToTuple} from 'type-fest';

const pets = {
	dog: '🐶',
	cat: '🐱',
	snake: '🐍',
};

type Pet = keyof typeof pets;
//=> 'dog' | 'cat' | 'snake'

const petList = Object.keys(pets) as UnionToTuple<Pet>;
//=> ['dog', 'cat', 'snake']
```

@category Array
*/
export type UnionToTuple<Union> =
	_UnionToTuple<Union> extends infer Result extends UnknownArray ? Result : never; // Nudges the compiler that `UnionToTuple` always yields an array.

type _UnionToTuple<Union, Accumulator extends UnknownArray = [], Member = UnionMember<Union>> =
	IsNever<Union> extends true
		? Accumulator
		: _UnionToTuple<ExcludeExactly<Union, Member>, [Member, ...Accumulator]>;

export {};
