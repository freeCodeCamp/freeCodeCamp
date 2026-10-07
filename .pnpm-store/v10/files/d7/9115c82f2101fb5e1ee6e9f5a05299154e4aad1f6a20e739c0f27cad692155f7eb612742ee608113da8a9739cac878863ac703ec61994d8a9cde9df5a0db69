declare namespace camelcase {
	interface Options {
		/**
		Uppercase the first character: `foo-bar` → `FooBar`.

		@default false
		*/
		readonly pascalCase?: boolean;

		/**
		Preserve the consecutive uppercase characters: `foo-BAR` → `FooBAR`.

		@default false
		*/
		readonly preserveConsecutiveUppercase?: boolean;

		/**
		The locale parameter indicates the locale to be used to convert to upper/lower case according to any locale-specific case mappings. If multiple locales are given in an array, the best available locale is used.

		Setting `locale: false` ignores the platform locale and uses the [Unicode Default Case Conversion](https://unicode-org.github.io/icu/userguide/transforms/casemappings.html#simple-single-character-case-mapping) algorithm.

		Default: The host environment’s current locale.

		@example
		```
		import camelCase = require('camelcase');

		camelCase('lorem-ipsum', {locale: 'en-US'});
		//=> 'loremIpsum'
		camelCase('lorem-ipsum', {locale: 'tr-TR'});
		//=> 'loremİpsum'
		camelCase('lorem-ipsum', {locale: ['en-US', 'en-GB']});
		//=> 'loremIpsum'
		camelCase('lorem-ipsum', {locale: ['tr', 'TR', 'tr-TR']});
		//=> 'loremİpsum'
		```
		*/
		readonly locale?: false | string | readonly string[];
	}
}

/**
Convert a dash/dot/underscore/space separated string to camelCase or PascalCase: `foo-bar` → `fooBar`.

Correctly handles Unicode strings.

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

camelCase('розовый_пушистый_единорог');
//=> 'розовыйПушистыйЕдинорог'

camelCase('Foo-Bar', {pascalCase: true});
//=> 'FooBar'

camelCase('--foo.bar', {pascalCase: false});
//=> 'fooBar'

camelCase('Foo-BAR', {preserveConsecutiveUppercase: true});
//=> 'fooBAR'

camelCase('fooBAR', {pascalCase: true, preserveConsecutiveUppercase: true}));
//=> 'FooBAR'

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

camelCase(['foo', 'BAR'], {pascalCase: true, preserveConsecutiveUppercase: true})
//=> 'FooBAR'

camelCase('lorem-ipsum', {locale: 'en-US'});
//=> 'loremIpsum'
```
*/
declare function camelcase(
	input: string | readonly string[],
	options?: camelcase.Options
): string;

export = camelcase;
