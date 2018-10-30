deep-is
==========

Node's `assert.deepEqual() algorithm` as a standalone module. Exactly like
[deep-equal](https://github.com/substack/node-deep-equal) except for the fact that `deepEqual(NaN, NaN) === true`.

This module is around [5 times faster](https://gist.github.com/2790507)
than wrapping `assert.deepEqual()` in a `try/catch`.

[![browser support](http://ci.testling.com/thlorenz/deep-is.png)](http://ci.testling.com/thlorenz/deep-is)

[![build status](https://secure.travis-ci.org/thlorenz/deep-is.png)](http://travis-ci.org/thlorenz/deep-is)

example
=======

``` js
var equal = require('deep-is');
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

methods
=======

var deepIs = require('deep-is')

deepIs(a, b)
---------------

Compare objects `a` and `b`, returning whether they are equal according to a
recursive equality algorithm.

install
=======

With [npm](http://npmjs.org) do:

```
npm install deep-is
```

test
====

With [npm](http://npmjs.org) do:

```
npm test
```

license
=======

Copyright (c) 2012, 2013 Thorsten Lorenz <thlorenz@gmx.de>
Copyright (c) 2012 James Halliday <mail@substack.net>

Derived largely from node's assert module, which has the copyright statement:

Copyright (c) 2009 Thomas Robinson <280north.com>

Released under the MIT license, see LICENSE for details.
