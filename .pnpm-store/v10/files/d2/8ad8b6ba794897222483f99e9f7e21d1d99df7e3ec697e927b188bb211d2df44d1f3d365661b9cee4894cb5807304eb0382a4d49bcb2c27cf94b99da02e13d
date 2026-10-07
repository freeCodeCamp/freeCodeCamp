import {DelimiterCase} from './delimiter-case';

/**
Convert a string literal to snake-case.

This can be useful when, for example, converting a camel-cased object property to a snake-cased SQL column name.

@example
```
import {SnakeCase} from 'type-fest';

// Simple

const someVariable: SnakeCase<'fooBar'> = 'foo_bar';

// Advanced

type SnakeCasedProps<T> = {
	[K in keyof T as SnakeCase<K>]: T[K]
};

interface ModelProps {
	isHappy: boolean;
	fullFamilyName: string;
	foo: number;
}

const dbResult: SnakeCasedProps<ModelProps> = {
	'is_happy': true,
	'full_family_name': 'Carla Smith',
	foo: 123
};
```
*/
export type SnakeCase<Value> = DelimiterCase<Value, '_'>;
