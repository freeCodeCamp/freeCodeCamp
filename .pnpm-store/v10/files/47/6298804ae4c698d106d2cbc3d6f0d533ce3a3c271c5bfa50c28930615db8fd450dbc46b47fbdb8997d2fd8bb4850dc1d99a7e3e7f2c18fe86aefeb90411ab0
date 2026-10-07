# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [Unreleased](https://github.com/motdotla/dotenv/compare/v16.0.3...master)

## [16.0.3](https://github.com/motdotla/dotenv/compare/v16.0.2...v16.0.3) (2022-09-29)

### Changed

- Added library version to debug logs ([#682](https://github.com/motdotla/dotenv/pull/682))

## [16.0.2](https://github.com/motdotla/dotenv/compare/v16.0.1...v16.0.2) (2022-08-30)

### Added

- Export `env-options.js` and `cli-options.js` in package.json for use with downstream [dotenv-expand](https://github.com/motdotla/dotenv-expand) module

## [16.0.1](https://github.com/motdotla/dotenv/compare/v16.0.0...v16.0.1) (2022-05-10)

### Changed

- Minor README clarifications
- Development ONLY: updated devDependencies as recommended for development only security risks ([#658](https://github.com/motdotla/dotenv/pull/658))

## [16.0.0](https://github.com/motdotla/dotenv/compare/v15.0.1...v16.0.0) (2022-02-02)

### Added

- _Breaking:_ Backtick support 🎉 ([#615](https://github.com/motdotla/dotenv/pull/615))

If you had values containing the backtick character, please quote those values with either single or double quotes.

## [15.0.1](https://github.com/motdotla/dotenv/compare/v15.0.0...v15.0.1) (2022-02-02)

### Changed

- Properly parse empty single or double quoted values 🐞 ([#614](https://github.com/motdotla/dotenv/pull/614))

## [15.0.0](https://github.com/motdotla/dotenv/compare/v14.3.2...v15.0.0) (2022-01-31)

`v15.0.0` is a major new release with some important breaking changes.

### Added

- _Breaking:_ Multiline parsing support (just works. no need for the flag.)

### Changed

- _Breaking:_ `#` marks the beginning of a comment (UNLESS the value is wrapped in quotes. Please update your `.env` files to wrap in quotes any values containing `#`. For example: `SECRET_HASH="something-with-a-#-hash"`).

..Understandably, (as some teams have noted) this is tedious to do across the entire team. To make it less tedious, we recommend using [dotenv cli](https://github.com/dotenv-org/cli) going forward. It's an optional plugin that will keep your `.env` files in sync between machines, environments, or team members.

### Removed

- _Breaking:_ Remove multiline option (just works out of the box now. no need for the flag.)

## [14.3.2](https://github.com/motdotla/dotenv/compare/v14.3.1...v14.3.2) (2022-01-25)

### Changed

- Preserve backwards compatibility on values containing `#` 🐞 ([#603](https://github.com/motdotla/dotenv/pull/603))

## [14.3.1](https://github.com/motdotla/dotenv/compare/v14.3.0...v14.3.1) (2022-01-25)

### Changed

- Preserve backwards compatibility on exports by re-introducing the prior in-place exports 🐞 ([#606](https://github.com/motdotla/dotenv/pull/606))

## [14.3.0](https://github.com/motdotla/dotenv/compare/v14.2.0...v14.3.0) (2022-01-24)

### Added

- Add `multiline` option 🎉 ([#486](https://github.com/motdotla/dotenv/pull/486))

## [14.2.0](https://github.com/motdotla/dotenv/compare/v14.1.1...v14.2.0) (2022-01-17)

### Added

- Add `dotenv_config_override` cli option
- Add `DOTENV_CONFIG_OVERRIDE` command line env option

## [14.1.1](https://github.com/motdotla/dotenv/compare/v14.1.0...v14.1.1) (2022-01-17)

### Added

- Add React gotcha to FAQ on README

## [14.1.0](https://github.com/motdotla/dotenv/compare/v14.0.1...v14.1.0) (2022-01-17)

### Added

- Add `override` option 🎉 ([#595](https://github.com/motdotla/dotenv/pull/595))

## [14.0.1](https://github.com/motdotla/dotenv/compare/v14.0.0...v14.0.1) (2022-01-16)

### Added

- Log error on failure to load `.env` file ([#594](https://github.com/motdotla/dotenv/pull/594))

## [14.0.0](https://github.com/motdotla/dotenv/compare/v13.0.1...v14.0.0) (2022-01-16)

### Added

- _Breaking:_ Support inline comments for the parser 🎉 ([#568](https://github.com/motdotla/dotenv/pull/568))

## [13.0.1](https://github.com/motdotla/dotenv/compare/v13.0.0...v13.0.1) (2022-01-16)

### Changed

* Hide comments and newlines from debug output ([#404](https://github.com/motdotla/dotenv/pull/404))

## [13.0.0](https://github.com/motdotla/dotenv/compare/v12.0.4...v13.0.0) (2022-01-16)

### Added

* _Breaking:_ Add type file for `config.js` ([#539](https://github.com/motdotla/dotenv/pull/539))

## [12.0.4](https://github.com/motdotla/dotenv/compare/v12.0.3...v12.0.4) (2022-01-16)

### Changed

* README updates
* Minor order adjustment to package json format

## [12.0.3](https://github.com/motdotla/dotenv/compare/v12.0.2...v12.0.3) (2022-01-15)

### Changed

* Simplified jsdoc for consistency across editors

## [12.0.2](https://github.com/motdotla/dotenv/compare/v12.0.1...v12.0.2) (2022-01-15)

### Changed

* Improve embedded jsdoc type documentation

## [12.0.1](https://github.com/motdotla/dotenv/compare/v12.0.0...v12.0.1) (2022-01-15)

### Changed

* README updates and clarifications

## [12.0.0](https://github.com/motdotla/dotenv/compare/v11.0.0...v12.0.0) (2022-01-15)

### Removed

- _Breaking:_ drop support for Flow static type checker ([#584](https://github.com/motdotla/dotenv/pull/584))

### Changed

- Move types/index.d.ts to lib/main.d.ts ([#585](https://github.com/motdotla/dotenv/pull/585))
- Typescript cleanup ([#587](https://github.com/motdotla/dotenv/pull/587))
- Explicit typescript inclusion in package.json ([#566](https://github.com/motdotla/dotenv/pull/566))

## [11.0.0](https://github.com/motdotla/dotenv/compare/v10.0.0...v11.0.0) (2022-01-11)

### Changed

- _Breaking:_ drop support for Node v10 ([#558](https://github.com/motdotla/dotenv/pull/558))
- Patch debug option ([#550](https://github.com/motdotla/dotenv/pull/550))

## [10.0.0](https://github.com/motdotla/dotenv/compare/v9.0.2...v10.0.0) (2021-05-20)

### Added

- Add generic support to parse function
- Allow for import "dotenv/config.js"
- Add support to resolve home directory in path via ~

## [9.0.2](https://github.com/motdotla/dotenv/compare/v9.0.1...v9.0.2) (2021-05-10)

### Changed

- Support windows newlines with debug mode

## [9.0.1](https://github.com/motdotla/dotenv/compare/v9.0.0...v9.0.1) (2021-05-08)

### Changed

- Updates to README

## [9.0.0](https://github.com/motdotla/dotenv/compare/v8.6.0...v9.0.0) (2021-05-05)

### Changed

- _Breaking:_ drop support for Node v8

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

- _Breaking:_ drop support for Node v8 (mistake to be released as minor bump. later bumped to 9.0.0. see above.)

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
