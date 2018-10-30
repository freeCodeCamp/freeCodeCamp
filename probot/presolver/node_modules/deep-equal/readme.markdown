# deep-equal

Node's `assert.deepEqual() algorithm` as a standalone module.

This module is around [5 times faster](https://gist.github.com/2790507)
than wrapping `assert.deepEqual()` in a `try/catch`.

[![browser support](https://ci.testling.com/substack/node-deep-equal.png)](https://ci.testling.com/substack/node-deep-equal)

[![build status](https://secure.travis-ci.org/substack/node-deep-equal.png)](https://travis-ci.org/substack/node-deep-equal)

# example

``` js
var equal = require('deep-equal');
console.dir([
    equal(
        { a : [ 2, 3 ], b : [ 4 ] },
        { a : [ 2, 3 ], b : [ 4 ] }
    ),
    equal(
        { x : 5, y : [6] },
        { x : 5, y : 6 }
    )
]);
```

# methods

``` js
var deepEqual = require('deep-equal')
```

## deepEqual(a, b, opts)

Compare objects `a` and `b`, returning whether they are equal according to a
recursive equality algorithm.

If `opts.strict` is `true`, use strict equality (`===`) to compare leaf nodes.
The default is to use coercive equality (`==`) because that's how
`assert.deepEqual()` works by default.

# install

With [npm](http://npmjs.org) do:

```
npm install deep-equal
```

# test

With [npm](http://npmjs.org) do:

```
npm test
```

# license

MIT. Derived largely from node's assert module.
