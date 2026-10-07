# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [7.0.3](https://github.com/uuidjs/uuid/compare/v7.0.2...v7.0.3) (2020-03-31)

### Bug Fixes

- make deep require deprecation warning work in browsers ([#409](https://github.com/uuidjs/uuid/issues/409)) ([4b71107](https://github.com/uuidjs/uuid/commit/4b71107d8c0d2ef56861ede6403fc9dc35a1e6bf)), closes [#408](https://github.com/uuidjs/uuid/issues/408)

### [7.0.2](https://github.com/uuidjs/uuid/compare/v7.0.1...v7.0.2) (2020-03-04)

### Bug Fixes

- make access to msCrypto consistent ([#393](https://github.com/uuidjs/uuid/issues/393)) ([8bf2a20](https://github.com/uuidjs/uuid/commit/8bf2a20f3565df743da7215eebdbada9d2df118c))
- simplify link in deprecation warning ([#391](https://github.com/uuidjs/uuid/issues/391)) ([bb2c8e4](https://github.com/uuidjs/uuid/commit/bb2c8e4e9f4c5f9c1eaaf3ea59710c633cd90cb7))
- update links to match content in readme ([#386](https://github.com/uuidjs/uuid/issues/386)) ([44f2f86](https://github.com/uuidjs/uuid/commit/44f2f86e9d2bbf14ee5f0f00f72a3db1292666d4))

### [7.0.1](https://github.com/uuidjs/uuid/compare/v7.0.0...v7.0.1) (2020-02-25)

### Bug Fixes

- clean up esm builds for node and browser ([#383](https://github.com/uuidjs/uuid/issues/383)) ([59e6a49](https://github.com/uuidjs/uuid/commit/59e6a49e7ce7b3e8fb0f3ee52b9daae72af467dc))
- provide browser versions independent from module system ([#380](https://github.com/uuidjs/uuid/issues/380)) ([4344a22](https://github.com/uuidjs/uuid/commit/4344a22e7aed33be8627eeaaf05360f256a21753)), closes [#378](https://github.com/uuidjs/uuid/issues/378)

## [7.0.0](https://github.com/uuidjs/uuid/compare/v3.4.0...v7.0.0) (2020-02-24)

### ⚠ BREAKING CHANGES

- The default export, which used to be the v4() method
  but which was already discouraged in v3.x of this library, has been
  removed.
- Explicitly note that deep imports of the different uuid
  version functions are deprecated and no longer encouraged and that
  ECMAScript module named imports should be used instead.
  Emit a deprecation warning for people who deep-require the different
  algorithm variants.
- Remove builtin support for insecure random number
  generators in the browser. Users who want that will have to supply their
  own random number generator function.
- Remove support for generating v3 and v5 UUIDs in
  Node.js<4.x
- Convert code base to ECMAScript Modules (ESM) and
  release CommonJS build for node and ESM build for browser bundlers.

### Features

- add UMD build to npm package ([#357](https://github.com/uuidjs/uuid/issues/357)) ([4e75adf](https://github.com/uuidjs/uuid/commit/4e75adf435196f28e3fbbe0185d654b5ded7ca2c)), closes [#345](https://github.com/uuidjs/uuid/issues/345)
- add various es module and CommonJS examples ([b238510](https://github.com/uuidjs/uuid/commit/b238510bf352463521f74bab175a3af9b7a42555))
- ensure that docs are up-to-date in CI ([ee5e77d](https://github.com/uuidjs/uuid/commit/ee5e77db547474f5a8f23d6c857a6d399209986b))
- hybrid CommonJS & ECMAScript modules build ([a3f078f](https://github.com/uuidjs/uuid/commit/a3f078faa0baff69ab41aed08e041f8f9c8993d0))
- remove insecure fallback random number generator ([3a5842b](https://github.com/uuidjs/uuid/commit/3a5842b141a6e5de0ae338f391661e6b84b167c9)), closes [#173](https://github.com/uuidjs/uuid/issues/173)
- remove support for pre Node.js v4 Buffer API ([#356](https://github.com/uuidjs/uuid/issues/356)) ([b59b5c5](https://github.com/uuidjs/uuid/commit/b59b5c5ecad271c5453f1a156f011671f6d35627))
- rename repository to github:uuidjs/uuid ([#351](https://github.com/uuidjs/uuid/issues/351)) ([c37a518](https://github.com/uuidjs/uuid/commit/c37a518e367ac4b6d0aa62dba1bc6ce9e85020f7)), closes [#338](https://github.com/uuidjs/uuid/issues/338)

### Bug Fixes

- add deep-require proxies for local testing and adjust tests ([#365](https://github.com/uuidjs/uuid/issues/365)) ([7fedc79](https://github.com/uuidjs/uuid/commit/7fedc79ac8fda4bfd1c566c7f05ef4ac13b2db48))
- add note about removal of default export ([#372](https://github.com/uuidjs/uuid/issues/372)) ([12749b7](https://github.com/uuidjs/uuid/commit/12749b700eb49db8a9759fd306d8be05dbfbd58c)), closes [#370](https://github.com/uuidjs/uuid/issues/370)
- deprecated deep requiring of the different algorithm versions ([#361](https://github.com/uuidjs/uuid/issues/361)) ([c0bdf15](https://github.com/uuidjs/uuid/commit/c0bdf15e417639b1aeb0b247b2fb11f7a0a26b23))

## [3.4.0](https://github.com/uuidjs/uuid/compare/v3.3.3...v3.4.0) (2020-01-16)

### Features

- rename repository to github:uuidjs/uuid ([#351](https://github.com/uuidjs/uuid/issues/351)) ([e2d7314](https://github.com/uuidjs/uuid/commit/e2d7314)), closes [#338](https://github.com/uuidjs/uuid/issues/338)

## [3.3.3](https://github.com/uuidjs/uuid/compare/v3.3.2...v3.3.3) (2019-08-19)

### Bug Fixes

- no longer run ci tests on node v4
- upgrade dependencies

## [3.3.2](https://github.com/uuidjs/uuid/compare/v3.3.1...v3.3.2) (2018-06-28)

### Bug Fixes

- typo ([305d877](https://github.com/uuidjs/uuid/commit/305d877))

## [3.3.1](https://github.com/uuidjs/uuid/compare/v3.3.0...v3.3.1) (2018-06-28)

### Bug Fixes

- fix [#284](https://github.com/uuidjs/uuid/issues/284) by setting function name in try-catch ([f2a60f2](https://github.com/uuidjs/uuid/commit/f2a60f2))

# [3.3.0](https://github.com/uuidjs/uuid/compare/v3.2.1...v3.3.0) (2018-06-22)

### Bug Fixes

- assignment to readonly property to allow running in strict mode ([#270](https://github.com/uuidjs/uuid/issues/270)) ([d062fdc](https://github.com/uuidjs/uuid/commit/d062fdc))
- fix [#229](https://github.com/uuidjs/uuid/issues/229) ([c9684d4](https://github.com/uuidjs/uuid/commit/c9684d4))
- Get correct version of IE11 crypto ([#274](https://github.com/uuidjs/uuid/issues/274)) ([153d331](https://github.com/uuidjs/uuid/commit/153d331))
- mem issue when generating uuid ([#267](https://github.com/uuidjs/uuid/issues/267)) ([c47702c](https://github.com/uuidjs/uuid/commit/c47702c))

### Features

- enforce Conventional Commit style commit messages ([#282](https://github.com/uuidjs/uuid/issues/282)) ([cc9a182](https://github.com/uuidjs/uuid/commit/cc9a182))

## [3.2.1](https://github.com/uuidjs/uuid/compare/v3.2.0...v3.2.1) (2018-01-16)

### Bug Fixes

- use msCrypto if available. Fixes [#241](https://github.com/uuidjs/uuid/issues/241) ([#247](https://github.com/uuidjs/uuid/issues/247)) ([1fef18b](https://github.com/uuidjs/uuid/commit/1fef18b))

# [3.2.0](https://github.com/uuidjs/uuid/compare/v3.1.0...v3.2.0) (2018-01-16)

### Bug Fixes

- remove mistakenly added typescript dependency, rollback version (standard-version will auto-increment) ([09fa824](https://github.com/uuidjs/uuid/commit/09fa824))
- use msCrypto if available. Fixes [#241](https://github.com/uuidjs/uuid/issues/241) ([#247](https://github.com/uuidjs/uuid/issues/247)) ([1fef18b](https://github.com/uuidjs/uuid/commit/1fef18b))

### Features

- Add v3 Support ([#217](https://github.com/uuidjs/uuid/issues/217)) ([d94f726](https://github.com/uuidjs/uuid/commit/d94f726))

# [3.1.0](https://github.com/uuidjs/uuid/compare/v3.1.0...v3.0.1) (2017-06-17)

### Bug Fixes

- (fix) Add .npmignore file to exclude test/ and other non-essential files from packing. (#183)
- Fix typo (#178)
- Simple typo fix (#165)

### Features

- v5 support in CLI (#197)
- V5 support (#188)

# 3.0.1 (2016-11-28)

- split uuid versions into separate files

# 3.0.0 (2016-11-17)

- remove .parse and .unparse

# 2.0.0

- Removed uuid.BufferClass

# 1.4.0

- Improved module context detection
- Removed public RNG functions

# 1.3.2

- Improve tests and handling of v1() options (Issue #24)
- Expose RNG option to allow for perf testing with different generators

# 1.3.0

- Support for version 1 ids, thanks to [@ctavan](https://github.com/ctavan)!
- Support for node.js crypto API
- De-emphasizing performance in favor of a) cryptographic quality PRNGs where available and b) more manageable code
