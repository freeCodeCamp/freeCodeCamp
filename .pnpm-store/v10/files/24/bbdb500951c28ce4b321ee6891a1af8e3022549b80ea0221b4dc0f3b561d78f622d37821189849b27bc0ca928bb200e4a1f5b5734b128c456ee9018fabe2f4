import {Except} from './except';
import {Simplify} from './simplify';

/**
Create a type that strips `readonly` from all or some of an object's keys. Inverse of `Readonly<T>`.

This can be used to [store and mutate options within a class](https://github.com/sindresorhus/pageres/blob/4a5d05fca19a5fbd2f53842cbf3eb7b1b63bddd2/source/index.ts#L72), [edit `readonly` objects within tests](https://stackoverflow.com/questions/50703834), [construct a `readonly` object within a function](https://github.com/Microsoft/TypeScript/issues/24509), or to define a single model where the only thing that changes is whether or not some of the keys are mutable.

@example
```
import {Mutable} from 'type-fest';

type Foo = {
	readonly a: number;
	readonly b: readonly string[]; // To show that only the mutability status of the properties, not their values, are affected.
	readonly c: boolean;
};

const mutableFoo: Mutable<Foo> = {a: 1, b: ['2']};
mutableFoo.a = 3;
mutableFoo.b[0] = 'new value'; // Will still fail as the value of property "b" is still a readonly type.
mutableFoo.b = ['something']; // Will work as the "b" property itself is no longer readonly.

type SomeMutable = Mutable<Foo, 'b' | 'c'>;
// type SomeMutable = {
// 	readonly a: number;
// 	b: readonly string[]; // It's now mutable. The type of the property remains unaffected.
// 	c: boolean; // It's now mutable.
// }
```
*/
export type Mutable<BaseType, Keys extends keyof BaseType = keyof BaseType> =
	Simplify<
		// Pick just the keys that are not mutable from the base type.
		Except<BaseType, Keys> &
        // Pick the keys that should be mutable from the base type and make them mutable by removing the `readonly` modifier from the key.
        {-readonly [KeyType in keyof Pick<BaseType, Keys>]: Pick<BaseType, Keys>[KeyType]}
	>;
