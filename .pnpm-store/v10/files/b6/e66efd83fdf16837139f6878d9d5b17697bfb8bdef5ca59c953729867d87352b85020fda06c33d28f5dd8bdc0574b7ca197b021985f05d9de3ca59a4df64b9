/**
Create a union of the given object's values, and optionally specify which keys to get the values from.

Please upvote [this issue](https://github.com/microsoft/TypeScript/issues/31438) if you want to have this type as a built-in in TypeScript.

@example
```
// data.json
{
	'foo': 1,
	'bar': 2,
	'biz': 3
}

// main.ts
import type {ValueOf} from 'type-fest';
import data = require('./data.json');

export function getData(name: string): ValueOf<typeof data> {
	return data[name];
}

export function onlyBar(name: string): ValueOf<typeof data, 'bar'> {
	return data[name];
}

// file.ts
import {getData, onlyBar} from './main';

getData('foo');
//=> 1

onlyBar('foo');
//=> TypeError ...

onlyBar('bar');
//=> 2
```

@category Object
*/
export type ValueOf<ObjectType, ValueType extends keyof ObjectType = keyof ObjectType> = ObjectType[ValueType];
