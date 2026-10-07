import type {ArrayEntry, MapEntry, ObjectEntry, SetEntry} from './entry';

type ArrayEntries<BaseType extends readonly unknown[]> = Array<ArrayEntry<BaseType>>;
type MapEntries<BaseType> = Array<MapEntry<BaseType>>;
type ObjectEntries<BaseType> = Array<ObjectEntry<BaseType>>;
type SetEntries<BaseType extends Set<unknown>> = Array<SetEntry<BaseType>>;

/**
Many collections have an `entries` method which returns an array of a given object's own enumerable string-keyed property [key, value] pairs. The `Entries` type will return the type of that collection's entries.

For example the {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries|`Object`}, {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/entries|`Map`}, {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries|`Array`}, and {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/entries|`Set`} collections all have this method. Note that `WeakMap` and `WeakSet` do not have this method since their entries are not enumerable.

@see `Entry` if you want to just access the type of a single entry.

@example
```
import type {Entries} from 'type-fest';

interface Example {
	someKey: number;
}

const manipulatesEntries = (examples: Entries<Example>) => examples.map(example => [
	// Does some arbitrary processing on the key (with type information available)
	example[0].toUpperCase(),

	// Does some arbitrary processing on the value (with type information available)
	example[1].toFixed()
]);

const example: Example = {someKey: 1};
const entries = Object.entries(example) as Entries<Example>;
const output = manipulatesEntries(entries);

// Objects
const objectExample = {a: 1};
const objectEntries: Entries<typeof objectExample> = [['a', 1]];

// Arrays
const arrayExample = ['a', 1];
const arrayEntries: Entries<typeof arrayExample> = [[0, 'a'], [1, 1]];

// Maps
const mapExample = new Map([['a', 1]]);
const mapEntries: Entries<typeof map> = [['a', 1]];

// Sets
const setExample = new Set(['a', 1]);
const setEntries: Entries<typeof setExample> = [['a', 'a'], [1, 1]];
```

@category Object
@category Map
@category Set
@category Array
*/
export type Entries<BaseType> =
	BaseType extends Map<unknown, unknown> ? MapEntries<BaseType>
		: BaseType extends Set<unknown> ? SetEntries<BaseType>
		: BaseType extends readonly unknown[] ? ArrayEntries<BaseType>
		: BaseType extends object ? ObjectEntries<BaseType>
		: never;
