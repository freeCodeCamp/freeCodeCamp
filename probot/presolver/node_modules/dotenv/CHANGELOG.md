# Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased]

## [6.1.0] - 2018-10-08

### Added

- `debug` option for `config` and `parse` methods will turn on logging

## [6.0.0] - 2018-06-02

### Changed

- *Breaking:* drop support for Node v4 ([#304](https://github.com/motdotla/dotenv/pull/304))

## [5.0.0] - 2018-01-29

### Added

- Testing against Node v8 and v9
- Documentation on trim behavior of values
- Documentation on how to use with `import`

### Changed

- *Breaking*: default `path` is now `path.resolve(process.cwd(), '.env')`
- *Breaking*: does not write over keys already in `process.env` if the key has a falsy value
- using `const` and `let` instead of `var`

### Removed

- Testing aginst Node v7


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

[Unreleased]: https://github.com/motdotla/dotenv/compare/v6.1.0...HEAD
[6.1.0]: https://github.com/motdotla/dotenv/compare/v6.0.0...v6.1.0
[6.0.0]: https://github.com/motdotla/dotenv/compare/v5.0.0...v6.0.0
[5.0.0]: https://github.com/motdotla/dotenv/compare/v4.0.0...v5.0.0
[4.0.0]: https://github.com/motdotla/dotenv/compare/v3.0.0...v4.0.0
[3.0.0]: https://github.com/motdotla/dotenv/compare/v2.0.0...v3.0.0
[2.0.0]: https://github.com/motdotla/dotenv/compare/v1.2.0...v2.0.0
[1.2.0]: https://github.com/motdotla/dotenv/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/motdotla/dotenv/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/motdotla/dotenv/compare/v0.4.0...v1.0.0
