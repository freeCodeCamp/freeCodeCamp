# buffer-equal-constant-time

Constant-time `Buffer` comparison for node.js.  Should work with browserify too.

[![Build Status](https://travis-ci.org/goinstant/buffer-equal-constant-time.png?branch=master)](https://travis-ci.org/goinstant/buffer-equal-constant-time)

```sh
  npm install buffer-equal-constant-time
```

# Usage

```js
  var bufferEq = require('buffer-equal-constant-time');

  var a = new Buffer('asdf');
  var b = new Buffer('asdf');
  if (bufferEq(a,b)) {
    // the same!
  } else {
    // different in at least one byte!
  }
```

If you'd like to install an `.equal()` method onto the node.js `Buffer` and
`SlowBuffer` prototypes:

```js
  require('buffer-equal-constant-time').install();

  var a = new Buffer('asdf');
  var b = new Buffer('asdf');
  if (a.equal(b)) {
    // the same!
  } else {
    // different in at least one byte!
  }
```

To get rid of the installed `.equal()` method, call `.restore()`:

```js
  require('buffer-equal-constant-time').restore();
```

# Legal

&copy; 2013 GoInstant Inc., a salesforce.com company

Licensed under the BSD 3-clause license.
