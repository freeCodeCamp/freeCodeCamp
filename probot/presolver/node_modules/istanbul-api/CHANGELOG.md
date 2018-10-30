# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="1.3.7"></a>
## [1.3.7](https://github.com/istanbuljs/istanbuljs/compare/istanbul-api@1.2.2...istanbul-api@1.3.7) (2018-09-05)


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




<a name="1.2.2"></a>
## [1.2.2](https://github.com/istanbuljs/istanbuljs/compare/istanbul-api@1.2.1...istanbul-api@1.2.2) (2018-02-13)




**Note:** Version bump only for package istanbul-api

<a name="1.2.1"></a>
## [1.2.1](https://github.com/istanbuljs/istanbuljs/compare/istanbul-api@1.2.0...istanbul-api@1.2.1) (2017-10-22)




**Note:** Version bump only for package istanbul-api

<a name="1.2.0"></a>
# [1.2.0](https://github.com/istanbuljs/istanbuljs/compare/istanbul-api@1.1.9...istanbul-api@1.2.0) (2017-10-21)


### Features

* hook vm.runInContext ([#90](https://github.com/istanbuljs/istanbuljs/issues/90)) ([9659936](https://github.com/istanbuljs/istanbuljs/commit/9659936))


### Performance Improvements

* set excludes to options.ignore on fileset ([#67](https://github.com/istanbuljs/istanbuljs/issues/67)) ([8b514a3](https://github.com/istanbuljs/istanbuljs/commit/8b514a3))




<a name="1.1.14"></a>
## [1.1.14](https://github.com/istanbuljs/istanbuljs/compare/istanbul-api@1.1.9...istanbul-api@1.1.14) (2017-09-05)


### Performance Improvements

* set excludes to options.ignore on fileset ([#67](https://github.com/istanbuljs/istanbuljs/issues/67)) ([8b514a3](https://github.com/istanbuljs/istanbuljs/commit/8b514a3))




<a name="1.1.13"></a>
## [1.1.13](https://github.com/istanbuljs/istanbuljs/compare/istanbul-api@1.1.9...istanbul-api@1.1.13) (2017-08-26)


### Performance Improvements

* set excludes to options.ignore on fileset ([#67](https://github.com/istanbuljs/istanbuljs/issues/67)) ([8b514a3](https://github.com/istanbuljs/istanbuljs/commit/8b514a3))




<a name="1.1.12"></a>
## [1.1.12](https://github.com/istanbuljs/istanbuljs/compare/istanbul-api@1.1.9...istanbul-api@1.1.12) (2017-08-23)


### Performance Improvements

* set excludes to options.ignore on fileset ([#67](https://github.com/istanbuljs/istanbuljs/issues/67)) ([8b514a3](https://github.com/istanbuljs/istanbuljs/commit/8b514a3))




<a name="1.1.11"></a>
## [1.1.11](https://github.com/istanbuljs/istanbuljs/compare/istanbul-api@1.1.9...istanbul-api@1.1.11) (2017-07-16)


### Performance Improvements

* set excludes to options.ignore on fileset ([#67](https://github.com/istanbuljs/istanbuljs/issues/67)) ([8b514a3](https://github.com/istanbuljs/istanbuljs/commit/8b514a3))




<a name="1.1.10"></a>
## [1.1.10](https://github.com/istanbuljs/istanbuljs/compare/istanbul-api@1.1.9...istanbul-api@1.1.10) (2017-06-25)




<a name="1.1.9"></a>
## [1.1.9](https://github.com/istanbuljs/istanbuljs/compare/istanbul-api@1.1.8...istanbul-api@1.1.9) (2017-05-27)




<a name="1.1.8"></a>
## [1.1.8](https://github.com/istanbuljs/istanbul-api/compare/istanbul-api@1.1.7...istanbul-api@1.1.8) (2017-04-29)




<a name="1.1.7"></a>
## [1.1.7](https://github.com/istanbuljs/istanbul-api/compare/istanbul-api@1.1.6...istanbul-api@1.1.7) (2017-03-27)

<a name="1.1.6"></a>
## [1.1.6](https://github.com/istanbuljs/istanbul-api/compare/istanbul-api@1.1.5...istanbul-api@1.1.6) (2017-03-22)

<a name="1.1.5"></a>
## [1.1.5](https://github.com/istanbuljs/istanbul-api/compare/istanbul-api@1.1.4...istanbul-api@1.1.5) (2017-03-21)

<a name="1.1.4"></a>
## [1.1.4](https://github.com/istanbuljs/istanbul-api/compare/istanbul-api@1.1.3...istanbul-api@1.1.4) (2017-03-21)

<a name="1.1.3"></a>
## [1.1.3](https://github.com/istanbuljs/istanbul-api/compare/istanbul-api@1.1.1...istanbul-api@1.1.3) (2017-03-21)

<a name="1.1.1"></a>
## [1.1.1](https://github.com/istanbuljs/istanbul-api/compare/v1.1.0...v1.1.1) (2017-01-17)


### Bug Fixes

* explicit upgrade to version of istanbul-lib-hook with fix for ts-node ([a4af720](https://github.com/istanbuljs/istanbul-api/commit/a4af720))



<a name="1.1.0"></a>
# [1.1.0](https://github.com/istanbuljs/istanbul-api/compare/v1.1.0-alpha.1...v1.1.0) (2016-12-27)


### Bug Fixes

* bump fileset version ([#7](https://github.com/istanbuljs/istanbul-api/issues/7)) ([8750735](https://github.com/istanbuljs/istanbul-api/commit/8750735))
* specify absolute mocha path in npm test script ([#9](https://github.com/istanbuljs/istanbul-api/issues/9)) ([06196e5](https://github.com/istanbuljs/istanbul-api/commit/06196e5))
* use blank ignore, so that the behavior of fileset is non-breaking ([7659ef9](https://github.com/istanbuljs/istanbul-api/commit/7659ef9))



<a name="1.1.0-candidate.0"></a>
# [1.1.0-candidate.0](https://github.com/istanbuljs/istanbul-api/compare/v1.1.0-alpha.1...v1.1.0-candidate.0) (2016-12-19)


### Bug Fixes

* bump fileset version ([#7](https://github.com/istanbuljs/istanbul-api/issues/7)) ([8750735](https://github.com/istanbuljs/istanbul-api/commit/8750735))
* specify absolute mocha path in npm test script ([#9](https://github.com/istanbuljs/istanbul-api/issues/9)) ([06196e5](https://github.com/istanbuljs/istanbul-api/commit/06196e5))
* use blank ignore, so that the behavior of fileset is non-breaking ([7659ef9](https://github.com/istanbuljs/istanbul-api/commit/7659ef9))
