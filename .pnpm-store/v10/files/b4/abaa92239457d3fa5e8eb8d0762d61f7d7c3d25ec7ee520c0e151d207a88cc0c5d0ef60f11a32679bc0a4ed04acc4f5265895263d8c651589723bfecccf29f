# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [8.6.0](https://github.com/motdotla/dotenv/compare/v8.5.1...v8.6.0) (2021-05-05)

### Added

- define package.json in exports

## [8.5.1](https://github.com/motdotla/dotenv/compare/v8.5.0...v8.5.1) (2021-05-05)

### Changed

- updated dev dependencies via npm audit

## [8.5.0](https://github.com/motdotla/dotenv/compare/v8.4.0...v8.5.0) (2021-05-05)

### Added

- allow for `import "dotenv/config"`

## [8.4.0](https://github.com/motdotla/dotenv/compare/v8.3.0...v8.4.0) (2021-05-05)

### Changed

- point to exact types file to work with VS Code

## [8.3.0](https://github.com/motdotla/dotenv/compare/v8.2.0...v8.3.0) (2021-05-05)

### Changed

- _Breaking:_ drop support for Node v8

## [8.2.0](https://github.com/motdotla/dotenv/compare/v8.1.0...v8.2.0) (2019-10-16)

### Added

- TypeScript types

## [8.1.0](https://github.com/motdotla/dotenv/compare/v8.0.0...v8.1.0) (2019-08-18)

### Changed

- _Breaking:_ drop support for Node v6 ([#392](https://github.com/motdotla/dotenv/issues/392))

# [8.0.0](https://github.com/motdotla/dotenv/compare/v7.0.0...v8.0.0) (2019-05-02)

### Changed

- _Breaking:_ drop support for Node v6 ([#302](https://github.com/motdotla/dotenv/issues/392))

## [7.0.0] - 2019-03-12

### Fixed

- Fix removing unbalanced quotes ([#376](https://github.com/motdotla/dotenv/pull/376))

### Removed

- Removed `load` alias for `config` for consistency throughout code and documentation.

## [6.2.0] - 2018-12-03

### Added

- Support preload configuration via environment variables ([#351](https://github.com/motdotla/dotenv/issues/351))

## [6.1.0] - 2018-10-08

### Added

- `debug` option for `config` and `parse` methods will turn on logging

## [6.0.0] - 2018-06-02

### Changed

- _Breaking:_ drop support for Node v4 ([#304](https://github.com/motdotla/dotenv/pull/304))

## [5.0.0] - 2018-01-29

### Added

- Testing against Node v8 and v9
- Documentation on trim behavior of values
- Documentation on how to use with `import`

### Changed

- _Breaking_: default `path` is now `path.resolve(process.cwd(), '.env')`
- _Breaking_: does not write over keys already in `process.env` if the key has a falsy value
- using `const` and `let` instead of `var`

### Removed

- Testing against Node v7

## [4.0.0] - 2016-12-23

### Changed

- Return Object with parsed content or error instead of false ([#165](https://github.com/motdotla/dotenv/pull/165)).

### Removed

- `verbose` option removed in favor of returning result.

## [3.0.0] - 2016-12-20

### Added

- `verbose` option will log any error messages. Off by default.
- parses email addresses correctly
- allow importing config method directly in ES6

### Changed

- Suppress error messages by default ([#154](https://github.com/motdotla/dotenv/pull/154))
- Ignoring more files for NPM to make package download smaller

### Fixed

- False positive test due to case-sensitive variable ([#124](https://github.com/motdotla/dotenv/pull/124))

### Removed

- `silent` option removed in favor of `verbose`

## [2.0.0] - 2016-01-20

### Added

- CHANGELOG to ["make it easier for users and contributors to see precisely what notable changes have been made between each release"](http://keepachangelog.com/). Linked to from README
- LICENSE to be more explicit about what was defined in `package.json`. Linked to from README
- Testing nodejs v4 on travis-ci
- added examples of how to use dotenv in different ways
- return parsed object on success rather than boolean true

### Changed

- README has shorter description not referencing ruby gem since we don't have or want feature parity

### Removed

- Variable expansion and escaping so environment variables are encouraged to be fully orthogonal

## [1.2.0] - 2015-06-20

### Added

- Preload hook to require dotenv without including it in your code

### Changed

- clarified license to be "BSD-2-Clause" in `package.json`

### Fixed

- retain spaces in string vars

## [1.1.0] - 2015-03-31

### Added

- Silent option to silence `console.log` when `.env` missing

## [1.0.0] - 2015-03-13

### Removed

- support for multiple `.env` files. should always use one `.env` file for the current environment

[7.0.0]: https://github.com/motdotla/dotenv/compare/v6.2.0...v7.0.0
[6.2.0]: https://github.com/motdotla/dotenv/compare/v6.1.0...v6.2.0
[6.1.0]: https://github.com/motdotla/dotenv/compare/v6.0.0...v6.1.0
[6.0.0]: https://github.com/motdotla/dotenv/compare/v5.0.0...v6.0.0
[5.0.0]: https://github.com/motdotla/dotenv/compare/v4.0.0...v5.0.0
[4.0.0]: https://github.com/motdotla/dotenv/compare/v3.0.0...v4.0.0
[3.0.0]: https://github.com/motdotla/dotenv/compare/v2.0.0...v3.0.0
[2.0.0]: https://github.com/motdotla/dotenv/compare/v1.2.0...v2.0.0
[1.2.0]: https://github.com/motdotla/dotenv/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/motdotla/dotenv/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/motdotla/dotenv/compare/v0.4.0...v1.0.0
