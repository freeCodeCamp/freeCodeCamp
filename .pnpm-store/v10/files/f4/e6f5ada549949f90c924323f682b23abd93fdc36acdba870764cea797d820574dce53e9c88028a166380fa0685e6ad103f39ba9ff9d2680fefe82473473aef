/**
Create a type with the keys of the given type changed to `string` type.

Use-case: Changing interface values to strings in order to use them in a form model.

@example
```
import type {Stringified} from 'type-fest';

type Car = {
	model: string;
	speed: number;
};

const carForm: Stringified<Car> = {
	model: 'Foo',
	speed: '101',
};
```

@category Object
*/
export type Stringified<ObjectType> = {[KeyType in keyof ObjectType]: string};

export {};
