# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="1.2.1"></a>
## [1.2.1](https://github.com/istanbuljs/istanbuljs/compare/istanbul-lib-coverage@1.1.2...istanbul-lib-coverage@1.2.1) (2018-09-05)


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




<a name="1.1.2"></a>
## [1.1.2](https://github.com/istanbuljs/istanbuljs/compare/istanbul-lib-coverage@1.1.1...istanbul-lib-coverage@1.1.2) (2018-02-13)




**Note:** Version bump only for package istanbul-lib-coverage

<a name="1.1.1"></a>
## [1.1.1](https://github.com/istanbuljs/istanbuljs/compare/istanbul-lib-coverage@1.1.0...istanbul-lib-coverage@1.1.1) (2017-05-27)




<a name="1.1.0"></a>
# [1.1.0](https://github.com/istanbuljs/istanbul-lib-coverage/compare/istanbul-lib-coverage@1.0.2...istanbul-lib-coverage@1.1.0) (2017-04-29)


### Bug Fixes

* getBranchCoverageByLine() was looking for line coverage using wrong object structure ([bf36658](https://github.com/istanbuljs/istanbul-lib-coverage/commit/bf36658))


### Features

* add possibility to filter coverage maps when running reports post-hoc ([#24](https://github.com/istanbuljs/istanbuljs/issues/24)) ([e1c99d6](https://github.com/istanbuljs/istanbul-lib-coverage/commit/e1c99d6))




<a name="1.0.2"></a>
## [1.0.2](https://github.com/istanbuljs/istanbul-lib-coverage/compare/istanbul-lib-coverage@1.0.1...istanbul-lib-coverage@1.0.2) (2017-03-27)

<a name="1.0.1"></a>
## [1.0.1](https://github.com/istanbuljs/istanbul-lib-coverage/compare/v1.0.0...v1.0.1) (2017-01-18)


### Bug Fixes

* handle edge-case surrounding merging two file coverage reports ([22e154c](https://github.com/istanbuljs/istanbul-lib-coverage/commit/22e154c))



<a name="1.0.0"></a>
# [1.0.0](https://github.com/istanbuljs/istanbul-lib-coverage/compare/v1.0.0-alpha.3...v1.0.0) (2016-08-12)


### Bug Fixes

* guard against missing statement ([76aad99](https://github.com/istanbuljs/istanbul-lib-coverage/commit/76aad99))
