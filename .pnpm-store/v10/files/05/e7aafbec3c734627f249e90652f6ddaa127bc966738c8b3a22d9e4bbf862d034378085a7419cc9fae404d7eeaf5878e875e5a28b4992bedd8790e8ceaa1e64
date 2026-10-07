declare namespace slugify {
	interface Options {
		/**
		@default '-'

		@example
		```
		import slugify = require('@sindresorhus/slugify');

		slugify('BAR and baz');
		//=> 'bar-and-baz'

		slugify('BAR and baz', {separator: '_'});
		//=> 'bar_and_baz'

		slugify('BAR and baz', {separator: ''});
		//=> 'barandbaz'
		```
		*/
		readonly separator?: string;

		/**
		Make the slug lowercase.

		@default true

		@example
		```
		import slugify = require('@sindresorhus/slugify');

		slugify('Déjà Vu!');
		//=> 'deja-vu'

		slugify('Déjà Vu!', {lowercase: false});
		//=> 'Deja-Vu'
		```
		*/
		readonly lowercase?: boolean;

		/**
		Convert camelcase to separate words. Internally it does `fooBar` → `foo bar`.

		@default true

		@example
		```
		import slugify = require('@sindresorhus/slugify');

		slugify('fooBar');
		//=> 'foo-bar'

		slugify('fooBar', {decamelize: false});
		//=> 'foobar'
		```
		*/
		readonly decamelize?: boolean;

		/**
		Add your own custom replacements.

		The replacements are run on the original string before any other transformations.

		This only overrides a default replacement if you set an item with the same key, like `&`.

		Add a leading and trailing space to the replacement to have it separated by dashes.

		@default [ ['&', ' and '], ['🦄', ' unicorn '], ['♥', ' love '] ]

		@example
		```
		import slugify = require('@sindresorhus/slugify');

		slugify('Foo@unicorn', {
			customReplacements: [
				['@', 'at']
			]
		});
		//=> 'fooatunicorn'

		slugify('foo@unicorn', {
			customReplacements: [
				['@', ' at ']
			]
		});
		//=> 'foo-at-unicorn'

		slugify('I love 🐶', {
			customReplacements: [
				['🐶', 'dogs']
			]
		});
		//=> 'i-love-dogs'
		```
		*/
		readonly customReplacements?: ReadonlyArray<[string, string]>;

		/**
		If your string starts with an underscore, it will be preserved in the slugified string.

		Sometimes leading underscores are intentional, for example, filenames representing hidden paths on a website.

		@default false

		@example
		```
		import slugify = require('@sindresorhus/slugify');

		slugify('_foo_bar');
		//=> 'foo-bar'

		slugify('_foo_bar', {preserveLeadingUnderscore: true});
		//=> '_foo-bar'
		```
		*/
		readonly preserveLeadingUnderscore?: boolean;
	}
}

declare const slugify: {
	/**
	Returns a new instance of `slugify(string, options?)` with a counter to handle multiple occurences of the same string.

	@param string - String to slugify.

	@example
	```
	import slugify = require('@sindresorhus/slugify');

	const countableSlugify = slugify.counter();
	countableSlugify('foo bar');
	//=> 'foo-bar'

	countableSlugify('foo bar');
	//=> 'foo-bar-2'

	countableSlugify.reset();

	countableSlugify('foo bar');
	//=> 'foo-bar'
	```

	__Use case example of counter__

	If, for example, you have a document with multiple sections where each subsection has an example.

	```
	## Section 1

	### Example

	## Section 2

	### Example
	```

	You can then use `slugify.counter()` to generate unique HTML `id`'s to ensure anchors will link to the right headline.
	*/
	counter: () => {
		/**
		Reset the counter.

		@example
		```
		import slugify = require('@sindresorhus/slugify');

		const countableSlugify = slugify.counter();
		countableSlugify('foo bar');
		//=> 'foo-bar'

		countableSlugify('foo bar');
		//=> 'foo-bar-2'

		countableSlugify.reset();

		countableSlugify('foo bar');
		//=> 'foo-bar'
		```
		*/
		reset: () => void;

		(
			string: string,
			options?: slugify.Options
		): string;
	};

	/**
	Slugify a string.

	@param string - String to slugify.

	@example
	```
	import slugify = require('@sindresorhus/slugify');

	slugify('I ♥ Dogs');
	//=> 'i-love-dogs'

	slugify('  Déjà Vu!  ');
	//=> 'deja-vu'

	slugify('fooBar 123 $#%');
	//=> 'foo-bar-123'

	slugify('я люблю единорогов');
	//=> 'ya-lyublyu-edinorogov'
	```
	*/
	(
		string: string,
		options?: slugify.Options
	): string;
};

export = slugify;
