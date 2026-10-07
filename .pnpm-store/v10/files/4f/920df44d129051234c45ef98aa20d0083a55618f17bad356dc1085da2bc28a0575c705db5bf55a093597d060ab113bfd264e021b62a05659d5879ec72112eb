# Master

# 4.2.5

* remove old try/catch performance hacks, modern runtimes do not require these tricks

# 4.2.4

* [Fixes #305] Confuse webpack

# 4.2.3

* Cleanup testem related build configuration
* Use `prepublishOnly` instead of `prepublish` (thanks @rhysd)
* Add Node.js 9, 8 to testing matrix
* drop now unused s3 deployment files
* internal cleanup (thanks to @bekzod, @mariusschulz)
* Fixup Changelog

# 4.2.2

* Ensure PROMISE_ID works correctly
* internal cleanup (thanks yo @mariusschulz)

# 4.2.1

* drop bower support

# 4.2.0

* drop `dist` from git repo
* add `Promise.prototype.finally`
* update various build related dependencies
* add CDN links

# 4.1.0

* [BUGFIX] Fix memory leak [#269]
* [BUGFIX] Auto Bundles within an AMD Environment [#263]

# 4.0.5

* fix require('es6-promise/auto') for Node < 4

# 4.0.4

* fix asap when using https://github.com/Kinvey/titanium-sdk

# 4.0.3

* fix Readme links

# 4.0.2

* fix require('es6-promise/auto');

# 4.0.0

* no longer polyfill automatically, if needed one can still invoke
  `require('es6-promise/auto')` directly.

# 3.3.1

* fix links in readme

# 3.3.0

* support polyfil on WebMAF (playstation env)
* fix tampering related bug global `constructor` was referenced by mistake.
* provide TS Typings
* increase compatibliity with sinon.useFakeTimers();
* update build tools (use rollup)
* directly export promise;

# 3.2.2

* IE8: use isArray
* update build dependencies

# 3.2.1

* fix race tampering issue
* use eslint
* fix Promise.all tampering
* remove unused code
* fix issues with NWJS/electron

# 3.2.0

* improve tamper resistence of Promise.all Promise.race and
  Promise.prototype.then (note, this isn't complete, but addresses an exception
  when used \w core-js, follow up work will address entirely)
* remove spec incompatible then chaining fast-path
* add eslint
* update build deps

# 3.1.2

* fix node detection issues with NWJS/electron

# 3.1.0

* improve performance of Promise.all when it encounters a non-promise input object input
* then/resolve tamper protection
* reduce AST size of promise constructor, to facilitate more inlining
* Update README.md with details about PhantomJS requirement for running tests
* Mangle and compress the minified version

# 3.0.2

* correctly bump both bower and package.json versions

# 3.0.1

* no longer include dist/test in npm releases

# 3.0.0

* use nextTick() instead of setImmediate() to schedule microtasks with node 0.10. Later versions of
  nodes are not affected as they were already using nextTick(). Note that using nextTick() might
  trigger a depreciation warning on 0.10 as described at https://github.com/cujojs/when/issues/410.
  The reason why nextTick() is preferred is that is setImmediate() would schedule a macrotask
  instead of a microtask and might result in a different scheduling.
  If needed you can revert to the former behavior as follow:

    var Promise = require('es6-promise').Promise;
    Promise._setScheduler(setImmediate);

# 2.3.0

* #121: Ability to override the internal asap implementation
* #120: Use an ascii character for an apostrophe, for source maps

# 2.2.0

* #116: Expose asap() and a way to override the scheduling mechanism on Promise
* Lock to v0.2.3 of ember-cli

# 2.1.1

* Fix #100 via #105: tell browserify to ignore vertx require
* Fix #101 via #102: "follow thenable state, not own state"

# 2.1.0

* #59: Automatic polyfill. No need to invoke `ES6Promise.polyfill()` anymore.
* ... (see the commit log)

# 2.0.0

* re-sync with RSVP. Many large performance improvements and bugfixes.

# 1.0.0

* first subset of RSVP
