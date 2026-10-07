/**
Methods to exclude.
*/
type ArrayLengthMutationKeys = 'splice' | 'push' | 'pop' | 'shift' | 'unshift';

/**
Create a type that represents an array of the given type and length. The array's length and the `Array` prototype methods that manipulate its length are excluded in the resulting type.

Please participate in [this issue](https://github.com/microsoft/TypeScript/issues/26223) if you want to have a similiar type built into TypeScript.

Use-cases:
- Declaring fixed-length tuples or arrays with a large number of items.
- Creating a range union (for example, `0 | 1 | 2 | 3 | 4` from the keys of such a type) without having to resort to recursive types.
- Creating an array of coordinates with a static length, for example, length of 3 for a 3D vector.

Note: This type does not prevent out-of-bounds access. Prefer `ReadonlyTuple` unless you need mutability.

@example
```
import type {FixedLengthArray} from 'type-fest';

type FencingTeam = FixedLengthArray<string, 3>;

const guestFencingTeam: FencingTeam = ['Josh', 'Michael', 'Robert'];

const homeFencingTeam: FencingTeam = ['George', 'John'];
//=> error TS2322: Type string[] is not assignable to type 'FencingTeam'

guestFencingTeam.push('Sam');
//=> error TS2339: Property 'push' does not exist on type 'FencingTeam'
```

@category Array
@see ReadonlyTuple
*/
export type FixedLengthArray<Element, Length extends number, ArrayPrototype = [Element, ...Element[]]> = Pick<
	ArrayPrototype,
	Exclude<keyof ArrayPrototype, ArrayLengthMutationKeys>
> & {
	[index: number]: Element;
	[Symbol.iterator]: () => IterableIterator<Element>;
	readonly length: Length;
};
