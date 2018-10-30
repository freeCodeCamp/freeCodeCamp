# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="3.3.2"></a>
## [3.3.2](https://github.com/kelektiv/node-uuid/compare/v3.3.1...v3.3.2) (2018-06-28)


### Bug Fixes

* typo ([305d877](https://github.com/kelektiv/node-uuid/commit/305d877))



<a name="3.3.1"></a>
## [3.3.1](https://github.com/kelektiv/node-uuid/compare/v3.3.0...v3.3.1) (2018-06-28)


### Bug Fixes

* fix [#284](https://github.com/kelektiv/node-uuid/issues/284) by setting function name in try-catch ([f2a60f2](https://github.com/kelektiv/node-uuid/commit/f2a60f2))



<a name="3.3.0"></a>
# [3.3.0](https://github.com/kelektiv/node-uuid/compare/v3.2.1...v3.3.0) (2018-06-22)


### Bug Fixes

* assignment to readonly property to allow running in strict mode ([#270](https://github.com/kelektiv/node-uuid/issues/270)) ([d062fdc](https://github.com/kelektiv/node-uuid/commit/d062fdc))
* fix [#229](https://github.com/kelektiv/node-uuid/issues/229) ([c9684d4](https://github.com/kelektiv/node-uuid/commit/c9684d4))
* Get correct version of IE11 crypto ([#274](https://github.com/kelektiv/node-uuid/issues/274)) ([153d331](https://github.com/kelektiv/node-uuid/commit/153d331))
* mem issue when generating uuid ([#267](https://github.com/kelektiv/node-uuid/issues/267)) ([c47702c](https://github.com/kelektiv/node-uuid/commit/c47702c))

### Features

* enforce Conventional Commit style commit messages ([#282](https://github.com/kelektiv/node-uuid/issues/282)) ([cc9a182](https://github.com/kelektiv/node-uuid/commit/cc9a182))


<a name="3.2.1"></a>
## [3.2.1](https://github.com/kelektiv/node-uuid/compare/v3.2.0...v3.2.1) (2018-01-16)


### Bug Fixes

* use msCrypto if available. Fixes [#241](https://github.com/kelektiv/node-uuid/issues/241) ([#247](https://github.com/kelektiv/node-uuid/issues/247)) ([1fef18b](https://github.com/kelektiv/node-uuid/commit/1fef18b))



<a name="3.2.0"></a>
# [3.2.0](https://github.com/kelektiv/node-uuid/compare/v3.1.0...v3.2.0) (2018-01-16)


### Bug Fixes

* remove mistakenly added typescript dependency, rollback version (standard-version will auto-increment) ([09fa824](https://github.com/kelektiv/node-uuid/commit/09fa824))
* use msCrypto if available. Fixes [#241](https://github.com/kelektiv/node-uuid/issues/241) ([#247](https://github.com/kelektiv/node-uuid/issues/247)) ([1fef18b](https://github.com/kelektiv/node-uuid/commit/1fef18b))


### Features

* Add v3 Support ([#217](https://github.com/kelektiv/node-uuid/issues/217)) ([d94f726](https://github.com/kelektiv/node-uuid/commit/d94f726))


# [3.1.0](https://github.com/kelektiv/node-uuid/compare/v3.1.0...v3.0.1) (2017-06-17)

### Bug Fixes

* (fix) Add .npmignore file to exclude test/ and other non-essential files from packing. (#183)
* Fix typo (#178)
* Simple typo fix (#165)

### Features
* v5 support in CLI (#197)
* V5 support (#188)


# 3.0.1 (2016-11-28)

* split uuid versions into separate files


# 3.0.0 (2016-11-17)

* remove .parse and .unparse


# 2.0.0

* Removed uuid.BufferClass


# 1.4.0

* Improved module context detection
* Removed public RNG functions


# 1.3.2

* Improve tests and handling of v1() options (Issue #24)
* Expose RNG option to allow for perf testing with different generators


# 1.3.0

* Support for version 1 ids, thanks to [@ctavan](https://github.com/ctavan)!
* Support for node.js crypto API
* De-emphasizing performance in favor of a) cryptographic quality PRNGs where available and b) more manageable code
