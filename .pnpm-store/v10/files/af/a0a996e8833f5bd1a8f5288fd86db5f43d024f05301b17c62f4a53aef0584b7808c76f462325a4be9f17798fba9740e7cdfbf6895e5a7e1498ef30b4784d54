declare namespace autoBind {
	interface Options {
		/**
		Bind only the given methods.
		*/
		readonly include?: ReadonlyArray<string | RegExp>;

		/**
		Bind methods except for the given methods.
		*/
		readonly exclude?: ReadonlyArray<string | RegExp>;
	}
}

/**
Automatically bind methods to their class instance.

@param self - Object with methods to bind.

@example
```
import autoBind = require('auto-bind');

class Unicorn {
	constructor(name) {
		this.name = name;
		autoBind(this);
	}

	message() {
		return `${this.name} is awesome!`;
	}
}

const unicorn = new Unicorn('Rainbow');

// Grab the method off the class instance
const message = unicorn.message;

// Still bound to the class instance
message();
//=> 'Rainbow is awesome!'

// Without `autoBind(this)`, the above would have resulted in
message();
//=> Error: Cannot read property 'name' of undefined
```
*/
declare function autoBind<SelfType extends {[key: string]: any}>(
	self: SelfType,
	options?: autoBind.Options
): SelfType;

export = autoBind;
