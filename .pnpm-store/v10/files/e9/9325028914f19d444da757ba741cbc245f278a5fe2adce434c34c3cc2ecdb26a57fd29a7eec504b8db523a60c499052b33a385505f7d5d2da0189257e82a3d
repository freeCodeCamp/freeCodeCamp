/**
Create an array of unique values, in order, from the input arrays.

@example
```
import arrayUnion = require('array-union');

arrayUnion([1, 1, 2, 3], [2, 3]);
//=> [1, 2, 3]

arrayUnion(['foo', 'foo', 'bar']);
//=> ['foo', 'bar']

arrayUnion(['🐱', '🦄', '🐻'], ['🦄', '🌈']);
//=> ['🐱', '🦄', '🐻', '🌈']

arrayUnion(['🐱', '🦄'], ['🐻', '🦄'], ['🐶', '🌈', '🌈']);
//=> ['🐱', '🦄', '🐻', '🐶', '🌈']
```
*/
declare function arrayUnion<ArgumentsType extends readonly unknown[]>(
	...arguments: readonly ArgumentsType[]
): ArgumentsType;

export = arrayUnion;
