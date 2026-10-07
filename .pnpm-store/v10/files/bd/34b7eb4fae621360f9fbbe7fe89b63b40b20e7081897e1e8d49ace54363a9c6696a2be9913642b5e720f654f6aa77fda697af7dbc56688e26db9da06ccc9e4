import type {IsEqual, Subtract} from './internal';

type Recursive<T> = ReadonlyArray<Recursive<T>>;

/**
Creates a type that represents a multidimensional readonly array that of the given type and dimension.

Use-cases:
- Return a n-dimensional array from functions.
- Declare a n-dimensional array by defining its dimensions rather than declaring `[]` repetitively.
- Infer the dimensions of a n-dimensional array automatically from function arguments.
- Avoid the need to know in advance the dimensions of a n-dimensional array allowing them to be dynamic.

@example
```
import type {MultidimensionalReadonlyArray} from 'type-fest';

function emptyMatrix<T extends number>(dimensions: T): MultidimensionalReadonlyArray<unknown, T> {
	const matrix: unknown[] = [];

	let subMatrix = matrix;
	for (let dimension = 1; dimension < dimensions; ++dimension) {
		console.log(`Initializing dimension #${dimension}`);

		subMatrix[0] = [];
		if (dimension < dimensions - 1) {
			subMatrix = subMatrix[0] as unknown[];
		} else {
			subMatrix[0] = 42;
		}
	}

	return matrix as MultidimensionalReadonlyArray<unknown, T>;
}

const matrix = emptyMatrix(3);

const answer = matrix[0][0][0]; // 42
```

@category Array
*/
export type MultidimensionalReadonlyArray<Element, Dimensions extends number> = number extends Dimensions
	? Recursive<Element>
	: IsEqual<Dimensions, 0> extends true
		? Element
		: ReadonlyArray<MultidimensionalReadonlyArray<Element, Subtract<Dimensions, 1>>>;
