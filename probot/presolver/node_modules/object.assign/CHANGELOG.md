4.0.4 / 2017-12-21
==================
  * [New] add `auto` entry point (#52)
  * [Refactor] Use `has-symbols` module
  * [Deps] update `function-bind`, `object-keys`
  * [Dev Deps] update `@es-shims/api`, `browserify`, `nsp`, `eslint`, `@ljharb/eslint-config`, `is`
  * [Tests] up to `node` `v9.3`, `v8.9`, `v6.12`; use `nvm install-latest-npm`; pin included builds to LTS

4.0.4 / 2016-07-04
==================
  * [Fix] Cache original `getOwnPropertySymbols`, and use that when `Object.getOwnPropertySymbols` is unavailable
  * [Deps] update `object-keys`
  * [Dev Deps] update `eslint`, `get-own-property-symbols`, `core-js`, `jscs`, `nsp`, `browserify`, `@ljharb/eslint-config`, `tape`, `@es-shims/api`
  * [Tests] up to `node` `v6.2`, `v5.10`, `v4.4`
  * [Tests] run sham tests on node 0.10
  * [Tests] use pretest/posttest for linting/security

4.0.3 / 2015-10-21
==================
  * [Fix] Support core-js's Symbol sham (#17)
  * [Fix] Ensure that properties removed or made non-enumerable during enumeration are not assigned (#16)
  * [Fix] Avoid looking up keys and values more than once
  * [Tests] Avoid using `reduce` so `npm run test:shams:corejs` passes in `node` `v0.8` ([core-js#122](https://github.com/zloirock/core-js/issues/122))
  * [Tests] Refactor to use my conventional structure that separates shimmed, implementation, and common tests
  * [Tests] Create `npm run test:shams` and better organize tests for symbol shams
  * [Tests] Remove `nsp` in favor of `requiresafe`

4.0.2 / 2015-10-20
==================
  * [Fix] Ensure correct property enumeration order, particularly in v8 (#15)
  * [Deps] update `object-keys`, `define-properties`
  * [Dev Deps] update `browserify`, `is`, `tape`, `jscs`, `eslint`, `@ljharb/eslint-config`
  * [Tests] up to `io.js` `v3.3`, `node` `v4.2`

4.0.1 / 2015-08-16
==================
  * [Docs] Add `Symbol` note to readme

4.0.0 / 2015-08-15
==================
  * [Breaking] Implement the [es-shim API](es-shims/api).
  * [Robustness] Make implementation robust against later modification of environment methods.
  * [Refactor] Move implementation to `implementation.js`
  * [Docs] Switch from vb.teelaun.ch to versionbadg.es for the npm version badge SVG
  * [Deps] update `object-keys`, `define-properties`
  * [Dev Deps] update `browserify`, `tape`, `eslint`, `jscs`, `browserify`
  * [Tests] Add `npm run tests-only`
  * [Tests] use my personal shared `eslint` config.
  * [Tests] up to `io.js` `v3.0`

3.0.1 / 2015-06-28
==================
  * Cache `Object` and `Array#push` to make the shim more robust.
  * [Fix] Remove use of `Array#filter`, which isn't in ES3.
  * [Deps] Update `object-keys`, `define-properties`
  * [Dev Deps] Update `get-own-property-symbols`, `browserify`, `eslint`, `nsp`
  * [Tests] Test up to `io.js` `v2.3`
  * [Tests] Adding `Object.assign` tests for non-object targets, per https://github.com/paulmillr/es6-shim/issues/348

3.0.0 / 2015-05-20
==================
  * Attempt to feature-detect Symbols, even if `typeof Symbol() !== 'symbol'` (#12)
  * Make a separate `hasSymbols` internal module
  * Update `browserify`, `eslint`

2.0.3 / 2015-06-28
==================
  * Cache `Object` and `Array#push` to make the shim more robust.
  * [Fix] Remove use of `Array#filter`, which isn't in ES3
  * [Deps] Update `object-keys`, `define-properties`
  * [Dev Deps] Update `browserify`, `nsp`, `eslint`
  * [Tests] Test up to `io.js` `v2.3`

2.0.2 / 2015-05-20
==================
  * Make sure `.shim` is non-enumerable.
  * Refactor `.shim` implementation to use `define-properties` predicates, rather than `delete`ing the original.
  * Update docs to match spec/implementation. (#11)
  * Add `npm run eslint`
  * Test up to `io.js` `v2.0`
  * Update `jscs`, `browserify`, `covert`

2.0.1 / 2015-04-12
==================
  * Make sure non-enumerable Symbols are excluded.

2.0.0 / 2015-04-12
==================
  * Make sure the shim function overwrites a broken implementation with pending exceptions.
  * Ensure shim is not enumerable using `define-properties`
  * Ensure `Object.assign` includes symbols.
  * All grade A-supported `node`/`iojs` versions now ship with an `npm` that understands `^`.
  * Run `travis-ci` tests on `iojs` and `node` v0.12; speed up builds; allow 0.8 failures.
  * Add `npm run security` via `nsp`
  * Update `browserify`, `jscs`, `tape`, `object-keys`, `is`

1.1.1 / 2014-12-14
==================
  * Actually include the browser build in `npm`

1.1.0 / 2014-12-14
==================
  * Add `npm run build`, and build an automatic-shimming browser distribution as part of the npm publish process.
  * Update `is`, `jscs`

1.0.3 / 2014-11-29
==================
  * Revert "optimize --production installs"

1.0.2 / 2014-11-27
==================
  * Update `jscs`, `is`, `object-keys`, `tape`
  * Add badges to README
  * Name URLs in README
  * Lock `covert` to `v1.0.0`
  * Optimize --production installs

1.0.1 / 2014-08-26
==================
  * Update `is`, `covert`

1.0.0 / 2014-08-07
==================
  * Update `object-keys`, `tape`

0.5.0 / 2014-07-31
==================
  * Object.assign no longer throws on null or undefined sources, per https://bugs.ecmascript.org/show_bug.cgi?id=3096

0.4.3 / 2014-07-30
==================
  * Don’t modify vars in the function signature, since it deoptimizes v8

0.4.2 / 2014-07-30
==================
  * Fixing the version number: v0.4.2

0.4.1 / 2014-07-19
==================
  * Revert "Use the native Object.keys if it’s available."

0.4.0 / 2014-07-19
==================
  * Use the native Object.keys if it’s available.
  * Fixes [#2](https://github.com/ljharb/object.assign/issues/2).
  * Adding failing tests for [#2](https://github.com/ljharb/object.assign/issues/2).
  * Fix indentation.
  * Adding `npm run lint`
  * Update `tape`, `covert`
  * README: Use SVG badge for Travis [#1](https://github.com/ljharb/object.assign/issues/1) from mathiasbynens/patch-1

0.3.1 / 2014-04-10
==================
  * Object.assign does partially modify objects if it throws, per https://twitter.com/awbjs/status/454320863093862400

0.3.0 / 2014-04-10
==================
  * Update with newest ES6 behavior - Object.assign now takes a variable number of source objects.
  * Update `tape`
  * Make sure old and unstable nodes don’t fail Travis

0.2.1 / 2014-03-16
==================
  * Let object-keys handle the fallback
  * Update dependency badges
  * Adding bower.json

0.2.0 / 2014-03-16
==================
  * Use a for loop, because ES3 browsers don’t have "reduce"

0.1.1 / 2014-03-14
==================
  * Updating readme

0.1.0 / 2014-03-14
==================
  * Initial release.

