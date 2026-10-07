/**
Convert a value to an array.

_Supplying `null` or `undefined` results in an empty array._

@example
```
import arrify = require('arrify');

arrify('🦄');
//=> ['🦄']

arrify(['🦄']);
//=> ['🦄']

arrify(new Set(['🦄']));
//=> ['🦄']

arrify(null);
//=> []

arrify(undefined);
//=> []
```
*/
declare function arrify<ValueType>(
	value: ValueType
): ValueType extends (null | undefined)
	? []
	: ValueType extends string
	? [string]
	: ValueType extends ReadonlyArray<unknown> // TODO: Use 'readonly unknown[]' in the next major version
	? ValueType
	: ValueType extends Iterable<infer T>
	? T[]
	: [ValueType];

export = arrify;
