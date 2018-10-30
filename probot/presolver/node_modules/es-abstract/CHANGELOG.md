1.12.0 / 2018-05-31
=================
  * [New] add `GetIntrinsic` entry point
  * [New] `ES2015`+: add `ObjectCreate`
  * [Robustness]: `ES2015+`: ensure `Math.{abs,floor}` and `Function.call` are cached

1.11.0 / 2018-03-21
=================
  * [New] `ES2015+`: add iterator abstract ops
  * [Dev Deps] update `eslint`, `nsp`, `object.assign`, `semver`, `tape`
  * [Tests] up to `node` `v9.8`, `v8.10`, `v6.13`

1.10.0 / 2017-11-24
=================
  * [New] ES2015+: `AdvanceStringIndex`
  * [Dev Deps] update `eslint`, `nsp`
  * [Tests] require node 0.6 to pass again
  * [Tests] up to `node` `v9.2`, `v8.9`, `v6.12`; use `nvm install-latest-npm`; pin included builds to LTS

1.9.0 / 2017-09-30
=================
  * [New] `es2015+`: add `ArraySpeciesCreate`
  * [New] ES2015+: add `CreateDataProperty` and `CreateDataPropertyOrThrow`
  * [Tests] consolidate duplicated tests
  * [Tests] increase coverage
  * [Dev Deps] update `nsp`, `eslint`

1.8.2 / 2017-09-03
=================
  * [Fix] `es2015`+: `ToNumber`: provide the proper hint for Date objects (#27)
  * [Dev Deps] update `eslint`

1.8.1 / 2017-08-30
=================
  * [Fix] ES2015+: `ToPropertyKey`: should return a symbol for Symbols (#26)
  * [Deps] update `function-bind`
  * [Dev Deps] update `eslint`, `@ljharb/eslint-config`
  * [Docs] github broke markdown parsing

1.8.0 / 2017-08-04
=================
  * [New] add ES2017
  * [New] move es6+ to es2015+; leave es6/es7 as aliases
  * [New] ES5+: add `IsPropertyDescriptor`, `IsAccessorDescriptor`, `IsDataDescriptor`, `IsGenericDescriptor`, `FromPropertyDescriptor`, `ToPropertyDescriptor`
  * [New] ES2015+: add `CompletePropertyDescriptor`, `Set`, `HasOwnProperty`, `HasProperty`, `IsConcatSpreadable`, `Invoke`, `CreateIterResultObject`, `RegExpExec`
  * [Fix] es7/es2016: do not mutate ES6
  * [Fix] assign helper only supports one source
  * [Deps] update `is-regex`
  * [Dev Deps] update `nsp`, `eslint`, `@ljharb/eslint-config`
  * [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `nsp`, `semver`, `tape`
  * [Tests] add tests for missing and excess operations
  * [Tests] add codecov for coverage
  * [Tests] up to `node` `v8.2`, `v7.10`, `v6.11`, `v4.8`; newer npm breaks on older node
  * [Tests] use same lists of value types across tests; ensure tests are the same when ops are the same
  * [Tests] ES2015: add ToNumber symbol tests
  * [Tests] switch to `nyc` for code coverage
  * [Tests] make IsRegExp tests consistent across editions

1.7.0 / 2017-01-22
=================
  * [New] ES6: Add `GetMethod` (#16)
  * [New] ES6: Add `GetV` (#16)
  * [New] ES6: Add `Get` (#17)
  * [Tests] up to `node` `v7.4`, `v6.9`, `v4.6`; improve test matrix
  * [Dev Deps] update `tape`, `nsp`, `eslint`, `@ljharb/eslint-config`, `safe-publish-latest`

1.6.1 / 2016-08-21
=================
  * [Fix] ES6: IsConstructor should return true for `class` constructors.

1.6.0 / 2016-08-20
=================
  * [New] ES5 / ES6: add `Type`
  * [New] ES6: `SpeciesConstructor`
  * [Dev Deps] update `jscs`, `nsp`, `eslint`, `@ljharb/eslint-config`, `semver`; add `safe-publish-latest`
  * [Tests] up to `node` `v6.4`, `v5.12`, `v4.5`

1.5.1 / 2016-05-30
=================
  * [Fix] `ES.IsRegExp`: actually look up `Symbol.match` on the argument
  * [Refactor] create `isNaN` helper
  * [Deps] update `is-callable`, `function-bind`
  * [Deps] update `es-to-primitive`, fix ES5 tests
  * [Dev Deps] update `jscs`, `eslint`, `@ljharb/eslint-config`, `tape`, `nsp`
  * [Tests] up to `node` `v6.2`, `v5.11`, `v4.4`
  * [Tests] use pretest/posttest for linting/security

1.5.0 / 2015-12-27
=================
  * [New] adds `Symbol.toPrimitive` support via `es-to-primitive`
  * [Deps] update `is-callable`, `es-to-primitive`
  * [Dev Deps] update `jscs`, `nsp`, `eslint`, `@ljharb/eslint-config`, `semver`, `tape`
  * [Tests] up to `node` `v5.3`

1.4.3 / 2015-11-04
=================
  * [Fix] `ES6.ToNumber`: should give `NaN` for explicitly signed hex strings (#4)
  * [Refactor] `ES6.ToNumber`: No need to double-trim
  * [Refactor] group tests better
  * [Tests] should still pass on `node` `v0.8`

1.4.2 / 2015-11-02
=================
  * [Fix] ensure `ES.ToNumber` trims whitespace, and does not trim non-whitespace (#3)

1.4.1 / 2015-10-31
=================
  * [Fix] ensure only 0-1 are valid binary and 0-7 are valid octal digits (#2)
  * [Dev Deps] update `tape`, `jscs`, `nsp`, `eslint`, `@ljharb/eslint-config`
  * [Tests] on `node` `v5.0`
  * [Tests] fix npm upgrades for older node versions
  * package.json: use object form of "authors", add "contributors"

1.4.0 / 2015-09-26
=================
  * [Deps] update `is-callable`
  * [Dev Deps] update `tape`, `jscs`, `eslint`, `@ljharb/eslint-config`
  * [Tests] on `node` `v4.2`
  * [New] Add `SameValueNonNumber` to ES7

1.3.2 / 2015-09-26
=================
  * [Fix] Fix `ES6.IsRegExp` to properly handle `Symbol.match`, per spec.
  * [Tests] up to `io.js` `v3.3`, `node` `v4.1`
  * [Dev Deps] update `tape`, `jscs`, `nsp`, `eslint`, `@ljharb/eslint-config`, `semver`

1.3.1 / 2015-08-15
=================
  * [Fix] Ensure that objects that `toString` to a binary or octal literal also convert properly

1.3.0 / 2015-08-15
=================
  * [New] ES6’s ToNumber now supports binary and octal literals.
  * [Dev Deps] update `jscs`, `eslint`, `@ljharb/eslint-config`, `tape`
  * [Docs] Switch from vb.teelaun.ch to versionbadg.es for the npm version badge SVG
  * [Tests] up to `io.js` `v3.0`

1.2.2 / 2015-07-28
=================
  * [Fix] Both `ES5.CheckObjectCoercible` and `ES6.RequireObjectCoercible` return the value if they don't throw.
  * [Tests] Test on latest `io.js` versions.
  * [Dev Deps] Update `eslint`, `jscs`, `tape`, `semver`, `covert`, `nsp`

1.2.1 / 2015-03-20
=================
  * Fix `isFinite` helper.

1.2.0 / 2015-03-19
=================
  * Use `es-to-primitive` for ToPrimitive methods.
  * Test on latest `io.js` versions; allow failures on all but 2 latest `node`/`io.js` versions.

1.1.2 / 2015-03-20
=================
  * Fix isFinite helper.

1.1.1 / 2015-03-19
=================
  * Fix isPrimitive check for functions
  * Update `eslint`, `editorconfig-tools`, `semver`, `nsp`

1.1.0 / 2015-02-17
=================
  * Add ES7 export (non-default).
  * All grade A-supported `node`/`iojs` versions now ship with an `npm` that understands `^`.
  * Test on `iojs-v1.2`.

1.0.1 / 2015-01-30
=================
  * Use `is-callable` instead of an internal function.
  * Update `tape`, `jscs`, `nsp`, `eslint`

1.0.0 / 2015-01-10
=================
  * v1.0.0
