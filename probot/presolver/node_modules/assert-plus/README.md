# assert-plus

This library is a super small wrapper over node's assert module that has two
things: (1) the ability to disable assertions with the environment variable
NODE\_NDEBUG, and (2) some API wrappers for argument testing.  Like
`assert.string(myArg, 'myArg')`.  As a simple example, most of my code looks
like this:

```javascript
    var assert = require('assert-plus');

    function fooAccount(options, callback) {
        assert.object(options, 'options');
        assert.number(options.id, 'options.id');
        assert.bool(options.isManager, 'options.isManager');
        assert.string(options.name, 'options.name');
        assert.arrayOfString(options.email, 'options.email');
        assert.func(callback, 'callback');

        // Do stuff
        callback(null, {});
    }
```

# API

All methods that *aren't* part of node's core assert API are simply assumed to
take an argument, and then a string 'name' that's not a message; `AssertionError`
will be thrown if the assertion fails with a message like:

    AssertionError: foo (string) is required
    at test (/home/mark/work/foo/foo.js:3:9)
    at Object.<anonymous> (/home/mark/work/foo/foo.js:15:1)
    at Module._compile (module.js:446:26)
    at Object..js (module.js:464:10)
    at Module.load (module.js:353:31)
    at Function._load (module.js:311:12)
    at Array.0 (module.js:484:10)
    at EventEmitter._tickCallback (node.js:190:38)

from:

```javascript
    function test(foo) {
        assert.string(foo, 'foo');
    }
```

There you go.  You can check that arrays are of a homogeneous type with `Arrayof$Type`:

```javascript
    function test(foo) {
        assert.arrayOfString(foo, 'foo');
    }
```

You can assert IFF an argument is not `undefined` (i.e., an optional arg):

```javascript
    assert.optionalString(foo, 'foo');
```

Lastly, you can opt-out of assertion checking altogether by setting the
environment variable `NODE_NDEBUG=1`.  This is pseudo-useful if you have
lots of assertions, and don't want to pay `typeof ()` taxes to v8 in
production.  Be advised:  The standard functions re-exported from `assert` are
also disabled in assert-plus if NDEBUG is specified.  Using them directly from
the `assert` module avoids this behavior.

The complete list of APIs is:

* assert.array
* assert.bool
* assert.buffer
* assert.func
* assert.number
* assert.finite
* assert.object
* assert.string
* assert.stream
* assert.date
* assert.regexp
* assert.uuid
* assert.arrayOfArray
* assert.arrayOfBool
* assert.arrayOfBuffer
* assert.arrayOfFunc
* assert.arrayOfNumber
* assert.arrayOfFinite
* assert.arrayOfObject
* assert.arrayOfString
* assert.arrayOfStream
* assert.arrayOfDate
* assert.arrayOfRegexp
* assert.arrayOfUuid
* assert.optionalArray
* assert.optionalBool
* assert.optionalBuffer
* assert.optionalFunc
* assert.optionalNumber
* assert.optionalFinite
* assert.optionalObject
* assert.optionalString
* assert.optionalStream
* assert.optionalDate
* assert.optionalRegexp
* assert.optionalUuid
* assert.optionalArrayOfArray
* assert.optionalArrayOfBool
* assert.optionalArrayOfBuffer
* assert.optionalArrayOfFunc
* assert.optionalArrayOfNumber
* assert.optionalArrayOfFinite
* assert.optionalArrayOfObject
* assert.optionalArrayOfString
* assert.optionalArrayOfStream
* assert.optionalArrayOfDate
* assert.optionalArrayOfRegexp
* assert.optionalArrayOfUuid
* assert.AssertionError
* assert.fail
* assert.ok
* assert.equal
* assert.notEqual
* assert.deepEqual
* assert.notDeepEqual
* assert.strictEqual
* assert.notStrictEqual
* assert.throws
* assert.doesNotThrow
* assert.ifError

# Installation

    npm install assert-plus

## License

The MIT License (MIT)
Copyright (c) 2012 Mark Cavage

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Bugs

See <https://github.com/mcavage/node-assert-plus/issues>.
