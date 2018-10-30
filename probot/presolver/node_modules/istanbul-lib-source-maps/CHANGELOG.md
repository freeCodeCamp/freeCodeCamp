# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="1.2.6"></a>
## [1.2.6](https://github.com/istanbuljs/istanbuljs/compare/istanbul-lib-source-maps@1.2.3...istanbul-lib-source-maps@1.2.6) (2018-09-05)


### Bug Fixes

* Tweak package.json files for republish as latest 1.x. ([#217](https://github.com/istanbuljs/istanbuljs/issues/217)) ([420481d](https://github.com/istanbuljs/istanbuljs/commit/420481d)), closes [#216](https://github.com/istanbuljs/istanbuljs/issues/216)


### BREAKING CHANGES

* leaked into 1.x modules but it was thought they were
never released to latest.  Apparently releasing 2.x to latest makes
those unwanted versions of 1.x available.

This patch sets all modules to the latest 1.x version (4.x for
test-exclude).  This will allow a new release to be made to revert
release of the breaking changes.

Stop upgrading npm to latest for testing as it's not compatible with
node 4.x.




<a name="1.2.3"></a>
## [1.2.3](https://github.com/istanbuljs/istanbuljs/compare/istanbul-lib-source-maps@1.2.2...istanbul-lib-source-maps@1.2.3) (2018-02-13)




**Note:** Version bump only for package istanbul-lib-source-maps

<a name="1.2.2"></a>
## [1.2.2](https://github.com/istanbuljs/istanbuljs/compare/istanbul-lib-source-maps@1.2.1...istanbul-lib-source-maps@1.2.2) (2017-10-21)




**Note:** Version bump only for package istanbul-lib-source-maps

<a name="1.2.1"></a>
## [1.2.1](https://github.com/istanbuljs/istanbuljs/compare/istanbul-lib-source-maps@1.2.0...istanbul-lib-source-maps@1.2.1) (2017-05-27)




<a name="1.2.0"></a>
# [1.2.0](https://github.com/istanbuljs/istanbul-lib-source-maps/compare/istanbul-lib-source-maps@1.1.1...istanbul-lib-source-maps@1.2.0) (2017-04-29)


### Features

* pull in debug module, to make debug messages optional ([#36](https://github.com/istanbuljs/istanbuljs/issues/36)) ([189519d](https://github.com/istanbuljs/istanbul-lib-source-maps/commit/189519d))




<a name="1.1.1"></a>
## [1.1.1](https://github.com/istanbuljs/istanbul-lib-source-maps/compare/istanbul-lib-source-maps@1.1.0...istanbul-lib-source-maps@1.1.1) (2017-03-27)

<a name="1.1.0"></a>
# [1.1.0](https://github.com/istanbuljs/istanbul-lib-source-maps/compare/v1.0.2...v1.1.0) (2016-11-10)


### Features

* read and apply any input source maps stored with coverage data  ([#4](https://github.com/istanbuljs/istanbul-lib-source-maps/issues/4)) ([aea405b](https://github.com/istanbuljs/istanbul-lib-source-maps/commit/aea405b))



<a name="1.0.2"></a>
## [1.0.2](https://github.com/istanbuljs/istanbul-lib-source-maps/compare/v1.0.1...v1.0.2) (2016-10-03)


### Bug Fixes

* broken mapped coverage report ([#6](https://github.com/istanbuljs/istanbul-lib-source-maps/issues/6)) ([d9dd738](https://github.com/istanbuljs/istanbul-lib-source-maps/commit/d9dd738))



<a name="1.0.1"></a>
## [1.0.1](https://github.com/istanbuljs/istanbul-lib-source-maps/compare/v1.0.0...v1.0.1) (2016-09-13)


### Bug Fixes

* position validation shouldn't throw away locations with 0 ([#5](https://github.com/istanbuljs/istanbul-lib-source-maps/issues/5)) ([ac4b72c](https://github.com/istanbuljs/istanbul-lib-source-maps/commit/ac4b72c))



<a name="1.0.0"></a>
# [1.0.0](https://github.com/istanbuljs/istanbul-lib-source-maps/compare/v1.0.0-alpha.9...v1.0.0) (2016-08-31)


### Bug Fixes

* discard more bad source map positions ([#3](https://github.com/istanbuljs/istanbul-lib-source-maps/issues/3)) ([ed7b27f](https://github.com/istanbuljs/istanbul-lib-source-maps/commit/ed7b27f))
