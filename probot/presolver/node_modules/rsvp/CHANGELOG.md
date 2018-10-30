# Master

# 3.5.0

* expose RSVP.asap for access to the micro-task polyfil

# 3.4.0

* [BUGFIX] Fix memory leak [#446]
* Mirror Node's LTS policy
* add dist/rsvp.es.js (bundle as a single ES module file)
* fix typo in readme

# 3.3.3

* [BUGFIX] Fix asap for Titanium \w webpack usage.

# 3.3.2

* [BUGFIX] fix invalid ES6

# 3.3.1

* [BUGFIX] for compat, ensure both default export and property export exist. This will likely go away in 4.0.0, and was the result of rollup producing proper output with `__esModule: true` brand

# 3.3.0

* improve build, switch to broccoli-rollup (among other things)
* RSVP.filter() now itself accepts a Promise.all as input
* compress and mangle prod build output
* [REVERT] reject instead of throwing, spec violation.

# 3.2.1

* reject instead of throwing

# 3.2.0

* add tamper protection - then / resolve tampering should avoid fast-paths the rely on those being predictable
* improve performance of Enumerator operating on non-promise objects
* Ensure the promise constructor continues to get inlined.

# 3.1.0

* `RSVP.on('error', function(reason, label) { ... }` now also provides the
  rejected promises label.

# 3.0.21

* actually don't publish built tests to npm

# 3.0.20

* correctly publish bower & npm

# 3.0.19

* don't publish built tests to npm

# 3.0.18

* issue with phantomjs 2.0 on travis. I have lost patience..
* test on iojs and node 0.12
* bump ember-cli
* Support objects not inheriting from Object.prototype in RSVP.hash()

# 3.0.17

* Added browser field to fix browserification
* Fix stripping source map
* Fix duplicate imports
* Remove unused loader.js dependency
* Add the ember-cli dependency checker
* Remove the duplicate build script
* Remove the static middleware
* add npm run build:production
* browserify extern not needed
* also add lib for those es6 peeps
* enusre only dist is included in publishes
* strip source maps for now.
* copy correct tree into test
* prefer start to server
* use git-repo-version
* ah, prod builds used rename correctly.
* remove rename, prefer mv for this scenario
* prepend license
* Revert "node 0.10.x doesn’t like this. Its not really needed just run `npm run test` or `npm run test:ci`"
* node 0.10.x doesn’t like this. Its not really needed just run `npm run test` or `npm run test:ci`
* move stuff around + bump to broccoli-stew 0.0.3
* bump broccoli-stew which now supports globs
* Problem with path for vertx.js.

# 3.0.16

* use more supported version of export default
* more broccoli fun
* remove accidentally imported map file
* test non-minified (we can add a flag to test minified next)
* [BUGFIX release] Replace closure compiler

# 3.0.15

* Added Node 0.11 to travis ci test runner
* Replaced deprecated process.nextTick with setImmediate
* Ember test and npm run test:node passing
* (origin/upgrade-tooling) upgrade tooling
* Fix onerror test
* [fixes #322] don't inform instrumentation of errors until the current turn is complete.
* Follow thenable state not own state
* Correct minor spelling error in defer doc example
* Set [[AlreadyResolved]] as soon as resolve is called
* Finally should correctly trigger on('error')
* [fixes #294] finally work correctly with on(‘error’)
* Use git-repo-version to calculate build signature
* yay the new transpiler supports this now!!!
* Use the latest version of the transpiler
* add subclassing tests to finally
* extern event emitter stuff
* [fixes #309] some more externs
* ensure those select few using node with minified JS don't have an issue
* [fixes #302] use @calvinmetcalf’s promises-aplus-tests-phantom

# 3.0.14

* Instrumentation with stack is now opt-in
* improve cost of instrumentation by up to 15x in chrome
* reduce AST size
* last vertex related touch-ups.
* Add vert.x compatibility.
* [fixes #296] for define.amd and module.exports to no minify
* [fixes #292] ensure the deferred's api doesn't break when minified
* ignore some files for npm
* Add 'finally' to readme
* Use browserify assert instead of vendoring one
* Use mocha and json3 from npm, not bower
* Remove unused json2 file
* upgrade build tooling
* improve performance of instrumentation (also add seperate flag to include "stack" with instrumentation as it is unfortunately slow)
* ensure minified RSVP.defer() maintains known external API [#293](https://github.com/tildeio/rsvp.js/pull/293)
* add `finally` to the readme
* improve usage of browserify for promise/a+ tests
* add wasteful files to gitignore
* add [vert.x](http://vertx.io/) compatibility

# 3.0.13

* [Bugfix] fix `RSVP.hash` `RSVP.hashSettled` in runtimes < es5 by fixing a broken `Object.create` polyfil [#286](https://github.com/tildeio/rsvp.js/pull/286)
* [Enhancement] cleanup & improve test related build tooling [#288](https://github.com/tildeio/rsvp.js/pull/288)

# 3.0.12

* [Bugfix] fix regression in denodeify that broke foreign thenables as arguments to denodeifed functions [#281](https://github.com/tildeio/rsvp.js/pull/281)

# 3.0.11

* [Bugfix] some onerror scenarios did not result in error notifications [4dcf](https://github.com/tildeio/rsvp.js/commit/4dcfa92bab6f5fc9e97ca3abfb71025a08984e7e)
* [Bugfix] for more correctness internal optimization should only occure
  if constructors equal, not just if instanceof check passes [96b5ec](https://github.com/tildeio/rsvp.js/commit/96b5ec201b2ddafc70cd5c836bc341a46081ae23)
* fancy new s3 publishing thanks to @rondale-sc

# 3.0.10

* faster denodeify
* rework tooling (Broccoli, testem, no grunt)
* utilize bundle format for super small UMD builds

# 3.0.9
* [Bugfix] no longer include promise-aplus tests as a production
  dependency
* [Enhancement] fast then path for both rejection/fulfilment [0d252](https://github.com/tildeio/rsvp.js/commit/0d252ed4831eabb82991584e2e3eaae2a3a2ba42)
* [Enhancement] short-cut for faster then chaining in specific scenarios
  [#256](https://github.com/tildeio/rsvp.js/pull/256)

# 3.0.8
* [Bugfix] custom onerror handler, for potentially unhandled errors
  would report unhandled errors in some incorrect scenarios.
[#255](https://github.com/tildeio/rsvp.js/pull/255)

# 3.0.7

* improve tests in some older es5+ browsers
* [Bugfix] denodeify should not use console for deprecation warning unless console is defined
* [Enhancement] instrumentation should emit out-of-band. This should improve ember-extension performance
* [Bugfix] race should not be susceptible to zalgo
* [Perf] PromiseEnumerator increase performance of all enumerable methods all/allSettled/hash/hasSettled -> https://gist.github.com/stefanpenner/26465d5848f2924e2aca
* [Docfix] Fix small documentation inconsistency
* [Perf] an internal promise shouldn't bother validating `this` and `resolver`
* [Perf] flatten asap’s QUEUE structure
* [Perf] Reduce Constructor AST size.
* [Perf] some versions of v8, think keep marking these functions to be optimized. This hints to them not to be.
* [Perf] accidental resolve step, that merely needed to be a fulfill
* [Perf/Enhancement] simplify publishing
* [Spec ADdition]add spec test “Ensure `then` is always called with a clean stack.” ensure RSVP passes future a+ spec
* [Bugfix] web worker support
* [Docfix] Add a param name to make yuidoc happy
* [Enhancement] simplify async vs sync pub/sub code-paths
* [Bugfix] Passed the label through to the Promise object, as expected
* [Docfix] missing Parentheses on promise example in documentation
* [License] Add Stefan Penner to license
* [Docfix] document `var promises` in filter.js

# 3.0.3 -> 3.0.6 (missing changelog)

* Changes to RSVP.denodeify: Behaviour for multiple success callback parameters
  has been improved and the denodefied function now inherits from the original
  node function.

# 3.0.2

* [Spec compliance] Promise.all and Promise.race should reject, not throw on invalid input
* Add RSVP.allSettled

# 3.0.1

* Optimization: promises with noop resolvers now don't bother try to handle them.
* [perf] skip costly resolver invocation if it is known not to be needed.
* improve promise inspector interopt

# 3.0.0

* align with the promise spec
  https://github.com/domenic/promises-unwrapping
* idiomatic es6 usage
* RSVP.all: now casts rather then resolves, and doesn't touch the
  "then"
* RSVP.hash: now casts rather then resolves, and doesn't touch the
  "then"
* MutationObserver: prefer text mutation, this fixes interop with
  MutationObserver polyfils
* Removing asap unload listener. Allows back/forward page cache, chrome
  bug is old. Fixes #168
* add grunt docs task
* document: Promise.cast
* document: Promise.resolve/Promise.reject
* document: Promise.race
* document: Promise.all
* document: Promise.hash
* document: RSVP.denodeify
* document: RSVP.EventTarget
* document: RSVP.rethrow
* document: RSVP.defer
* Document: RSVP.on('error'
* Add Instrumentation hooks for tooling
* Significant internal cleanup and performance improvements
* require Promise constructor to be new'd (aligned with es6 spec)
* Prefer tasks + config inline within project
* Add Promise.finally
* Add Promise.cast
* Add Promise.resolve
* Add Promise.reject
* Add Promise.all
* Add Promise.race
* Add RSVP.map
* Support promise inheritance
* optimize onerror and reduce promise creation cost by 20x
* promise/a+ 2.0.3 compliant
* RSVP.async to schedule callbacks on internal queue
* Optimization: only enforce a single nextTick for each queue flush.

# 2.0.4

* Fix npm package

# 2.0.3

* Fix useSetTimeout bug

# 2.0.2

* Adding RSVP#rethrow
* add pre-built AMD link to README
* adding promise#fail

# 2.0.1
* misc IE fixes, including IE array detection
* upload passing builds to s3
* async: use three args for addEventListener
* satisfy both 1.0 and 1.1 specs
* Run reduce tests only in node
* RSVP.resolve now simply uses the internal resolution procedure
* prevent multiple promise resolutions
* simplify thenable handling
* pre-allocate the deferred's shape
* Moved from Rake-based builds to Grunt
* Fix Promise subclassing bug
* Add RSVP.configure('onerror')
* Throw exception when RSVP.all is called without an array
* refactor RSVP.all to just use a promise directly
* Make `RSVP.denodeify` pass along `thisArg`
* add RSVP.reject
* Reject promise if resolver function throws an exception
* add travis build-status
* correctly test and fix self fulfillment
* remove promise coercion.
* Fix infinite recursion with deep self fulfilling promises
* doc fixes

# 2.0.0

* No changelog beyond this point. Here be dragons.
