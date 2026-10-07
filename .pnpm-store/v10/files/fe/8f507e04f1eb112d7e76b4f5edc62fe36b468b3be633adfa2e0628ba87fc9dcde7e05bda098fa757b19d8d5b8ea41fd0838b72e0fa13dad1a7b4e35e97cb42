# D

## Property descriptor factory

_Originally derived from [es5-ext](https://github.com/medikoo/es5-ext) package._

Defining properties with descriptors is very verbose:

```javascript
var Account = function () {};
Object.defineProperties(Account.prototype, {
  deposit: {
    value: function () {
      /* ... */
    },
    configurable: true,
    enumerable: false,
    writable: true
  },
  withdraw: {
    value: function () {
      /* ... */
    },
    configurable: true,
    enumerable: false,
    writable: true
  },
  balance: {
    get: function () {
      /* ... */
    },
    configurable: true,
    enumerable: false
  }
});
```

D cuts that to:

```javascript
var d = require("d");

var Account = function () {};
Object.defineProperties(Account.prototype, {
  deposit: d(function () {
    /* ... */
  }),
  withdraw: d(function () {
    /* ... */
  }),
  balance: d.gs(function () {
    /* ... */
  })
});
```

By default, created descriptor follow characteristics of native ES5 properties, and defines values as:

```javascript
{ configurable: true, enumerable: false, writable: true }
```

You can overwrite it by preceding _value_ argument with instruction:

```javascript
d("c", value); // { configurable: true, enumerable: false, writable: false }
d("ce", value); // { configurable: true, enumerable: true, writable: false }
d("e", value); // { configurable: false, enumerable: true, writable: false }

// Same way for get/set:
d.gs("e", value); // { configurable: false, enumerable: true }
```

### Installation

    $ npm install d

To port it to Browser or any other (non CJS) environment, use your favorite CJS bundler. No favorite yet? Try: [Browserify](http://browserify.org/), [Webmake](https://github.com/medikoo/modules-webmake) or [Webpack](http://webpack.github.io/)

### Other utilities

#### autoBind(obj, props) _(d/auto-bind)_

Define methods which will be automatically bound to its instances

```javascript
var d = require('d');
var autoBind = require('d/auto-bind');

var Foo = function () { this._count = 0; };
Object.defineProperties(Foo.prototype, autoBind({
  increment: d(function () { ++this._count; });
}));

var foo = new Foo();

// Increment foo counter on each domEl click
domEl.addEventListener('click', foo.increment, false);
```

#### lazy(obj, props) _(d/lazy)_

Define lazy properties, which will be resolved on first access

```javascript
var d = require("d");
var lazy = require("d/lazy");

var Foo = function () {};
Object.defineProperties(Foo.prototype, lazy({ items: d(function () { return []; }) }));

var foo = new Foo();
foo.items.push(1, 2); // foo.items array created and defined directly on foo
```

## Tests [![Build Status](https://travis-ci.org/medikoo/d.png)](https://travis-ci.org/medikoo/d)

    $ npm test

## Security contact information

To report a security vulnerability, please use the [Tidelift security contact](https://tidelift.com/security). Tidelift will coordinate the fix and disclosure.

---

<div align="center">
	<b>
		<a href="https://tidelift.com/subscription/pkg/npm-d?utm_source=npm-d&utm_medium=referral&utm_campaign=readme">Get professional support for d with a Tidelift subscription</a>
	</b>
	<br>
	<sub>
		Tidelift helps make open source sustainable for maintainers while giving companies<br>assurances about security, maintenance, and licensing for their dependencies.
	</sub>
</div>
