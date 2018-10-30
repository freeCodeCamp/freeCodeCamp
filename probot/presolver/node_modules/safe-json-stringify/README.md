# Safe JSON Stringify
[![Build Status](https://travis-ci.org/debitoor/safe-json-stringify.svg?branch=master)](https://travis-ci.org/debitoor/safe-json-stringify)
[![NPM Version](https://img.shields.io/npm/v/safe-json-stringify.svg)](https://www.npmjs.com/package/safe-json-stringify)

A wrapper for `JSON.stringify` that handles circular references and prevents defined getters from throwing errors.

Circular references are handled by returning `[Circular]` when a circular reference is spotted.

Defined getters that throw errors are handled by returning `[Throws]`.

Usage
-----
Install it using NPM

```sh
npm install safe-json-stringify
```

And require it into your Node project.

```js
const safeJsonStringify = require('safe-json-stringify');
const data = {foo: 'bar'}

console.log(safeJsonStringify(data));
```

All the parameters of `JSON.stringify` are accepted, try e.g. the following for a nicely formatted output:

```js
console.log(safeJsonStringify(data, null, 2));
```

An `ensureProperties` function is exposed too, which returns a safe object without the stringify step. Usage: `safeJsonStringify.ensureProperties(data);`.


Why?
----
The `stringify` function on the JavaScript JSON object will take any data and return a string representation of said data. If this data contains an object literal it will attempt to return the values of any enumerable property set on this object. This can be dangerous because JavaScript supports a couple of ways to define property getters on objects.

The old, non-standard, and now deprecated `Object.prototype.__defineGetter__()` will define a named property which value is the return of a given function.

```js
// Never ever do this in your code. Please.
var obj = {};
obj.__defineGetter__('foo', function() { return 'bar'; });

JSON.stringify(obj); // {"foo":"bar"}
```

This is kinda bad because we could make that function throw an error.

```js
// Never ever do this in your code. Please.
var obj = {};
obj.__defineGetter__('foo', function() { throw new Error('ouch!'); });

JSON.stringify(obj); // error thrown
```

This property is created as an enumerable on the object, so the object from the previous example would make any function that iterates choke and throw an error. This is bad because one would never expect a simple property get to throw an error and bring down a system.

`JSON.stringify` will blindly trust any object property, and will throw an error if it hits a defined property that throws an error. This could potentially take down your program.

The slightly better `Object.defineProperty()` does the same thing, but has the common courtesy to not define the getter as enumerable--that is per default. The following example would bring us in the same situation as with `__defineGetter__`.

```js
// Never ever do this in your code. Please.
var obj = {};
Object.defineProperty(obj, 'foo', {
    get: function() { throw new Error('ouch!'); },
        enumerable: true // enumerable is false by default
});

JSON.stringify(obj); // error thrown
```

So, we can not trust any of them. One could argue that they should never be used, and we can, and should, apply that principle to our own software, but we cannot trust code from third-party modules. If data from third-party modules are to be stringified by JSON we should take these situations into considerations. This module attempt to do that by spotting defined getters and return "[Throws]" if said getter throws an error.

```js
var safeJsonStringify = require('safe-json-stringify');
// Never ever do this in your code. Please.
var obj = {};
Object.defineProperty(obj, 'foo', {
    get: function() { throw new Error('ouch!'); },
        enumerable: true
});

safeJsonStringify(obj); // '{"foo":"[Throws]"}'
```

And it attempts to handle circular references too. It returns "[Circular]" if it spots one.


License
-------
The MIT License (MIT)

Copyright (c) 2014-2017 [Debitoor](https://debitoor.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
