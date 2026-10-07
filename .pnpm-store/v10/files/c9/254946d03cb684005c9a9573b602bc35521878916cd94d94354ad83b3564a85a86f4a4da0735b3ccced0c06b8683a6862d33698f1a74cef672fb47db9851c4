/**
Get keys of the given type as strings.

Number keys are converted to strings.

Use-cases:
- Get string keys from a type which may have number keys.
- Makes it possible to index using strings retrieved from template types.

@example
```
import type {StringKeyOf} from 'type-fest';

type Foo = {
	1: number,
	stringKey: string,
};

type StringKeysOfFoo = StringKeyOf<Foo>;
//=> '1' | 'stringKey'
```

@category Object
*/
export type StringKeyOf<BaseType> = `${Extract<keyof BaseType, string | number>}`;
