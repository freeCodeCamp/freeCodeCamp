# clone

[![build status](https://secure.travis-ci.org/pvorb/node-clone.png)](http://travis-ci.org/pvorb/node-clone)

[![info badge](https://nodei.co/npm/clone.png?downloads=true&downloadRank=true&stars=true)](http://npm-stat.com/charts.html?package=clone)

offers foolproof _deep cloning_ of objects, arrays, numbers, strings etc. in JavaScript.


## Installation

    npm install clone

(It also works with browserify, ender or standalone.)


## Example

~~~ javascript
var clone = require('clone');

var a, b;

a = { foo: { bar: 'baz' } };  // initial value of a

b = clone(a);                 // clone a -> b
a.foo.bar = 'foo';            // change a

console.log(a);               // show a
console.log(b);               // show b
~~~

This will print:

~~~ javascript
{ foo: { bar: 'foo' } }
{ foo: { bar: 'baz' } }
~~~

**clone** masters cloning simple objects (even with custom prototype), arrays,
Date objects, and RegExp objects. Everything is cloned recursively, so that you
can clone dates in arrays in objects, for example.


## API

`clone(val, circular, depth)`

  * `val` -- the value that you want to clone, any type allowed
  * `circular` -- boolean

    Call `clone` with `circular` set to `false` if you are certain that `obj`
    contains no circular references. This will give better performance if needed.
    There is no error if `undefined` or `null` is passed as `obj`.
  * `depth` -- depth to which the object is to be cloned (optional,
    defaults to infinity)

`clone.clonePrototype(obj)`

  * `obj` -- the object that you want to clone

Does a prototype clone as
[described by Oran Looney](http://oranlooney.com/functional-javascript/).


## Circular References

~~~ javascript
var a, b;

a = { hello: 'world' };

a.myself = a;
b = clone(a);

console.log(b);
~~~

This will print:

~~~ javascript
{ hello: "world", myself: [Circular] }
~~~

So, `b.myself` points to `b`, not `a`. Neat!


## Test

    npm test


## Caveat

Some special objects like a socket or `process.stdout`/`stderr` are known to not
be cloneable. If you find other objects that cannot be cloned, please [open an
issue](https://github.com/pvorb/node-clone/issues/new).


## Bugs and Issues

If you encounter any bugs or issues, feel free to [open an issue at
github](https://github.com/pvorb/node-clone/issues) or send me an email to
<paul@vorba.ch>. I also always like to hear from you, if you’re using my code.

## License

Copyright © 2011-2015 [Paul Vorbach](http://paul.vorba.ch/) and
[contributors](https://github.com/pvorb/node-clone/graphs/contributors).

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the “Software”), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
