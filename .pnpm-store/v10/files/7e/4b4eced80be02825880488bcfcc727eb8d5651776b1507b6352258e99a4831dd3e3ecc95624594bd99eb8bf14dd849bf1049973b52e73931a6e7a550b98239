import type {Except} from './except.d.ts';
import type {TupleOf} from './tuple-of.d.ts';

/**
Methods to exclude.
*/
type ArrayLengthMutationKeys = 'splice' | 'push' | 'pop' | 'shift' | 'unshift';

/**
Create a type that represents an array of the given type and length. The `Array` prototype methods that manipulate its length are excluded from the resulting type.

The problem with the built-in tuple type is that it allows mutating methods like `push`, `pop` etc, which can cause issues, like in the following example:

@example
```
const color: [number, number, number] = [255, 128, 64];

function toHex([r, g, b]: readonly [number, number, number]) {
	return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
}

color.pop(); // Allowed

console.log(toHex(color)); // Compiles fine, but fails at runtime since index `2` no longer contains a `number`.
```

`ArrayLengthMutationKeys` solves this problem by excluding methods like `push`, `pop` etc from the resulting type.

@example
```
import type {FixedLengthArray} from 'type-fest';

const color: FixedLengthArray<number, 3> = [255, 128, 64];

// @ts-expect-error
color.pop();
// Error: Property 'pop' does not exist on type 'FixedLengthArray<number, 3>'.
```

Use-cases:
- Declaring fixed-length tuples or arrays with a large number of items.
- Creating an array of coordinates with a static length, for example, length of 3 for a 3D vector.

@example
```
import type {FixedLengthArray} from 'type-fest';

let color: FixedLengthArray<number, 3> = [255, 128, 64];

const red = color[0];
//=> number
const green = color[1];
//=> number
const blue = color[2];
//=> number

// @ts-expect-error
const alpha = color[3];
// Error: Property '3' does not exist on type 'FixedLengthArray<number, 3>'.

// You can write to valid indices.
color[0] = 128;
color[1] = 64;
color[2] = 32;

// But you cannot write to out-of-bounds indices.
// @ts-expect-error
color[3] = 0.5;
// Error: Property '3' does not exist on type 'FixedLengthArray<number, 3>'.

// @ts-expect-error
color.push(0.5);
// Error: Property 'push' does not exist on type 'FixedLengthArray<number, 3>'.

// @ts-expect-error
color = [0, 128, 255, 0.5];
// Error: Type '[number, number, number, number]' is not assignable to type 'FixedLengthArray<number, 3>'. Types of property 'length' are incompatible.

// @ts-expect-error
color.length = 4;
// Error: Cannot assign to 'length' because it is a read-only property.

function toHex([r, g, b]: readonly [number, number, number]) {
	return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
}

console.log(toHex(color)); // `FixedLengthArray<number, 3>` is assignable to `readonly [number, number, number]`.
```

@category Array
*/
export type FixedLengthArray<Element, Length extends number> =
	Except<TupleOf<Length, Element>, ArrayLengthMutationKeys | number | 'length'>
	& {readonly length: Length}
	& (number extends Length ? {[n: number]: Element} : {}); // Add `number` index signature only for non-tuple arrays.

export {};
