[![NPM version](https://badge.fury.io/js/harmony-reflect.svg)](http://badge.fury.io/js/harmony-reflect) [![Dependencies](https://david-dm.org/tvcutsem/harmony-reflect.png)](https://david-dm.org/tvcutsem/harmony-reflect)

This is a shim for the ECMAScript 6 [Reflect](http://www.ecma-international.org/ecma-262/6.0/#sec-reflect-object) and [Proxy](http://www.ecma-international.org/ecma-262/6.0/#sec-proxy-objects) objects.

This library does two things:

  - It defines an ES6-compliant `Reflect` global object that exports the ECMAScript 6 reflection API.
  - If harmony-era (pre-ES6) `Proxy` support is available, it patches `Proxy` to be up-to-date with the [ES6 spec](http://www.ecma-international.org/ecma-262/6.0/).

**July 2016 update**: the most recent version of all major browsers and node.js now [support fully
ES6-compliant](http://kangax.github.io/compat-table/es6/#test-Proxy) `Reflect` and `Proxy` objects. This shim is primarily useful if you want ES6 `Reflect`
support on older browsers or versions of node.js < v6.0.0, or if you want
ES6 `Proxy` support on versions of node.js < v6.0.0.

**May 2016 update**: the recently released [V8 v4.9](http://v8project.blogspot.com.au/2016/01/v8-release-49.html) includes native support for ES2015 Proxies and Reflect, making this library obsolete for environments that embed V8 4.9 or newer (like Chrome 49 and Node v6.0). Node v5.10.x or lower still requires this polyfill for proper ES6 Proxy support.

Read [Why should I use this library?](https://github.com/tvcutsem/harmony-reflect/wiki)

Installation
============

For node.js, install via [npm](http://npmjs.org):

    npm install harmony-reflect

Then:

    node --harmony-proxies
    > var Reflect = require('harmony-reflect');

See [release notes](https://github.com/tvcutsem/harmony-reflect/blob/master/RELNOTES.md) for changes to the npm releases.

To use in a browser, just download the single reflect.js file. After loading

    <script src="reflect.js"></script>

a global object `Reflect` is defined that contains reflection methods as defined in the [ES6 spec](http://www.ecma-international.org/ecma-262/6.0/#sec-reflect-object).

This library also updates the "harmony-era" `Proxy` object in the V8 engine
(also used in node.js) to follow the latest [ECMAScript 2015](http://www.ecma-international.org/ecma-262/6.0/) spec.
To create such a proxy, call:

    var proxy = new Proxy(target, handler);

See below for a list of spec incompatibilities and other gotcha's.

API Docs
========

This module exports an object named `Reflect` and updates the global `Proxy` object (if it exists) to be compatible with the latest ECMAScript 6 spec.

The ECMAScript 6 Proxy API allows one to intercept various operations on Javascript objects.

  * Overview of all [supported traps](https://github.com/tvcutsem/harmony-reflect/tree/master/doc/traps.md) on proxies
  * The [Reflect API](https://github.com/tvcutsem/harmony-reflect/tree/master/doc/api.md) 
  * The Proxy [Handler API](https://github.com/tvcutsem/harmony-reflect/tree/master/doc/handler_api.md)
  
Compatibility
=============

The `Reflect` API, with support for proxies, was tested on:

  * Firefox (>= v4.0)
  * `node --harmony_proxies` (>= v0.7.8)
  * `iojs --harmony_proxies` (>= 2.3.0)
  * `v8 --harmony_proxies` (>= v3.6)
  * Any recent `js` spidermonkey shell

If you need only `Reflect` and not an up-to-date `Proxy` object, this
library should work on any modern ES5 engine (including all browsers).

Compatibility notes:

  * Chrome (>= v19 && <= v37) used to support proxies behind a flag
    (`chrome://flags/#enable-javascript-harmony`) but Chrome v38  [removed](https://code.google.com/p/v8/issues/detail?id=1543#c44) the `Proxy` constructor. As a result, this library cannot patch the harmony-era `Proxy` object on Chrome v38 or above. If you're working with Chromium directly, it's still possible to enable proxies using `chromium-browser --js-flags="--harmony_proxies"`.
  * In older versions of V8, the `Proxy` constructor was enabled by
    default when starting V8 with `--harmony`. For recent versions of V8,
    `Proxy` must be explicitly enabled with `--harmony_proxies`.

Dependencies
============

  *  ECMAScript 5/strict
  *  To emulate direct proxies:
    *  old Harmony [Proxies](http://wiki.ecmascript.org/doku.php?id=harmony:proxies)
    *  Harmony [WeakMaps](http://wiki.ecmascript.org/doku.php?id=harmony:weak_maps)

After loading `reflect.js` into your page or other JS environment, be aware that the following globals are patched to be able to recognize emulated direct proxies:

    Object.getOwnPropertyDescriptor
    Object.defineProperty
    Object.defineProperties
    Object.getOwnPropertyNames
    Object.getOwnPropertySymbols
    Object.keys
    Object.{get,set}PrototypeOf
    Object.assign
    Object.{freeze,seal,preventExtensions}
    Object.{isFrozen,isSealed,isExtensible}
    Object.prototype.valueOf
    Object.prototype.isPrototypeOf
    Object.prototype.toString
    Object.prototype.hasOwnProperty
    Function.prototype.toString
    Date.prototype.toString
    Array.isArray
    Array.prototype.concat
    Proxy
    Reflect

:warning: In node.js, when you `require('harmony-reflect')`, only the current
module's globals are patched. If you pass an emulated direct proxy to an external module, and that module uses the unpatched globals, the module may not interact with the proxy according to the latest ES6 Proxy API, instead falling
back on the old pre-ES6 Proxy API. This can cause bugs, e.g. the built-in `Array.isArray` will return `false` when passed a proxy-for-array, while the
patched `Array.isArray` will return true. I know of no good fix to reliably patch the globals for all node modules. If you do, let me know.

Examples
========

The [examples](https://github.com/tvcutsem/harmony-reflect/tree/master/examples) directory contains a number of examples demonstrating the use of proxies:

  * membranes: wrappers that transitively isolate two object-graphs.
  * observer: a self-hosted implementation of the ES7 `Object.observe` notification mechanism.
  * profiler: a simple profiler to collect usage statistics of an object.

Other example uses of proxies (not done by me, but using this library):

  * supporting [negative array indices](https://github.com/sindresorhus/negative-array) a la Python
  * [tpyo](https://github.com/mathiasbynens/tpyo): using proxies to correct typo's in JS property names
  * [persistent objects](http://tagtree.tv/es6-proxies): shows how one might go about using proxies to save updates to objects in a database incrementally
  * [defaultdict](https://github.com/greenify/defaultdict2): default values for new keys in objects (as known from Python)

For more examples of proxies, and a good overview of their design rationale, I recommend reading [Axel Rauschmayer's blog post on proxies](http://www.2ality.com/2014/12/es6-proxies.html).

Proxy Handler API
=================

The sister project [proxy-handlers](https://github.com/tvcutsem/proxy-handlers)
defines a number of predefined Proxy handlers as "abstract classes" that your 
code can "subclass" The goal is to minimize the number of traps that your proxy
handlers must implement.

Spec Incompatibilities and other gotcha's
=========================================

This library differs from the [ECMAScript 2016 spec](http://www.ecma-international.org/ecma-262/7.0/index.html) as follows:

  * In ES7, the `enumerate()` trap, and the corresponding `Reflect.enumerate()` method, have been [removed](https://github.com/tc39/ecma262/issues/161).
    This shim still supports the trap.
  * The ES7 (and ES6) spec contains a 
    [bug](https://github.com/tc39/ecma262/pull/666) that leads to missing
    invariant checks in the getOwnPropertyDescriptor, defineProperty and deleteProperty traps. This library already contains the patch referred
    to in [this issue](https://github.com/tc39/ecma262/pull/666).

This library differs from the [ECMAScript 2015 spec](http://www.ecma-international.org/ecma-262/6.0/) as follows:

  * In ES6, `Proxy` is a constructor function that _requires_ the use
    of `new`. That is, you must write `new Proxy(target, handler)`. This library
    exports `Proxy` as an ordinary function which may be called with or without using the `new` operator.
    
  * In ES6, `Function.prototype.toString` and `Date.prototype.toString` do not
    operate transparently on Proxies. This shim patches those functions so that
    stringifying a Proxy-for-a-function or a Proxy-for-a-date "unwraps" the
    proxy and instead stringifies the target of the Proxy. This behavior may
    change in the future to be more spec-compatible.
    
  * This library does not shim [Symbol objects](http://www.ecma-international.org/ecma-262/6.0/#sec-symbol-objects).
    On modern V8 or io.js which supports Symbol objects natively, due to a bug in V8, Symbols and Proxies
    don't play well together. [Read more](https://github.com/tvcutsem/harmony-reflect/issues/57).
  
  * Proxies-for-arrays are serialized as JSON objects rather than as JSON arrays. That is, `JSON.stringify(new Proxy([], {}))` returns "{}" rather than "[]". [Read more]( https://github.com/tvcutsem/harmony-reflect/issues/13#issuecomment-17249465).
