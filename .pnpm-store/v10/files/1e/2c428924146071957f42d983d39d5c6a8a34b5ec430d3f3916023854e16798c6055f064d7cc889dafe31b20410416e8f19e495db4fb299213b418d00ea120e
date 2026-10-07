import type {Except} from './except.d.ts';
import type {Simplify} from './simplify.d.ts';

/**
Create a writable version of the given array type.
*/
type WritableArray<ArrayType extends readonly unknown[]> =
	ArrayType extends readonly [] ? []
		: ArrayType extends readonly [...infer U, infer V] ? [...U, V]
			: ArrayType extends readonly [infer U, ...infer V] ? [U, ...V]
				: ArrayType extends ReadonlyArray<infer U> ? U[]
					: ArrayType;

/**
Create a type that strips `readonly` from the given type. Inverse of `Readonly<T>`.

The 2nd argument will be ignored if the input type is not an object.

Note: This type can make readonly `Set` and `Map` writable. This behavior is different from `Readonly<T>` (as of TypeScript 5.2.2). See: https://github.com/microsoft/TypeScript/issues/29655

This can be used to [store and mutate options within a class](https://github.com/sindresorhus/pageres/blob/4a5d05fca19a5fbd2f53842cbf3eb7b1b63bddd2/source/index.ts#L72), [edit `readonly` objects within tests](https://stackoverflow.com/questions/50703834), [construct a `readonly` object within a function](https://github.com/Microsoft/TypeScript/issues/24509), or to define a single model where the only thing that changes is whether or not some of the keys are writable.

@example
```
import type {Writable} from 'type-fest';

type Foo = {
	readonly a: number;
	readonly b: readonly string[]; // To show that only the mutability status of the properties, not their values, are affected.
	readonly c: boolean;
};

const writableFoo: Writable<Foo> = {a: 1, b: ['2'], c: true};
writableFoo.a = 3;
// @ts-expect-error
writableFoo.b[0] = 'new value'; // Will still fail as the value of property "b" is still a readonly type.
writableFoo.b = ['something']; // Will work as the "b" property itself is no longer readonly.

type SomeWritable = Writable<Foo, 'b' | 'c'>;
//=> {readonly a: number; b: readonly string[]; c: boolean}

// Also supports array
const readonlyArray: readonly number[] = [1, 2, 3];
// @ts-expect-error
readonlyArray.push(4); // Will fail as the array itself is readonly.
const writableArray: Writable<typeof readonlyArray> = readonlyArray as Writable<typeof readonlyArray>;
writableArray.push(4); // Will work as the array itself is now writable.
```

@category Object
*/
export type Writable<BaseType, Keys extends keyof BaseType = keyof BaseType> =
	BaseType extends ReadonlyMap<infer KeyType, infer ValueType>
		? Map<KeyType, ValueType>
		: BaseType extends ReadonlySet<infer ItemType>
			? Set<ItemType>
			: BaseType extends readonly unknown[]
				// Handle array
				? WritableArray<BaseType>
				// Handle object
				: Simplify<
					// Pick just the keys that are not writable from the base type.
					Except<BaseType, Keys>
					// Pick the keys that should be writable from the base type and make them writable by removing the `readonly` modifier from the key.
					& {-readonly [KeyType in keyof Pick<BaseType, Keys>]: Pick<BaseType, Keys>[KeyType]}
				>;

export {};
