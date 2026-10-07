import type {BuiltIns} from './internal';

/**
Convert `object`s, `Map`s, `Set`s, and `Array`s and all of their keys/elements into immutable structures recursively.

This is useful when a deeply nested structure needs to be exposed as completely immutable, for example, an imported JSON module or when receiving an API response that is passed around.

Please upvote [this issue](https://github.com/microsoft/TypeScript/issues/13923) if you want to have this type as a built-in in TypeScript.

@example
```
// data.json
{
	"foo": ["bar"]
}

// main.ts
import type {ReadonlyDeep} from 'type-fest';
import dataJson = require('./data.json');

const data: ReadonlyDeep<typeof dataJson> = dataJson;

export default data;

// test.ts
import data from './main';

data.foo.push('bar');
//=> error TS2339: Property 'push' does not exist on type 'readonly string[]'
```

@category Object
@category Array
@category Set
@category Map
*/
export type ReadonlyDeep<T> = T extends BuiltIns
	? T
	: T extends (...arguments: any[]) => unknown
	? {} extends ReadonlyObjectDeep<T>
		? T
		: HasMultipleCallSignatures<T> extends true
		? T
		: ((...arguments: Parameters<T>) => ReturnType<T>) & ReadonlyObjectDeep<T>
	: T extends Readonly<ReadonlyMap<infer KeyType, infer ValueType>>
	? ReadonlyMapDeep<KeyType, ValueType>
	: T extends Readonly<ReadonlySet<infer ItemType>>
	? ReadonlySetDeep<ItemType>
	: T extends object
	? ReadonlyObjectDeep<T>
	: unknown;

/**
Same as `ReadonlyDeep`, but accepts only `ReadonlyMap`s as inputs. Internal helper for `ReadonlyDeep`.
*/
interface ReadonlyMapDeep<KeyType, ValueType>
	extends Readonly<ReadonlyMap<ReadonlyDeep<KeyType>, ReadonlyDeep<ValueType>>> {}

/**
Same as `ReadonlyDeep`, but accepts only `ReadonlySet`s as inputs. Internal helper for `ReadonlyDeep`.
*/
interface ReadonlySetDeep<ItemType>
	extends Readonly<ReadonlySet<ReadonlyDeep<ItemType>>> {}

/**
Same as `ReadonlyDeep`, but accepts only `object`s as inputs. Internal helper for `ReadonlyDeep`.
*/
type ReadonlyObjectDeep<ObjectType extends object> = {
	readonly [KeyType in keyof ObjectType]: ReadonlyDeep<ObjectType[KeyType]>
};

/**
Test if the given function has multiple call signatures.

Needed to handle the case of a single call signature with properties.

Multiple call signatures cannot currently be supported due to a TypeScript limitation.
@see https://github.com/microsoft/TypeScript/issues/29732
*/
type HasMultipleCallSignatures<T extends (...arguments: any[]) => unknown> =
	T extends {(...arguments: infer A): unknown; (...arguments: any[]): unknown}
		? unknown[] extends A
			? false
			: true
		: false;
