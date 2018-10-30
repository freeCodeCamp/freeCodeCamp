# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="1.1.5"></a>
## [1.1.5](https://github.com/istanbuljs/istanbuljs/compare/istanbul-lib-report@1.1.3...istanbul-lib-report@1.1.5) (2018-09-05)


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




<a name="1.1.3"></a>
## [1.1.3](https://github.com/istanbuljs/istanbuljs/compare/istanbul-lib-report@1.1.2...istanbul-lib-report@1.1.3) (2018-02-13)




**Note:** Version bump only for package istanbul-lib-report

<a name="1.1.2"></a>
## [1.1.2](https://github.com/istanbuljs/istanbuljs/compare/istanbul-lib-report@1.1.1...istanbul-lib-report@1.1.2) (2017-10-21)


### Bug Fixes

* remove call to mkdirp.sync() in constructor so when used for ConsoleWriter ([#104](https://github.com/istanbuljs/istanbuljs/issues/104)) ([58eb79d](https://github.com/istanbuljs/istanbuljs/commit/58eb79d))




<a name="1.1.1"></a>
## [1.1.1](https://github.com/istanbuljs/istanbuljs/compare/istanbul-lib-report@1.1.0...istanbul-lib-report@1.1.1) (2017-05-27)




<a name="1.1.0"></a>
# [1.1.0](https://github.com/istanbuljs/istanbul-lib-report/compare/istanbul-lib-report@1.0.0...istanbul-lib-report@1.1.0) (2017-04-29)


### Features

* once 100% line coverage is achieved, missing branch coverage is now shown in text report ([#45](https://github.com/istanbuljs/istanbuljs/issues/45)) ([8a809f8](https://github.com/istanbuljs/istanbul-lib-report/commit/8a809f8))




<a name="1.0.0"></a>
# [1.0.0](https://github.com/istanbuljs/istanbul-lib-report/compare/istanbul-lib-report@1.0.0-alpha.3...istanbul-lib-report@1.0.0) (2017-03-27)
