/**
Convert an object with `readonly` properties into a mutable object. Inverse of `Readonly<T>`.

This can be used to [store and mutate options within a class](https://github.com/sindresorhus/pageres/blob/4a5d05fca19a5fbd2f53842cbf3eb7b1b63bddd2/source/index.ts#L72), [edit `readonly` objects within tests](https://stackoverflow.com/questions/50703834), and [construct a `readonly` object within a function](https://github.com/Microsoft/TypeScript/issues/24509).

@example
```
import {Mutable} from 'type-fest';

type Foo = {
	readonly a: number;
	readonly b: string;
};

const mutableFoo: Mutable<Foo> = {a: 1, b: '2'};
mutableFoo.a = 3;
```
*/
export type Mutable<ObjectType> = {
	// For each `Key` in the keys of `ObjectType`, make a mapped type by removing the `readonly` modifier from the property.
	-readonly [KeyType in keyof ObjectType]: ObjectType[KeyType];
};
