> **NOTE:** ⚠️ **Don't use this package in new projects.** It is a **huge anti-pattern** and will only confuse and annoy people who use whatever code you write with it. I wrote this in a time when Javascript and Node.js were still pretty experimental and clever things like this weren't frowned upon. I've also learned a LOT about proper API design since I wrote this package. DO. NOT. USE. THIS. PACKAGE. If you're reaching for it, please *really* reconsider your API's design.

---

# simple-swizzle [![Travis-CI.org Build Status](https://img.shields.io/travis/Qix-/node-simple-swizzle.svg?style=flat-square)](https://travis-ci.org/Qix-/node-simple-swizzle) [![Coveralls.io Coverage Rating](https://img.shields.io/coveralls/Qix-/node-simple-swizzle.svg?style=flat-square)](https://coveralls.io/r/Qix-/node-simple-swizzle)

> [Swizzle](https://en.wikipedia.org/wiki/Swizzling_(computer_graphics)) your function arguments; pass in mixed arrays/values and get a clean array

## Usage

```js
var swizzle = require('simple-swizzle');

function myFunc() {
	var args = swizzle(arguments);
	// ...
	return args;
}

myFunc(1, [2, 3], 4); // [1, 2, 3, 4]
myFunc(1, 2, 3, 4);   // [1, 2, 3, 4]
myFunc([1, 2, 3, 4]); // [1, 2, 3, 4]
```

Functions can also be wrapped to automatically swizzle arguments and be passed
the resulting array.

```js
var swizzle = require('simple-swizzle');

var swizzledFn = swizzle.wrap(function (args) {
	// ...
	return args;
});

swizzledFn(1, [2, 3], 4); // [1, 2, 3, 4]
swizzledFn(1, 2, 3, 4);   // [1, 2, 3, 4]
swizzledFn([1, 2, 3, 4]); // [1, 2, 3, 4]
```

## License
Licensed under the [MIT License](http://opensource.org/licenses/MIT).
You can find a copy of it in [LICENSE](LICENSE).
