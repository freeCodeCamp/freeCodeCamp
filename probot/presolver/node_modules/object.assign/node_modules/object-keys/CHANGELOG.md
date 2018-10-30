1.0.12 / 2018-06-18
=================
  * [Fix] avoid accessing `window.applicationCache`, to avoid issues with latest Chrome on HTTP (#46)

1.0.11 / 2016-07-05
=================
  * [Fix] exclude keys regarding the style (eg. `pageYOffset`) on `window` to avoid reflow (#32)

1.0.10 / 2016-07-04
=================
  * [Fix] exclude `height` and `width` keys on `window` to avoid reflow (#31)
  * [Fix] In IE 6, `window.external` makes `Object.keys` throw
  * [Tests] up to `node` `v6.2`, `v5.10`, `v4.4`
  * [Tests] use pretest/posttest for linting/security
  * [Dev Deps] update `tape`, `jscs`, `nsp`, `eslint`, `@ljharb/eslint-config`
  * [Dev Deps] remove unused eccheck script + dep

1.0.9 / 2015-10-19
=================
  * [Fix] Blacklist 'frame' property on window (#16, #17)
  * [Dev Deps] update `jscs`, `eslint`, `@ljharb/eslint-config`

1.0.8 / 2015-10-14
=================
  * [Fix] wrap automation equality bug checking in try/catch, per [es5-shim#327](https://github.com/es-shims/es5-shim/issues/327)
  * [Fix] Blacklist 'window.frameElement' per [es5-shim#322](https://github.com/es-shims/es5-shim/issues/322)
  * [Docs] Switch from vb.teelaun.ch to versionbadg.es for the npm version badge SVG
  * [Tests] up to `io.js` `v3.3`, `node` `v4.2`
  * [Dev Deps] update `eslint`, `tape`, `@ljharb/eslint-config`, `jscs`

1.0.7 / 2015-07-18
=================
  * [Fix] A proper fix for 176f03335e90d5c8d0d8125a99f27819c9b9cdad / https://github.com/es-shims/es5-shim/issues/275 that doesn't break dontEnum/constructor fixes in IE 8.
  * [Fix] Remove deprecation message in Chrome by touching deprecated window properties (#15)
  * [Tests] Improve test output for automation equality bugfix
  * [Tests] Test on `io.js` `v2.4`

1.0.6 / 2015-07-09
=================
  * [Fix] Use an object lookup rather than ES5's `indexOf` (#14)
  * [Tests] ES3 browsers don't have `Array.isArray`
  * [Tests] Fix `no-shadow` rule, as well as an IE 8 bug caused by engine NFE shadowing bugs.

1.0.5 / 2015-07-03
=================
  * [Fix] Fix a flabbergasting IE 8 bug where `localStorage.constructor.prototype === localStorage` throws
  * [Tests] Test up to `io.js` `v2.3`
  * [Dev Deps] Update `nsp`, `eslint`

1.0.4 / 2015-05-23
=================
  * Fix a Safari 5.0 bug with `Object.keys` not working with `arguments`
  * Test on latest `node` and `io.js`
  * Update `jscs`, `tape`, `eslint`, `nsp`, `is`, `editorconfig-tools`, `covert`

1.0.3 / 2015-01-06
=================
  * Revert "Make `object-keys` more robust against later environment tampering" to maintain ES3 compliance

1.0.2 / 2014-12-28
=================
  * Update lots of dev dependencies
  * Tweaks to README
  * Make `object-keys` more robust against later environment tampering

1.0.1 / 2014-09-03
=================
  * Update URLs and badges in README

1.0.0 / 2014-08-26
=================
  * v1.0.0

0.6.1 / 2014-08-25
=================
  * v0.6.1
  * Updating dependencies (tape, covert, is)
  * Update badges in readme
  * Use separate var statements

0.6.0 / 2014-04-23
=================
  * v0.6.0
  * Updating dependencies (tape, covert)
  * Make sure boxed primitives, and arguments objects, work properly in ES3 browsers
  * Improve test matrix: test all node versions, but only latest two stables are a failure
  * Remove internal foreach shim.

0.5.1 / 2014-03-09
=================
  * 0.5.1
  * Updating dependencies (tape, covert, is)
  * Removing forEach from the module (but keeping it in tests)

0.5.0 / 2014-01-30
=================
  * 0.5.0
  * Explicitly returning the shim, instead of returning native Object.keys when present
  * Adding a changelog.
  * Cleaning up IIFE wrapping
  * Testing on node 0.4 through 0.11

0.4.0 / 2013-08-14
==================

  * v0.4.0
  * In Chrome 4-10 and Safari 4, typeof (new RegExp) === 'function'
  * If it's a string, make sure to use charAt instead of brackets.
  * Only use Function#call if necessary.
  * Making sure the context tests actually run.
  * Better function detection
  * Adding the android browser
  * Fixing testling files
  * Updating tape
  * Removing the "is" dependency.
  * Making an isArguments shim.
  * Adding a local forEach shim and tests.
  * Updating paths.
  * Moving the shim test.
  * v0.3.0

0.3.0 / 2013-05-18
==================

  * README tweak.
  * Fixing constructor enum issue. Fixes [#5](https://github.com/ljharb/object-keys/issues/5).
  * Adding a test for [#5](https://github.com/ljharb/object-keys/issues/5)
  * Updating readme.
  * Updating dependencies.
  * Giving credit to lodash.
  * Make sure that a prototype's constructor property is not enumerable. Fixes [#3](https://github.com/ljharb/object-keys/issues/3).
  * Adding additional tests to handle arguments objects, and to skip "prototype" in functions. Fixes [#2](https://github.com/ljharb/object-keys/issues/2).
  * Fixing a typo on this test for [#3](https://github.com/ljharb/object-keys/issues/3).
  * Adding node 0.10 to travis.
  * Adding an IE < 9 test per [#3](https://github.com/ljharb/object-keys/issues/3)
  * Adding an iOS 5 mobile Safari test per [#2](https://github.com/ljharb/object-keys/issues/2)
  * Moving "indexof" and "is" to be dev dependencies.
  * Making sure the shim works with functions.
  * Flattening the tests.

0.2.0 / 2013-05-10
==================

  * v0.2.0
  * Object.keys should work with arrays.

0.1.8 / 2013-05-10
==================

  * v0.1.8
  * Upgrading dependencies.
  * Using a simpler check.
  * Fixing a bug in hasDontEnumBug browsers.
  * Using the newest tape!
  * Fixing this error test.
  * "undefined" is probably a reserved word in ES3.
  * Better test message.

0.1.7 / 2013-04-17
==================

  * Upgrading "is" once more.
  * The key "null" is breaking some browsers.

0.1.6 / 2013-04-17
==================

  * v0.1.6
  * Upgrading "is"

0.1.5 / 2013-04-14
==================

  * Bumping version.
  * Adding more testling browsers.
  * Updating "is"

0.1.4 / 2013-04-08
==================

  * Using "is" instead of "is-extended".

0.1.3 / 2013-04-07
==================

  * Using "foreach" instead of my own shim.
  * Removing "tap"; I'll just wait for "tape" to fix its node 0.10 bug.

0.1.2 / 2013-04-03
==================

  * Adding dependency status; moving links to an index at the bottom.
  * Upgrading is-extended; version 0.1.2
  * Adding an npm version badge.

0.1.1 / 2013-04-01
==================

  * Adding Travis CI.
  * Bumping the version.
  * Adding indexOf since IE sucks.
  * Adding a forEach shim since older browsers don't have Array#forEach.
  * Upgrading tape - 0.3.2 uses Array#map
  * Using explicit end instead of plan.
  * Can't test with Array.isArray in older browsers.
  * Using is-extended.
  * Fixing testling files.
  * JSHint/JSLint-ing.
  * Removing an unused object.
  * Using strict mode.

0.1.0 / 2013-03-30
==================

  * Changing the exports should have meant a higher version bump.
  * Oops, fixing the repo URL.
  * Adding more tests.
  * 0.0.2
  * Merge branch 'export_one_thing'; closes [#1](https://github.com/ljharb/object-keys/issues/1)
  * Move shim export to a separate file.
