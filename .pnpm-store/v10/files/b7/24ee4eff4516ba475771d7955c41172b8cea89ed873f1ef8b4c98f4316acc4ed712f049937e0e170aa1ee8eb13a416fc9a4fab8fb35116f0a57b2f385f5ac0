## Stable

A stable array sort, because `Array#sort()` is not guaranteed stable.

MIT licensed.

[![Node.js CI](https://secure.travis-ci.org/Two-Screen/stable.png)](http://travis-ci.org/Two-Screen/stable)

[![Browser CI](http://ci.testling.com/Two-Screen/stable.png)](http://ci.testling.com/Two-Screen/stable)

#### From npm

Install with:

```sh
npm install stable
```

Then use it in Node.js or some other CommonJS environment as:

```js
const stable = require('stable')
```

#### From the browser

Include [`stable.js`] or the minified version [`stable.min.js`]
in your page, then call `stable()`.

 [`stable.js`]: https://raw.github.com/Two-Screen/stable/master/stable.js
 [`stable.min.js`]: https://raw.github.com/Two-Screen/stable/master/stable.min.js

#### Usage

The default sort is, as with `Array#sort`, lexicographical:

```js
stable(['foo', 'bar', 'baz'])  // => ['bar', 'baz', 'foo']
stable([10, 1, 5])             // => [1, 10, 5]
```

Unlike `Array#sort`, the default sort is **NOT** in-place. To do an in-place
sort, use `stable.inplace`, which otherwise works the same:

```js
const arr = [10, 1, 5]
stable(arr) === arr          // => false
stable.inplace(arr) === arr  // => true
```

A comparator function can be specified:

```js
// Regular sort() compatible comparator, that returns a number.
// This demonstrates the default behavior.
const lexCmp = (a, b) => String(a).localeCompare(b)
stable(['foo', 'bar', 'baz'], lexCmp)  // => ['bar', 'baz', 'foo']

// Boolean comparator. Sorts `b` before `a` if true.
// This demonstrates a simple way to sort numerically.
const greaterThan = (a, b) => a > b
stable([10, 1, 5], greaterThan)  // => [1, 5, 10]
```

#### License

Copyright (C) 2018 Angry Bytes and contributors.

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
