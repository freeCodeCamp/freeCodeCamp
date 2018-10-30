iMurmurHash.js
==============

An incremental implementation of the MurmurHash3 (32-bit) hashing algorithm for JavaScript based on [Gary Court's implementation](https://github.com/garycourt/murmurhash-js) with [kazuyukitanimura's modifications](https://github.com/kazuyukitanimura/murmurhash-js).

This version works significantly faster than the non-incremental version if you need to hash many small strings into a single hash, since string concatenation (to build the single string to pass the non-incremental version) is fairly costly. In one case tested, using the incremental version was about 50% faster than concatenating 5-10 strings and then hashing.

Installation
------------

To use iMurmurHash in the browser, [download the latest version](https://raw.github.com/jensyt/imurmurhash-js/master/imurmurhash.min.js) and include it as a script on your site.

```html
<script type="text/javascript" src="/scripts/imurmurhash.min.js"></script>
<script>
// Your code here, access iMurmurHash using the global object MurmurHash3
</script>
```

---

To use iMurmurHash in Node.js, install the module using NPM:

```bash
npm install imurmurhash
```

Then simply include it in your scripts:

```javascript
MurmurHash3 = require('imurmurhash');
```

Quick Example
-------------

```javascript
// Create the initial hash
var hashState = MurmurHash3('string');

// Incrementally add text
hashState.hash('more strings');
hashState.hash('even more strings');

// All calls can be chained if desired
hashState.hash('and').hash('some').hash('more');

// Get a result
hashState.result();
// returns 0xe4ccfe6b
```

Functions
---------

### MurmurHash3 ([string], [seed])
Get a hash state object, optionally initialized with the given _string_ and _seed_. _Seed_ must be a positive integer if provided. Calling this function without the `new` keyword will return a cached state object that has been reset. This is safe to use as long as the object is only used from a single thread and no other hashes are created while operating on this one. If this constraint cannot be met, you can use `new` to create a new state object. For example:

```javascript
// Use the cached object, calling the function again will return the same
// object (but reset, so the current state would be lost)
hashState = MurmurHash3();
...

// Create a new object that can be safely used however you wish. Calling the
// function again will simply return a new state object, and no state loss
// will occur, at the cost of creating more objects.
hashState = new MurmurHash3();
```

Both methods can be mixed however you like if you have different use cases.

---

### MurmurHash3.prototype.hash (string)
Incrementally add _string_ to the hash. This can be called as many times as you want for the hash state object, including after a call to `result()`. Returns `this` so calls can be chained.

---

### MurmurHash3.prototype.result ()
Get the result of the hash as a 32-bit positive integer. This performs the tail and finalizer portions of the algorithm, but does not store the result in the state object. This means that it is perfectly safe to get results and then continue adding strings via `hash`.

```javascript
// Do the whole string at once
MurmurHash3('this is a test string').result();
// 0x70529328

// Do part of the string, get a result, then the other part
var m = MurmurHash3('this is a');
m.result();
// 0xbfc4f834
m.hash(' test string').result();
// 0x70529328 (same as above)
```

---

### MurmurHash3.prototype.reset ([seed])
Reset the state object for reuse, optionally using the given _seed_ (defaults to 0 like the constructor). Returns `this` so calls can be chained.

---

License (MIT)
-------------
Copyright (c) 2013 Gary Court, Jens Taylor

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
