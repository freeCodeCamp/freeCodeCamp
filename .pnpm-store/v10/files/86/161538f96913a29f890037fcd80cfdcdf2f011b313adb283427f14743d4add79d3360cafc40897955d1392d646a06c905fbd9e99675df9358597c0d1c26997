[![*nix build status][nix-build-image]][nix-build-url]
[![Windows build status][win-build-image]][win-build-url]
![Transpilation status][transpilation-image]
[![npm version][npm-image]][npm-url]

# Memoizee

## Complete memoize/cache solution for JavaScript

_Originally derived from [es5-ext](https://github.com/medikoo/es5-ext) package._

Memoization is best technique to save on memory or CPU cycles when we deal with repeated operations. For detailed insight see: http://en.wikipedia.org/wiki/Memoization

### Features

*   Works with any type of function arguments – **no serialization is needed**
*   Works with [**any length of function arguments**](#arguments-length). Length can be set as fixed or dynamic.
*   One of the [**fastest**](#benchmarks) available solutions.
*   Support for [**promises**](#promise-returning-functions) and [**asynchronous functions**](#nodejs-callback-style-functions)
*   [**Primitive mode**](#primitive-mode) which assures fast performance when arguments are convertible to strings.
*   [**WeakMap based mode**](#weakmap-based-configurations) for garbage collection friendly configuration
*   Can be configured [**for methods**](#memoizing-methods) (when `this` counts in)
*   Cache [**can be cleared manually**](#manual-clean-up) or [**after specified timeout**](#expire-cache-after-given-period-of-time)
*   Cache size can be **[limited on LRU basis](#limiting-cache-size)**
*   Optionally [**accepts resolvers**](#argument-resolvers) that normalize function arguments before passing them to underlying function.
*   Optional [**reference counter mode**](#reference-counter), that allows more sophisticated cache management
*   [**Profile tool**](#profiling--statistics) that provides valuable usage statistics
*   Covered by [**over 500 unit tests**](#tests)

### Installation

In your project path — **note the two `e`'s in `memoizee`:**

    $ npm install memoizee

_`memoize` name was already taken, therefore project is published as `memoizee` on NPM._

To port it to Browser or any other (non CJS) environment, use your favorite CJS bundler. No favorite yet? Try: [Browserify](http://browserify.org/), [Webmake](https://github.com/medikoo/modules-webmake) or [Webpack](http://webpack.github.io/)

### Usage

```javascript
var memoize = require("memoizee");

var fn = function(one, two, three) {
	/* ... */
};

memoized = memoize(fn);

memoized("foo", 3, "bar");
memoized("foo", 3, "bar"); // Cache hit
```

__Note__: Invocations that throw exceptions are not cached.

### Configuration

All below options can be applied in any combination

#### Arguments length

By default fixed number of arguments that function take is assumed (it's read from function's `length` property) this can be overridden:

```javascript
memoized = memoize(fn, { length: 2 });

memoized("foo"); // Assumed: 'foo', undefined
memoized("foo", undefined); // Cache hit

memoized("foo", 3, {}); // Third argument is ignored (but passed to underlying function)
memoized("foo", 3, 13); // Cache hit
```

__Note:__ [Parameters predefined with default values (ES2015+ feature)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters) are not reflected in function's `length`, therefore if you want to memoize them as well, you need to tweak `length` setting accordingly

Dynamic _length_ behavior can be forced by setting _length_ to `false`, that means memoize will work with any number of arguments.

```javascript
memoized = memoize(fn, { length: false });

memoized("foo");
memoized("foo"); // Cache hit
memoized("foo", undefined);
memoized("foo", undefined); // Cache hit

memoized("foo", 3, {});
memoized("foo", 3, 13);
memoized("foo", 3, 13); // Cache hit
```

#### Primitive mode

If we work with large result sets, or memoize hot functions, default mode may not perform as fast as we expect. In that case it's good to run memoization in _primitive_ mode. To provide fast access, results are saved in hash instead of an array. Generated hash ids are result of arguments to string conversion. **Mind that this mode will work correctly only if stringified arguments produce unique strings.**

```javascript
memoized = memoize(fn, { primitive: true });

memoized("/path/one");
memoized("/path/one"); // Cache hit
```

#### Cache id resolution (normalization)

By default cache id for given call is resolved either by:

*   Direct Comparison of values passed in arguments as they are. In such case two different objects, even if their characteristics is exactly same (e.g. `var a = { foo: 'bar' }, b = { foo: 'bar' }`) will be treated as two different values.
*   Comparison of stringified values of given arguments (`primitive` mode), which serves well, when arguments are expected to be primitive values, or objects that stringify naturally do unique values (e.g. arrays)

Still above two methods do not serve all cases, e.g. if we want to memoize function where arguments are hash objects which we do not want to compare by instance but by its content.

##### Writing custom cache id normalizers

There's a `normalizer` option through which we can pass custom cache id normalization function  
e.g. if we want to memoize a function where argument is a hash object which we do not want to compare by instance but by its content, then we can achieve it as following:

```javascript
var mfn = memoize(
	function(hash) {
		// body of memoized function
	},
	{
		normalizer: function(args) {
			// args is arguments object as accessible in memoized function
			return JSON.stringify(args[0]);
		}
	}
);

mfn({ foo: "bar" });
mfn({ foo: "bar" }); // Cache hit
```

#### Argument resolvers

When we're expecting arguments of certain type it's good to coerce them before doing memoization. We can do that by passing additional resolvers array:

```javascript
memoized = memoize(fn, { length: 2, resolvers: [String, Boolean] });

memoized(12, [1, 2, 3].length);
memoized("12", true); // Cache hit
memoized(
	{
		toString: function() {
			return "12";
		}
	},
	{}
); // Cache hit
```

**Note. If your arguments are collections (arrays or hashes) that you want to memoize by content (not by self objects), you need to cast them to strings**, for it's best to just use [primitive mode](#primitive-mode). Arrays have standard string representation and work with primitive mode out of a box, for hashes you need to define `toString` method, that will produce unique string descriptions, or rely on `JSON.stringify`.

Similarly **if you want to memoize functions by their code representation not by their objects, you should use primitive mode**.

#### Memoizing asynchronous functions

##### Promise returning functions

With _promise_ option we indicate that we memoize a function that returns promise.

The difference from natural behavior is that in case when promise was rejected with exception,
the result is immediately removed from memoize cache, and not kept as further reusable result.

```javascript
var afn = function(a, b) {
	return new Promise(function(res) {
		res(a + b);
	});
};
memoized = memoize(afn, { promise: true });

memoized(3, 7);
memoized(3, 7); // Cache hit
```

###### Important notice on internal promises handling

Default handling stands purely on _then_ which has side-effect of muting eventual unhandled rejection notifications.
Alternatively we can other (explained below), by stating with `promise` option desired mode:

```javascript
memoized = memoize(afn, { promise: "done:finally" });
```

Supported modes

*   `then` _(default)_. Values are resolved purely by passing callbacks to `promise.then`. **Side effect is that eventual unhandled rejection on given promise
    come with no logged warning!**, and that to avoid implied error swallowing both states are resolved tick after callbacks were invoked

*   `done` Values are resolved purely by passing callback to `done` method. **Side effect is that eventual unhandled rejection on given promise come with no logged warning!**.

*   `done:finally` The only method that may work with no side-effects assuming that promise implementaion does not throw unconditionally
    if no _onFailure_ callback was passed to `done`, and promise error was handled by other consumer (this is not commonly implemented _done_ behavior). Otherwise side-effect is that exception is thrown on promise rejection (highly not recommended)

##### Node.js callback style functions

With _async_ option we indicate that we memoize asynchronous (Node.js style) function
Operations that result with an error are not cached.

```javascript
afn = function(a, b, cb) {
	setTimeout(function() {
		cb(null, a + b);
	}, 200);
};
memoized = memoize(afn, { async: true });

memoized(3, 7, function(err, res) {
	memoized(3, 7, function(err, res) {
		// Cache hit
	});
});

memoized(3, 7, function(err, res) {
	// Cache hit
});
```

#### Memoizing methods

When we are defining a prototype, we may want to define a method that will memoize it's results in relation to each instance. A basic way to obtain that would be:

```javascript
var Foo = function() {
	this.bar = memoize(this.bar.bind(this), { someOption: true });
	// ... constructor logic
};
Foo.prototype.bar = function() {
	// ... method logic
};
```

There's a lazy methods descriptor generator provided:

```javascript
var d = require("d");
var memoizeMethods = require("memoizee/methods");

var Foo = function() {
	// ... constructor logic
};
Object.defineProperties(
	Foo.prototype,
	memoizeMethods({
		bar: d(
			function() {
				// ... method logic
			},
			{ someOption: true }
		)
	})
);
```

#### WeakMap based configurations

In this case memoization cache is not bound to memoized function (which we may want to keep forever), but to objects for which given results were generated.

This mode works only for functions of which first argument is expected to be an object.  
It can be combined with other options mentioned across documentation. However due to WeakMap specificity global clear is not possible.

```javascript
var memoize = require("memoizee/weak");

var memoized = memoize(function(obj) {
	return Object.keys(obj);
});

var obj = { foo: true, bar: false };
memoized(obj);
memoized(obj); // Cache hit
```

#### Cache handling

##### Manual clean up:

Delete data for particular call.

```javascript
memoized.delete("foo", true);
```

Arguments passed to `delete` are treated with same rules as input arguments passed to function

Clear all cached data:

```javascript
memoized.clear();
```

##### Expire cache after given period of time

With _maxAge_ option we can ensure that cache for given call is cleared after predefined period of time (in milliseconds)

```javascript
memoized = memoize(fn, { maxAge: 1000 }); // 1 second

memoized("foo", 3);
memoized("foo", 3); // Cache hit
setTimeout(function() {
	memoized("foo", 3); // No longer in cache, re-executed
	memoized("foo", 3); // Cache hit
}, 2000);
```

Additionally we may ask to _pre-fetch_ in a background a value that is about to expire. _Pre-fetch_ is invoked only if value is accessed close to its expiry date. By default it needs to be within at least 33% of _maxAge_ timespan before expire:

```javascript
memoized = memoize(fn, { maxAge: 1000, preFetch: true }); // Defaults to 0.33

memoized("foo", 3);
memoized("foo", 3); // Cache hit

setTimeout(function() {
	memoized("foo", 3); // Cache hit
}, 500);

setTimeout(function() {
	memoized("foo", 3); // Cache hit, silently pre-fetched in next tick
}, 800);

setTimeout(function() {
	memoized("foo", 3); // Cache hit
}, 1300);
```

_Pre-fetch_ timespan can be customized:

```javascript
memoized = memoize(fn, { maxAge: 1000, preFetch: 0.6 });

memoized("foo", 3);
memoized("foo", 3); // Cache hit

setTimeout(function() {
	memoized("foo", 3); // Cache hit, silently pre-fetched in next tick
}, 500);

setTimeout(function() {
	memoized("foo", 3); // Cache hit
}, 1300);
```

_Thanks [@puzrin](https://github.com/puzrin) for helpful suggestions concerning this functionality_

##### Reference counter

We can track number of references returned from cache, and manually delete them. When the last reference is cleared, the cache is purged automatically:

```javascript
memoized = memoize(fn, { refCounter: true });

memoized("foo", 3); // refs: 1
memoized("foo", 3); // Cache hit, refs: 2
memoized("foo", 3); // Cache hit, refs: 3
memoized.deleteRef("foo", 3); // refs: 2
memoized.deleteRef("foo", 3); // refs: 1
memoized.deleteRef("foo", 3); // refs: 0, Cache purged for 'foo', 3
memoized("foo", 3); // Re-executed, refs: 1
```

##### Limiting cache size

With _max_ option you can limit cache size, it's backed with [LRU algorithm](http://en.wikipedia.org/wiki/Cache_algorithms#Least_Recently_Used), provided by low-level [lru-queue](https://github.com/medikoo/lru-queue) utility.

The _size_ relates purely to count of results we want to keep in cache, it doesn't relate to memory cost associated with cache value (but such feature is likely to be introduced with next version of memoizee).

```javascript
memoized = memoize(fn, { max: 2 });

memoized("foo", 3);
memoized("bar", 7);
memoized("foo", 3); // Cache hit
memoized("bar", 7); // Cache hit
memoized("lorem", 11); // Cache cleared for 'foo', 3
memoized("bar", 7); // Cache hit
memoized("foo", 3); // Re-executed, Cache cleared for 'lorem', 11
memoized("lorem", 11); // Re-executed, Cache cleared for 'bar', 7
memoized("foo", 3); // Cache hit
memoized("bar", 7); // Re-executed, Cache cleared for 'lorem', 11
```

##### Registering dispose callback

You can register a callback to be called on each value removed from the cache:

```javascript
memoized = memoize(fn, {
	dispose: function(value) {
		/*…*/
	}
});

var foo3 = memoized("foo", 3);
var bar7 = memoized("bar", 7);
memoized.clear("foo", 3); // Dispose called with foo3 value
memoized.clear("bar", 7); // Dispose called with bar7 value
```

### Benchmarks

Simple benchmark tests can be found in _benchmark_ folder. Currently it's just plain simple calculation of fibonacci sequences. To run it you need to install other test candidates:

    $ npm install underscore lodash lru-cache secondary-cache

Example output taken under Node v0.10.35 on 2011 MBP Pro:

```
Fibonacci 3000 x10:

1:    15ms  Memoizee (primitive mode)
2:    15ms  Underscore
3:    18ms  lru-cache                 LRU (max: 1000)
4:    21ms  secondary-cache           LRU (max: 1000)
5:    37ms  Lo-dash
6:    62ms  Memoizee (primitive mode) LRU (max: 1000)
7:   163ms  Memoizee (object mode)    LRU (max: 1000)
8:   195ms  Memoizee (object mode)
```

### Profiling & Statistics

If you want to make sure how much you benefit from memoization or just check if memoization works as expected, loading profile module will give access to all valuable information.

**Module needs to be imported before any memoization (that we want to track) is configured. Mind also that running profile module affects performance, it's best not to use it in production environment**

```javascript
var memProfile = require('memoizee/profile');
...
...
memoize(fn);
...
memoize(fn, { profileName: 'Some Function' })
...
memoize(fn, { profileName: 'Another Function' })
```

Access statistics at any time:

```javascript
memProfile.statistics; // Statistics accessible for programmatic use
console.log(memProfile.log()); // Output statistics data in readable form
```

Example console output:

```
------------------------------------------------------------
Memoize statistics:

 Init  Cache  %Cache  Source location
11604  35682   75.46  (all)
 2112  19901   90.41  Some Function, at /Users/medikoo/Projects/_packages/next/lib/fs/is-ignored.js:276:12
 2108   9087   81.17  Another Function, at /Users/medikoo/Projects/_packages/next/lib/fs/is-ignored.js:293:10
 6687   2772   29.31  at /Users/medikoo/Projects/_packages/next/lib/fs/watch.js:125:9
  697   3922   84.91  at /Users/medikoo/Projects/_packages/next/lib/fs/is-ignored.js:277:15
------------------------------------------------------------
```

*   _Init_ – Initial hits
*   _Cache_ – Cache hits
*   _%Cache_ – What's the percentage of cache hits (of all function calls)
*   _Source location_ – Where in the source code given memoization was initialized

### Tests

    $ npm test

Project cross-browser compatibility to be supported by:

<a href="https://browserstack.com"><img src="https://bstacksupport.zendesk.com/attachments/token/Pj5uf2x5GU9BvWErqAr51Jh2R/?name=browserstack-logo-600x315.png" height="150" /></a>

## Security contact information

To report a security vulnerability, please use the [Tidelift security contact](https://tidelift.com/security). Tidelift will coordinate the fix and disclosure.

---

<div align="center">
	<b>
		<a href="https://tidelift.com/subscription/pkg/npm-memoizee?utm_source=npm-memoizee&utm_medium=referral&utm_campaign=readme">Get professional support for d with a Tidelift subscription</a>
	</b>
	<br>
	<sub>
		Tidelift helps make open source sustainable for maintainers while giving companies<br>assurances about security, maintenance, and licensing for their dependencies.
	</sub>
</div>

### Contributors

*   [@puzrin](https://github.com/puzrin) (Vitaly Puzrin)
    *   Proposal and help with coining right _pre-fetch_ logic for [_maxAge_](https://github.com/medikoo/memoize#expire-cache-after-given-period-of-time) variant

[nix-build-image]: https://semaphoreci.com/api/v1/medikoo-org/memoizee/branches/master/shields_badge.svg
[nix-build-url]: https://semaphoreci.com/medikoo-org/memoizee
[win-build-image]: https://ci.appveyor.com/api/projects/status/hsxubnbwe89c26bu?svg=true
[win-build-url]: https://ci.appveyor.com/project/medikoo/memoizee
[transpilation-image]: https://img.shields.io/badge/transpilation-free-brightgreen.svg
[npm-image]: https://img.shields.io/npm/v/memoizee.svg
[npm-url]: https://www.npmjs.com/package/memoizee
