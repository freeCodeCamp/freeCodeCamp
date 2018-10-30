# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="1.2.2"></a>
## [1.2.2](https://github.com/istanbuljs/istanbuljs/compare/istanbul-lib-hook@1.1.0...istanbul-lib-hook@1.2.2) (2018-09-05)


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




<a name="1.1.0"></a>
# [1.1.0](https://github.com/istanbuljs/istanbuljs/compare/istanbul-lib-hook@1.0.7...istanbul-lib-hook@1.1.0) (2017-10-21)


### Features

* hook vm.runInContext ([#90](https://github.com/istanbuljs/istanbuljs/issues/90)) ([9659936](https://github.com/istanbuljs/istanbuljs/commit/9659936))




<a name="1.0.7"></a>
## [1.0.7](https://github.com/istanbuljs/istanbuljs/compare/istanbul-lib-hook@1.0.6...istanbul-lib-hook@1.0.7) (2017-05-27)




<a name="1.0.6"></a>
## [1.0.6](https://github.com/istanbuljs/istanbul-lib-hook/compare/istanbul-lib-hook@1.0.5...istanbul-lib-hook@1.0.6) (2017-04-29)




<a name="1.0.5"></a>
## [1.0.5](https://github.com/istanbuljs/istanbul-lib-hook/compare/istanbul-lib-hook@1.0.4...istanbul-lib-hook@1.0.5) (2017-03-27)

<a name="1.0.4"></a>
## [1.0.4](https://github.com/istanbuljs/istanbul-lib-hook/compare/istanbul-lib-hook@1.0.3...istanbul-lib-hook@1.0.4) (2017-03-21)

<a name="1.0.3"></a>
## [1.0.3](https://github.com/istanbuljs/istanbul-lib-hook/compare/istanbul-lib-hook@1.0.2...istanbul-lib-hook@1.0.3) (2017-03-21)

<a name="1.0.2"></a>
## [1.0.2](https://github.com/istanbuljs/istanbul-lib-hook/compare/istanbul-lib-hook@1.0.0...istanbul-lib-hook@1.0.2) (2017-03-21)

<a name="1.0.0"></a>
# [1.0.0](https://github.com/istanbuljs/istanbul-lib-hook/compare/v1.0.0-alpha.3...v1.0.0) (2017-01-17)


### Bug Fixes

* update append-transform to version that fixes issues run into by ts-node ([f4aaf79](https://github.com/istanbuljs/istanbul-lib-hook/commit/f4aaf79))
