import type {Simplify} from '../simplify.d.ts';

// Returns `never` if the key is optional otherwise return the key type.
type RequiredFilter<Type, Key extends keyof Type> = undefined extends Type[Key]
	? Type[Key] extends undefined
		? Key
		: never
	: Key;

// Returns `never` if the key is required otherwise return the key type.
type OptionalFilter<Type, Key extends keyof Type> = undefined extends Type[Key]
	? Type[Key] extends undefined
		? never
		: Key
	: never;

/**
Enforce optional keys (by adding the `?` operator) for keys that have a union with `undefined`.

@example
```
import type {EnforceOptional} from 'type-fest';

type Foo = {
	a: string;
	b?: string;
	c: undefined;
	d: number | undefined;
};

type FooBar = EnforceOptional<Foo>;
// => {
// 	a: string;
// 	b?: string;
// 	c: undefined;
// 	d?: number;
// }
```

@internal
@category Object
*/
export type EnforceOptional<ObjectType> = Simplify<{
	[Key in keyof ObjectType as RequiredFilter<ObjectType, Key>]: ObjectType[Key]
} & {
	[Key in keyof ObjectType as OptionalFilter<ObjectType, Key>]?: Exclude<ObjectType[Key], undefined>
}>;

export {};
