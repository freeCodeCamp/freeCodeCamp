/**
Create a union of the given object's values, and optionally specify which keys to get the values from.

Please upvote [this issue](https://github.com/microsoft/TypeScript/issues/31438) if you want to have this type as a built-in in TypeScript.

@example
```
import type {ValueOf} from 'type-fest';

type A = ValueOf<{id: number; name: string; active: boolean}>;
//=> string | number | boolean

type B = ValueOf<{id: number; name: string; active: boolean}, 'name'>;
//=> string

type C = ValueOf<{id: number; name: string; active: boolean}, 'id' | 'name'>;
//=> string | number
```

@category Object
*/
export type ValueOf<ObjectType, ValueType extends keyof ObjectType = keyof ObjectType> = ObjectType[ValueType];

export {};
