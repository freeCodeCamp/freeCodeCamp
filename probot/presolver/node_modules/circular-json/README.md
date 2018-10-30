CircularJSON
============

![Downloads](https://img.shields.io/npm/dm/circular-json.svg) [![Build Status](https://travis-ci.org/WebReflection/circular-json.svg?branch=master)](https://travis-ci.org/WebReflection/circular-json) [![Coverage Status](https://coveralls.io/repos/github/WebReflection/circular-json/badge.svg?branch=master)](https://coveralls.io/github/WebReflection/circular-json?branch=master) [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/WebReflection/donate)

Serializes and deserializes otherwise valid JSON objects containing circular references into and from a specialized JSON format.

- - -

### A Working Solution To A Common Problem
A usage example:

```JavaScript
var object = {};
object.arr = [
  object, object
];
object.arr.push(object.arr);
object.obj = object;

var serialized = CircularJSON.stringify(object);
// '{"arr":["~","~","~arr"],"obj":"~"}'
// NOTE: CircularJSON DOES NOT parse JS
// it handles receiver and reviver callbacks

var unserialized = CircularJSON.parse(serialized);
// { arr: [ [Circular], [Circular] ],
// obj: [Circular] }

unserialized.obj === unserialized;
unserialized.arr[0] === unserialized;
unserialized.arr.pop() === unserialized.arr;
```

A quick summary:

  * uses `~` as a special prefix symbol to denote which parent the reference belongs to (i.e. `~root~child1~child2`)
  * reasonably fast in both serialization and deserialization
  * compact serialization for easier and slimmer transportation across environments
  * [tested and covered](test/circular-json.js) over nasty structures too
  * compatible with all JavaScript engines
  
Node Installation & Usage
============

```bash
npm install --save circular-json
```

```javascript
'use strict';

var
  CircularJSON = require('circular-json'),
  obj = { foo: 'bar' },
  str
;
  
obj.self = obj;
str = CircularJSON.stringify(obj);
```

There are no dependencies.

Browser Installation & Usage
================

* Global: <build/circular-json.js>
* AMD: <build/circular-json.amd.js>
* CommonJS: <build/circular-json.node.js>

(generated via [gitstrap](https://github.com/WebReflection/gitstrap))

```html
<script src="build/circular-json.js"></script>
```

```javascript
'use strict';

var CircularJSON = window.CircularJSON
  , obj = { foo: 'bar' }
  , str
  ;
  
obj.self = obj;
str = CircularJSON.stringify(obj);
```

NOTE: Platforms without native JSON (i.e. MSIE <= 8) requires `json3.js` or similar.

It is also *a bad idea* to `CircularJSON.parse(JSON.stringify(object))` because of those manipulation used in `CircularJSON.stringify()` able to make parsing safe and secure.

As summary: `CircularJSON.parse(CircularJSON.stringify(object))` is the way to go, same is for `JSON.parse(JSON.stringify(object))`.

API
===

It's the same as native JSON, except the fourth parameter `placeholder`, which circular references to be replaced with `"[Circular]"` (i.e. for logging).

* CircularJSON.stringify(object, replacer, spacer, placeholder)
* CircularJSON.parse(string, reviver)

Bear in mind `JSON.parse(CircularJSON.stringify(object))` will work but not produce the expected output.

Similar Libraries
=======

### Why Not the [@izs](https://twitter.com/izs) One
The module [json-stringify-safe](https://github.com/isaacs/json-stringify-safe) seems to be for `console.log()`  but it's completely pointless for `JSON.parse()`, being latter one unable to retrieve back the initial structure. Here an example:

```JavaScript
// a logged object with circular references
{
  "circularRef": "[Circular]",
  "list": [
    "[Circular]",
    "[Circular]"
  ]
}
// what do we do with above output ?
```

Just type this in your `node` console: `var o = {}; o.a = o; console.log(o);`. The output will be `{ a: [Circular] }` ... good, but that ain't really solving the problem.

However, if that's all you need, the function used to create that kind of output is probably faster than `CircularJSON` and surely fits in less lines of code.


### Why Not {{put random name}} Solution
So here the thing: circular references can be wrong but, if there is a need for them, any attempt to ignore them or remove them can be considered just a failure.

Not because the method is bad or it's not working, simply because the circular info, the one we needed and used in the first place, is lost!

In this case, `CircularJSON` does even more than just solve circular and recursions: it maps all same objects so that less memory is used as well on deserialization as less bandwidth too!
It's able to redefine those references back later on so the way we store is the way we retrieve and in a reasonably performant way, also trusting the snappy and native `JSON` methods to iterate.
