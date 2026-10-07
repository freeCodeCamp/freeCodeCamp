declare namespace transliterate {
	interface Options {
		/**
		Add your own custom replacements.

		The replacements are run on the original string before any other transformations.

		This only overrides a default replacement if you set an item with the same key.

		@default []

		@example
		```
		import transliterate = require('@sindresorhus/transliterate');

		transliterate('Я люблю единорогов', {
			customReplacements: [
				['единорогов', '🦄']
			]
		})
		//=> 'Ya lyublyu 🦄'
		```
		*/
		readonly customReplacements?: ReadonlyArray<[string, string]>;
	}
}

/**
Convert Unicode characters to Latin characters using [transliteration](https://en.wikipedia.org/wiki/Transliteration).

@param string - String to transliterate.

@example
```
import transliterate = require('@sindresorhus/transliterate');

transliterate('Fußgängerübergänge');
//=> 'Fussgaengeruebergaenge'

transliterate('Я люблю единорогов');
//=> 'Ya lyublyu edinorogov'

transliterate('أنا أحب حيدات');
//=> 'ana ahb hydat'

transliterate('tôi yêu những chú kỳ lân');
//=> 'toi yeu nhung chu ky lan'
```
*/
declare function transliterate(
	string: string,
	options?: transliterate.Options
): string;

export = transliterate;
