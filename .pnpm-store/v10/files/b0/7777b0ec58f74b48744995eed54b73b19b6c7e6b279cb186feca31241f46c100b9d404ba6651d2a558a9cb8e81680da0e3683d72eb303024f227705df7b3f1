declare namespace camelcase {
	interface Options {
		/**
		Uppercase the first character: `foo-bar` → `FooBar`.

		@default false
		*/
		readonly pascalCase?: boolean;
	}
}

declare const camelcase: {
	/**
	Convert a dash/dot/underscore/space separated string to camelCase or PascalCase: `foo-bar` → `fooBar`.

	@param input - String to convert to camel case.

	@example
	```
	import camelCase = require('camelcase');

	camelCase('foo-bar');
	//=> 'fooBar'

	camelCase('foo_bar');
	//=> 'fooBar'

	camelCase('Foo-Bar');
	//=> 'fooBar'

	camelCase('Foo-Bar', {pascalCase: true});
	//=> 'FooBar'

	camelCase('--foo.bar', {pascalCase: false});
	//=> 'fooBar'

	camelCase('foo bar');
	//=> 'fooBar'

	console.log(process.argv[3]);
	//=> '--foo-bar'
	camelCase(process.argv[3]);
	//=> 'fooBar'

	camelCase(['foo', 'bar']);
	//=> 'fooBar'

	camelCase(['__foo__', '--bar'], {pascalCase: true});
	//=> 'FooBar'
	```
	*/
	(input: string | ReadonlyArray<string>, options?: camelcase.Options): string;

	// TODO: Remove this for the next major release, refactor the whole definition to:
	// declare function camelcase(
	// 	input: string | ReadonlyArray<string>,
	// 	options?: camelcase.Options
	// ): string;
	// export = camelcase;
	default: typeof camelcase;
};

export = camelcase;
