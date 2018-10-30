# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="1.5.1"></a>
## [1.5.1](https://github.com/istanbuljs/istanbuljs/compare/istanbul-reports@1.1.4...istanbul-reports@1.5.1) (2018-09-05)


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




<a name="1.1.4"></a>
## [1.1.4](https://github.com/istanbuljs/istanbuljs/compare/istanbul-reports@1.1.3...istanbul-reports@1.1.4) (2018-02-13)


### Bug Fixes

* changed column header from "Uncovered Lines" to "Uncovered Line #s" ([#138](https://github.com/istanbuljs/istanbuljs/issues/138)) ([7ba7760](https://github.com/istanbuljs/istanbuljs/commit/7ba7760))




<a name="1.1.3"></a>
## [1.1.3](https://github.com/istanbuljs/istanbuljs/compare/istanbul-reports@1.1.2...istanbul-reports@1.1.3) (2017-10-21)




**Note:** Version bump only for package istanbul-reports

<a name="1.1.2"></a>
## [1.1.2](https://github.com/istanbuljs/istanbuljs/compare/istanbul-reports@1.1.1...istanbul-reports@1.1.2) (2017-08-26)


### Bug Fixes

* prevent branch highlighting from extending pass the end of a line ([#80](https://github.com/istanbuljs/istanbuljs/issues/80)) ([f490377](https://github.com/istanbuljs/istanbuljs/commit/f490377))




<a name="1.1.1"></a>
## [1.1.1](https://github.com/istanbuljs/istanbuljs/compare/istanbul-reports@1.1.0...istanbul-reports@1.1.1) (2017-05-27)




<a name="1.1.0"></a>
# [1.1.0](https://github.com/istanbuljs/istanbul-reports/compare/istanbul-reports@1.0.2...istanbul-reports@1.1.0) (2017-04-29)


### Features

* once 100% line coverage is achieved, missing branch coverage is now shown in text report ([#45](https://github.com/istanbuljs/istanbuljs/issues/45)) ([8a809f8](https://github.com/istanbuljs/istanbul-reports/commit/8a809f8))




<a name="1.0.2"></a>
## [1.0.2](https://github.com/istanbuljs/istanbul-reports/compare/istanbul-reports@1.0.1...istanbul-reports@1.0.2) (2017-03-27)


### Bug Fixes

* **windows:** preserve escape char of json-summary key path ([4d71d5e](https://github.com/istanbuljs/istanbul-reports/commit/4d71d5e))

<a name="1.0.1"></a>
## [1.0.1](https://github.com/istanbuljs/istanbul-reports/compare/v1.0.0...v1.0.1) (2017-01-29)


### Bug Fixes

* add files key to package.json ([#17](https://github.com/istanbuljs/istanbul-reports/issues/17)) ([141f801](https://github.com/istanbuljs/istanbul-reports/commit/141f801))



<a name="1.0.0"></a>
# [1.0.0](https://github.com/istanbuljs/istanbul-reports/compare/v1.0.0-alpha.8...v1.0.0) (2016-10-17)


### Bug Fixes

* fail gracefully if structuredText[startLine] is undefined ([#10](https://github.com/istanbuljs/istanbul-reports/issues/10)) ([bed1d13](https://github.com/istanbuljs/istanbul-reports/commit/bed1d13))
* preserve escape char of json key path on Windows ([#12](https://github.com/istanbuljs/istanbul-reports/issues/12)) ([4e5266e](https://github.com/istanbuljs/istanbul-reports/commit/4e5266e))
* skip branch if meta does not exist (fixes speedskater/babel-plugin-rewire[#165](https://github.com/istanbuljs/istanbul-reports/issues/165)) ([#11](https://github.com/istanbuljs/istanbul-reports/issues/11)) ([62bae2f](https://github.com/istanbuljs/istanbul-reports/commit/62bae2f))
* Teamcity reporter modified to send proper coverage values ([#8](https://github.com/istanbuljs/istanbul-reports/issues/8)) ([4147f50](https://github.com/istanbuljs/istanbul-reports/commit/4147f50))
