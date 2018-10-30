# Stealthy-Require

[![Build Status](https://img.shields.io/travis/analog-nico/stealthy-require/master.svg?style=flat-square)](https://travis-ci.org/analog-nico/stealthy-require)
[![Coverage Status](https://img.shields.io/coveralls/analog-nico/stealthy-require.svg?style=flat-square)](https://coveralls.io/r/analog-nico/stealthy-require)
[![Dependency Status](https://img.shields.io/david/analog-nico/stealthy-require.svg?style=flat-square)](https://david-dm.org/analog-nico/stealthy-require)

This is probably the closest you can currently get to require something in node.js with completely bypassing the require cache.

`stealthy-require` works like this:

1. It clears the require cache.
2. It calls a callback in which you require your module(s) without the cache kicking in.
3. It clears the cache again and restores its old state.

The restrictions are:

- [Native modules cannot be required twice.](https://github.com/nodejs/node/issues/5016) Thus this module bypasses the require cache only for non-native (e.g. JS) modules.
- The require cache is only bypassed for all operations that happen synchronously when a module is required. If a module lazy loads another module at a later time that require call will not bypass the cache anymore.

This means you should have a close look at all internal require calls before you decide to use this library.

## Installation

[![NPM Stats](https://nodei.co/npm/stealthy-require.png?downloads=true)](https://npmjs.org/package/stealthy-require)

This is a module for node.js and is installed via npm:

``` bash
npm install stealthy-require --save
```

## Usage

Let's say you want to bypass the require cache for this require call:

``` js
var request = require('request');
```

With `stealthy-require` you can do that like this:

``` js
var stealthyRequire = require('stealthy-require');

var requestFresh = stealthyRequire(require.cache, function () {
    return require('request');
});
```

The require cache is bypassed for the module you require (i.e. `request`) as well as all modules the module requires (i.e. `http` and many more).

Sometimes the require cache shall not be bypassed for specific modules. E.g. `request` is required but `tough-cookie` – on which `request` depends on – shall be required using the regular cache. For that you can pass two extra arguments to `stealthyRequire(...)`:

- A callback that requires the modules that shall be required without bypassing the cache
- The `module` variable

``` js
var stealthyRequire = require('stealthy-require');

var requestFresh = stealthyRequire(require.cache, function () {
    return require('request');
},
function () {
    require('tough-cookie'); // No return needed
    // You can require multiple modules here
}, module);
```

## Usage with Module Bundlers

- [Webpack](https://webpack.github.io) works out-of-the-box like described in the [Usage section](#usage) above.
- [Browserify](http://browserify.org) does not expose `require.cache`. However, as of `browserify@13.0.1` the cache is passed as the 6th argument to CommonJS modules. Thus you can pass this argument instead:

``` js
// Tweak for Browserify - using arguments[5] instead of require.cache
var requestFresh = stealthyRequire(arguments[5], function () {
    return require('request');
});
```

## Preventing a Memory Leak When Repeatedly Requiring Fresh Module Instances in Node.js

If you are using `stealthy-require` in node.js and repeatedly require fresh module instances the `module.children` array will hold all module instances which prevents unneeded instances to be garbage collected.

Assume your code calls `doSomething()` repeatedly.

``` js
var stealthyRequire = require('stealthy-require');

function doSomething() {

    var freshInstance = stealthyRequire(require.cache, function () {
        return require('some-module');
    });
    
    return freshInstance.calc();

}
```

After `doSomething()` returns `freshInstance` is not used anymore but won’t be garbage collected because `module.children` still holds a reference. The solution is to truncate `module.children` accordingly:

``` js
var stealthyRequire = require('stealthy-require');

function doSomething() {

    var initialChildren = module.children.slice(); // Creates a shallow copy of the array

    var freshInstance = stealthyRequire(require.cache, function () {
        return require('some-module');
    });

    module.children = initialChildren;

    return freshInstance.calc();

}
```

The `slice` operation removes all new `module.children` entries created during the `stealthyRequire(...)` call and thus `freshInstance` gets garbage collected after `doSomething()` returns.


## Technical Walkthrough

``` js
// 1. Load stealthy-require
var stealthyRequire = require('stealthy-require');
// This does nothing but loading the code.
// It has no side-effects like patching the module loader or anything.

// Any regular require works as always.
var request1 = require('request');

// 2. Call stealthyRequire with passing the require cache and a callback.
var requestFresh = stealthyRequire(require.cache, function () {

    // 2a. Before this callback gets called the require cache is cleared.

    // 2b. Any require taking place here takes place on a clean require cache.
    // Since the require call is part of the user's code it also works with module bundlers.
    return require('request');
    // Anything returned here will be returned by stealthyRequire(...).

    // 2c. After this callback gets called the require cache is
    // - cleared again and
    // - restored to its old state before step 2.

});

// Any regular require again works as always.
// In this case require returns the cached request module instance.
var request2 = require('request');

// And voilà:
request1 === request2 // -> true
request1 === requestFresh // -> false
```

## Contributing

To set up your development environment for `stealthy-require`:

1. Clone this repo to your desktop,
2. in the shell `cd` to the main folder,
3. hit `npm install`,
4. hit `npm install gulp -g` if you haven't installed gulp globally yet, and
5. run `gulp dev`. (Or run `node ./node_modules/.bin/gulp dev` if you don't want to install gulp globally.)

`gulp dev` watches all source files and if you save some changes it will lint the code and execute all tests. The test coverage report can be viewed from `./coverage/lcov-report/index.html`.

If you want to debug a test you should use `gulp test-without-coverage` to run all tests without obscuring the code by the test coverage instrumentation.

## Change History

- v1.1.1 (2017-05-08)
    - Fix that stops `undefined` entries from appearing in `require.cache` *(Thanks to @jasperjn from reporting this in [issue #4](https://github.com/analog-nico/stealthy-require/issues/4))*
- v1.1.0 (2017-04-25)
    - Added ability to disable bypassing the cache for certain modules *(Thanks to @novemberborn for suggesting this in [issue #3](https://github.com/analog-nico/stealthy-require/issues/3))*
    - Added section in README about a [potential memory leak](#preventing-a-memory-leak-when-repeatedly-requiring-fresh-module-instances-in-nodejs) *(Thanks to @Flarna and @novemberborn for bringing that up in [issue #2](https://github.com/analog-nico/stealthy-require/issues/2))*
    - Performance optimizations *(Thanks to @jcready for [pull request #1](https://github.com/analog-nico/stealthy-require/pull/1))*
- v1.0.0 (2016-07-18)
    - **Breaking Change:** API completely changed. Please read the [Usage section](#usage) again.
    - Redesigned library to support module bundlers like [Webpack](https://webpack.github.io) and [Browserify](http://browserify.org)
- v0.1.0 (2016-05-26)
    - Initial version

## License (ISC)

In case you never heard about the [ISC license](http://en.wikipedia.org/wiki/ISC_license) it is functionally equivalent to the MIT license.

See the [LICENSE file](LICENSE) for details.
