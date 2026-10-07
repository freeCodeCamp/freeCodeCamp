import type {Subtract} from './subtract.d.ts';
import type {IsEqual} from './is-equal.d.ts';

type Recursive<T> = Array<Recursive<T>>;

/**
Create a type that represents a multidimensional array of the given type and dimension.

Use-cases:
- Return a n-dimensional array from functions.
- Declare a n-dimensional array by defining its dimensions rather than declaring `[]` repetitively.
- Infer the dimensions of a n-dimensional array automatically from function arguments.
- Avoid the need to know in advance the dimensions of a n-dimensional array allowing them to be dynamic.

@example
```
import type {MultidimensionalArray} from 'type-fest';

declare function emptyMatrix<Item = unknown>(): <Dimension extends number>(
	dimensions: Dimension,
) => MultidimensionalArray<Item, Dimension>;

const unknown3DMatrix = emptyMatrix()(3);
//=> unknown[][][]

const boolean2DMatrix = emptyMatrix<boolean>()(2);
//=> boolean[][]
```

@category Array
*/
export type MultidimensionalArray<Element, Dimensions extends number> = number extends Dimensions
	? Recursive<Element>
	: IsEqual<Dimensions, 0> extends true
		? Element
		: Array<MultidimensionalArray<Element, Subtract<Dimensions, 1>>>;

export {};
