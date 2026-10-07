## **6.11.0
- [New] [Fix] `stringify`: revert 0e903c0; add `commaRoundTrip` option (#442)
- [readme] fix version badge

## **6.10.5**
- [Fix] `stringify`: with `arrayFormat: comma`, properly include an explicit `[]` on a single-item array (#434)

## **6.10.4**
- [Fix] `stringify`: with `arrayFormat: comma`, include an explicit `[]` on a single-item array (#441)
- [meta] use `npmignore` to autogenerate an npmignore file
- [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `aud`, `has-symbol`, `object-inspect`, `tape`

## **6.10.3**
- [Fix] `parse`: ignore `__proto__` keys (#428)
- [Robustness] `stringify`: avoid relying on a global `undefined` (#427)
- [actions] reuse common workflows
- [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `object-inspect`, `tape`

## **6.10.2**
- [Fix] `stringify`: actually fix cyclic references (#426)
- [Fix] `stringify`: avoid encoding arrayformat comma when `encodeValuesOnly = true` (#424)
- [readme] remove travis badge; add github actions/codecov badges; update URLs
- [Docs] add note and links for coercing primitive values (#408)
- [actions] update codecov uploader
- [actions] update workflows
- [Tests] clean up stringify tests slightly
- [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `aud`, `object-inspect`, `safe-publish-latest`, `tape`

## **6.10.1**
- [Fix] `stringify`: avoid exception on repeated object values (#402)

## **6.10.0**
- [New] `stringify`: throw on cycles, instead of an infinite loop (#395, #394, #393)
- [New] `parse`: add `allowSparse` option for collapsing arrays with missing indices (#312)
- [meta] fix README.md (#399)
- [meta] only run `npm run dist` in publish, not install
- [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `aud`, `has-symbols`, `tape`
- [Tests] fix tests on node v0.6
- [Tests] use `ljharb/actions/node/install` instead of `ljharb/actions/node/run`
- [Tests] Revert "[meta] ignore eclint transitive audit warning"

## **6.9.7**
- [Fix] `parse`: ignore `__proto__` keys (#428)
- [Fix] `stringify`: avoid encoding arrayformat comma when `encodeValuesOnly = true` (#424)
- [Robustness] `stringify`: avoid relying on a global `undefined` (#427)
- [readme] remove travis badge; add github actions/codecov badges; update URLs
- [Docs] add note and links for coercing primitive values (#408)
- [Tests] clean up stringify tests slightly
- [meta] fix README.md (#399)
- Revert "[meta] ignore eclint transitive audit warning"
- [actions] backport actions from main
- [Dev Deps] backport updates from main

## **6.9.6**
- [Fix] restore `dist` dir; mistakenly removed in d4f6c32

## **6.9.5**
- [Fix] `stringify`: do not encode parens for RFC1738
- [Fix] `stringify`: fix arrayFormat comma with empty array/objects (#350)
- [Refactor] `format`: remove `util.assign` call
- [meta] add "Allow Edits" workflow; update rebase workflow
- [actions] switch Automatic Rebase workflow to `pull_request_target` event
- [Tests] `stringify`: add tests for #378
- [Tests] migrate tests to Github Actions
- [Tests] run `nyc` on all tests; use `tape` runner
- [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `browserify`, `mkdirp`, `object-inspect`, `tape`; add `aud`

## **6.9.4**
- [Fix] `stringify`: when `arrayFormat` is `comma`, respect `serializeDate` (#364)
- [Refactor] `stringify`: reduce branching (part of #350)
- [Refactor] move `maybeMap` to `utils`
- [Dev Deps] update `browserify`, `tape`

## **6.9.3**
- [Fix] proper comma parsing of URL-encoded commas (#361)
- [Fix] parses comma delimited array while having percent-encoded comma treated as normal text (#336)

## **6.9.2**
- [Fix] `parse`: Fix parsing array from object with `comma` true (#359)
- [Fix] `parse`: throw a TypeError instead of an Error for bad charset (#349)
- [meta] ignore eclint transitive audit warning
- [meta] fix indentation in package.json
- [meta] add tidelift marketing copy
- [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `object-inspect`, `has-symbols`, `tape`, `mkdirp`, `iconv-lite`
- [actions] add automatic rebasing / merge commit blocking

## **6.9.1**
- [Fix] `parse`: with comma true, handle field that holds an array of arrays (#335)
- [Fix] `parse`: with comma true, do not split non-string values (#334)
- [meta] add `funding` field
- [Dev Deps] update `eslint`, `@ljharb/eslint-config`
- [Tests] use shared travis-ci config

## **6.9.0**
- [New] `parse`/`stringify`: Pass extra key/value argument to `decoder` (#333)
- [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `evalmd`
- [Tests] `parse`: add passing `arrayFormat` tests
- [Tests] add `posttest` using `npx aud` to run `npm audit` without a lockfile
- [Tests] up to `node` `v12.10`, `v11.15`, `v10.16`, `v8.16`
- [Tests] `Buffer.from` in node v5.0-v5.9 and v4.0-v4.4 requires a TypedArray

## **6.8.3**
- [Fix] `parse`: ignore `__proto__` keys (#428)
- [Robustness] `stringify`: avoid relying on a global `undefined` (#427)
- [Fix] `stringify`: avoid encoding arrayformat comma when `encodeValuesOnly = true` (#424)
- [readme] remove travis badge; add github actions/codecov badges; update URLs
- [Tests] clean up stringify tests slightly
- [Docs] add note and links for coercing primitive values (#408)
- [meta] fix README.md (#399)
- [actions] backport actions from main
- [Dev Deps] backport updates from main
- [Refactor] `stringify`: reduce branching
- [meta] do not publish workflow files

## **6.8.2**
- [Fix] proper comma parsing of URL-encoded commas (#361)
- [Fix] parses comma delimited array while having percent-encoded comma treated as normal text (#336)

## **6.8.1**
- [Fix] `parse`: Fix parsing array from object with `comma` true (#359)
- [Fix] `parse`: throw a TypeError instead of an Error for bad charset (#349)
- [Fix] `parse`: with comma true, handle field that holds an array of arrays (#335)
- [fix] `parse`: with comma true, do not split non-string values (#334)
- [meta] add tidelift marketing copy
- [meta] add `funding` field
- [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `tape`, `safe-publish-latest`, `evalmd`, `has-symbols`, `iconv-lite`, `mkdirp`, `object-inspect`
- [Tests] `parse`: add passing `arrayFormat` tests
- [Tests] use shared travis-ci configs
- [Tests] `Buffer.from` in node v5.0-v5.9 and v4.0-v4.4 requires a TypedArray
- [actions] add automatic rebasing / merge commit blocking

## **6.8.0**
- [New] add `depth=false` to preserve the original key; [Fix] `depth=0` should preserve the original key (#326)
- [New] [Fix] stringify symbols and bigints
- [Fix] ensure node 0.12 can stringify Symbols
- [Fix] fix for an impossible situation: when the formatter is called with a non-string value
- [Refactor] `formats`: tiny bit of cleanup.
- [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `browserify`, `safe-publish-latest`, `iconv-lite`, `tape`
- [Tests] add tests for `depth=0` and `depth=false` behavior, both current and intuitive/intended (#326)
- [Tests] use `eclint` instead of `editorconfig-tools`
- [docs] readme: add security note
- [meta] add github sponsorship
- [meta] add FUNDING.yml
- [meta] Clean up license text so it’s properly detected as BSD-3-Clause

## **6.7.3**
- [Fix] `parse`: ignore `__proto__` keys (#428)
- [Fix] `stringify`: avoid encoding arrayformat comma when `encodeValuesOnly = true` (#424)
- [Robustness] `stringify`: avoid relying on a global `undefined` (#427)
- [readme] remove travis badge; add github actions/codecov badges; update URLs
- [Docs] add note and links for coercing primitive values (#408)
- [meta] fix README.md (#399)
- [meta] do not publish workflow files
- [actions] backport actions from main
- [Dev Deps] backport updates from main
- [Tests] use `nyc` for coverage
- [Tests] clean up stringify tests slightly

## **6.7.2**
- [Fix] proper comma parsing of URL-encoded commas (#361)
- [Fix] parses comma delimited array while having percent-encoded comma treated as normal text (#336)

## **6.7.1**
- [Fix] `parse`: Fix parsing array from object with `comma` true (#359)
- [Fix] `parse`: with comma true, handle field that holds an array of arrays (#335)
- [fix] `parse`: with comma true, do not split non-string values (#334)
- [Fix] `parse`: throw a TypeError instead of an Error for bad charset (#349)
- [Fix] fix for an impossible situation: when the formatter is called with a non-string value
- [Refactor] `formats`: tiny bit of cleanup.
- readme: add security note
- [meta] add tidelift marketing copy
- [meta] add `funding` field
- [meta] add FUNDING.yml
- [meta] Clean up license text so it’s properly detected as BSD-3-Clause
- [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `tape`, `safe-publish-latest`, `evalmd`, `iconv-lite`, `mkdirp`, `object-inspect`, `browserify`
- [Tests] `parse`: add passing `arrayFormat` tests
- [Tests] use shared travis-ci configs
- [Tests] `Buffer.from` in node v5.0-v5.9 and v4.0-v4.4 requires a TypedArray
- [Tests] add tests for `depth=0` and `depth=false` behavior, both current and intuitive/intended
- [Tests] use `eclint` instead of `editorconfig-tools`
- [actions] add automatic rebasing / merge commit blocking

## **6.7.0**
- [New] `stringify`/`parse`: add `comma` as an `arrayFormat` option (#276, #219)
- [Fix] correctly parse nested arrays (#212)
- [Fix] `utils.merge`: avoid a crash with a null target and a truthy non-array source, also with an array source
- [Robustness] `stringify`: cache `Object.prototype.hasOwnProperty`
- [Refactor] `utils`: `isBuffer`: small tweak; add tests
- [Refactor] use cached `Array.isArray`
- [Refactor] `parse`/`stringify`: make a function to normalize the options
- [Refactor] `utils`: reduce observable [[Get]]s
- [Refactor] `stringify`/`utils`: cache `Array.isArray`
- [Tests] always use `String(x)` over `x.toString()`
- [Tests] fix Buffer tests to work in node < 4.5 and node < 5.10
- [Tests] temporarily allow coverage to fail

## **6.6.1**
- [Fix] `parse`: ignore `__proto__` keys (#428)
- [Fix] fix for an impossible situation: when the formatter is called with a non-string value
- [Fix] `utils.merge`: avoid a crash with a null target and an array source
- [Fix] `utils.merge`: avoid a crash with a null target and a truthy non-array source
- [Fix] correctly parse nested arrays
- [Robustness] `stringify`: avoid relying on a global `undefined` (#427)
- [Robustness] `stringify`: cache `Object.prototype.hasOwnProperty`
- [Refactor] `formats`: tiny bit of cleanup.
- [Refactor] `utils`: `isBuffer`: small tweak; add tests
- [Refactor]: `stringify`/`utils`: cache `Array.isArray`
- [Refactor] `utils`: reduce observable [[Get]]s
- [Refactor] use cached `Array.isArray`
- [Refactor] `parse`/`stringify`: make a function to normalize the options
- [readme] remove travis badge; add github actions/codecov badges; update URLs
- [Docs] Clarify the need for "arrayLimit" option
- [meta] fix README.md (#399)
- [meta] do not publish workflow files
- [meta] Clean up license text so it’s properly detected as BSD-3-Clause
- [meta] add FUNDING.yml
- [meta] Fixes typo in CHANGELOG.md
- [actions] backport actions from main
- [Tests] fix Buffer tests to work in node < 4.5 and node < 5.10
- [Tests] always use `String(x)` over `x.toString()`
- [Dev Deps] backport from main

## **6.6.0**
- [New] Add support for iso-8859-1, utf8 "sentinel" and numeric entities (#268)
- [New] move two-value combine to a `utils` function (#189)
- [Fix] `stringify`: fix a crash with `strictNullHandling` and a custom `filter`/`serializeDate` (#279)
- [Fix] when `parseArrays` is false, properly handle keys ending in `[]` (#260)
- [Fix] `stringify`: do not crash in an obscure combo of `interpretNumericEntities`, a bad custom `decoder`, & `iso-8859-1`
- [Fix] `utils`: `merge`: fix crash when `source` is a truthy primitive & no options are provided
- [refactor] `stringify`: Avoid arr = arr.concat(...), push to the existing instance (#269)
- [Refactor] `parse`: only need to reassign the var once
- [Refactor] `parse`/`stringify`: clean up `charset` options checking; fix defaults
- [Refactor] add missing defaults
- [Refactor] `parse`: one less `concat` call
- [Refactor] `utils`: `compactQueue`: make it explicitly side-effecting
- [Dev Deps] update `browserify`, `eslint`, `@ljharb/eslint-config`, `iconv-lite`, `safe-publish-latest`, `tape`
- [Tests] up to `node` `v10.10`, `v9.11`, `v8.12`, `v6.14`, `v4.9`; pin included builds to LTS

## **6.5.3**
- [Fix] `parse`: ignore `__proto__` keys (#428)
- [Fix]` `utils.merge`: avoid a crash with a null target and a truthy non-array source
- [Fix] correctly parse nested arrays
- [Fix] `stringify`: fix a crash with `strictNullHandling` and a custom `filter`/`serializeDate` (#279)
- [Fix] `utils`: `merge`: fix crash when `source` is a truthy primitive & no options are provided
- [Fix] when `parseArrays` is false, properly handle keys ending in `[]`
- [Fix] fix for an impossible situation: when the formatter is called with a non-string value
- [Fix] `utils.merge`: avoid a crash with a null target and an array source
- [Refactor] `utils`: reduce observable [[Get]]s
- [Refactor] use cached `Array.isArray`
- [Refactor] `stringify`: Avoid arr = arr.concat(...), push to the existing instance (#269)
- [Refactor] `parse`: only need to reassign the var once
- [Robustness] `stringify`: avoid relying on a global `undefined` (#427)
- [readme] remove travis badge; add github actions/codecov badges; update URLs
- [Docs] Clean up license text so it’s properly detected as BSD-3-Clause
- [Docs] Clarify the need for "arrayLimit" option
- [meta] fix README.md (#399)
- [meta] add FUNDING.yml
- [actions] backport actions from main
- [Tests] always use `String(x)` over `x.toString()`
- [Tests] remove nonexistent tape option
- [Dev Deps] backport from main

## **6.5.2**
- [Fix] use `safer-buffer` instead of `Buffer` constructor
- [Refactor] utils: `module.exports` one thing, instead of mutating `exports` (#230)
- [Dev Deps] update `browserify`, `eslint`, `iconv-lite`, `safer-buffer`, `tape`, `browserify`

## **6.5.1**
- [Fix] Fix parsing & compacting very deep objects (#224)
- [Refactor] name utils functions
- [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `tape`
- [Tests] up to `node` `v8.4`; use `nvm install-latest-npm` so newer npm doesn’t break older node
- [Tests] Use precise dist for Node.js 0.6 runtime (#225)
- [Tests] make 0.6 required, now that it’s passing
- [Tests] on `node` `v8.2`; fix npm on node 0.6

## **6.5.0**
- [New] add `utils.assign`
- [New] pass default encoder/decoder to custom encoder/decoder functions (#206)
- [New] `parse`/`stringify`: add `ignoreQueryPrefix`/`addQueryPrefix` options, respectively (#213)
- [Fix] Handle stringifying empty objects with addQueryPrefix (#217)
- [Fix] do not mutate `options` argument (#207)
- [Refactor] `parse`: cache index to reuse in else statement (#182)
- [Docs] add various badges to readme (#208)
- [Dev Deps] update `eslint`, `browserify`, `iconv-lite`, `tape`
- [Tests] up to `node` `v8.1`, `v7.10`, `v6.11`; npm v4.6 breaks on node < v1; npm v5+ breaks on node < v4
- [Tests] add `editorconfig-tools`

## **6.4.1**
- [Fix] `parse`: ignore `__proto__` keys (#428)
- [Fix] fix for an impossible situation: when the formatter is called with a non-string value
- [Fix] use `safer-buffer` instead of `Buffer` constructor
- [Fix] `utils.merge`: avoid a crash with a null target and an array source
- [Fix]` `utils.merge`: avoid a crash with a null target and a truthy non-array source
- [Fix] `stringify`: fix a crash with `strictNullHandling` and a custom `filter`/`serializeDate` (#279)
- [Fix] `utils`: `merge`: fix crash when `source` is a truthy primitive & no options are provided
- [Fix] when `parseArrays` is false, properly handle keys ending in `[]`
- [Robustness] `stringify`: avoid relying on a global `undefined` (#427)
- [Refactor] use cached `Array.isArray`
- [Refactor] `stringify`: Avoid arr = arr.concat(...), push to the existing instance (#269)
- [readme] remove travis badge; add github actions/codecov badges; update URLs
- [Docs] Clarify the need for "arrayLimit" option
- [meta] fix README.md (#399)
- [meta] Clean up license text so it’s properly detected as BSD-3-Clause
- [meta] add FUNDING.yml
- [actions] backport actions from main
- [Tests] remove nonexistent tape option
- [Dev Deps] backport from main

## **6.4.0**
- [New] `qs.stringify`: add `encodeValuesOnly` option
- [Fix] follow `allowPrototypes` option during merge (#201, #201)
- [Fix] support keys starting with brackets (#202, #200)
- [Fix] chmod a-x
- [Dev Deps] update `eslint`
- [Tests] up to `node` `v7.7`, `v6.10`,` v4.8`; disable osx builds since they block linux builds
- [eslint] reduce warnings

## **6.3.3**
- [Fix] `parse`: ignore `__proto__` keys (#428)
- [Fix] fix for an impossible situation: when the formatter is called with a non-string value
- [Fix] `utils.merge`: avoid a crash with a null target and an array source
- [Fix]` `utils.merge`: avoid a crash with a null target and a truthy non-array source
- [Fix] `stringify`: fix a crash with `strictNullHandling` and a custom `filter`/`serializeDate` (#279)
- [Fix] `utils`: `merge`: fix crash when `source` is a truthy primitive & no options are provided
- [Fix] when `parseArrays` is false, properly handle keys ending in `[]`
- [Robustness] `stringify`: avoid relying on a global `undefined` (#427)
- [Refactor] use cached `Array.isArray`
- [Refactor] `stringify`: Avoid arr = arr.concat(...), push to the existing instance (#269)
- [Docs] Clarify the need for "arrayLimit" option
- [meta] fix README.md (#399)
- [meta] Clean up license text so it’s properly detected as BSD-3-Clause
- [meta] add FUNDING.yml
- [actions] backport actions from main
- [Tests] use `safer-buffer` instead of `Buffer` constructor
- [Tests] remove nonexistent tape option
- [Dev Deps] backport from main

## **6.3.2**
- [Fix] follow `allowPrototypes` option during merge (#201, #200)
- [Dev Deps] update `eslint`
- [Fix] chmod a-x
- [Fix] support keys starting with brackets (#202, #200)
- [Tests] up to `node` `v7.7`, `v6.10`,` v4.8`; disable osx builds since they block linux builds

## **6.3.1**
- [Fix] ensure that `allowPrototypes: false` does not ever shadow Object.prototype properties (thanks, @snyk!)
- [Dev Deps] update `eslint`, `@ljharb/eslint-config`, `browserify`, `iconv-lite`, `qs-iconv`, `tape`
- [Tests] on all node minors; improve test matrix
- [Docs] document stringify option `allowDots` (#195)
- [Docs] add empty object and array values example (#195)
- [Docs] Fix minor inconsistency/typo (#192)
- [Docs] document stringify option `sort` (#191)
- [Refactor] `stringify`: throw faster with an invalid encoder
- [Refactor] remove unnecessary escapes (#184)
- Remove contributing.md, since `qs` is no longer part of `hapi` (#183)

## **6.3.0**
- [New] Add support for RFC 1738 (#174, #173)
- [New] `stringify`: Add `serializeDate` option to customize Date serialization (#159)
- [Fix] ensure `utils.merge` handles merging two arrays
- [Refactor] only constructors should be capitalized
- [Refactor] capitalized var names are for constructors only
- [Refactor] avoid using a sparse array
- [Robustness] `formats`: cache `String#replace`
- [Dev Deps] update `browserify`, `eslint`, `@ljharb/eslint-config`; add `safe-publish-latest`
- [Tests] up to `node` `v6.8`, `v4.6`; improve test matrix
- [Tests] flesh out arrayLimit/arrayFormat tests (#107)
- [Tests] skip Object.create tests when null objects are not available
- [Tests] Turn on eslint for test files (#175)

## **6.2.4**
- [Fix] `parse`: ignore `__proto__` keys (#428)
- [Fix] `utils.merge`: avoid a crash with a null target and an array source
- [Fix] `utils.merge`: avoid a crash with a null target and a truthy non-array source
- [Fix] `utils`: `merge`: fix crash when `source` is a truthy primitive & no options are provided
- [Fix] when `parseArrays` is false, properly handle keys ending in `[]`
- [Robustness] `stringify`: avoid relying on a global `undefined` (#427)
- [Refactor] use cached `Array.isArray`
- [Docs] Clarify the need for "arrayLimit" option
- [meta] fix README.md (#399)
- [meta] Clean up license text so it’s properly detected as BSD-3-Clause
- [meta] add FUNDING.yml
- [actions] backport actions from main
- [Tests] use `safer-buffer` instead of `Buffer` constructor
- [Tests] remove nonexistent tape option
- [Dev Deps] backport from main

## **6.2.3**
- [Fix] follow `allowPrototypes` option during merge (#201, #200)
- [Fix] chmod a-x
- [Fix] support keys starting with brackets (#202, #200)
- [Tests] up to `node` `v7.7`, `v6.10`,` v4.8`; disable osx builds since they block linux builds

## **6.2.2**
- [Fix] ensure that `allowPrototypes: false` does not ever shadow Object.prototype properties

## **6.2.1**
- [Fix] ensure `key[]=x&key[]&key[]=y` results in 3, not 2, values
- [Refactor] Be explicit and use `Object.prototype.hasOwnProperty.call`
- [Tests] remove `parallelshell` since it does not reliably report failures
- [Tests] up to `node` `v6.3`, `v5.12`
- [Dev Deps] update `tape`, `eslint`, `@ljharb/eslint-config`, `qs-iconv`

## [**6.2.0**](https://github.com/ljharb/qs/issues?milestone=36&state=closed)
- [New] pass Buffers to the encoder/decoder directly (#161)
- [New] add "encoder" and "decoder" options, for custom param encoding/decoding (#160)
- [Fix] fix compacting of nested sparse arrays (#150)

## **6.1.2
- [Fix] follow `allowPrototypes` option during merge (#201, #200)
- [Fix] chmod a-x
- [Fix] support keys starting with brackets (#202, #200)
- [Tests] up to `node` `v7.7`, `v6.10`,` v4.8`; disable osx builds since they block linux builds

## **6.1.1**
- [Fix] ensure that `allowPrototypes: false` does not ever shadow Object.prototype properties

## [**6.1.0**](https://github.com/ljharb/qs/issues?milestone=35&state=closed)
- [New] allowDots option for `stringify` (#151)
- [Fix] "sort" option should work at a depth of 3 or more (#151)
- [Fix] Restore `dist` directory; will be removed in v7 (#148)

## **6.0.4**
- [Fix] follow `allowPrototypes` option during merge (#201, #200)
- [Fix] chmod a-x
- [Fix] support keys starting with brackets (#202, #200)
- [Tests] up to `node` `v7.7`, `v6.10`,` v4.8`; disable osx builds since they block linux builds

## **6.0.3**
- [Fix] ensure that `allowPrototypes: false` does not ever shadow Object.prototype properties
- [Fix] Restore `dist` directory; will be removed in v7 (#148)

## [**6.0.2**](https://github.com/ljharb/qs/issues?milestone=33&state=closed)
- Revert ES6 requirement and restore support for node down to v0.8.

## [**6.0.1**](https://github.com/ljharb/qs/issues?milestone=32&state=closed)
- [**#127**](https://github.com/ljharb/qs/pull/127) Fix engines definition in package.json

## [**6.0.0**](https://github.com/ljharb/qs/issues?milestone=31&state=closed)
- [**#124**](https://github.com/ljharb/qs/issues/124) Use ES6 and drop support for node < v4

## **5.2.1**
- [Fix] ensure `key[]=x&key[]&key[]=y` results in 3, not 2, values

## [**5.2.0**](https://github.com/ljharb/qs/issues?milestone=30&state=closed)
- [**#64**](https://github.com/ljharb/qs/issues/64) Add option to sort object keys in the query string

## [**5.1.0**](https://github.com/ljharb/qs/issues?milestone=29&state=closed)
- [**#117**](https://github.com/ljharb/qs/issues/117) make URI encoding stringified results optional
- [**#106**](https://github.com/ljharb/qs/issues/106) Add flag `skipNulls` to optionally skip null values in stringify

## [**5.0.0**](https://github.com/ljharb/qs/issues?milestone=28&state=closed)
- [**#114**](https://github.com/ljharb/qs/issues/114) default allowDots to false
- [**#100**](https://github.com/ljharb/qs/issues/100) include dist to npm

## [**4.0.0**](https://github.com/ljharb/qs/issues?milestone=26&state=closed)
- [**#98**](https://github.com/ljharb/qs/issues/98) make returning plain objects and allowing prototype overwriting properties optional

## [**3.1.0**](https://github.com/ljharb/qs/issues?milestone=24&state=closed)
- [**#89**](https://github.com/ljharb/qs/issues/89) Add option to disable "Transform dot notation to bracket notation"

## [**3.0.0**](https://github.com/ljharb/qs/issues?milestone=23&state=closed)
- [**#80**](https://github.com/ljharb/qs/issues/80) qs.parse silently drops properties
- [**#77**](https://github.com/ljharb/qs/issues/77) Perf boost
- [**#60**](https://github.com/ljharb/qs/issues/60) Add explicit option to disable array parsing
- [**#74**](https://github.com/ljharb/qs/issues/74) Bad parse when turning array into object
- [**#81**](https://github.com/ljharb/qs/issues/81) Add a `filter` option
- [**#68**](https://github.com/ljharb/qs/issues/68) Fixed issue with recursion and passing strings into objects.
- [**#66**](https://github.com/ljharb/qs/issues/66) Add mixed array and object dot notation support Closes: #47
- [**#76**](https://github.com/ljharb/qs/issues/76) RFC 3986
- [**#85**](https://github.com/ljharb/qs/issues/85) No equal sign
- [**#84**](https://github.com/ljharb/qs/issues/84) update license attribute

## [**2.4.1**](https://github.com/ljharb/qs/issues?milestone=20&state=closed)
- [**#73**](https://github.com/ljharb/qs/issues/73) Property 'hasOwnProperty' of object #<Object> is not a function

## [**2.4.0**](https://github.com/ljharb/qs/issues?milestone=19&state=closed)
- [**#70**](https://github.com/ljharb/qs/issues/70) Add arrayFormat option

## [**2.3.3**](https://github.com/ljharb/qs/issues?milestone=18&state=closed)
- [**#59**](https://github.com/ljharb/qs/issues/59) make sure array indexes are >= 0, closes #57
- [**#58**](https://github.com/ljharb/qs/issues/58) make qs usable for browser loader

## [**2.3.2**](https://github.com/ljharb/qs/issues?milestone=17&state=closed)
- [**#55**](https://github.com/ljharb/qs/issues/55) allow merging a string into an object

## [**2.3.1**](https://github.com/ljharb/qs/issues?milestone=16&state=closed)
- [**#52**](https://github.com/ljharb/qs/issues/52) Return "undefined" and "false" instead of throwing "TypeError".

## [**2.3.0**](https://github.com/ljharb/qs/issues?milestone=15&state=closed)
- [**#50**](https://github.com/ljharb/qs/issues/50) add option to omit array indices, closes #46

## [**2.2.5**](https://github.com/ljharb/qs/issues?milestone=14&state=closed)
- [**#39**](https://github.com/ljharb/qs/issues/39) Is there an alternative to Buffer.isBuffer?
- [**#49**](https://github.com/ljharb/qs/issues/49) refactor utils.merge, fixes #45
- [**#41**](https://github.com/ljharb/qs/issues/41) avoid browserifying Buffer, for #39

## [**2.2.4**](https://github.com/ljharb/qs/issues?milestone=13&state=closed)
- [**#38**](https://github.com/ljharb/qs/issues/38) how to handle object keys beginning with a number

## [**2.2.3**](https://github.com/ljharb/qs/issues?milestone=12&state=closed)
- [**#37**](https://github.com/ljharb/qs/issues/37) parser discards first empty value in array
- [**#36**](https://github.com/ljharb/qs/issues/36) Update to lab 4.x

## [**2.2.2**](https://github.com/ljharb/qs/issues?milestone=11&state=closed)
- [**#33**](https://github.com/ljharb/qs/issues/33) Error when plain object in a value
- [**#34**](https://github.com/ljharb/qs/issues/34) use Object.prototype.hasOwnProperty.call instead of obj.hasOwnProperty
- [**#24**](https://github.com/ljharb/qs/issues/24) Changelog? Semver?

## [**2.2.1**](https://github.com/ljharb/qs/issues?milestone=10&state=closed)
- [**#32**](https://github.com/ljharb/qs/issues/32) account for circular references properly, closes #31
- [**#31**](https://github.com/ljharb/qs/issues/31) qs.parse stackoverflow on circular objects

## [**2.2.0**](https://github.com/ljharb/qs/issues?milestone=9&state=closed)
- [**#26**](https://github.com/ljharb/qs/issues/26) Don't use Buffer global if it's not present
- [**#30**](https://github.com/ljharb/qs/issues/30) Bug when merging non-object values into arrays
- [**#29**](https://github.com/ljharb/qs/issues/29) Don't call Utils.clone at the top of Utils.merge
- [**#23**](https://github.com/ljharb/qs/issues/23) Ability to not limit parameters?

## [**2.1.0**](https://github.com/ljharb/qs/issues?milestone=8&state=closed)
- [**#22**](https://github.com/ljharb/qs/issues/22) Enable using a RegExp as delimiter

## [**2.0.0**](https://github.com/ljharb/qs/issues?milestone=7&state=closed)
- [**#18**](https://github.com/ljharb/qs/issues/18) Why is there arrayLimit?
- [**#20**](https://github.com/ljharb/qs/issues/20) Configurable parametersLimit
- [**#21**](https://github.com/ljharb/qs/issues/21) make all limits optional, for #18, for #20

## [**1.2.2**](https://github.com/ljharb/qs/issues?milestone=6&state=closed)
- [**#19**](https://github.com/ljharb/qs/issues/19) Don't overwrite null values

## [**1.2.1**](https://github.com/ljharb/qs/issues?milestone=5&state=closed)
- [**#16**](https://github.com/ljharb/qs/issues/16) ignore non-string delimiters
- [**#15**](https://github.com/ljharb/qs/issues/15) Close code block

## [**1.2.0**](https://github.com/ljharb/qs/issues?milestone=4&state=closed)
- [**#12**](https://github.com/ljharb/qs/issues/12) Add optional delim argument
- [**#13**](https://github.com/ljharb/qs/issues/13) fix #11: flattened keys in array are now correctly parsed

## [**1.1.0**](https://github.com/ljharb/qs/issues?milestone=3&state=closed)
- [**#7**](https://github.com/ljharb/qs/issues/7) Empty values of a POST array disappear after being submitted
- [**#9**](https://github.com/ljharb/qs/issues/9) Should not omit equals signs (=) when value is null
- [**#6**](https://github.com/ljharb/qs/issues/6) Minor grammar fix in README

## [**1.0.2**](https://github.com/ljharb/qs/issues?milestone=2&state=closed)
- [**#5**](https://github.com/ljharb/qs/issues/5) array holes incorrectly copied into object on large index
