declare const dotProp: {
	/**
	@param object - Object to get the `path` value.
	@param path - Path of the property in the object, using `.` to separate each nested key. Use `\\.` if you have a `.` in the key.
	@param defaultValue - Default value.

	@example
	```
	import dotProp = require('dot-prop');

	dotProp.get({foo: {bar: 'unicorn'}}, 'foo.bar');
	//=> 'unicorn'

	dotProp.get({foo: {bar: 'a'}}, 'foo.notDefined.deep');
	//=> undefined

	dotProp.get({foo: {bar: 'a'}}, 'foo.notDefined.deep', 'default value');
	//=> 'default value'

	dotProp.get({foo: {'dot.dot': 'unicorn'}}, 'foo.dot\\.dot');
	//=> 'unicorn'
	```
	*/
	get<T>(
		object: {[key: string]: any} | undefined,
		path: string
	): T | undefined;
	get<T>(
		object: {[key: string]: any} | undefined,
		path: string,
		defaultValue: T
	): T;

	/**
	@param object - Object to set the `path` value.
	@param path - Path of the property in the object, using `.` to separate each nested key. Use `\\.` if you have a `.` in the key.
	@param value - Value to set at `path`.
	@returns The object.

	@example
	```
	import dotProp = require('dot-prop');

	const object = {foo: {bar: 'a'}};
	dotProp.set(object, 'foo.bar', 'b');
	console.log(object);
	//=> {foo: {bar: 'b'}}

	const foo = dotProp.set({}, 'foo.bar', 'c');
	console.log(foo);
	//=> {foo: {bar: 'c'}}

	dotProp.set(object, 'foo.baz', 'x');
	console.log(object);
	//=> {foo: {bar: 'b', baz: 'x'}}
	```
	*/
	set<T extends {[key: string]: any}>(
		object: T,
		path: string,
		value: unknown
	): T;

	/**
	@param object - Object to test the `path` value.
	@param path - Path of the property in the object, using `.` to separate each nested key. Use `\\.` if you have a `.` in the key.

	@example
	```
	import dotProp = require('dot-prop');

	dotProp.has({foo: {bar: 'unicorn'}}, 'foo.bar');
	//=> true
	```
	*/
	has(object: {[key: string]: any} | undefined, path: string): boolean;

	/**
	@param object - Object to delete the `path` value.
	@param path - Path of the property in the object, using `.` to separate each nested key. Use `\\.` if you have a `.` in the key.
	@returns A boolean of whether the property existed before being deleted.

	@example
	```
	import dotProp = require('dot-prop');

	const object = {foo: {bar: 'a'}};
	dotProp.delete(object, 'foo.bar');
	console.log(object);
	//=> {foo: {}}

	object.foo.bar = {x: 'y', y: 'x'};
	dotProp.delete(object, 'foo.bar.x');
	console.log(object);
	//=> {foo: {bar: {y: 'x'}}}
	```
	*/
	delete(object: {[key: string]: any}, path: string): boolean;
};

export = dotProp;
