import {Primitive} from './basic';

/**
Create a type from another type with all keys and nested keys set to optional.

Use-cases:
- Merging a default settings/config object with another object, the second object would be a deep partial of the default object.
- Mocking and testing complex entities, where populating an entire object with its keys would be redundant in terms of the mock or test.

@example
```
import {PartialDeep} from 'type-fest';

const settings: Settings = {
	textEditor: {
		fontSize: 14;
		fontColor: '#000000';
		fontWeight: 400;
	}
	autocomplete: false;
	autosave: true;
};

const applySavedSettings = (savedSettings: PartialDeep<Settings>) => {
	return {...settings, ...savedSettings};
}

settings = applySavedSettings({textEditor: {fontWeight: 500}});
```
*/
export type PartialDeep<T> = T extends Primitive
	? Partial<T>
	: T extends Map<infer KeyType, infer ValueType>
	? PartialMapDeep<KeyType, ValueType>
	: T extends Set<infer ItemType>
	? PartialSetDeep<ItemType>
	: T extends ReadonlyMap<infer KeyType, infer ValueType>
	? PartialReadonlyMapDeep<KeyType, ValueType>
	: T extends ReadonlySet<infer ItemType>
	? PartialReadonlySetDeep<ItemType>
	: T extends ((...arguments: any[]) => unknown)
	? T | undefined
	: T extends object
	? PartialObjectDeep<T>
	: unknown;

/**
Same as `PartialDeep`, but accepts only `Map`s and  as inputs. Internal helper for `PartialDeep`.
*/
interface PartialMapDeep<KeyType, ValueType> extends Map<PartialDeep<KeyType>, PartialDeep<ValueType>> {}

/**
Same as `PartialDeep`, but accepts only `Set`s as inputs. Internal helper for `PartialDeep`.
*/
interface PartialSetDeep<T> extends Set<PartialDeep<T>> {}

/**
Same as `PartialDeep`, but accepts only `ReadonlyMap`s as inputs. Internal helper for `PartialDeep`.
*/
interface PartialReadonlyMapDeep<KeyType, ValueType> extends ReadonlyMap<PartialDeep<KeyType>, PartialDeep<ValueType>> {}

/**
Same as `PartialDeep`, but accepts only `ReadonlySet`s as inputs. Internal helper for `PartialDeep`.
*/
interface PartialReadonlySetDeep<T> extends ReadonlySet<PartialDeep<T>> {}

/**
Same as `PartialDeep`, but accepts only `object`s as inputs. Internal helper for `PartialDeep`.
*/
type PartialObjectDeep<ObjectType extends object> = {
	[KeyType in keyof ObjectType]?: PartialDeep<ObjectType[KeyType]>
};
