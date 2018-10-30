# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="8.1.0"></a>
# [8.1.0](https://github.com/yargs/yargs-parser/compare/v8.0.0...v8.1.0) (2017-12-20)


### Bug Fixes

* allow null config values ([#108](https://github.com/yargs/yargs-parser/issues/108)) ([d8b14f9](https://github.com/yargs/yargs-parser/commit/d8b14f9))
* ensure consistent parsing of dot-notation arguments ([#102](https://github.com/yargs/yargs-parser/issues/102)) ([c9bd79c](https://github.com/yargs/yargs-parser/commit/c9bd79c))
* implement [@antoniom](https://github.com/antoniom)'s fix for camel-case expansion ([3087e1d](https://github.com/yargs/yargs-parser/commit/3087e1d))
* only run coercion functions once, despite aliases. ([#76](https://github.com/yargs/yargs-parser/issues/76)) ([#103](https://github.com/yargs/yargs-parser/issues/103)) ([507aaef](https://github.com/yargs/yargs-parser/commit/507aaef))
* scientific notation circumvented bounds check ([#110](https://github.com/yargs/yargs-parser/issues/110)) ([3571f57](https://github.com/yargs/yargs-parser/commit/3571f57))
* tokenizer should ignore spaces at the beginning of the argString ([#106](https://github.com/yargs/yargs-parser/issues/106)) ([f34ead9](https://github.com/yargs/yargs-parser/commit/f34ead9))


### Features

* make combining arrays a configurable option ([#111](https://github.com/yargs/yargs-parser/issues/111)) ([c8bf536](https://github.com/yargs/yargs-parser/commit/c8bf536))
* merge array from arguments with array from config ([#83](https://github.com/yargs/yargs-parser/issues/83)) ([806ddd6](https://github.com/yargs/yargs-parser/commit/806ddd6))



<a name="8.0.0"></a>
# [8.0.0](https://github.com/yargs/yargs-parser/compare/v7.0.0...v8.0.0) (2017-10-05)


### Bug Fixes

* Ignore multiple spaces between arguments. ([#100](https://github.com/yargs/yargs-parser/issues/100)) ([d137227](https://github.com/yargs/yargs-parser/commit/d137227))


### Features

* allow configuration of prefix for boolean negation ([#94](https://github.com/yargs/yargs-parser/issues/94)) ([00bde7d](https://github.com/yargs/yargs-parser/commit/00bde7d))
* reworking how numbers are parsed ([#104](https://github.com/yargs/yargs-parser/issues/104)) ([fba00eb](https://github.com/yargs/yargs-parser/commit/fba00eb))


### BREAKING CHANGES

* strings that fail `Number.isSafeInteger()` are no longer coerced into numbers. 



<a name="7.0.0"></a>
# [7.0.0](https://github.com/yargs/yargs-parser/compare/v6.0.1...v7.0.0) (2017-05-02)


### Chores

* revert populate-- logic ([#91](https://github.com/yargs/yargs-parser/issues/91)) ([6003e6d](https://github.com/yargs/yargs-parser/commit/6003e6d))


### BREAKING CHANGES

* populate-- now defaults to false.



<a name="6.0.1"></a>
## [6.0.1](https://github.com/yargs/yargs-parser/compare/v6.0.0...v6.0.1) (2017-05-01)


### Bug Fixes

* default '--' to undefined when not provided; this is closer to the array API ([#90](https://github.com/yargs/yargs-parser/issues/90)) ([4e739cc](https://github.com/yargs/yargs-parser/commit/4e739cc))



<a name="6.0.0"></a>
# [6.0.0](https://github.com/yargs/yargs-parser/compare/v4.2.1...v6.0.0) (2017-05-01)


### Bug Fixes

* environment variables should take precedence over config file ([#81](https://github.com/yargs/yargs-parser/issues/81)) ([76cee1f](https://github.com/yargs/yargs-parser/commit/76cee1f))
* parsing hints should apply for dot notation keys ([#86](https://github.com/yargs/yargs-parser/issues/86)) ([3e47d62](https://github.com/yargs/yargs-parser/commit/3e47d62))


### Chores

* upgrade to newest version of camelcase ([#87](https://github.com/yargs/yargs-parser/issues/87)) ([f1903aa](https://github.com/yargs/yargs-parser/commit/f1903aa))


### Features

* add -- option which allows arguments after the -- flag to be returned separated from positional arguments ([#84](https://github.com/yargs/yargs-parser/issues/84)) ([2572ca8](https://github.com/yargs/yargs-parser/commit/2572ca8))
* when parsing stops, we now populate "--" by default ([#88](https://github.com/yargs/yargs-parser/issues/88)) ([cd666db](https://github.com/yargs/yargs-parser/commit/cd666db))


### BREAKING CHANGES

* rather than placing arguments in "_", when parsing is stopped via "--"; we now populate an array called "--" by default.
* camelcase now requires Node 4+.
* environment variables will now override config files (args, env, config-file, config-object)



<a name="5.0.0"></a>
# [5.0.0](https://github.com/yargs/yargs-parser/compare/v4.2.1...v5.0.0) (2017-02-18)


### Bug Fixes

* environment variables should take precedence over config file ([#81](https://github.com/yargs/yargs-parser/issues/81)) ([76cee1f](https://github.com/yargs/yargs-parser/commit/76cee1f))


### BREAKING CHANGES

* environment variables will now override config files (args, env, config-file, config-object)



<a name="4.2.1"></a>
## [4.2.1](https://github.com/yargs/yargs-parser/compare/v4.2.0...v4.2.1) (2017-01-02)


### Bug Fixes

* flatten/duplicate regression ([#75](https://github.com/yargs/yargs-parser/issues/75)) ([68d68a0](https://github.com/yargs/yargs-parser/commit/68d68a0))



<a name="4.2.0"></a>
# [4.2.0](https://github.com/yargs/yargs-parser/compare/v4.1.0...v4.2.0) (2016-12-01)


### Bug Fixes

* inner objects in configs had their keys appended to top-level key when dot-notation was disabled ([#72](https://github.com/yargs/yargs-parser/issues/72)) ([0b1b5f9](https://github.com/yargs/yargs-parser/commit/0b1b5f9))


### Features

* allow multiple arrays to be provided, rather than always combining ([#71](https://github.com/yargs/yargs-parser/issues/71)) ([0f0fb2d](https://github.com/yargs/yargs-parser/commit/0f0fb2d))



<a name="4.1.0"></a>
# [4.1.0](https://github.com/yargs/yargs-parser/compare/v4.0.2...v4.1.0) (2016-11-07)


### Features

* apply coercions to default options ([#65](https://github.com/yargs/yargs-parser/issues/65)) ([c79052b](https://github.com/yargs/yargs-parser/commit/c79052b))
* handle dot notation boolean options ([#63](https://github.com/yargs/yargs-parser/issues/63)) ([02c3545](https://github.com/yargs/yargs-parser/commit/02c3545))



<a name="4.0.2"></a>
## [4.0.2](https://github.com/yargs/yargs-parser/compare/v4.0.1...v4.0.2) (2016-09-30)


### Bug Fixes

* whoops, let's make the assign not change the Object key order ([29d069a](https://github.com/yargs/yargs-parser/commit/29d069a))



<a name="4.0.1"></a>
## [4.0.1](https://github.com/yargs/yargs-parser/compare/v4.0.0...v4.0.1) (2016-09-30)


### Bug Fixes

* lodash.assign was deprecated ([#59](https://github.com/yargs/yargs-parser/issues/59)) ([5e7eb11](https://github.com/yargs/yargs-parser/commit/5e7eb11))



<a name="4.0.0"></a>
# [4.0.0](https://github.com/yargs/yargs-parser/compare/v3.2.0...v4.0.0) (2016-09-26)


### Bug Fixes

* coerce should be applied to the final objects and arrays created ([#57](https://github.com/yargs/yargs-parser/issues/57)) ([4ca69da](https://github.com/yargs/yargs-parser/commit/4ca69da))


### BREAKING CHANGES

* coerce is no longer applied to individual arguments in an implicit array.



<a name="3.2.0"></a>
# [3.2.0](https://github.com/yargs/yargs-parser/compare/v3.1.0...v3.2.0) (2016-08-13)


### Features

* coerce full array instead of each element ([#51](https://github.com/yargs/yargs-parser/issues/51)) ([cc4dc56](https://github.com/yargs/yargs-parser/commit/cc4dc56))



<a name="3.1.0"></a>
# [3.1.0](https://github.com/yargs/yargs-parser/compare/v3.0.0...v3.1.0) (2016-08-09)


### Bug Fixes

* address pkgConf parsing bug outlined in [#37](https://github.com/yargs/yargs-parser/issues/37) ([#45](https://github.com/yargs/yargs-parser/issues/45)) ([be76ee6](https://github.com/yargs/yargs-parser/commit/be76ee6))
* better parsing of negative values ([#44](https://github.com/yargs/yargs-parser/issues/44)) ([2e43692](https://github.com/yargs/yargs-parser/commit/2e43692))
* check aliases when guessing defaults for arguments fixes [#41](https://github.com/yargs/yargs-parser/issues/41) ([#43](https://github.com/yargs/yargs-parser/issues/43)) ([f3e4616](https://github.com/yargs/yargs-parser/commit/f3e4616))


### Features

* added coerce option, for providing specialized argument parsing ([#42](https://github.com/yargs/yargs-parser/issues/42)) ([7b49cd2](https://github.com/yargs/yargs-parser/commit/7b49cd2))



<a name="3.0.0"></a>
# [3.0.0](https://github.com/yargs/yargs-parser/compare/v2.4.1...v3.0.0) (2016-08-07)


### Bug Fixes

* parsing issue with numeric character in group of options ([#19](https://github.com/yargs/yargs-parser/issues/19)) ([f743236](https://github.com/yargs/yargs-parser/commit/f743236))
* upgraded lodash.assign ([5d7fdf4](https://github.com/yargs/yargs-parser/commit/5d7fdf4))

### BREAKING CHANGES

* subtle change to how values are parsed in a group of single-character arguments.
* _first released in 3.1.0, better handling of negative values should be considered a breaking change._



<a name="2.4.1"></a>
## [2.4.1](https://github.com/yargs/yargs-parser/compare/v2.4.0...v2.4.1) (2016-07-16)


### Bug Fixes

* **count:** do not increment a default value ([#39](https://github.com/yargs/yargs-parser/issues/39)) ([b04a189](https://github.com/yargs/yargs-parser/commit/b04a189))



<a name="2.4.0"></a>
# [2.4.0](https://github.com/yargs/yargs-parser/compare/v2.3.0...v2.4.0) (2016-04-11)


### Features

* **environment:** Support nested options in environment variables ([#26](https://github.com/yargs/yargs-parser/issues/26)) thanks [@elas7](https://github.com/elas7) \o/ ([020778b](https://github.com/yargs/yargs-parser/commit/020778b))



<a name="2.3.0"></a>
# [2.3.0](https://github.com/yargs/yargs-parser/compare/v2.2.0...v2.3.0) (2016-04-09)


### Bug Fixes

* **boolean:** fix for boolean options with non boolean defaults (#20) ([2dbe86b](https://github.com/yargs/yargs-parser/commit/2dbe86b)), closes [(#20](https://github.com/(/issues/20)
* **package:** remove tests from tarball ([0353c0d](https://github.com/yargs/yargs-parser/commit/0353c0d))
* **parsing:** handle calling short option with an empty string as the next value. ([a867165](https://github.com/yargs/yargs-parser/commit/a867165))
* boolean flag when next value contains the strings 'true' or 'false'. ([69941a6](https://github.com/yargs/yargs-parser/commit/69941a6))
* update dependencies; add standard-version bin for next release (#24) ([822d9d5](https://github.com/yargs/yargs-parser/commit/822d9d5))

### Features

* **configuration:** Allow to pass configuration objects to yargs-parser ([0780900](https://github.com/yargs/yargs-parser/commit/0780900))
* **normalize:** allow normalize to work with arrays ([e0eaa1a](https://github.com/yargs/yargs-parser/commit/e0eaa1a))
