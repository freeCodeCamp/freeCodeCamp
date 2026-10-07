Browser-friendly inheritance fully compatible with standard node.js
[inherits](http://nodejs.org/api/util.html#util_util_inherits_constructor_superconstructor).

This package exports standard `inherits` from node.js `util` module in
node environment, but also provides alternative browser-friendly
implementation through [browser
field](https://gist.github.com/shtylman/4339901). Alternative
implementation is a literal copy of standard one located in standalone
module to avoid requiring of `util`. It also has a shim for old
browsers with no `Object.create` support.

While keeping you sure you are using standard `inherits`
implementation in node.js environment, it allows bundlers such as
[browserify](https://github.com/substack/node-browserify) to not
include full `util` package to your client code if all you need is
just `inherits` function. It worth, because browser shim for `util`
package is large and `inherits` is often the single function you need
from it.

It's recommended to use this package instead of
`require('util').inherits` for any code that has chances to be used
not only in node.js but in browser too.

## usage

```js
var inherits = require('inherits');
// then use exactly as the standard one
```

## note on version ~1.0

Version ~1.0 had completely different motivation and is not compatible
neither with 2.0 nor with standard node.js `inherits`.

If you are using version ~1.0 and planning to switch to ~2.0, be
careful:

* new version uses `super_` instead of `super` for referencing
  superclass
* new version overwrites current prototype while old one preserves any
  existing fields on it
