# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="4.1.6"></a>
## <small>4.1.6 (2018-03-09)</small>

* chore: explicit update of istanbul dependencies (#149) ([77b6eb7](https://github.com/istanbuljs/babel-plugin-istanbul/commit/77b6eb7)), closes [#149](https://github.com/istanbuljs/babel-plugin-istanbul/issues/149)
* chore(package): update coveralls to version 3.0.0 (#133) ([7045a03](https://github.com/istanbuljs/babel-plugin-istanbul/commit/7045a03)), closes [#133](https://github.com/istanbuljs/babel-plugin-istanbul/issues/133)
* chore(package): update mocha to version 4.0.0 (#134) ([38176ba](https://github.com/istanbuljs/babel-plugin-istanbul/commit/38176ba)), closes [#134](https://github.com/istanbuljs/babel-plugin-istanbul/issues/134)
* fix: babel-preset-es2015 => babel-preset-env (#138) ([18fe954](https://github.com/istanbuljs/babel-plugin-istanbul/commit/18fe954)), closes [#138](https://github.com/istanbuljs/babel-plugin-istanbul/issues/138)
* fix: include object-spread-syntax plugin (#141) ([428a952](https://github.com/istanbuljs/babel-plugin-istanbul/commit/428a952)), closes [#141](https://github.com/istanbuljs/babel-plugin-istanbul/issues/141)



<a name="4.1.5"></a>
## [4.1.5](https://github.com/istanbuljs/babel-plugin-istanbul/compare/v4.1.2...v4.1.5) (2017-08-23)



<a name="4.1.4"></a>
## [4.1.4](https://github.com/istanbuljs/babel-plugin-istanbul/compare/v4.1.3...v4.1.4) (2017-05-27)



<a name="4.1.3"></a>
## [4.1.3](https://github.com/istanbuljs/babel-plugin-istanbul/compare/v4.1.1...v4.1.3) (2017-04-29)



<a name="4.1.2"></a>
## [4.1.2](https://github.com/istanbuljs/babel-plugin-istanbul/compare/v4.1.1...v4.1.2) (2017-03-27)



<a name="4.1.1"></a>
## [4.1.1](https://github.com/istanbuljs/babel-plugin-istanbul/compare/v4.1.0...v4.1.1) (2017-03-22)


### Bug Fixes

* explicit upgrade to patched version of istanbul-lib-instrument ([db8ecbe](https://github.com/istanbuljs/babel-plugin-istanbul/commit/db8ecbe))



<a name="4.1.0"></a>
# [4.1.0](https://github.com/istanbuljs/babel-plugin-istanbul/compare/v4.0.0...v4.1.0) (2017-03-21)


### Features

* add includeUntested option to expose coverage of all instrumented files ([#80](https://github.com/istanbuljs/babel-plugin-istanbul/issues/80)) ([b078bbd](https://github.com/istanbuljs/babel-plugin-istanbul/commit/b078bbd))



<a name="4.0.0"></a>
# [4.0.0](https://github.com/istanbuljs/babel-plugin-istanbul/compare/v3.1.2...v4.0.0) (2017-02-07)


### Bug Fixes

* load configuration from process.env.NYC_CONFIG if present ([#93](https://github.com/istanbuljs/babel-plugin-istanbul/issues/93)) ([e902924](https://github.com/istanbuljs/babel-plugin-istanbul/commit/e902924))


### Features

* drop Node 0.10 and 0.12 support, upgrade dependencies to reflect this ([#88](https://github.com/istanbuljs/babel-plugin-istanbul/issues/88)) ([594c03a](https://github.com/istanbuljs/babel-plugin-istanbul/commit/594c03a))
* we can now use the language feature Object.assign ([#92](https://github.com/istanbuljs/babel-plugin-istanbul/issues/92)) ([f77db2a](https://github.com/istanbuljs/babel-plugin-istanbul/commit/f77db2a))


### BREAKING CHANGES

* I've updated dependencies and dropped Node 0.10 and Node 0.12 support.



<a name="3.1.2"></a>
## [3.1.2](https://github.com/istanbuljs/babel-plugin-istanbul/compare/v3.1.1...v3.1.2) (2017-01-04)


### Bug Fixes

* address regression related to export const foo = () => {} ([#79](https://github.com/istanbuljs/babel-plugin-istanbul/issues/79)) ([f870a8f](https://github.com/istanbuljs/babel-plugin-istanbul/commit/f870a8f))



<a name="3.1.1"></a>
## [3.1.1](https://github.com/istanbuljs/babel-plugin-istanbul/compare/v3.1.0...v3.1.1) (2017-01-02)



<a name="3.1.0"></a>
# [3.1.0](https://github.com/istanbuljs/babel-plugin-istanbul/compare/v3.0.0...v3.1.0) (2016-12-27)


### Bug Fixes

* upgrade a bunch of core dependencies ([#77](https://github.com/istanbuljs/babel-plugin-istanbul/issues/77)) ([e764330](https://github.com/istanbuljs/babel-plugin-istanbul/commit/e764330))


### Features

* accept source map input for the visitor ([#75](https://github.com/istanbuljs/babel-plugin-istanbul/issues/75)) ([437e90b](https://github.com/istanbuljs/babel-plugin-istanbul/commit/437e90b))



<a name="3.0.0"></a>
# [3.0.0](https://github.com/istanbuljs/babel-plugin-istanbul/compare/v2.0.3...v3.0.0) (2016-11-14)


### Chores

* **package:** update test-exclude to version 3.0.0 ([#68](https://github.com/istanbuljs/babel-plugin-istanbul/issues/68)) ([0396385](https://github.com/istanbuljs/babel-plugin-istanbul/commit/0396385))


### BREAKING CHANGES

* package: test-exclude now adds `**/node_modules/**` as exclude rule by default.



<a name="2.0.3"></a>
## [2.0.3](https://github.com/istanbuljs/babel-plugin-istanbul/compare/v2.0.2...v2.0.3) (2016-10-17)


### Bug Fixes

* force istanbul-lib-instrument with variable hoisting fix ([#64](https://github.com/istanbuljs/babel-plugin-istanbul/issues/64)) ([209a0cf](https://github.com/istanbuljs/babel-plugin-istanbul/commit/209a0cf))
* switch deprecated lodash.assign for object-assign ([#58](https://github.com/istanbuljs/babel-plugin-istanbul/issues/58)) ([6e051fc](https://github.com/istanbuljs/babel-plugin-istanbul/commit/6e051fc))



<a name="2.0.2"></a>
## [2.0.2](https://github.com/istanbuljs/babel-plugin-istanbul/compare/v2.0.1...v2.0.2) (2016-09-08)


### Bug Fixes

* take realpath of cwd, whether or not set in env ([#37](https://github.com/istanbuljs/babel-plugin-istanbul/issues/37)) ([6274d83](https://github.com/istanbuljs/babel-plugin-istanbul/commit/6274d83))



<a name="2.0.1"></a>
## [2.0.1](https://github.com/istanbuljs/babel-plugin-istanbul/compare/v2.0.0...v2.0.1) (2016-09-02)


### Bug Fixes

* update istanbul-lib-instrument ([573e0d4](https://github.com/istanbuljs/babel-plugin-istanbul/commit/573e0d4))



<a name="2.0.0"></a>
# [2.0.0](https://github.com/istanbuljs/babel-plugin-istanbul/compare/v1.1.0...v2.0.0) (2016-08-14)


### Chores

* upgrade to version of test-exclude with new exclude rules ([#35](https://github.com/istanbuljs/babel-plugin-istanbul/issues/35)) ([220ce2b](https://github.com/istanbuljs/babel-plugin-istanbul/commit/220ce2b))


### BREAKING CHANGES

* see https://github.com/istanbuljs/test-exclude/blob/master/CHANGELOG.md#breaking-changes



<a name="1.1.0"></a>
# [1.1.0](https://github.com/istanbuljs/babel-plugin-istanbul/compare/v1.0.3...v1.1.0) (2016-07-21)


### Bug Fixes

* upgrade to istanbul-lib-instrument with faster babel-generator ([#18](https://github.com/istanbuljs/babel-plugin-istanbul/issues/18)) ([d33263c](https://github.com/istanbuljs/babel-plugin-istanbul/commit/d33263c))


### Features

* allow exclude/include options to be passed as Babel plugin config ([#16](https://github.com/istanbuljs/babel-plugin-istanbul/issues/16)) ([cf68421](https://github.com/istanbuljs/babel-plugin-istanbul/commit/cf68421))



<a name="1.0.3"></a>
## [1.0.3](https://github.com/istanbuljs/babel-plugin-istanbul/compare/v1.0.2...v1.0.3) (2016-07-09)


### Bug Fixes

* keep using NYC_CWD if available ([#10](https://github.com/istanbuljs/babel-plugin-istanbul/issues/10)) ([db0352b](https://github.com/istanbuljs/babel-plugin-istanbul/commit/db0352b))



<a name="1.0.2"></a>
## [1.0.2](https://github.com/istanbuljs/babel-plugin-istanbul/compare/v1.0.1...v1.0.2) (2016-07-03)


### Bug Fixes

* take realpath of process.cwd(), fixes [#7](https://github.com/istanbuljs/babel-plugin-istanbul/issues/7) ([#8](https://github.com/istanbuljs/babel-plugin-istanbul/issues/8)) ([e8d3785](https://github.com/istanbuljs/babel-plugin-istanbul/commit/e8d3785)), closes [#7](https://github.com/istanbuljs/babel-plugin-istanbul/issues/7) [#8](https://github.com/istanbuljs/babel-plugin-istanbul/issues/8)



<a name="1.0.1"></a>
## [1.0.1](https://github.com/istanbuljs/babel-plugin-istanbul/compare/v1.0.0...v1.0.1) (2016-06-30)


### Bug Fixes

* upgrade to version of istanbul-lib-instrument that fixes some out of bounds issues ([#6](https://github.com/istanbuljs/babel-plugin-istanbul/issues/6)) ([a949065](https://github.com/istanbuljs/babel-plugin-istanbul/commit/a949065)), closes [#6](https://github.com/istanbuljs/babel-plugin-istanbul/issues/6)


<a name="1.0.0"></a>
# 1.0.0 (2016-06-26)


### Features

* port functionality from __coverage__, get ready for first release ([#2](https://github.com/istanbuljs/babel-plugin-istanbul/issues/2)) ([2a8ee44](https://github.com/istanbuljs/babel-plugin-istanbul/commit/2a8ee44))
